import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const ASSETS_DIR = path.join(ROOT, "assets");
const LANDING_ASSETS = path.resolve(ROOT, "..", "landing", "public", "assets");

const SANS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";
const MONO = "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace";

const PALETTES = {
  light: {
    bg: "#F5F4EF",
    surface: "#ECEBE4",
    studio: "#E9E8E0",
    nodeBg: "#FAF9F5",
    border: "#DCDDD7",
    dot: "#CFCFC7",
    fg: "#20252C",
    navy: "#172A45",
    navyText: "#FAF9F5",
    blue: "#4778A9",
    muted: "#6E757D",
    bezel: "#232931",
    winBar: "#F2F1EC",
    shadow: "rgba(23, 42, 69, 0.14)",
  },
  dark: {
    bg: "#10161C",
    surface: "#17202A",
    studio: "#131B24",
    nodeBg: "#16202B",
    border: "#2A333D",
    dot: "#26313C",
    fg: "#E9E8E2",
    navy: "#9FB6D6",
    navyText: "#10161C",
    blue: "#7FA8D0",
    muted: "#8F98A2",
    bezel: "#2C3642",
    winBar: "#1B2530",
    shadow: "rgba(0, 0, 0, 0.45)",
  },
};

function esc(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function toDataUri(relPath) {
  const full = path.join(LANDING_ASSETS, relPath);
  const buf = fs.readFileSync(full);
  return `data:image/jpeg;base64,${buf.toString("base64")}`;
}

function buildMastheadSvg(avatarUri, mode) {
  const p = PALETTES[mode];
  const W = 880;
  const H = 178;

  const metaItems = [
    { k: "EDUCATION", v: "S1 Informatika · GPA 3.77" },
    { k: "CREDENTIAL", v: "BNSP Junior Coder (2026)" },
    { k: "PORTFOLIO", v: "arya-wiguna.my.id" },
  ];

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="Arya Wiguna — Software Engineer">
  <defs>
    <clipPath id="avatar-clip">
      <circle cx="62" cy="106" r="34" />
    </clipPath>
  </defs>

  <rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="12" fill="${p.bg}" stroke="${p.border}" />
  <rect x="1" y="1" width="${W - 2}" height="34" rx="11" fill="${p.surface}" />
  <rect x="1" y="24" width="${W - 2}" height="11" fill="${p.surface}" />
  <line x1="0" y1="35.5" x2="${W}" y2="35.5" stroke="${p.border}" />
  <line x1="606" y1="35.5" x2="606" y2="${H}" stroke="${p.border}" />

  <text x="24" y="22" fill="${p.blue}" font-family="${MONO}" font-size="10.5" font-weight="700">AW.</text>
  <text x="52" y="22" fill="${p.muted}" font-family="${MONO}" font-size="10" font-weight="600" letter-spacing="1.2">PROFILE INDEX · @ARYAWGNA</text>
  <text x="${W - 24}" y="22" text-anchor="end" fill="${p.muted}" font-family="${MONO}" font-size="10" letter-spacing="1">BOGOR, ID · 06°35′S 106°48′E</text>

  <circle cx="62" cy="106" r="36" fill="${p.surface}" stroke="${p.border}" stroke-width="1.5" />
  <image href="${avatarUri}" x="28" y="72" width="68" height="68" preserveAspectRatio="xMidYMid slice" clip-path="url(#avatar-clip)" />

  <text x="116" y="88" fill="${p.fg}" font-family="${SANS}" font-size="28" font-weight="700" letter-spacing="-0.6">Arya <tspan fill="${p.navy}">Wiguna</tspan></text>
  <text x="116" y="111" fill="${p.muted}" font-family="${SANS}" font-size="13.5" font-weight="500">Software Engineer — Full-Stack Web &amp; Mobile (Flutter)</text>

  <line x1="116" y1="126" x2="116" y2="134" stroke="${p.border}" />
  <line x1="116" y1="130" x2="576" y2="130" stroke="${p.border}" />
  <line x1="116" y1="130" x2="296" y2="130" stroke="${p.navy}" stroke-width="1.5" />
  <line x1="576" y1="126" x2="576" y2="134" stroke="${p.border}" />

  <text x="116" y="150" fill="${p.muted}" font-family="${MONO}" font-size="10.5">Flutter · Next.js 15 · Laravel 11 · Bun · Docker Compose · Nginx</text>

  ${metaItems
    .map((m, i) => {
      const y = 60 + i * 38;
      return `
  <g transform="translate(628, ${y})">
    <text x="0" y="0" fill="${p.muted}" font-family="${MONO}" font-size="9" font-weight="600" letter-spacing="1">${esc(m.k)}</text>
    <text x="0" y="15" fill="${i === 2 ? p.blue : p.fg}" font-family="${MONO}" font-size="11.5" font-weight="600">${esc(m.v)}</text>
  </g>`;
    })
    .join("")}
</svg>
`;
}

function renderPhone(id, uri, x, y, w, h, p) {
  const rx = Math.round(w * 0.12);
  const pad = 3;
  return `
  <g>
    <rect x="${x + 2}" y="${y + 5}" width="${w}" height="${h}" rx="${rx}" fill="${p.shadow}" />
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${p.bezel}" stroke="${p.border}" stroke-width="1" />
    <clipPath id="${id}">
      <rect x="${x + pad}" y="${y + pad}" width="${w - pad * 2}" height="${h - pad * 2}" rx="${rx - 2}" />
    </clipPath>
    <image href="${uri}" x="${x + pad}" y="${y + pad}" width="${w - pad * 2}" height="${h - pad * 2}" preserveAspectRatio="xMidYMin slice" clip-path="url(#${id})" />
  </g>`;
}

function renderBrowser(id, uri, label, x, y, w, h, p) {
  const barH = 18;
  const imgH = h - barH;
  return `
  <g>
    <rect x="${x + 3}" y="${y + 6}" width="${w}" height="${h}" rx="8" fill="${p.shadow}" />
    <clipPath id="${id}-outer">
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" />
    </clipPath>
    <g clip-path="url(#${id}-outer)">
      <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${p.bg}" />
      <rect x="${x}" y="${y}" width="${w}" height="${barH}" fill="${p.winBar}" />
      <line x1="${x}" y1="${y + barH}" x2="${x + w}" y2="${y + barH}" stroke="${p.border}" />
      <circle cx="${x + 11}" cy="${y + 9}" r="2.6" fill="${p.border}" />
      <circle cx="${x + 20}" cy="${y + 9}" r="2.6" fill="${p.border}" />
      <circle cx="${x + 29}" cy="${y + 9}" r="2.6" fill="${p.border}" />
      <text x="${x + 40}" y="${y + 12.2}" fill="${p.muted}" font-family="${MONO}" font-size="8.5">${esc(label)}</text>
      <image href="${uri}" x="${x}" y="${y + barH}" width="${w}" height="${imgH}" preserveAspectRatio="xMidYMid slice" />
    </g>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="none" stroke="${p.border}" stroke-width="1.2" />
  </g>`;
}

function buildProjectSvg(spec, mode) {
  const p = PALETTES[mode];
  const W = 880;
  const H = 308;
  const NODE_W = 116;
  const NODE_H = 44;

  const leftPreview =
    spec.kind === "mobile"
      ? [
          renderPhone(`${spec.id}-l`, spec.images.left, 44, 66, 94, 206, p),
          renderPhone(`${spec.id}-r`, spec.images.right, 302, 66, 94, 206, p),
          renderPhone(`${spec.id}-c`, spec.images.center, 160, 50, 120, 240, p),
        ].join("")
      : [
          renderBrowser(
            `${spec.id}-back`,
            spec.images.back,
            spec.backLabel,
            26,
            54,
            306,
            190,
            p
          ),
          renderBrowser(
            `${spec.id}-front`,
            spec.images.front,
            spec.frontLabel,
            98,
            92,
            316,
            196,
            p
          ),
        ].join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(spec.aria)}">
  <defs>
    <pattern id="${spec.id}-dots" width="14" height="14" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1" fill="${p.dot}" />
    </pattern>
    <clipPath id="${spec.id}-studio-clip">
      <path d="M 1 35.5 H 440 V 307 H 12 A 11 11 0 0 1 1 296 Z" />
    </clipPath>
  </defs>

  <rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="12" fill="${p.bg}" stroke="${p.border}" />
  <rect x="1" y="1" width="${W - 2}" height="34" rx="11" fill="${p.surface}" />
  <rect x="1" y="24" width="${W - 2}" height="11" fill="${p.surface}" />

  <g clip-path="url(#${spec.id}-studio-clip)">
    <rect x="1" y="35.5" width="439" height="272" fill="${p.studio}" />
    <rect x="1" y="35.5" width="439" height="272" fill="url(#${spec.id}-dots)" />
    ${leftPreview}
  </g>

  <line x1="0" y1="35.5" x2="${W}" y2="35.5" stroke="${p.border}" />
  <line x1="440" y1="0.5" x2="440" y2="${H - 0.5}" stroke="${p.border}" />
  <line x1="440" y1="246.5" x2="${W}" y2="246.5" stroke="${p.border}" />

  <text x="20" y="22" fill="${p.muted}" font-family="${MONO}" font-size="10" font-weight="600" letter-spacing="1.1">${esc(spec.leftHeader)}</text>
  <text x="458" y="22" fill="${p.muted}" font-family="${MONO}" font-size="10" font-weight="600" letter-spacing="1.1">${esc(spec.rightHeader)}</text>
  <text x="${W - 20}" y="22" text-anchor="end" fill="${p.blue}" font-family="${MONO}" font-size="10" font-weight="600">${esc(spec.indexLabel)}</text>

  <g transform="translate(454, 46)">
    ${spec.edges
      .map(
        (e) =>
          `<path d="${e.d}" fill="none" stroke="${e.active ? p.blue : p.border}" stroke-width="${e.active ? 1.7 : 1.3}" stroke-linecap="round" stroke-linejoin="round" />`
      )
      .join("\n    ")}

    ${spec.nodes
      .map((n) => {
        const active = n.id === spec.primaryNode;
        const fill = active ? p.navy : p.nodeBg;
        const stroke = active ? p.navy : n.connected ? p.blue : p.border;
        const titleColor = active ? p.navyText : p.fg;
        const subColor = active ? p.navyText : p.muted;
        return `
    <g transform="translate(${n.x}, ${n.y})">
      <rect width="${NODE_W}" height="${NODE_H}" rx="7" fill="${fill}" stroke="${stroke}" stroke-width="${active ? 1.6 : 1.2}" />
      <text x="10" y="18" fill="${titleColor}" font-family="${MONO}" font-size="10.8" font-weight="600">${esc(n.title)}</text>
      <text x="10" y="33" fill="${subColor}" fill-opacity="${active ? 0.85 : 1}" font-family="${MONO}" font-size="9.2">${esc(n.sub)}</text>
    </g>`;
      })
      .join("")}
  </g>

  ${spec.metrics
    .map((m, idx) => {
      const x = 458 + idx * 142;
      return `
  ${idx > 0 ? `<line x1="${x - 12}" y1="256" x2="${x - 12}" y2="298" stroke="${p.border}" />` : ""}
  <g transform="translate(${x}, 264)">
    <text x="0" y="0" fill="${p.muted}" font-family="${MONO}" font-size="9.2" letter-spacing="0.6">${esc(m.label)}</text>
    <text x="0" y="17" fill="${p.fg}" font-family="${MONO}" font-size="13" font-weight="700">${esc(m.value)}</text>
    <text x="0" y="30" fill="${p.muted}" font-family="${SANS}" font-size="10">${esc(m.detail)}</text>
  </g>`;
    })
    .join("")}
</svg>
`;
}

function main() {
  fs.mkdirSync(ASSETS_DIR, { recursive: true });

  const avatarUri = toDataUri("avatar.jpg");
  fs.writeFileSync(path.join(ASSETS_DIR, "masthead-light.svg"), buildMastheadSvg(avatarUri, "light"));
  fs.writeFileSync(path.join(ASSETS_DIR, "masthead-dark.svg"), buildMastheadSvg(avatarUri, "dark"));

  const projects = [
    {
      id: "project-simaru",
      kind: "mobile",
      aria: "SIMARU Mobile App interface and system architecture",
      leftHeader: "MOBILE INTERFACE · RS UMMI BOGOR",
      rightHeader: "SYSTEM ARCHITECTURE · FLUTTER & FCM",
      indexLabel: "01 / 03",
      images: {
        left: toDataUri("projects/simaru-stock.jpg"),
        center: toDataUri("projects/simaru-home.jpg"),
        right: toDataUri("projects/simaru-notif.jpg"),
      },
      primaryNode: "hub",
      nodes: [
        { id: "scanner", x: 0, y: 30, title: "QR Scanner", sub: "mobile_scanner", connected: true },
        { id: "keystore", x: 0, y: 118, title: "Secure Store", sub: "Keystore / Keychain", connected: true },
        { id: "hub", x: 148, y: 74, title: "Flutter State", sub: "Provider · Audit", connected: true },
        { id: "api", x: 296, y: 30, title: "SIMARU API", sub: "REST · Bearer", connected: true },
        { id: "fcm", x: 296, y: 118, title: "Firebase FCM", sub: "Token Sync", connected: true },
      ],
      edges: [
        { d: "M 116 52 H 132 V 89 H 148", active: true },
        { d: "M 116 140 H 132 V 103 H 148", active: true },
        { d: "M 264 89 H 280 V 52 H 296", active: true },
        { d: "M 264 103 H 280 V 140 H 296", active: true },
      ],
      metrics: [
        { label: "COMMITS", value: "71", detail: "Public history (dev)" },
        { label: "MODULES", value: "6 Core", detail: "Scan, Opname, FCM" },
        { label: "TARGETS", value: "Android & iOS", detail: "Encrypted session" },
      ],
    },
    {
      id: "project-skyboard",
      kind: "desktop",
      aria: "Digital Skyboard Announcement interface and Docker architecture",
      leftHeader: "FIDS TERMINAL & ADMIN UI",
      rightHeader: "DOCKER TOPOLOGY · SKYBOARD-NET",
      indexLabel: "02 / 03",
      backLabel: "skyboard / admin-dashboard",
      frontLabel: "skyboard / public-fids-display",
      images: {
        back: toDataUri("projects/skyboard-admin.jpg"),
        front: toDataUri("projects/skyboard-main.jpg"),
      },
      primaryNode: "gateway",
      nodes: [
        { id: "gateway", x: 0, y: 74, title: "Nginx :443", sub: "gateway-skyboard", connected: true },
        { id: "ui", x: 148, y: 8, title: "Next.js :3000", sub: "ui-skyboard", connected: true },
        { id: "api", x: 148, y: 74, title: "Laravel :8000", sub: "Sanctum REST API", connected: true },
        { id: "assets", x: 148, y: 140, title: "Static :80", sub: "assets-skyboard", connected: true },
        { id: "db", x: 296, y: 74, title: "MySQL :3306", sub: "database-skyboard", connected: false },
      ],
      edges: [
        { d: "M 116 88 H 132 V 30 H 148", active: true },
        { d: "M 116 96 H 148", active: true },
        { d: "M 116 104 H 132 V 162 H 148", active: true },
        { d: "M 264 96 H 296", active: false },
      ],
      metrics: [
        { label: "TOPOLOGY", value: "5 Services", detail: "Docker Compose" },
        { label: "SYNC CYCLE", value: "30s Poll", detail: "Auto boarding chime" },
        { label: "MEDIA", value: "10 Slots", detail: "Nginx asset container" },
      ],
    },
    {
      id: "project-streamely",
      kind: "desktop",
      aria: "StreamEly VOD catalog interface and Bun proxy architecture",
      leftHeader: "SVELTE VOD CATALOG & PLAYER",
      rightHeader: "REVERSE PROXY & IN-MEMORY INDEX",
      indexLabel: "03 / 03",
      backLabel: "streamely / multi-gateway-player",
      frontLabel: "streamely / catalog-browser",
      images: {
        back: toDataUri("projects/streamely-player.jpg"),
        front: toDataUri("projects/streamely-home.jpg"),
      },
      primaryNode: "proxy",
      nodes: [
        { id: "tunnel", x: 0, y: 74, title: "CF Tunnel", sub: "HTTPS Edge", connected: true },
        { id: "proxy", x: 148, y: 74, title: "Bun :8000", sub: "proxy.ts router", connected: true },
        { id: "svelte", x: 296, y: 8, title: "Svelte :5173", sub: "Jaccard UI", connected: true },
        { id: "elysia", x: 296, y: 74, title: "Elysia :3000", sub: "15k+ RAM Map", connected: true },
        { id: "sources", x: 296, y: 140, title: "TVmaze · OMDB", sub: "2 Upstream APIs", connected: false },
      ],
      edges: [
        { d: "M 116 96 H 148", active: true },
        { d: "M 264 88 H 280 V 30 H 296", active: true },
        { d: "M 264 96 H 296", active: true },
        { d: "M 354 118 V 140", active: false },
      ],
      metrics: [
        { label: "IN-MEMORY", value: "15,000+", detail: "Shows & movie records" },
        { label: "SOURCES", value: "2 APIs", detail: "TVmaze + OMDB" },
        { label: "PLAYBACK", value: "3 Gateways", detail: "Fallback embed switch" },
      ],
    },
  ];

  for (const spec of projects) {
    fs.writeFileSync(path.join(ASSETS_DIR, `${spec.id}-light.svg`), buildProjectSvg(spec, "light"));
    fs.writeFileSync(path.join(ASSETS_DIR, `${spec.id}-dark.svg`), buildProjectSvg(spec, "dark"));
  }

  console.log("Generated masthead and 3 project showcase SVG pairs (light + dark).");
}

main();

