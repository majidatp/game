// profile.js - Manajemen Profil Siswa, Bintang Farming 1000+, dan Rute Sekuensial 6 Wilayah
window.GAME_PROFILE = (function() {
  const STORAGE_KEY = "SAHABAT_NUSANTARA_V2_SAVE";

  // Alur pembukaan pulau sekuensial resmi: Jawa -> Sumatera -> Kalimantan -> Sulawesi -> Papua -> Bali
  const ROUTE = ["jawa", "sumatera", "kalimantan", "sulawesi", "papua", "bali"];

  const defaultState = {
    playerName: "Penjelajah Cilik",
    selectedCharacter: "boni",
    stars: 0,
    unlockedZones: ["jawa"],
    completedZones: [],
    zoneMissions: {
      jawa: [],
      sumatera: [],
      kalimantan: [],
      sulawesi: [],
      papua: [],
      bali: []
    },
    zoneScores: {
      jawa: 0,
      sumatera: 0,
      kalimantan: 0,
      sulawesi: 0,
      papua: 0,
      bali: 0
    },
    badges: [],
    artifacts: []
  };

  let state = { ...defaultState };

  function load() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        const parsed = JSON.parse(data);
        state = Object.assign({}, defaultState, parsed);
        // Pastikan objek zoneScores dan zoneMissions selalu memiliki 6 wilayah
        if (!state.zoneScores) state.zoneScores = {};
        if (!state.zoneMissions) state.zoneMissions = {};
        ROUTE.forEach(id => {
          if (state.zoneScores[id] === undefined) state.zoneScores[id] = 0;
          if (!state.zoneMissions[id]) state.zoneMissions[id] = [];
        });
      }
    } catch (e) {
      console.warn("Gagal membaca save data:", e);
      state = { ...defaultState };
    }
  }

  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn("Gagal menyimpan ke localStorage:", e);
    }
  }

  load();

  return {
    get: () => state,

    getRoute: () => ROUTE,

    setName(name) {
      state.playerName = name.trim() || "Penjelajah Cilik";
      save();
    },

    setCharacter(charId) {
      if (["boni", "rara", "pendekar", "trio"].includes(charId)) {
        state.selectedCharacter = charId;
        save();
      }
    },

    isZoneUnlocked(zoneId) {
      return state.unlockedZones.includes(zoneId);
    },

    isZoneCompleted(zoneId) {
      return state.completedZones.includes(zoneId);
    },

    isMissionCompleted(zoneId, mode) {
      if (!state.zoneMissions[zoneId]) return false;
      return state.zoneMissions[zoneId].includes(mode);
    },

    getZoneScore(zoneId) {
      return state.zoneScores[zoneId] || 0;
    },

    getZoneTier(zoneId) {
      const score = state.zoneScores[zoneId] || 0;
      if (score >= 1000) return { title: "🏆 Mahaguru Pusaka (1000+)", tier: 4, icon: "🏆", score };
      if (score >= 600) return { title: "🥇 Ksatria Pelindung", tier: 3, icon: "🥇", score };
      if (score >= 300) return { title: "🥈 Sahabat Budaya", tier: 2, icon: "🥈", score };
      if (score >= 100) return { title: "🥉 Penjelajah Cilik", tier: 1, icon: "🥉", score };
      return { title: "🌱 Penjelajah Baru", tier: 0, icon: "🌱", score };
    },

    completeMission(zone, mode) {
      if (!state.zoneMissions[zone.id]) {
        state.zoneMissions[zone.id] = [];
      }

      const isNewMission = !state.zoneMissions[zone.id].includes(mode);
      if (isNewMission) {
        state.zoneMissions[zone.id].push(mode);
      }

      // Setiap sesi kuis yang tuntas selalu memberi +100 Bintang & +100 Poin Farming Pulau (bisa 1000+)
      if (!state.zoneScores[zone.id]) state.zoneScores[zone.id] = 0;
      state.zoneScores[zone.id] += 100;
      state.stars += 100;

      // Cek apakah 3 misi (mcq, image, match) di zona ini sudah tuntas minimal sekali
      const allDone = ["mcq", "image", "match"].every(m => state.zoneMissions[zone.id].includes(m));
      let isFirstVictory = false;

      if (allDone && !state.completedZones.includes(zone.id)) {
        isFirstVictory = true;
        state.completedZones.push(zone.id);

        // Tambah lencana zona jika belum ada
        if (zone.badge && !state.badges.some(b => b.id === zone.badge.id)) {
          state.badges.push({
            ...zone.badge,
            unlockedAt: new Date().toLocaleDateString("id-ID")
          });
        }

        // Tambah artefak jika belum ada
        if (zone.artifact && !state.artifacts.some(a => a.id === zone.artifact.id)) {
          state.artifacts.push(zone.artifact);
        }

        // Buka pulau berikutnya sesuai alur resmi: Jawa -> Sumatera -> Kalimantan -> Sulawesi -> Papua -> Bali
        const curIdx = ROUTE.indexOf(zone.id);
        if (curIdx !== -1 && curIdx + 1 < ROUTE.length) {
          const nextZoneId = ROUTE[curIdx + 1];
          if (!state.unlockedZones.includes(nextZoneId)) {
            state.unlockedZones.push(nextZoneId);
          }
        }
      }

      save();
      return { isNewMission, allDone, isFirstVictory, newScore: state.zoneScores[zone.id] };
    },

    reset() {
      state = {
        ...defaultState,
        unlockedZones: ["jawa"],
        completedZones: [],
        zoneMissions: {
          jawa: [],
          sumatera: [],
          kalimantan: [],
          sulawesi: [],
          papua: [],
          bali: []
        },
        zoneScores: {
          jawa: 0,
          sumatera: 0,
          kalimantan: 0,
          sulawesi: 0,
          papua: 0,
          bali: 0
        },
        badges: [],
        artifacts: [],
        stars: 0
      };
      save();
    }
  };
})();
