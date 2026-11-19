# 🛠️ Panduan & Daftar Lengkap Tools Pembuatan Game
## Proyek: "Petualangan Sahabat Nusantara" (Game Edukasi Budaya Berbasis PWA)

Dokumen ini menyajikan panduan teknis praktis mengenai seluruh **alat (tools)**, perangkat lunak (*software*), teknologi (*tech stack*), pustaka, aset, dan lingkungan kerja yang digunakan untuk merancang, membangun, menguji, hingga merilis game **Petualangan Sahabat Nusantara** secara profesional.

---

## 📑 Daftar Isi
1. [Ikhtisar Ringkas Arsitektur & Stack Teknologi](#1-ikhtisar-ringkas-arsitektur--stack-teknologi)
2. [Perangkat Lunak & Lingkungan Pengembangan (Development Tools)](#2-perangkat-lunak--lingkungan-pengembangan-development-tools)
3. [Teknologi Inti Frontend (Core Technologies)](#3-teknologi-inti-frontend-core-technologies)
4. [Audio Engine: Web Audio API Prosedural (Tanpa File MP3)](#4-audio-engine-web-audio-api-prosedural-tanpa-file-mp3)
5. [Fitur Progressive Web App (PWA) & Service Worker](#5-fitur-progressive-web-app-pwa--service-worker)
6. [Tools Desain & Aset Grafis (Visual Assets)](#6-tools-desain--aset-grafis-visual-assets)
7. [Tools Pengujian & Otomatisasi (Testing & QA Automation)](#7-tools-pengujian--otomatisasi-testing--qa-automation)
8. [Tools Deployment, Hosting & Version Control](#8-tools-deployment-hosting--version-control)
9. [Panduan Menjalankan Proyek dari Nol (Quickstart Script)](#9-panduan-menjalankan-proyek-dari-nol-quickstart-script)

---

## 1. Ikhtisar Ringkas Arsitektur & Stack Teknologi

Game ini dirancang dengan pendekatan **Vanilla Web Stack Modern**, mengeliminasi ketergantungan pada framework berat (seperti React, Angular, atau Unity WebGL yang menghasilkan bundel 20MB–50MB) demi mencapai:
- Waktu muat kilat (*instant-load* < 1 detik).
- Ukuran total repositori yang sangat ramping (< 8 MB termasuk gambar).
- Kompatibilitas tinggi pada ponsel berspesifikasi rendah (*low-end smartphone*).
- Kemampuan berjalan 100% offline via Service Worker.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       PETUALANGAN SAHABAT NUSANTARA                         │
├─────────────────────────────────────────────────────────────────────────────┤
│  [UI & Layout]          HTML5 Semantic + CSS3 Modular (Flexbox/Grid/100dvh) │
│  [Logic & State Router] Vanilla JavaScript (ES6+ Native State Router)       │
│  [Audio Engine]         Web Audio API Synthesizer (Zero External Audio File)│
│  [Offline & PWA]        Service Worker v2 (Network-First) + Web Manifest    │
│  [Database]             game-data.js (JSON Structure 400+ Soal & Fakta)     │
│  [Testing Suite]        Microsoft Edge Headless + Chrome DevTools Protocol  │
│  [Hosting & CI/CD]      GitHub Pages (Branch main auto-deploy via Git)      │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Perangkat Lunak & Lingkungan Pengembangan (Development Tools)

Untuk membangun dan mengelola proyek ini, berikut adalah perangkat lunak yang digunakan:

### A. Teks Editor / Integrated Development Environment (IDE)
- **Visual Studio Code (VS Code)** / **Google Antigravity Agent Studio**:
  - Digunakan sebagai editor utama untuk penulisan kode HTML, CSS, JavaScript, dan Markdown.
  - **Ekstensi Pendukung**:
    - *Live Server*: Menjalankan server lokal dengan fitur auto-reload saat kode disimpan.
    - *Prettier - Code Formatter*: Menjaga kerapian indentasi dan struktur file.
    - *GitLens*: Memantau riwayat commit, perbandingan branch, dan log perubahan baris.

### B. Lingkungan Runtime Lokal (Local Runtime)
- **Node.js (LTS v20+ / v24.x)**:
  - Digunakan untuk menjalankan server HTTP lokal pengujian, menjalankan skrip otomatisasi headless, serta kompilasi bank soal dan konversi dokumen PDF.
- **Node.js Native HTTP Module (`server.js`)**:
  - Server statis ringan yang dibangun murni menggunakan modul bawaan `http`, `fs`, dan `path` tanpa memerlukan paket `express` dari npm:
  ```javascript
  // Cuplikan server.js murni tanpa dependensi
  const http = require('http');
  const fs = require('fs');
  const path = require('path');

  const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
    // Routing file statis & penentuan MIME type otomatis...
  });
  server.listen(3000, () => console.log('Server berjalan di http://localhost:3000'));
  ```

---

## 3. Teknologi Inti Frontend (Core Technologies)

### A. HTML5 Semantic (`index.html`)
- Mengorganisir elemen layar game ke dalam *game-screen* yang dikontrol melalui status aktif (`display: flex` / `none`).
- Menyediakan kontainer overlay interaktif: Jukebox Musik, Dialog Pertemuan Tokoh Adat, Modal Edukatif Waktu Habis, serta Layar Bantuan/Petunjuk.
- Dilengkapi tag meta PWA: `<meta name="mobile-web-app-capable" content="yes">`, `<meta name="theme-color" content="#b45309">`.

### B. CSS3 Modular & Advanced Responsive Design
Struktur CSS dipisahkan ke dalam modul-modul tematik:
1. `css/main.css`:
   - Variabel warna global tema Nusantara (`--wood-dark`, `--gold-primary`, `--sky-blue`, dsb.).
   - Kontainer layar penuh `body` dan `#game-wrapper` menggunakan `height: 100vh; height: 100dvh;` agar dinamis menyesuaikan address bar browser HP.
2. `css/components.css`:
   - Desain tombol 3D mengkilap dengan efek bayangan berlapis (`box-shadow: 0 5px 0 #b45309`).
   - Papan nama kayu ukir (*wood planks*) dan kartu dialog tokoh adat.
   - Aturan `@media` ketat untuk mode **Mobile Landscape** (`max-height: 480px` dan `orientation: landscape`), memastikan tombol panah karakter (*arrow nav*) aktif dan tidak ada tombol menu yang terpotong.
3. `css/animations.css`:
   - `@keyframes pulseButtonOrange`, `pulseButtonBlue`, `pulseButtonGreen`: Animasi denyut bersinar untuk tombol misi.
   - `@keyframes animPhoneRotate`: Animasi ilustrasi memutar ponsel saat posisi vertikal.

### C. Vanilla JavaScript ES6+ (Arsitektur Tanpa Framework)
Kode logika dibagi secara modular:
- `js/app.js`: State router utama, inisialisasi aplikasi, navigasi ganti karakter (`◀` / `▶`), dan event listener menu.
- `js/game-data.js`: Basis data kultural berisi 6 zona pulau, 300 soal pilihan ganda, 30 soal gambar, dan 18 level tap-matching.
- `js/costume-data.js`: Sistem penyesuaian pakaian adat otomatis untuk Boni, Rara, dan Pendekar Cilik di setiap daerah.
- `js/quiz-engine.js`: Mesin logika kuis, timer 60 detik berbasis interval, nyawa hati, bantuan keahlian karakter (50:50, ganti soal, kebal salah), dan scoring.
- `js/profile.js`: Manajemen profil pemain, penyimpanan bintang/lencana ke `localStorage`, dan penganugerahan gelar penjelajah.

---

## 4. Audio Engine: Web Audio API Prosedural (Tanpa File MP3)

Salah satu keunggulan teknis terbesar game ini adalah **tidak menggunakan satu pun file rekaman suara MP3 eksternal**. Seluruh efek suara dan musik daerah dihasilkan secara langsung melalui kode matematika gelombang suara (*Procedural Audio Synthesis*) menggunakan **Web Audio API**.

### Keuntungan:
1. **Ukuran File 0 Kilobyte**: Game tidak perlu mengunduh puluhan megabyte file MP3.
2. **Bebas Masalah Hak Cipta**: Nada gamelan, angklung, dan sasando disusun langsung menggunakan tangga nada pentatonik tradisional (*Slendro*, *Pelog*, dan *Diatonis Nusantara*).
3. **Instan Tanpa Latensi**: Efek suara tombol langsung berbunyi seketika disentuh.

### Komponen Teknis Web Audio API yang Digunakan:
- `AudioContext`: Engine utama pemrosesan audio browser.
- `OscillatorNode`: Generator gelombang suara (`sine`, `triangle`, `square`, `sawtooth`).
- `GainNode`: Pengatur volume dan pembentuk envelope ADSR (*Attack, Decay, Sustain, Release*) untuk menirukan getaran bilah logam gamelan atau tabung bambu angklung.
- `BiquadFilterNode`: Filter frekuensi untuk memberikan resonansi ruang (*echo/reverb*).

### 6 Musik Daerah Prosedural yang Diciptakan:
1. **Gamelan Degung Jawa**: Tangga nada Pelog Jawa dengan aksen ketukan gong rendah.
2. **Angklung Tabung Bambu Sunda**: Akor getar berulang (*tremolo*) menyerupai goyangan bambu.
3. **Sasando Petik Rote (NTT)**: Pola arpeggio cepat dengan nada tinggi berdenting jernih.
4. **Kolintang Kayu Minahasa (Sulawesi)**: Resonansi bilah kayu khas Celebes.
5. **Rampak Tari Saman (Aceh)**: Ritme perkusi cepat dengan aksen dinamis bertempo naik.
6. **Poco-Poco Maluku**: Beat dansa gembira dengan pola bassline berulang.

---

## 5. Fitur Progressive Web App (PWA) & Service Worker

Game ini memenuhi standar resmi PWA sehingga dapat diinstal langsung ke layar utama smartphone seperti aplikasi Android/iOS asli:

### A. Manifest Aplikasi (`manifest.json`)
```json
{
  "name": "Petualangan Sahabat Nusantara",
  "short_name": "SahabatNusantara",
  "start_url": "./index.html",
  "display": "fullscreen",
  "orientation": "landscape",
  "background_color": "#0284c7",
  "theme_color": "#b45309",
  "icons": [
    {
      "src": "assets/icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "assets/icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### B. Service Worker v2 (`sw.js`)
Menggunakan strategi caching cerdas **Network-First**:
- Saat ponsel terhubung internet, aplikasi memprioritaskan pengambilan file terbaru dari server GitHub Pages.
- Salinan file otomatis disimpan ke Cache Storage `sahabat-nusantara-v2`.
- Saat ponsel tidak memiliki sinyal atau mode pesawat, Service Worker otomatis menyajikan game dari Cache Storage, memungkinkan permainan berjalan 100% offline.

---

## 6. Tools Desain & Aset Grafis (Visual Assets)

- **Vector Graphics & Raster Editing Tools**:
  - Digunakan untuk menggambar karakter Boni, Rara, dan Pendekar Cilik dalam berbagai pose dan busana daerah.
  - Ilustrasi landmark kebudayaan: Candi Borobudur/Prambanan, Rumah Gadang Minangkabau, Tongkonan Toraja, Rumah Betang Dayak, Honai Papua, dan Pura Ulun Danu Bali.
- **Format Aset**:
  - PNG terkompresi 8-bit/24-bit dengan saluran transparansi (*alpha channel*).
  - SVG (*Scalable Vector Graphics*) untuk ikon UI, bendera merah putih, dan ornamen daun.

---

## 7. Tools Pengujian & Otomatisasi (Testing & QA Automation)

Untuk memastikan tampilan game tidak terpotong di layar HP sempit (landscape 320px) sekaligus menjaga tampilan desktop (1280x720) tetap sempurna, digunakan tools otomatisasi:

### A. Microsoft Edge Headless via Chrome DevTools Protocol (CDP)
- Pengujian dijalankan tanpa membuka jendela browser fisik (*headless*):
```javascript
const { spawn } = require('child_process');
const proc = spawn('C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', [
  '--headless=new',
  '--remote-debugging-port=9231',
  '--window-size=800,320',
  'http://localhost:3000/'
]);
```
- Menghubungkan WebSocket ke DevTools untuk mengukur posisi koordinat elemen secara presisi:
  - Memverifikasi tombol panah `[ ◀ ]` dan `[ ▶ ]` berfungsi mengganti karakter.
  - Memastikan batas bawah tombol *Pilih Musik* berada di bawah 320px (tidak terpotong).
  - Memastikan ketiga kartu misi di Hub Jawa muat 100% tanpa scroll.
  - Menangkap screenshot JPEG hasil uji secara otomatis untuk evaluasi visual.

---

## 8. Tools Deployment, Hosting & Version Control

### A. Git CLI
- Kontrol versi distributed untuk melacak setiap tahapan perbaikan:
  ```bash
  git add index.html css/ components.css js/ sw.js
  git commit -m "feat: mobile compact landscape, arrow character nav & responsive quiz scaling"
  git push origin main
  ```

### B. GitHub Repository & GitHub Pages
- **Repositori Daring**: `https://github.com/majidatp/game`
- **Hosting Statis Global**: **GitHub Pages**
  - Menyediakan CDN global dengan sertifikat keamanan SSL/HTTPS otomatis (syarat wajib agar Service Worker PWA dapat berjalan).
  - Mengompilasi dan mempublikasikan versi terbaru secara instan setiap kali ada push ke branch `main`.
- **Tautan Live Game**: `https://majidatp.github.io/game/`

---

## 9. Panduan Menjalankan Proyek dari Nol (Quickstart Script)

Bagi siapa pun yang ingin mengkloning dan menjalankan proyek ini di komputer lokal:

```bash
# 1. Kloning repositori dari GitHub
git clone https://github.com/majidatp/game.git

# 2. Masuk ke direktori game
cd game

# 3. Jalankan server lokal (menggunakan Node.js bawaan)
node server.js

# 4. Buka di browser
# Akses alamat: http://localhost:3000
```

---

> **Kesimpulan:** Game "Petualangan Sahabat Nusantara" berhasil membuktikan bahwa game edukasi web interaktif berkualitas tinggi, berfitur audio kaya, dan responsif lintas perangkat dapat dibangun secara efisien menggunakan **tools open-source standar web modern** tanpa perlu lisensi software berbayar yang mahal.
