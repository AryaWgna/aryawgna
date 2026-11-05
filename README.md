<div align="center" id="top">

<img src="https://avatars.githubusercontent.com/u/156288269?s=400" width="84" height="84" alt="Arya Wiguna" />

# Arya Wiguna

**Software Engineer · Full-Stack Web & Mobile (Flutter)**  
Bogor, West Java, Indonesia · [arya-wiguna.my.id](https://arya-wiguna.my.id)

[![Portfolio](https://img.shields.io/badge/Portfolio-arya--wiguna.my.id-2563EB?style=flat-square&logo=google-chrome&logoColor=white)](https://arya-wiguna.my.id)
[![Degree](https://img.shields.io/badge/S1_Informatika-GPA_3.77-172A45?style=flat-square&logo=academia&logoColor=white)](#credentials)
[![BNSP](https://img.shields.io/badge/BNSP-Junior_Coder-1D4ED8?style=flat-square)](#credentials)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-arya--wgna-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/arya-wgna)

**Read in [Bahasa Indonesia](README.id.md)**

[About](#about) · [Featured Work](#featured-work) · [Technical Stack](#technical-stack) · [Credentials](#credentials) · [Contact](#contact)

</div>

---

## About

Informatics Engineering graduate (**S1 Teknik Informatika**, Universitas Binaniaga Indonesia — GPA **3.77 / 4.00**) and **BNSP-certified Junior Coder** based in Bogor, Indonesia. I build field-tested mobile apps in **Flutter** and multi-service web applications with **Next.js 15**, **Laravel 11**, and **Bun / Elysia.js**.

- **Field Experience:** 5-month IT Support & Mobile Developer internship at **RS UMMI Bogor** (Feb – Jul 2025), building internal hospital tooling for QR-based medical asset inspection and stock opname audits.
- **Engineering Focus:** Clear service boundaries, straightforward database schemas, and maintainable state management without unnecessary abstractions.
- **Verification:** Every project and credential listed below links directly to its public source repository, official verification registry, or original document scan.

---

## Featured Work

### 1. SIMARU Mobile App — RS UMMI Bogor
**Hospital Medical Asset Inspection & Push Notification App** · `Flutter` `Dart` `Firebase FCM` `REST API`

<p>
  <a href="https://arya-wiguna.my.id/work/simaru-mobile-app">
    <img src="https://raw.githubusercontent.com/AryaWgna/arya-wiguna-landing/main/public/assets/projects/simaru-home.jpg" width="210" alt="SIMARU Dashboard" />
  </a>
  <a href="https://arya-wiguna.my.id/work/simaru-mobile-app">
    <img src="https://raw.githubusercontent.com/AryaWgna/arya-wiguna-landing/main/public/assets/projects/simaru-stock.jpg" width="210" alt="SIMARU Stock Opname" />
  </a>
  <a href="https://arya-wiguna.my.id/work/simaru-mobile-app">
    <img src="https://raw.githubusercontent.com/AryaWgna/arya-wiguna-landing/main/public/assets/projects/simaru-notif.jpg" width="210" alt="SIMARU Notifications" />
  </a>
</p>

Mobile application developed during my internship at **RS UMMI Bogor** so hospital technicians can inspect medical equipment directly on ward floors instead of carrying paper spreadsheets. Combines `mobile_scanner` QR lookup, room-by-room `StockOpnameController` condition audits, damage complaint reporting with photo attachments, `flutter_secure_storage` bearer sessions, and background `FcmTokenManager` push alerts.

- **Key specs:** `71 Public Commits (dev)` · `4 Core Field Workflows` · `Android & iOS (Flutter)`
- **Links:** [Source repository ↗](https://github.com/AryaWgna/SIMARU-Mobile-App) · [Read case study & architecture ↗](https://arya-wiguna.my.id/work/simaru-mobile-app)

---

### 2. Digital Skyboard Announcement
**Airport Flight Information Display System (FIDS)** · `Next.js 15` `Laravel 11` `MySQL 8.0` `Docker Compose` `Nginx`

<p>
  <a href="https://arya-wiguna.my.id/work/digital-skyboard-announcement">
    <img src="https://raw.githubusercontent.com/AryaWgna/arya-wiguna-landing/main/public/assets/projects/skyboard-main.jpg" width="640" alt="Digital Skyboard Main Display" />
  </a>
</p>
<p>
  <a href="https://arya-wiguna.my.id/work/digital-skyboard-announcement">
    <img src="https://raw.githubusercontent.com/AryaWgna/arya-wiguna-landing/main/public/assets/projects/skyboard-admin.jpg" width="208" alt="Skyboard Admin" />
  </a>
  <a href="https://arya-wiguna.my.id/work/digital-skyboard-announcement">
    <img src="https://raw.githubusercontent.com/AryaWgna/arya-wiguna-landing/main/public/assets/projects/skyboard-boarding.jpg" width="208" alt="Skyboard Boarding Alert" />
  </a>
  <a href="https://arya-wiguna.my.id/work/digital-skyboard-announcement">
    <img src="https://raw.githubusercontent.com/AryaWgna/arya-wiguna-landing/main/public/assets/projects/skyboard-promo.jpg" width="208" alt="Skyboard Promo Carousel" />
  </a>
</p>

Full-stack terminal flight information display orchestrated across **5 Docker containers** (`database-skyboard` MySQL 8.0, `api-skyboard` Laravel 11 + Sanctum, `ui-skyboard` Next.js 15, `assets-skyboard` static Nginx server, and `gateway-skyboard` TLS Nginx reverse proxy on `skyboard-net`). Public boards poll `/api/flights` every 30 seconds, trigger audio chimes on boarding status transitions, and rotate 10 promotional banners managed from a protected admin dashboard.

- **Key specs:** `5 Docker Containers` · `30s Polling Interval` · `10 Rotating Promo Slots`
- **Links:** [Source repository ↗](https://github.com/AryaWgna/Digital-Skyboard-Announcement) · [Read case study & architecture ↗](https://arya-wiguna.my.id/work/digital-skyboard-announcement)

---

### 3. StreamEly
**Self-Hosted VOD Metadata Aggregator & Multi-Gateway Player** · `Bun` `Elysia.js` `Svelte` `TypeScript`

<p>
  <a href="https://arya-wiguna.my.id/work/streamely">
    <img src="https://raw.githubusercontent.com/AryaWgna/arya-wiguna-landing/main/public/assets/projects/streamely-home.jpg" width="640" alt="StreamEly Catalog" />
  </a>
</p>
<p>
  <a href="https://arya-wiguna.my.id/work/streamely">
    <img src="https://raw.githubusercontent.com/AryaWgna/arya-wiguna-landing/main/public/assets/projects/streamely-player.jpg" width="208" alt="StreamEly Player" />
  </a>
  <a href="https://arya-wiguna.my.id/work/streamely">
    <img src="https://raw.githubusercontent.com/AryaWgna/arya-wiguna-landing/main/public/assets/projects/streamely-search.jpg" width="208" alt="StreamEly Search" />
  </a>
  <a href="https://arya-wiguna.my.id/work/streamely">
    <img src="https://raw.githubusercontent.com/AryaWgna/arya-wiguna-landing/main/public/assets/projects/streamely-explore.jpg" width="208" alt="StreamEly Explore" />
  </a>
</p>

Lightweight media catalog built around a custom `Bun.serve` reverse proxy (`:8000`) that routes `/api/*` to an **Elysia.js** server (`:3000`) and `/` to **Svelte** (`:5173`) while stripping upstream `content-encoding` headers to avoid decoding errors behind Cloudflare Tunnel. Preloads 15,000+ titles from TVmaze and OMDB into server memory, computes Jaccard genre/cast similarity recommendations on the client, and provides 3 fallback embed gateways.

- **Key specs:** `15,000+ Cached Titles` · `2 Metadata APIs (TVmaze + OMDB)` · `3 Player Gateways`
- **Links:** [Source repository ↗](https://github.com/AryaWgna/streamely) · [Read case study & architecture ↗](https://arya-wiguna.my.id/work/streamely)

---

## Technical Stack

Directly backed by the repositories and technical credentials on this profile:

| Area | Tools & Technologies |
| :--- | :--- |
| **Mobile** | Flutter, Dart, Provider, Firebase Cloud Messaging (FCM), `mobile_scanner`, `flutter_secure_storage` |
| **Frontend Web** | Next.js 15 (App Router), React 19, Svelte, TypeScript, Tailwind CSS, GSAP |
| **Backend & Runtime** | Laravel 11 (PHP, Sanctum), Bun, Elysia.js, Node.js, REST APIs |
| **Data & Storage** | MySQL 8.0, SQLite, In-Memory Caching, Encrypted Device Keychain/Keystore |
| **Infrastructure** | Docker Compose, Nginx (TLS Reverse Proxy), Cloudflare Tunnel, Git, Linux |

---

## Credentials

Selected primary credentials (out of [23 archived certificates on arya-wiguna.my.id](https://arya-wiguna.my.id/#certifications)):

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

- **Portfolio & CV:** [arya-wiguna.my.id](https://arya-wiguna.my.id)
- **Email:** [wgnarya123@gmail.com](mailto:wgnarya123@gmail.com)
- **LinkedIn:** [linkedin.com/in/arya-wgna](https://www.linkedin.com/in/arya-wgna)

<p align="center">
  <sub>© 2026 Arya Wiguna · <a href="#top">Back to top ↑</a></sub>
</p>
