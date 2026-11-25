# Catatan Perubahan

Semua perubahan proyek yang bermakna dicatat di sini secara kronologis. Perubahan yang belum dirilis masuk ke **Unreleased**; jangan menimpa entri terdahulu.

## Unreleased

### 2026-11-25 — Fondasi SEO untuk situs AJIEEB
- **Ditambahkan:** canonical dan Open Graph unik pada tujuh halaman, serta `sitemap.xml` dan `robots.txt`.
- **Diperjelas:** SEO ini untuk website AJIEEB sendiri; implementasi Search Console dan pengiriman sitemap menunggu situs tayang dan domain terverifikasi. URL `ajieeb.gt.tc` masih rencana dan harus disesuaikan bila alamat akhir berubah.
- **Alasan:** menyiapkan penemuan serta pemahaman halaman AJIEEB oleh mesin pencari, terpisah dari layanan SEO yang ditawarkan kepada klien.
- **Dokumen terkait:** [README](README.md), [roadmap](docs/ROADMAP.md), [sitemap](sitemap.xml), [robots](robots.txt).

### 2026-11-25 — Penyempurnaan ruang, tipografi, dan visual
- **Diubah:** jarak kosong vertikal dirapatkan, teks kecil dinaikkan agar terbaca, dan judul pemasaran diringkas.
- **Ditambahkan:** foto ilustrasi lebih menonjol pada halaman Layanan, FAQ, dan Kontak; ikon layanan dan poin manfaat diperkuat.
- **Alasan:** menyesuaikan rancangan dengan arahan pemilik agar lebih visual, jelas, dan nyaman dibaca.
- **Dokumen terkait:** [stylesheet](css/styles.css), [rancangan frontend](docs/DESIGN_AND_FRONTEND.md).

### 2026-11-25 — Website dipecah menjadi tujuh halaman
- **Diubah:** struktur satu halaman dengan tujuh bagian diganti menjadi tujuh dokumen HTML terpisah: Beranda, Layanan, Contoh, Harga, Tentang, FAQ, dan Kontak.
- **Diubah:** navigasi bersama, konten, harga paket, struktur file, dan dokumentasi diselaraskan ke rancangan tujuh halaman standar.
- **Alasan:** pemilik menginginkan tiap bagian menjadi halaman tersendiri.
- **Dokumen terkait:** [halaman Beranda](index.html), [rancangan frontend](docs/DESIGN_AND_FRONTEND.md), [ringkasan proyek](docs/PROJECT_BRIEF.md), [draf konten](docs/WEBSITE_DRAFT.md), [README](README.md).

### 2026-11-25 — Animasi antarmuka ringan
- **Ditambahkan:** animasi reveal saat scroll dengan jeda ringan pada kelompok kartu serta gerak halus pada aksen hero.
- **Diperhatikan:** animasi menghormati preferensi `prefers-reduced-motion`; konten tetap terlihat jika JavaScript tidak berjalan.
- **Dokumen terkait:** [stylesheet](css/styles.css), [JavaScript](js/main.js), [rancangan frontend](docs/DESIGN_AND_FRONTEND.md).

### 2026-11-25 — Fondasi tampilan dan frontend
- **Ditambahkan:** halaman awal `index.html`, stylesheet responsif, dan JavaScript ringan untuk menu mobile/tahun footer.
- **Ditambahkan:** rancangan visual dengan warna hijau-krem, tipografi sans-serif, ikon Font Awesome, foto Unsplash, tujuh bagian halaman, dan CTA WhatsApp.
- **Diperjelas:** Tawk.to belum diaktifkan; Maps dan Search Console menunggu informasi/akses yang dibutuhkan.
- **Dokumen terkait:** [rancangan frontend](docs/DESIGN_AND_FRONTEND.md), [README](README.md).

### 2026-11-25 — Draf struktur dan teks website
- **Ditambahkan:** draf satu halaman tujuh bagian dalam bahasa Indonesia, termasuk layanan, harga, demo portofolio, FAQ, dan kontak WhatsApp.
- **Diperjelas:** demo ditandai sebagai konsep; keterbatasan layanan gratis, SEO, Search Console, revisi, waktu pengerjaan, dan perawatan dijelaskan dalam bahasa pengunjung.
- **Dokumen terkait:** [draf website](docs/WEBSITE_DRAFT.md), [README](README.md).

### 2026-11-25 — Inventaris portofolio awal
- **Ditinjau:** halaman portofolio Ajiz7onSite mencantumkan 20 demo konsep website makanan/minuman dan tautan langsung ke masing-masing demo.
- **Ditinjau:** sumber halaman untuk seluruh 20 demo; pola umumnya landing page dengan produk unggulan dan ajakan bertindak. Ditemukan judul halaman Boba yang menyebut “MOCHA”, perlu dikonfirmasi.
- **Diperjelas:** demo harus dilabeli sebagai contoh/konsep, bukan proyek klien kecuali statusnya dikonfirmasi.
- **Dokumen terkait:** [ringkasan proyek](docs/PROJECT_BRIEF.md), [README](README.md).

### 2026-11-25 — Pilihan layanan tambahan SEO atau Search Console
- **Diperjelas:** biaya tambahan Rp100.000 berlaku untuk satu pilihan: SEO dasar per halaman atau bantuan penyiapan Google Search Console. Paket dasar Rp300.000 ditambah salah satu pilihan menjadi Rp400.000.
- **Catatan:** jika klien meminta kedua opsi, harga gabungannya harus disepakati terpisah.
- **Dokumen terkait:** [ringkasan proyek](docs/PROJECT_BRIEF.md), [README](README.md).

### 2026-11-25 — Profil usaha dan ketentuan konten
- **Dicatat:** AJIEEB menawarkan jasa pembuatan website UMKM untuk seluruh Indonesia, dengan fokus harga terjangkau dan layanan gratis jika tersedia.
- **Dicatat:** teks akan disusun menggunakan riset/sumber gratis bila memungkinkan; portofolio sudah tersedia; WhatsApp 083172527880.
- **Dicatat:** estimasi pengerjaan 3–7 hari setelah materi/akses lengkap; perawatan ringan berfokus pada error sederhana dan pekerjaan berat memerlukan tambahan kode serta kesepakatan terpisah.
- **Diperjelas:** dokumentasi tidak menjanjikan website dapat diakses selamanya pada hosting/subdomain gratis; ketersediaannya mengikuti penyedia.
- **Belum final:** apakah tambahan Rp100.000 untuk SEO/Search Console berlaku per pilihan atau sebagai satu paket yang klien boleh pilih salah satunya.
- **Dokumen terkait:** [ringkasan proyek](docs/PROJECT_BRIEF.md), [README](README.md).

### 2026-11-25 — Pemisahan biaya SEO dan Search Console
- **Diubah:** paket dasar Rp300.000 tidak lagi mencakup SEO/Search Console. Keduanya menjadi tambahan Rp100.000, dengan total Rp400.000 bila dipilih.
- **Alasan:** memisahkan biaya optimasi dasar dan penyiapan Search Console dari paket pembuatan website.
- **Dokumen terkait:** [ringkasan proyek](docs/PROJECT_BRIEF.md), [README](README.md).

### 2026-11-25 — Harga rancangan paket dasar
- **Diputuskan:** harga awal paket standar dirancang Rp300.000 dengan subdomain/hosting gratis bila tersedia, alur GitHub dan Cloudflare, Tawk.to, Google Maps, SEO dasar per halaman, dan bantuan penyiapan Search Console.
- **Diperjelas:** batas paket satu halaman tujuh bagian, dua putaran revisi, materi gambar dari klien, serta biaya pihak ketiga/upgrade dan pekerjaan tambahan berada di luar paket kecuali disepakati lain.
- **Catatan:** harga masih rancangan; ketersediaan subdomain dan kompatibilitas layanan perlu diperiksa sebelum ditawarkan.
- **Dokumen terkait:** [ringkasan proyek](docs/PROJECT_BRIEF.md), [README](README.md).

### 2026-11-25 — Ketentuan perawatan
- **Diputuskan:** perawatan ringan direncanakan Rp150.000 per hari kerja; pekerjaan berat dinilai dan ditawarkan terpisah untuk disepakati sebelum dikerjakan.
- **Diperjelas:** contoh pekerjaan ringan dan berat serta proses persetujuan saat cakupan berubah ditambahkan ke ringkasan proyek.
- **Dokumen terkait:** [ringkasan proyek](docs/PROJECT_BRIEF.md), [README](README.md).

### 2026-11-25 — Rancangan cakupan layanan dan proses kerja
- **Dicatat:** rancangan standar tujuh bagian dalam satu halaman, batas dua putaran revisi, pembagian tanggung jawab teks/aset, hosting hemat, fitur dasar, proses kerja, dan biaya perawatan sementara Rp150.000.
- **Diperjelas:** InfinityFree adalah hosting, GitHub mengelola kode, dan Cloudflare berperan pada DNS/proxy/CDN sesuai dukungan—bukan backend aplikasi.
- **Belum final:** biaya perawatan Rp150.000 belum jelas satuannya; domain gratis, cakupan biaya tambahan, serta ketersediaan integrasi perlu diverifikasi sebelum dijanjikan.
- **Dokumen terkait:** [ringkasan proyek](docs/PROJECT_BRIEF.md), [README](README.md).

### 2026-11-25 — Sumber gambar dan ikon sementara
- **Diputuskan:** Unsplash menjadi sumber foto sementara dan Font Awesome CDN menjadi sumber ikon.
- **Diubah:** dokumentasi meminta pelacakan sumber foto, optimasi ukuran, konsistensi ikon, serta label aksesibel pada kontrol.
- **Alasan:** memakai sumber visual yang mudah digunakan pada tahap awal desain.
- **Dokumen terkait:** [README](README.md), [ringkasan proyek](docs/PROJECT_BRIEF.md).

### 2026-11-25 — Acuan desain dan gaya konten
- **Diubah:** dokumentasi menetapkan WCAG 2.2, MDN, Google Search Central, dan Material Design sebagai acuan untuk aksesibilitas, implementasi web, SEO, dan inspirasi visual.
- **Diubah:** arah konten menekankan tampilan sederhana serta penggunaan gambar/ikon untuk pemasaran dan pemahaman, dengan label atau frasa pendek (umumnya 1–3 kata) saat konteksnya jelas.
- **Alasan:** menjaga pengalaman AJIEEB tetap mudah dipahami dan konsisten bagi calon pelanggan UMKM.
- **Dokumen terkait:** [README](README.md), [ringkasan proyek](docs/PROJECT_BRIEF.md).

### Ditambahkan
- Dokumentasi awal AJIEEB untuk website jasa pembuatan website UMKM.
- Ringkasan proyek, roadmap awal, dan aturan pemeliharaan catatan perubahan.

### Diputuskan
- Nama proyek: **AJIEEB (Ajiz Web)**.
- Sasaran: menawarkan jasa pembuatan website untuk UMKM.
- Arah desain: profesional, sederhana, mudah dipahami, dan responsif; terinspirasi prinsip desain yang jelas dan konsisten.
- Teknologi frontend: HTML, CSS, dan JavaScript.
- Rencana platform: GitHub, InfinityFree, Cloudflare, dan Google Search Console.
- Domain yang diusulkan: `ajieeb.gt.tc`, menunggu verifikasi ketersediaan dan dukungan teknis.
- Halaman awal: Beranda, Layanan, Portofolio, Paket & Harga, Tentang, FAQ, dan Kontak/Konsultasi.
- Integrasi yang direncanakan: WhatsApp, Google Maps bila lokasi relevan, dan live chat setelah layanan dipilih.

### Belum diputuskan
- Daftar layanan final, harga/paket, portofolio nyata, profil bisnis, dan kontak WhatsApp.
- Penyedia live chat dan metode penerimaan formulir.
- Ketersediaan domain serta konfigurasi DNS/SSL yang kompatibel dengan hosting.

## Format entri berikutnya

Tambahkan entri baru di bagian **Unreleased**. Contoh:

```md
### YYYY-MM-DD — Ringkasan perubahan
- **Diubah:** apa yang berubah.
- **Alasan:** mengapa perubahan dilakukan.
- **Dokumen terkait:** tautan ke dokumen yang diperbarui.
```
