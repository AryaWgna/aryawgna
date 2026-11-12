<div id="top" align="center">

<a href="https://arya-wiguna.my.id">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./assets/masthead-dark.svg" />
    <source media="(prefers-color-scheme: light)" srcset="./assets/masthead-light.svg" />
    <img alt="Arya Wiguna — Software Engineer (Full-Stack Web &amp; Mobile)" src="./assets/masthead-light.svg" width="100%" />
  </picture>
</a>

<sub><a href="README.md">English</a> · <strong>Bahasa Indonesia</strong> &nbsp;|&nbsp; <a href="#tentang">Tentang</a> · <a href="#pengalaman">Pengalaman</a> · <a href="#karya-utama">Karya Utama</a> · <a href="#stack-teknis">Stack</a> · <a href="#fitur-interaktif">Fitur Interaktif</a> · <a href="#sertifikasi">Sertifikasi</a> · <a href="#kontak">Kontak</a></sub>

</div>

---

## Tentang

Lulusan Teknik Informatika (**S1 Teknik Informatika**, Universitas Binaniaga Indonesia — IPK **3.77 / 4.00**) dan **Pemrogram Junior tersertifikasi BNSP** yang berdomisili di Bogor, Indonesia. Saya membangun aplikasi mobile teruji lapangan menggunakan **Flutter** serta backend web multi-layanan dengan **Next.js 15**, **Laravel 11**, dan **Bun / Elysia.js**.

- **Rekayasa Lapangan Rumah Sakit:** Magang IT Support & Mobile Developer 5 bulan di **RS UMMI Bogor** (Feb – Jul 2025), membangun perangkat mobile internal untuk inspeksi alat medis berbasis QR dan audit stock opname per ruangan.
- **Disiplin Arsitektur:** Batas layanan eksplisit, skema relasional ternormalisasi, dan manajemen state yang dapat diprediksi tanpa lapisan framework yang tidak perlu.
- **Bukti Langsung:** Setiap sistem dan sertifikasi di bawah merujuk langsung ke repositori publik, halaman verifikasi resmi, atau PDF sertifikat hasil pindaian.

---

## Pengalaman

- **RS UMMI Bogor** — Mobile App Developer (SIMARU) & IT Support Intern (Feb – Jul 2025)
- **Digital Skyboard Announcement** — Sistem tampilan penerbangan bandara (FIDS) yang diorkestrasi 5 kontainer Docker
- **StreamEly** — Agregator metadata VOD self-hosted & pemutar multi-gateway

---

## Karya Utama

### 01 · Aplikasi Mobile SIMARU — RS UMMI Bogor
**Aplikasi Inspeksi Aset Medis & Notifikasi Push** · `Flutter` `Dart` `Firebase FCM` `REST API`

<p>
  <a href="https://arya-wiguna.my.id/work/simaru-mobile-app">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./assets/project-simaru-dark.svg" />
      <source media="(prefers-color-scheme: light)" srcset="./assets/project-simaru-light.svg" />
      <img alt="SIMARU Mobile App Interface and System Architecture" src="./assets/project-simaru-light.svg" width="100%" />
    </picture>
  </a>
</p>

Dikembangkan saat magang di **RS UMMI Bogor** agar teknisi rumah sakit dapat mengaudit peralatan medis langsung di lantai bangsal tanpa kertas. Terintegrasi dengan pencarian QR `mobile_scanner`, kontrol `StockOpnameController` per gedung/ruangan, pelaporan kerusakan beserta foto, token Bearer terenkripsi `flutter_secure_storage`, serta registrasi push perangkat `FcmTokenManager`.

<p>
  <a href="https://github.com/AryaWgna/SIMARU-Mobile-App"><strong>Repositori sumber ↗</strong></a> · <a href="https://arya-wiguna.my.id/work/simaru-mobile-app"><strong>Studi kasus &amp; arsitektur ↗</strong></a>
</p>

---

### 02 · Digital Skyboard Announcement
**Sistem Tampilan Informasi Penerbangan (FIDS)** · `Next.js 15` `Laravel 11` `MySQL 8.0` `Docker Compose` `Nginx`

<p>
  <a href="https://arya-wiguna.my.id/work/digital-skyboard-announcement">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./assets/project-skyboard-dark.svg" />
      <source media="(prefers-color-scheme: light)" srcset="./assets/project-skyboard-light.svg" />
      <img alt="Digital Skyboard FIDS Interface and Docker Topology" src="./assets/project-skyboard-light.svg" width="100%" />
    </picture>
  </a>
</p>

Tampilan informasi penerbangan terminal yang diorkestrasi lintas **5 kontainer Docker** (`database-skyboard` MySQL 8.0, `api-skyboard` Laravel 11 + Sanctum, `ui-skyboard` Next.js 15, `assets-skyboard` server Nginx statis, `gateway-skyboard` reverse proxy Nginx TLS). Layar terminal meminta `/api/flights` setiap 30 detik, memutar nada saat perubahan status boarding, dan menampilkan banner promosi dari dashboard operator terlindungi Sanctum.

<p>
  <a href="https://github.com/AryaWgna/Digital-Skyboard-Announcement"><strong>Repositori sumber ↗</strong></a> · <a href="https://arya-wiguna.my.id/work/digital-skyboard-announcement"><strong>Studi kasus &amp; arsitektur ↗</strong></a>
</p>

---

### 03 · StreamEly
**Agregator Metadata VOD Self-Hosted & Pemutar Multi-Gateway** · `Bun` `Elysia.js` `Svelte` `TypeScript`

<p>
  <a href="https://arya-wiguna.my.id/work/streamely">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./assets/project-streamely-dark.svg" />
      <source media="(prefers-color-scheme: light)" srcset="./assets/project-streamely-light.svg" />
      <img alt="StreamEly VOD Interface and Bun Proxy Architecture" src="./assets/project-streamely-light.svg" width="100%" />
    </picture>
  </a>
</p>

Katalog media ringan yang dirute melalui reverse proxy kustom `Bun.serve` (`:8000`) — meneruskan `/api/*` ke **Elysia.js** (`:3000`) dan `/` ke **Svelte** (`:5173`), serta menghapus header `content-encoding` upstream agar kompatibel dengan Cloudflare Tunnel. Memuat 15.000+ data TVmaze/OMDB ke memori, menghitung skor kemiripan Jaccard genre/cast di sisi klien, dan menyediakan 3 gateway embed cadangan.

<p>
  <a href="https://github.com/AryaWgna/streamely"><strong>Repositori sumber ↗</strong></a> · <a href="https://arya-wiguna.my.id/work/streamely"><strong>Studi kasus &amp; arsitektur ↗</strong></a>
</p>

---
## Stack Teknis

| Area | Teknologi |
|---|---|
| Mobile | Flutter, Dart, Firebase FCM, REST API |
| Frontend | Next.js 15, React 19, TypeScript, Tailwind CSS v4 |
| Backend | Laravel 11, Sanctum, Bun, Elysia.js |
| Data & Infra | MySQL 8, Docker Compose, Nginx, Cloudflare Tunnel |
| Tooling | Vitest (58 tes), GSAP, Lenis, Web Audio API, HTML5 Canvas |

---

## Fitur Interaktif

- **Cursor SVG kustom** — menggantikan cursor bawaan pada perangkat pointer halus.
- **Musik ambient** — disintesis langsung di browser via Web Audio API, diaktifkan dari topbar.
- **Mini-game “FLY DODGE”** — demo canvas yang dibuka dari topbar.
- **Antarmuka dwibahasa** — Inggris / Bahasa Indonesia.
- **Presensi pengunjung langsung** — penghitung online real-time.

---

## Sertifikasi

Sertifikasi utama terpilih (dari [23 sertifikat arsip di arya-wiguna.my.id](https://arya-wiguna.my.id/#certs)):

<table>
  <thead>
    <tr>
      <th align="left">Pratinjau</th>
      <th align="left">Sertifikasi</th>
      <th align="left">Penerbit</th>
      <th align="left">Tanggal</th>
      <th align="left">Bukti</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="https://raw.githubusercontent.com/AryaWgna/arya-wiguna-landing/main/public/assets/sertifikat/bnsp-junior-coder.jpg" width="76" alt="BNSP Junior Coder" /></td>
      <td><strong>Junior Coder — Sertifikat Kompetensi Nasional</strong><br /><sub>Reg. TIK 1565 00060 2026</sub></td>
      <td>BNSP · LSP Entrepreneur Digital Indonesia</td>
      <td>Jan 2026</td>
      <td><a href="https://github.com/AryaWgna/arya-wiguna-landing/blob/main/public/assets/sertifikat/bnsp-junior-coder.pdf">PDF</a></td>
    </tr>
    <tr>
      <td><img src="https://raw.githubusercontent.com/AryaWgna/arya-wiguna-landing/main/public/assets/sertifikat/skl-kuliah.jpg" width="76" alt="SKL S1 Teknik Informatika" /></td>
      <td><strong>S1 Teknik Informatika (SKL)</strong><br /><sub>IPK 3.77 / 4.00 · No. 258/UNBIN-C/FINKOM/IX/2026</sub></td>
      <td>Universitas Binaniaga Indonesia</td>
      <td>Agu 2026</td>
      <td><a href="https://github.com/AryaWgna/arya-wiguna-landing/blob/main/public/assets/sertifikat/skl-kuliah.pdf">PDF</a></td>
    </tr>
    <tr>
      <td><img src="https://raw.githubusercontent.com/AryaWgna/arya-wiguna-landing/main/public/assets/sertifikat/magang-ummi.jpg" width="76" alt="RS UMMI Internship" /></td>
      <td><strong>Magang IT Support &amp; Mobile App</strong><br /><sub>Periode: 26 Feb – 31 Jul 2025</sub></td>
      <td>RS UMMI Bogor</td>
      <td>Agu 2025</td>
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
      <td><strong>Prinsip Pemrograman SOLID</strong><br /><sub>ID: GRX5350LYZ0M</sub></td>
      <td>Dicoding Indonesia</td>
      <td>Jun 2025</td>
      <td><a href="https://www.dicoding.com/certificates/GRX5350LYZ0M">Verifikasi ↗</a> · <a href="https://github.com/AryaWgna/arya-wiguna-landing/blob/main/public/assets/sertifikat/belajar-prinsip-solid.pdf">PDF</a></td>
    </tr>
    <tr>
      <td><img src="https://raw.githubusercontent.com/AryaWgna/arya-wiguna-landing/main/public/assets/sertifikat/memulai-pemrograman-python.jpg" width="76" alt="Getting Started with Python" /></td>
      <td><strong>Memulai Pemrograman dengan Python</strong><br /><sub>ID: QLZ9NVNL9Z5D</sub></td>
      <td>Dicoding Indonesia</td>
      <td>Okt 2026</td>
      <td><a href="https://www.dicoding.com/certificates/QLZ9NVNL9Z5D">Verifikasi ↗</a> · <a href="https://github.com/AryaWgna/arya-wiguna-landing/blob/main/public/assets/sertifikat/memulai-pemrograman-python.pdf">PDF</a></td>
    </tr>
  </tbody>
</table>

---

## Kontak

Terbuka untuk peran software engineering penuh waktu (mobile, backend, atau full-stack web) dan kolaborasi proyek.

- **Portofolio &amp; CV:** [arya-wiguna.my.id](https://arya-wiguna.my.id)
- **Email:** [wgnarya123@gmail.com](mailto:wgnarya123@gmail.com)
- **LinkedIn:** [linkedin.com/in/arya-wgna](https://www.linkedin.com/in/arya-wgna)
- **GitHub:** [github.com/AryaWgna](https://github.com/AryaWgna)
