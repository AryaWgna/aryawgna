<div id="top" align="center">

<a href="https://arya-wiguna.my.id">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./assets/masthead-dark.svg" />
    <source media="(prefers-color-scheme: light)" srcset="./assets/masthead-light.svg" />
    <img alt="Arya Wiguna — Software Engineer (Full-Stack Web &amp; Mobile)" src="./assets/masthead-light.svg" width="100%" />
  </picture>
</a>

<sub><strong>English</strong> · <a href="README.id.md">Bahasa Indonesia</a> &nbsp;|&nbsp; <a href="#about">About</a> · <a href="#experience">Experience</a> · <a href="#featured-work">Featured Work</a> · <a href="#technical-stack">Stack</a> · <a href="#interactive-features">Interactive Features</a> · <a href="#credentials">Credentials</a> · <a href="#contact">Contact</a></sub>

</div>

---

## About

Informatics Engineering graduate (**S1 Teknik Informatika**, Universitas Binaniaga Indonesia — GPA **3.77 / 4.00**) and **BNSP-certified Junior Coder** based in Bogor, Indonesia. I build field-tested mobile applications in **Flutter** alongside multi-service web backends with **Next.js 15**, **Laravel 11**, and **Bun / Elysia.js**.

- **Hospital Field Engineering:** 5-month IT Support & Mobile Developer internship at **RS UMMI Bogor** (Feb – Jul 2025), building internal mobile tooling for QR-based medical equipment inspection and room-by-room stock opname audits.
- **Architectural Discipline:** Explicit service boundaries, normalized relational schemas, and predictable state management without unnecessary framework layers.
- **Direct Evidence:** Every system and credential below links directly to its public source repository, official verification page, or scanned certificate PDF.

---

## Experience

- **RS UMMI Bogor** — Mobile App Developer (SIMARU) & IT Support Intern (Feb – Jul 2025)
- **Digital Skyboard Announcement** — Airport flight information display (FIDS) across 5 Docker containers
- **StreamEly** — Self-hosted VOD metadata aggregator & multi-gateway player

---

## Featured Work

### 01 · SIMARU Mobile App — RS UMMI Bogor
**Hospital Medical Asset Inspection & Push Notification App** · `Flutter` `Dart` `Firebase FCM` `REST API`

<p>
  <a href="https://arya-wiguna.my.id/work/simaru-mobile-app">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./assets/project-simaru-dark.svg" />
      <source media="(prefers-color-scheme: light)" srcset="./assets/project-simaru-light.svg" />
      <img alt="SIMARU Mobile App Interface and System Architecture" src="./assets/project-simaru-light.svg" width="100%" />
    </picture>
  </a>
</p>

Developed during my internship at **RS UMMI Bogor** so hospital technicians can audit medical equipment directly on ward floors instead of carrying paper spreadsheets. Integrates `mobile_scanner` QR camera lookup, building/room-scoped `StockOpnameController` audits, damage complaint reporting with photo uploads, encrypted `flutter_secure_storage` Bearer tokens, and background `FcmTokenManager` device push registration.

<p>
  <a href="https://github.com/AryaWgna/SIMARU-Mobile-App"><strong>Source repository ↗</strong></a> · <a href="https://arya-wiguna.my.id/work/simaru-mobile-app"><strong>Case study &amp; architecture ↗</strong></a>
</p>

---

### 02 · Digital Skyboard Announcement
**Airport Flight Information Display System (FIDS)** · `Next.js 15` `Laravel 11` `MySQL 8.0` `Docker Compose` `Nginx`

<p>
  <a href="https://arya-wiguna.my.id/work/digital-skyboard-announcement">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./assets/project-skyboard-dark.svg" />
      <source media="(prefers-color-scheme: light)" srcset="./assets/project-skyboard-light.svg" />
      <img alt="Digital Skyboard FIDS Interface and Docker Topology" src="./assets/project-skyboard-light.svg" width="100%" />
    </picture>
  </a>
</p>

Terminal flight information display orchestrated across **5 Docker containers** (`database-skyboard` MySQL 8.0, `api-skyboard` Laravel 11 + Sanctum, `ui-skyboard` Next.js 15, `assets-skyboard` static Nginx server, `gateway-skyboard` TLS Nginx reverse proxy). Terminal displays poll `/api/flights` every 30 seconds, trigger audio chimes on boarding transitions, and rotate promotional banners from a Sanctum-protected operator dashboard.

<p>
  <a href="https://github.com/AryaWgna/Digital-Skyboard-Announcement"><strong>Source repository ↗</strong></a> · <a href="https://arya-wiguna.my.id/work/digital-skyboard-announcement"><strong>Case study &amp; architecture ↗</strong></a>
</p>

---

### 03 · StreamEly
**Self-Hosted VOD Metadata Aggregator & Multi-Gateway Player** · `Bun` `Elysia.js` `Svelte` `TypeScript`

<p>
  <a href="https://arya-wiguna.my.id/work/streamely">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./assets/project-streamely-dark.svg" />
      <source media="(prefers-color-scheme: light)" srcset="./assets/project-streamely-light.svg" />
      <img alt="StreamEly VOD Interface and Bun Proxy Architecture" src="./assets/project-streamely-light.svg" width="100%" />
    </picture>
  </a>
</p>

Lightweight media catalog routed through a custom `Bun.serve` reverse proxy (`:8000`) forwarding `/api/*` to **Elysia.js** (`:3000`) and `/` to **Svelte** (`:5173`), stripping upstream `content-encoding` headers for Cloudflare Tunnel compatibility. Preloads 15,000+ TVmaze/OMDB records into memory, computes client-side Jaccard genre/cast similarity, and offers 3 fallback embed gateways.

<p>
  <a href="https://github.com/AryaWgna/streamely"><strong>Source repository ↗</strong></a> · <a href="https://arya-wiguna.my.id/work/streamely"><strong>Case study &amp; architecture ↗</strong></a>
</p>

---
## Technical Stack

| Area | Technologies |
|---|---|
| Mobile | Flutter, Dart, Firebase FCM, REST API |
| Frontend | Next.js 15, React 19, TypeScript, Tailwind CSS v4 |
| Backend | Laravel 11, Sanctum, Bun, Elysia.js |
| Data & Infra | MySQL 8, Docker Compose, Nginx, Cloudflare Tunnel |
| Tooling | Vitest (58 tests), GSAP, Lenis, Web Audio API, HTML5 Canvas |

---

## Interactive Features

- **Custom SVG cursor** — replaces the native cursor on fine-pointer devices.
- **Ambient music** — synthesised in-browser via the Web Audio API, toggled from the topbar.
- **Mini-game “FLY DODGE”** — canvas demo launched from the topbar.
- **Bilingual interface** — English / Bahasa Indonesia.
- **Live visitor presence** — real-time online counter.

---

## Credentials

Selected primary credentials (out of [23 archived certificates on arya-wiguna.my.id](https://arya-wiguna.my.id/#certs)):

<table>
  <thead>
    <tr>
      <th align="left">Preview</th>
      <th align="left">Credential</th>
      <th align="left">Issuing Organization</th>
      <th align="left">Date</th>
      <th align="left">Proof</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="https://raw.githubusercontent.com/AryaWgna/arya-wiguna-landing/main/public/assets/sertifikat/bnsp-junior-coder.jpg" width="76" alt="BNSP Junior Coder" /></td>
      <td><strong>Junior Coder — National Competency Certificate</strong><br /><sub>Reg. TIK 1565 00060 2026</sub></td>
      <td>BNSP · LSP Entrepreneur Digital Indonesia</td>
      <td>Jan 2026</td>
      <td><a href="https://github.com/AryaWgna/arya-wiguna-landing/blob/main/public/assets/sertifikat/bnsp-junior-coder.pdf">PDF</a></td>
    </tr>
    <tr>
      <td><img src="https://raw.githubusercontent.com/AryaWgna/arya-wiguna-landing/main/public/assets/sertifikat/skl-kuliah.jpg" width="76" alt="SKL S1 Teknik Informatika" /></td>
      <td><strong>Bachelor of Informatics Engineering (SKL)</strong><br /><sub>GPA 3.77 / 4.00 · No. 258/UNBIN-C/FINKOM/IX/2026</sub></td>
      <td>Universitas Binaniaga Indonesia</td>
      <td>Aug 2026</td>
      <td><a href="https://github.com/AryaWgna/arya-wiguna-landing/blob/main/public/assets/sertifikat/skl-kuliah.pdf">PDF</a></td>
    </tr>
    <tr>
      <td><img src="https://raw.githubusercontent.com/AryaWgna/arya-wiguna-landing/main/public/assets/sertifikat/magang-ummi.jpg" width="76" alt="RS UMMI Internship" /></td>
      <td><strong>IT Support &amp; Mobile App Internship</strong><br /><sub>Period: Feb 26 – Jul 31, 2025</sub></td>
      <td>RS UMMI Bogor</td>
      <td>Aug 2025</td>
      <td><a href="https://github.com/AryaWgna/arya-wiguna-landing/blob/main/public/assets/sertifikat/magang-ummi.pdf">PDF</a></td>
    </tr>
    <tr>
      <td><img src="https://raw.githubusercontent.com/AryaWgna/arya-wiguna-landing/main/public/assets/sertifikat/ccna-introduction-to-networks.jpg" width="76" alt="CCNA Introduction to Networks" /></td>
      <td><strong>CCNA: Introduction to Networks</strong></td>
      <td>Cisco Networking Academy</td>
      <td>Sep 2025</td>
      <td><a href="https://github.com/AryaWgna/arya-wiguna-landing/blob/main/public/assets/sertifikat/ccna-introduction-to-networks.pdf">PDF</a></td>
    </tr>
    <tr>
      <td><img src="https://raw.githubusercontent.com/AryaWgna/arya-wiguna-landing/main/public/assets/sertifikat/operating-systems-basics.jpg" width="76" alt="Operating Systems Basics" /></td>
      <td><strong>Operating Systems Basics</strong></td>
      <td>Cisco Networking Academy</td>
      <td>Sep 2025</td>
      <td><a href="https://github.com/AryaWgna/arya-wiguna-landing/blob/main/public/assets/sertifikat/operating-systems-basics.pdf">PDF</a></td>
    </tr>
    <tr>
      <td><img src="https://raw.githubusercontent.com/AryaWgna/arya-wiguna-landing/main/public/assets/sertifikat/belajar-prinsip-solid.jpg" width="76" alt="SOLID Programming Principles" /></td>
      <td><strong>SOLID Programming Principles</strong><br /><sub>ID: GRX5350LYZ0M</sub></td>
      <td>Dicoding Indonesia</td>
      <td>Jun 2025</td>
      <td><a href="https://www.dicoding.com/certificates/GRX5350LYZ0M">Verify ↗</a> · <a href="https://github.com/AryaWgna/arya-wiguna-landing/blob/main/public/assets/sertifikat/belajar-prinsip-solid.pdf">PDF</a></td>
    </tr>
    <tr>
      <td><img src="https://raw.githubusercontent.com/AryaWgna/arya-wiguna-landing/main/public/assets/sertifikat/memulai-pemrograman-python.jpg" width="76" alt="Getting Started with Python" /></td>
      <td><strong>Getting Started with Python</strong><br /><sub>ID: QLZ9NVNL9Z5D</sub></td>
      <td>Dicoding Indonesia</td>
      <td>Oct 2026</td>
      <td><a href="https://www.dicoding.com/certificates/QLZ9NVNL9Z5D">Verify ↗</a> · <a href="https://github.com/AryaWgna/arya-wiguna-landing/blob/main/public/assets/sertifikat/memulai-pemrograman-python.pdf">PDF</a></td>
    </tr>
  </tbody>
</table>

---

## Contact

Open to full-time software engineering roles (mobile, backend, or full-stack web) and project collaborations.

- **Portfolio &amp; CV:** [arya-wiguna.my.id](https://arya-wiguna.my.id)
- **Email:** [wgnarya123@gmail.com](mailto:wgnarya123@gmail.com)
- **LinkedIn:** [linkedin.com/in/arya-wgna](https://www.linkedin.com/in/arya-wgna)
- **GitHub:** [github.com/AryaWgna](https://github.com/AryaWgna)
