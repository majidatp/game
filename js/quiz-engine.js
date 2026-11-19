// quiz-engine.js - Engine Kuis Interaktif 6 Wilayah dengan 30 Vektor SVG & Mode Bertingkat
window.QUIZ_ENGINE = (function() {
  let currentZone = null;
  let currentMode = "mcq"; // "mcq", "image", "match"
  let currentIndex = 0;
  let onCompleteCallback = null;
  let activeQuestionPool = [];
  let activeQuestionState = null;

  // Sistem Nyawa & Keahlian Khusus (Skill) Karakter
  let maxLives = 3;
  let currentLives = maxLives;
  let hasUsedReroll = false;
  let hasUsedFiftyFifty = false;

  function getMaxLivesForActiveCharacter() {
    const charId = (window.APP && typeof window.APP.getCurrentKarakterId === "function")
      ? window.APP.getCurrentKarakterId()
      : (localStorage.getItem("karakterTerpilih") || "boni");
    return (charId === "pendekar") ? 4 : 3;
  }

  function updateLivesUI() {
    const container = document.getElementById("quiz-lives-container");
    if (!container) return;
    let html = "";
    for (let i = 0; i < maxLives; i++) {
      if (i < currentLives) {
        html += '<span class="heart-icon active">❤️</span>';
      } else {
        html += '<span class="heart-icon lost">💔</span>';
      }
    }
    container.innerHTML = html;
  }

  function updateCompanionQuote(mood) {
    if (!window.COSTUME_DATA || !currentZone) return;
    const charId = (window.APP && typeof window.APP.getCurrentKarakterId === "function")
      ? window.APP.getCurrentKarakterId()
      : (localStorage.getItem("karakterTerpilih") || "boni");
    const costume = window.COSTUME_DATA.getCostume(charId, currentZone.id);
    if (!costume) return;

    const quoteEl = document.getElementById("quiz-companion-quote");
    const nameEl = document.getElementById("quiz-companion-name");
    const costumePill = document.getElementById("quiz-companion-costume");
    const badgeEl = document.getElementById("quiz-costume-badge");

    if (costumePill) costumePill.innerText = costume.costumeName;
    if (badgeEl) badgeEl.innerText = costume.avatarIcon;

    if (quoteEl) {
      if (mood === "correct") {
        quoteEl.innerText = costume.quoteCorrect;
      } else if (mood === "wrong") {
        quoteEl.innerText = costume.quoteWrong;
      } else if (mood === "danger") {
        quoteEl.innerText = costume.quoteDanger;
      } else {
        quoteEl.innerText = costume.quoteStart;
      }
    }
  }

  // Algoritma Pengacakan Fisher-Yates
  function shuffleArray(arr) {
    if (!Array.isArray(arr)) return [];
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Kamus 30 Ilustrasi Vektor SVG Budaya Nusantara
  const SVG_LIB = {
    // --- JAWA ---
    batik_parang: `
      <svg viewBox="0 0 200 140" class="quiz-svg-img" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="140" rx="8" fill="#5c381c"/>
        <g stroke="#e2b772" stroke-width="4" stroke-linecap="round">
          <line x1="20" y1="130" x2="90" y2="10" /><line x1="60" y1="130" x2="130" y2="10" />
          <line x1="100" y1="130" x2="170" y2="10" /><line x1="140" y1="130" x2="200" y2="30" />
        </g>
        <g fill="#fbe8be">
          <circle cx="50" cy="75" r="7"/><circle cx="90" cy="75" r="7"/><circle cx="130" cy="75" r="7"/>
          <circle cx="70" cy="40" r="6"/><circle cx="110" cy="40" r="6"/><circle cx="150" cy="40" r="6"/>
          <circle cx="30" cy="110" r="6"/><circle cx="70" cy="110" r="6"/><circle cx="110" cy="110" r="6"/>
        </g>
        <text x="100" y="132" fill="#fff" font-size="10" text-anchor="middle" font-weight="bold">Batik Parang Rusak</text>
      </svg>
    `,
    batik_megamendung: `
      <svg viewBox="0 0 200 140" class="quiz-svg-img" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="140" rx="8" fill="#e0f2fe"/>
        <!-- Awan Mega Mendung Biru Gradasi Cirebon -->
        <path d="M 20 80 Q 50 40 90 75 Q 120 30 160 70 Q 185 85 180 110 L 20 110 Z" fill="#1e3a8a"/>
        <path d="M 30 82 Q 55 50 90 80 Q 120 45 155 78 Q 175 90 170 105 L 30 105 Z" fill="#2563eb"/>
        <path d="M 45 85 Q 65 60 90 85 Q 120 60 145 85 L 45 85 Z" fill="#60a5fa"/>
        <path d="M 60 90 Q 80 72 90 90 Q 110 72 130 90 Z" fill="#bfdbfe"/>
        <text x="100" y="132" fill="#1e3a8a" font-size="10" text-anchor="middle" font-weight="bold">Mega Mendung Cirebon</text>
      </svg>
    `,
    rumah_joglo: `
      <svg viewBox="0 0 200 140" class="quiz-svg-img" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="140" rx="8" fill="#fef3c7"/>
        <!-- Atap Tajug Joglo Piramida Menjulang -->
        <polygon points="100,20 60,65 140,65" fill="#78350f" stroke="#451a03" stroke-width="2"/>
        <polygon points="50,65 20,95 180,95 150,65" fill="#92400e" stroke="#451a03" stroke-width="2"/>
        <!-- Tiang Kayu Saka Guru Pendopo -->
        <rect x="55" y="95" width="8" height="35" fill="#58240c"/>
        <rect x="85" y="95" width="8" height="35" fill="#58240c"/>
        <rect x="110" y="95" width="8" height="35" fill="#58240c"/>
        <rect x="140" y="95" width="8" height="35" fill="#58240c"/>
        <rect x="30" y="128" width="140" height="8" rx="2" fill="#d97706"/>
      </svg>
    `,
    candi_prambanan: `
      <svg viewBox="0 0 200 140" class="quiz-svg-img" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="140" rx="8" fill="#bae6fd"/>
        <!-- Siluet Menara Candi Siwa Prambanan Menjulang Tinggi Ramping -->
        <path d="M 100 15 L 115 50 L 125 100 L 135 125 L 65 125 L 75 100 L 85 50 Z" fill="#475569" stroke="#1e293b" stroke-width="2"/>
        <!-- Candi Pengapit Kiri Kanan -->
        <path d="M 50 45 L 60 80 L 68 125 L 32 125 L 40 80 Z" fill="#64748b"/>
        <path d="M 150 45 L 160 80 L 168 125 L 132 125 L 140 80 Z" fill="#64748b"/>
        <!-- Relief Relief Tingkat Candi -->
        <line x1="85" y1="55" x2="115" y2="55" stroke="#cbd5e1" stroke-width="2"/>
        <line x1="80" y1="80" x2="120" y2="80" stroke="#cbd5e1" stroke-width="2"/>
        <line x1="75" y1="105" x2="125" y2="105" stroke="#cbd5e1" stroke-width="2"/>
      </svg>
    `,
    gunungan_wayang: `
      <svg viewBox="0 0 200 140" class="quiz-svg-img" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="140" rx="8" fill="#fef9c3"/>
        <!-- Daun Gunungan / Kayon Meruncing -->
        <path d="M 100 12 Q 155 60 145 105 L 55 105 Q 45 60 100 12 Z" fill="#d97706" stroke="#78350f" stroke-width="2"/>
        <!-- Batang Cempurit Bawah -->
        <rect x="97" y="105" width="6" height="28" fill="#451a03"/>
        <!-- Ukiran Pohon Hayat & Pintu Gerbang -->
        <path d="M 100 45 L 100 90 M 100 65 Q 120 50 135 65 M 100 65 Q 80 50 65 65" stroke="#fef08a" stroke-width="3" fill="none"/>
        <rect x="88" y="85" width="24" height="20" rx="3" fill="#991b1b" stroke="#fef08a" stroke-width="1.5"/>
      </svg>
    `,

    // --- SUMATERA ---
    rumah_gadang: `
      <svg viewBox="0 0 200 140" class="quiz-svg-img" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="140" rx="8" fill="#e8f4f8"/>
        <rect x="40" y="80" width="120" height="40" fill="#8d5b4c" stroke="#5a382b" stroke-width="2"/>
        <rect x="55" y="90" width="16" height="20" fill="#fbd290"/>
        <rect x="92" y="90" width="16" height="20" fill="#fbd290"/>
        <rect x="129" y="90" width="16" height="20" fill="#fbd290"/>
        <line x1="45" y1="120" x2="45" y2="135" stroke="#4a2e23" stroke-width="4"/>
        <line x1="85" y1="120" x2="85" y2="135" stroke="#4a2e23" stroke-width="4"/>
        <line x1="115" y1="120" x2="115" y2="135" stroke="#4a2e23" stroke-width="4"/>
        <line x1="155" y1="120" x2="155" y2="135" stroke="#4a2e23" stroke-width="4"/>
        <!-- Atap Gonjong Tanduk Kerbau -->
        <path d="M 20 50 Q 55 75 100 75 Q 145 75 180 50 L 195 40 Q 155 90 100 85 Q 45 90 5 40 Z" fill="#2d3748" stroke="#1a202c" stroke-width="2"/>
        <polygon points="20,50 35,25 45,55" fill="#4a5568"/>
        <polygon points="180,50 165,25 155,55" fill="#4a5568"/>
        <polygon points="85,60 100,30 115,60" fill="#4a5568"/>
      </svg>
    `,
    kain_songket: `
      <svg viewBox="0 0 200 140" class="quiz-svg-img" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="140" rx="8" fill="#991b1b"/>
        <!-- Tenunan Benang Emas Mewah Belah Ketupat -->
        <g stroke="#facc15" stroke-width="2" fill="none">
          <polygon points="50,35 65,55 50,75 35,55" fill="#eab308"/>
          <polygon points="100,35 115,55 100,75 85,55" fill="#eab308"/>
          <polygon points="150,35 165,55 150,75 135,55" fill="#eab308"/>
          <polygon points="75,70 90,90 75,110 60,90" fill="#eab308"/>
          <polygon points="125,70 140,90 125,110 110,90" fill="#eab308"/>
          <line x1="10" y1="20" x2="190" y2="20" stroke="#fde047" stroke-width="3"/>
          <line x1="10" y1="125" x2="190" y2="125" stroke="#fde047" stroke-width="3"/>
        </g>
      </svg>
    `,
    senjata_rencong: `
      <svg viewBox="0 0 200 140" class="quiz-svg-img" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="140" rx="8" fill="#f8fafc"/>
        <!-- Gagang Rencong Tulang Melengkung Huruf Arab -->
        <path d="M 40 40 Q 60 25 80 50 L 70 70 Z" fill="#78350f" stroke="#451a03" stroke-width="2"/>
        <circle cx="48" cy="36" r="6" fill="#facc15"/>
        <!-- Bilah Baja Tajam Melekuk Khas Aceh -->
        <path d="M 75 60 Q 120 70 170 100 L 155 110 Q 110 85 70 70 Z" fill="#94a3b8" stroke="#475569" stroke-width="2"/>
        <line x1="72" y1="65" x2="150" y2="98" stroke="#f1f5f9" stroke-width="1.5"/>
      </svg>
    `,
    kain_ulos: `
      <svg viewBox="0 0 200 140" class="quiz-svg-img" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="140" rx="8" fill="#1e293b"/>
        <!-- Garis Merah Bata & Putih Ulos Ragi Hotang -->
        <rect x="25" y="25" width="150" height="90" fill="#991b1b"/>
        <line x1="25" y1="45" x2="175" y2="45" stroke="#fff" stroke-width="3" stroke-dasharray="6,4"/>
        <line x1="25" y1="70" x2="175" y2="70" stroke="#facc15" stroke-width="4"/>
        <line x1="25" y1="95" x2="175" y2="95" stroke="#fff" stroke-width="3" stroke-dasharray="6,4"/>
        <!-- Rumbai-rumbai Benang Ujung Kain -->
        <g stroke="#f8fafc" stroke-width="2">
          <line x1="20" y1="35" x2="25" y2="35"/><line x1="20" y1="55" x2="25" y2="55"/><line x1="20" y1="75" x2="25" y2="75"/><line x1="20" y1="95" x2="25" y2="95"/>
          <line x1="175" y1="35" x2="180" y2="35"/><line x1="175" y1="55" x2="180" y2="55"/><line x1="175" y1="75" x2="180" y2="75"/><line x1="175" y1="95" x2="180" y2="95"/>
        </g>
      </svg>
    `,
    jam_gadang: `
      <svg viewBox="0 0 200 140" class="quiz-svg-img" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="140" rx="8" fill="#e0f2fe"/>
        <!-- Menara Jam Putih Bukittinggi -->
        <rect x="80" y="45" width="40" height="85" fill="#f8fafc" stroke="#64748b" stroke-width="2"/>
        <!-- Piringan Jam Bulat -->
        <circle cx="100" cy="65" r="14" fill="#fff" stroke="#1e293b" stroke-width="2"/>
        <line x1="100" y1="65" x2="100" y2="56" stroke="#dc2626" stroke-width="2"/>
        <line x1="100" y1="65" x2="107" y2="65" stroke="#1e293b" stroke-width="2"/>
        <!-- Atap Gonjong Jam Gadang -->
        <path d="M 68 45 Q 85 22 100 32 Q 115 22 132 45 Z" fill="#991b1b" stroke="#7f1d1d" stroke-width="1.5"/>
        <polygon points="68,45 60,30 75,40" fill="#991b1b"/>
        <polygon points="132,45 140,30 125,40" fill="#991b1b"/>
      </svg>
    `,

    // --- BALI ---
    topeng_barong: `
      <svg viewBox="0 0 200 140" class="quiz-svg-img" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="140" rx="8" fill="#fef2f2"/>
        <!-- Wajah Merah Barong Ket -->
        <circle cx="100" cy="72" r="38" fill="#dc2626" stroke="#991b1b" stroke-width="2"/>
        <!-- Mata Bulat Melotot & Taring Putih -->
        <circle cx="85" cy="65" r="10" fill="#fff" stroke="#000" stroke-width="2"/>
        <circle cx="115" cy="65" r="10" fill="#fff" stroke="#000" stroke-width="2"/>
        <circle cx="85" cy="65" r="4" fill="#000"/>
        <circle cx="115" cy="65" r="4" fill="#000"/>
        <polygon points="80,85 85,102 90,85" fill="#fff"/>
        <polygon points="110,85 115,102 120,85" fill="#fff"/>
        <!-- Mahkota Emas Ukir Khas Bali -->
        <polygon points="65,45 100,12 135,45 100,32" fill="#facc15" stroke="#ca8a04" stroke-width="2"/>
        <circle cx="100" cy="22" r="5" fill="#ef4444"/>
      </svg>
    `,
    pura_ulundanu: `
      <svg viewBox="0 0 200 140" class="quiz-svg-img" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="140" rx="8" fill="#38bdf8"/>
        <!-- Danau Beratan Bawah -->
        <rect x="0" y="105" width="200" height="35" fill="#0284c7"/>
        <line x1="20" y1="118" x2="60" y2="118" stroke="#7dd3fc" stroke-width="2"/>
        <line x1="140" y1="124" x2="180" y2="124" stroke="#7dd3fc" stroke-width="2"/>
        <!-- Menara Meru Bertingkat Pura Ulun Danu -->
        <polygon points="100,20 85,32 115,32" fill="#1e293b"/>
        <polygon points="100,32 78,48 122,48" fill="#1e293b"/>
        <polygon points="100,48 70,66 130,66" fill="#1e293b"/>
        <polygon points="100,66 60,86 140,86" fill="#1e293b"/>
        <polygon points="100,86 50,106 150,106" fill="#1e293b"/>
        <rect x="75" y="106" width="50" height="10" fill="#78350f"/>
      </svg>
    `,
    gapura_candibentar: `
      <svg viewBox="0 0 200 140" class="quiz-svg-img" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="140" rx="8" fill="#fef08a"/>
        <!-- Gerbang Belah Dua Simetris Candi Bentar -->
        <!-- Bagian Kiri -->
        <path d="M 85 20 L 50 45 L 60 70 L 45 95 L 85 125 Z" fill="#991b1b" stroke="#7f1d1d" stroke-width="2"/>
        <!-- Bagian Kanan -->
        <path d="M 115 20 L 150 45 L 140 70 L 155 95 L 115 125 Z" fill="#991b1b" stroke="#7f1d1d" stroke-width="2"/>
        <!-- Tangga Masuk Pura -->
        <rect x="75" y="125" width="50" height="10" fill="#78350f"/>
      </svg>
    `,
    canang_sari: `
      <svg viewBox="0 0 200 140" class="quiz-svg-img" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="140" rx="8" fill="#ecfdf5"/>
        <!-- Anyaman Janur Persegi (Ceper) -->
        <polygon points="100,45 155,75 100,105 45,75" fill="#a3e635" stroke="#65a30d" stroke-width="2"/>
        <!-- Taburan Bunga Warna Warni Segar -->
        <circle cx="100" cy="75" r="9" fill="#facc15"/>
        <circle cx="85" cy="68" r="7" fill="#ef4444"/>
        <circle cx="115" cy="68" r="7" fill="#3b82f6"/>
        <circle cx="100" cy="60" r="7" fill="#fff" stroke="#cbd5e1"/>
        <circle cx="100" cy="90" r="7" fill="#ec4899"/>
      </svg>
    `,
    kain_poleng: `
      <svg viewBox="0 0 200 140" class="quiz-svg-img" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="140" rx="8" fill="#f1f5f9"/>
        <!-- Kotak-Kotak Catur Hitam Putih Rwa Bhineda -->
        <g stroke="#94a3b8" stroke-width="1">
          <rect x="25" y="20" width="30" height="25" fill="#0f172a"/><rect x="55" y="20" width="30" height="25" fill="#fff"/>
          <rect x="85" y="20" width="30" height="25" fill="#0f172a"/><rect x="115" y="20" width="30" height="25" fill="#fff"/>
          <rect x="145" y="20" width="30" height="25" fill="#0f172a"/>
          
          <rect x="25" y="45" width="30" height="25" fill="#fff"/><rect x="55" y="45" width="30" height="25" fill="#0f172a"/>
          <rect x="85" y="45" width="30" height="25" fill="#fff"/><rect x="115" y="45" width="30" height="25" fill="#0f172a"/>
          <rect x="145" y="45" width="30" height="25" fill="#fff"/>

          <rect x="25" y="70" width="30" height="25" fill="#0f172a"/><rect x="55" y="70" width="30" height="25" fill="#fff"/>
          <rect x="85" y="70" width="30" height="25" fill="#0f172a"/><rect x="115" y="70" width="30" height="25" fill="#fff"/>
          <rect x="145" y="70" width="30" height="25" fill="#0f172a"/>

          <rect x="25" y="95" width="30" height="25" fill="#fff"/><rect x="55" y="95" width="30" height="25" fill="#0f172a"/>
          <rect x="85" y="95" width="30" height="25" fill="#fff"/><rect x="115" y="95" width="30" height="25" fill="#0f172a"/>
          <rect x="145" y="95" width="30" height="25" fill="#fff"/>
        </g>
      </svg>
    `,

    // --- KALIMANTAN ---
    alat_sape: `
      <svg viewBox="0 0 200 140" class="quiz-svg-img" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="140" rx="8" fill="#fef3c7"/>
        <!-- Badan Kayu Sape' Dayak Berbentuk Perahu -->
        <path d="M 30 75 Q 80 50 160 55 L 175 70 L 160 85 Q 80 90 30 75 Z" fill="#b45309" stroke="#78350f" stroke-width="2"/>
        <!-- Leher & Kepala Ukir Enggang -->
        <rect x="20" y="71" width="16" height="8" fill="#78350f"/>
        <!-- Senar Petik Sape' -->
        <line x1="30" y1="71" x2="160" y2="65" stroke="#f8fafc" stroke-width="1.5"/>
        <line x1="30" y1="75" x2="160" y2="70" stroke="#f8fafc" stroke-width="1.5"/>
        <line x1="30" y1="79" x2="160" y2="75" stroke="#f8fafc" stroke-width="1.5"/>
        <!-- Ukiran Motif Lingkar Dayak -->
        <circle cx="100" cy="70" r="8" fill="none" stroke="#fef08a" stroke-width="2"/>
        <circle cx="130" cy="70" r="8" fill="none" stroke="#fef08a" stroke-width="2"/>
      </svg>
    `,
    burung_enggang: `
      <svg viewBox="0 0 200 140" class="quiz-svg-img" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="140" rx="8" fill="#e2f5e8"/>
        <path d="M 70 60 Q 60 110 120 105 Q 150 90 150 70 Q 140 40 100 45 Z" fill="#1f2937"/>
        <path d="M 140 80 L 190 85 L 185 100 L 135 95 Z" fill="#fff" stroke="#1f2937" stroke-width="2"/>
        <path d="M 80 50 Q 85 25 110 25 Q 120 40 105 55 Z" fill="#fff"/>
        <circle cx="102" cy="35" r="3" fill="#dc2626"/>
        <path d="M 95 24 Q 130 5 150 35 Q 130 35 110 28 Z" fill="#ea580c"/>
        <path d="M 112 30 Q 155 35 170 55 Q 135 55 110 42 Z" fill="#facc15" stroke="#ca8a04" stroke-width="1.5"/>
      </svg>
    `,
    rumah_betang: `
      <svg viewBox="0 0 200 140" class="quiz-svg-img" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="140" rx="8" fill="#f0fdf4"/>
        <!-- Badan Panggung Memanjang Sangat Panjang -->
        <rect x="20" y="65" width="160" height="35" fill="#78350f" stroke="#451a03" stroke-width="2"/>
        <!-- Deretan Jendela Kayu -->
        <rect x="35" y="73" width="12" height="15" fill="#fef08a"/>
        <rect x="65" y="73" width="12" height="15" fill="#fef08a"/>
        <rect x="95" y="73" width="12" height="15" fill="#fef08a"/>
        <rect x="125" y="73" width="12" height="15" fill="#fef08a"/>
        <rect x="155" y="73" width="12" height="15" fill="#fef08a"/>
        <!-- Tiang Panggung Kayu Ulin Tinggi -->
        <line x1="30" y1="100" x2="30" y2="135" stroke="#451a03" stroke-width="3"/>
        <line x1="60" y1="100" x2="60" y2="135" stroke="#451a03" stroke-width="3"/>
        <line x1="90" y1="100" x2="90" y2="135" stroke="#451a03" stroke-width="3"/>
        <line x1="120" y1="100" x2="120" y2="135" stroke="#451a03" stroke-width="3"/>
        <line x1="150" y1="100" x2="150" y2="135" stroke="#451a03" stroke-width="3"/>
        <line x1="170" y1="100" x2="170" y2="135" stroke="#451a03" stroke-width="3"/>
        <!-- Atap Pelana Kayu Sirap -->
        <polygon points="15,65 100,30 185,65" fill="#92400e" stroke="#451a03" stroke-width="2"/>
      </svg>
    `,
    mandau_dayak: `
      <svg viewBox="0 0 200 140" class="quiz-svg-img" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="140" rx="8" fill="#f8fafc"/>
        <!-- Hulu Mandau Ukir Tanduk Rusa -->
        <path d="M 35 45 Q 50 30 65 50 L 55 65 Z" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
        <circle cx="42" cy="40" r="4" fill="#dc2626"/>
        <!-- Bilah Baja Mandau Bertatah Kuningan -->
        <path d="M 60 55 L 165 85 Q 170 100 150 105 L 50 65 Z" fill="#94a3b8" stroke="#475569" stroke-width="2"/>
        <!-- Tatahan Kuningan Melingkar di Bilah -->
        <circle cx="95" cy="74" r="3" fill="#facc15"/>
        <circle cx="115" cy="80" r="3" fill="#facc15"/>
        <circle cx="135" cy="86" r="3" fill="#facc15"/>
      </svg>
    `,
    tameng_talawang: `
      <svg viewBox="0 0 200 140" class="quiz-svg-img" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="140" rx="8" fill="#fef9c3"/>
        <!-- Bentuk Perisai Segi Enam Meruncing Khas Dayak -->
        <polygon points="100,15 145,45 145,95 100,125 55,95 55,45" fill="#991b1b" stroke="#7f1d1d" stroke-width="2.5"/>
        <!-- Ukiran Wajah Kamang Penolak Bala Emas -->
        <circle cx="100" cy="70" r="16" fill="none" stroke="#facc15" stroke-width="3"/>
        <path d="M 75 45 Q 100 65 125 45" stroke="#facc15" stroke-width="2.5" fill="none"/>
        <path d="M 75 95 Q 100 75 125 95" stroke="#facc15" stroke-width="2.5" fill="none"/>
        <circle cx="92" cy="67" r="3" fill="#fff"/>
        <circle cx="108" cy="67" r="3" fill="#fff"/>
      </svg>
    `,

    // --- SULAWESI ---
    kapal_pinisi: `
      <svg viewBox="0 0 200 140" class="quiz-svg-img" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="140" rx="8" fill="#bae6fd"/>
        <!-- Ombak Laut Biru -->
        <rect x="0" y="105" width="200" height="35" fill="#0284c7"/>
        <!-- Lambung Kapal Kayu Pinisi Bulukumba -->
        <path d="M 30 105 Q 80 120 170 100 L 160 85 L 45 85 Z" fill="#78350f" stroke="#451a03" stroke-width="2"/>
        <!-- Dua Tiang Layar Agung -->
        <line x1="85" y1="85" x2="85" y2="25" stroke="#451a03" stroke-width="3"/>
        <line x1="130" y1="85" x2="130" y2="35" stroke="#451a03" stroke-width="3"/>
        <!-- Layar Putih Terkembang -->
        <polygon points="85,30 50,55 85,75" fill="#fff" stroke="#cbd5e1" stroke-width="1.5"/>
        <polygon points="130,40 100,60 130,80" fill="#fff" stroke="#cbd5e1" stroke-width="1.5"/>
        <polygon points="50,60 20,80 50,85" fill="#fff" stroke="#cbd5e1" stroke-width="1.5"/>
      </svg>
    `,
    rumah_tongkonan: `
      <svg viewBox="0 0 200 140" class="quiz-svg-img" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="140" rx="8" fill="#fdf2e9"/>
        <rect x="65" y="75" width="70" height="45" fill="#991b1b" stroke="#7f1d1d" stroke-width="2"/>
        <line x1="72" y1="120" x2="72" y2="135" stroke="#450a0a" stroke-width="3.5"/>
        <line x1="90" y1="120" x2="90" y2="135" stroke="#450a0a" stroke-width="3.5"/>
        <line x1="110" y1="120" x2="110" y2="135" stroke="#450a0a" stroke-width="3.5"/>
        <line x1="128" y1="120" x2="128" y2="135" stroke="#450a0a" stroke-width="3.5"/>
        <!-- Atap Perahu Menjulang Depan Belakang -->
        <path d="M 10 30 Q 100 85 190 30 L 175 48 Q 100 95 25 48 Z" fill="#475569" stroke="#1e293b" stroke-width="2"/>
        <path d="M 20 42 Q 100 88 180 42" stroke="#e2e8f0" stroke-width="2" fill="none"/>
        <line x1="100" y1="80" x2="100" y2="130" stroke="#facc15" stroke-width="2"/>
      </svg>
    `,
    alat_kolintang: `
      <svg viewBox="0 0 200 140" class="quiz-svg-img" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="140" rx="8" fill="#fef3c7"/>
        <!-- Meja Resonator Kayu Minahasa -->
        <rect x="30" y="70" width="140" height="45" fill="#78350f" stroke="#451a03" stroke-width="2"/>
        <line x1="40" y1="115" x2="35" y2="135" stroke="#451a03" stroke-width="4"/>
        <line x1="160" y1="115" x2="165" y2="135" stroke="#451a03" stroke-width="4"/>
        <!-- Bilah Kayu Bernada Dari Panjang ke Pendek -->
        <rect x="35" y="55" width="12" height="30" fill="#fde047" stroke="#ca8a04"/>
        <rect x="52" y="58" width="12" height="27" fill="#fde047" stroke="#ca8a04"/>
        <rect x="69" y="60" width="12" height="25" fill="#fde047" stroke="#ca8a04"/>
        <rect x="86" y="62" width="12" height="23" fill="#fde047" stroke="#ca8a04"/>
        <rect x="103" y="64" width="12" height="21" fill="#fde047" stroke="#ca8a04"/>
        <rect x="120" y="66" width="12" height="19" fill="#fde047" stroke="#ca8a04"/>
        <rect x="137" y="68" width="12" height="17" fill="#fde047" stroke="#ca8a04"/>
        <rect x="154" y="70" width="12" height="15" fill="#fde047" stroke="#ca8a04"/>
      </svg>
    `,
    baju_bodo: `
      <svg viewBox="0 0 200 140" class="quiz-svg-img" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="140" rx="8" fill="#faf5ff"/>
        <!-- Bentuk Segiempat Mengembang Baju Bodo Sutra Sengkang -->
        <polygon points="50,30 150,30 170,95 30,95" fill="#a855f7" stroke="#7e22ce" stroke-width="2"/>
        <!-- Kerah Bulat & Kalung Emas Panjang -->
        <circle cx="100" cy="30" r="14" fill="#faf5ff"/>
        <path d="M 85 45 Q 100 65 115 45" stroke="#facc15" stroke-width="3" fill="none"/>
        <!-- Sarung Tenun Sutra Bawah -->
        <rect x="55" y="95" width="90" height="35" fill="#047857"/>
        <line x1="55" y1="105" x2="145" y2="105" stroke="#facc15" stroke-width="2"/>
      </svg>
    `,
    kuburan_batu_lemo: `
      <svg viewBox="0 0 200 140" class="quiz-svg-img" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="140" rx="8" fill="#e2e8f0"/>
        <!-- Tebing Batu Cadas Pahat Toraja -->
        <path d="M 10 10 L 190 10 L 190 135 L 10 135 Z" fill="#64748b"/>
        <!-- Lubang Kubur Persegi di Tebing -->
        <rect x="35" y="40" width="30" height="30" fill="#1e293b"/>
        <rect x="85" y="40" width="30" height="30" fill="#1e293b"/>
        <rect x="135" y="40" width="30" height="30" fill="#1e293b"/>
        <!-- Balkon Patung Leluhur (Tau-Tau) -->
        <rect x="30" y="85" width="140" height="8" fill="#78350f"/>
        <circle cx="50" cy="95" r="5" fill="#fed7aa"/>
        <circle cx="75" cy="95" r="5" fill="#fed7aa"/>
        <circle cx="100" cy="95" r="5" fill="#fed7aa"/>
        <circle cx="125" cy="95" r="5" fill="#fed7aa"/>
        <circle cx="150" cy="95" r="5" fill="#fed7aa"/>
      </svg>
    `,

    // --- PAPUA ---
    burung_cendrawasih: `
      <svg viewBox="0 0 200 140" class="quiz-svg-img" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="140" rx="8" fill="#e0f2fe"/>
        <!-- Bulu Ekor Emas Menjuntai Anggun -->
        <path d="M 70 80 Q 30 110 15 135 Q 60 115 100 100" fill="#facc15" opacity="0.9"/>
        <path d="M 80 85 Q 50 120 30 138 Q 80 120 110 95" fill="#f59e0b" opacity="0.9"/>
        <line x1="20" y1="100" x2="180" y2="90" stroke="#78350f" stroke-width="5" stroke-linecap="round"/>
        <ellipse cx="115" cy="75" rx="28" ry="18" fill="#991b1b"/>
        <ellipse cx="132" cy="72" rx="12" ry="12" fill="#047857"/>
        <circle cx="145" cy="62" r="10" fill="#fef08a"/>
        <polygon points="152,60 168,64 153,67" fill="#38bdf8"/>
        <circle cx="146" cy="60" r="2" fill="#000"/>
        <path d="M 95 65 Q 125 50 135 75 Q 105 85 95 65 Z" fill="#7f1d1d"/>
      </svg>
    `,
    rumah_honai: `
      <svg viewBox="0 0 200 140" class="quiz-svg-img" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="140" rx="8" fill="#ecfdf5"/>
        <!-- Dinding Papan Melingkar Bawah -->
        <rect x="50" y="80" width="100" height="45" rx="6" fill="#78350f" stroke="#451a03" stroke-width="2"/>
        <!-- Pintu Kecil Tanpa Jendela -->
        <rect x="88" y="95" width="24" height="30" rx="3" fill="#1e293b"/>
        <!-- Atap Kubah Jerami Jerami Jamur Tebal -->
        <path d="M 35 85 Q 100 20 165 85 Z" fill="#ca8a04" stroke="#854d0e" stroke-width="2.5"/>
        <path d="M 45 80 Q 100 35 155 80" stroke="#eab308" stroke-width="2" fill="none"/>
      </svg>
    `,
    tas_noken: `
      <svg viewBox="0 0 200 140" class="quiz-svg-img" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="140" rx="8" fill="#fafaf9"/>
        <!-- Tali Noken yang Digantungkan di Dahi -->
        <path d="M 60 40 Q 100 10 140 40" stroke="#ca8a04" stroke-width="4" fill="none"/>
        <!-- Kantung Anyaman Serat Kulit Kayu -->
        <path d="M 50 40 Q 40 120 100 125 Q 160 120 150 40 Z" fill="#d97706" stroke="#92400e" stroke-width="2"/>
        <!-- Pola Garis Anyaman Asli Papua -->
        <path d="M 55 60 Q 100 70 145 60 M 52 80 Q 100 90 148 80 M 58 100 Q 100 110 142 100" stroke="#fef08a" stroke-width="2" fill="none"/>
      </svg>
    `,
    alat_tifa: `
      <svg viewBox="0 0 200 140" class="quiz-svg-img" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="140" rx="8" fill="#fef2f2"/>
        <!-- Tabung Kayu Tabuh Tifa Papua Ramping Tengah -->
        <path d="M 70 25 Q 85 70 70 115 L 130 115 Q 115 70 130 25 Z" fill="#78350f" stroke="#451a03" stroke-width="2"/>
        <!-- Pegangan Tangan Samping -->
        <path d="M 70 50 Q 50 70 70 90" stroke="#451a03" stroke-width="4" fill="none"/>
        <!-- Kulit Penutup Membran Atas & Bawah -->
        <ellipse cx="100" cy="25" rx="30" ry="8" fill="#fed7aa" stroke="#ca8a04" stroke-width="2"/>
        <!-- Ukiran Suku Asmat Merah Putih -->
        <path d="M 85 60 L 115 60 M 80 80 L 120 80" stroke="#facc15" stroke-width="3"/>
      </svg>
    `,
    raja_ampat: `
      <svg viewBox="0 0 200 140" class="quiz-svg-img" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="140" rx="8" fill="#38bdf8"/>
        <!-- Laut Hijau Toska Sebening Kristal -->
        <rect x="0" y="85" width="200" height="55" fill="#0d9488"/>
        <!-- Karst Karang Wayag Menjulang Rindang -->
        <path d="M 20 100 Q 35 45 55 100 Z" fill="#047857" stroke="#065f46" stroke-width="2"/>
        <path d="M 65 110 Q 90 35 115 110 Z" fill="#047857" stroke="#065f46" stroke-width="2"/>
        <path d="M 130 105 Q 155 50 175 105 Z" fill="#047857" stroke="#065f46" stroke-width="2"/>
        <!-- Terumbu Karang Berwarna di Bawah Air -->
        <circle cx="40" cy="120" r="5" fill="#f43f5e"/>
        <circle cx="100" cy="125" r="7" fill="#fbbf24"/>
        <circle cx="160" cy="120" r="6" fill="#a855f7"/>
      </svg>
    `
  };

  // ==========================================
  // MANAJEMEN SKILL KARAKTER KUIS
  // ==========================================
  function renderSkillsBar() {
    const skillsContainer = document.getElementById("quiz-skills-container");
    const skillsBtnWrapper = document.getElementById("quiz-skills-btn-wrapper");
    if (!skillsContainer || !skillsBtnWrapper) return;

    // Sesuai syarat: TIDAK BERLAKU di mode tap-matching
    if (currentMode === "match") {
      skillsContainer.style.display = "none";
      return;
    }

    skillsContainer.style.display = "flex";

    const charId = (window.APP && typeof window.APP.getCurrentKarakterId === "function")
      ? window.APP.getCurrentKarakterId()
      : (localStorage.getItem("karakterTerpilih") || "boni");

    if (charId === "pendekar") {
      skillsBtnWrapper.innerHTML = `
        <span class="skill-passive-tag" title="Nyawa awal 4 hati aktif">
          🛡️ <b>Ksatria Tangguh</b> (Pasif: 4 Nyawa ❤️ x 4)
        </span>
      `;
    } else if (charId === "boni") {
      skillsBtnWrapper.innerHTML = `
        <button id="btn-skill-reroll" class="btn-skill-action ${hasUsedReroll ? 'skill-btn-used' : ''}" ${hasUsedReroll ? 'disabled' : ''}>
          🧭 ${hasUsedReroll ? 'Ganti Soal (Sudah Digunakan)' : 'Ganti Soal Baru (1x)'}
        </button>
      `;
      const btnReroll = document.getElementById("btn-skill-reroll");
      if (btnReroll && !hasUsedReroll) {
        btnReroll.onclick = () => useRerollSkill();
      }
    } else if (charId === "rara") {
      skillsBtnWrapper.innerHTML = `
        <button id="btn-skill-fifty" class="btn-skill-action ${hasUsedFiftyFifty ? 'skill-btn-used' : ''}" ${hasUsedFiftyFifty ? 'disabled' : ''}>
          💡 ${hasUsedFiftyFifty ? '50:50 (Sudah Digunakan)' : '50:50 Eliminasi 2 Salah (1x)'}
        </button>
      `;
      const btnFifty = document.getElementById("btn-skill-fifty");
      if (btnFifty && !hasUsedFiftyFifty) {
        btnFifty.onclick = () => useFiftyFiftySkill();
      }
    } else {
      skillsContainer.style.display = "none";
    }
  }

  function useRerollSkill() {
    if (hasUsedReroll || currentMode === "match" || !currentZone) return;

    // Ambil seluruh bank soal untuk mode ini (ada 50+ soal di game-data)
    const allQuestions = currentMode === "mcq" 
      ? (Array.isArray(currentZone.mcqQuizzes) ? currentZone.mcqQuizzes : [])
      : (Array.isArray(currentZone.imageQuizzes) ? currentZone.imageQuizzes : []);

    // Filter soal yang belum ada di activeQuestionPool saat ini
    const availablePool = allQuestions.filter(q => {
      const qText = q.question || q.instruction;
      return !activeQuestionPool.some(activeQ => (activeQ.question || activeQ.instruction) === qText);
    });

    if (availablePool.length === 0) {
      if (window.GAME_DIALOG && typeof window.GAME_DIALOG.alert === "function") {
        window.GAME_DIALOG.alert(
          "Bank Soal Selesai",
          "Seluruh pertanyaan dari bank soal telah ditampilkan!",
          "📚",
          "Siap, Mengerti! 🌟"
        );
      } else {
        alert("Seluruh pertanyaan dari bank soal telah ditampilkan!");
      }
      return;
    }

    // Pilih 1 pertanyaan acak baru
    const newQuestion = availablePool[Math.floor(Math.random() * availablePool.length)];
    activeQuestionPool[currentIndex] = newQuestion;
    hasUsedReroll = true;

    if (window.AUDIO_SYNTH && typeof window.AUDIO_SYNTH.playClick === "function") {
      window.AUDIO_SYNTH.playClick();
    }

    renderCurrentQuestion();

    const quoteEl = document.getElementById("quiz-companion-quote");
    if (quoteEl) {
      quoteEl.innerText = "🧭 Kompas Boni digunakan! Soal telah diganti dengan pertanyaan baru!";
    }
  }

  function useFiftyFiftySkill() {
    if (hasUsedFiftyFifty || currentMode === "match" || !activeQuestionState) return;

    const optionButtons = Array.from(document.querySelectorAll(".quiz-btn-option"));
    if (optionButtons.length < 3) return;

    const correctText = activeQuestionState.correctText;

    // Filter tombol-tombol yang salah
    const wrongButtons = optionButtons.filter(btn => {
      const optText = decodeURIComponent(btn.getAttribute("data-option-text") || "");
      return optText !== correctText;
    });

    if (wrongButtons.length < 2) return;

    // Acak dan ambil 2 tombol salah untuk dieliminasi
    const shuffledWrong = shuffleArray(wrongButtons);
    const toEliminate = shuffledWrong.slice(0, 2);

    toEliminate.forEach(btn => {
      btn.classList.add("option-eliminated");
      btn.disabled = true;
    });

    hasUsedFiftyFifty = true;

    if (window.AUDIO_SYNTH && typeof window.AUDIO_SYNTH.playClick === "function") {
      window.AUDIO_SYNTH.playClick();
    }

    // Update status tombol skill
    renderSkillsBar();

    const quoteEl = document.getElementById("quiz-companion-quote");
    if (quoteEl) {
      quoteEl.innerText = "💡 Intuisi Rara berhasil menyingkirkan 2 pilihan salah! Peluangmu kini 50:50!";
    }
  }

  function startMission(zone, mode, onComplete) {
    currentZone = zone;
    currentMode = mode;
    currentIndex = 0;
    onCompleteCallback = onComplete;

    maxLives = getMaxLivesForActiveCharacter();
    currentLives = maxLives;
    hasUsedReroll = false;
    hasUsedFiftyFifty = false;

    updateLivesUI();
    updateCompanionQuote("start");

    // Seleksi 5 pertanyaan acak untuk MCQ dan Tebak Gambar, atau seluruh tahapan mencocokkan
    if (mode === "mcq") {
      const allQuestions = Array.isArray(zone.mcqQuizzes) ? zone.mcqQuizzes : [];
      activeQuestionPool = shuffleArray(allQuestions).slice(0, 5);
    } else if (mode === "image") {
      const allImages = Array.isArray(zone.imageQuizzes) ? zone.imageQuizzes : [];
      activeQuestionPool = shuffleArray(allImages).slice(0, 5);
    } else if (mode === "match") {
      activeQuestionPool = Array.isArray(zone.matchingSteps) ? [...zone.matchingSteps] : [];
    } else {
      activeQuestionPool = [];
    }

    renderCurrentQuestion();
  }

  function resetMission() {
    currentIndex = 0;
    maxLives = getMaxLivesForActiveCharacter();
    currentLives = maxLives;
    hasUsedReroll = false;
    hasUsedFiftyFifty = false;

    updateLivesUI();
    updateCompanionQuote("start");

    // Acak ulang 5 pertanyaan baru dari bank soal
    if (currentMode === "mcq") {
      const allQuestions = Array.isArray(currentZone.mcqQuizzes) ? currentZone.mcqQuizzes : [];
      activeQuestionPool = shuffleArray(allQuestions).slice(0, 5);
    } else if (currentMode === "image") {
      const allImages = Array.isArray(currentZone.imageQuizzes) ? currentZone.imageQuizzes : [];
      activeQuestionPool = shuffleArray(allImages).slice(0, 5);
    } else if (currentMode === "match") {
      activeQuestionPool = Array.isArray(currentZone.matchingSteps) ? [...currentZone.matchingSteps] : [];
    }

    renderCurrentQuestion();
  }

  function renderCurrentQuestion() {
    const container = document.getElementById("quiz-card-content");
    const progressEl = document.getElementById("quiz-step-indicator");

    const totalQuestions = activeQuestionPool.length;
    const questionData = activeQuestionPool[currentIndex];

    // Jika semua pertanyaan dalam sesi acak selesai
    if (!questionData || currentIndex >= totalQuestions) {
      if (onCompleteCallback) onCompleteCallback(currentZone, currentMode);
      return;
    }

    updateCompanionQuote("start");

    if (currentMode === "match") {
      progressEl.innerHTML = `<span class="badge-difficulty">${questionData.levelName}</span>`;
    } else {
      const modeLabel = currentMode === "mcq" ? "Pilihan Ganda" : "Tebak Gambar";
      progressEl.innerText = `${modeLabel}: Soal ${currentIndex + 1} dari ${totalQuestions}`;
    }

    let html = `
      <div class="question-header">
        <div class="zone-badge-tag">${currentZone.name}</div>
        <h3 class="question-title">${questionData.question || questionData.instruction}</h3>
      </div>
    `;

    if (currentMode === "mcq") {
      html += renderMCQ(questionData);
    } else if (currentMode === "image") {
      html += renderImage(questionData);
    } else if (currentMode === "match") {
      html += renderMatch(questionData);
    }

    container.innerHTML = html;
    bindEvents(questionData);
    renderSkillsBar();
  }

  function renderMCQ(qData) {
    // Acak posisi pilihan jawaban (A, B, C, D) agar tidak selalu di A
    const originalCorrectText = qData.options[qData.correctIndex];
    const shuffledOptions = shuffleArray(qData.options);

    activeQuestionState = {
      correctText: originalCorrectText,
      explanation: qData.explanation
    };

    return `
      <div class="options-grid">
        ${shuffledOptions.map((opt, i) => `
          <button class="quiz-btn-option" data-option-text="${encodeURIComponent(opt)}">
            <span class="opt-letter">${String.fromCharCode(65 + i)}</span>
            <span class="opt-text">${opt}</span>
          </button>
        `).join("")}
      </div>
    `;
  }

  function renderImage(qData) {
    // Tampilkan foto realistis bila ada, atau fallback ke ilustrasi SVG
    const svgCode = SVG_LIB[qData.imageSvg] || `<div class="placeholder-img">🖼️ ${qData.imageSvg}</div>`;
    const visualContent = qData.imageUrl
      ? `<img src="${qData.imageUrl}" class="quiz-photo-img" alt="${qData.imageSvg}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"><div class="svg-fallback-wrap" style="display:none;">${svgCode}</div>`
      : svgCode;

    // Acak posisi pilihan jawaban (A, B, C, D)
    const originalCorrectText = qData.options[qData.correctIndex];
    const shuffledOptions = shuffleArray(qData.options);

    activeQuestionState = {
      correctText: originalCorrectText,
      explanation: qData.explanation
    };

    return `
      <div class="quiz-visual-box">
        ${visualContent}
      </div>
      <div class="options-grid">
        ${shuffledOptions.map((opt, i) => `
          <button class="quiz-btn-option" data-option-text="${encodeURIComponent(opt)}">
            <span class="opt-letter">${String.fromCharCode(65 + i)}</span>
            <span class="opt-text">${opt}</span>
          </button>
        `).join("")}
      </div>
    `;
  }

  function renderMatch(qData) {
    const shuffledMatches = [...qData.pairs.map(p => p.match)].sort(() => Math.random() - 0.5);

    return `
      <div class="match-instructions">
        👉 <b>Pilih 1 item di kiri</b>, lalu <b>pilih pasangannya di kanan</b>!
      </div>
      <div class="match-container">
        <div class="match-col left-col">
          ${qData.pairs.map((p, idx) => `
            <button class="match-pill match-source" data-id="${idx}">
              ${p.item}
            </button>
          `).join("")}
        </div>
        <div class="match-col right-col">
          ${shuffledMatches.map((m) => `
            <button class="match-pill match-target" data-match="${m}">
              ${m}
            </button>
          `).join("")}
        </div>
      </div>
      <div id="match-status" class="match-status">Pasangkan semua budaya di atas!</div>
    `;
  }

  function bindEvents(qData) {
    if (currentMode === "mcq" || currentMode === "image") {
      const optionBtns = document.querySelectorAll(".quiz-btn-option");
      optionBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          window.AUDIO_SYNTH.playClick();
          const chosenText = decodeURIComponent(btn.getAttribute("data-option-text") || "");
          const isCorrect = activeQuestionState ? (chosenText === activeQuestionState.correctText) : false;
          const explanation = activeQuestionState ? activeQuestionState.explanation : qData.explanation;
          checkAnswer(isCorrect, explanation, btn);
        });
      });
    } else if (currentMode === "match") {
      let selectedSource = null;
      let solvedCount = 0;
      const totalPairs = qData.pairs.length;

      const sources = document.querySelectorAll(".match-source");
      const targets = document.querySelectorAll(".match-target");
      const statusEl = document.getElementById("match-status");

      sources.forEach(src => {
        src.addEventListener("click", () => {
          if (src.classList.contains("matched")) return;
          window.AUDIO_SYNTH.playClick();
          sources.forEach(s => s.classList.remove("selected"));
          src.classList.add("selected");
          selectedSource = src;
        });
      });

      targets.forEach(tgt => {
        tgt.addEventListener("click", () => {
          if (tgt.classList.contains("matched")) return;
          if (!selectedSource) {
            statusEl.innerText = "Pilih item di kolom kiri terlebih dahulu!";
            return;
          }

          const srcId = parseInt(selectedSource.getAttribute("data-id"), 10);
          const expectedMatch = qData.pairs[srcId].match;
          const chosenMatch = tgt.getAttribute("data-match");

          if (expectedMatch === chosenMatch) {
            window.AUDIO_SYNTH.playCorrect();
            selectedSource.classList.add("matched");
            tgt.classList.add("matched");
            selectedSource.classList.remove("selected");
            selectedSource = null;
            solvedCount++;

            statusEl.innerText = `Cocok! (${solvedCount}/${totalPairs})`;

            if (solvedCount === totalPairs) {
              setTimeout(() => {
                showFeedbackModal(true, qData.explanation);
              }, 400);
            }
          } else {
            window.AUDIO_SYNTH.playWrong();
            tgt.classList.add("shake-error");
            currentLives--;
            updateLivesUI();
            if (currentLives <= 1) {
              updateCompanionQuote("danger");
            } else {
              updateCompanionQuote("wrong");
            }

            if (currentLives <= 0) {
              setTimeout(() => {
                showGameOverModal();
              }, 400);
            } else {
              statusEl.innerText = `Belum cocok! Nyawa berkurang 1 (Sisa: ${currentLives} ❤️)`;
              setTimeout(() => tgt.classList.remove("shake-error"), 600);
            }
          }
        });
      });
    }
  }

  function checkAnswer(isCorrect, explanation, buttonEl) {
    if (isCorrect) {
      if (buttonEl) buttonEl.classList.add("btn-correct");
      window.AUDIO_SYNTH.playCorrect();
      updateCompanionQuote("correct");
      setTimeout(() => {
        showFeedbackModal(true, explanation);
      }, 500);
    } else {
      if (buttonEl) buttonEl.classList.add("btn-wrong");
      window.AUDIO_SYNTH.playWrong();
      currentLives--;
      updateLivesUI();
      if (currentLives <= 1) {
        updateCompanionQuote("danger");
      } else {
        updateCompanionQuote("wrong");
      }

      setTimeout(() => {
        if (buttonEl) buttonEl.classList.remove("btn-wrong");
        if (currentLives <= 0) {
          showGameOverModal();
        } else {
          showFeedbackModal(false, `Jawaban belum tepat. Sisa nyawa kamu: ${currentLives} ❤️. Pelajari materi lagi atau coba opsi lainnya!`);
        }
      }, 600);
    }
  }

  function showGameOverModal() {
    const modal = document.getElementById("feedback-modal");
    const iconEl = document.getElementById("feedback-icon");
    const titleEl = document.getElementById("feedback-title");
    const textEl = document.getElementById("feedback-text");
    const btnNext = document.getElementById("feedback-btn-next");

    iconEl.innerText = "💔";
    titleEl.innerText = "Nyawamu Habis!";
    titleEl.style.color = "#dc2626";
    textEl.innerText = "Seluruh kesempatan nyawamu telah habis. Jangan putus asa! Pertanyaan kuis akan diacak ulang dari awal. Ayo coba lagi dan buktikan kehebatanmu!";
    btnNext.innerText = "Ulangi Misi dari Awal ↺";
    btnNext.style.background = "#dc2626";
    btnNext.onclick = () => {
      window.AUDIO_SYNTH.playClick();
      modal.classList.add("hidden");
      btnNext.style.background = "";
      resetMission();
    };
    modal.classList.remove("hidden");
  }

  function showFeedbackModal(isCorrect, text) {
    const modal = document.getElementById("feedback-modal");
    const iconEl = document.getElementById("feedback-icon");
    const titleEl = document.getElementById("feedback-title");
    const textEl = document.getElementById("feedback-text");
    const btnNext = document.getElementById("feedback-btn-next");

    btnNext.style.background = "";

    if (isCorrect) {
      iconEl.innerText = "🎉";
      titleEl.innerText = "Jawaban Tepat!";
      titleEl.style.color = "#16a34a";
      btnNext.innerText = "Lanjut Pertanyaan Berikutnya ➔";
      btnNext.onclick = () => {
        window.AUDIO_SYNTH.playClick();
        modal.classList.add("hidden");
        currentIndex++;
        renderCurrentQuestion();
      };
    } else {
      iconEl.innerText = "💡";
      titleEl.innerText = "Ayo Coba Lagi!";
      titleEl.style.color = "#ea580c";
      btnNext.innerText = "Coba Lagi ↺";
      btnNext.onclick = () => {
        window.AUDIO_SYNTH.playClick();
        modal.classList.add("hidden");
      };
    }

    textEl.innerText = text;
    modal.classList.remove("hidden");
  }

  return {
    startMission
  };
})();
