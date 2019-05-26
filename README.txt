Procedure persiapan sebelum menjalankan aplikasi:
1. Pastikan laptop yang menjadi XAMPP server berada pada network 192.168.1.0 dengan IP address 192.168.1.100
2. Copy folder NomNom_query ke dalam folder htdocs di dalam XAMPP server
3. Import nomnom.sql ke dalam MySQL Server

Langkah untuk menjalankan aplikasi:
1. Jalankan command prompt
2. cd /d ke path folder NomNom PWA
3. Masukkan command ini: ionic serve --devapp
4. Ketika Ionic sudah selesai dicompile, akan terbuka halaman baru dengan alamat localhost:8100
5. Website yang terbuka juga dapat diakses melalui smartphone dengan mengakses 192.168.1.100:8100 (sesuai dengan IP localhost)
6. Silakan login dengan username ian.joseph & password ian123 (pencet login 2x, masih terdapat delay bug pada saat akan melakukan request ke MySQL server)
7. Click tombol find Restaurant untuk memilih resto (restoran masih dummy)
8. Click tombol Get Seated untuk melakukan aktivitas scan QR code
9. Click salah satu restoran untuk menampilkan menu.
10. Jika menu tidak muncul, silakan click tombol back, lalu kembali masuk ke resto untuk melihat menu (masih terdapat delay bug pada saat melakukan request ke MySQL server)
11. Silakan pilih item yang akan dimasukkan ke dalam cart
12. Tombol keranjang akan menampilkan list item yang telah dipilih