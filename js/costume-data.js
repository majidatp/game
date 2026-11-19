// costume-data.js - Basis Data Terpadu Opsi 1 & Opsi 2 Sahabat Nusantara
// Opsi 1: Pasangan Tuan Rumah / Penjaga Budaya Asli Tiap Pulau
// Opsi 2: Karakter Utama (Boni, Rara, Pendekar, Trio) Berkeliling & Mengenakan Busana Adat Daerah

window.COSTUME_DATA = {
  // =========================================================================
  // OPSI 1: PROFIL PASANGAN PENJAGA BUDAYA ASLI LOKAL (TUAN RUMAH PULAU)
  // =========================================================================
  guardians: {
    jawa: {
      island: "Jawa",
      names: "Raden Bagus & Dewi Sekartaji",
      title: "Penjaga Budaya Jawa",
      costume: "Beskap Kraton & Kebaya Kartini Batik Parang",
      image: "assets/images/npc_pair_jawa.png",
      greeting: "Sugeng rawuh! Kami Raden Bagus dan Dewi Sekartaji menyambutmu di Tanah Jawa. Mari lestarikan filosofi luhur, candi megah, dan keagungan batik keraton warisan leluhur!",
      honorTitle: "Sahabat Budaya Luhur Jawa"
    },
    sumatera: {
      island: "Sumatera",
      names: "Sutan Bandaro & Puti Reno Langkis",
      title: "Penjaga Budaya Sumatera",
      costume: "Baju Kurung Taluak Belanga & Bundo Kanduang Songket Emas",
      image: "assets/images/npc_pair_sumatera.png",
      greeting: "Salamaik tibo! Kami Sutan Bandaro dan Puti Reno Langkis menyambutmu di Pulau Emas Sumatera. Dari tanah Rencong Aceh, Danau Toba, hingga kemegahan Songket Minang & Sriwijaya!",
      honorTitle: "Ksatria Pusaka Ranah Minang & Melayu"
    },
    kalimantan: {
      island: "Kalimantan",
      names: "Bujang & Dara Dayak Kenyah",
      title: "Penjaga Budaya Kalimantan",
      costume: "Baju Ta'a Manik Berenda & Sapei Sapaq Bulu Burung Enggang",
      image: "assets/images/npc_pair_kalimantan.png",
      greeting: "Adil Ka' Talino, Bacuramin Ka' Saruga, Basengat Ka' Jubata! Kami Bujang dan Dara Dayak menyambutmu di Bumi Borneo, tanah adat suku Dayak dan kemegahan sungai purba!",
      honorTitle: "Penjaga Rimba Pusaka Borneo"
    },
    sulawesi: {
      island: "Sulawesi",
      names: "Daeng Patunru & Tenri Abeng",
      title: "Penjaga Budaya Sulawesi",
      costume: "Baju Bodo Sutra Bugis & Jas Tutu' Passapu Emas",
      image: "assets/images/npc_pair_sulawesi.png",
      greeting: "Kurru Sumanga'! Tabik pun! Kami Daeng Patunru dan Tenri Abeng menyambutmu di Celebes Sulawesi, bumi para pelaut ulung Pinisi dan mahakarya batu pahat Toraja!",
      honorTitle: "Nahkoda Pusaka Bahari Celebes"
    },
    papua: {
      island: "Papua",
      names: "Pace Markus & Mace Yakomina",
      title: "Penjaga Budaya Maluku & Papua",
      costume: "Busana Holim & Sali Serat Alami, Mahkota Kasuari & Cendrawasih",
      image: "assets/images/npc_pair_papua.png",
      greeting: "Amolongo! Naimu! Kami Pace Markus dan Mace Yakomina menyambutmu di Kepulauan Rempah dan Surga Zamrud Timur Papua, tanah pusaka burung cendrawasih dan noken leluhur!",
      honorTitle: "Mutiara Pusaka Zamrud Timur"
    },
    bali: {
      island: "Bali",
      names: "I Wayan Arnawa & Ni Luh Made Sukma",
      title: "Penjaga Budaya Bali & Nusra",
      costume: "Payas Adat Madya, Destar Udeng Putih Saput Poleng, & Bunga Jepun",
      image: "assets/images/npc_pair_bali.png",
      greeting: "Om Swastyastu! Kami I Wayan dan Ni Luh Made menyambutmu di puncak petualangan Pulau Dewata dan Nusa Tenggara, tanah kesucian pura, seni tari luhur, dan keindahan abadi!",
      honorTitle: "Mahaguru Pusaka Pulau Dewata"
    }
  },

  // =========================================================================
  // OPSI 2: BUSANA ADAT YANG DIKENAKAN KARAKTER PEMAIN DI SETIAP PULAU
  // =========================================================================
  playerCostumes: {
    boni: {
      jawa: {
        costumeName: "Beskap & Blangkon Batik Jawa",
        badge: "Blangkon",
        avatarIcon: "🟤",
        quoteStart: "Boni siap buktikan pengetahuan budaya Jawa!",
        quoteCorrect: "Mantap! Raden & Dewi pasti bangga dengan jawaban kita!",
        quoteWrong: "Jangan cemas, Boni masih punya sisa nyawa! Tetap semangat!",
        quoteDanger: "Waspada! Nyawa tinggal 1, mari teliti membaca soal!"
      },
      sumatera: {
        costumeName: "Baju Taluak Belanga & Deta Minang",
        badge: "Deta Minang",
        avatarIcon: "🔺",
        quoteStart: "Rancak bana! Boni siap menjelajah warisan emas Sumatera!",
        quoteCorrect: "Luar biasa! Benar sekali kawan!",
        quoteWrong: "Tenang, Sutan & Puti memberi kita kesempatan kedua!",
        quoteDanger: "Gawat, nyawa kritis! Fokus pada petunjuk budaya Sumatera!"
      },
      kalimantan: {
        costumeName: "Rompi Manik Dayak & Bulu Burung Enggang",
        badge: "Bulu Enggang",
        avatarIcon: "🪶",
        quoteStart: "Semangat Borneo! Boni siap jaga kearifan suku Dayak!",
        quoteCorrect: "Hebat! Semangat Dayak menyertai kita!",
        quoteWrong: "Tetap tenang seperti tenangnya aliran sungai Kapuas!",
        quoteDanger: "Awas! Nyawa terakhir, pertahankan warisan rimba!"
      },
      sulawesi: {
        costumeName: "Jas Tutu' & Passapu Emas Bugis",
        badge: "Passapu Bugis",
        avatarIcon: "👑",
        quoteStart: "Tarusang petualangan kita seperti kapal Pinisi!",
        quoteCorrect: "Pinisi terus melaju kencang! Jawabanmu tepat!",
        quoteWrong: "Ombak besar tak menghentikan kita! Coba lagi dengan teliti!",
        quoteDanger: "Satu nyawa tersisa! Seperti pelaut Bugis pantang surut!"
      },
      papua: {
        costumeName: "Mahkota Kasuari & Kalung Taring Adat",
        badge: "Mahkota Kasuari",
        avatarIcon: "🌿",
        quoteStart: "Kitorang bisa! Boni bangga menjaga zamrud timur Papua!",
        quoteCorrect: "Sa bangga sekali! Jawabanmu persis!",
        quoteWrong: "Jangan menyerah, Pace & Mace setia menemani!",
        quoteDanger: "Awas! Nyawa terakhir, selamatkan pusaka noken kita!"
      },
      bali: {
        costumeName: "Destar Udeng Putih & Kamen Saput Poleng",
        badge: "Udeng Bali",
        avatarIcon: "🌺",
        quoteStart: "Om Swastyastu! Boni siap di puncak petualangan Dewata!",
        quoteCorrect: "Matur suksma! Kecerdasanmu mengharumkan budaya!",
        quoteWrong: "Tarik nafas dalam-dalam, mari kita renungkan pertanyaannya!",
        quoteDanger: "Tantangan puncak! Jaga nyawa terakhir dengan bijak!"
      }
    },

    rara: {
      jawa: {
        costumeName: "Kebaya Kartini & Sanggul Bunga Melati",
        badge: "Sanggul Melati",
        avatarIcon: "🌸",
        quoteStart: "Rara anggun bersemangat menjaga pusaka Jawa!",
        quoteCorrect: "Cantik dan cerdas! Jawabanmu sangat tepat!",
        quoteWrong: "Tak apa, Rara ingatkan untuk selalu teliti ya!",
        quoteDanger: "Hati-hati! Nyawa terakhir, mari fokus bersama Rara!"
      },
      sumatera: {
        costumeName: "Tikuluak Bundo Kanduang Songket Minang",
        badge: "Tikuluak Emas",
        avatarIcon: "👑",
        quoteStart: "Elok nian! Rara siap telusuri kekayaan Sumatera!",
        quoteCorrect: "Bundo Kanduang tersenyum bangga atas jawabanmu!",
        quoteWrong: "Sabar dan teliti, mari kita baca lagi dengan jeli!",
        quoteDanger: "Aduh, nyawa tinggal 1! Tetap tenang dan teliti!"
      },
      kalimantan: {
        costumeName: "Baju Ta'a Manik & Gelang Dayak Kenyah",
        badge: "Ta'a Kenyah",
        avatarIcon: "🪶",
        quoteStart: "Rara bangga mengenakan mahakarya manik Dayak!",
        quoteCorrect: "Wah indahnya! Jawabanmu tepat sekali kawan!",
        quoteWrong: "Hutan rimba mengajarkan ketabahan, mari coba lagi!",
        quoteDanger: "Peringatan! Tinggal 1 hati tersisa, berpikir cermat!"
      },
      sulawesi: {
        costumeName: "Baju Bodo Sutra Merah Muda & Hiasan Bunga",
        badge: "Baju Bodo Sutra",
        avatarIcon: "✨",
        quoteStart: "Baju Bodo sutra menari indah! Rara siap kuis Sulawesi!",
        quoteCorrect: "Kurru Sumanga'! Jawabanmu luar biasa tepat!",
        quoteWrong: "Pelaut tangguh tak putus asa, mari perbaiki!",
        quoteDanger: "Gawat, sisa 1 hati! Kerahkan seluruh ilmumu!"
      },
      papua: {
        costumeName: "Busana Rumbai Sali & Mahkota Cendrawasih",
        badge: "Sali Cendrawasih",
        avatarIcon: "🪶",
        quoteStart: "Indahnya burung Cendrawasih! Kitorang siap jaga Papua!",
        quoteCorrect: "Keren sekali! Mutiara timur bersinar terang!",
        quoteWrong: "Jangan berkecil hati, Pace & Mace percaya padamu!",
        quoteDanger: "Waspada penuh! Jaga hati terakhir demi pusaka Papua!"
      },
      bali: {
        costumeName: "Kemben Payas Kuning & Bunga Jepun Kamboja",
        badge: "Bunga Jepun Bali",
        avatarIcon: "🌼",
        quoteStart: "Aura damai Pulau Dewata mengiringi langkah Rara!",
        quoteCorrect: "Astungkara! Pengetahuanmu sungguh mengagumkan!",
        quoteWrong: "Tetap tenang dan damai, mari cari jawaban terbaik!",
        quoteDanger: "Misi puncak! Nyawa terakhir, buktikan kehebatanmu!"
      }
    },

    pendekar: {
      jawa: {
        costumeName: "Pendekar Silat Beskap Wulung Jawa",
        badge: "Ikat Wulung",
        avatarIcon: "🥋",
        quoteStart: "Pendekar siap menguji ketangkasan ilmu budaya Jawa!",
        quoteCorrect: "Jurus tepat! Tak ada soal yang lolos dari ketangkasanmu!",
        quoteWrong: "Ksatria pantang menyerah, pasang kuda-kuda dan teliti lagi!",
        quoteDanger: "Kuda-kuda terakhir! Pertahankan kehormatan ksatria!"
      },
      sumatera: {
        costumeName: "Ksatria Silek Minangkabau Saluak Hitam",
        badge: "Saluak Pendekar",
        avatarIcon: "🗡️",
        quoteStart: "Langkah silek harimau Minang siap hadapi tantangan!",
        quoteCorrect: "Kena sasaran! Ksatria Minang mengangguk hormat!",
        quoteWrong: "Kuasai ritme pikiranmu, pendekar sejati tetap tenang!",
        quoteDanger: "Jurus penentu! Fokuskan seluruh konsentrasi!"
      },
      kalimantan: {
        costumeName: "Pendekar Mandau Dayak & Perisai Telabang",
        badge: "Mandau Enggang",
        avatarIcon: "🛡️",
        quoteStart: "Ketangguhan ksatria Borneo siap lindungi pusaka rimba!",
        quoteCorrect: "Tebasan ilmu yang presisi! Lanjutkan kawan!",
        quoteWrong: "Tahan perisaimu, jangan biarkan kesalahan melemahkanmu!",
        quoteDanger: "Perisai terakhir! Bertahan dan tuntaskan misi!"
      },
      sulawesi: {
        costumeName: "Ksatria Silat Bugis Selempang Badik Emas",
        badge: "Badik Passapu",
        avatarIcon: "⚡",
        quoteStart: "Keberanian ksatria Bugis-Makassar siap menembus badai!",
        quoteCorrect: "Tepat sasaran! Jiwa ksatria maritim membara!",
        quoteWrong: "Badai hanyalah ujian ketangguhan hati, bangkit lagi!",
        quoteDanger: "Satu kesempatan tersisa! Berjuang hingga akhir!"
      },
      papua: {
        costumeName: "Panglima Adat Panah & Busur Tradisional",
        badge: "Panah Cendrawasih",
        avatarIcon: "🏹",
        quoteStart: "Bidikan ilmu ksatria rimba timur siap melesat!",
        quoteCorrect: "Tepat di tengah sasaran! Luar biasa tangguh!",
        quoteWrong: "Tarik kembali busurmu, bidik dengan lebih tenang!",
        quoteDanger: "Satu anak panah tersisa! Bidik sasaran dengan sempurna!"
      },
      bali: {
        costumeName: "Ksatria Keris Kamardikan & Saput Poleng Bali",
        badge: "Poleng Dewata",
        avatarIcon: "🔥",
        quoteStart: "Kekuatan dharma menyertai ksatria di tanah Dewata!",
        quoteCorrect: "Kebenaran dharma menang! Jawabanmu gemilang!",
        quoteWrong: "Jaga keseimbangan lahir dan batin, teliti kembali!",
        quoteDanger: "Ujian terberat ksatria! Tegakkan kehormatan budaya!"
      }
    }
  },

  // Helper method untuk mengambil profil kostum karakter pemain
  getCostume: function(characterId, zoneId) {
    const char = characterId || "boni";
    const zone = zoneId || "jawa";
    const charCostumes = this.playerCostumes[char] || this.playerCostumes.boni;
    return charCostumes[zone] || charCostumes.jawa;
  },

  // Helper method untuk mengambil profil penjaga budaya lokal
  getGuardian: function(zoneId) {
    const zone = zoneId || "jawa";
    return this.guardians[zone] || this.guardians.jawa;
  }
};
