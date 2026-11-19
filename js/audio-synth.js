// audio-synth.js - Synthesizer Audio Web API untuk Petualangan Sahabat Nusantara
window.AUDIO_SYNTH = (function() {
  let ctx = null;
  let isMuted = false;
  let bgmGainNode = null;
  let bgmFilterNode = null;
  let currentTheme = null;
  let bgmInterval = null;
  let currentAudioEl = null;
  const BGM_TARGET_VOL = 0.095; // Volume musik latar santai & lembut (~9.5%)
  const BGM_AUDIO_VOL = 0.38;   // Volume rekaman audio asli yang nyaman & jernih (~38%)

  function init() {
    if (!ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        ctx = new AudioCtx();
        // Setup Filter Hangat (Lowpass Filter ~2900 Hz agar suara organik dan tidak menyengat)
        bgmFilterNode = ctx.createBiquadFilter();
        bgmFilterNode.type = 'lowpass';
        bgmFilterNode.frequency.setValueAtTime(2900, ctx.currentTime);

        // Setup BGM Master Gain Node
        bgmGainNode = ctx.createGain();
        bgmGainNode.gain.setValueAtTime(0, ctx.currentTime);

        bgmFilterNode.connect(bgmGainNode);
        bgmGainNode.connect(ctx.destination);
      }
    }
    if (ctx && ctx.state === 'suspended') {
      ctx.resume();
    }
  }

  function toggleMute() {
    init();
    isMuted = !isMuted;
    if (currentAudioEl) {
      currentAudioEl.volume = isMuted ? 0 : BGM_AUDIO_VOL;
    }
    if (bgmGainNode && ctx) {
      const t = ctx.currentTime;
      bgmGainNode.gain.cancelScheduledValues(t);
      if (isMuted) {
        bgmGainNode.gain.linearRampToValueAtTime(0.0001, t + 0.2);
      } else {
        bgmGainNode.gain.linearRampToValueAtTime(BGM_TARGET_VOL, t + 0.4);
      }
    }
    return isMuted;
  }

  // Helper Nada SFX Instan (Langsung ke destination)
  function playTone(freq, type = 'sine', duration = 0.2, gainVal = 0.2, startTime = 0) {
    if (isMuted || !ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const t = ctx.currentTime + startTime;

    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);

    gain.gain.setValueAtTime(gainVal, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(t);
    osc.stop(t + duration);
  }

  // Helper Nada BGM Terjadwal (Melewati filter dan bgmGainNode)
  function playBgmNote(freq, type = 'sine', duration = 0.6, gainVal = 0.15, offsetTime = 0, overtoneMult = 0) {
    if (!ctx || !bgmFilterNode) return;
    const t = ctx.currentTime + offsetTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);

    gain.gain.setValueAtTime(gainVal, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);

    osc.connect(gain);
    gain.connect(bgmFilterNode);

    osc.start(t);
    osc.stop(t + duration);

    // Tambahkan resonansi overtone (harmonik instrumen tradisional bambu / perunggu / dawai)
    if (overtoneMult > 0) {
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(freq * overtoneMult, t);

      gain2.gain.setValueAtTime(gainVal * 0.35, t);
      gain2.gain.exponentialRampToValueAtTime(0.0001, t + duration * 0.65);

      osc2.connect(gain2);
      gain2.connect(bgmFilterNode);

      osc2.start(t);
      osc2.stop(t + duration * 0.65);
    }
  }

  // ==========================================
  // GENERATOR POLA MUSIK SANTAI 7 TEMA DAERAH
  // ==========================================

  // 1. Nusantara Harmony (Menu & Peta) - Pentatonik G Mayor (72 BPM)
  function scheduleNusantaraPhrase() {
    const scale = [392.00, 440.00, 493.88, 587.33, 659.25, 783.99]; // G4, A4, B4, D5, E5, G5
    const beat = 0.833;
    // Drone Bass Hangat
    playBgmNote(196.00, 'sine', 3.6, 0.12, 0); // G3
    playBgmNote(146.83, 'sine', 3.2, 0.10, beat * 4); // D3

    // Melodi Kolintang & Angklung
    const notes = [
      { f: scale[0], t: 0, d: 0.9 },
      { f: scale[2], t: beat * 1, d: 0.7 },
      { f: scale[3], t: beat * 2, d: 1.1 },
      { f: scale[4], t: beat * 3, d: 0.8 },
      { f: scale[5], t: beat * 4, d: 1.4 },
      { f: scale[3], t: beat * 5.5, d: 0.7 },
      { f: scale[1], t: beat * 6.5, d: 0.9 }
    ];
    notes.forEach(n => playBgmNote(n.f, 'sine', n.d, 0.16, n.t, 2.0));
  }

  // 2. Jawa - Gamelan Slendro & Gong Ageng (64 BPM)
  function scheduleJawaPhrase() {
    // Tangga Nada Slendro: 1(Ji)=261.6, 2(Ro)=293.7, 3(Lu)=329.6, 5(Mo)=392.0, 6(Nem)=440.0, 1'(Ji)=523.2
    const beat = 0.937;
    // Dentum Gong Ageng Hening Bergaung Rendah
    playBgmNote(82.4, 'sine', 4.5, 0.22, 0); // Gong E2 rendah
    playBgmNote(164.8, 'triangle', 2.5, 0.08, 0);

    // Bonang & Saron Laras Lembut
    const notes = [
      { f: 261.6, t: 0, d: 1.2 },
      { f: 329.6, t: beat * 1, d: 0.8 },
      { f: 293.7, t: beat * 2, d: 0.9 },
      { f: 392.0, t: beat * 3, d: 1.2 },
      { f: 440.0, t: beat * 4, d: 1.1 },
      { f: 392.0, t: beat * 5, d: 0.8 },
      { f: 329.6, t: beat * 6, d: 1.0 },
      { f: 293.7, t: beat * 7, d: 1.3 }
    ];
    notes.forEach(n => playBgmNote(n.f, 'sine', n.d, 0.14, n.t, 2.04));
  }

  // 3. Sumatera - Saluang Minang & Gambus Melayu (68 BPM)
  function scheduleSumateraPhrase() {
    const beat = 0.882;
    // Petikan Lembut Gambus
    playBgmNote(146.8, 'triangle', 1.8, 0.12, 0); // D3
    playBgmNote(220.0, 'triangle', 1.2, 0.10, beat * 2);
    playBgmNote(196.0, 'triangle', 1.5, 0.10, beat * 4);
    playBgmNote(220.0, 'triangle', 1.2, 0.10, beat * 6);

    // Alunan Suling Saluang
    const melody = [
      { f: 587.33, t: 0, d: 1.4 },          // D5
      { f: 523.25, t: beat * 1.5, d: 0.9 }, // C5
      { f: 440.00, t: beat * 2.5, d: 1.6 }, // A4
      { f: 392.00, t: beat * 4.2, d: 1.1 }, // G4
      { f: 440.00, t: beat * 5.4, d: 0.8 }, // A4
      { f: 587.33, t: beat * 6.3, d: 1.8 }  // D5
    ];
    melody.forEach(n => playBgmNote(n.f, 'triangle', n.d, 0.12, n.t, 1.5));
  }

  // 4. Kalimantan - Sape' Dayak Kenyah Rimba Borneo (74 BPM)
  function scheduleKalimantanPhrase() {
    const beat = 0.810;
    // Drone Dawai Panjang Sape'
    playBgmNote(146.83, 'sawtooth', 3.2, 0.08, 0); // D3
    playBgmNote(220.00, 'sawtooth', 2.5, 0.07, beat * 4); // A3

    // Petikan Melodi Sape' Mengalir
    const sape = [
      { f: 293.66, t: 0, d: 0.6 },
      { f: 369.99, t: beat * 0.7, d: 0.5 },
      { f: 440.00, t: beat * 1.5, d: 0.8 },
      { f: 554.37, t: beat * 2.3, d: 0.6 },
      { f: 587.33, t: beat * 3.0, d: 1.2 },
      { f: 440.00, t: beat * 4.5, d: 0.6 },
      { f: 369.99, t: beat * 5.3, d: 0.7 },
      { f: 293.66, t: beat * 6.2, d: 1.4 }
    ];
    sape.forEach(n => {
      playBgmNote(n.f, 'sawtooth', n.d, 0.12, n.t, 2.0);
      // Gema halus rimba Borneo
      playBgmNote(n.f, 'sine', n.d * 0.7, 0.05, n.t + 0.22);
    });
  }

  // 5. Sulawesi - Kecapi Bugis & Suling Toraja (70 BPM)
  function scheduleSulawesiPhrase() {
    const beat = 0.857;
    // Petikan Dawai Kecapi Mengayun
    const kecapi = [
      { f: 329.63, t: 0, d: 0.5 },
      { f: 392.00, t: beat * 1, d: 0.5 },
      { f: 440.00, t: beat * 2, d: 0.6 },
      { f: 493.88, t: beat * 3, d: 0.5 },
      { f: 587.33, t: beat * 4, d: 0.7 },
      { f: 440.00, t: beat * 5.2, d: 0.5 },
      { f: 392.00, t: beat * 6.2, d: 0.6 }
    ];
    kecapi.forEach(n => playBgmNote(n.f, 'sawtooth', n.d, 0.10, n.t, 2.0));

    // Tiupan Panjang Suling Toraja
    playBgmNote(659.25, 'sine', 2.2, 0.08, beat * 0.5);
    playBgmNote(587.33, 'sine', 2.4, 0.08, beat * 4.2);
  }

  // 6. Papua - Suling Hutan Zamrud & Tifa Santai (66 BPM)
  function schedulePapuaPhrase() {
    const beat = 0.909;
    // Detak Tifa Jantung Alami (Low kick pitch drop 90Hz -> 48Hz)
    [0, beat * 2, beat * 4, beat * 6].forEach((t, i) => {
      setTimeout(() => {
        if (!isMuted && ctx && currentTheme === 'papua') {
          playTone(i % 2 === 0 ? 92 : 80, 'triangle', 0.45, 0.14);
        }
      }, t * 1000);
    });

    // Suling Bambu Hutan Bebas
    const flute = [
      { f: 349.23, t: beat * 0.5, d: 1.6 }, // F4
      { f: 440.00, t: beat * 2.2, d: 1.8 }, // A4
      { f: 523.25, t: beat * 4.2, d: 2.1 }, // C5
      { f: 392.00, t: beat * 6.5, d: 1.4 }  // G4
    ];
    flute.forEach(n => playBgmNote(n.f, 'sine', n.d, 0.12, n.t, 1.5));
  }

  // 7. Bali - Rindik Bambu Ubud & Genta Meditatif (72 BPM)
  function scheduleBaliPhrase() {
    const beat = 0.833;
    // Denting Genta Kuil Damai
    playBgmNote(1318.5, 'sine', 2.8, 0.08, 0);

    // Getaran Bilah Bambu Rindik Selisir (E4, F4, A4, B4, C5)
    const rindik = [
      { f: 329.63, t: 0, d: 0.4 },
      { f: 349.23, t: beat * 0.5, d: 0.4 },
      { f: 440.00, t: beat * 1.0, d: 0.5 },
      { f: 493.88, t: beat * 1.5, d: 0.4 },
      { f: 523.25, t: beat * 2.0, d: 0.6 },
      { f: 493.88, t: beat * 3.0, d: 0.4 },
      { f: 440.00, t: beat * 3.5, d: 0.5 },
      { f: 349.23, t: beat * 4.5, d: 0.4 },
      { f: 329.63, t: beat * 5.0, d: 0.6 },
      { f: 440.00, t: beat * 6.2, d: 0.7 }
    ];
    rindik.forEach(n => {
      playBgmNote(n.f, 'triangle', n.d, 0.14, n.t, 2.76);
      // Tremolo bambu khas rindik
      playBgmNote(n.f, 'sine', n.d * 0.7, 0.06, n.t + 0.12);
    });
  }

  function startThemeLoop(themeId) {
    if (bgmInterval) {
      clearInterval(bgmInterval);
      bgmInterval = null;
    }

    const runners = {
      nusantara: { fn: scheduleNusantaraPhrase, durationMs: 7000 },
      jawa: { fn: scheduleJawaPhrase, durationMs: 7600 },
      sumatera: { fn: scheduleSumateraPhrase, durationMs: 7200 },
      kalimantan: { fn: scheduleKalimantanPhrase, durationMs: 6800 },
      sulawesi: { fn: scheduleSulawesiPhrase, durationMs: 7000 },
      papua: { fn: schedulePapuaPhrase, durationMs: 7400 },
      bali: { fn: scheduleBaliPhrase, durationMs: 6900 }
    };

    const target = runners[themeId] || runners.nusantara;
    target.fn(); // Putar frase awal
    bgmInterval = setInterval(() => {
      if (!isMuted && ctx && currentTheme === themeId) {
        target.fn();
      }
    }, target.durationMs);
  }

  function playBGM(themeId) {
    if (!themeId) return;
    init();
    if (currentTheme === themeId && currentAudioEl && !currentAudioEl.paused) return;

    // Cross-fade halus audio rekaman asli sebelumnya
    const prevAudio = currentAudioEl;
    if (prevAudio) {
      let fadeOutSteps = 10;
      let step = 0;
      const initialVol = prevAudio.volume;
      const fadeInterval = setInterval(() => {
        step++;
        prevAudio.volume = Math.max(0, initialVol - (initialVol * (step / fadeOutSteps)));
        if (step >= fadeOutSteps || prevAudio.volume <= 0.01) {
          clearInterval(fadeInterval);
          prevAudio.pause();
          prevAudio.currentTime = 0;
        }
      }, 70);
    }

    // Hentikan sintesis prosedural lama jika aktif
    if (bgmInterval) {
      clearInterval(bgmInterval);
      bgmInterval = null;
    }
    if (bgmGainNode && ctx) {
      const t = ctx.currentTime;
      bgmGainNode.gain.cancelScheduledValues(t);
      bgmGainNode.gain.linearRampToValueAtTime(0.0001, t + 0.6);
    }

    currentTheme = themeId;

    // Putar rekaman audio asli instrumen daerah (Option B)
    try {
      const audioPath = `assets/audio/bgm/bgm_${themeId}.mp3`;
      const nextAudio = new Audio(audioPath);
      nextAudio.loop = true;
      nextAudio.volume = isMuted ? 0 : 0.01;
      currentAudioEl = nextAudio;

      nextAudio.onerror = function() {
        console.warn(`[Audio BGM Fallback] File ${audioPath} tidak ditemukan, beralih ke sintesis prosedural.`);
        startThemeLoop(themeId);
      };

      const playPromise = nextAudio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          if (isMuted) {
            nextAudio.volume = 0;
            return;
          }
          // Fade-in halus 1 detik ke target volume
          let fadeInSteps = 12;
          let step = 0;
          const fadeInterval = setInterval(() => {
            step++;
            if (currentTheme !== themeId || isMuted) {
              clearInterval(fadeInterval);
              return;
            }
            nextAudio.volume = Math.min(BGM_AUDIO_VOL, BGM_AUDIO_VOL * (step / fadeInSteps));
            if (step >= fadeInSteps || nextAudio.volume >= BGM_AUDIO_VOL) {
              clearInterval(fadeInterval);
              nextAudio.volume = BGM_AUDIO_VOL;
            }
          }, 80);
        }).catch(err => {
          console.warn("[Autoplay Restricted] Browser membatasi pemutaran otomatis:", err);
          startThemeLoop(themeId);
        });
      }
    } catch (e) {
      console.warn("Audio element error:", e);
      startThemeLoop(themeId);
    }
  }

  function stopBGM() {
    if (currentAudioEl) {
      currentAudioEl.pause();
      currentAudioEl.currentTime = 0;
      currentAudioEl = null;
    }
    if (bgmGainNode && ctx) {
      const t = ctx.currentTime;
      bgmGainNode.gain.cancelScheduledValues(t);
      bgmGainNode.gain.linearRampToValueAtTime(0.0001, t + 0.5);
    }
    if (bgmInterval) {
      clearInterval(bgmInterval);
      bgmInterval = null;
    }
    currentTheme = null;
  }

  return {
    init,
    toggleMute,
    isMuted: () => isMuted,
    playBGM,
    stopBGM,
    getCurrentTheme: () => currentTheme,

    // Suara Klik Tombol Kayu (Wooden Tap)
    playClick() {
      try {
        init();
        if (isMuted || !ctx) return;
        playTone(320, 'triangle', 0.08, 0.25);
        playTone(180, 'sine', 0.08, 0.2, 0.02);
      } catch (e) {
        // Safe fallback jika audio context dibatasi oleh peramban
      }
    },

    // Suara Jawaban Benar (Gamelan Pentatonik Pelog Laras Riang)
    playCorrect() {
      init();
      if (isMuted || !ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        playTone(freq, 'sine', 0.35, 0.2, idx * 0.09);
        // Tambahkan nada harmonik metalik gamelan perunggu
        playTone(freq * 2.05, 'triangle', 0.2, 0.05, idx * 0.09);
      });
    },

    // Suara Jawaban Kurang Tepat (Lembut dan Mendidik)
    playWrong() {
      init();
      if (isMuted || !ctx) return;
      playTone(280, 'sawtooth', 0.2, 0.15);
      playTone(220, 'sine', 0.3, 0.2, 0.1);
    },

    // Suara Kuis: Gamelan Jawa / Bali
    playGamelan() {
      init();
      if (isMuted || !ctx) return;
      const slendro = [530, 600, 680, 790, 900, 1060];
      slendro.forEach((f, i) => {
        playTone(f, 'sine', 0.45, 0.25, i * 0.18);
        playTone(f * 2.02, 'triangle', 0.25, 0.08, i * 0.18);
      });
      setTimeout(() => {
        if (!isMuted && ctx) {
          playTone(130, 'sine', 1.2, 0.4);
          playTone(260, 'triangle', 0.8, 0.15);
        }
      }, 1080);
    },

    // Suara Kuis: Sape' Dayak Kalimantan
    playSape() {
      init();
      if (isMuted || !ctx) return;
      const sapeNotes = [440, 554, 659, 880, 1108, 880, 659];
      sapeNotes.forEach((f, i) => {
        playTone(f, 'sawtooth', 0.25, 0.15, i * 0.14);
        playTone(f * 2, 'sine', 0.2, 0.1, i * 0.14);
      });
    },

    // Suara Kuis: Tifa Papua / Maluku
    playTifa() {
      init();
      if (isMuted || !ctx) return;
      const rhythm = [
        { f: 95, dur: 0.3, wait: 0 },
        { f: 180, dur: 0.15, wait: 0.25 },
        { f: 190, dur: 0.15, wait: 0.45 },
        { f: 90, dur: 0.45, wait: 0.70 },
        { f: 185, dur: 0.2, wait: 1.05 }
      ];
      rhythm.forEach(item => {
        setTimeout(() => {
          if (!isMuted && ctx) {
            playTone(item.f, 'triangle', item.dur, 0.35);
            playTone(item.f * 1.5, 'sine', item.dur * 0.7, 0.2);
          }
        }, item.wait * 1000);
      });
    },

    // Suara Selebrasi Kemenangan Artefak (Grand Fanfare Nusantara)
    playVictory() {
      init();
      if (isMuted || !ctx) return;
      const fanfare = [
        { f: 523.25, wait: 0 },
        { f: 523.25, wait: 0.12 },
        { f: 523.25, wait: 0.24 },
        { f: 659.25, wait: 0.40 },
        { f: 783.99, wait: 0.65 },
        { f: 1046.50, wait: 0.95 }
      ];
      fanfare.forEach(item => {
        playTone(item.f, 'square', 0.28, 0.15, item.wait);
        playTone(item.f * 0.5, 'triangle', 0.35, 0.2, item.wait);
      });
      setTimeout(() => {
        if (!isMuted && ctx) {
          [1318, 1567, 2093].forEach((f, i) => {
            playTone(f, 'sine', 0.5, 0.15, i * 0.1);
          });
        }
      }, 1100);
    }
  };
})();
