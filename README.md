# AJIEEB â€” Ajiz Web

AJIEEB (Ajiz Web) adalah proyek website untuk memperkenalkan dan menawarkan jasa pembuatan website bagi UMKM. Tujuan awalnya adalah membuat situs yang profesional, sederhana, mudah dipahami, dan nyaman digunakan di ponsel maupun komputer.

## Status proyek

**Tahap:** draf konten dan fondasi frontend awal. Tampilan masih perlu ditinjau dan integrasi layanan pihak ketiga belum dikonfigurasi.

## Tujuan

- Menjelaskan layanan pembuatan website untuk UMKM dengan bahasa yang jelas.
- Membantu calon klien memahami layanan, proses kerja, paket, dan cara menghubungi AJIEEB.
- Menjadi fondasi yang bisa dikembangkan bertahap tanpa menambah kompleksitas yang belum diperlukan.

## Halaman website

Website standar terdiri dari tujuh halaman HTML terpisah:

1. **Beranda** â€” manfaat layanan dan ajakan konsultasi.
2. **Layanan** â€” jenis website yang ditawarkan, misalnya profil usaha, katalog produk, dan halaman promosi. Daftar final perlu dikonfirmasi.
3. **Contoh** — demo konsep website yang diberi label jelas; bukan klaim proyek klien.
4. **Paket & Harga** â€” rincian biaya dan fitur setelah ditentukan.
5. **Tentang AJIEEB** â€” profil dan cara kerja.
6. **FAQ** â€” jawaban tentang pengerjaan, revisi, domain, hosting, dan perawatan.
7. **Kontak / Konsultasi** â€” WhatsApp dan kanal kontak lain yang memang aktif.

## Fitur yang direncanakan

- Desain responsif untuk ponsel dan desktop.
- Tombol WhatsApp untuk konsultasi.
- Google Maps hanya jika ada lokasi yang ingin ditampilkan.
- Live chat sebagai opsi setelah layanan dan mekanisme balas pesan dipilih. WhatsApp dapat menjadi kanal awal yang lebih sederhana.
- Formulir kontak hanya jika tersedia mekanisme untuk menerima dan memproses pesannya.
- Persiapan SEO dasar dan Google Search Console setelah situs terbit.

## Teknologi dan layanan

- **Frontend:** HTML, CSS, dan JavaScript.
- **Repositori kode:** GitHub.
- **Hosting yang direncanakan:** InfinityFree.
- **Domain yang diusulkan:** `ajieeb.gt.tc` (ketersediaan dan dukungan perlu diverifikasi sebelum peluncuran).
- **Cloudflare:** direncanakan untuk DNS/perlindungan sesuai dukungan domain dan hosting. Konfigurasi harus mengikuti ketentuan registrar dan penyedia hosting.
- **Google Search Console:** digunakan setelah domain dan situs dapat diverifikasi.

## Aset visual sementara

- **Gambar:** gunakan Unsplash untuk tahap awal. Pilih foto yang relevan, optimalkan ukuran/format, dan catat tautan sumber foto agar aset mudah dilacak.
- **Ikon:** gunakan Font Awesome melalui CDN. Gunakan ikon secara konsisten dan pastikan kontrol interaktif tetap memiliki label atau nama aksesibel.
- Periksa ketentuan penggunaan penyedia saat memilih aset. Hindari ketergantungan pada URL gambar eksternal yang tidak stabil untuk aset penting; pertimbangkan menyimpan aset secara lokal bila diizinkan dan sesuai alur publikasi.

## Prinsip desain

- Utamakan navigasi yang jelas, hierarki konten yang rapi, teks ringkas, dan tombol dengan label yang spesifik.
- Gunakan tampilan konsisten, kontras yang terbaca, serta perilaku yang dapat dipahami.
- Gunakan WCAG 2.2 sebagai acuan aksesibilitas, MDN sebagai rujukan teknis web, Google Search Central untuk SEO, dan Material Design sebagai inspirasi visual awal. Pilih praktik yang sesuai untuk AJIEEB, bukan menyalin sistem atau identitas vendor.
- Arah visual: sederhana, ramah, profesional, dan praktis. Gunakan gambar dan ikon secara cukup banyak untuk membantu pemasaran dan pemahaman, dengan label atau frasa singkat (umumnya 1â€“3 kata) bila konteksnya jelas.
- Visual membantu pengunjung memahami layanan; ikon tidak boleh menjadi satu-satunya petunjuk. Beri teks alternatif yang bermakna pada gambar informatif dan nama/label yang jelas pada kontrol interaktif. Informasi penting seperti rincian layanan, harga, dan ketentuan tetap harus dijelaskan dengan cukup.
- Jadikan praktik umum perusahaan teknologi besar sebagai inspirasi untuk kesederhanaan dan konsistensi; jangan menyalin logo, materi, atau desain khas pihak lain.
- Jangan membuat klaim harga, hasil, portofolio, atau kemampuan yang belum dapat dibuktikan.

## Rancangan layanan awal

Rancangan paket dasar saat ini Rp300.000 untuk tujuh halaman standar. Klien dapat memilih satu opsi tambahan seharga Rp100.000: SEO dasar per halaman atau bantuan penyiapan Google Search Console. Total paket dengan satu opsi tambahan adalah Rp400.000. Rincian dan batas cakupan ada di [`docs/PROJECT_BRIEF.md`](docs/PROJECT_BRIEF.md). Harga serta ketersediaan layanan gratis perlu dikonfirmasi sebelum dipublikasikan. Perawatan ringan dirancang Rp150.000 per hari kerja; pekerjaan berat perlu penawaran dan kesepakatan terpisah.

AJIEEB melayani UMKM di seluruh Indonesia. Website ditujukan agar terjangkau dengan layanan gratis bila tersedia; jangan menjanjikan akses selamanya karena hosting dan subdomain gratis mengikuti ketersediaan serta ketentuan penyedia. Estimasi pembuatan 3â€“7 hari setelah materi dan persetujuan lengkap. Kontak WhatsApp: 083172527880.

Portofolio awal berisi 20 demo konsep untuk bisnis makanan/minuman. Tampilkan sebagai demo, bukan pekerjaan klien, kecuali statusnya telah dikonfirmasi. Daftar dan tautannya ada di [`docs/PROJECT_BRIEF.md`](docs/PROJECT_BRIEF.md).

## Struktur frontend

- `index.html` â€” halaman Beranda.
- `layanan.html`, `contoh.html`, `harga.html`, `tentang.html`, `faq.html`, `kontak.html` â€” enam halaman lainnya.
- `css/styles.css` â€” gaya visual dan layout responsif.
- `js/main.js` â€” menu mobile dan perilaku ringan.
- Rancangan tampilan dan arsitektur: [`docs/DESIGN_AND_FRONTEND.md`](docs/DESIGN_AND_FRONTEND.md)

Frontend memakai HTML, CSS, dan JavaScript tanpa framework. Tawk.to, Google Maps dinamis, Search Console, domain, dan hosting masih menunggu konfigurasi/verifikasi.

## SEO untuk website AJIEEB

Fondasi SEO situs AJIEEB sendiri sudah disiapkan: judul dan deskripsi unik per halaman, canonical dan metadata Open Graph, `sitemap.xml`, serta `robots.txt`. URL menggunakan `https://ajieeb.gt.tc/` sebagai domain rencana; pastikan domain benar-benar aktif dan HTTPS berfungsi sebelum publikasi. Jika alamat akhir berbeda, perbarui canonical, URL Open Graph, `sitemap.xml`, dan `robots.txt`.

Setelah situs tayang, verifikasi properti di Google Search Console, kirim sitemap, lalu pantau status pengindeksan. Metadata dan sitemap membantu mesin pencari memahami/menemukan situs, tetapi tidak menjamin halaman diindeks atau mendapat posisi tertentu. Search Console untuk AJIEEB sendiri berbeda dari jasa penyiapan Search Console bagi klien.

## Dokumentasi dan catatan perubahan

- Ringkasan proyek dan keputusan: [`docs/PROJECT_BRIEF.md`](docs/PROJECT_BRIEF.md)
- Draf teks dan struktur website: [`docs/WEBSITE_DRAFT.md`](docs/WEBSITE_DRAFT.md)
- Rancangan tampilan dan struktur file: [`docs/DESIGN_AND_FRONTEND.md`](docs/DESIGN_AND_FRONTEND.md)
- Daftar pekerjaan dan pertanyaan terbuka: [`docs/ROADMAP.md`](docs/ROADMAP.md)
- Riwayat perubahan yang tersambung: [`CHANGELOG.md`](CHANGELOG.md)

Setiap perubahan penting pada tujuan, halaman, fitur, teknologi, atau deployment harus dicatat di `CHANGELOG.md` pada bagian **Unreleased**. Saat perubahan terkait mengubah keputusan atau kebutuhan, perbarui juga dokumen terkait dan tautkan entri changelog ke sana. Catat tanggal, ringkasan perubahan, dan alasan singkat; jangan menghapus catatan lama.

## Status informasi

Dokumen ini merekam keputusan awal dari perencanaan. Hal yang belum diputuskan ditandai sebagai rencana atau pertanyaan terbuka, bukan fakta final.
