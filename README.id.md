<div align="center" id="top">

<img src="https://avatars.githubusercontent.com/u/156288269?s=400" width="84" height="84" alt="Arya Wiguna" />

# Arya Wiguna

**Software Engineer · Full-Stack Web & Mobile (Flutter)**  
Bogor, Jawa Barat, Indonesia · [arya-wiguna.my.id](https://arya-wiguna.my.id)

[![Portfolio](https://img.shields.io/badge/Portfolio-arya--wiguna.my.id-2563EB?style=flat-square&logo=google-chrome&logoColor=white)](https://arya-wiguna.my.id)
[![Gelar](https://img.shields.io/badge/S1_Informatika-IPK_3.77-172A45?style=flat-square&logo=academia&logoColor=white)](#kredensial)
[![BNSP](https://img.shields.io/badge/BNSP-Junior_Coder-1D4ED8?style=flat-square)](#kredensial)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-arya--wgna-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/arya-wgna)

**Baca dalam [Bahasa Inggris (English)](README.md)**

[Tentang](#tentang) · [Proyek Pilihan](#proyek-pilihan) · [Stack Teknis](#stack-teknis) · [Kredensial](#kredensial) · [Kontak](#kontak)

</div>

---

## Tentang

Lulusan **S1 Teknik Informatika** dari Universitas Binaniaga Indonesia (IPK **3.77 / 4.00**) dan pemegang sertifikasi kompetensi nasional **BNSP Junior Coder** yang berdomisili di Bogor. Berfokus membangun aplikasi mobile operasional berbasis **Flutter** serta aplikasi web multi-layanan menggunakan **Next.js 15**, **Laravel 11**, dan **Bun / Elysia.js**.

- **Pengalaman Lapangan:** Magang IT Support & Mobile Developer selama 5 bulan di **RS UMMI Bogor** (Feb – Jul 2025), merancang dan menguji aplikasi inspeksi aset medis berbasis pemindaian QR langsung di ruang rawat dan instalasi rumah sakit.
- **Prinsip Rekayasa:** Batas antar-layanan yang jelas, skema database terstruktur, serta pengelolaan state yang mudah dipelihara tanpa abstraksi berlebihan.
- **Keterlacakan:** Seluruh proyek dan sertifikasi di bawah tertaut langsung ke repositori sumber publik, halaman verifikasi resmi penerbit, atau pindaian dokumen asli.

---

## Proyek Pilihan

### 1. Aplikasi Mobile SIMARU — RS UMMI Bogor
**Inspeksi Aset Medis & Notifikasi Push Rumah Sakit** · `Flutter` `Dart` `Firebase FCM` `REST API`

<p>
  <a href="https://arya-wiguna.my.id/work/simaru-mobile-app">
    <img src="https://raw.githubusercontent.com/AryaWgna/arya-wiguna-landing/main/public/assets/projects/simaru-home.jpg" width="210" alt="Dashboard SIMARU" />
  </a>
  <a href="https://arya-wiguna.my.id/work/simaru-mobile-app">
    <img src="https://raw.githubusercontent.com/AryaWgna/arya-wiguna-landing/main/public/assets/projects/simaru-stock.jpg" width="210" alt="Stock Opname SIMARU" />
  </a>
  <a href="https://arya-wiguna.my.id/work/simaru-mobile-app">
    <img src="https://raw.githubusercontent.com/AryaWgna/arya-wiguna-landing/main/public/assets/projects/simaru-notif.jpg" width="210" alt="Notifikasi SIMARU" />
  </a>
</p>

Aplikasi mobile yang dibangun selama masa magang di **RS UMMI Bogor** agar teknisi sarana rumah sakit dapat menginspeksi alat medis langsung di lapangan tanpa rekap kertas manual. Mengintegrasikan pemindaian QR `mobile_scanner`, pencatatan kondisi per gedung dan ruangan lewat `StockOpnameController`, pelaporan keluhan kerusakan beserta foto, penyimpanan token sesi terenkripsi `flutter_secure_storage`, dan sinkronisasi notifikasi latar belakang melalui `FcmTokenManager`.

- **Spesifikasi:** `71 Commit Publik (dev)` · `4 Alur Kerja Lapangan` · `Android & iOS (Flutter)`
- **Tautan:** [Repositori kode sumber ↗](https://github.com/AryaWgna/SIMARU-Mobile-App) · [Baca studi kasus & arsitektur ↗](https://arya-wiguna.my.id/work/simaru-mobile-app)

---

### 2. Digital Skyboard Announcement
**Sistem Informasi Jadwal Penerbangan Bandara (FIDS)** · `Next.js 15` `Laravel 11` `MySQL 8.0` `Docker Compose` `Nginx`

<p>
  <a href="https://arya-wiguna.my.id/work/digital-skyboard-announcement">
    <img src="https://raw.githubusercontent.com/AryaWgna/arya-wiguna-landing/main/public/assets/projects/skyboard-main.jpg" width="640" alt="Layar Utama Digital Skyboard" />
  </a>
</p>
<p>
  <a href="https://arya-wiguna.my.id/work/digital-skyboard-announcement">
    <img src="https://raw.githubusercontent.com/AryaWgna/arya-wiguna-landing/main/public/assets/projects/skyboard-admin.jpg" width="208" alt="Panel Admin Skyboard" />
  </a>
  <a href="https://arya-wiguna.my.id/work/digital-skyboard-announcement">
    <img src="https://raw.githubusercontent.com/AryaWgna/arya-wiguna-landing/main/public/assets/projects/skyboard-boarding.jpg" width="208" alt="Status Boarding Skyboard" />
  </a>
  <a href="https://arya-wiguna.my.id/work/digital-skyboard-announcement">
    <img src="https://raw.githubusercontent.com/AryaWgna/arya-wiguna-landing/main/public/assets/projects/skyboard-promo.jpg" width="208" alt="Banner Promo Skyboard" />
  </a>
</p>

Sistem layar jadwal penerbangan terminal yang diorkestrasi di atas **5 kontainer Docker** (`database-skyboard` MySQL 8.0, `api-skyboard` Laravel 11 + Sanctum, `ui-skyboard` Next.js 15, `assets-skyboard` server statis Nginx, serta `gateway-skyboard` reverse proxy Nginx TLS pada jaringan internal `skyboard-net`). Layar publik melakukan polling ke `/api/flights` setiap 30 detik, membunyikan chime otomatis ketika status penerbangan berubah ke boarding, dan memutar 10 banner promosi dari panel admin terproteksi.

- **Spesifikasi:** `5 Kontainer Docker` · `Interval Polling 30 Detik` · `10 Slot Banner Promo`
- **Tautan:** [Repositori kode sumber ↗](https://github.com/AryaWgna/Digital-Skyboard-Announcement) · [Baca studi kasus & arsitektur ↗](https://arya-wiguna.my.id/work/digital-skyboard-announcement)

---

### 3. StreamEly
**Agregator Metadata VOD Self-Hosted & Pemutar Multi-Gateway** · `Bun` `Elysia.js` `Svelte` `TypeScript`

<p>
  <a href="https://arya-wiguna.my.id/work/streamely">
    <img src="https://raw.githubusercontent.com/AryaWgna/arya-wiguna-landing/main/public/assets/projects/streamely-home.jpg" width="640" alt="Katalog StreamEly" />
  </a>
</p>
<p>
  <a href="https://arya-wiguna.my.id/work/streamely">
    <img src="https://raw.githubusercontent.com/AryaWgna/arya-wiguna-landing/main/public/assets/projects/streamely-player.jpg" width="208" alt="Pemutar StreamEly" />
  </a>
  <a href="https://arya-wiguna.my.id/work/streamely">
    <img src="https://raw.githubusercontent.com/AryaWgna/arya-wiguna-landing/main/public/assets/projects/streamely-search.jpg" width="208" alt="Pencarian StreamEly" />
  </a>
  <a href="https://arya-wiguna.my.id/work/streamely">
    <img src="https://raw.githubusercontent.com/AryaWgna/arya-wiguna-landing/main/public/assets/projects/streamely-explore.jpg" width="208" alt="Eksplorasi StreamEly" />
  </a>
</p>

Platform katalog video-on-demand ringan dengan reverse proxy kustom `Bun.serve` (`:8000`) yang meneruskan `/api/*` ke backend **Elysia.js** (`:3000`) dan `/` ke antarmuka **Svelte** (`:5173`), sembari membersihkan header `content-encoding` agar bebas dari galat dekode saat diakses melalui Cloudflare Tunnel. Memuat lebih dari 15.000 metadata judul dari TVmaze dan OMDB ke memori server, menghitung rekomendasi kemiripan genre/pemeran dengan indeks Jaccard di sisi klien, serta menyediakan 3 opsi gateway pemutar.

- **Spesifikasi:** `15.000+ Judul di Memori` · `2 API Metadata (TVmaze + OMDB)` · `3 Gateway Pemutar`
- **Tautan:** [Repositori kode sumber ↗](https://github.com/AryaWgna/streamely) · [Baca studi kasus & arsitektur ↗](https://arya-wiguna.my.id/work/streamely)

---

## Stack Teknis

Berdasarkan kode sumber repositori proyek dan sertifikasi teknis pada profil ini:

| Bidang | Teknologi & Perangkat |
| :--- | :--- |
| **Mobile** | Flutter, Dart, Provider, Firebase Cloud Messaging (FCM), `mobile_scanner`, `flutter_secure_storage` |
| **Frontend Web** | Next.js 15 (App Router), React 19, Svelte, TypeScript, Tailwind CSS, GSAP |
| **Backend & Runtime** | Laravel 11 (PHP, Sanctum), Bun, Elysia.js, Node.js, REST API |
| **Data & Penyimpanan** | MySQL 8.0, SQLite, In-Memory Cache, Penyimpanan Terenkripsi Keychain/Keystore |
| **Infrastruktur** | Docker Compose, Nginx (TLS Reverse Proxy), Cloudflare Tunnel, Git, Linux |

---

## Kredensial

Kredensial utama pilihan (dari total [23 arsip sertifikat di arya-wiguna.my.id](https://arya-wiguna.my.id/#certifications)):

<table>
  <thead>
    <tr>
      <th align="left">Pratinjau</th>
      <th align="left">Kredensial</th>
      <th align="left">Penerbit Resmi</th>
      <th align="left">Tanggal</th>
      <th align="left">Bukti</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="https://raw.githubusercontent.com/AryaWgna/arya-wiguna-landing/main/public/assets/sertifikat/bnsp-junior-coder.jpg" width="76" alt="BNSP Junior Coder" /></td>
      <td><strong>Junior Coder — Sertifikat Kompetensi Nasional</strong><br /><sub>No. Reg. TIK 1565 00060 2026</sub></td>
      <td>BNSP · LSP Entrepreneur Digital Indonesia</td>
      <td>Jan 2026</td>
      <td><a href="https://github.com/AryaWgna/arya-wiguna-landing/blob/main/public/assets/sertifikat/bnsp-junior-coder.pdf">PDF</a></td>
    </tr>
    <tr>
      <td><img src="https://raw.githubusercontent.com/AryaWgna/arya-wiguna-landing/main/public/assets/sertifikat/skl-kuliah.jpg" width="76" alt="SKL S1 Teknik Informatika" /></td>
      <td><strong>Surat Keterangan Lulus — S1 Teknik Informatika</strong><br /><sub>IPK 3.77 / 4.00 · No. 258/UNBIN-C/FINKOM/IX/2026</sub></td>
      <td>Universitas Binaniaga Indonesia</td>
      <td>Agt 2026</td>
      <td><a href="https://github.com/AryaWgna/arya-wiguna-landing/blob/main/public/assets/sertifikat/skl-kuliah.pdf">PDF</a></td>
    </tr>
    <tr>
      <td><img src="https://raw.githubusercontent.com/AryaWgna/arya-wiguna-landing/main/public/assets/sertifikat/magang-ummi.jpg" width="76" alt="Magang RS UMMI" /></td>
      <td><strong>Sertifikat Magang IT Support &amp; Mobile Developer</strong><br /><sub>Periode: 26 Feb – 31 Jul 2025</sub></td>
      <td>RS UMMI Bogor</td>
      <td>Agt 2025</td>
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
      <td><img src="https://raw.githubusercontent.com/AryaWgna/arya-wiguna-landing/main/public/assets/sertifikat/belajar-prinsip-solid.jpg" width="76" alt="Belajar Prinsip Pemrograman SOLID" /></td>
      <td><strong>Belajar Prinsip Pemrograman SOLID</strong><br /><sub>ID: GRX5350LYZ0M</sub></td>
      <td>Dicoding Indonesia</td>
      <td>Jun 2025</td>
      <td><a href="https://www.dicoding.com/certificates/GRX5350LYZ0M">Verifikasi ↗</a> · <a href="https://github.com/AryaWgna/arya-wiguna-landing/blob/main/public/assets/sertifikat/belajar-prinsip-solid.pdf">PDF</a></td>
    </tr>
    <tr>
      <td><img src="https://raw.githubusercontent.com/AryaWgna/arya-wiguna-landing/main/public/assets/sertifikat/memulai-pemrograman-python.jpg" width="76" alt="Memulai Pemrograman dengan Python" /></td>
      <td><strong>Memulai Pemrograman dengan Python</strong><br /><sub>ID: QLZ9NVNL9Z5D</sub></td>
      <td>Dicoding Indonesia</td>
      <td>Okt 2026</td>
      <td><a href="https://www.dicoding.com/certificates/QLZ9NVNL9Z5D">Verifikasi ↗</a> · <a href="https://github.com/AryaWgna/arya-wiguna-landing/blob/main/public/assets/sertifikat/memulai-pemrograman-python.pdf">PDF</a></td>
    </tr>
  </tbody>
</table>

---

## Kontak

Terbuka untuk peluang kerja penuh waktu sebagai Software Engineer (mobile, backend, maupun full-stack web) serta kolaborasi proyek.

- **Portfolio & CV:** [arya-wiguna.my.id](https://arya-wiguna.my.id)
- **Email:** [wgnarya123@gmail.com](mailto:wgnarya123@gmail.com)
- **LinkedIn:** [linkedin.com/in/arya-wgna](https://www.linkedin.com/in/arya-wgna)

<p align="center">
  <sub>© 2026 Arya Wiguna · <a href="#top">Kembali ke atas ↑</a></sub>
</p>
