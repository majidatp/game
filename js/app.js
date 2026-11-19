// ==========================================================================
// SISTEM DIALOG NOTIFIKASI TEMA GAME (PAPAN KAYU NUSANTARA)
// Menggantikan alert() dan confirm() bawaan browser agar menyatu dengan tema game
// ==========================================================================
window.GAME_DIALOG = (function() {
  let activeDialogResolver = null;

  function getElements() {
    return {
      modal: document.getElementById("modal-game-dialog"),
      icon: document.getElementById("game-dialog-icon"),
      title: document.getElementById("game-dialog-title"),
      message: document.getElementById("game-dialog-message"),
      btnCancel: document.getElementById("btn-dialog-cancel"),
      btnConfirm: document.getElementById("btn-dialog-confirm")
    };
  }

  function setupEvents() {
    const { modal, btnCancel, btnConfirm } = getElements();
    if (btnConfirm && !btnConfirm.dataset.bound) {
      btnConfirm.dataset.bound = "true";
      btnConfirm.addEventListener("click", () => closeGameDialog(true));
    }
    if (btnCancel && !btnCancel.dataset.bound) {
      btnCancel.dataset.bound = "true";
      btnCancel.addEventListener("click", () => closeGameDialog(false));
    }
    if (modal && !modal.dataset.bound) {
      modal.dataset.bound = "true";
      modal.addEventListener("click", (e) => {
        const { btnCancel: cancelEl } = getElements();
        // Klik pada backdrop gelap luar menutup dialog hanya jika berupa alert tunggal
        if (e.target === modal && cancelEl && cancelEl.classList.contains("hidden")) {
          closeGameDialog(true);
        }
      });
    }
  }

  function closeGameDialog(result) {
    if (window.AUDIO_SYNTH && typeof window.AUDIO_SYNTH.playClick === "function") {
      try { window.AUDIO_SYNTH.playClick(); } catch (e) {}
    }
    const { modal } = getElements();
    if (modal) {
      modal.classList.add("hidden");
    }
    if (typeof activeDialogResolver === "function") {
      const resolver = activeDialogResolver;
      activeDialogResolver = null;
      resolver(result);
    }
  }

  return {
    alert: function(title, message, icon = "ℹ️", confirmText = "Siap, Mengerti! 🌟") {
      setupEvents();
      return new Promise((resolve) => {
        activeDialogResolver = resolve;
        const { modal, icon: iconEl, title: titleEl, message: msgEl, btnCancel, btnConfirm } = getElements();
        if (!modal) {
          alert(`${title}\n\n${message}`);
          resolve(true);
          return;
        }
        if (iconEl) iconEl.innerText = icon;
        if (titleEl) titleEl.innerText = title;
        if (msgEl) msgEl.innerText = message;
        if (btnCancel) btnCancel.classList.add("hidden");
        if (btnConfirm) {
          const label = btnConfirm.querySelector(".pill-label");
          if (label) label.innerText = confirmText;
          else btnConfirm.innerText = confirmText;
        }
        modal.classList.remove("hidden");
      });
    },

    confirm: function(title, message, icon = "⚠️", confirmText = "Ya, Lanjutkan", cancelText = "Batal") {
      setupEvents();
      return new Promise((resolve) => {
        activeDialogResolver = resolve;
        const { modal, icon: iconEl, title: titleEl, message: msgEl, btnCancel, btnConfirm } = getElements();
        if (!modal) {
          const res = confirm(`${title}\n\n${message}`);
          resolve(res);
          return;
        }
        if (iconEl) iconEl.innerText = icon;
        if (titleEl) titleEl.innerText = title;
        if (msgEl) msgEl.innerText = message;
        if (btnCancel) {
          btnCancel.classList.remove("hidden");
          const cancelLabel = btnCancel.querySelector(".pill-label");
          if (cancelLabel) cancelLabel.innerText = cancelText;
          else btnCancel.innerText = cancelText;
        }
        if (btnConfirm) {
          const label = btnConfirm.querySelector(".pill-label");
          if (label) label.innerText = confirmText;
          else btnConfirm.innerText = confirmText;
        }
        modal.classList.remove("hidden");
      });
    }
  };
})();

// app.js - Controller Utama Petualangan Sahabat Nusantara (6 Wilayah & Papan 3 Misi)
window.APP = (function() {
  let activeZone = null;

  // Data Karakter Sahabat Nusantara dalam satu array objek (3 Karakter Utama dengan Skill Khusus)
  const DAFTAR_KARAKTER = [
    {
      id: "boni",
      nama: "Boni",
      gambar: "assets/images/boni_transparent.png",
      deskripsi: "Boni: Penjelajah Cilik Berbaju Batik",
      skill: {
        id: "reroll",
        nama: "Kompas Penjelajah",
        icon: "🧭",
        desc: "Bisa refresh/ganti pertanyaan 1x per misi"
      }
    },
    {
      id: "rara",
      nama: "Rara",
      gambar: "assets/images/rara_transparent.png",
      deskripsi: "Rara: Pecinta Budaya Berbunga Kamboja",
      skill: {
        id: "fifty_fifty",
        nama: "Intuisi Budaya",
        icon: "💡",
        desc: "Mengurangi 2 opsi salah (50:50) 1x per misi"
      }
    },
    {
      id: "pendekar",
      nama: "Pendekar Cilik",
      gambar: "assets/images/pendekar_transparent.png",
      deskripsi: "Pendekar: Ksatria Silat Berselempang Merah",
      skill: {
        id: "extra_life",
        nama: "Ksatria Tangguh",
        icon: "🛡️",
        desc: "Nyawa ekstra +1 (Total 4 Hati ❤️❤️❤️❤️)"
      }
    }
  ];

  let currentKarakterId = "boni";

  function gantiKarakter(charId) {
    const targetKarakter = DAFTAR_KARAKTER.find(k => k.id === charId);
    if (!targetKarakter) {
      console.warn(`[Karakter] Karakter dengan id "${charId}" tidak ditemukan.`);
      return;
    }

    const heroImg = document.getElementById("img-hero-character");
    const heroDesc = document.getElementById("hero-character-desc");
    const previousSrc = heroImg ? heroImg.src : "";

    // Uji ketersediaan berkas gambar sebelum ditampilkan
    const testImg = new Image();
    testImg.onload = function() {
      // Transisi fade singkat (0,2 detik)
      if (heroImg) {
        heroImg.classList.add("fade-out");
        setTimeout(() => {
          heroImg.src = targetKarakter.gambar;
          heroImg.alt = targetKarakter.nama;
          heroImg.classList.remove("fade-out");
        }, 200);
      }

      // Teks deskripsi dan lencana keahlian di bawah gambar ikut berganti
      if (heroDesc) {
        heroDesc.innerHTML = `
          <div>${targetKarakter.deskripsi}</div>
          <div class="hero-skill-badge">
            <span>⚡ Keahlian:</span> <b>${targetKarakter.skill.icon} ${targetKarakter.skill.nama}</b>
            <span style="font-size:10px; opacity:0.85;">(${targetKarakter.skill.desc})</span>
          </div>
        `;
      }

      // Tab yang aktif memakai gaya 'aktif' yang sudah ada (oranye), tab lain tetap normal
      document.querySelectorAll(".char-pill-btn").forEach(tab => {
        if (tab.getAttribute("data-char") === charId) {
          tab.classList.add("active-char");
        } else {
          tab.classList.remove("active-char");
        }
      });

      // Perbarui label nama karakter pada navigasi panah mobile
      const mobileCharName = document.getElementById("char-mobile-display-name");
      if (mobileCharName) {
        mobileCharName.innerText = targetKarakter.nama;
      }

      // Simpan pilihan terakhir di localStorage dengan kunci "karakterTerpilih"
      currentKarakterId = charId;
      try {
        localStorage.setItem("karakterTerpilih", charId);
      } catch (err) {
        console.warn("Gagal menyimpan karakter ke localStorage:", err);
      }

      if (window.GAME_PROFILE && typeof window.GAME_PROFILE.setCharacter === "function") {
        window.GAME_PROFILE.setCharacter(charId);
      }

      // Perbarui avatar pendamping kuis & busana daerah (Opsi 2)
      const companionImg = document.getElementById("quiz-companion-avatar");
      const companionName = document.getElementById("quiz-companion-name");
      const companionCostume = document.getElementById("quiz-companion-costume");
      const companionBadge = document.getElementById("quiz-costume-badge");
      if (companionImg) companionImg.src = targetKarakter.gambar;
      if (companionName) companionName.innerText = targetKarakter.nama;

      const currentZoneId = activeZone ? activeZone.id : "jawa";
      if (window.COSTUME_DATA) {
        const costume = window.COSTUME_DATA.getCostume(charId, currentZoneId);
        if (companionCostume) companionCostume.innerText = costume.costumeName;
        if (companionBadge) companionBadge.innerText = costume.avatarIcon;
        const quoteEl = document.getElementById("quiz-companion-quote");
        if (quoteEl) quoteEl.innerText = costume.quoteStart;
      }

      // Perbarui kartu pertemuan di dialog pulau jika sedang terbuka
      const travelerAvatar = document.getElementById("dialog-traveler-avatar");
      const travelerName = document.getElementById("dialog-traveler-name");
      const travelerCostume = document.getElementById("dialog-traveler-costume");
      if (travelerAvatar) travelerAvatar.src = targetKarakter.gambar;
      if (travelerName) travelerName.innerText = targetKarakter.nama;
      if (travelerCostume && window.COSTUME_DATA) {
        travelerCostume.innerText = window.COSTUME_DATA.getCostume(charId, currentZoneId).costumeName;
      }
    };

    testImg.onerror = function() {
      // Jika file gambar karakter tidak ditemukan, tampilkan gambar karakter sebelumnya dan tulis pesan di console
      console.warn(`[Gagal Memuat] File gambar "${targetKarakter.gambar}" untuk karakter ${targetKarakter.nama} tidak ditemukan. Menampilkan gambar sebelumnya.`);
      if (heroImg) {
        heroImg.src = previousSrc;
      }
    };

    testImg.src = targetKarakter.gambar;
  }

  // ==========================================================================
  // BASIS DATA 7 MUSIK DAERAH (JUKEBOX NUSANTARA)
  // ==========================================================================
  const DAFTAR_MUSIK = [
    {
      id: "nusantara",
      nama: "Rasa Sayange & Harmoni Nusantara",
      daerah: "Seluruh Nusantara (Tema Bawaan)",
      alat: "Kolintang, Vokal & Angklung Asli",
      icon: "🇮🇩",
      zoneId: null,
      unlockHint: "Tema pembuka default"
    },
    {
      id: "jawa",
      nama: "Prau Layar (Gamelan Ceria Jawa)",
      daerah: "Pulau Jawa",
      alat: "Gamelan Lancaran, Saron & Kendang Rancak",
      icon: "⛵",
      zoneId: "jawa",
      unlockHint: "Jelajahi Pulau Jawa"
    },
    {
      id: "sumatera",
      nama: "Soleram Syahdu Ranah Melayu",
      daerah: "Pulau Sumatera",
      alat: "Petikan Dawai Melayu & Suling Bambu Asli",
      icon: "🌿",
      zoneId: "sumatera",
      unlockHint: "Selesaikan Pulau Jawa"
    },
    {
      id: "kalimantan",
      nama: "Petikan Sape' Dayak Kenyah Asli",
      daerah: "Pulau Kalimantan",
      alat: "Sape' Asli Borneo & Resonansi Kayu Rimba",
      icon: "🌴",
      zoneId: "kalimantan",
      unlockHint: "Selesaikan Pulau Sumatera"
    },
    {
      id: "sulawesi",
      nama: "Si Patokaan Semilir Bahari",
      daerah: "Pulau Sulawesi",
      alat: "Kolintang & Melodi Khas Sulawesi Asli",
      icon: "⛵",
      zoneId: "sulawesi",
      unlockHint: "Selesaikan Pulau Kalimantan"
    },
    {
      id: "papua",
      nama: "Sajojo Hutan Zamrud Papua",
      daerah: "Pulau Papua & Maluku",
      alat: "Perkusi Tifa & Harmoni Etnik Papua Asli",
      icon: "🦜",
      zoneId: "papua",
      unlockHint: "Selesaikan Pulau Sulawesi"
    },
    {
      id: "bali",
      nama: "Rindik Bambu Ubud & Tirta Suci",
      daerah: "Pulau Bali & Nusa Tenggara",
      alat: "Bilah Bambu Rindik Bali Asli & Gemercik Air",
      icon: "🛕",
      zoneId: "bali",
      unlockHint: "Selesaikan Pulau Papua"
    }
  ];

  function getCustomMenuBgm() {
    try {
      const saved = localStorage.getItem("custom_menu_bgm");
      if (saved && DAFTAR_MUSIK.find(m => m.id === saved)) {
        return saved;
      }
    } catch (e) {}
    return "nusantara";
  }

  function setCustomMenuBgm(trackId) {
    try {
      localStorage.setItem("custom_menu_bgm", trackId);
    } catch (e) {}
  }

  function renderJukeboxModal() {
    const listEl = document.getElementById("music-track-list");
    if (!listEl) return;
    listEl.innerHTML = "";

    const activeMenuTrack = getCustomMenuBgm();

    DAFTAR_MUSIK.forEach(track => {
      let isUnlocked = false;
      let isCompleted = false;

      if (!track.zoneId) {
        // Tema Nusantara default selalu terbuka sejak awal
        isUnlocked = true;
      } else {
        const prof = window.GAME_PROFILE || window.PROFILE_STATE;
        if (prof) {
          isUnlocked = prof.isZoneUnlocked(track.zoneId);
          isCompleted = prof.isZoneCompleted(track.zoneId);
        }
      }

      const isCurrentActive = (activeMenuTrack === track.id);

      const card = document.createElement("div");
      card.className = `music-track-card ${isCurrentActive ? 'active-theme' : ''} ${!isUnlocked ? 'locked' : ''}`;

      let statusPillHtml = "";
      if (isCurrentActive) {
        statusPillHtml = `<span class="music-track-status-pill pill-status-playing">🎵 Musik Menu Aktif</span>`;
      } else if (isCompleted) {
        statusPillHtml = `<span class="music-track-status-pill pill-status-master">🌟 100% Selesai</span>`;
      }

      let actionHtml = "";
      if (!isUnlocked) {
        actionHtml = `<span class="badge-music-locked">🔒 ${track.unlockHint}</span>`;
      } else if (isCurrentActive) {
        actionHtml = `<button class="btn-music-action btn-music-active">✅ Digunakan</button>`;
      } else {
        actionHtml = `<button class="btn-music-action btn-music-select" data-track="${track.id}">▶️ Pilih untuk Menu</button>`;
      }

      card.innerHTML = `
        <div class="music-track-info">
          <div class="music-track-icon">${isUnlocked ? track.icon : "🔒"}</div>
          <div class="music-track-details">
            <div class="music-track-title">
              ${track.nama}
              ${statusPillHtml}
            </div>
            <div class="music-track-subtitle">
              📍 ${track.daerah} • 🎼 ${track.alat}
            </div>
          </div>
        </div>
        <div class="music-track-actions">
          ${actionHtml}
        </div>
      `;

      // Event listener tombol pilih untuk Menu Utama
      const btnSelect = card.querySelector(".btn-music-select");
      if (btnSelect) {
        btnSelect.addEventListener("click", () => {
          if (window.AUDIO_SYNTH && typeof window.AUDIO_SYNTH.playClick === "function") {
            window.AUDIO_SYNTH.playClick();
          }
          setCustomMenuBgm(track.id);

          // Jika saat ini di Menu Utama atau Peta, langsung putar lagu pilihan dengan cross-fade
          const currentScreen = document.querySelector(".game-screen.active");
          if (currentScreen && (currentScreen.id === "screen-title" || currentScreen.id === "screen-map")) {
            if (window.AUDIO_SYNTH && typeof window.AUDIO_SYNTH.playBGM === "function") {
              window.AUDIO_SYNTH.playBGM(track.id);
            }
          }
          renderJukeboxModal();
        });
      }

      listEl.appendChild(card);
    });
  }

  function init() {
    bindGlobalButtons();
    renderMapNodes();
    updateProfileUI();

    // Muat otomatis pilihan terakhir dari localStorage ("karakterTerpilih") saat halaman dibuka
    let savedChar = "boni";
    try {
      savedChar = localStorage.getItem("karakterTerpilih") || "boni";
    } catch (e) {
      savedChar = "boni";
    }
    if (savedChar === "trio" || !DAFTAR_KARAKTER.find(k => k.id === savedChar)) {
      savedChar = "boni";
    }
    gantiKarakter(savedChar);

    showScreen("screen-title");

    // Inisialisasi Audio dan putar musik santai menu utama pada interaksi pengguna pertama
    document.body.addEventListener("pointerdown", () => {
      try {
        if (window.AUDIO_SYNTH) {
          window.AUDIO_SYNTH.init();
          if (typeof window.AUDIO_SYNTH.playBGM === "function") {
            window.AUDIO_SYNTH.playBGM(getCustomMenuBgm());
          }
        }
      } catch (e) {
        console.warn("Audio init on pointerdown:", e);
      }
    }, { once: true });
  }

  function showScreen(screenId) {
    const screens = document.querySelectorAll(".game-screen");
    screens.forEach(s => s.classList.remove("active"));

    const target = document.getElementById(screenId);
    if (target) {
      target.classList.add("active");
    }

    if (screenId === "screen-map") {
      renderMapNodes();
    }

    // Integrasi Backsound Musik Santai Tradisional per Layar & Daerah
    try {
      if (window.AUDIO_SYNTH && typeof window.AUDIO_SYNTH.playBGM === "function") {
        if (screenId === "screen-title" || screenId === "screen-map") {
          window.AUDIO_SYNTH.playBGM(getCustomMenuBgm());
        } else if (screenId === "screen-dialog" || screenId === "screen-quiz" || screenId === "screen-victory") {
          if (activeZone && activeZone.id) {
            window.AUDIO_SYNTH.playBGM(activeZone.id);
          }
        }
      }
    } catch (e) {
      console.warn("BGM transition error:", e);
    }
  }

  function bindGlobalButtons() {
    // Tombol Audio Mute
    const audioBtn = document.getElementById("btn-toggle-sound");
    if (audioBtn) {
      audioBtn.addEventListener("click", () => {
        const muted = window.AUDIO_SYNTH.toggleMute();
        audioBtn.innerText = muted ? "🔇 Suara Mati" : "🔊 Suara Nyala";
      });
    }

    // Navigasi Menu Utama
    const btnStart = document.getElementById("btn-start-game");
    if (btnStart) {
      btnStart.addEventListener("click", () => {
        try {
          if (window.AUDIO_SYNTH && typeof window.AUDIO_SYNTH.playClick === "function") {
            window.AUDIO_SYNTH.playClick();
          }
        } catch (e) {
          console.warn("Audio error:", e);
        }
        showScreen("screen-map");
      });
    }

    document.getElementById("btn-guide").addEventListener("click", () => {
      window.AUDIO_SYNTH.playClick();
      document.getElementById("modal-guide").classList.remove("hidden");
    });

    document.getElementById("btn-profile").addEventListener("click", () => {
      window.AUDIO_SYNTH.playClick();
      updateProfileUI();
      document.getElementById("modal-profile").classList.remove("hidden");
    });

    // Tombol Putar & Fullscreen Otomatis di Layar Overlay Portrait Mobile
    const btnForceFS = document.getElementById("btn-force-fullscreen");
    if (btnForceFS) {
      btnForceFS.addEventListener("click", () => {
        if (window.AUDIO_SYNTH && typeof window.AUDIO_SYNTH.playClick === "function") {
          window.AUDIO_SYNTH.playClick();
        }
        const docEl = document.documentElement;
        const requestFS = docEl.requestFullscreen || docEl.webkitRequestFullscreen || docEl.mozRequestFullScreen || docEl.msRequestFullscreen;
        if (requestFS) {
          requestFS.call(docEl).then(() => {
            if (screen.orientation && screen.orientation.lock) {
              screen.orientation.lock("landscape").catch(e => console.log("Orientation lock notice:", e));
            }
          }).catch(e => console.log("FS notice:", e));
        }
      });
    }

    // Tombol Jukebox Musik Nusantara (Top Bar & Menu Utama)
    const btnJukeboxTop = document.getElementById("btn-open-jukebox");
    if (btnJukeboxTop) {
      btnJukeboxTop.addEventListener("click", () => {
        if (window.AUDIO_SYNTH && typeof window.AUDIO_SYNTH.playClick === "function") {
          window.AUDIO_SYNTH.playClick();
        }
        renderJukeboxModal();
        document.getElementById("modal-music").classList.remove("hidden");
      });
    }

    const btnJukeboxTitle = document.getElementById("btn-jukebox-title");
    if (btnJukeboxTitle) {
      btnJukeboxTitle.addEventListener("click", () => {
        if (window.AUDIO_SYNTH && typeof window.AUDIO_SYNTH.playClick === "function") {
          window.AUDIO_SYNTH.playClick();
        }
        renderJukeboxModal();
        document.getElementById("modal-music").classList.remove("hidden");
      });
    }

    // Klik Tab Karakter (Boni, Rara, Pendekar Cilik, Trio Sahabat)
    const charTabs = document.querySelectorAll(".char-pill-btn");
    charTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        window.AUDIO_SYNTH.playClick();
        const charId = tab.getAttribute("data-char");
        if (charId) {
          gantiKarakter(charId);
        }
      });
    });

    // Navigasi Arrow Karakter Khusus Mobile (Hemat Tempat & Kompak)
    const CHAR_KEYS = ["boni", "rara", "pendekar"];
    const btnCharPrev = document.getElementById("btn-char-prev");
    const btnCharNext = document.getElementById("btn-char-next");

    if (btnCharPrev) {
      btnCharPrev.addEventListener("click", () => {
        if (window.AUDIO_SYNTH && typeof window.AUDIO_SYNTH.playClick === "function") {
          window.AUDIO_SYNTH.playClick();
        }
        let currentIdx = CHAR_KEYS.indexOf(currentKarakterId);
        if (currentIdx === -1) currentIdx = 0;
        const prevIdx = (currentIdx - 1 + CHAR_KEYS.length) % CHAR_KEYS.length;
        gantiKarakter(CHAR_KEYS[prevIdx]);
      });
    }

    if (btnCharNext) {
      btnCharNext.addEventListener("click", () => {
        if (window.AUDIO_SYNTH && typeof window.AUDIO_SYNTH.playClick === "function") {
          window.AUDIO_SYNTH.playClick();
        }
        let currentIdx = CHAR_KEYS.indexOf(currentKarakterId);
        if (currentIdx === -1) currentIdx = 0;
        const nextIdx = (currentIdx + 1) % CHAR_KEYS.length;
        gantiKarakter(CHAR_KEYS[nextIdx]);
      });
    }

    // Tombol Navigasi Peta & Dialog
    document.getElementById("btn-map-back").addEventListener("click", () => {
      window.AUDIO_SYNTH.playClick();
      showScreen("screen-title");
    });

    document.getElementById("btn-dialog-back-map").addEventListener("click", () => {
      window.AUDIO_SYNTH.playClick();
      showScreen("screen-map");
    });

    document.getElementById("btn-quiz-quit").addEventListener("click", async () => {
      window.AUDIO_SYNTH.playClick();
      const yakin = await window.GAME_DIALOG.confirm(
        "Keluar dari Kuis?",
        "Kemajuan kuis yang belum selesai akan dibatalkan. Kembali ke menu pulau?",
        "🚪",
        "Ya, Keluar",
        "Lanjut Main"
      );
      if (yakin) {
        if (window.QUIZ_ENGINE && typeof window.QUIZ_ENGINE.stopTimer === "function") {
          window.QUIZ_ENGINE.stopTimer();
        }
        showScreen("screen-dialog");
      }
    });

    // Tombol Mulai 3 Misi di Pulau
    document.getElementById("btn-start-mcq").addEventListener("click", () => {
      window.AUDIO_SYNTH.playClick();
      if (activeZone) {
        showScreen("screen-quiz");
        window.QUIZ_ENGINE.startMission(activeZone, "mcq", onMissionCompleted);
      }
    });

    document.getElementById("btn-start-image").addEventListener("click", () => {
      window.AUDIO_SYNTH.playClick();
      if (activeZone) {
        showScreen("screen-quiz");
        window.QUIZ_ENGINE.startMission(activeZone, "image", onMissionCompleted);
      }
    });

    document.getElementById("btn-start-match").addEventListener("click", () => {
      window.AUDIO_SYNTH.playClick();
      if (activeZone) {
        showScreen("screen-quiz");
        window.QUIZ_ENGINE.startMission(activeZone, "match", onMissionCompleted);
      }
    });

    // Tombol Lanjut Kemenangan
    document.getElementById("btn-victory-continue").addEventListener("click", () => {
      window.AUDIO_SYNTH.playClick();
      showScreen("screen-map");
    });

    // Tutup Modal
    document.querySelectorAll(".btn-close-modal").forEach(btn => {
      btn.addEventListener("click", () => {
        window.AUDIO_SYNTH.playClick();
        btn.closest(".game-modal").classList.add("hidden");
      });
    });

    // Edit Nama Siswa
    const nameInput = document.getElementById("input-student-name");
    if (nameInput) {
      nameInput.value = window.GAME_PROFILE.get().playerName;
      nameInput.addEventListener("change", () => {
        window.GAME_PROFILE.setName(nameInput.value);
        updateProfileUI();
      });
    }

    // Reset Progres
    const resetBtn = document.getElementById("btn-reset-progress");
    if (resetBtn) {
      resetBtn.addEventListener("click", async () => {
        const yakin = await window.GAME_DIALOG.confirm(
          "Reset Petualangan?",
          "Apakah kamu yakin ingin mengulang petualangan dari awal? Semua lencana dan bintang budaya akan direset.",
          "⚠️",
          "Ya, Reset",
          "Batal"
        );
        if (yakin) {
          window.GAME_PROFILE.reset();
          updateProfileUI();
          renderMapNodes();
          await window.GAME_DIALOG.alert(
            "Petualangan Direset!",
            "Petualangan berhasil direset! Mari mulai kembali dari Tanah Jawa! 🌱",
            "🌱",
            "Mulai Lagi! 🚀"
          );
        }
      });
    }
  }

  let isDebugMode = false;

  function renderMapNodes() {
    const container = document.getElementById("map-interactive-layer");
    if (!container) return;
    container.innerHTML = "";

    const zones = window.GAME_DATA.zones;

    zones.forEach((zone) => {
      const isUnlocked = window.GAME_PROFILE.isZoneUnlocked(zone.id);
      const isCompleted = window.GAME_PROFILE.isZoneCompleted(zone.id);
      const tierInfo = window.GAME_PROFILE.getZoneTier(zone.id);

      const nodeEl = document.createElement("div");
      nodeEl.className = `map-zone-node ${isUnlocked ? 'zone-node-active' : 'zone-node-locked'} ${isCompleted ? 'zone-node-completed' : ''}`;
      nodeEl.style.left = `${zone.pin.x}%`;
      nodeEl.style.top = `${zone.pin.y}%`;
      nodeEl.setAttribute("data-zone-id", zone.id);

      // Landmark building icon + Papan nama + Status active/lock + Badge farming
      nodeEl.innerHTML = `
        ${isUnlocked ? '<div class="zone-active-halo"></div><div class="zone-active-pin">📍</div>' : ''}
        <div class="zone-landmark-box">
          <img src="${zone.landmarkImg}" alt="${zone.name}" class="zone-landmark-img">
        </div>
        <div class="zone-wood-plate">
          <span class="zone-plate-title">${zone.name}</span>
          ${isCompleted ? '<span style="color:#15803d; font-weight:bold;">✓</span>' : (!isUnlocked ? '<span class="zone-lock-badge">🔒</span>' : '')}
          ${isUnlocked ? `<div class="zone-farm-tag" title="Skor Farming: ${tierInfo.score}★">${tierInfo.icon} ${tierInfo.score}★</div>` : ''}
        </div>
        ${isDebugMode ? `<div class="debug-coords-tag" style="background:#000; color:#4ade80; font-size:10px; padding:1px 4px; border-radius:4px; margin-top:2px;">X:${zone.pin.x}% Y:${zone.pin.y}%</div>` : ''}
      `;

      nodeEl.addEventListener("click", async () => {
        if (isUnlocked) {
          window.AUDIO_SYNTH.playClick();
          openZoneHub(zone);
        } else {
          window.AUDIO_SYNTH.playWrong();
          nodeEl.classList.add("shake-locked");
          setTimeout(() => nodeEl.classList.remove("shake-locked"), 450);
          await window.GAME_DIALOG.alert(
            "Wilayah Masih Terkunci! 🔒",
            `Wilayah ${zone.name} masih terkunci!\nSelesaikan seluruh misi di wilayah sebelumnya untuk membuka daerah ini.`,
            "🔒",
            "Siap, Mengerti! 🌟"
          );
        }
      });

      container.appendChild(nodeEl);
    });

    // Update Status Bar Bintang & Progres
    const totalStars = window.GAME_PROFILE.get().stars;
    const completedCount = window.GAME_PROFILE.get().completedZones.length;
    const statsStars = document.getElementById("map-stats-stars");
    const statsProgress = document.getElementById("map-stats-progress");
    if (statsStars) statsStars.innerText = `⭐ ${totalStars} / 1800`;
    if (statsProgress) statsProgress.innerText = `🗺️ ${completedCount} / 6 Wilayah`;
  }

  // Listener tombol 'D' untuk toggle Mode Debug Koordinat Persen
  window.addEventListener("keydown", (e) => {
    if (e.key === "d" || e.key === "D") {
      isDebugMode = !isDebugMode;
      const debugOverlay = document.getElementById("map-debug-overlay");
      if (debugOverlay) {
        debugOverlay.classList.toggle("hidden", !isDebugMode);
        debugOverlay.innerText = isDebugMode ? "🛠️ Mode Debug Koordinat Aktif (Tekan D untuk keluar)" : "";
      }
      renderMapNodes();
    }
  });

  function openZoneHub(zone) {
    activeZone = zone;

    const tierInfo = window.GAME_PROFILE.getZoneTier(zone.id);
    const guardian = window.COSTUME_DATA ? window.COSTUME_DATA.getGuardian(zone.id) : null;
    const costume = window.COSTUME_DATA ? window.COSTUME_DATA.getCostume(currentKarakterId, zone.id) : null;
    const playerChar = DAFTAR_KARAKTER.find(k => k.id === currentKarakterId) || DAFTAR_KARAKTER[0];

    // Opsi 1: Pasangan Tuan Rumah / Penjaga Budaya Asli
    const npcTitle = guardian ? guardian.names : zone.npc.title;
    const npcCostumeText = guardian ? `👘 ${guardian.costume}` : "👘 Busana Adat Daerah";
    const npcGreeting = guardian ? guardian.greeting : zone.npc.greeting;
    const npcImageSrc = guardian ? guardian.image : (zone.npc.pairImg || "assets/images/npc_jawa_ai.jpg");

    const npcNameEl = document.getElementById("dialog-npc-name");
    const npcCostumeEl = document.getElementById("dialog-npc-costume");
    const npcSpeechEl = document.getElementById("dialog-npc-speech");
    const npcImg = document.getElementById("dialog-npc-img");

    if (npcNameEl) npcNameEl.innerText = npcTitle;
    if (npcCostumeEl) npcCostumeEl.innerText = npcCostumeText;
    if (npcSpeechEl) npcSpeechEl.innerText = npcGreeting;
    if (npcImg) npcImg.src = npcImageSrc;

    // Opsi 2: Tamu Kehormatan (Karakter Pemain Berbusana Adat Daerah)
    const travelerAvatar = document.getElementById("dialog-traveler-avatar");
    const travelerName = document.getElementById("dialog-traveler-name");
    const travelerCostume = document.getElementById("dialog-traveler-costume");

    if (travelerAvatar) travelerAvatar.src = playerChar.gambar;
    if (travelerName) travelerName.innerText = playerChar.nama;
    if (travelerCostume) travelerCostume.innerText = costume ? costume.costumeName : "Busana Adat Daerah";

    // Set artefak dan sub-judul zona
    document.getElementById("dialog-target-artifact").innerText = zone.artifact.name;
    document.getElementById("dialog-zone-subtitle").innerText = `${zone.name} - ${zone.subtitle} (${tierInfo.title}: ${tierInfo.score}⭐)`;

    // Perbarui data pendamping kuis saat masuk ke pulau ini
    const companionCostume = document.getElementById("quiz-companion-costume");
    const companionBadge = document.getElementById("quiz-costume-badge");
    const companionQuote = document.getElementById("quiz-companion-quote");
    if (companionCostume && costume) companionCostume.innerText = costume.costumeName;
    if (companionBadge && costume) companionBadge.innerText = costume.avatarIcon;
    if (companionQuote && costume) companionQuote.innerText = costume.quoteStart;

    // Update Status Tombol 3 Misi di Pulau (Bisa dimainkan berulang untuk farming skor & badge)
    const mcqDone = window.GAME_PROFILE.isMissionCompleted(zone.id, "mcq");
    const imgDone = window.GAME_PROFILE.isMissionCompleted(zone.id, "image");
    const matchDone = window.GAME_PROFILE.isMissionCompleted(zone.id, "match");

    const btnMcq = document.getElementById("btn-start-mcq");
    const btnImg = document.getElementById("btn-start-image");
    const btnMatch = document.getElementById("btn-start-match");

    btnMcq.innerText = mcqDone ? "Main Lagi (+100⭐)" : "Mulai Kuis ➔";
    btnMcq.style.background = mcqDone ? "#16a34a" : "";

    btnImg.innerText = imgDone ? "Main Lagi (+100⭐)" : "Tebak Visual ➔";
    btnImg.style.background = imgDone ? "#16a34a" : "";

    btnMatch.innerText = matchDone ? "Main Lagi (+100⭐)" : "Tantangan ➔";
    btnMatch.style.background = matchDone ? "#16a34a" : "";

    showScreen("screen-dialog");
  }

  async function onMissionCompleted(zone, mode) {
    const result = window.GAME_PROFILE.completeMission(zone, mode);
    const tierInfo = window.GAME_PROFILE.getZoneTier(zone.id);

    if (result.isFirstVictory) {
      // Seluruh 3 misi di pulau ini pertama kali rampung! Grand Victory!
      window.AUDIO_SYNTH.playVictory();

      // Opsi 1 & Opsi 2 di Layar Kemenangan: Foto Bersama Penjaga & Petualang Berbusana Adat
      const guardian = window.COSTUME_DATA ? window.COSTUME_DATA.getGuardian(zone.id) : null;
      const costume = window.COSTUME_DATA ? window.COSTUME_DATA.getCostume(currentKarakterId, zone.id) : null;
      const playerChar = DAFTAR_KARAKTER.find(k => k.id === currentKarakterId) || DAFTAR_KARAKTER[0];

      const vGuardImg = document.getElementById("victory-guardian-img");
      const vPlayerImg = document.getElementById("victory-player-img");
      const vBadgeTag = document.getElementById("victory-player-costume-tag");
      const vHonorText = document.getElementById("victory-honor-text");

      if (vGuardImg) vGuardImg.src = guardian ? guardian.image : (zone.npc.pairImg || "assets/images/npc_jawa_ai.jpg");
      if (vPlayerImg) vPlayerImg.src = playerChar.gambar;
      if (vBadgeTag) vBadgeTag.innerText = costume ? costume.badge : "Busana Adat";
      if (vHonorText && guardian) {
        vHonorText.innerHTML = `📜 <b>${guardian.names}</b> menganugerahkan gelar <b>${guardian.honorTitle}</b> kepada <b>${playerChar.nama}</b>!`;
      }

      const artIcon = document.getElementById("victory-artifact-icon");
      if (artIcon) artIcon.innerText = zone.artifact.icon;

      const artName = document.getElementById("victory-artifact-name");
      if (artName) artName.innerText = zone.artifact.name;

      const artLore = document.getElementById("victory-artifact-lore");
      if (artLore) artLore.innerText = zone.artifact.lore;

      const bName = document.getElementById("victory-badge-name");
      if (bName) bName.innerText = zone.badge.name;

      const bDesc = document.getElementById("victory-badge-desc");
      if (bDesc) bDesc.innerText = zone.badge.desc;

      const bIcon = document.getElementById("victory-badge-icon");
      if (bIcon) bIcon.innerText = zone.badge.icon;

      showScreen("screen-victory");
    } else {
      // Misi selesai atau sesi Farming tambahan (+100⭐)
      window.AUDIO_SYNTH.playCorrect();
      await window.GAME_DIALOG.alert(
        "Luar Biasa! 🎉",
        `Kamu mendapatkan +100 Bintang Budaya!\nTotal Skor Wilayah ${zone.name}: ${tierInfo.score}⭐\nTingkat Lencana: ${tierInfo.title}`,
        "🌟",
        "Hebat! 🚀"
      );
      openZoneHub(zone);
    }
  }

  function updateProfileUI() {
    const profile = window.GAME_PROFILE.get();

    const nameInput = document.getElementById("input-student-name");
    if (nameInput) nameInput.value = profile.playerName;

    document.getElementById("profile-total-stars").innerText = profile.stars;

    // Render Rak Lencana Budaya
    const badgeGrid = document.getElementById("profile-badge-grid");
    if (badgeGrid) {
      badgeGrid.innerHTML = window.GAME_DATA.zones.map(zone => {
        const owned = profile.badges.find(b => b.id === zone.badge.id);
        if (owned) {
          return `
            <div class="badge-item badge-earned">
              <div class="badge-icon-box">${zone.badge.icon}</div>
              <div class="badge-name">${zone.badge.name}</div>
              <div class="badge-date">Diraih: ${owned.unlockedAt || 'Baru Saja'}</div>
            </div>
          `;
        } else {
          return `
            <div class="badge-item badge-locked">
              <div class="badge-icon-box">🔒</div>
              <div class="badge-name">${zone.badge.name}</div>
              <div class="badge-date">Belum Terbuka</div>
            </div>
          `;
        }
      }).join("");
    }

    // Render Ensiklopedia Artefak
    const artifactGrid = document.getElementById("profile-artifact-grid");
    if (artifactGrid) {
      artifactGrid.innerHTML = window.GAME_DATA.zones.map(zone => {
        const owned = profile.artifacts.find(a => a.id === zone.artifact.id);
        if (owned) {
          return `
            <div class="artifact-card artifact-found">
              <div class="art-icon">${zone.artifact.icon}</div>
              <div class="art-details">
                <h4>${zone.artifact.name}</h4>
                <p>${zone.artifact.lore}</p>
              </div>
            </div>
          `;
        } else {
          return `
            <div class="artifact-card artifact-missing">
              <div class="art-icon">❓</div>
              <div class="art-details">
                <h4>Artefak Misteri (${zone.name})</h4>
                <p>Tuntaskan seluruh 3 misi di wilayah ini untuk membuka sejarah pusaka.</p>
              </div>
            </div>
          `;
        }
      }).join("");
    }
  }

  return {
    init,
    showScreen,
    getCurrentKarakterId: () => currentKarakterId,
    getActiveCharacter: () => DAFTAR_KARAKTER.find(k => k.id === currentKarakterId) || DAFTAR_KARAKTER[0],
    getActiveZone: () => activeZone,
    openZoneHub,
    renderMapNodes,
    renderJukeboxModal,
    getCustomMenuBgm,
    setCustomMenuBgm,
    DAFTAR_MUSIK
  };
})();

window.addEventListener("DOMContentLoaded", () => {
  window.APP.init();
});
