B📘 Manual Book – Quran Progress Tracker
1. 📌 Deskripsi Aplikasi

Quran Progress Tracker adalah aplikasi berbasis web sederhana yang digunakan untuk:

Melacak progres hafalan Al-Qur’an per surah
Menghitung total ayat yang sudah dihafal
Menampilkan statistik dan persentase progres
Menyimpan riwayat aktivitas hafalan

Data disimpan secara lokal di browser (localStorage), sehingga tidak memerlukan login atau internet setelah dimuat.

2. 🚀 Cara Menjalankan Aplikasi
Simpan file sebagai index.html
Buka file menggunakan browser (Chrome, Edge, Firefox, dll)
Aplikasi langsung siap digunakan tanpa instalasi tambahan
3. 🧭 Tampilan Utama
a. Header
Judul aplikasi
Tombol Riwayat untuk melihat aktivitas hafalan
b. Dashboard Statistik

Menampilkan:

Surah Selesai → jumlah surah yang sudah tuntas
Total Ayat → total ayat yang telah dihafal
Total Progress (%) → progres keseluruhan
4. 🔍 Fitur Pencarian & Filter
Pencarian
Ketik nama surah (contoh: Al-Baqarah)
Bisa juga menggunakan nomor surah
Filter
Semua → tampilkan semua surah
Sedang Dihafal → progres sebagian
Selesai → surah yang sudah lengkap
Reset Semua → menghapus seluruh data (⚠️ permanen)
5. 📖 Fitur Utama (Tracking Hafalan)

Setiap kartu surah memiliki:

Nama surah + terjemahan
Jumlah ayat
Status (Makkiyah/Madaniyah)
Progress bar berbentuk lingkaran
Tombol Kontrol:
➖ : Mengurangi jumlah hafalan
➕ : Menambah jumlah hafalan
Selesaikan Surah : langsung tandai selesai

Jika sudah selesai:

Akan muncul label “Tuntas ✨”
6. 📊 Sistem Progress

Progress dihitung berdasarkan:

Jumlah ayat yang dihafal per surah
Total seluruh ayat dalam Al-Qur’an

Ditampilkan dalam:

Angka (%)
Progress bar horizontal
Progress lingkaran per surah
7. 🕘 Riwayat Aktivitas

Klik tombol Riwayat untuk membuka pop-up berisi:

Aktivitas penambahan hafalan
Pengurangan hafalan
Penyelesaian surah
Informasi yang ditampilkan:
Nama aktivitas
Waktu kejadian
Detail perubahan

📌 Maksimal menyimpan 50 aktivitas terakhir

Tombol:
Hapus Semua → menghapus riwayat
8. 💾 Penyimpanan Data

Semua data disimpan di:

localStorage browser

Meliputi:

Progress hafalan (quran_progress_data)
Riwayat aktivitas (quran_activity_logs)

📌 Data tidak akan hilang kecuali:

Browser dihapus cache/storage
Klik tombol Reset Semua
9. ⚠️ Reset Data

Fitur Reset Semua akan:

Menghapus seluruh progres hafalan
Menghapus riwayat aktivitas

Akan muncul konfirmasi sebelum dijalankan.

10. ⚙️ Teknologi yang Digunakan
HTML5
Tailwind CSS (UI Styling)
Alpine.js (interaktivitas)
LocalStorage (penyimpanan data)
11. 💡 Tips Penggunaan
Gunakan setiap hari untuk tracking konsisten
Fokus ke filter “Sedang Dihafal”
Gunakan riwayat untuk evaluasi progres
12. 🧾 Informasi Tambahan
Tidak membutuhkan database
Bisa dijalankan offline
Cocok untuk pribadi, santri, atau program tahfidz

Created By Alima Ladang Berkah 2026
