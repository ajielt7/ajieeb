# Rancangan Tampilan dan Frontend AJIEEB

## Arah visual

- **Karakter:** sederhana, ramah, profesional, dan terjangkau.
- **Warna utama:** hijau gelap untuk kepercayaan dan tombol utama; hijau muda sebagai aksen; krem sebagai latar; jingga lembut untuk aksen kecil.
- **Tipografi:** system UI font untuk teks dan judul agar tidak menunggu unduhan font pihak ketiga.
- **Ikon:** subset CSS hanya untuk ikon yang dipakai, sedangkan file font Font Awesome tetap disajikan melalui CDN dengan `font-display: swap`; ikon dekoratif disembunyikan dari pembaca layar.
- **Foto:** Unsplash dengan `srcset`/`sizes`, kualitas terkompresi, dan prioritas tinggi hanya untuk foto hero LCP. Foto kartu demo adalah ilustrasi, bukan screenshot karya.
- **Keterbacaan:** warna teks sekunder digelapkan agar teks kecil terbaca di atas latar terang.
- **Tata letak:** tujuh halaman HTML terpisah dengan navigasi bersama, grid kartu, CTA WhatsApp, dan layout responsif.
- **Animasi:** reveal halus saat bagian masuk viewport, stagger tipis pada kartu, dan gerak kecil pada aksen hero. Hormati `prefers-reduced-motion`; hindari animasi besar, kedipan, dan gerakan yang mengganggu membaca.
- **Ruang dan tipografi:** rapatkan jarak vertikal antarbagian; gunakan judul besar, teks isi yang mudah dibaca, dan jangan memakai teks penting di bawah 12 px. Label/judul promosi dijaga sekitar 1–3 kata; penjelasan harga dan syarat tetap cukup lengkap.
- **Visual:** gunakan foto yang lebih menonjol pada Beranda, Layanan, Contoh, Tentang, FAQ, dan Kontak. Ikon memperjelas fitur, proses, dan paket; jangan hanya mengandalkan ruang kosong untuk memberi kesan premium.

## Struktur halaman saat ini

| Halaman | File | Tujuan |
|---|---|---|
| Beranda | `index.html` | Pesan utama dan ringkasan layanan |
| Layanan | `layanan.html` | Manfaat, materi, dan alur kerja |
| Contoh | `contoh.html` | Demo konsep dengan tautan |
| Harga | `harga.html` | Paket dasar dan pilihan tambahan |
| Tentang | `tentang.html` | Profil dan cara kerja |
| FAQ | `faq.html` | Menjawab pertanyaan umum |
| Kontak | `kontak.html` | CTA WhatsApp |

## Struktur file

```text
AJIEEB/
├── index.html             # Beranda
├── layanan.html           # Layanan
├── contoh.html            # Demo portofolio
├── harga.html             # Paket dan harga
├── tentang.html           # Tentang AJIEEB
├── faq.html               # Pertanyaan umum
├── kontak.html            # Kontak WhatsApp
├── css/
│   └── styles.css         # Token desain, komponen, dan breakpoint responsif
├── js/
│   └── main.js            # Menu mobile dan tahun footer
├── docs/
│   ├── DESIGN_AND_FRONTEND.md
│   ├── PROJECT_BRIEF.md
│   ├── ROADMAP.md
│   └── WEBSITE_DRAFT.md
├── README.md
└── CHANGELOG.md
```

## Pembagian kode

- Setiap file HTML halaman memakai elemen semantik (`header`, `nav`, `main`, `section`, `article`, `footer`), metadata dasar, teks alternatif gambar, dan tautan yang dapat dipahami.
- `css/styles.css` mengelompokkan variabel warna/ukuran, header dan tombol, hero, layanan, portofolio, harga, tentang/FAQ/kontak, lalu breakpoint.
- `js/main.js` menangani navigasi menu pada layar kecil, reveal saat scroll, dan tahun footer. Tidak ada backend atau framework.
- Tautan konsultasi menggunakan WhatsApp. Formulir tidak ditampilkan karena belum ada backend penerima pesan.

## Integrasi yang menunggu konfigurasi

- **Tawk.to:** belum aktif; tambahkan snippet resmi setelah akun/properti dibuat.
- **Google Maps:** peta hanya ditambahkan pada situs klien jika alamat/lokasi publik diberikan; AJIEEB belum menampilkan peta kantor sendiri.
- **Google Search Console:** penyiapan memerlukan domain/properti yang sudah aktif dan akses dari pemilik situs.
- **Hosting dan Cloudflare:** domain gratis, hosting, DNS, dan SSL harus diverifikasi kompatibilitasnya sebelum situs diterbitkan.

## Batas klaim dan materi

- Tampilkan demo sebagai konsep; foto Unsplash pada kartu portofolio bukan tangkapan layar demo.
- Jelaskan bahwa layanan hosting/subdomain gratis mengikuti ketersediaan serta ketentuan penyedia.
- SEO dasar tidak menjanjikan peringkat atau trafik.
- Harga, nomor kontak, dan fitur perlu dikonfirmasi sebelum publikasi.
