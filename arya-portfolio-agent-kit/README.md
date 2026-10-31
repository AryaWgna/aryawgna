# Arya Wiguna Portfolio — Agent Kit

Paket ini berisi instruksi untuk coding agent di IDE agar redesign portfolio konsisten dengan arah **Modern Editorial + Subtle 3D**.

## Isi paket

- `AGENTS.md` — instruksi tingkat repository.
- `.agents/skills/arya-portfolio-redesign/SKILL.md` — skill lengkap untuk agent.
- `docs/PRODUCT_BRIEF.md` — tujuan produk, audiens, dan prinsip desain.
- `docs/CONTENT_INVENTORY.md` — checklist verifikasi konten.
- `docs/IMPLEMENTATION_PLAN.md` — fase pengerjaan.

## Cara menggunakan

1. Extract ZIP ke root repository portfolio kamu.
2. Pastikan `AGENTS.md` berada di root project.
3. Pastikan folder `.agents/skills/arya-portfolio-redesign/` ikut tersalin.
4. Buka project di IDE yang mendukung coding agent.
5. Minta agent membaca `AGENTS.md` dan skill sebelum melakukan perubahan.

Prompt awal yang disarankan:

> Baca `AGENTS.md` dan `.agents/skills/arya-portfolio-redesign/SKILL.md` sampai selesai. Mulai dari Phase 0 — audit repository saja. Jangan mengubah kode dulu. Periksa stack, struktur folder, routes, konten, assets, fitur yang ada, dan deployment config. Buat `docs/audit.md` serta lengkapi `docs/CONTENT_INVENTORY.md` berdasarkan bukti di repository. Tandai informasi yang belum diketahui sebagai TODO. Setelah itu berikan ringkasan temuan dan rencana migrasi untuk saya review.

## Catatan kompatibilitas

`AGENTS.md` dapat digunakan oleh berbagai coding agent yang membaca instruksi repository. Folder `.agents/skills/` mengikuti pola Agent Skills berbasis `SKILL.md`; dukungan auto-discovery berbeda antar IDE/agent. Jika agent kamu tidak otomatis menemukan skill, minta secara eksplisit untuk membaca file SKILL.md.

Jangan langsung meminta agent membangun ulang seluruh website. Audit dulu agar konten, link, dan fungsi yang lama tidak hilang.
