# 🎮 Buku Panduan & Penjelasan Lengkap Game
## "Petualangan Sahabat Nusantara"

Selamat datang di buku panduan resmi **Petualangan Sahabat Nusantara**, game edukasi interaktif berbasis web (*Progressive Web App*) yang mengajak generasi muda menjelajahi kekayaan budaya, tradisi leluhur, landmark bersejarah, wastra adiluhung, dan pusaka legendaris dari **38 provinsi di seluruh Nusantara**.

---

## 📑 Daftar Isi
1. [Latar Belakang & Sinopsis Cerita](#1-latar-belakang--sinopsis-cerita)
2. [Mengenal Tiga Sahabat Nusantara & Keahlian Khusus](#2-mengenal-tiga-sahabat-nusantara--keahlian-khusus)
3. [Sistem Kostum Adat & Tamu Kehormatan](#3-sistem-kostum-adat--tamu-kehormatan)
4. [Peta Petualangan & Enam Zona Wilayah Budaya](#4-peta-petualangan--enam-zona-wilayah-budaya)
5. [Tiga Misi Permainan Berjenjang](#5-tiga-misi-permainan-berjenjang)
6. [Mekanik Game: Timer, Nyawa & Modal Edukatif](#6-mekanik-game-timer-nyawa--modal-edukatif)
7. [Sistem Gamifikasi: Skor, Bintang, Gelar & Lencana](#7-sistem-gamifikasi-skor-bintang-gelar--lencana)
8. [Jukebox Musik Tradisional Nusantara Prosedural](#8-jukebox-musik-tradisional-nusantara-prosedural)
9. [Panduan Pemasangan Aplikasi (PWA) di Smartphone](#9-panduan-pemasangan-aplikasi-pwa-di-smartphone)

---

## 1. Latar Belakang & Sinopsis Cerita

Di tengah pesatnya perkembangan era digital dan modernisasi global, pengetahuan generasi muda terhadap nilai-nilai luhur budaya bangsa kian tergerus. Banyak anak Indonesia yang lebih mengenal budaya pop mancanegara dibandingkan filosofi batik, kemegahan candi, keragaman rumah adat, maupun kisah kepahlawanan di pelosok Nusantara.

Untuk merespons tantangan tersebut, hadir kisah **Tiga Sahabat Nusantara**: **Boni**, **Rara**, dan **Pendekar Cilik**. Mereka menerima amanah dari para Tetua Adat untuk berkelana mengarungi kepulauan Indonesia. Tugas mulia mereka adalah menemui para **Penjaga Budaya Asli** di setiap pulau, menyelesaikan tantangan kuis pengetahuan adat, dan mengumpulkan kembali **Enam Keris & Pusaka Legendaris** agar api kelestarian budaya Indonesia tetap menyala abadi.

---

## 2. Mengenal Tiga Sahabat Nusantara & Keahlian Khusus

Sebelum memulai petualangan di halaman utama (*Title Screen*), pemain dapat memilih salah satu dari 3 karakter penjelajah. Setiap karakter memiliki latar belakang unik dan **Keahlian Khusus (*Special Skill*)** yang dapat digunakan satu kali di setiap misi:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       TIGA SAHABAT PENJELAJAH                               │
├─────────────────────────────────────────────────────────────────────────────┤
│  1. BONI         Penjelajah Cilik Berbaju Batik                             │
│     Skill:       [Kompas Penjelajah] ➔ Mengganti/refresh soal kuis (1x)     │
│                                                                             │
│  2. RARA         Pencinta Budaya Berbunga Kamboja                           │
│     Skill:       [Intuisi Budaya] ➔ Mengeliminasi 2 opsi salah / 50:50 (1x) │
│                                                                             │
│  3. PENDEKAR     Penjaga Tradisi Tangguh                                    │
│     Skill:       [Perisai Pusaka] ➔ Kebal terhadap 1x jawaban salah (1x)    │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 🧑‍🦱 A. Boni: Penjelajah Cilik Berbaju Batik
- **Deskripsi:** Anak pemberani yang gemar membaca peta kuno dan menjelajahi situs bersejarah. Mengenakan kemeja batik motif parang, celana kargo petualang, dan ransel penjelajah.
- **Keahlian Khusus (*Kompas Penjelajah*):** Ketika menghadapi pertanyaan yang sangat sulit atau membingungkan, pemain dapat menekan tombol skill Boni untuk langsung me-refresh soal tersebut dan menggantinya dengan pertanyaan baru tanpa penalti nyawa.

### 👧 B. Rara: Pencinta Budaya Berbunga Kamboja
- **Deskripsi:** Gadis cerdas, anggun, dan ramah yang mencintai tarian tradisional, kain tenun, dan keindahan alam Nusantara. Rara mengenakan kebaya Kartini modern dengan hiasan bunga kamboja kuning yang disematkan di telinga kanannya.
- **Keahlian Khusus (*Intuisi Budaya*):** Melalui kepekaannya terhadap seni dan adat, Rara dapat mengeliminasi 2 pilihan jawaban yang salah (mekanisme 50:50), menyisakan 1 jawaban benar dan 1 pengecoh, sehingga peluang pemain menjawab benar melonjak menjadi 50%.

### 🥋 C. Pendekar Cilik: Penjaga Tradisi Tangguh
- **Deskripsi:** Remaja tangkas yang mendalami bela diri pencak silat warisan leluhur. Mengenakan busana silat hitam dengan selempang kain keemasan dan ikat kepala pendekar.
- **Keahlian Khusus (*Perisai Pusaka*):** Ketika pemain ragu-ragu dan tanpa sengaja memilih jawaban yang salah, perisai pusaka pendekar otomatis aktif menyerap kesalahan tersebut. Nyawa (hati) pemain tidak akan berkurang, dan pemain mendapatkan kesempatan kedua untuk menjawab.

---

## 3. Sistem Kostum Adat & Tamu Kehormatan

Game ini menyajikan fitur imersif di mana karakter pemain **secara otomatis berganti pakaian adat tradisional** sesuai dengan pulau yang sedang dikunjungi (`js/costume-data.js`).

Ketika pemain tiba di sebuah pulau:
1. **Di Jawa:** Boni mengenakan *Beskap Kraton & Blangkon*, Rara mengenakan *Kebaya Kartini & Sanggul Melati*.
2. **Di Sumatera:** Boni & Rara mengenakan *Baju Adat Songket Minangkabau & Selempang Ulos Batak*.
3. **Di Kalimantan:** Mengenakan *Rompi Kulit Kayu & Mahkota Bulu Burung Enggang Khas Dayak*.
4. **Di Sulawesi:** Mengenakan *Baju Bodo Sutra Bugis Makassar & Busana Pa'gellu Toraja*.
5. **Di Maluku & Papua:** Mengenakan *Hiasan Kepala Bulu Cendrawasih & Rumbai Tenun Asmat*.
6. **Di Bali & Nusa Tenggara:** Mengenakan *Kamen Endek, Selendang Prada & Destar Udeng Bali*.

Pada layar dialog pulau (*Screen Dialog*), Pasangan Tokoh Adat setempat (seperti *Raden Bagus & Dewi Sekartaji* di Jawa, *Datuk Maringgai & Puti Bungsu* di Sumatera, dll.) akan menyambut pemain dengan sebutan **"Tamu Kehormatan"** dan memuji busana adat yang dikenakan!

---

## 4. Peta Petualangan & Enam Zona Wilayah Budaya

Pemain menjelajahi Nusantara melalui Peta Interaktif 2D yang membagi Indonesia ke dalam **6 Zona Budaya Utama**:

| Zona | Wilayah Budaya | Landmark Utama | Tokoh Penjaga Adat | Pusaka Legendaris yang Dicari |
| :---: | :--- | :--- | :--- | :--- |
| **1** | **Jawa** | Candi Borobudur & Prambanan | Raden Bagus & Dewi Sekartaji | **Keris Pusaka Pamor Meteorit** |
| **2** | **Sumatera** | Rumah Gadang & Jam Gadang | Datuk Maringgai & Puti Bungsu | **Rencong Emas Kesultanan** |
| **3** | **Kalimantan** | Rumah Betang & Sungai Mahakam | Tumenggung Dayak & Intan Kumala | **Mandau Pusaka Batang Garing** |
| **4** | **Sulawesi** | Tongkonan Toraja & Perahu Pinisi | Daeng Macora & Puang Matua | **Badik Sakti Panre Lompo** |
| **5** | **Maluku & Papua** | Benteng Belgica & Lembah Baliem | Kapitan Pattimura & Mambruk Papua | **Parang Salawaku & Tombak Asmat** |
| **6** | **Bali & Nusra** | Pura Ulun Danu & Taman Komodo | Gusti Ngurah & Ida Ayu Ratna | **Keris Kamardikan & Sasando Pusaka** |

Setiap zona terbuka secara bertahap (*sequential unlocking*), memotivasi pemain untuk menyelesaikan satu pulau sebelum melangkah ke wilayah berikutnya.

---

## 5. Tiga Misi Permainan Berjenjang

Di setiap pulau, pemain harus menyelesaikan **3 Misi Edukatif Berbeda** untuk mendapatkan 3 Bintang Emas penuh dan membuka pusaka pulau:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              TIGA MISI PULAU                                │
├─────────────────────────────────────────────────────────────────────────────┤
│  MISI 1: PILIHAN GANDA (MCQ)                                                │
│  ➔ 5 Soal trivia sejarah, kuliner, falsafah & adat istiadat                 │
│                                                                             │
│  MISI 2: TEBAK VISUAL (GAMBAR)                                              │
│  ➔ 5 Gambar foto artefak, landmark candi, motif batik, senjata tradisional  │
│                                                                             │
│  MISI 3: TAP-MATCHING (TANTANGAN PASANGAN BUDAYA)                           │
│  ➔ Menghubungkan pasangan budaya bertingkat (Easy ➔ Normal ➔ Hard)          │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 📝 Misi 1: Kuis Pilihan Ganda (5 Soal)
- Diambil secara acak menggunakan algoritma Fisher-Yates dari **50 bank soal** di pulau terkait.
- Menguji wawasan sejarah kerajaan, nama tarian daerah, upacara adat, serta kuliner khas.

### 🖼️ Misi 2: Tebak Visual / Gambar (5 Soal)
- Pemain disajikan foto artefak, candi megah, motif wastra, atau satwa endemik.
- Pemain harus mengenali dan memilih nama objek budaya yang tepat dari 4 opsi jawaban.

### 🎯 Misi 3: Tap-Matching (Tantangan Pasangan Budaya Bertingkat)
- Menguji daya ingat dan pemahaman relasi budaya melalui sistem sentuh pasangan kartu.
- Terdiri atas 3 tahap:
  - **Easy:** 3 Pasangan kartu (contoh: Gudeg ➔ Yogyakarta, Rawon ➔ Surabaya, Lumpia ➔ Semarang).
  - **Normal:** 4 Pasangan kartu tari dan alat musik.
  - **Hard:** 5 Pasangan rumah adat, senjata, dan filosofi daerah.

---

## 6. Mekanik Game: Timer, Nyawa & Modal Edukatif

### ⏳ A. Timer 60 Detik di Setiap Pertanyaan
- Di bilah status atas kuis terdapat indikator timer `⏳ 01:00`.
- Waktu menghitung mundur 1 detik demi 1 detik.
- **Peringatan Visual:**
  - Waktu normal (&gt; 15 detik): Lencana kuning emas tenang.
  - Sisa 15 detik: Berubah oranye (*Warning*).
  - Sisa 5 detik: Berubah merah dan berdenyut kencang (*Danger*).
- Jika waktu habis sebelum pemain memilih opsi, nyawa berkurang 1 dan sistem otomatis menampilkan modal edukatif kunci jawaban.

### ❤️ B. Sistem Tiga Hati (Nyawa)
- Pemain memiliki 3 kesempatan hati: ❤️ ❤️ ❤️.
- Jawaban benar menambah skor combo dan mengapresiasi pemain dengan efek suara ceria.
- Jawaban salah memecahkan 1 hati (`💔`).
- Jika ketiga hati habis, kuis berakhir dan pemain dapat mengulang misi dengan bank soal acak yang baru.

### 💡 C. Modal Pembahasan Edukatif
- Setiap kali pemain menjawab (baik benar, salah, maupun kehabisan waktu), popup edukatif muncul menyajikan fakta sejarah mendalam. Ini memastikan bahwa esensi utama permainan adalah **pembelajaran yang menyenangkan (*fun learning*)**, bukan sekadar hukuman nilai.

---

## 7. Sistem Gamifikasi: Skor, Bintang, Gelar & Lencana

Untuk membangun motivasi jangka panjang, game menerapkan sistem apresiasi berlapis:

### ⭐ A. Bintang & Poin Wilayah
- Menyelesaikan Misi 1: Memperoleh 1 Bintang Emas.
- Menyelesaikan Misi 2: Memperoleh 2 Bintang Emas.
- Menyelesaikan Misi 3: Memperoleh 3 Bintang Penuh, membuka Lencana Emas pulau, dan menyelamatkan Pusaka Daerah!

### 🎖️ B. Enam Tingkatan Gelar Penjelajah
Pemain naik pangkat berdasarkan akumulasi bintang yang dikumpulkan di menu **Profil Penjelajah**:
1. **Penjelajah Baru** (0 Bintang): Memulai petualangan di gerbang Nusantara.
2. **Sahabat Tradisi** (1–2 Bintang): Mulai mengenal kekayaan seni dan budaya lokal.
3. **Pelindung Wastra** (3–4 Bintang): Memahami makna luhur motif kain dan pakaian adat.
4. **Penjaga Pusaka** (5–8 Bintang): Menguasai sejarah keraton dan senjata tradisional.
5. **Ksatria Nusantara** (9–12 Bintang): Menjelajahi sebagian besar pulau besar Indonesia.
6. **Maha Guru Budaya** (13–18 Bintang): Pangkat tertinggi! Menguasai seluruh rahasia budaya 38 provinsi di Nusantara!

---

## 8. Jukebox Musik Tradisional Nusantara Prosedural

Pemain dapat mengakses **Jukebox Musik** kapan saja melalui tombol nada di pojok kanan atas layar. Seluruh lagu dimainkan secara sintesis prosedural melalui **Web Audio API**:

1. **Gamelan Degung Jawa:** Harmoni lembut bilah perunggu yang menenangkan jiwa, cocok mengiringi petualangan candi Jawa.
2. **Angklung Sunda:** Irama dinamis goyangan bambu khas tatar Parahyangan.
3. **Sasando Rote:** Petikan dawai magis dari Pulau Rote, NTT, yang berdenting jernih laksana tetesan embun pagi.
4. **Kolintang Minahasa:** Melodi riang ketukan bilah kayu warisan luhur Sulawesi Utara.
5. **Rampak Tari Saman:** Ketukan ritmis bersemangat tinggi yang memacu adrenalin.
6. **Poco-Poco Maluku:** Irama dansa khas Maluku yang membangkitkan keceriaan bermain.

---

## 9. Panduan Pemasangan Aplikasi (PWA) di Smartphone

Game ini dioptimalkan penuh sebagai **Progressive Web App (PWA)** sehingga dapat dipasang langsung di smartphone tanpa melalui Google Play Store atau Apple App Store:

### 📱 Di Ponsel Android (Google Chrome):
1. Buka tautan: `https://majidatp.github.io/game/`
2. Tekan tombol menu titik tiga (**⋮**) di pojok kanan atas browser.
3. Pilih **"Tambahkan ke Layar Utama"** (*Add to Home Screen*) atau **"Instal Aplikasi"**.
4. Ikon resmi *Sahabat Nusantara* akan muncul di beranda ponsel Anda dan dapat dimainkan secara layar penuh (*fullscreen*) serta offline!

### 🍏 Di iPhone / iPad (Apple Safari):
1. Buka tautan: `https://majidatp.github.io/game/`
2. Tekan tombol **Bagikan** (*Share Button* - ikon kotak dengan panah ke atas di bawah layar).
3. Gulir ke bawah dan pilih **"Tambah ke Layar Utama"** (*Add to Home Screen*).
4. Tekan **"Tambah"** di pojok kanan atas. Game siap dimainkan kapan saja!

---

> *"Bangsa yang besar adalah bangsa yang menghargai dan melestarikan kebudayaan luhur warisan para leluhurnya."* Selamat berpetualang bersama Sahabat Nusantara!
