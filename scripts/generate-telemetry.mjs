import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const ASSETS_DIR = path.join(ROOT, "assets");

const USERNAME = process.env.GITHUB_USER || "AryaWgna";
const TOKEN = process.env.GITHUB_TOKEN || "";

const EXCLUDED_LANGS = new Set([
  "CMake",
  "C++",
  "C",
  "Swift",
  "Objective-C",
  "Kotlin",
  "HTML",
  "CSS",
  "SCSS",
  "Batchfile",
  "PowerShell",
]);

const PALETTES = {
  light: {
    bg: "#F5F4EF",
    surface: "#ECEBE4",
    border: "#DCDDD7",
    fg: "#20252C",
    navy: "#172A45",
    blue: "#4778A9",
    muted: "#6E757D",
    heat: ["#E5E4DC", "#C6D8EA", "#89AED2", "#4778A9", "#172A45"],
    langs: ["#172A45", "#356393", "#4F81B3", "#6C99C6", "#8FB3D7", "#AEBFD1"],
  },
  dark: {
    bg: "#10161C",
    surface: "#17202A",
    border: "#2A333D",
    fg: "#E9E8E2",
    navy: "#9FB6D6",
    blue: "#7FA8D0",
    muted: "#8F98A2",
    heat: ["#1A222B", "#21364C", "#32567A", "#5B8CBF", "#9FB6D6"],
    langs: ["#9FB6D6", "#7FA8D0", "#5F8BB8", "#487099", "#37587A", "#5C6F84"],
  },
};

const SANS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";
const MONO = "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace";

function esc(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function fmtBytes(bytes) {
  if (bytes >= 1_000_000) return `${(bytes / 1_000_000).toFixed(2)} MB`;
  if (bytes >= 1_000) return `${Math.round(bytes / 1_000)} KB`;
  return `${bytes} B`;
}

async function fetchViaGraphQL() {
  if (!TOKEN) return null;
  const query = `
    query($login: String!) {
      user(login: $login) {
        createdAt
        followers { totalCount }
        allRepos: repositories(ownerAffiliations: OWNER, privacy: PUBLIC) {
          totalCount
        }
        ownRepos: repositories(
          first: 100
          ownerAffiliations: OWNER
          privacy: PUBLIC
          isFork: false
        ) {
          totalCount
          nodes {
            stargazerCount
            languages(first: 12, orderBy: { field: SIZE, direction: DESC }) {
              edges {
                size
                node { name }
              }
            }
          }
        }
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }
  `;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "User-Agent": "aryawgna-profile-telemetry",
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables: { login: USERNAME } }),
  });

  if (!res.ok) return null;
  const json = await res.json();
  const u = json?.data?.user;
  if (!u) return null;

  const langTotals = new Map();
  let stars = 0;

  for (const r of u.ownRepos.nodes) {
    stars += r.stargazerCount || 0;
    for (const edge of r.languages?.edges || []) {
      const name = edge.node?.name;
      if (!name || EXCLUDED_LANGS.has(name)) continue;
      langTotals.set(name, (langTotals.get(name) || 0) + edge.size);
    }
  }

  const cal = u.contributionsCollection.contributionCalendar;
  const days = [];
  for (const w of cal.weeks) {
    for (const d of w.contributionDays) {
      const c = d.contributionCount;
      const level = c === 0 ? 0 : c <= 2 ? 1 : c <= 6 ? 2 : c <= 12 ? 3 : 4;
      days.push({ date: d.date, count: c, level });
    }
  }

  return {
    createdAt: u.createdAt,
    publicRepos: u.allRepos.totalCount,
    ownRepos: u.ownRepos.totalCount,
    followers: u.followers.totalCount,
    stars,
    langTotals,
    lastYearContribs: cal.totalContributions,
    days,
  };
}

async function fetchPublicContributions() {
  const [lastRes, allRes] = await Promise.all([
    fetch(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`).then((r) =>
      r.ok ? r.json() : null
    ),
    fetch(`https://github-contributions-api.jogruber.de/v4/${USERNAME}`).then((r) =>
      r.ok ? r.json() : null
    ),
  ]);

  const allTotal = allRes?.total
    ? Object.values(allRes.total).reduce((acc, v) => acc + (typeof v === "number" ? v : 0), 0)
    : null;

  return {
    lastYear: lastRes?.total?.lastYear ?? 0,
    allTime: allTotal,
    days: Array.isArray(lastRes?.contributions) ? lastRes.contributions : [],
  };
}

async function fetchViaRestFallback() {
  const headers = {
    "User-Agent": "aryawgna-profile-telemetry",
    Accept: "application/vnd.github+json",
  };
  if (TOKEN) headers.Authorization = `Bearer ${TOKEN}`;

  const [userRes, reposRes] = await Promise.all([
    fetch(`https://api.github.com/users/${USERNAME}`, { headers }),
    fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`, { headers }),
  ]);
  if (!userRes.ok || !reposRes.ok) {
    throw new Error(`GitHub REST failed (${userRes.status}/${reposRes.status})`);
  }
  const user = await userRes.json();
  const repos = await reposRes.json();
  const ownRepos = repos.filter((r) => !r.fork);
  const stars = ownRepos.reduce((s, r) => s + (r.stargazers_count || 0), 0);

  const langTotals = new Map();
  for (const r of ownRepos) {
    if (!r.size) continue;
    const lRes = await fetch(r.languages_url, { headers });
    if (!lRes.ok) continue;
    const langs = await lRes.json();
    for (const [lang, bytes] of Object.entries(langs)) {
      if (typeof bytes !== "number" || EXCLUDED_LANGS.has(lang)) continue;
      langTotals.set(lang, (langTotals.get(lang) || 0) + bytes);
    }
  }

  return {
    createdAt: user.created_at,
    publicRepos: user.public_repos ?? ownRepos.length,
    ownRepos: ownRepos.length,
    followers: user.followers ?? 0,
    stars,
    langTotals,
    lastYearContribs: 0,
    days: [],
  };
}

function buildTelemetrySvg(data, mode) {
  const p = PALETTES[mode];
  const W = 880;
  const H = 212;

  const totalLangBytes = data.languages.reduce((s, l) => s + l.bytes, 0) || 1;
  const barX = 436;
  const barY = 58;
  const barW = 416;
  const barH = 10;

  let curX = barX;
  const segments = data.languages.map((l, idx) => {
    const rawW = (l.bytes / totalLangBytes) * barW;
    const w =
      idx === data.languages.length - 1
        ? Math.max(2, barX + barW - curX)
        : Math.max(3, rawW - 1.5);
    const seg = { x: curX, w, color: p.langs[idx % p.langs.length] };
    curX += w + 1.5;
    return seg;
  });

  const statsRows = [
    {
      label: "ORIGINAL REPOSITORIES",
      value: `${data.ownRepos}`,
      detail: `${data.publicRepos} public total`,
    },
    {
      label: "CONTRIBUTIONS",
      value: `${data.allTimeContribs || data.lastYearContribs}`,
      detail: `${data.lastYearContribs} in last 12 mos`,
    },
    {
      label: "COMMUNITY & STARS",
      value: `${data.followers} / ${data.stars}`,
      detail: "followers · repo stars",
    },
    {
      label: "ACTIVE SINCE",
      value: data.joinedLabel,
      detail: "Bogor, ID (UTC+7)",
    },
  ];

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="GitHub Telemetry for ${esc(USERNAME)}">
  <rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="12" fill="${p.bg}" stroke="${p.border}" />
  <rect x="1" y="1" width="${W - 2}" height="34" rx="11" fill="${p.surface}" />
  <rect x="1" y="24" width="${W - 2}" height="11" fill="${p.surface}" />
  <line x1="0" y1="35.5" x2="${W}" y2="35.5" stroke="${p.border}" />
  <line x1="412" y1="35.5" x2="412" y2="${H}" stroke="${p.border}" />

  <text x="22" y="22" fill="${p.muted}" font-family="${MONO}" font-size="10" font-weight="600" letter-spacing="1.2">GITHUB TELEMETRY · @${esc(USERNAME.toUpperCase())}</text>
  <text x="436" y="22" fill="${p.muted}" font-family="${MONO}" font-size="10" font-weight="600" letter-spacing="1.2">LANGUAGE DISTRIBUTION · SOURCE BYTES</text>
  <text x="${W - 22}" y="22" text-anchor="end" fill="${p.blue}" font-family="${MONO}" font-size="10">AUTO-SYNCED</text>

  ${statsRows
    .map((row, idx) => {
      const col = idx % 2;
      const r = Math.floor(idx / 2);
      const x = 22 + col * 194;
      const y = 62 + r * 74;
      return `
  <g transform="translate(${x}, ${y})">
    <line x1="0" y1="2" x2="0" y2="48" stroke="${p.blue}" stroke-width="2" />
    <text x="12" y="12" fill="${p.muted}" font-family="${MONO}" font-size="9.5" letter-spacing="0.8">${esc(row.label)}</text>
    <text x="12" y="34" fill="${p.fg}" font-family="${MONO}" font-size="19" font-weight="700">${esc(row.value)}</text>
    <text x="12" y="49" fill="${p.muted}" font-family="${SANS}" font-size="11">${esc(row.detail)}</text>
  </g>`;
    })
    .join("")}

  <clipPath id="lang-bar-clip">
    <rect x="${barX}" y="${barY}" width="${barW}" height="${barH}" rx="4" />
  </clipPath>
  <g clip-path="url(#lang-bar-clip)">
    <rect x="${barX}" y="${barY}" width="${barW}" height="${barH}" fill="${p.surface}" />
    ${segments
      .map(
        (s) =>
          `<rect x="${s.x.toFixed(1)}" y="${barY}" width="${Math.max(1, s.w).toFixed(1)}" height="${barH}" fill="${s.color}" />`
      )
      .join("\n    ")}
  </g>

  ${data.languages
    .map((l, idx) => {
      const col = idx % 2;
      const row = Math.floor(idx / 2);
      const x = 436 + col * 212;
      const y = 94 + row * 36;
      const pct = ((l.bytes / totalLangBytes) * 100).toFixed(1);
      const color = p.langs[idx % p.langs.length];
      return `
  <g transform="translate(${x}, ${y})">
    <rect x="0" y="-8" width="8" height="8" rx="2" fill="${color}" />
    <text x="14" y="0" fill="${p.fg}" font-family="${SANS}" font-size="12" font-weight="600">${esc(l.name)}</text>
    <text x="196" y="0" text-anchor="end" fill="${p.navy}" font-family="${MONO}" font-size="11" font-weight="600">${pct}%</text>
    <text x="14" y="14" fill="${p.muted}" font-family="${MONO}" font-size="10">${esc(fmtBytes(l.bytes))}</text>
  </g>`;
    })
    .join("")}
</svg>
`;
}

function buildContributionsSvg(contrib, mode) {
  const p = PALETTES[mode];
  const W = 880;
  const H = 162;

  const days = contrib.days || [];
  const weeks = [];
  let currentWeek = [];

  if (days.length > 0) {
    const firstDow = new Date(`${days[0].date}T00:00:00Z`).getUTCDay();
    for (let i = 0; i < firstDow; i++) currentWeek.push(null);
    for (const d of days) {
      currentWeek.push(d);
      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    }
    if (currentWeek.length > 0) weeks.push(currentWeek);
  }

  const recentWeeks = weeks.slice(-53);
  const cell = 11;
  const gap = 3.6;
  const step = cell + gap;
  const gridX = 56;
  const gridY = 58;

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthLabels = [];
  let lastMonth = -1;

  recentWeeks.forEach((wk, wIdx) => {
    const firstValid = wk.find(Boolean);
    if (!firstValid) return;
    const m = new Date(`${firstValid.date}T00:00:00Z`).getUTCMonth();
    if (m !== lastMonth) {
      if (
        monthLabels.length === 0 ||
        wIdx - monthLabels[monthLabels.length - 1].wIdx >= 3
      ) {
        monthLabels.push({ label: months[m], x: gridX + wIdx * step, wIdx });
      }
      lastMonth = m;
    }
  });

  const cellsSvg = [];
  recentWeeks.forEach((wk, wIdx) => {
    for (let dow = 0; dow < 7; dow++) {
      const item = wk[dow];
      if (!item) continue;
      const lvl = Math.max(0, Math.min(4, item.level ?? 0));
      const x = (gridX + wIdx * step).toFixed(1);
      const y = (gridY + dow * step).toFixed(1);
      cellsSvg.push(
        `<rect x="${x}" y="${y}" width="${cell}" height="${cell}" rx="2.4" fill="${p.heat[lvl]}" />`
      );
    }
  });

  const legendX = W - 148;
  const legendY = 18;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${contrib.lastYear} GitHub contributions in the last 12 months">
  <rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="12" fill="${p.bg}" stroke="${p.border}" />
  <rect x="1" y="1" width="${W - 2}" height="32" rx="11" fill="${p.surface}" />
  <rect x="1" y="22" width="${W - 2}" height="11" fill="${p.surface}" />
  <line x1="0" y1="33.5" x2="${W}" y2="33.5" stroke="${p.border}" />

  <text x="22" y="21" fill="${p.muted}" font-family="${MONO}" font-size="10" font-weight="600" letter-spacing="1.2">CONTRIBUTION ACTIVITY · ${contrib.lastYear} COMMITS &amp; UPDATES (LAST 12M)</text>

  <text x="${legendX - 8}" y="${legendY + 3}" text-anchor="end" fill="${p.muted}" font-family="${MONO}" font-size="9.5">Less</text>
  ${p.heat
    .map(
      (c, i) =>
        `<rect x="${legendX + i * 14}" y="${legendY - 6}" width="10" height="10" rx="2" fill="${c}" />`
    )
    .join("")}
  <text x="${legendX + 76}" y="${legendY + 3}" fill="${p.muted}" font-family="${MONO}" font-size="9.5">More</text>

  ${monthLabels
    .map(
      (m) =>
        `<text x="${m.x.toFixed(1)}" y="50" fill="${p.muted}" font-family="${MONO}" font-size="9.5">${m.label}</text>`
    )
    .join("\n  ")}

  <text x="22" y="${(gridY + 1 * step + 8.5).toFixed(1)}" fill="${p.muted}" font-family="${MONO}" font-size="9.5">Mon</text>
  <text x="22" y="${(gridY + 3 * step + 8.5).toFixed(1)}" fill="${p.muted}" font-family="${MONO}" font-size="9.5">Wed</text>
  <text x="22" y="${(gridY + 5 * step + 8.5).toFixed(1)}" fill="${p.muted}" font-family="${MONO}" font-size="9.5">Fri</text>

  ${cellsSvg.join("\n  ")}
</svg>
`;
}

async function main() {
  fs.mkdirSync(ASSETS_DIR, { recursive: true });

  const [gql, pubContrib] = await Promise.all([
    fetchViaGraphQL().catch(() => null),
    fetchPublicContributions().catch(() => ({
      lastYear: 0,
      allTime: null,
      days: [],
    })),
  ]);

  const base = gql || (await fetchViaRestFallback());

  const sortedLangs = [...base.langTotals.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([name, bytes]) => ({ name, bytes }));

  const topFive = sortedLangs.slice(0, 5);
  const restBytes = sortedLangs.slice(5).reduce((s, x) => s + x.bytes, 0);
  if (restBytes > 0) {
    const restNames = sortedLangs
      .slice(5, 7)
      .map((x) => x.name)
      .join(" · ");
    topFive.push({ name: restNames || "Other", bytes: restBytes });
  }

  const contrib = {
    lastYear: base.lastYearContribs || pubContrib.lastYear || 0,
    allTime: pubContrib.allTime || base.lastYearContribs || 0,
    days: base.days?.length ? base.days : pubContrib.days,
  };

  const createdDate = new Date(base.createdAt || "2024-01-11T00:00:00Z");
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const joinedLabel = `${months[createdDate.getUTCMonth()]} ${createdDate.getUTCFullYear()}`;

  const telemetryData = {
    publicRepos: base.publicRepos,
    ownRepos: base.ownRepos,
    followers: base.followers,
    stars: base.stars,
    lastYearContribs: contrib.lastYear,
    allTimeContribs: contrib.allTime,
    joinedLabel,
    languages: topFive,
  };

  fs.writeFileSync(
    path.join(ASSETS_DIR, "telemetry-light.svg"),
    buildTelemetrySvg(telemetryData, "light")
  );
  fs.writeFileSync(
    path.join(ASSETS_DIR, "telemetry-dark.svg"),
    buildTelemetrySvg(telemetryData, "dark")
  );
  fs.writeFileSync(
    path.join(ASSETS_DIR, "contributions-light.svg"),
    buildContributionsSvg(contrib, "light")
  );
  fs.writeFileSync(
    path.join(ASSETS_DIR, "contributions-dark.svg"),
    buildContributionsSvg(contrib, "dark")
  );

  console.log(
    `Generated telemetry & contributions SVGs: repos=${telemetryData.ownRepos}/${telemetryData.publicRepos}, contribs=${contrib.lastYear} (all=${contrib.allTime}), langs=${topFive.map((x) => x.name).join(", ")}`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
