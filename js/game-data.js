// game-data.js - Basis Data Budaya Nusantara 300+ Soal (50+ Soal per Wilayah)
// Alur Sekuensial Resmi: Jawa -> Sumatera -> Kalimantan -> Sulawesi -> Papua -> Bali
window.GAME_DATA = {
  zones: [
  {
    "id": "jawa",
    "name": "Jawa",
    "subtitle": "Tanah Warisan Candi Megah & Keraton Luhur",
    "unlockedDefault": true,
    "pin": {
      "x": 31,
      "y": 68
    },
    "landmarkImg": "assets/images/landmark_jawa.png",
    "npc": {
      "title": "Penjaga Budaya Jawa",
      "greeting": "Sugeng rawuh! Selamat datang di Tanah Jawa. Mari lestarikan filosofi luhur, candi megah, dan keagungan batik keraton warisan leluhur!",
      "pairImg": "assets/images/npc_pair_jawa.png"
    },
    "artifact": {
      "id": "keris_jawa",
      "name": "Keris Pusaka Jawa",
      "lore": "Keris berluk pamor meteorit keemasan, perlambang kearifan budi pekerti dan pusaka adiluhung Nusantara warisan UNESCO.",
      "icon": "🗡️"
    },
    "badge": {
      "id": "badge_jawa",
      "name": "Penjaga Candi & Keris Jawa",
      "desc": "Menguasai rahasia candi megah, motif wastra batik keraton, dan filosofi Jawa.",
      "icon": "🏆"
    },
    "rewardPoints": 300,
    "mcqQuizzes": [
      {
        "question": "Candi Buddha terbesar di dunia yang dibangun abad ke-8 oleh Wangsa Syailendra di Magelang, Jawa Tengah adalah?",
        "options": [
          "Candi Prambanan",
          "Candi Borobudur",
          "Candi Mendut",
          "Candi Penataran"
        ],
        "correctIndex": 1,
        "explanation": "Candi Borobudur memiliki 72 stupa terawang dan relief luhur perjalanan kehidupan manusia warisan UNESCO."
      },
      {
        "question": "Kompleks candi Hindu terindah di Indonesia yang menceritakan kisah epik Ramayana di perbatasan Yogyakarta dan Klaten adalah?",
        "options": [
          "Candi Prambanan",
          "Candi Gedong Songo",
          "Candi Dieng",
          "Candi Sukuh"
        ],
        "correctIndex": 0,
        "explanation": "Candi Prambanan didedikasikan untuk Trimurti (Brahma, Wisnu, Siwa) dengan relief Ramayana yang mempesona."
      },
      {
        "question": "Rumah adat khas Jawa dengan atap menjulang tinggi berbentuk piramida (Tajug) dan pilar penyangga Saka Guru adalah?",
        "options": [
          "Rumah Gadang",
          "Rumah Joglo",
          "Rumah Tongkonan",
          "Rumah Limas"
        ],
        "correctIndex": 1,
        "explanation": "Rumah Joglo mencerminkan status sosial dan keharmonisan hidup dengan alam melalui 4 tiang utama (Saka Guru)."
      },
      {
        "question": "Kerajaan maritim dan agraris terbesar di Jawa Timur yang dipimpin oleh Raja Hayam Wuruk dan Mahapatih Gajah Mada adalah?",
        "options": [
          "Kerajaan Tarumanegara",
          "Kerajaan Majapahit",
          "Kerajaan Pajajaran",
          "Kerajaan Mataram Kuno"
        ],
        "correctIndex": 1,
        "explanation": "Majapahit berhasil menyatukan wilayah Nusantara dengan semboyan legendaris 'Bhinneka Tunggal Ika'."
      },
      {
        "question": "Istana tempat tinggal raja di Yogyakarta yang menjadi pusat pelestarian kebudayaan Jawa adiluhung adalah?",
        "options": [
          "Pura Mangkunegaran",
          "Kraton Ngayogyakarta Hadiningrat",
          "Istana Bogor",
          "Kraton Kasepuhan"
        ],
        "correctIndex": 1,
        "explanation": "Kraton Yogyakarta didirikan oleh Sri Sultan Hamengkubuwono I pada tahun 1755 sebagai pusat kebudayaan Jawa."
      },
      {
        "question": "Candi bercorak Hindu di lereng Gunung Lawu yang memiliki arsitektur unik mirip piramida suku Maya di Meksiko adalah?",
        "options": [
          "Candi Sukuh",
          "Candi Plaosan",
          "Candi Sambisari",
          "Candi Kalasan"
        ],
        "correctIndex": 0,
        "explanation": "Candi Sukuh di Karanganyar memiliki struktur punden berundak unik yang berbeda dari candi Hindu pada umumnya."
      },
      {
        "question": "Pintu gerbang terbelah dua tanpa atap pada arsitektur kuno Jawa dan Bali sering disebut dengan nama?",
        "options": [
          "Paduraksa",
          "Candi Bentar",
          "Gapura Bajang Ratu",
          "Kori Agung"
        ],
        "correctIndex": 1,
        "explanation": "Candi Bentar melambangkan terbelahnya gunung suci Meru menjadi dua bagian yang seimbang."
      },
      {
        "question": "Sumpah terkenal yang diucapkan oleh Mahapatih Gajah Mada untuk menyatukan Nusantara di hadapan Ratu Tribhuwana Tunggadewi adalah?",
        "options": [
          "Sumpah Palapa",
          "Sumpah Pemuda",
          "Prasasti Ciaruteun",
          "Piagam Jakarta"
        ],
        "correctIndex": 0,
        "explanation": "Sumpah Palapa diucapkan Gajah Mada berjanji tidak akan menikmati kesenangan duniawi sebelum Nusantara bersatu."
      },
      {
        "question": "Kompleks pemakaman raja-raja Mataram Islam yang terletak di atas bukit di daerah Bantul, Yogyakarta adalah?",
        "options": [
          "Makam Giri",
          "Makam Imogiri",
          "Makam Trowulan",
          "Makam Sunan Kalijaga"
        ],
        "correctIndex": 1,
        "explanation": "Imogiri dibangun oleh Sultan Agung Hanyokrokusumo pada tahun 1632 sebagai makam peristirahatan raja-raja Jawa."
      },
      {
        "question": "Situs bekas ibu kota Kerajaan Majapahit dengan ribuan peninggalan batu bata merah kuno terletak di daerah?",
        "options": [
          "Trowulan, Mojokerto",
          "Kotagede, Yogyakarta",
          "Tuban",
          "Singosari, Malang"
        ],
        "correctIndex": 0,
        "explanation": "Trowulan diyakini kuat sebagai pusat kota metropolitan Kerajaan Majapahit abad ke-13 hingga 15 Masehi."
      },
      {
        "question": "Motif batik legendaris Yogyakarta yang bermotif lidah ombak miring dan hanya boleh dikenakan oleh raja serta bangsawan kraton adalah?",
        "options": [
          "Batik Kawung",
          "Batik Parang Rusak",
          "Batik Truntum",
          "Batik Sekar Jagad"
        ],
        "correctIndex": 1,
        "explanation": "Batik Parang Rusak diciptakan oleh Sultan Agung, melambangkan ombak samudera yang tak pernah padam dan semangat pantang menyerah."
      },
      {
        "question": "Motif batik khas pesisir Cirebon yang menampilkan gradasi awan melayang nan teduh dan dipengaruhi budaya Tionghoa adalah?",
        "options": [
          "Batik Sidomukti",
          "Batik Mega Mendung",
          "Batik Lasem",
          "Batik Madura"
        ],
        "correctIndex": 1,
        "explanation": "Mega Mendung melambangkan dunia atas yang membawa hujan pembawa berkah serta kesabaran dalam menahan amarah."
      },
      {
        "question": "Motif batik tertua berupa empat bulatan lonjong menyerupai irisan buah kolang-kaling yang melambangkan kemurnian hati adalah?",
        "options": [
          "Batik Kawung",
          "Batik Tambal",
          "Batik Nitik",
          "Batik Cuwiri"
        ],
        "correctIndex": 0,
        "explanation": "Batik Kawung bermakna empat arah mata angin yang bersumber pada satu titik pusat kebijaksanaan hati."
      },
      {
        "question": "Motif batik bertabur bintang-bintang kecil di malam hari yang diciptakan Kanjeng Ratu Kencana sebagai simbol cinta yang tulus bersemi kembali adalah?",
        "options": [
          "Batik Parang",
          "Batik Truntum",
          "Batik Sogan",
          "Batik Pekalongan"
        ],
        "correctIndex": 1,
        "explanation": "Truntum berasal dari kata 'taruntum' (tumbuh kembali), melambangkan cinta kasih orang tua yang menuntun mempelai."
      },
      {
        "question": "Warna khas batik klasik pedalaman Solo dan Yogyakarta yang berwarna cokelat kemerahan alami dari kulit pohon soga dinamakan?",
        "options": [
          "Batik Pesisiran",
          "Batik Sogan",
          "Batik Kelengan",
          "Batik Tiga Negeri"
        ],
        "correctIndex": 1,
        "explanation": "Batik Sogan bernuansa cokelat hangat melambangkan kerendahan hati manusia yang berasal dari tanah."
      },
      {
        "question": "Alat tradisional berbentuk corong tembaga kecil bertangkai bambu yang digunakan untuk melukiskan lilin malam pada kain batik adalah?",
        "options": [
          "Cap",
          "Canting",
          "Wajan",
          "Gawangan"
        ],
        "correctIndex": 1,
        "explanation": "Canting digunakan pembatik tulis untuk menorehkan cairan malam panas dengan presisi tinggi."
      },
      {
        "question": "Kota di pesisir utara Jawa Tengah yang terkenal dengan julukan 'Kota Batik' berkat ragam motif flora fauna berwarna-warni cerah adalah?",
        "options": [
          "Semarang",
          "Pekalongan",
          "Kudus",
          "Tegal"
        ],
        "correctIndex": 1,
        "explanation": "Pekalongan diakui oleh UNESCO sebagai bagian dari Jaringan Kota Kreatif Dunia kategori Kriya dan Seni Rakyat."
      },
      {
        "question": "Batik pesisir Lasem di Rembang sangat terkenal dengan perpaduan motif Jawa dan Tionghoa dengan warna merah menyala yang disebut?",
        "options": [
          "Merah Mengkudu",
          "Merah Getih Pitik (Darah Ayam)",
          "Merah Saga",
          "Merah Kesumba"
        ],
        "correctIndex": 1,
        "explanation": "Batik Lasem melambangkan akulturasi damai masyarakat Jawa dan Tionghoa sejak berabad-abad silam."
      },
      {
        "question": "Batik khas Madura terkenal dengan karakteristik visual yang sangat unik yaitu?",
        "options": [
          "Warna lembut pastel",
          "Warna menyala berani (merah, kuning, biru) dengan serat tegas",
          "Selalu berwarna hitam putih",
          "Hanya bermotif geometris"
        ],
        "correctIndex": 1,
        "explanation": "Batik Madura mencerminkan karakter masyarakat pesisir yang tegas, dinamis, berani, dan hangat."
      },
      {
        "question": "Proses merontokkan lilin malam dari kain batik setelah dicelup pewarna dengan cara direbus dalam air mendidih dinamakan?",
        "options": [
          "Nyanting",
          "Nglorod",
          "Medel",
          "Nembok"
        ],
        "correctIndex": 1,
        "explanation": "Nglorod adalah tahap akhir pembuatan batik di mana lilin malam luruh sehingga motif asli terlihat jelas."
      },
      {
        "question": "Kesenian teater rakyat legendaris Jawa Timur yang menampilkan penari berkepala Singa Barong bermahkota bulu merak seberat 50 kg adalah?",
        "options": [
          "Kuda Lumping",
          "Reog Ponorogo",
          "Ketoprak",
          "Tari Gambyong"
        ],
        "correctIndex": 1,
        "explanation": "Reog Ponorogo menceritakan kisah Prabu Klono Sewandono dan Singo Barong yang perkasa."
      },
      {
        "question": "Alat musik bambu bernada pentatonik dan diatonik asal Jawa Barat yang dimainkan dengan cara digoyangkan adalah?",
        "options": [
          "Calung",
          "Angklung",
          "Suling Sunda",
          "Kacapi"
        ],
        "correctIndex": 1,
        "explanation": "Angklung ditetapkan UNESCO sebagai Karya Agung Warisan Budaya Lisan dan Nonbendawi Manusia pada tahun 2010."
      },
      {
        "question": "Ansambel musik tradisional Jawa yang terdiri dari bonang, saron, kendang, gong, dan kenong dinamakan?",
        "options": [
          "Gamelan",
          "Tanjidor",
          "Kolintang",
          "Talempong"
        ],
        "correctIndex": 0,
        "explanation": "Gamelan Jawa memiliki laras slendro dan pelog yang menghasilkan harmoni nada damai dan menenangkan jiwa."
      },
      {
        "question": "Kesenian wayang yang menggunakan boneka kulit kerbau bertangkai tanduk dengan dalang sebagai narator di balik kelir kain putih adalah?",
        "options": [
          "Wayang Golek",
          "Wayang Kulit Purwa",
          "Wayang Orang",
          "Wayang Beber"
        ],
        "correctIndex": 1,
        "explanation": "Wayang Kulit diakui UNESCO sebagai warisan budaya adiluhung yang sarat petuah moral dan filosofi hidup."
      },
      {
        "question": "Kesenian wayang boneka kayu khas Sunda Jawa Barat yang kerap membawakan tokoh jenaka Si Cepot dan Dawala adalah?",
        "options": [
          "Wayang Kulit",
          "Wayang Golek",
          "Wayang Klitik",
          "Wayang Potehi"
        ],
        "correctIndex": 1,
        "explanation": "Wayang Golek menonjolkan gerak boneka kayu yang ekspresif dipandu kelincahan dalang dan kendang Sunda."
      },
      {
        "question": "Tarian klasik keraton Surakarta yang ditarikan oleh sembilan gadis anggun dalam suasana hening dan sakral adalah?",
        "options": [
          "Tari Gambyong",
          "Tari Bedhaya Ketawang",
          "Tari Jaipong",
          "Tari Serimpi"
        ],
        "correctIndex": 1,
        "explanation": "Bedhaya Ketawang adalah tarian sakral penobatan raja yang sarat simbol perjumpaan kosmis manusia dengan pencipta."
      },
      {
        "question": "Tarian kreasi modern asal Jawa Barat karya Gugum Gumbira yang menggabungkan unsur pencak silat, ketuk tilu, dan gerak lincah adalah?",
        "options": [
          "Tari Topeng",
          "Tari Jaipongan",
          "Tari Merak",
          "Tari Ronggeng"
        ],
        "correctIndex": 1,
        "explanation": "Tari Jaipongan terkenal dengan ritme kendang energik dan gerakan tubuh yang ceria dan penuh semangat."
      },
      {
        "question": "Tari selamat datang di Jawa Tengah yang ditarikan untuk menyambut tamu agung dengan gerakan luwes dan anggun adalah?",
        "options": [
          "Tari Gandrung",
          "Tari Gambyong",
          "Tari Piring",
          "Tari Pendet"
        ],
        "correctIndex": 1,
        "explanation": "Tari Gambyong berakar dari tarian rakyat penolak bala dan ungkapan syukur atas panen raya padi yang melimpah."
      },
      {
        "question": "Lagu daerah Jawa Tengah yang sangat populer diciptakan oleh Sunan Kalijaga untuk mengajak anak-anak bersyukur dan menjaga alam adalah?",
        "options": [
          "Cublak-Cublak Suweng",
          "Gundhul-Gundhul Pacul",
          "Lir-Ilir",
          "Padhang Wulan"
        ],
        "correctIndex": 2,
        "explanation": "Lir-Ilir berpesan agar manusia bangkit membenahi diri selagi masih ada kesempatan sebelum usia berakhir."
      },
      {
        "question": "Tari tradisional khas Banyuwangi yang menjadi lambang pesona ujung timur Pulau Jawa adalah?",
        "options": [
          "Tari Gandrung Banyuwangi",
          "Tari Remo",
          "Tari Jaran Kepang",
          "Tari Kethek Ogleng"
        ],
        "correctIndex": 0,
        "explanation": "Tari Gandrung merupakan bentuk penghormatan kepada Dewi Sri sebagai dewi kemakmuran dan kesuburan."
      },
      {
        "question": "Senjata pusaka berbilah tajam berkelok (luk) dengan pamor meteorit yang diakui UNESCO sebagai warisan budaya takbenda dunia adalah?",
        "options": [
          "Kujang",
          "Keris Jawa",
          "Badik",
          "Mandau"
        ],
        "correctIndex": 1,
        "explanation": "Keris bukan sekadar senjata, melainkan karya seni spiritual perlambang jati diri, doa, dan status ksatria Jawa."
      },
      {
        "question": "Senjata tradisional khas masyarakat Sunda Jawa Barat yang memiliki bentuk lengkung unik menyerupai pulau Jawa adalah?",
        "options": [
          "Golok Ciomas",
          "Kujang",
          "Pedang Jenawi",
          "Keris"
        ],
        "correctIndex": 1,
        "explanation": "Kujang adalah simbol keberanian, kedaulatan, dan spiritualitas masyarakat Tatar Pasundan peninggalan Prabu Siliwangi."
      },
      {
        "question": "Filosofi hidup masyarakat Jawa 'Memayu Hayuning Bawana' memiliki arti luhur yaitu?",
        "options": [
          "Mencari kekayaan sebanyak-banyaknya",
          "Memperindah dan menjaga keselamatan alam semesta",
          "Menaklukkan suku lain",
          "Hidup bersenang-senang"
        ],
        "correctIndex": 1,
        "explanation": "Memayu Hayuning Bawana mengajarkan kewajiban manusia menjaga keharmonisan bumi, sesama, dan sang Pencipta."
      },
      {
        "question": "Ungkapan bahasa Jawa 'Aja Dumeh' mengandung nasihat moral agar manusia tidak bersikap?",
        "options": [
          "Rendah hati",
          "Sombong atau merasa paling berkuasa",
          "Hemat",
          "Rajin bekerja"
        ],
        "correctIndex": 1,
        "explanation": "Aja Dumeh mengingatkan bahwa kekuasaan, kepandaian, dan kekayaan hanyalah titipan sementara."
      },
      {
        "question": "Tutup kepala tradisional pria Jawa yang terbuat dari lipatan kain batik dengan bulatan mondolan di bagian belakang disebut?",
        "options": [
          "Udeng",
          "Blangkon",
          "Tanjak",
          "Kupiah"
        ],
        "correctIndex": 1,
        "explanation": "Mondolan pada blangkon bermakna menjaga rahasia orang lain dan menahan hawa nafsu pribadi."
      },
      {
        "question": "Pakaian adat resmi pria Jawa berupa jas tutup berkerah tegak tanpa kancing terbuka yang dipadukan kain jarik dinamakan?",
        "options": [
          "Baju Surjan",
          "Beskap",
          "Teluk Belanga",
          "Baju Bodo"
        ],
        "correctIndex": 1,
        "explanation": "Beskap dikenakan pada upacara pernikahan dan adat resmi keraton sebagai simbol wibawa dan kesopanan."
      },
      {
        "question": "Baju tradisional pria khas Jawa dengan motif lurik garis-garis sederhana yang diciptakan oleh Sunan Kalijaga adalah?",
        "options": [
          "Baju Kurung",
          "Baju Surjan Lurik",
          "Baju Safari",
          "Baju Kampret"
        ],
        "correctIndex": 1,
        "explanation": "Surjan berasal dari kata 'siro janan' (jadilah pelita), mengajarkan kesederhanaan dan ketakwaan."
      },
      {
        "question": "Senjata tajam khas Madura yang memiliki bilah melengkung menyerupai bulan sabit dan melambangkan harga diri adalah?",
        "options": [
          "Celurit (Arit)",
          "Keris",
          "Belati",
          "Pisau Raut"
        ],
        "correctIndex": 0,
        "explanation": "Celurit merupakan senjata legendaris Madura yang berakar dari alat pertanian dan simbol pembela kehormatan."
      },
      {
        "question": "Upacara adat Jawa untuk merayakan dan mendoakan bayi yang pertama kali menginjakkan kaki ke tanah pada usia 7 bulan dinamakan?",
        "options": [
          "Mitoni",
          "Tedak Siten",
          "Brokohan",
          "Ruwatan"
        ],
        "correctIndex": 1,
        "explanation": "Tedak Siten melambangkan bimbingan orang tua agar sang anak menapaki kehidupan dengan mandiri dan berbudi pekerti."
      },
      {
        "question": "Tradisi upacara selamatan pada usia kehamilan tujuh bulan di masyarakat Jawa untuk memohon keselamatan bayi disebut?",
        "options": [
          "Tingkeban (Mitoni)",
          "Sekaten",
          "Grebeg Maulud",
          "Sedekah Laut"
        ],
        "correctIndex": 0,
        "explanation": "Tingkeban diisi dengan siraman tujuh mata air kembang setaman dan pemotongan tumpeng berkah."
      },
      {
        "question": "Makanan khas Yogyakarta berbahan nangka muda yang dimasak berjam-jam dengan santan dan gula aren hingga kecokelatan adalah?",
        "options": [
          "Rawon",
          "Gudeg",
          "Tongseng",
          "Brongkos"
        ],
        "correctIndex": 1,
        "explanation": "Gudeg disajikan bersama areh santan kental, krecek pedas, telur bacem, dan ayam kampung gurih."
      },
      {
        "question": "Sup daging sapi khas Jawa Timur yang memiliki kuah hitam pekat alami dari buah kluwek adalah?",
        "options": [
          "Soto Kudus",
          "Rawon",
          "Gulai Daging",
          "Empal Gentong"
        ],
        "correctIndex": 1,
        "explanation": "Rawon dinobatkan sebagai salah satu sup terenak di dunia oleh TasteAtlas berkat kelezatan bumbu kluweknya."
      },
      {
        "question": "Satwa langka bercula satu yang dilindungi dan hanya tersisa di Taman Nasional Ujung Kulon, Banten adalah?",
        "options": [
          "Gajah Sumatera",
          "Badak Jawa (Rhinoceros sondaicus)",
          "Banteng Jawa",
          "Macan Tutul"
        ],
        "correctIndex": 1,
        "explanation": "Badak Jawa adalah mamalia terlangka di dunia yang dilindungi secara ketat di habitat aslinya di Ujung Kulon."
      },
      {
        "question": "Burung elang endemik Pulau Jawa yang memiliki jambul khas dan menjadi inspirasi lambang negara Garuda Pancasila adalah?",
        "options": [
          "Elang Bondol",
          "Elang Jawa (Nisaetus bartelsi)",
          "Burung Maleo",
          "Burung Jalak Bali"
        ],
        "correctIndex": 1,
        "explanation": "Elang Jawa memiliki mahkota jambul runcing dan bulu dada keemasan mirip gambaran Garuda."
      },
      {
        "question": "Kue tradisional khas Betawi berbahan tepung ketan, gula merah, dan santan yang diaduk tanpa henti di wajan besar adalah?",
        "options": [
          "Bika Ambon",
          "Dodol Betawi",
          "Kue Cucur",
          "Kerak Telor"
        ],
        "correctIndex": 1,
        "explanation": "Pembuatan Dodol Betawi membutuhkan gotong royong dan kesabaran tinggi hingga matang sempurna."
      },
      {
        "question": "Kuliner khas Cirebon berupa olahan daging sapi gurih yang dimasak dalam periuk tanah liat dengan kuah santan bumbu rempah adalah?",
        "options": [
          "Empal Gentong",
          "Tahu Gejrot",
          "Nasi Lengko",
          "Nasi Jamblang"
        ],
        "correctIndex": 0,
        "explanation": "Empal Gentong dimasak menggunakan kayu bakar pohon mangga yang memberi aroma khas menggugah selera."
      },
      {
        "question": "Minuman jamu tradisional khas Jawa berbahan kunyit dan asam jawa yang bermanfaat menyegarkan tubuh adalah?",
        "options": [
          "Beras Kencur",
          "Kunyit Asam",
          "Wedang Jahe",
          "Bajigur"
        ],
        "correctIndex": 1,
        "explanation": "Kunyit Asam kaya antioksidan dan menjadi ramuan jamu warisan nenek moyang sejak zaman Majapahit."
      },
      {
        "question": "Perayaan tahunan Pasar Malam Sekaten di Yogyakarta dan Solo diadakan untuk memperingati hari kelahiran Nabi Muhammad SAW dengan membunyikan?",
        "options": [
          "Angklung",
          "Gamelan Sekati (Kanjeng Kyai Gunturmadu)",
          "Bedug Raksasa",
          "Gong Perdamaian"
        ],
        "correctIndex": 1,
        "explanation": "Sekaten berasal dari kata 'Syahadatain', sarana penyebaran Islam oleh para Wali Songo melalui alunan gamelan."
      },
      {
        "question": "Bunga endemik langka yang tumbuh di Kebun Raya Purwodadi dan Gunung Slamet Jawa Tengah dengan aroma khas malam hari adalah?",
        "options": [
          "Melati Putih",
          "Bunga Wijayakusuma",
          "Kantong Semar",
          "Bunga Rafflesia"
        ],
        "correctIndex": 1,
        "explanation": "Wijayakusuma dianggap bunga mistis lambang kejayaan raja-raja keraton Jawa yang mekar hanya di tengah malam."
      },
      {
        "question": "Tradisi arak-arakan tumpeng hasil bumi raksasa yang dibagikan dan diperebutkan masyarakat saat upacara Grebeg Kraton disebut?",
        "options": [
          "Gunungan Hasil Bumi",
          "Sesaji Laut",
          "Kenduri",
          "Labuhan"
        ],
        "correctIndex": 0,
        "explanation": "Gunungan Grebeg melambangkan sedekah raja kepada rakyatnya dan doa keselamatan bagi seluruh negeri."
      }
    ],
    "imageQuizzes": [
      {
        "question": "Perhatikan motif batik legendaris Yogyakarta & Solo yang bermakna ombak karang laut pantang menyerah ini:",
        "imageSvg": "batik_parang",
        "options": [
          "Batik Parang",
          "Batik Kawung",
          "Batik Truntum",
          "Batik Sekar Jagad"
        ],
        "correctIndex": 0,
        "explanation": "Tepat! Motif Parang berbentuk huruf 'S' miring menyerupai ombak samudra yang tak pernah berhenti bergerak.",
        "imageUrl": "assets/images/quiz/quiz_batik_parang.jpg"
      },
      {
        "question": "Motif batik khas pesisir Cirebon dengan gradasi warna awan melayang nan teduh ini bernama?",
        "imageSvg": "batik_megamendung",
        "options": [
          "Batik Mega Mendung",
          "Batik Tiga Negeri",
          "Batik Parang",
          "Batik Lasem"
        ],
        "correctIndex": 0,
        "explanation": "Benar! Mega Mendung melambangkan dunia atas yang membawa kesuburan, ketenangan, dan kesejukan jiwa.",
        "imageUrl": "assets/images/quiz/quiz_batik_megamendung.jpg"
      },
      {
        "question": "Rumah adat khas Jawa dengan atap menjulang berbentuk piramida (Tajug) dan pilar penyangga Saka Guru adalah?",
        "imageSvg": "rumah_joglo",
        "options": [
          "Rumah Joglo",
          "Rumah Limas",
          "Rumah Gadang",
          "Rumah Tongkonan"
        ],
        "correctIndex": 0,
        "explanation": "Hebat! Rumah Joglo memiliki filosofi keterbukaan melalui pendopo depan dan ketenangan sakral di bagian dalem.",
        "imageUrl": "assets/images/quiz/quiz_rumah_joglo.jpg"
      },
      {
        "question": "Kompleks candi Hindu terindah di Asia Tenggara yang menjulang tinggi megah di perbatasan Yogya & Klaten ini adalah?",
        "imageSvg": "candi_prambanan",
        "options": [
          "Candi Prambanan",
          "Candi Borobudur",
          "Candi Sukuh",
          "Candi Cetho"
        ],
        "correctIndex": 0,
        "explanation": "Tepat sekali! Candi Prambanan dipersembahkan untuk Trimurti (Siwa, Wisnu, Brahma) dengan legenda Rara Jonggrang.",
        "imageUrl": "assets/images/quiz/quiz_candi_prambanan.jpg"
      },
      {
        "question": "Simbol alam semesta, pohon hayat, dan pembuka/penutup babak dalam pertunjukan Wayang Kulit Jawa adalah?",
        "imageSvg": "gunungan_wayang",
        "options": [
          "Gunungan (Kayon)",
          "Kelir Wayang",
          "Kotak Wayang",
          "Blencong"
        ],
        "correctIndex": 0,
        "explanation": "Sempurna! Gunungan atau Kayon melambangkan mikrokosmos dan makrokosmos kehidupan manusia dengan alam semesta.",
        "imageUrl": "assets/images/quiz/quiz_gunungan_wayang.jpg"
      }
    ],
    "matchingSteps": [
      {
        "level": "easy",
        "levelName": "🟢 Tahap Easy (3 Pasangan)",
        "instruction": "Pasangkan Kuliner Legendaris Jawa dengan Kota Asalnya!",
        "pairs": [
          {
            "item": "Gudeg Nangka Manis",
            "match": "Yogyakarta"
          },
          {
            "item": "Rawon Daging Kluwek",
            "match": "Surabaya"
          },
          {
            "item": "Lumpia Rebung Renyah",
            "match": "Semarang"
          }
        ],
        "explanation": "Mantap! Kamu hafal betul kuliner ikonik kota-kota besar di Pulau Jawa!"
      },
      {
        "level": "normal",
        "levelName": "🟡 Tahap Normal (4 Pasangan)",
        "instruction": "Pasangkan Senjata Tradisional & Benda Adat dengan Daerahnya!",
        "pairs": [
          {
            "item": "Senjata Kujang",
            "match": "Jawa Barat (Sunda)"
          },
          {
            "item": "Keris Berlekuk Pamor",
            "match": "Jawa Tengah & DIY"
          },
          {
            "item": "Senjata Celurit",
            "match": "Madura / Jatim"
          },
          {
            "item": "Kendang Jaipong",
            "match": "Jawa Barat"
          }
        ],
        "explanation": "Keren! Pengetahuanmu tentang pusaka dan instrumen tradisional Jawa sangat mantap!"
      },
      {
        "level": "hard",
        "levelName": "🔴 Tahap Hard (5 Pasangan)",
        "instruction": "Tantangan Ksatria: Pasangkan Tarian Tradisional dengan Daerah Asalnya!",
        "pairs": [
          {
            "item": "Tari Jaipong Dinamis",
            "match": "Karawang / Jabar"
          },
          {
            "item": "Tari Bedhaya Ketawang Sakral",
            "match": "Keraton Surakarta"
          },
          {
            "item": "Tari Topeng Klana",
            "match": "Cirebon"
          },
          {
            "item": "Tari Remo Gagah",
            "match": "Jombang / Jatim"
          },
          {
            "item": "Tari Gandrung Memikat",
            "match": "Banyuwangi"
          }
        ],
        "explanation": "Luar biasa! Kamu berhasil menaklukkan tantangan tersulit kebudayaan tari Pulau Jawa!"
      }
    ]
  },
  {
    "id": "sumatera",
    "name": "Sumatera",
    "subtitle": "Bumi Sriwijaya, Jam Gadang, & Ranah Minang",
    "unlockedDefault": false,
    "pin": {
      "x": 15,
      "y": 44
    },
    "landmarkImg": "assets/images/landmark_sumatera.png",
    "npc": {
      "title": "Penjaga Budaya Sumatera",
      "greeting": "Salamaik tibo! Selamat datang di Pulau Emas Sumatera. Dari tanah Rencong Aceh, Danau Toba, hingga kemegahan Songket Minang & Sriwijaya!",
      "pairImg": "assets/images/npc_pair_sumatera.png"
    },
    "artifact": {
      "id": "songket_sumatera",
      "name": "Kain Songket Emas Minang",
      "lore": "Kain tenunan tangan megah bertabur benang emas murni peninggalan kemegahan Sriwijaya dan Minangkabau.",
      "icon": "🧣"
    },
    "badge": {
      "id": "badge_sumatera",
      "name": "Pelindung Ranah Andalas",
      "desc": "Memahami keindahan arsitektur Rumah Gadang, keperkasaan rencong, dan tarian tradisional Sumatera.",
      "icon": "🏅"
    },
    "rewardPoints": 300,
    "mcqQuizzes": [
      {
        "question": "Rumah adat khas Minangkabau dengan atap melengkung runcing menyerupai tanduk kerbau (Gonjong) adalah?",
        "options": [
          "Rumah Bolon",
          "Rumah Gadang",
          "Rumah Limas",
          "Rumah Panggung"
        ],
        "correctIndex": 1,
        "explanation": "Rumah Gadang melambangkan kemenangan adu kerbau leluhur Minang dan keharmonisan hidup bersaudara."
      },
      {
        "question": "Kain tenunan mewah khas Palembang dan Minangkabau yang ditenun dengan benang emas berkilau dijuluki sebagai?",
        "options": [
          "Ratu Kain Tenun (Songket)",
          "Kain Ulos",
          "Kain Sasirangan",
          "Kain Tapis"
        ],
        "correctIndex": 0,
        "explanation": "Kain Songket ditenun dengan teknik rumit menggunakan benang emas murni peninggalan Kerajaan Sriwijaya."
      },
      {
        "question": "Senjata pusaka berbilah tajam khas Serambi Mekkah Aceh dengan bentuk pangkal melengkung menyerupai huruf arab Ba/Bismillah adalah?",
        "options": [
          "Keris",
          "Rencong",
          "Badik",
          "Kujang"
        ],
        "correctIndex": 1,
        "explanation": "Rencong adalah lambang keberanian, kehormatan, dan keteguhan jihad masyarakat Aceh."
      },
      {
        "question": "Kain tenun tradisional masyarakat Batak yang menjadi simbol berkah, kehangatan, dan restu kehidupan dinamakan?",
        "options": [
          "Kain Ulos",
          "Kain Endek",
          "Kain Poleng",
          "Kain Gringsing"
        ],
        "correctIndex": 0,
        "explanation": "Ulos diberikan dalam upacara adat 'Mangulosi' sebagai wujud doa restu, cinta kasih, dan kehangatan."
      },
      {
        "question": "Menara jam raksasa peninggalan sejarah Belanda yang menjadi ikon utama kota Bukittinggi, Sumatera Barat adalah?",
        "options": [
          "Monas",
          "Jam Gadang",
          "Tugu Khatulistiwa",
          "Tugu Monpera"
        ],
        "correctIndex": 1,
        "explanation": "Jam Gadang memiliki mesin mekanik langka yang hanya ada dua di dunia (satu lagi di Big Ben London)."
      },
      {
        "question": "Tarian seribu tangan asal Gayo Aceh yang menuntut kekompakan tepukan dada dan tangan dalam kecepatan tinggi adalah?",
        "options": [
          "Tari Piring",
          "Tari Saman",
          "Tari Tor-tor",
          "Tari Seudati"
        ],
        "correctIndex": 1,
        "explanation": "Tari Saman diakui UNESCO sebagai Warisan Budaya Takbenda Dunia berkat keharmonisan gerak dan pesan dakwahnya."
      },
      {
        "question": "Tarian tradisional Minangkabau di mana penari mengayunkan piring porselen di kedua telapak tangan lalu menginjak pecahan kaca adalah?",
        "options": [
          "Tari Payung",
          "Tari Piring",
          "Tari Pasambahan",
          "Tari Lilin"
        ],
        "correctIndex": 1,
        "explanation": "Tari Piring melambangkan rasa syukur para petani atas panen melimpah dan kekebalan hati dari godaan."
      },
      {
        "question": "Tarian persembahan masyarakat Batak yang diiringi tabuhan ansambel Gondang Sabangunan dengan gerak tangan menyembah adalah?",
        "options": [
          "Tari Tor-tor",
          "Tari Sigale-gale",
          "Tari Balumpa",
          "Tari Serampang Dua Belas"
        ],
        "correctIndex": 0,
        "explanation": "Tari Tor-tor ditarikan dengan penuh hormat untuk menyapa roh leluhur dan menghormati para tetua adat."
      },
      {
        "question": "Tradisi adu ketangkasan fisik pemuda Nias melompati tumpukan batu setinggi lebih dari 2 meter disebut?",
        "options": [
          "Pacu Jawi",
          "Hombo Batu (Lompat Batu)",
          "Tabuik",
          "Karapan Sapi"
        ],
        "correctIndex": 1,
        "explanation": "Hombo Batu melambangkan kedewasaan, ketangkasan ksatria, dan keberanian membela kampung halaman."
      },
      {
        "question": "Tradisi balapan sepasang sapi di sawah berlumpur basah yang diadakan masyarakat Tanah Datar, Sumatera Barat adalah?",
        "options": [
          "Pacu Jawi",
          "Pacu Jalur",
          "Karapan Sapi",
          "Makepung"
        ],
        "correctIndex": 0,
        "explanation": "Pacu Jawi digelar setelah panen padi untuk menjalin silaturahmi dan menilai ketangkasan sapi ternak."
      },
      {
        "question": "Perlombaan dayung perahu kayu panjang berhias kepala naga yang menampung hingga 60 pendayung di Sungai Kuantan Riau adalah?",
        "options": [
          "Pacu Jawi",
          "Pacu Jalur",
          "Perahu Bidar",
          "Lomba Pinisi"
        ],
        "correctIndex": 1,
        "explanation": "Pacu Jalur adalah pesta rakyat akbar di Teluk Kuantan yang merayakan kekompakan dan semangat bahari."
      },
      {
        "question": "Kerajaan maritim Buddha terbesar di Nusantara abad ke-7 hingga ke-11 yang berpusat di Palembang dan Jambi adalah?",
        "options": [
          "Kerajaan Sriwijaya",
          "Kerajaan Majapahit",
          "Kerajaan Samudera Pasai",
          "Kerajaan Melayu"
        ],
        "correctIndex": 0,
        "explanation": "Sriwijaya menguasai jalur perdagangan Selat Malaka dan menjadi pusat studi agama Buddha internasional."
      },
      {
        "question": "Kerajaan Islam pertama di Indonesia yang terletak di Lhokseumawe, Aceh pada abad ke-13 adalah?",
        "options": [
          "Kesultanan Malaka",
          "Kesultanan Samudera Pasai",
          "Kesultanan Aceh Darussalam",
          "Kesultanan Deli"
        ],
        "correctIndex": 1,
        "explanation": "Samudera Pasai didirikan oleh Marah Silu (Sultan Malik As-Saleh) dan menerbitkan mata uang emas Deureuham."
      },
      {
        "question": "Kompleks percandian bata merah peninggalan Kerajaan Sriwijaya dan Melayu Kuno terluas di Asia Tenggara terletak di?",
        "options": [
          "Candi Borobudur",
          "Candi Muaro Jambi",
          "Candi Bahal",
          "Candi Muara Takus"
        ],
        "correctIndex": 1,
        "explanation": "Kawasan Percandian Muaro Jambi membentang sepanjang 12 kilometer di tepian Sungai Batanghari."
      },
      {
        "question": "Istana megah berwarna kuning cerah di Kota Medan perpaduan arsitektur Melayu, Islam, Spanyol, dan Italia adalah?",
        "options": [
          "Istana Siak",
          "Istana Maimun",
          "Istana Pagaruyung",
          "Istana Asahan"
        ],
        "correctIndex": 1,
        "explanation": "Istana Maimun dibangun oleh Sultan Ma'mun Al Rasyid Perkasa Alamsyah pada tahun 1888."
      },
      {
        "question": "Danau vulkanik terbesar di dunia yang terbentuk akibat letusan supervolcano 74.000 tahun lalu di Sumatera Utara adalah?",
        "options": [
          "Danau Maninjau",
          "Danau Toba",
          "Danau Singkarak",
          "Danau Ranau"
        ],
        "correctIndex": 1,
        "explanation": "Danau Toba memiliki Pulau Samosir di tengahnya dan ditetapkan sebagai UNESCO Global Geopark."
      },
      {
        "question": "Masjid megah berkubah hitam di Banda Aceh yang tetap kokoh berdiri saat diterjang tsunami dahsyat tahun 2004 adalah?",
        "options": [
          "Masjid Raya Medan",
          "Masjid Raya Baiturrahman",
          "Masjid Agung Palembang",
          "Masjid Tuo Kayu Jao"
        ],
        "correctIndex": 1,
        "explanation": "Masjid Baiturrahman dibangun sejak era Sultan Iskandar Muda dan menjadi simbol keteguhan iman rakyat Aceh."
      },
      {
        "question": "Olahan daging sapi khas Minangkabau yang dimasak perlahan dengan santan dan aneka rempah hingga kering kehitaman adalah?",
        "options": [
          "Gulai Tunjang",
          "Rendang (Randang)",
          "Dendeng Balado",
          "Soto Padang"
        ],
        "correctIndex": 1,
        "explanation": "Rendang dinobatkan sebagai salah satu hidangan terlezat di dunia berkat ketahanan awet dan cita rasa rempahnya."
      },
      {
        "question": "Makanan khas Palembang berbahan olahan daging ikan tenggiri dan sagu yang disajikan bersama kuah cuko pedas asam manis adalah?",
        "options": [
          "Tekwan",
          "Pempek",
          "Model",
          "Laksan"
        ],
        "correctIndex": 1,
        "explanation": "Pempek memiliki berbagai varian seperti Kapal Selam (berisi telur utuh), Lenjer, Kulit, dan Keriting."
      },
      {
        "question": "Tumbuhan parasit langka dengan bunga raksasa berdiameter mencapai 1 meter yang ditemukan di hutan Bengkulu adalah?",
        "options": [
          "Bunga Bangkai (Amorphophallus)",
          "Rafflesia arnoldii",
          "Kantong Semar",
          "Anggrek Hitam"
        ],
        "correctIndex": 1,
        "explanation": "Rafflesia arnoldii adalah bunga terbesar di dunia yang ditemukan oleh Thomas Stamford Raffles dan Dr. Joseph Arnold."
      },
      {
        "question": "Subspesies harimau terakhir di Indonesia yang dilindungi ketat di hutan pegunungan Bukit Barisan adalah?",
        "options": [
          "Harimau Jawa",
          "Harimau Sumatera (Panthera tigris sumatrae)",
          "Harimau Bali",
          "Macan Dahan"
        ],
        "correctIndex": 1,
        "explanation": "Harimau Sumatera memiliki bulu loreng lebih gelap dan rapat untuk kamuflase di lebatnya hutan hujan tropis."
      },
      {
        "question": "Pusat konservasi dan sekolah pelatihan gajah jinak terbesar di Indonesia terletak di Taman Nasional?",
        "options": [
          "Kerinci Seblat",
          "Way Kambas (Lampung)",
          "Gunung Leuser",
          "Bukit Tigapuluh"
        ],
        "correctIndex": 1,
        "explanation": "Taman Nasional Way Kambas menjadi suaka perlindungan gajah Sumatera dan badak Sumatera."
      },
      {
        "question": "Buku sastra epik terpanjang di dunia melebihi Mahabharata asal suku Bugis dan Melayu yang menceritakan asal-usul manusia adalah?",
        "options": [
          "Negarakertagama",
          "I La Galigo",
          "Hikayat Hang Tuah",
          "Gurindam Dua Belas"
        ],
        "correctIndex": 1,
        "explanation": "I La Galigo diakui UNESCO Memory of the World sebagai mahakarya sastra lisan warisan Nusantara."
      },
      {
        "question": "Karya sastra puisi Melayu berisi nasihat agama dan budi pekerti karya Raja Ali Haji dari Pulau Penyengat Kepulauan Riau adalah?",
        "options": [
          "Syair Perahu",
          "Gurindam Dua Belas",
          "Babad Tanah Jawi",
          "Serat Centhini"
        ],
        "correctIndex": 1,
        "explanation": "Gurindam Dua Belas memuat petuah bijak tentang tata cara pergaulan, pemerintahan, dan ketakwaan."
      },
      {
        "question": "Senjata genggam tradisional Minangkabau berbentuk melengkung kecil mirip cakar harimau yang mematikan dalam pencak silat adalah?",
        "options": [
          "Keris",
          "Kurambiak (Karambit)",
          "Rencong",
          "Badik"
        ],
        "correctIndex": 1,
        "explanation": "Karambit dirancang terinspirasi dari cakar harimau Sumatera dan kini dipelajari militer di berbagai belahan dunia."
      },
      {
        "question": "Upacara peringatan Asyura di Pariaman Sumatera Barat yang ditandai dengan melarung menara peti berornamen indah ke laut adalah?",
        "options": [
          "Sedekah Laut",
          "Upacara Tabuik",
          "Pacu Jawi",
          "Grebeg Maulud"
        ],
        "correctIndex": 1,
        "explanation": "Tabuik menampilkan patung Burak berkepala manusia bersayap yang diarak menuju Pantai Gandoriah."
      },
      {
        "question": "Sistem kekerabatan masyarakat Minangkabau yang menarik garis keturunan dari pihak ibu disebut?",
        "options": [
          "Patrilineal",
          "Matrilineal",
          "Bilateral",
          "Parental"
        ],
        "correctIndex": 1,
        "explanation": "Minangkabau merupakan masyarakat penganut sistem kekerabatan matrilineal terbesar di dunia."
      },
      {
        "question": "Gelar kehormatan adat yang diberikan kepada perempuan tertua penjaga harta pusaka dalam kaum Minangkabau adalah?",
        "options": [
          "Datuk",
          "Bundo Kanduang",
          "Penghulu",
          "Mamak"
        ],
        "correctIndex": 1,
        "explanation": "Bundo Kanduang adalah perlambang kehormatan, kebijaksanaan, dan pemegang kunci lumbung pangan keluarga."
      },
      {
        "question": "Alat musik tiup tradisional Minangkabau berbahan bambu talang tipis dengan 4 lubang nada yang ditiup miring adalah?",
        "options": [
          "Seruling",
          "Saluang",
          "Talempong",
          "Pupuik"
        ],
        "correctIndex": 1,
        "explanation": "Peniup Saluang mahir memainkan teknik pernapasan memutar (circular breathing) tanpa henti."
      },
      {
        "question": "Alat musik perkusi kuningan atau perunggu khas Minangkabau berbentuk gong kecil berpencon di tengah adalah?",
        "options": [
          "Bonang",
          "Talempong",
          "Kolintang",
          "Kenong"
        ],
        "correctIndex": 1,
        "explanation": "Talempong dimainkan berpacu ritmis dalam upacara perkawinan dan penyambutan tamu agung."
      },
      {
        "question": "Tutup kepala adat wanita Minangkabau berbentuk runcing menyerupai tanduk kerbau pada busana Baju Kurung Basiba disebut?",
        "options": [
          "Suntiang",
          "Tikuluak Tanduak",
          "Tanjak",
          "Mahkota"
        ],
        "correctIndex": 1,
        "explanation": "Tikuluak melambangkan kepemimpinan kaum ibu yang melindungi anak kemenakan dari mara bahaya."
      },
      {
        "question": "Hiasan mahkota emas bertingkat mewah yang dikenakan pengantin wanita Minangkabau dengan juntaian keemasan dinamakan?",
        "options": [
          "Suntiang",
          "Tikuluak",
          "Blangkon",
          "Tajuk"
        ],
        "correctIndex": 0,
        "explanation": "Suntiang pengantin Minang memiliki 7 hingga 11 tingkat yang melambangkan beratnya tanggung jawab berumah tangga."
      },
      {
        "question": "Kue bika berserat kenyal kuning berongga harum pandan dan serai yang menjadi oleh-oleh khas Kota Medan adalah?",
        "options": [
          "Bika Padang",
          "Bika Ambon",
          "Kue lapis",
          "Bolu Gulung"
        ],
        "correctIndex": 1,
        "explanation": "Dinamakan Bika Ambon karena pertama kali diproduksi dan populer di Jalan Ambon, Sei Kera, Medan."
      },
      {
        "question": "Kopi dataran tinggi di Aceh yang sangat terkenal di pasar internasional dengan aroma rempah earthy yang kaya adalah?",
        "options": [
          "Kopi Toraja",
          "Kopi Gayo",
          "Kopi Kintamani",
          "Kopi Bajawa"
        ],
        "correctIndex": 1,
        "explanation": "Kopi Arabika Gayo ditanam di atas ketinggian 1.200 meter di sekitar Danau Laut Tawar Aceh Tengah."
      },
      {
        "question": "Seni bela diri asli Indonesia yang berkembang pesat di Minangkabau dengan berbagai aliran seperti Silek Harimau dan Silek Tuo adalah?",
        "options": [
          "Karate",
          "Pencak Silat (Silek)",
          "Taekwondo",
          "Judo"
        ],
        "correctIndex": 1,
        "explanation": "Silek Minang mengajarkan 'Lahir mencari kawan, batin mencari Tuhan' sebagai pedoman ksatria."
      },
      {
        "question": "Tradisi merantau bagi pemuda Minangkabau untuk menuntut ilmu, berdagang, dan mencari pengalaman hidup disebut?",
        "options": [
          "Marharoan Bolon",
          "Merantau",
          "Mangokal Holi",
          "Upacara Tiwah"
        ],
        "correctIndex": 1,
        "explanation": "Merantau membentuk karakter mandiri, tangguh, dan kepedulian membangun kampung halaman saat kembali."
      },
      {
        "question": "Boneka kayu raksasa suku Batak yang dapat menari sendiri dalam upacara kematian mengiringi kesedihan keluarga adalah?",
        "options": [
          "Si Gale-gale",
          "Si Cepot",
          "Ondel-ondel",
          "Tau-tau"
        ],
        "correctIndex": 0,
        "explanation": "Patung Si Gale-gale digerakkan menggunakan sistem tali tersembunyi dengan ritme tabuhan Gondang."
      },
      {
        "question": "Pahlawan wanita pemberani asal Aceh yang memimpin perlawanan gerilya melawan penjajah Belanda di pedalaman Meulaboh adalah?",
        "options": [
          "R.A. Kartini",
          "Cut Nyak Dien",
          "Dewi Sartika",
          "Martha Christina Tiahahu"
        ],
        "correctIndex": 1,
        "explanation": "Cut Nyak Dien terus memimpin pasukan di hutan rimba meski telah lanjut usia dan rabun mata."
      },
      {
        "question": "Pahlawan nasional pemimpin Perang Padri (1821-1837) di Sumatera Barat yang wajahnya tertera di uang kertas Rp5.000 adalah?",
        "options": [
          "Pangeran Diponegoro",
          "Tuanku Imam Bonjol",
          "Teuku Umar",
          "Sultan Hasanuddin"
        ],
        "correctIndex": 1,
        "explanation": "Tuanku Imam Bonjol memperjuangkan persatuan kaum adat dan kaum ulama Minang melawan penjajah."
      },
      {
        "question": "Raja dan pahlawan ksatria dari Tanah Batak yang berjuang hingga titik darah penghabisan mempertahankan Danau Toba adalah?",
        "options": [
          "Sultan Iskandar Muda",
          "Sisingamangaraja XII",
          "Sultan Mahmud Badaruddin II",
          "Raja Ali Haji"
        ],
        "correctIndex": 1,
        "explanation": "Sisingamangaraja XII gugur pada tahun 1907 sebagai simbol perlawanan rakyat Batak tanpa pernah menyerah."
      },
      {
        "question": "Kue tradisional khas Palembang yang berwarna hijau daun suji berlapis-lapis lembut dengan rasa gurih manis adalah?",
        "options": [
          "Kue Maksuba",
          "Kue Delapan Jam",
          "Kue Srikaya",
          "Kue Lapis Kojo"
        ],
        "correctIndex": 3,
        "explanation": "Kojo berarti kemboja karena bentuk cetakan loyang tradisionalnya menyerupai bunga kamboja."
      },
      {
        "question": "Mie kuah atau goreng kaya bumbu kari rempah pekat yang disajikan dengan irisan daging sapi atau kepiting khas Aceh adalah?",
        "options": [
          "Mie Celor",
          "Mie Aceh",
          "Mie Gomak",
          "Mie Kocok"
        ],
        "correctIndex": 1,
        "explanation": "Mie Aceh disajikan hangat bersama emping renyah, irisan bawang merah segar, dan acar mentimun."
      },
      {
        "question": "Olahan mie kenyal khas Batak Toba yang sering dijuluki 'Spaghetti Batak' dengan kuah santan bumbu andaliman adalah?",
        "options": [
          "Mie Gomak",
          "Mie Aceh",
          "Mie Celor",
          "Bihun Bebek"
        ],
        "correctIndex": 0,
        "explanation": "Dinamakan Mie Gomak karena pada zaman dahulu cara penyajiannya digenggam langsung dengan tangan (gomak)."
      },
      {
        "question": "Bumbu rempah khas Sumatera Utara yang memberikan sensasi getir bergetar di lidah dan aroma sitrus menyegarkan adalah?",
        "options": [
          "Kluwek",
          "Andaliman (Merica Batak)",
          "Asam Gelugur",
          "Bunga Lawang"
        ],
        "correctIndex": 1,
        "explanation": "Andaliman adalah rempah liar pegunungan Danau Toba yang menjadi bumbu utama hidangan arsik ikan mas."
      },
      {
        "question": "Benteng pertahanan peninggalan bangsa Inggris abad ke-18 yang terletak di tepi pantai Kota Bengkulu adalah?",
        "options": [
          "Fort de Kock",
          "Fort Marlborough",
          "Fort Rotterdam",
          "Fort Belgica"
        ],
        "correctIndex": 1,
        "explanation": "Fort Marlborough adalah benteng Inggris terkuat kedua di Asia Timur setelah Fort St. George di India."
      },
      {
        "question": "Batu cadas granit raksasa di tepi pantai berpasir putih jernih yang menjadi daya tarik pariwisata Pulau Belitung adalah?",
        "options": [
          "Pantai Tanjung Tinggi",
          "Pantai Parangtritis",
          "Pantai Kuta",
          "Pantai Losari"
        ],
        "correctIndex": 0,
        "explanation": "Pantai Tanjung Tinggi terkenal sebagai lokasi syuting film legendaris Laskar Pelangi."
      },
      {
        "question": "Tari kreasi berpasangan asal Melayu Riau dan Sumatera Barat dengan tempo cepat irama gembira adalah?",
        "options": [
          "Tari Zapin",
          "Tari Serampang Dua Belas",
          "Tari Balumpa",
          "Tari Sekapur Sirih"
        ],
        "correctIndex": 1,
        "explanation": "Tari Serampang Dua Belas menggambarkan tahapan perkenalan muda-mudi hingga menuju pelaminan pernikahan."
      },
      {
        "question": "Tarian selamat datang asal Jambi di mana penari menyuguhkan daun sirih dan pinang dalam wadah cerana kuningan adalah?",
        "options": [
          "Tari Piring",
          "Tari Sekapur Sirih",
          "Tari Tanggai",
          "Tari Tor-tor"
        ],
        "correctIndex": 1,
        "explanation": "Menyuguhkan sirih melambangkan ketulusan hati masyarakat Melayu menyambut sahabat dan tamu agung."
      },
      {
        "question": "Tutup kepala adat kain songket pria Melayu Riau dan Sumatera yang dilipat anggun berujung runcing disebut?",
        "options": [
          "Blangkon",
          "Tanjak (Tengkolok)",
          "Udeng",
          "Passapu"
        ],
        "correctIndex": 1,
        "explanation": "Tanjak melambangkan kehormatan, wibawa, dan ketajaman akal budi ksatria Melayu."
      },
      {
        "question": "Jembatan megah yang membentang di atas Sungai Musi menghubungkan seberang Ulu dan Ilir di Kota Palembang adalah?",
        "options": [
          "Jembatan Suramadu",
          "Jembatan Ampera",
          "Jembatan Barelang",
          "Jembatan Barito"
        ],
        "correctIndex": 1,
        "explanation": "Jembatan Ampera (Amanat Penderitaan Rakyat) dibangun tahun 1962 dan menjadi lambang kejayaan Sumatera Selatan."
      }
    ],
    "imageQuizzes": [
      {
        "question": "Rumah adat khas Minangkabau dengan atap runcing melengkung menyerupai tanduk kerbau (Gonjong) ini bernama?",
        "imageSvg": "rumah_gadang",
        "options": [
          "Rumah Gadang",
          "Rumah Bolon",
          "Rumah Limas",
          "Rumah Melayu"
        ],
        "correctIndex": 0,
        "explanation": "Hebat! Rumah Gadang dibangun tahan gempa dengan pasak kayu tanpa paku besi modern.",
        "imageUrl": "assets/images/quiz/quiz_rumah_gadang.jpg"
      },
      {
        "question": "Kain tenunan mewah asal Minangkabau & Palembang yang ditenun menggunakan benang emas berkilau ini adalah?",
        "imageSvg": "kain_songket",
        "options": [
          "Kain Songket Emas",
          "Kain Ulos",
          "Kain Batik",
          "Kain Tapis"
        ],
        "correctIndex": 0,
        "explanation": "Tepat! Songket dijuluki Ratu Kain Tenun Nusantara karena kerumitan dan kemewahannya.",
        "imageUrl": "assets/images/quiz/quiz_kain_songket.jpg"
      },
      {
        "question": "Senjata pusaka berbilah tajam khas Serambi Mekkah Aceh dengan bentuk huruf arab ini bernama?",
        "imageSvg": "senjata_rencong",
        "options": [
          "Rencong Aceh",
          "Keris Jawa",
          "Mandau Dayak",
          "Badik Bugis"
        ],
        "correctIndex": 0,
        "explanation": "Sempurna! Rencong senantiasa diselipkan di pinggang depan sebagai perlambang kesiapan membela kebenaran.",
        "imageUrl": "assets/images/quiz/quiz_senjata_rencong.jpg"
      },
      {
        "question": "Wastra tenun tradisional Batak berhias rumbai benang dengan warna dominan merah, hitam, dan putih ini adalah?",
        "imageSvg": "kain_ulos",
        "options": [
          "Kain Ulos",
          "Kain Songket",
          "Kain Poleng",
          "Kain Tenun Ikat"
        ],
        "correctIndex": 0,
        "explanation": "Benar! Ulos Ragi Hotang sering diberikan kepada pengantin sebagai doa ikatan yang kokoh.",
        "imageUrl": "assets/images/quiz/quiz_kain_ulos.jpg"
      },
      {
        "question": "Menara jam raksasa peninggalan sejarah yang menjadi ikon kebanggaan kota Bukittinggi, Sumatera Barat adalah?",
        "imageSvg": "jam_gadang",
        "options": [
          "Jam Gadang",
          "Monas",
          "Tugu Khatulistiwa",
          "Benteng Kuto Besak"
        ],
        "correctIndex": 0,
        "explanation": "Tepat! Jam Gadang memiliki keunikan angka romawi 4 yang ditulis 'IIII' bukan 'IV'.",
        "imageUrl": "assets/images/quiz/quiz_jam_gadang.jpg"
      }
    ],
    "matchingSteps": [
      {
        "level": "easy",
        "levelName": "🟢 Tahap Easy (3 Pasangan)",
        "instruction": "Pasangkan Kuliner Khas Sumatera dengan Kota Asalnya!",
        "pairs": [
          {
            "item": "Rendang Daging Rempah",
            "match": "Padang (Sumbar)"
          },
          {
            "item": "Bika Ambon Harum",
            "match": "Medan (Sumut)"
          },
          {
            "item": "Pempek Ikan Cuka",
            "match": "Palembang (Sumsel)"
          }
        ],
        "explanation": "Lezat sekali! Kamu hafal kuliner favorit nusantara dari ranah Andalas!"
      },
      {
        "level": "normal",
        "levelName": "🟡 Tahap Normal (4 Pasangan)",
        "instruction": "Pasangkan Tarian Adat Sumatera dengan Daerah Asalnya!",
        "pairs": [
          {
            "item": "Tari Saman Cepat",
            "match": "Gayo (Aceh)"
          },
          {
            "item": "Tari Tor-Tor Khidmat",
            "match": "Toba (Sumut)"
          },
          {
            "item": "Tari Piring Akrobatik",
            "match": "Minangkabau (Sumbar)"
          },
          {
            "item": "Tari Gending Sriwijaya",
            "match": "Palembang (Sumsel)"
          }
        ],
        "explanation": "Bagus sekali! Tarian tradisional Sumatera kaya akan makna sejarah dan keindahan gerak!"
      },
      {
        "level": "hard",
        "levelName": "🔴 Tahap Hard (5 Pasangan)",
        "instruction": "Tantangan Arsitektur: Pasangkan Rumah Adat dengan Suku / Provinsinya!",
        "pairs": [
          {
            "item": "Rumah Gadang Atap Gonjong",
            "match": "Suku Minangkabau"
          },
          {
            "item": "Rumah Bolon Panggung",
            "match": "Suku Batak Toba"
          },
          {
            "item": "Rumah Limas Bertingkat",
            "match": "Sumatera Selatan"
          },
          {
            "item": "Rumoh Aceh Berkolong",
            "match": "Provinsi Aceh"
          },
          {
            "item": "Rumah Selaso Jatuh Kembar",
            "match": "Melayu Riau"
          }
        ],
        "explanation": "Istimewa! Kamu berhasil menyelesaikan tantangan arsitektur adat terlengkap di Pulau Sumatera!"
      }
    ]
  },
  {
    "id": "kalimantan",
    "name": "Kalimantan",
    "subtitle": "Jantung Rimba Borneo, Kerajaan Kutai & Sungai Megah",
    "unlockedDefault": false,
    "pin": {
      "x": 41,
      "y": 34
    },
    "landmarkImg": "assets/images/landmark_kalimantan.png",
    "npc": {
      "title": "Penjaga Budaya Kalimantan",
      "greeting": "Adil Ka' Talino, Bacuramin Ka' Saruga, Basengat Ka' Jubata! Selamat datang di Bumi Borneo, tanah adat suku Dayak dan kemegahan sungai purba!",
      "pairImg": "assets/images/npc_pair_kalimantan.png"
    },
    "artifact": {
      "id": "mandau_kalimantan",
      "name": "Mandau Pusaka Dayak",
      "lore": "Senjata pusaka suku Dayak dengan hulu ukiran tanduk rusa dan tatah kuningan bertuah pelindung hutan adat.",
      "icon": "⚔️"
    },
    "badge": {
      "id": "badge_kalimantan",
      "name": "Ksatria Enggang Borneo",
      "desc": "Menguasai rahasia melodi Sape', arsitektur Rumah Betang, dan kelestarian rimba Kalimantan.",
      "icon": "🎖️"
    },
    "rewardPoints": 300,
    "mcqQuizzes": [
      {
        "question": "Rumah panggung kayu ulin panjang khas suku Dayak Kalimantan yang dihuni puluhan kepala keluarga secara rukun adalah?",
        "options": [
          "Rumah Betang (Lamin)",
          "Rumah Gadang",
          "Rumah Tongkonan",
          "Rumah Honai"
        ],
        "correctIndex": 0,
        "explanation": "Rumah Betang dapat mencapai panjang 150 meter dan melambangkan nilai persaudaraan serta musyawarah suku Dayak."
      },
      {
        "question": "Alat musik petik tradisional Dayak yang terbuat dari kayu pohon adau dengan ukiran flora fauna dan suara petikan syahdu adalah?",
        "options": [
          "Kolintang",
          "Sape' (Sampe)",
          "Kacapi",
          "Sasando"
        ],
        "correctIndex": 1,
        "explanation": "Sape' sering dimainkan untuk mengiringi tarian, pesta panen raya, dan ritual pengobatan adat Dayak."
      },
      {
        "question": "Burung hutan Kalimantan bertanduk merah-kuning menyala yang sangat dihormati dan menjadi lambang kesucian suku Dayak adalah?",
        "options": [
          "Burung Cendrawasih",
          "Burung Enggang Gading (Rangkong)",
          "Burung Maleo",
          "Burung Jalak"
        ],
        "correctIndex": 1,
        "explanation": "Bulu sayap dan ekor burung Enggang digunakan sebagai hiasan mahkota dan properti tarian sakral Dayak."
      },
      {
        "question": "Senjata tajam pusaka suku Dayak bertatahkan kuningan dengan hulu ukiran tanduk rusa dan sarung berhias bulu enggang adalah?",
        "options": [
          "Keris",
          "Mandau",
          "Rencong",
          "Badik"
        ],
        "correctIndex": 1,
        "explanation": "Mandau bukan sekadar senjata perang, melainkan lambang kehormatan, pusaka turun-temurun, dan keberanian ksatria Dayak."
      },
      {
        "question": "Perisai kayu pelindung diri suku Dayak berbentuk segi enam meruncing dengan ukiran wajah 'Kamang' penolak bala adalah?",
        "options": [
          "Salawaku",
          "Talawang",
          "Kurambiak",
          "Tameng"
        ],
        "correctIndex": 1,
        "explanation": "Talawang terbuat dari kayu ulin atau liat yang kokoh menangkis serangan senjata tajam musuh."
      },
      {
        "question": "Senjata berburu tradisional suku Dayak berupa pipa bambu panjang pelontar anak sumpit beracun getah pohon ipoh disebut?",
        "options": [
          "Busur Panah",
          "Sipet (Sumpitan)",
          "Tulup",
          "Ketapel"
        ],
        "correctIndex": 1,
        "explanation": "Sumpitan memiliki akurasi tinggi dan ujung bilah tombak untuk pertarungan jarak dekat saat berburu di rimba lebat."
      },
      {
        "question": "Kain tradisional khas suku Banjar Kalimantan Selatan yang dibuat dengan teknik jelujur dan celup rintang warna alami adalah?",
        "options": [
          "Batik Sogan",
          "Kain Sasirangan",
          "Kain Songket",
          "Kain Ulos"
        ],
        "correctIndex": 1,
        "explanation": "Sasirangan berasal dari kata 'sirang' (menjelujur) dan dahulu diyakini berkhasiat sebagai sarana pengobatan spiritual."
      },
      {
        "question": "Tarian ksatria Dayak yang menggambarkan kelincahan dua pemuda bertarung memperagakan jurus silat mandau dan talawang adalah?",
        "options": [
          "Tari Mandau (Kancet Papatai)",
          "Tari Piring",
          "Tari Saman",
          "Tari Cakalele"
        ],
        "correctIndex": 0,
        "explanation": "Tari Kancet Papatai menampilkan gerak akrobatik, jeritan semangat perang, dan ketangkasan pedang mandau."
      },
      {
        "question": "Tarian anggun wanita Dayak yang menari lemah gemulai di atas gong perunggu tanpa membunyikannya adalah?",
        "options": [
          "Tari Gong (Kancet Ledo)",
          "Tari Jaipong",
          "Tari Pendet",
          "Tari Gambyong"
        ],
        "correctIndex": 0,
        "explanation": "Tari Gong melambangkan kelembutan, kesucian budi pekerti, dan kepiawaian gadis Dayak menjaga keseimbangan."
      },
      {
        "question": "Upacara pemakaman adat terbesar suku Dayak Ngaju untuk menyucikan dan mengantar tulang belulang leluhur ke Lewu Tatau disebut?",
        "options": [
          "Ngaben",
          "Upacara Tiwah",
          "Rambu Solo'",
          "Grebeg"
        ],
        "correctIndex": 1,
        "explanation": "Dalam upacara Tiwah, tulang jenazah dibersihkan lalu disemayamkan dalam bangunan kayu ukir berpilar yang disebut Sandung."
      },
      {
        "question": "Tradisi unik memanjangkan daun telinga menggunakan pemberat gelang tembaga yang dilakukan wanita Dayak Kayan dan Kenyah dinamakan?",
        "options": [
          "Telingaan Aruu",
          "Tutang",
          "Mentawai",
          "Tato"
        ],
        "correctIndex": 0,
        "explanation": "Telingaan Aruu melambangkan kecantikan, kesabaran menanggung beban hidup, dan status sosial bangsawan Dayak."
      },
      {
        "question": "Seni rajah tubuh tradisional Dayak Iban yang menggambarkan kedewasaan, perjalanan merantau, dan simbol bunga terung disebut?",
        "options": [
          "Tato Tutang (Iki)",
          "Lukisan Kulit",
          "Body Painting",
          "Ukir Tubuh"
        ],
        "correctIndex": 0,
        "explanation": "Motif bunga terung di kedua bahu menandakan bahwa pemuda Dayak telah mandiri dan siap memikul tanggung jawab."
      },
      {
        "question": "Kerajaan Hindu tertua di Indonesia yang berdiri abad ke-4 Masehi di tepi Sungai Mahakam Kalimantan Timur adalah?",
        "options": [
          "Kerajaan Tarumanegara",
          "Kerajaan Kutai Martadipura",
          "Kerajaan Majapahit",
          "Kerajaan Sriwijaya"
        ],
        "correctIndex": 1,
        "explanation": "Raja Mulawarman dari Kerajaan Kutai menyedekahkan 20.000 ekor sapi kepada kaum Brahmana tertulis pada tiang batu Yupa."
      },
      {
        "question": "Tujuh prasasti tiang batu bertuliskan huruf Pallawa dan bahasa Sanskerta peninggalan Kerajaan Kutai dinamakan?",
        "options": [
          "Prasasti Ciaruteun",
          "Prasasti Yupa",
          "Prasasti Kebon Kopi",
          "Prasasti Kedukan Bukit"
        ],
        "correctIndex": 1,
        "explanation": "Prasasti Yupa menjadi bukti sejarah tertulis tertua dimulainya zaman sejarah di wilayah Indonesia."
      },
      {
        "question": "Pusat perdagangan terapung di atas perahu kelotok di muara Sungai Barito dan Martapura Banjarmasin yang sudah ada sejak abad ke-14 adalah?",
        "options": [
          "Pasar Terapung Lok Baintan",
          "Pasar Klewer",
          "Pasar Beringharjo",
          "Pasar Sukawati"
        ],
        "correctIndex": 0,
        "explanation": "Pasar Terapung menggunakan perahu jukung tradisional dan sistem barter hasil kebun serta panganan khas Banjar."
      },
      {
        "question": "Primata berhidung besar dan panjang dengan perut buncit yang menjadi satwa endemik Kalimantan dan maskot provinsi Kalimantan Selatan adalah?",
        "options": [
          "Orangutan",
          "Bekantan (Nasalis larvatus)",
          "Owa",
          "Lutung"
        ],
        "correctIndex": 1,
        "explanation": "Masyarakat lokal kerap menjuluki Bekantan sebagai 'monyet belanda' karena hidungnya yang mancung besar kemerahan."
      },
      {
        "question": "Kera besar cerdas berambut merah kecokelatan yang dilindungi di Taman Nasional Tanjung Puting, Kalimantan Tengah adalah?",
        "options": [
          "Gorila",
          "Orangutan Kalimantan (Pongo pygmaeus)",
          "Simpanse",
          "Gibbon"
        ],
        "correctIndex": 1,
        "explanation": "Tanjung Puting merupakan pusat rehabilitasi orangutan liar terbesar di dunia yang didirikan oleh Dr. Birute Galdikas."
      },
      {
        "question": "Mamalia air tawar langka sejenis lumba-lumba yang hidup di perairan Sungai Mahakam Kalimantan Timur adalah?",
        "options": [
          "Dugong",
          "Pesut Mahakam (Orcaella brevirostris)",
          "Lumba-lumba Hidung Botol",
          "Paus Orca"
        ],
        "correctIndex": 1,
        "explanation": "Pesut Mahakam bernapas menggunakan paru-paru dan kini berstatus satwa kritis terancam punah."
      },
      {
        "question": "Pohon kayu khas hutan hujan tropis Kalimantan yang terkenal sangat keras, tahan rayap, dan semakin awet di dalam air adalah?",
        "options": [
          "Kayu Jati",
          "Kayu Ulin (Kayu Besi)",
          "Kayu Cendana",
          "Kayu Mahoni"
        ],
        "correctIndex": 1,
        "explanation": "Kayu Ulin (Eusideroxylon zwageri) digunakan sebagai tiang pancang rumah panggung dan jembatan sungai Kalimantan."
      },
      {
        "question": "Tugu peringatan di Kota Pontianak, Kalimantan Barat yang tepat dilalui oleh garis khatulistiwa (lintang 0 derajat) dinamakan?",
        "options": [
          "Monas",
          "Tugu Khatulistiwa (Equator Monument)",
          "Tugu Pahlawan",
          "Tugu Perdamaian"
        ],
        "correctIndex": 1,
        "explanation": "Pada saat titik kulminasi matahari (21-23 Maret dan September), bayangan benda di sekitar tugu akan hilang sejenak."
      },
      {
        "question": "Kuliner khas Banjar berupa sup ayam berkuah harum rempah kayu manis dan cengkih disajikan bersama ketupat dan perkedel adalah?",
        "options": [
          "Soto Betawi",
          "Soto Banjar",
          "Soto Lamongan",
          "Coto Makassar"
        ],
        "correctIndex": 1,
        "explanation": "Soto Banjar memiliki kuah gurih yang khas berkat campuran susu evaporasi atau telur bebek kocok."
      },
      {
        "question": "Makanan khas suku Melayu Sambas Kalimantan Barat berbahan aneka sayuran pakis, kangkung, rebung, dan beras sangrai tumbuk adalah?",
        "options": [
          "Bubur Manado",
          "Bubur Pedas Sambas",
          "Bubur Ayam",
          "Kapurung"
        ],
        "correctIndex": 1,
        "explanation": "Meskipun bernama 'bubur pedas', kuliner ini tidak pedas cabai melainkan kaya rasa rempah daun kesum yang harum."
      },
      {
        "question": "Ikan air tawar konsumsi bernilai tinggi yang hidup di hulu sungai berarus deras pedalaman Kalimantan adalah?",
        "options": [
          "Ikan Gurami",
          "Ikan Jelawat",
          "Ikan Lele",
          "Ikan Mas"
        ],
        "correctIndex": 1,
        "explanation": "Ikan Jelawat berdaging lembut dan gurih, sangat lezat diolah menjadi pepes tempoyak atau sup ikan asam pedas."
      },
      {
        "question": "Kue tradisional khas Banjarmasin berbahan tepung beras, santan, dan air daun pandan yang dikukus dalam mangkuk cetakan daun pisang adalah?",
        "options": [
          "Kue Bingka",
          "Kue Wadai Amparan Tatak",
          "Kue Cucur",
          "Kue Lumpur"
        ],
        "correctIndex": 0,
        "explanation": "Kue Bingka Banjar memiliki tekstur legit lembut dengan aroma wangi kentang dan telur bebek."
      },
      {
        "question": "Tradisi perayaan pesta syukur pascapanen padi suku Dayak Kanayatn di Kalimantan Barat yang berlangsung meriah dinamakan?",
        "options": [
          "Gawai Dayak (Naik Dango)",
          "Seren Taun",
          "Sedekah Bumi",
          "Erau"
        ],
        "correctIndex": 0,
        "explanation": "Gawai Dayak menampilkan ritual penyimpanan padi ke lumbung, pertunjukan musik sape', dan lomba sumpit tradisional."
      },
      {
        "question": "Festival budaya tahunan Kesultanan Kutai Kartanegara di Tenggarong Kalimantan Timur yang diramaikan ritual Mengulur Naga adalah?",
        "options": [
          "Festival Danau Sentani",
          "Festival Erau",
          "Festival Sriwijaya",
          "Pesta Danau Toba"
        ],
        "correctIndex": 1,
        "explanation": "Erau berasal dari bahasa Kutai 'eroh' yang berarti suasana ramai gembira penuh sukacita adat istiadat."
      },
      {
        "question": "Kerajinan anyaman topi caping lebar khas pedalaman Dayak yang terbuat dari daun nipah atau palem hutan adalah?",
        "options": [
          "Seraung",
          "Caping Bambu",
          "Tanjak",
          "Songkok"
        ],
        "correctIndex": 0,
        "explanation": "Seraung melindungi masyarakat dari sengatan terik matahari dan hujan lebat saat berladang atau mengayuh perahu."
      },
      {
        "question": "Anyaman tas ransel punggung khas Dayak berbahan rotan alami yang kuat untuk membawa hasil hutan dinamakan?",
        "options": [
          "Tas Noken",
          "Anjat",
          "Tas Koja",
          "Kantong Anyam"
        ],
        "correctIndex": 1,
        "explanation": "Anjat dianyam halus dengan pola motif flora fauna hitam putih yang sangat indah dan tahan lama."
      },
      {
        "question": "Kerajaan Islam pertama di Kalimantan Selatan yang didirikan oleh Sultan Suriansyah pada abad ke-16 adalah?",
        "options": [
          "Kesultanan Banjar",
          "Kesultanan Kutai",
          "Kesultanan Sambas",
          "Kesultanan Pontianak"
        ],
        "correctIndex": 0,
        "explanation": "Masjid Sultan Suriansyah di Kuin Banjarmasin merupakan masjid tertua peninggalan Kesultanan Banjar."
      },
      {
        "question": "Istana kayu bertingkat megah di hulu Sungai Mahakam yang menjadi kediaman Sultan Kutai Kartanegara abad ke-19 kini menjadi?",
        "options": [
          "Museum Mulawarman",
          "Museum Nasional",
          "Museum Fatahillah",
          "Museum Sri Baduga"
        ],
        "correctIndex": 0,
        "explanation": "Museum Mulawarman menyimpan benda pusaka kerajaan, singgasana emas, payung kebesaran, dan keramik Dinasti Ming."
      },
      {
        "question": "Danau air tawar terluas di pedalaman Kalimantan Barat yang menjadi surga habitat burung air dan ikan arwana adalah?",
        "options": [
          "Danau Toba",
          "Danau Sentarum",
          "Danau Matano",
          "Danau Poso"
        ],
        "correctIndex": 1,
        "explanation": "Taman Nasional Danau Sentarum merupakan lahan basah unik yang saat musim hujan menjadi danau dan musim kemarau menjadi hutan rawa."
      },
      {
        "question": "Ikan hias air tawar endemik Sungai Kapuas berjuluk 'Naga Air' dengan sisik kemerahan berkilau harga fantastis adalah?",
        "options": [
          "Ikan Cupang",
          "Ikan Arwana Super Red (Scleropages formosus)",
          "Ikan Louhan",
          "Ikan Koi"
        ],
        "correctIndex": 1,
        "explanation": "Arwana Super Red Kalimantan Barat diyakini membawa keberuntungan, kemakmuran, dan ketenteraman bagi pemeliharanya."
      },
      {
        "question": "Pohon hutan Kalimantan yang menghasilkan kristal getah beraroma harum semerbak untuk dupa dan bahan parfum dunia adalah?",
        "options": [
          "Pohon Gaharu",
          "Pohon Pinus",
          "Pohon Jati",
          "Pohon Karet"
        ],
        "correctIndex": 0,
        "explanation": "Kayu Gaharu terbentuk dari respon alami pohon Aquilaria terhadap infeksi jamur, menghasilkan resin bernilai sangat tinggi."
      },
      {
        "question": "Pakaian adat wanita suku Dayak Kenyah yang berupa rompi tanpa lengan dan rok kain berhias sulaman manik-manik indah disebut?",
        "options": [
          "Baju Bodo",
          "Baju Ta'a",
          "Baju Kurung",
          "Kebaya"
        ],
        "correctIndex": 1,
        "explanation": "Baju Ta'a dipadukan dengan ikat kepala manik bermahkota bulu enggang dan gelang gading di kedua lengan."
      },
      {
        "question": "Pakaian adat pria suku Dayak berupa rompi kulit kayu atau kain tenun bermotif ksatria gagah dinamakan?",
        "options": [
          "Sapei Sapaq",
          "Beskap",
          "Teluk Belanga",
          "Surjan"
        ],
        "correctIndex": 0,
        "explanation": "Sapei Sapaq dikenakan bersama cawat (abett), mandau di pinggang, dan tameng talawang di tangan."
      },
      {
        "question": "Tradisi lisan masyarakat Banjar berupa pantun berbalas jenaka berirama yang diiringi musik terbang dinamakan?",
        "options": [
          "Madihin",
          "Didong",
          "Macapat",
          "Sinrilik"
        ],
        "correctIndex": 0,
        "explanation": "Madihin dibawakan oleh seorang pemadihin tunggal yang mahir merangkai syair spontan sarat humor dan petuah moral."
      },
      {
        "question": "Pertunjukan teater boneka khas suku Banjar yang mengangkat kisah kepahlawanan rakyat dan kritik sosial jenaka adalah?",
        "options": [
          "Wayang Golek",
          "Wayang Kulit Banjar",
          "Wayang Potehi",
          "Lenong"
        ],
        "correctIndex": 1,
        "explanation": "Wayang Banjar berkembang dari pengaruh Kesultanan Demak pada abad ke-16 dengan bahasa dan karakter tokoh lokal."
      },
      {
        "question": "Kue tradisional Banjar berbentuk loyang bundar bergerigi menyerupai kelopak bunga mawar mekar dengan rasa manis legit adalah?",
        "options": [
          "Kue Lumpur",
          "Kue Bingka Barandam",
          "Kue Apam Barabai",
          "Kue Kararaban"
        ],
        "correctIndex": 1,
        "explanation": "Bingka Barandam disajikan bersama siraman kuah air gula beraroma kayu manis dan daun pandan wangi."
      },
      {
        "question": "Cemilan manis khas Barabai Kalimantan Selatan berbahan tape singkong dan tepung beras yang kenyal lezat adalah?",
        "options": [
          "Apam Barabai",
          "Dodol Kandangan",
          "Bika",
          "Kue Putu"
        ],
        "correctIndex": 0,
        "explanation": "Apam Barabai dikemas dalam bungkus daun pisang dengan varian warna putih gula pasir dan cokelat gula aren."
      },
      {
        "question": "Olahan durian fermentasi khas masyarakat pedalaman Kalimantan dan Sumatera yang dimasak bersama ikan sungai dinamakan?",
        "options": [
          "Terasi",
          "Tempoyak",
          "Cincalok",
          "Petis"
        ],
        "correctIndex": 1,
        "explanation": "Tempoyak menghasilkan perpaduan rasa asam segar dan aroma durian kuat yang sangat cocok dimasak gulai ikan baung."
      },
      {
        "question": "Pegunungan karst purba di Kalimantan Timur dengan dinding gua kapur berlukisan telapak tangan manusia purba berusia 40.000 tahun adalah?",
        "options": [
          "Pegunungan Meratus",
          "Karst Sangkulirang-Mangkalihat",
          "Pegunungan Schwaner",
          "Gunung Palung"
        ],
        "correctIndex": 1,
        "explanation": "Gua Sangkulirang menyimpan bukti arkeologi lukisan cadas tertua di dunia yang menggambarkan kehidupan manusia prasejarah."
      },
      {
        "question": "Sungai terpanjang di Indonesia yang mengalir sepanjang 1.143 kilometer di wilayah Kalimantan Barat adalah?",
        "options": [
          "Sungai Mahakam",
          "Sungai Barito",
          "Sungai Kapuas",
          "Sungai Kahayan"
        ],
        "correctIndex": 2,
        "explanation": "Sungai Kapuas bermula dari Pegunungan Muller dan bermuara ke Selat Karimata, menjadi urat nadi perhubungan utama."
      },
      {
        "question": "Sungai terbesar di Kalimantan Timur yang menjadi jalur transportasi kapal ponton batu bara dan kayu gelondongan adalah?",
        "options": [
          "Sungai Kapuas",
          "Sungai Barito",
          "Sungai Mahakam",
          "Sungai Berau"
        ],
        "correctIndex": 2,
        "explanation": "Sungai Mahakam memiliki panjang 920 kilometer dan menghidupi ribuan desa di tepian perairannya."
      },
      {
        "question": "Upacara adat suku Dayak Tunjung dan Benuaq di Kutai Barat untuk menyembuhkan orang sakit melalui tarian pemanggilan roh leluhur adalah?",
        "options": [
          "Belian",
          "Ngaben",
          "Tiwah",
          "Erau"
        ],
        "correctIndex": 0,
        "explanation": "Ritual Belian dipimpin oleh seorang dukun adat (Pawang Belian) diiringi alunan ritmis gelang genta kuningan."
      },
      {
        "question": "Pusat penambangan intan tradisional terbesar di Kalimantan Selatan yang terkenal menghasilkan intan 'Trisakti' seberat 166 karat adalah?",
        "options": [
          "Pendulangan Intan Cempaka (Banjarbaru)",
          "Martapura",
          "Pelaihari",
          "Kandangan"
        ],
        "correctIndex": 0,
        "explanation": "Pendulang intan menggunakan mangkuk kayu linggangan untuk memisahkan butiran kerikil intan di dasar lumpur sungai."
      },
      {
        "question": "Tarian penyambutan tamu terhormat khas suku Banjar yang ditarikan oleh penari putri berbusana kuning memegang mangkuk beras kuning adalah?",
        "options": [
          "Tari Radap Rahayu",
          "Tari Baksa Kembang",
          "Tari Kuda Gepang",
          "Tari Japin"
        ],
        "correctIndex": 1,
        "explanation": "Tari Baksa Kembang ditarikan di lingkungan keraton Banjar sebagai bentuk doa keselamatan dan kebahagiaan bagi tamu."
      },
      {
        "question": "Tari ritual tolak bala khas suku Banjar yang dibawakan saat terjadi wabah penyakit atau musibah perahu karam di sungai adalah?",
        "options": [
          "Tari Radap Rahayu",
          "Tari Baksa Dadap",
          "Tari Tirik",
          "Tari Japin Sigam"
        ],
        "correctIndex": 0,
        "explanation": "Radap Rahayu melambangkan turunnya bidadari khayangan membawa ketenteraman dan kesembuhan ke bumi."
      },
      {
        "question": "Kota di Kalimantan Timur yang kini berkembang menjadi kawasan penyangga Ibu Kota Nusantara (IKN) dengan pelabuhan laut modern adalah?",
        "options": [
          "Banjarmasin",
          "Balikpapan",
          "Samarinda",
          "Tarakan"
        ],
        "correctIndex": 1,
        "explanation": "Balikpapan dijuluki 'Kota Minyak' dan menjadi pintu gerbang logistik dan maritim utama Kalimantan Timur."
      },
      {
        "question": "Pulau di Kepulauan Derawan Kalimantan Timur yang terkenal di dunia karena memiliki danau air asin berisi ubur-ubur tanpa sengat adalah?",
        "options": [
          "Pulau Maratua",
          "Pulau Kakaban",
          "Pulau Sangalaki",
          "Pulau Derawan"
        ],
        "correctIndex": 1,
        "explanation": "Ubur-ubur di Danau Kakaban berevolusi ribuan tahun tanpa pemangsa alami sehingga kehilangan kemampuan menyengat."
      },
      {
        "question": "Kearifan lokal suku Dayak dalam menjaga hutan larangan agar tidak ditebang demi menjaga sumber mata air dan habitat satwa disebut?",
        "options": [
          "Hutan Lindung",
          "Tana Ulen",
          "Hutan Adat",
          "Cagar Alam"
        ],
        "correctIndex": 1,
        "explanation": "Tana Ulen dikelola ketat oleh hukum adat Dayak; pelanggar yang menebang pohon dikenai denda adat berat berupa guci keramik kuno."
      }
    ],
    "imageQuizzes": [
      {
        "question": "Alat musik petik khas Dayak berbentuk badan perahu ramping dengan ukiran flora fauna rumit ini bernama?",
        "imageSvg": "alat_sape",
        "options": [
          "Sape' Dayak",
          "Gitar Akustik",
          "Kecapi Sunda",
          "Gambus Melayu"
        ],
        "correctIndex": 0,
        "explanation": "Tepat! Sape' bermakna 'memetik dengan jari' dan biasa dimainkan untuk ritual pengobatan dan pesta panen.",
        "imageUrl": "assets/images/quiz/quiz_alat_sape.jpg"
      },
      {
        "question": "Burung hutan Kalimantan bertanduk merah-kuning mencolok yang menjadi lambang kesucian suku Dayak adalah?",
        "imageSvg": "burung_enggang",
        "options": [
          "Burung Enggang Gading",
          "Burung Cendrawasih",
          "Burung Elang Jawa",
          "Burung Kasuari"
        ],
        "correctIndex": 0,
        "explanation": "Hebat! Enggang melambangkan kesetiaan karena burung ini hanya memiliki satu pasangan seumur hidupnya.",
        "imageUrl": "assets/images/quiz/quiz_burung_enggang.jpg"
      },
      {
        "question": "Rumah panggung kayu ulin panjang khas suku Dayak Kalimantan ini bernama?",
        "imageSvg": "rumah_betang",
        "options": [
          "Rumah Betang",
          "Rumah Gadang",
          "Rumah Tongkonan",
          "Rumah Honai"
        ],
        "correctIndex": 0,
        "explanation": "Benar! Tiang tinggi pada Rumah Betang berfungsi melindungi warga dari serangan binatang buas dan banjir luapan sungai.",
        "imageUrl": "assets/images/quiz/quiz_rumah_betang.jpg"
      },
      {
        "question": "Senjata tajam pusaka suku Dayak bertatahkan kuningan dengan sarung berhias bulu burung enggang ini adalah?",
        "imageSvg": "mandau_dayak",
        "options": [
          "Mandau Dayak",
          "Keris Jawa",
          "Rencong Aceh",
          "Badik Makassar"
        ],
        "correctIndex": 0,
        "explanation": "Sempurna! Mandau adalah benda pusaka turun-temurun yang melambangkan marwah ksatria Dayak.",
        "imageUrl": "assets/images/quiz/quiz_mandau_dayak.jpg"
      },
      {
        "question": "Perisai kayu ulin pelindung perang suku Dayak dengan ukiran wajah 'Kamang' penolak bala ini disebut?",
        "imageSvg": "tameng_talawang",
        "options": [
          "Talawang",
          "Salawaku",
          "Tameng Kurabu",
          "Perisai Kujang"
        ],
        "correctIndex": 0,
        "explanation": "Tepat sekali! Talawang dihiasi motif ukiran khas yang dipercaya membangkitkan keberanian prajurit di medan juang.",
        "imageUrl": "assets/images/quiz/quiz_tameng_talawang.jpg"
      }
    ],
    "matchingSteps": [
      {
        "level": "easy",
        "levelName": "🟢 Tahap Easy (3 Pasangan)",
        "instruction": "Pasangkan Kuliner Kalimantan dengan Kota Asalnya!",
        "pairs": [
          {
            "item": "Soto Banjar Kuah Susu",
            "match": "Banjarmasin (Kalsel)"
          },
          {
            "item": "Bubur Pedas Sayur Mayur",
            "match": "Pontianak / Sambas (Kalbar)"
          },
          {
            "item": "Lemang Pulut Bakar Bambu",
            "match": "Palangkaraya (Kalteng)"
          }
        ],
        "explanation": "Lezat! Masakan khas Kalimantan kaya akan rempah kayu manis dan kesegaran sayuran rimba!"
      },
      {
        "level": "normal",
        "levelName": "🟡 Tahap Normal (4 Pasangan)",
        "instruction": "Pasangkan Kesenian & Tradisi Dayak dengan Cirinya!",
        "pairs": [
          {
            "item": "Tari Mandau Berani",
            "match": "Keperkasaan Prajurit Berpedang"
          },
          {
            "item": "Tari Kancet Papatai",
            "match": "Tarian Perang Bertameng Talawang"
          },
          {
            "item": "Melodi Sape' Damai",
            "match": "Petikan Dawai Ketenangan Alam"
          },
          {
            "item": "Upacara Adat Tiwah",
            "match": "Pengantaran Arwah Leluhur Ngaju"
          }
        ],
        "explanation": "Bagus sekali! Kamu menghayati keindahan seni tarian dan kearifan spiritual Dayak!"
      },
      {
        "level": "hard",
        "levelName": "🔴 Tahap Hard (5 Pasangan)",
        "instruction": "Tantangan Pusaka: Pasangkan Benda Adat Dayak dengan Fungsinya!",
        "pairs": [
          {
            "item": "Pedang Mandau Bertatah",
            "match": "Pusaka Kehormatan & Pertahanan Diri"
          },
          {
            "item": "Perisai Kayu Talawang",
            "match": "Tameng Pelindung Berukir Kamang"
          },
          {
            "item": "Sumpit Sipet Beracun",
            "match": "Senjata Berburu Senyap dari Jauh"
          },
          {
            "item": "Tombak Lonjo Panjang",
            "match": "Senjata Tikam Berdaun Lebar"
          },
          {
            "item": "Manik-Manik Etnik Dayak",
            "match": "Hiasan Busana & Penangkal Bala"
          }
        ],
        "explanation": "Luar biasa tangguh! Kamu telah menuntaskan seluruh tingkatan tantangan rimba Kalimantan!"
      }
    ]
  },
  {
    "id": "sulawesi",
    "name": "Sulawesi",
    "subtitle": "Legenda Samudera Pinisi, Rumah Tongkonan, & Toraja",
    "unlockedDefault": false,
    "pin": {
      "x": 58,
      "y": 46
    },
    "landmarkImg": "assets/images/landmark_sulawesi.png",
    "npc": {
      "title": "Penjaga Budaya Sulawesi",
      "greeting": "Kurru Sumanga'! Tabik pun! Selamat datang di Celebes Sulawesi, bumi para pelaut ulung Pinisi dan mahakarya batu pahat leluhur Toraja!",
      "pairImg": "assets/images/npc_pair_sulawesi.png"
    },
    "artifact": {
      "id": "pinisi_sulawesi",
      "name": "Miniatur Kapal Pinisi",
      "lore": "Perahu layar kayu mahakarya suku Bugis-Konjo yang mampu mengarungi samudra dunia tanpa paku besi modern.",
      "icon": "⛵"
    },
    "badge": {
      "id": "badge_sulawesi",
      "name": "Nakhoda Bahari Pinisi",
      "desc": "Menghayati kearifan maritim Bugis-Makassar dan kemegahan upacara adat Toraja.",
      "icon": "🧭"
    },
    "rewardPoints": 300,
    "mcqQuizzes": [
      {
        "question": "Rumah adat suku Toraja di Sulawesi Selatan yang memiliki atap melengkung menjulang mirip perahu terbalik dan berhias tanduk kerbau adalah?",
        "options": [
          "Rumah Betang",
          "Rumah Tongkonan",
          "Rumah Boyang",
          "Rumah Souraja"
        ],
        "correctIndex": 1,
        "explanation": "Tongkonan berasal dari kata 'tongkon' (duduk bermusyawarah) dan menghadap ke utara tempat asal leluhur bersemayam."
      },
      {
        "question": "Kapal layar kayu bertiang ganda karya pelaut ulung suku Bugis dan Makassar yang diakui UNESCO sebagai Warisan Budaya Dunia adalah?",
        "options": [
          "Perahu Cadik",
          "Kapal Pinisi",
          "Perahu Kora-Kora",
          "Perahu Jukung"
        ],
        "correctIndex": 1,
        "explanation": "Kapal Pinisi dibuat secara tradisional di Bulukumba tanpa paku besi, melainkan pasak kayu ulin yang kokoh menyeberangi samudera."
      },
      {
        "question": "Pakaian adat wanita suku Bugis-Makassar berbentuk segi empat berlengan pendek yang diyakini sebagai salah satu busana tertua di dunia adalah?",
        "options": [
          "Kebaya",
          "Baju Bodo",
          "Baju Kurung",
          "Baju Ta'a"
        ],
        "correctIndex": 1,
        "explanation": "Baju Bodo terbuat dari kain kasa sutra tenun transparan dengan warna cerah yang mencerminkan usia dan status pemakainya."
      },
      {
        "question": "Alat musik perkusi khas Minahasa Sulawesi Utara yang terbuat dari bilah-bilah kayu bernada merdu di atas meja resonator adalah?",
        "options": [
          "Gamelan",
          "Kolintang",
          "Calung",
          "Talempong"
        ],
        "correctIndex": 1,
        "explanation": "Kolintang berasal dari bunyi 'Tong-Ting-Tang' yang ditala harmonis dan dimainkan dalam ansambel orkestra kayu."
      },
      {
        "question": "Makam kuno di tebing batu cadas Tana Toraja yang dihiasi patung kayu leluhur berpakaian adat di balkon tebing dinamakan?",
        "options": [
          "Makam Lemo & Londa",
          "Makam Imogiri",
          "Makam Giri",
          "Makam Trowulan"
        ],
        "correctIndex": 0,
        "explanation": "Patung kayu pahat di tebing makam Toraja disebut 'Tau-Tau', melambangkan sosok bangsawan yang telah berpulang ke alam baka."
      },
      {
        "question": "Upacara pemakaman adat terbesar dan termewah di dunia yang diselenggarakan oleh masyarakat Tana Toraja disebut?",
        "options": [
          "Tiwah",
          "Rambu Solo'",
          "Ngaben",
          "Grebeg"
        ],
        "correctIndex": 1,
        "explanation": "Rambu Solo' melibatkan penyembelihan puluhan kerbau belang (Tedong Bonga) sebagai bekal arwah menuju surga (Puya)."
      },
      {
        "question": "Kerbau langka khas Tana Toraja yang memiliki corak belang putih-hitam dengan bola mata biru dan bernilai harga hingga ratusan juta rupiah adalah?",
        "options": [
          "Kerbau Bule",
          "Tedong Bonga",
          "Banteng Jawa",
          "Anoa"
        ],
        "correctIndex": 1,
        "explanation": "Tedong Bonga menempati kasta tertinggi dalam adat Toraja sebagai persembahan paling mulia pada upacara Rambu Solo'."
      },
      {
        "question": "Tradisi tahunan suku Toraja membersihkan jenazah leluhur, mengganti pakaian kain baru, dan menata peti kubur di liang batu disebut?",
        "options": [
          "Ma'nene",
          "Tiwah",
          "Tedak Siten",
          "Brokohan"
        ],
        "correctIndex": 0,
        "explanation": "Ritual Ma'nene menunjukkan bakti cinta anak cucu yang tak pernah putus kepada orang tua dan leluhur yang telah tiada."
      },
      {
        "question": "Senjata tikam tradisional khas masyarakat Bugis dan Makassar yang berbilah tajam satu sisi dengan pamor beracun mematikan adalah?",
        "options": [
          "Keris",
          "Badik (Kawali/Gecong)",
          "Rencong",
          "Kujang"
        ],
        "correctIndex": 1,
        "explanation": "Bagi pria Bugis, Badik disisipkan di pinggang kiri sebagai penjaga kehormatan diri dan simbol kedewasaan ksatria."
      },
      {
        "question": "Benteng pertahanan berbentuk penyu menghadap ke laut di tepi Pantai Makassar peninggalan Kerajaan Gowa-Tallo abad ke-16 adalah?",
        "options": [
          "Benteng Belgica",
          "Benteng Fort Rotterdam (Ujung Pandang)",
          "Benteng Vredeburg",
          "Benteng Marlborough"
        ],
        "correctIndex": 1,
        "explanation": "Bentuk penyu pada Fort Rotterdam melambangkan Kerajaan Gowa yang berjaya di daratan maupun di lautan samudra."
      },
      {
        "question": "Benteng terluas di dunia versi Guinness World Records seluas 23 hektare yang terbuat dari susunan batu kapur putih berada di?",
        "options": [
          "Benteng Keraton Buton (Sulawesi Tenggara)",
          "Benteng Marlborough",
          "Benteng Otanaha",
          "Benteng Somba Opu"
        ],
        "correctIndex": 0,
        "explanation": "Benteng Keraton Buton memiliki 12 pintu gerbang (Lawa) dan 16 meriam kuno pertahanan Kesultanan Buton."
      },
      {
        "question": "Tarian sakral kesultanan Gowa yang dibawakan oleh penari wanita berbusana Baju Bodo dengan gerakan sangat lambat dan kipas di tangan adalah?",
        "options": [
          "Tari Saman",
          "Tari Kipas Pakarena",
          "Tari Jaipong",
          "Tari Piring"
        ],
        "correctIndex": 1,
        "explanation": "Tari Pakarena melambangkan kelembutan, kesetiaan, dan kepatuhan perempuan Bugis-Makassar di hadapan sang pencipta."
      },
      {
        "question": "Tarian perang ksatria Minahasa di mana penari mengenakan busana merah menyala membawa pedang santi dan perisai sambil membelalakkan mata adalah?",
        "options": [
          "Tari Kabasaran (Kawasaran)",
          "Tari Cakalele",
          "Tari Mandau",
          "Tari Caci"
        ],
        "correctIndex": 0,
        "explanation": "Tari Kabasaran ditarikan oleh ksatria penjaga keamanan kampung yang siap mempertahankan tanah air dari musuh."
      },
      {
        "question": "Kain tenun sutra kebanggaan masyarakat Bugis Wajo yang ditenun secara tradisional dengan motif kotak-kotak cerah dinamakan?",
        "options": [
          "Kain Ulos",
          "Kain Sutra Lipa Sabbe (Sengkang)",
          "Kain Sasirangan",
          "Kain Songket"
        ],
        "correctIndex": 1,
        "explanation": "Sengkang di Kabupaten Wajo dikenal sebagai 'Kota Sutra' penghasil tenun sutra ulat sutra murbei alami bermutu tinggi."
      },
      {
        "question": "Pahlawan nasional berjuluk 'Ayam Jantan dari Timur' (De Haantjes van Het Oosten) yang gigih memimpin Kerajaan Gowa melawan VOC Belanda adalah?",
        "options": [
          "Sultan Iskandar Muda",
          "Sultan Hasanuddin",
          "Pangeran Antasari",
          "Pattimura"
        ],
        "correctIndex": 1,
        "explanation": "Sultan Hasanuddin memimpin perang laut heroik mempertahankan kedaulatan jalur perdagangan rempah di Indonesia Timur."
      },
      {
        "question": "Pahlawan nasional wanita pejuang emansipasi dan kemerdekaan asal Minahasa Sulawesi Utara yang wafat di pengasingan Jawa Tengah adalah?",
        "options": [
          "R.A. Kartini",
          "Maria Walanda Maramis",
          "Cut Meutia",
          "Nyi Ageng Serang"
        ],
        "correctIndex": 1,
        "explanation": "Maria Walanda Maramis mendirikan organisasi PIKAT untuk memperjuangkan hak pendidikan dan bersuara bagi perempuan."
      },
      {
        "question": "Satwa mamalia terkecil di dunia bermata bulat sangat besar dan berkepala dapat berputar 180 derajat yang hidup di Tangkoko Bitung adalah?",
        "options": [
          "Kukang",
          "Tarsius (Tarsius spectrumgularis)",
          "Bekantan",
          "Owa"
        ],
        "correctIndex": 1,
        "explanation": "Tarsius berukuran hanya 12 cm, hidup nokturnal di lubang pohon beringin, dan melompat lincah menangkap serangga malam."
      },
      {
        "question": "Hewan endemik Sulawesi menyerupai babi hutan bertaring runcing melengkung menembus moncong atas kepalanya adalah?",
        "options": [
          "Babi Kutil",
          "Babirusa (Babyrousa)",
          "Babi Hutan",
          "Anoa"
        ],
        "correctIndex": 1,
        "explanation": "Taring atas babirusa jantan melengkung ke atas hingga mendekati mata, berfungsi untuk menarik perhatian betina."
      },
      {
        "question": "Mamalia kerdil bertanduk runcing lurus menyerupai kerbau mini yang menjadi satwa endemik pulau Sulawesi adalah?",
        "options": [
          "Banteng",
          "Anoa (Bubalus depressicornis)",
          "Kambing Hutan",
          "Rusa Timor"
        ],
        "correctIndex": 1,
        "explanation": "Anoa terbagi atas Anoa Pegunungan dan Anoa Dataran Rendah, keduanya hidup soliter di lebatnya rimba Sulawesi."
      },
      {
        "question": "Burung endemik pulau Sulawesi yang mengubur telurnya di pasir pantai hangat atau tanah geotermal vulkanik untuk ditetaskan adalah?",
        "options": [
          "Burung Cendrawasih",
          "Burung Maleo (Macrocephalon maleo)",
          "Burung Enggang",
          "Burung Kasuari"
        ],
        "correctIndex": 1,
        "explanation": "Anak burung Maleo yang baru menetas dapat langsung terbang mandiri begitu berhasil menggali keluar dari tumpukan pasir hangat."
      },
      {
        "question": "Taman Nasional Laut di Sulawesi Utara yang tersohor di seluruh dunia dengan tebing palung karang vertikal sedalam ratusan meter adalah?",
        "options": [
          "Raja Ampat",
          "Bunaken",
          "Wakatobi",
          "Togean"
        ],
        "correctIndex": 1,
        "explanation": "Taman Nasional Bunaken memiliki 390 spesies terumbu karang dan ribuan jenis ikan hias tropis yang memukau penyelam dunia."
      },
      {
        "question": "Gugusan kepulauan di Sulawesi Tenggara yang terkenal sebagai surga terumbu karang dunia di pusat segitiga terumbu karang karibia timur adalah?",
        "options": [
          "Bunaken",
          "Kepulauan Wakatobi",
          "Derawan",
          "Karimunjawa"
        ],
        "correctIndex": 1,
        "explanation": "Wakatobi merupakan akronim dari empat pulau utamanya: Wangi-Wangi, Kaledupa, Tomia, dan Binongko."
      },
      {
        "question": "Kuliner sup daging sapi berkuah rempah kental gurih khas Makassar yang disajikan dengan potongan ketupat daun kelapa adalah?",
        "options": [
          "Rawon",
          "Coto Makassar",
          "Gudeg",
          "Soto Banjar"
        ],
        "correctIndex": 1,
        "explanation": "Kuah Coto Makassar dibuat dengan rebusan jeroan dan daging sapi dipadukan dengan kacang tanah sangrai giling yang lezat."
      },
      {
        "question": "Olahan iga sapi bakar khas Makassar yang dibumbui rempah kayu manis dan kluwek disajikan bersama kuah sup gurih adalah?",
        "options": [
          "Sop Buntut",
          "Konro Bakar (Sop Konro)",
          "Empal Gentong",
          "Brongkos"
        ],
        "correctIndex": 1,
        "explanation": "Sop Konro bercita rasa gurih pekat dengan taburan bawang goreng dan sambal cabai rawit pedas mengigit."
      },
      {
        "question": "Hidangan penutup manis khas Makassar berbahan pisang raja matang dibalut adonan tepung hijau pandan kenyal disiram sirup merah adalah?",
        "options": [
          "Kolak Pisang",
          "Es Pisang Ijo",
          "Es Cendol",
          "Es Doger"
        ],
        "correctIndex": 1,
        "explanation": "Es Pisang Ijo disajikan dingin bersama bubur sumsum lembut gurih, es serut, dan kucuran susu kental manis."
      },
      {
        "question": "Bubur gurih khas Manado yang kaya akan sayuran kangkung, bayam, kemangi, jagung manis, dan ubi labu kuning adalah?",
        "options": [
          "Bubur Pedas",
          "Tinutuan (Bubur Manado)",
          "Bubur Ayam",
          "Bubur Sumsum"
        ],
        "correctIndex": 1,
        "explanation": "Tinutuan disajikan hangat bersama sambal roa pedas asap dan perkedel jagung (bakwan nikmat)."
      },
      {
        "question": "Masakan khas Minahasa berupa olahan ikan laut segar yang dimasak bumbu kuning pedas dengan daun kemangi dalam belanga tanah liat adalah?",
        "options": [
          "Gulai Ikan",
          "Ikan Woku Belanga",
          "Ikan Kuah Asam",
          "Pesmol Ikan"
        ],
        "correctIndex": 1,
        "explanation": "Bumbu Woku kaya daun jeruk, daun kunyit, daun pandan, kemangi, dan cabai yang menghasilkan aroma harum menggugah selera."
      },
      {
        "question": "Sambal khas Sulawesi Utara yang terbuat dari ulekan cabai rawit merah pedas dicampur dengan suwiran ikan asap roa gurih adalah?",
        "options": [
          "Sambal Terasi",
          "Sambal Roa",
          "Sambal Matah",
          "Sambal Dabu-Dabu"
        ],
        "correctIndex": 1,
        "explanation": "Ikan roa diasap kering berhari-hari sebelum ditumbuk halus bersama bawang dan cabai rawit pedas."
      },
      {
        "question": "Kue pie gurih manis khas Manado berisi serutan daging kelapa muda segar, susu, dan taburan kayu manis bubuk serta kismis adalah?",
        "options": [
          "Bika Ambon",
          "Klappertaart",
          "Pastel",
          "Kue Lumpur"
        ],
        "correctIndex": 1,
        "explanation": "Klappertaart berakar dari pengaruh kuliner Belanda yang berpadu dengan melimpahnya kelapa di bumi Nyiur Melambai Minahasa."
      },
      {
        "question": "Danau purba terdalam di Indonesia dan nomor delapan terdalam di dunia (590 meter) yang terletak di Sulawesi Selatan adalah?",
        "options": [
          "Danau Toba",
          "Danau Matano",
          "Danau Towuti",
          "Danau Poso"
        ],
        "correctIndex": 1,
        "explanation": "Danau Matano memiliki air jernih kristal dengan keanekaragaman ikan endemik yang tidak ditemukan di belahan bumi lain."
      },
      {
        "question": "Pantai indah di pesisir Kota Makassar yang terkenal sebagai tempat terbaik menikmati pemandangan matahari terbenam (sunset) adalah?",
        "options": [
          "Pantai Kuta",
          "Pantai Losari",
          "Pantai Sanur",
          "Pantai Senggigi"
        ],
        "correctIndex": 1,
        "explanation": "Di sepanjang anjungan Pantai Losari, pengunjung dapat menikmati jajanan pisang epe bakar saus gula aren durian."
      },
      {
        "question": "Alat musik petik tradisional berbentuk rebab kayu dua dawai bersuara melankolis khas masyarakat suku Mandar dan Bugis dinamakan?",
        "options": [
          "Kacapi",
          "Keso-Keso (Geso-Geso)",
          "Sape'",
          "Sasando"
        ],
        "correctIndex": 1,
        "explanation": "Keso-Keso dimainkan dengan menggesek dawai menggunakan busur berambut ekor kuda untuk mengiringi syair tutur petuah kuno."
      },
      {
        "question": "Seni bercerita dan melantunkan kisah kepahlawanan lisan suku Bugis dan Makassar yang diiringi petikan alat musik keso-keso disebut?",
        "options": [
          "Macapat",
          "Sinrilik",
          "Madihin",
          "Didong"
        ],
        "correctIndex": 1,
        "explanation": "Penyair Sinrilik (Pa'sinrilik) membawakan kisah heroik Datu Museng dan Maipa Deapati yang melegenda."
      },
      {
        "question": "Tutup kepala adat pria bangsawan Bugis yang terbuat dari anyaman serat pelepah lontar bertatah sulaman benang emas dinamakan?",
        "options": [
          "Blangkon",
          "Songkok Recca (Songkok To Bone)",
          "Udeng",
          "Tanjak"
        ],
        "correctIndex": 1,
        "explanation": "Songkok Recca dahulu hanya boleh dipakai oleh kaum raja dan bangsawan tinggi Bone sebagai lambang kedaulatan."
      },
      {
        "question": "Filosofi luhur masyarakat Bugis-Makassar yang menjunjung tinggi harga diri, martabat, dan rasa malu pantang menyerah adalah?",
        "options": [
          "Siri' Na Pacce",
          "Tri Hita Karana",
          "Urip Iku Urup",
          "Torang Samua Basudara"
        ],
        "correctIndex": 0,
        "explanation": "Siri' berarti menjaga kehormatan diri dan keluarga, sedangkan Pacce adalah rasa solidaritas dan empati mendalam kepada sesama."
      },
      {
        "question": "Semboyan kerukunan masyarakat Sulawesi Utara yang bermakna 'Kita Semua Bersaudara' tanpa membedakan suku dan agama adalah?",
        "options": [
          "Bhinneka Tunggal Ika",
          "Torang Samua Basudara",
          "Siri' Na Pacce",
          "Salassae"
        ],
        "correctIndex": 1,
        "explanation": "Semboyan Torang Samua Basudara dicetuskan oleh Pahlawan Nasional Dr. G.S.S.J. Ratulangi (Sam Ratulangi)."
      },
      {
        "question": "Perahu kayu bercadik tradisional khas masyarakat nelayan Mandar Sulawesi Barat yang terkenal lincah melaju cepat di lautan adalah?",
        "options": [
          "Pinisi",
          "Perahu Sandeq",
          "Jukung",
          "Kora-Kora"
        ],
        "correctIndex": 1,
        "explanation": "Sandeq adalah perahu layar terhalus dan tercepat di dunia yang digerakkan oleh kepiawaian pelaut Mandar menunggang angin."
      },
      {
        "question": "Rumah adat tradisional masyarakat Kaili di Lembah Palu Sulawesi Tengah yang dibangun tanpa paku besi di atas pilar balok kayu ulin adalah?",
        "options": [
          "Tongkonan",
          "Souraja (Banua Mbaso)",
          "Boyang",
          "Tambi"
        ],
        "correctIndex": 1,
        "explanation": "Souraja merupakan kediaman bangsawan kerajaan Kaili yang memiliki sirkulasi udara sejuk di tengah panasnya lembah Palu."
      },
      {
        "question": "Kue tradisional khas Manado berupa dadar gulung pandan hijau berisi kelapa parut manis gula aren yang legit adalah?",
        "options": [
          "Lalampa",
          "Kue Cucur",
          "Kue Balapis",
          "Panada"
        ],
        "correctIndex": 2,
        "explanation": "Balapis Manado memiliki tekstur lembut bertingkat dengan aroma wangi daun pandan dan cokelat bubuk."
      },
      {
        "question": "Roti goreng berbentuk pastel khas Manado dengan isian daging ikan cakalang bumbu pampis pedas gurih dinamakan?",
        "options": [
          "Pastel",
          "Panada",
          "Cireng",
          "Kroket"
        ],
        "correctIndex": 1,
        "explanation": "Panada berakar dari pengaruh kuliner Spanyol 'empanada' yang diadaptasi dengan isian ikan cakalang asap khas Minahasa."
      },
      {
        "question": "Kue tradisional khas Palu Sulawesi Tengah berbahan parutan kelapa muda dan gula merah yang dibakar harum di atas wajan tanah liat adalah?",
        "options": [
          "Kue Tetu",
          "Kue Lalampa",
          "Bagea",
          "Kue Paranggi"
        ],
        "correctIndex": 0,
        "explanation": "Kue Tetu disajikan di dalam cetakan wadah perahu daun pandan hutan beraroma sangat harum saat disajikan hangat."
      },
      {
        "question": "Kue kering bulat keras khas Palopo dan Sulawesi Tenggara berbahan tepung sagu dengan aroma rempah kayu manis dan pala adalah?",
        "options": [
          "Bagea",
          "Kue Nastar",
          "Kastengel",
          "Kue Semprit"
        ],
        "correctIndex": 0,
        "explanation": "Kue Bagea memiliki kerenyahan khas yang sangat nikmat dicelupkan ke dalam secangkir kopi panas atau teh rempah."
      },
      {
        "question": "Kawasan perbukitan karst kapur terindah kedua di dunia setelah Madagaskar yang terletak di Maros-Pangkep Sulawesi Selatan adalah?",
        "options": [
          "Rammang-Rammang",
          "Gunung Bromo",
          "Kelimutu",
          "Dieng"
        ],
        "correctIndex": 0,
        "explanation": "Rammang-Rammang menyajikan gugusan menara karst menjulang di tengah tenangnya sungai dan hamparan sawah hijau permadani."
      },
      {
        "question": "Tarian pergaulan muda-mudi suku Kaili di Sulawesi Tengah yang ditarikan berputar melingkar saling bergandengan tangan adalah?",
        "options": [
          "Tari Dero",
          "Tari Poco-Poco",
          "Tari Sajojo",
          "Tari Yospan"
        ],
        "correctIndex": 0,
        "explanation": "Tari Dero dibawakan pada pesta panen padi diiringi tabuhan gong dan nyanyian pantun persahabatan yang riang."
      },
      {
        "question": "Kain tenun ikat tradisional Donggala Sulawesi Tengah yang dibuat menggunakan alat tenun bukan mesin (ATBM) dengan motif bunga sube adalah?",
        "options": [
          "Tenun Donggala",
          "Songket",
          "Ulos",
          "Lipa Sabbe"
        ],
        "correctIndex": 0,
        "explanation": "Tenun Donggala terkenal dengan kehalusan benang sutra dan warna cerah keemasan lambang wibawa para tetua adat."
      },
      {
        "question": "Batu megalitikum purba misterius berupa patung berwujud wajah manusia berpahat mata lonjong yang terletak di Lembah Besoa Lore Lindu adalah?",
        "options": [
          "Arca Dwarapala",
          "Megalit Lore Lindu (Patung Palindo)",
          "Prasasti Yupa",
          "Menhir"
        ],
        "correctIndex": 1,
        "explanation": "Patung Megalitikum Lore Lindu Sulawesi Tengah diperkirakan berusia lebih dari 3.000 tahun sebelum masehi."
      },
      {
        "question": "Pusat industri kerajinan perak bakar tradisional di Sulawesi Selatan yang menghasilkan ornamen miniatur kapal pinisi dan rumah adat adalah?",
        "options": [
          "Kendari",
          "Kaledupa",
          "Somba Opu (Makassar)",
          "Gorontalo"
        ],
        "correctIndex": 2,
        "explanation": "Jalan Somba Opu Makassar terkenal dengan sentra toko cinderamata emas, perak bakar filigri, dan kain tenun sutra Bugis."
      },
      {
        "question": "Festival Danau Poso di Sulawesi Tengah yang diselenggarakan di tepi danau pasir kuning berair jernih merayakan?",
        "options": [
          "Kerukunan budaya dan pesta panen rakyat Poso",
          "Balapan sapi",
          "Perang perahu",
          "Tolak bala"
        ],
        "correctIndex": 0,
        "explanation": "Festival Danau Poso menampilkan atraksi tari dero kolosal, peragaan busana tenun kulit kayu, dan lomba dayung perahu tradisional."
      },
      {
        "question": "Bahan pakaian tradisional tertua di dunia yang dibuat masyarakat suku Lore Sulawesi Tengah dari kulit pohon beringin yang dipukul-pukul adalah?",
        "options": [
          "Kain Sutra",
          "Kain Kulit Kayu (Fuya)",
          "Kain Katun",
          "Kain Mori"
        ],
        "correctIndex": 1,
        "explanation": "Pembuatan Fuya menggunakan batu pemukul 'Ike' kuno yang melembutkan serat kulit kayu menjadi kain pakaian alami."
      },
      {
        "question": "Pintu gerbang masuk pelabuhan kuno Kerajaan Luwu di Palopo yang terkenal dengan julukan 'Bumi Sawerigading' di Sulawesi Selatan adalah?",
        "options": [
          "Istana Datu Luwu",
          "Pelabuhan Paotere",
          "Fort Rotterdam",
          "Pelabuhan Tanjung Silopo"
        ],
        "correctIndex": 0,
        "explanation": "Kedatuan Luwu merupakan kerajaan tertua di Sulawesi Selatan yang menjadi latar utama epos kesusastraan I La Galigo."
      }
    ],
    "imageQuizzes": [
      {
        "question": "Kapal layar kayu tradisional suku Bugis berlayar putih gagah penakluk samudra ini bernama?",
        "imageSvg": "kapal_pinisi",
        "options": [
          "Kapal Pinisi",
          "Kapal Borobudur",
          "Kapal Jung",
          "Perahu Kora-kora"
        ],
        "correctIndex": 0,
        "explanation": "Tepat! Pinisi dibuat berdasarkan naluri dan perhitungan kearifan lokal turun-temurun.",
        "imageUrl": "assets/images/quiz/quiz_kapal_pinisi.jpg"
      },
      {
        "question": "Rumah adat suku Toraja dengan atap menjulang menyerupai perahu terbalik dan berhias tanduk kerbau adalah?",
        "imageSvg": "rumah_tongkonan",
        "options": [
          "Rumah Tongkonan",
          "Rumah Boyang",
          "Rumah Tambi",
          "Rumah Walewangko"
        ],
        "correctIndex": 0,
        "explanation": "Benar! Tongkonan berasal dari kata 'tongkon' yang artinya tempat duduk bermusyawarah bersama keluarga besar.",
        "imageUrl": "assets/images/quiz/quiz_rumah_tongkonan.jpg"
      },
      {
        "question": "Alat musik perkusi khas Minahasa yang terbuat dari bilah-bilah kayu ringan penghasil nada merdu adalah?",
        "imageSvg": "alat_kolintang",
        "options": [
          "Kolintang",
          "Gambang",
          "Calung",
          "Gamelan"
        ],
        "correctIndex": 0,
        "explanation": "Hebat! Kolintang berasal dari bunyi 'Tong' (rendah), 'Ting' (tinggi), dan 'Tang' (sedang) saat dipukul palu kayu.",
        "imageUrl": "assets/images/quiz/quiz_alat_kolintang.jpg"
      },
      {
        "question": "Busana adat wanita Bugis berbahan kain sutra tenun Sengkang berwarna cerah berbentuk segi empat mengembang ini adalah?",
        "imageSvg": "baju_bodo",
        "options": [
          "Baju Bodo",
          "Baju Nggembe",
          "Baju Pokko",
          "Baju Seppa"
        ],
        "correctIndex": 0,
        "explanation": "Tepat sekali! Warna Baju Bodo menandakan usia dan status sosial pemakainya dalam tatanan adat.",
        "imageUrl": "assets/images/quiz/quiz_baju_bodo.jpg"
      },
      {
        "question": "Makam kuno di tebing batu cadas Tana Toraja yang dihiasi jejeran patung kayu leluhur (Tau-tau) ini adalah?",
        "imageSvg": "kuburan_batu_lemo",
        "options": [
          "Kuburan Batu Lemo",
          "Gua Liang Bua",
          "Candi Tebing",
          "Kompleks Megalit"
        ],
        "correctIndex": 0,
        "explanation": "Sempurna! Makam tebing Lemo dipahat manual di ketinggian bukit batu sebagai perlindungan jasad leluhur.",
        "imageUrl": "assets/images/quiz/quiz_kuburan_batu_lemo.jpg"
      }
    ],
    "matchingSteps": [
      {
        "level": "easy",
        "levelName": "🟢 Tahap Easy (3 Pasangan)",
        "instruction": "Pasangkan Makanan Khas Sulawesi dengan Kota Asalnya!",
        "pairs": [
          {
            "item": "Coto Makassar Gurih",
            "match": "Makassar (Sulsel)"
          },
          {
            "item": "Tinutuan Bubur Manado",
            "match": "Manado (Sulut)"
          },
          {
            "item": "Palumara Ikan Kuah Kuning",
            "match": "Palu (Sulteng)"
          }
        ],
        "explanation": "Mantap! Masakan Sulawesi terkenal kaya akan rempah segar dan hasil tangkapan laut berlimpah!"
      },
      {
        "level": "normal",
        "levelName": "🟡 Tahap Normal (4 Pasangan)",
        "instruction": "Pasangkan Tradisi Budaya Sulawesi dengan Daerah Asalnya!",
        "pairs": [
          {
            "item": "Upacara Rambu Solo'",
            "match": "Tana Toraja (Sulsel)"
          },
          {
            "item": "Tari Kipas Pakarena",
            "match": "Gowa / Makassar"
          },
          {
            "item": "Tari Maengket Syukur Panen",
            "match": "Minahasa (Sulut)"
          },
          {
            "item": "Tari Peule Cinde Tabur Beras",
            "match": "Palu (Sulteng)"
          }
        ],
        "explanation": "Bagus sekali! Tradisi Sulawesi sangat menjunjung tinggi rasa syukur dan penghormatan leluhur!"
      },
      {
        "level": "hard",
        "levelName": "🔴 Tahap Hard (5 Pasangan)",
        "instruction": "Tantangan Bahari: Pasangkan Bagian Kapal Pinisi dengan Makna Tradisinya!",
        "pairs": [
          {
            "item": "Sombala (7 Layar Putih)",
            "match": "Simbol Penakluk 7 Samudra Dunia"
          },
          {
            "item": "Anjong (Balok Haluan)",
            "match": "Penembus Ombak Badai Lautan"
          },
          {
            "item": "Guling (Kemudi Ganda)",
            "match": "Penentu Arah Haluan Kapal"
          },
          {
            "item": "Cocoro (Layar Segitiga Depan)",
            "match": "Pengarah Angin Saat Berlayar"
          },
          {
            "item": "Tarengke (2 Tiang Utama)",
            "match": "Simbol Kalimah Syahadat Maritim"
          }
        ],
        "explanation": "Luar biasa nakhoda hebat! Kamu telah menguasai anatomi dan filosofi luhur kapal legendaris Pinisi!"
      }
    ]
  },
  {
    "id": "papua",
    "name": "Maluku / Papua",
    "subtitle": "Zamrud Surga Raja Ampat, Kepulauan Rempah, & Lembah Honai",
    "unlockedDefault": false,
    "pin": {
      "x": 86,
      "y": 58
    },
    "landmarkImg": "assets/images/landmark_papua.png",
    "npc": {
      "title": "Penjaga Budaya Maluku & Papua",
      "greeting": "Amolongo! Naimu! Selamat datang di Kepulauan Rempah Maluku dan Surga Zamrud Timur Papua, tanah pusaka burung cendrawasih dan noken leluhur!",
      "pairImg": "assets/images/npc_pair_papua.png"
    },
    "artifact": {
      "id": "tifa_papua",
      "name": "Tifa Berukir & Tas Noken",
      "lore": "Tifa kayu tabuh berukir khas Asmat dipadukan dengan Noken anyaman serat kulit kayu simbol cinta kasih ibu Papua warisan UNESCO.",
      "icon": "🪘"
    },
    "badge": {
      "id": "badge_papua",
      "name": "Sahabat Cendrawasih Papua",
      "desc": "Menyelesaikan seluruh petualangan Nusantara, menjaga tifa pusaka, noken, dan kejayaan alam Papua.",
      "icon": "👑"
    },
    "rewardPoints": 300,
    "mcqQuizzes": [
      {
        "question": "Rumah adat suku pegunungan Papua (suku Dani) yang beratap kubah jerami tebal menyerupai jamur penghangat udara dingin adalah?",
        "options": [
          "Rumah Betang",
          "Rumah Honai",
          "Rumah Baileo",
          "Rumah Sasak"
        ],
        "correctIndex": 1,
        "explanation": "Rumah Honai tidak memiliki jendela dan berpintu kecil agar suhu di dalam ruangan tetap hangat dari hawa dingin pegunungan Jayawijaya."
      },
      {
        "question": "Burung surga endemik Papua yang memiliki bulu ekor kuning keemasan menjuntai anggun dan menjadi lambang kemegahan tanah Papua adalah?",
        "options": [
          "Burung Enggang",
          "Burung Cendrawasih (Paradisaeidae)",
          "Burung Kasuari",
          "Burung Maleo"
        ],
        "correctIndex": 1,
        "explanation": "Burung Cendrawasih menari di atas dahan pohon tinggi untuk memamerkan keindahan bulu sayapnya kepada betina."
      },
      {
        "question": "Tas tradisional multifungsi khas masyarakat Papua yang dianyam dari serat kulit kayu atau anggrek hutan dan digantungkan di dahi adalah?",
        "options": [
          "Tas Anjat",
          "Noken",
          "Tas Koja",
          "Tas Ransel"
        ],
        "correctIndex": 1,
        "explanation": "Noken diakui UNESCO sebagai Warisan Budaya Takbenda Dunia berkat filosofi kehidupan, perdamaian, dan kesuburan perempuan Papua."
      },
      {
        "question": "Alat musik tabuh tradisional khas Papua dan Maluku yang terbuat dari batang kayu bulat berbalut kulit biawak atau rusa dengan ukiran khas adalah?",
        "options": [
          "Kendang",
          "Tifa",
          "Gendang",
          "Marawis"
        ],
        "correctIndex": 1,
        "explanation": "Alunan irama Tifa membakar semangat ksatria dalam tarian perang dan menjadi pemandu ritme tarian penyambutan tamu."
      },
      {
        "question": "Tradisi memasak bersama secara massal menggunakan tumpukan batu panas beralas daun pisang di dalam lubang tanah dinamakan?",
        "options": [
          "Bakar Batu (Barapen)",
          "Tiwah",
          "Grebeg",
          "Ngaben"
        ],
        "correctIndex": 0,
        "explanation": "Upacara Bakar Batu merupakan lambang perdamaian antarsuku, ungkapan syukur panen raya, dan pesta kebersamaan masyarakat pedalaman Papua."
      },
      {
        "question": "Gugusan pulau karang zamrud di perairan Papua Barat yang diakui dunia sebagai jantung segitiga terumbu karang dengan 75% spesies karang dunia adalah?",
        "options": [
          "Bunaken",
          "Kepulauan Raja Ampat",
          "Wakatobi",
          "Derawan"
        ],
        "correctIndex": 1,
        "explanation": "Raja Ampat terdiri dari empat gugusan pulau utama: Waigeo, Misool, Salawati, dan Batanta."
      },
      {
        "question": "Suku pedalaman Papua di pesisir selatan yang termasyhur di museum seni dunia berkat keahlian mengukir patung tiang kayu leluhur (Bisj Pole) adalah?",
        "options": [
          "Suku Dani",
          "Suku Asmat",
          "Suku Korowai",
          "Suku Amungme"
        ],
        "correctIndex": 1,
        "explanation": "Ukiran Asmat dibuat tanpa sketsa pola, mengalir langsung dari imajinasi dan penghormatan sakral kepada roh para leluhur."
      },
      {
        "question": "Suku pedalaman Papua yang terkenal dengan kepiawaian membangun rumah pohon setinggi 30 hingga 50 meter di atas tajuk rimba adalah?",
        "options": [
          "Suku Korowai",
          "Suku Asmat",
          "Suku Biak",
          "Suku Sentani"
        ],
        "correctIndex": 0,
        "explanation": "Rumah pohon suku Korowai melindungi keluarga dari ancaman binatang buas, serangan musuh, dan gigitan nyamuk hutan rawa."
      },
      {
        "question": "Tarian pergaulan muda-mudi Papua yang sangat ceria dan energik dengan gerakan lompat kaki serentak mengikuti alunan musik akustik adalah?",
        "options": [
          "Tari Saman",
          "Tari Yospan (Yosim Pancar)",
          "Tari Piring",
          "Tari Jaipong"
        ],
        "correctIndex": 1,
        "explanation": "Tari Yospan merupakan penggabungan dua tarian rakyat (Yosim dan Pancar) yang melambangkan keakraban dan kegembiraan generasi muda."
      },
      {
        "question": "Tarian selamat datang khas Papua yang dibawakan dengan penuh semangat dan irama lompatan gembira diiringi nyanyian bersama adalah?",
        "options": [
          "Tari Pendet",
          "Tari Sajojo",
          "Tari Pakarena",
          "Tari Tor-tor"
        ],
        "correctIndex": 1,
        "explanation": "Lagu dan Tari Sajojo mengisahkan tentang kembang desa yang cantik jelita dan dicintai oleh para pemuda kampung."
      },
      {
        "question": "Makanan pokok tradisional masyarakat Maluku dan Papua yang dibuat dari tepung pati pohon sagu bertekstur kenyal bening adalah?",
        "options": [
          "Nasi Liwet",
          "Papeda",
          "Kapurung",
          "Tiwoi"
        ],
        "correctIndex": 1,
        "explanation": "Papeda disantap hangat menggunakan sepasang sumpit kayu (gata-gata) dengan siraman kuah ikan kuning berempah kunyit asam segar."
      },
      {
        "question": "Burung darat berbadan besar yang tidak dapat terbang dengan cakar kaki perkasa dan mahkota tanduk keras di kepala khas rimba Papua adalah?",
        "options": [
          "Burung Unta",
          "Burung Kasuari Gelambir Ganda",
          "Burung Cendrawasih",
          "Burung Mambruk"
        ],
        "correctIndex": 1,
        "explanation": "Kasuari memiliki peran penting dalam ekologi hutan Papua sebagai penyebar biji buah-buahan hutan berukuran besar."
      },
      {
        "question": "Hewan marsupial berkantung mirip kangguru Australia yang mahir melompat dan hidup di atas cabang pepohonan hutan Papua adalah?",
        "options": [
          "Kuskus",
          "Kanguru Pohon (Dendrolagus)",
          "Koala",
          "Wombat"
        ],
        "correctIndex": 1,
        "explanation": "Kanguru Pohon memiliki cakar tajam dan ekor panjang berotot kuat untuk menjaga keseimbangan di ranting pepohonan tinggi."
      },
      {
        "question": "Puncak gunung tertinggi di Indonesia setinggi 4.884 meter di Pegunungan Jayawijaya Papua yang memiliki tutupan salju abadi adalah?",
        "options": [
          "Gunung Kerinci",
          "Puncak Jaya (Carstensz Pyramid)",
          "Gunung Rinjani",
          "Gunung Semeru"
        ],
        "correctIndex": 1,
        "explanation": "Puncak Jaya masuk ke dalam jajaran 'Seven Summits' (Tujuh Puncak Tertinggi Dunia) dan menjadi satu-satunya gletser tropis di Indonesia."
      },
      {
        "question": "Pahlawan nasional asal Papua yang mengusulkan nama 'IRIAN' (Ikut Republik Indonesia Anti Nederland) dan fotonya tertera di uang kertas Rp10.000 adalah?",
        "options": [
          "Silas Papare",
          "Frans Kaisiepo",
          "Johannes Abraham Dimara",
          "Marthen Indey"
        ],
        "correctIndex": 1,
        "explanation": "Frans Kaisiepo gigih mempertahankan kemerdekaan dan kedaulatan Papua sebagai bagian tak terpisahkan dari Republik Indonesia."
      },
      {
        "question": "Pahlawan nasional asal Serui Papua yang memimpin Partai Kemerdekaan Indonesia Irian (PKII) dan berjuang dalam Operasi Trikora adalah?",
        "options": [
          "Silas Papare",
          "Frans Kaisiepo",
          "Marthen Indey",
          "Karel Satsuit Tubun"
        ],
        "correctIndex": 0,
        "explanation": "Silas Papare mendirikan badan perjuangan kemerdekaan dan berulang kali dipenjara oleh penguasa kolonial Belanda."
      },
      {
        "question": "Tanaman khas Papua berbentuk buah lonjong berduri kemerahan yang kaya antioksidan dan khasiat obat herbal tradisional adalah?",
        "options": [
          "Matoa",
          "Buah Merah (Pandanus conoideus)",
          "Buah Gandaria",
          "Pandan"
        ],
        "correctIndex": 1,
        "explanation": "Minyak ekstrak Buah Merah diyakini masyarakat suku pedalaman dapat meningkatkan daya tahan tubuh dan menyembuhkan berbagai penyakit."
      },
      {
        "question": "Buah khas Papua yang memiliki perpaduan rasa manis unik antara durian, rambutan, dan kelengkeng dengan kulit keras hijau kemerahan adalah?",
        "options": [
          "Salak",
          "Matoa (Pometia pinnata)",
          "Duku",
          "Langsat"
        ],
        "correctIndex": 1,
        "explanation": "Pohon Matoa tumbuh subur di dataran rendah Papua dan menjadi primadona buah tangan khas tanah Papua."
      },
      {
        "question": "Festival budaya tahunan terbesar di Lembah Baliem Papua yang menampilkan simulasi perang persahabatan antarsuku dan karapan babi adalah?",
        "options": [
          "Festival Danau Sentani",
          "Festival Budaya Lembah Baliem",
          "Festival Raja Ampat",
          "Festival Asmat"
        ],
        "correctIndex": 1,
        "explanation": "Festival Lembah Baliem di Wamena menarik wisatawan dari seluruh dunia untuk menyaksikan eksotisme adat suku Dani, Lani, dan Yali."
      },
      {
        "question": "Festival seni budaya di danau vulkanik luas dekat Jayapura yang menampilkan tarian di atas perahu kayu dan lukisan kulit kayu adalah?",
        "options": [
          "Festival Danau Sentani",
          "Festival Teluk Cenderawasih",
          "Festival Biak Munara",
          "Festival Asmat"
        ],
        "correctIndex": 0,
        "explanation": "Masyarakat suku Sentani melukis motif khas binatang danau pada selembar kain kulit kayu Khombow alami."
      },
      {
        "question": "Teluk luas di Papua tempat berkumpulnya kawanan hiu paus raksasa jinak (Whale Shark) yang sering berenang bersama nelayan bagan adalah?",
        "options": [
          "Teluk Cenderawasih (Nabire)",
          "Teluk Mayalibit",
          "Teluk Youtefa",
          "Teluk Doreri"
        ],
        "correctIndex": 0,
        "explanation": "Hiu paus di Taman Nasional Teluk Cenderawasih terbiasa mendekati perahu nelayan untuk memakan ikan puri kecil."
      },
      {
        "question": "Senjata berburu tradisional ksatria pedalaman Papua yang terbuat dari kayu ulin keras dengan anak panah bertaring tulang binatang adalah?",
        "options": [
          "Mandau",
          "Busur dan Anak Panah Papua",
          "Rencong",
          "Sumpit"
        ],
        "correctIndex": 1,
        "explanation": "Anak panah tradisional memiliki berbagai bentuk mata panah yang disesuaikan untuk berburu burung, babi hutan, atau bertahan diri."
      },
      {
        "question": "Rumah adat tradisional masyarakat Maluku yang berbentuk balai pertemuan panggung tanpa dinding pembatas dinamakan?",
        "options": [
          "Honai",
          "Rumah Baileo",
          "Rumah Sasak",
          "Rumah Tambi"
        ],
        "correctIndex": 1,
        "explanation": "Rumah Baileo tidak berdinding agar roh nenek moyang leluasa masuk dan menyaksikan musyawarah mufakat para pemangku adat."
      },
      {
        "question": "Benteng pertahanan segi lima peninggalan bangsa Portugis dan Belanda abad ke-17 di Kepulauan Banda Neira Maluku adalah?",
        "options": [
          "Fort Rotterdam",
          "Fort Belgica",
          "Fort Marlborough",
          "Fort de Kock"
        ],
        "correctIndex": 1,
        "explanation": "Benteng Belgica tertera pada uang kertas pecahan Rp1.000 dan dibangun untuk memonopoli perdagangan buah pala dunia."
      },
      {
        "question": "Pulau kecil di Kepulauan Maluku yang pada abad ke-17 pernah ditukar oleh Kerajaan Inggris dengan Pulau Manhattan di New York Amerika Serikat adalah?",
        "options": [
          "Pulau Banda Neira",
          "Pulau Rhun (Run)",
          "Pulau Ambon",
          "Pulau Ternate"
        ],
        "correctIndex": 1,
        "explanation": "Dalam Perjanjian Breda 1667, Inggris menyerahkan Pulau Rhun yang kaya pohon pala kepada Belanda demi menguasai Manhattan."
      },
      {
        "question": "Dua jenis rempah-rempah bernilai emas pada zaman kuno yang menjadikan Kepulauan Maluku dijuluki sebagai 'The Spice Islands' adalah?",
        "options": [
          "Lada dan Jahe",
          "Pala dan Cengkih",
          "Kunyit dan Lengkuas",
          "Ketumbar dan Jintan"
        ],
        "correctIndex": 1,
        "explanation": "Kepulauan Maluku merupakan satu-satunya tempat di muka bumi tempat pohon cengkih dan pala tumbuh alami pada masa lampau."
      },
      {
        "question": "Pahlawan nasional ksatria dari Saparua Maluku yang memimpin perlawanan bersenjata merebut Benteng Duurstede dari Belanda tahun 1817 adalah?",
        "options": [
          "Sultan Hasanuddin",
          "Kapitan Pattimura (Thomas Matulessy)",
          "Pangeran Antasari",
          "Tuanku Imam Bonjol"
        ],
        "correctIndex": 1,
        "explanation": "Sebelum dieksekusi di tiang gantung, Pattimura berseru: 'Pattimura-Pattimura tua boleh dihancurkan, tetapi akan bangkit Pattimura-Pattimura muda!'"
      },
      {
        "question": "Pahlawan wanita belia berusia 17 tahun asal Maluku yang gagah berani mengangkat senjata mendampingi perjuangan Pattimura adalah?",
        "options": [
          "Cut Nyak Dien",
          "Martha Christina Tiahahu",
          "R.A. Kartini",
          "Cut Meutia"
        ],
        "correctIndex": 1,
        "explanation": "Martha Christina Tiahahu melakukan mogok makan dan wafat di atas kapal perang Belanda dalam perjalanan pengasingan ke Pulau Jawa."
      },
      {
        "question": "Tarian perang ksatria Maluku di mana para pria mengenakan busana serba merah memegang parang tajam dan perisai salawaku adalah?",
        "options": [
          "Tari Saman",
          "Tari Cakalele",
          "Tari Piring",
          "Tari Tor-tor"
        ],
        "correctIndex": 1,
        "explanation": "Tari Cakalele diiringi tabuhan tifa cepat dan tiupan terompet kerang laut yang membakar nyali para pejuang."
      },
      {
        "question": "Perisai kayu ramping panjang khas Maluku yang dihiasi tatahan kulit kerang mutiara penolak serangan musuh disebut?",
        "options": [
          "Talawang",
          "Salawaku",
          "Kurambiak",
          "Tameng"
        ],
        "correctIndex": 1,
        "explanation": "Salawaku dipegang di tangan kiri penari Cakalele sebagai lambang perlindungan dan keteguhan iman."
      },
      {
        "question": "Alat musik tiup tradisional Maluku yang dibuat dari cangkang kerang laut besar dengan lubang tiup di ujungnya dinamakan?",
        "options": [
          "Suling",
          "Tahuri (Korno)",
          "Terompet",
          "Pupuik"
        ],
        "correctIndex": 1,
        "explanation": "Tahuri ditiup oleh para tetua kampung untuk mengumpulkan warga, memberi tanda bahaya laut, atau membuka upacara adat."
      },
      {
        "question": "Tradisi sumpah persaudaraan dan ikatan janji sehidup semati antardesa berlainan agama di Maluku untuk hidup rukun damai adalah?",
        "options": [
          "Pela Gandong",
          "Bakar Batu",
          "Tiwah",
          "Siri' Na Pacce"
        ],
        "correctIndex": 0,
        "explanation": "Pela Gandong mengajarkan bahwa perbedaan keyakinan tidak boleh merusak rasa persaudaraan kandung antarsesama anak negeri."
      },
      {
        "question": "Kearifan lokal masyarakat Maluku dan Papua berupa larangan memanen hasil laut atau hasil kebun selama periode tertentu agar ekosistem pulih disebut?",
        "options": [
          "Tana Ulen",
          "Sasi",
          "Subak",
          "Larung"
        ],
        "correctIndex": 1,
        "explanation": "Hukum adat Sasi memastikan ikan laut, teripang, dan buah-buahan dapat berkembang biak melimpah sebelum dipanen bersama."
      },
      {
        "question": "Kue cemilan kering tradisional berbahan pati sagu yang dicetak padat dalam lempengan tanah liat dan tahan berbulan-bulan adalah?",
        "options": [
          "Bika Ambon",
          "Sagu Lempeng",
          "Kue Cucur",
          "Roti Canai"
        ],
        "correctIndex": 1,
        "explanation": "Sagu Lempeng merupakan bekal wajib para nelayan dan penjelajah rimba Maluku-Papua karena sangat mengenyangkan."
      },
      {
        "question": "Hidangan sup ikan segar khas Banda Neira yang dibumbui perasan air buah pala matang dan cabai dengan rasa asam pedas menyegarkan adalah?",
        "options": [
          "Rawon",
          "Ikan Kuah Pala Banda",
          "Coto",
          "Gudeg"
        ],
        "correctIndex": 1,
        "explanation": "Pala segar memberi kehangatan tubuh dan aroma wangi khas yang menjadi santapan jamuan para pembesar kesultanan."
      },
      {
        "question": "Perahu perang tradisional bertiang banyak yang digunakan para ksatria Kesultanan Ternate dan Tidore mendayung cepat di lautan adalah?",
        "options": [
          "Kapal Pinisi",
          "Perahu Kora-Kora",
          "Perahu Jukung",
          "Perahu Mayang"
        ],
        "correctIndex": 1,
        "explanation": "Kora-Kora digerakkan oleh ratusan pendayung serentak diiringi tabuhan genta dan tifa pengobar semangat armada Maluku."
      },
      {
        "question": "Kerajaan Islam kembar yang tersohor di Maluku Utara penghasil cengkih terbesar yang memiliki persaingan sejarah memikat adalah?",
        "options": [
          "Kesultanan Ternate dan Kesultanan Tidore",
          "Gowa dan Tallo",
          "Kutai dan Banjar",
          "Samudera Pasai dan Malaka"
        ],
        "correctIndex": 0,
        "explanation": "Ternate dan Tidore menguasai armada laut yang disegani armada penjelajah Portugis, Spanyol, dan Belanda pada abad ke-16."
      },
      {
        "question": "Kain tenun ikat khas Maluku Tenggara Barat yang ditenun halus dengan motif panah, perahu, dan binatang laut adalah?",
        "options": [
          "Tenun Tanimbar",
          "Ulos",
          "Songket",
          "Batik"
        ],
        "correctIndex": 0,
        "explanation": "Tenun Tanimbar memiliki warna dominan hitam, merah tua, dan cokelat tanah yang memancarkan kewibawaan."
      },
      {
        "question": "Mahkota tradisional kepala suku Papua yang dihiasi kombinasi bulu burung kasuari tegak dan bulu cendrawasih melambangkan?",
        "options": [
          "Kekayaan materi",
          "Kepemimpinan bijak dan keberanian ksatria pelindung suku",
          "Hobi berburu",
          "Usia tua"
        ],
        "correctIndex": 1,
        "explanation": "Mahkota bulu burung kasuari hanya boleh disematkan kepada pemimpin adat yang telah teruji membela sukunya."
      },
      {
        "question": "Festival Danau di Papua yang menampilkan tradisi menangkap ikan bersama menggunakan perahu jaring di kaki bukit Teletubbies adalah?",
        "options": [
          "Festival Danau Sentani",
          "Festival Danau Toba",
          "Festival Danau Poso",
          "Festival Danau Matano"
        ],
        "correctIndex": 0,
        "explanation": "Danau Sentani dihiasi oleh 22 pulau kecil yang masing-masing memiliki tarian dan kesenian adat yang memikat."
      },
      {
        "question": "Alat musik petik tradisional suku Dani Papua berbahan sebilah bambu berlubang yang dipetik kawat serat rotannya adalah?",
        "options": [
          "Sape'",
          "Krombi",
          "Kolintang",
          "Tahuri"
        ],
        "correctIndex": 1,
        "explanation": "Krombi dimainkan di dalam rumah honai untuk mengiringi nyanyian ratapan dan doa permohonan hujan."
      },
      {
        "question": "Tradisi memotong ruas jari tangan suku Dani sebagai wujud duka cita mendalam atas kepergian anggota keluarga tercinta disebut?",
        "options": [
          "Iki Palek",
          "Tiwah",
          "Ma'nene",
          "Ngaben"
        ],
        "correctIndex": 0,
        "explanation": "Tradisi Iki Palek melambangkan rasa sakit fisik yang tak sebanding dengan pedihnya kehilangan orang yang dikasihi."
      },
      {
        "question": "Lukisan purba cadas di tebing Danau Sentani dan Raja Ampat yang dibuat dengan pewarna alami getah merah pohon menggambarkan?",
        "options": [
          "Peta bintang dan binatang buruan prasejarah",
          "Rangkaian bunga",
          "Kota modern",
          "Tulisan huruf alfabet"
        ],
        "correctIndex": 0,
        "explanation": "Situs cadas Misool Raja Ampat membuktikan peradaban bahari manusia purba telah menjelajahi Papua sejak 10.000 tahun silam."
      },
      {
        "question": "Perkebunan pala tertua di dunia yang masih produktif menghasilkan biji pala terbaik sejak abad ke-16 terletak di?",
        "options": [
          "Kepulauan Banda Neira",
          "Pulau Seram",
          "Pulau Buru",
          "Kepulauan Aru"
        ],
        "correctIndex": 0,
        "explanation": "Pohon pala Banda tumbuh subur di bawah naungan pohon kenari raksasa yang melindungi tanaman dari terpaan angin laut kencang."
      },
      {
        "question": "Pesta adat bakar batu di pegunungan tengah Papua biasanya menggunakan daging utama yaitu?",
        "options": [
          "Daging sapi",
          "Babi hutan ternak (Wam) dan umbi keladi",
          "Daging kambing",
          "Ikan salmon"
        ],
        "correctIndex": 1,
        "explanation": "Dalam budaya pegunungan Papua, babi (wam) memiliki nilai mas kawin dan kehormatan perdamaian tertinggi."
      },
      {
        "question": "Pulau berpasir putih di dekat Manokwari Papua Barat yang menjadi saksi pendaratan pertama dua misionaris penyebar Injil Ottow dan Geissler tahun 1855 adalah?",
        "options": [
          "Pulau Mansinam",
          "Pulau Biak",
          "Pulau Numfor",
          "Pulau Yapen"
        ],
        "correctIndex": 0,
        "explanation": "Setiap tanggal 5 Februari, ribuan masyarakat dari seluruh pelosok Papua berziarah ke Pulau Mansinam memperingati Hari Pekabaran Injil."
      },
      {
        "question": "Satwa laut mamalia pemakan rumput laut yang hidup dilindungi di perairan pesisir Kepulauan Raja Ampat dan Maluku adalah?",
        "options": [
          "Lumba-lumba",
          "Dugong (Putri Duyung)",
          "Paus Biru",
          "Singa Laut"
        ],
        "correctIndex": 1,
        "explanation": "Dugong hidup damai merumput di padang lamun dangkal dan dijaga kelestariannya melalui hukum adat Sasi laut."
      },
      {
        "question": "Pohon sagu (Metroxylon sagu) memiliki peran luar biasa dalam kehidupan masyarakat Maluku dan Papua karena?",
        "options": [
          "Hanya bisa dijadikan kayu bakar",
          "Satu pohon menghasilkan ratusan kilogram pati makanan dan pelepahnya untuk atap rumah",
          "Hanya tumbuh di gurun pasir",
          "Tidak tahan air"
        ],
        "correctIndex": 1,
        "explanation": "Pohon sagu adalah pohon kehidupan; batangnya menghasilkan tepung makanan bergizi dan daunnya dianyam menjadi atap rumah sejuk."
      },
      {
        "question": "Seni bela diri tombak kayu dan perisai yang ditampilkan dalam upacara persahabatan pemuda suku Biak Papua dinamakan?",
        "options": [
          "Tari Perang Wor",
          "Tari Caci",
          "Tari Mandau",
          "Silat"
        ],
        "correctIndex": 0,
        "explanation": "Upacara Wor Biak merupakan ritual siklus kehidupan anak manusia sejak lahir, beranjak remaja, hingga dinobatkan menjadi ksatria."
      },
      {
        "question": "Hutan bakau mangrove terluas dan terlengkap di Indonesia yang menjadi benteng pertahanan alami pesisir selatan Papua terletak di?",
        "options": [
          "Taman Nasional Lorentz (Asmat)",
          "Taman Nasional Baluran",
          "Taman Nasional Bromo",
          "Kepulauan Seribu"
        ],
        "correctIndex": 0,
        "explanation": "Taman Nasional Lorentz ditetapkan UNESCO sebagai Situs Warisan Dunia karena memiliki bentang alam terlengkap dari puncak salju hingga laut mangrove."
      }
    ],
    "imageQuizzes": [
      {
        "question": "Burung surga Papua dengan bulu ekor mengurai kuning keemasan yang sangat anggun ini bernama?",
        "imageSvg": "burung_cendrawasih",
        "options": [
          "Burung Cendrawasih",
          "Burung Kasuari",
          "Burung Enggang",
          "Burung Jalak"
        ],
        "correctIndex": 0,
        "explanation": "Tepat! Cendrawasih dijuluki burung surga karena keindahan tariannya saat memikat pasangan di atas dahan pohon tinggi.",
        "imageUrl": "assets/images/quiz/quiz_burung_cendrawasih.jpg"
      },
      {
        "question": "Rumah adat suku pegunungan Papua beratap jerami tebal berbentuk kubah jamur penghangat udara dingin adalah?",
        "imageSvg": "rumah_honai",
        "options": [
          "Rumah Honai",
          "Rumah Ebai",
          "Rumah Rumsram",
          "Rumah Karapao"
        ],
        "correctIndex": 0,
        "explanation": "Benar! Honai dirancang melingkar tanpa jendela dengan perapian di tengah agar hawa pegunungan tetap hangat.",
        "imageUrl": "assets/images/quiz/quiz_rumah_honai.jpg"
      },
      {
        "question": "Tas anyaman serat akar dan kulit pohon khas Papua yang digantung di kepala untuk membawa hasil bumi adalah?",
        "imageSvg": "tas_noken",
        "options": [
          "Tas Noken",
          "Tas Anyam Rotan",
          "Tas Pandan",
          "Tas Goni"
        ],
        "correctIndex": 0,
        "explanation": "Hebat! Noken diajarkan turun-temurun dari ibu kepada anak perempuannya sebagai simbol kedewasaan.",
        "imageUrl": "assets/images/quiz/quiz_tas_noken.jpg"
      },
      {
        "question": "Alat musik tabuh perkusi kayu bulat berbalut kulit rusa dengan ukiran khas suku Asmat Papua adalah?",
        "imageSvg": "alat_tifa",
        "options": [
          "Tifa Papua",
          "Gendang Sunda",
          "Rebana Melayu",
          "Marawis"
        ],
        "correctIndex": 0,
        "explanation": "Tepat sekali! Tifa adalah detak jantung musik Papua yang mengiringi tarian adat dan upacara perdamaian.",
        "imageUrl": "assets/images/quiz/quiz_alat_tifa.jpg"
      },
      {
        "question": "Gugusan pulau karang hijau zamrud yang menjulang di atas air laut biru jernih di Papua Barat ini adalah?",
        "imageSvg": "raja_ampat",
        "options": [
          "Kepulauan Raja Ampat",
          "Danau Sentani",
          "Teluk Triton",
          "Pantai Base G"
        ],
        "correctIndex": 0,
        "explanation": "Sempurna! Gugusan karst karang Wayag dan Piaynemo di Raja Ampat adalah mahakarya alam terindah di dunia.",
        "imageUrl": "assets/images/quiz/quiz_raja_ampat.jpg"
      }
    ],
    "matchingSteps": [
      {
        "level": "easy",
        "levelName": "🟢 Tahap Easy (3 Pasangan)",
        "instruction": "Pasangkan Ikon Budaya Papua dengan Maknanya!",
        "pairs": [
          {
            "item": "Tas Noken Serat Kayu",
            "match": "Simbol Kasih Ibu & Kesuburan"
          },
          {
            "item": "Papeda Makanan Sagu",
            "match": "Makanan Pokok Kenyal Bergizi"
          },
          {
            "item": "Rumah Honai Jamur",
            "match": "Rumah Hangat Suku Pegunungan"
          }
        ],
        "explanation": "Pintar sekali! Ikon-ikon budaya Papua menunjukkan kedekatan harmonis masyarakat dengan alam sekitarnya!"
      },
      {
        "level": "normal",
        "levelName": "🟡 Tahap Normal (4 Pasangan)",
        "instruction": "Pasangkan Kesenian & Tradisi Papua dengan Karakternya!",
        "pairs": [
          {
            "item": "Tari Yospan Ceria",
            "match": "Tarian Persahabatan Pemuda"
          },
          {
            "item": "Seni Pahat Kayu Asmat",
            "match": "Penghormatan Leluhur di Patung Bisj"
          },
          {
            "item": "Pesta Bakar Batu (Barapen)",
            "match": "Ritual Syukuran & Pesta Perdamaian"
          },
          {
            "item": "Busana Tradisional Koteka",
            "match": "Pakaian Adat Pria Suku Dani"
          }
        ],
        "explanation": "Bagus sekali! Tradisi Papua penuh semangat persaudaraan dan toleransi yang sangat kokoh!"
      },
      {
        "level": "hard",
        "levelName": "🔴 Tahap Hard (5 Pasangan)",
        "instruction": "Tantangan Pamungkas: Pasangkan Mahakarya Papua dengan Filosofi Luhurnya!",
        "pairs": [
          {
            "item": "Burung Cendrawasih Emas",
            "match": "Mahkota Kemuliaan Satwa Surga"
          },
          {
            "item": "Tabuhan Irama Tifa",
            "match": "Detak Jantung Musik Pemersatu"
          },
          {
            "item": "Tas Tradisional Noken",
            "match": "Rahim Kehidupan & Cinta Keluarga"
          },
          {
            "item": "Danau Sentani Jayapura",
            "match": "Sumber Nafkah Nelayan Ikan Tawar"
          },
          {
            "item": "Karang Bahari Raja Ampat",
            "match": "Pusat Keanekaragaman Laut Dunia"
          }
        ],
        "explanation": "SELESAI LENGKAP! Kamu telah membuktikan dirimu sebagai Ksatria Pelindung Agung Budaya Nusantara!"
      }
    ]
  },
  {
    "id": "bali",
    "name": "Bali / Nusra",
    "subtitle": "Pulau Dewata, Candi Bentar, Danau Kelimutu, & Pura Agung",
    "unlockedDefault": false,
    "pin": {
      "x": 52,
      "y": 76
    },
    "landmarkImg": "assets/images/landmark_bali.png",
    "npc": {
      "title": "Penjaga Budaya Bali & Nusra",
      "greeting": "Om Swastyastu! Selamat datang di puncak petualangan Pulau Dewata dan Nusa Tenggara, tanah kesucian pura, seni tari luhur, dan komodo purba!",
      "pairImg": "assets/images/npc_pair_bali.png"
    },
    "artifact": {
      "id": "barong_bali",
      "name": "Topeng Barong Ket Sakral",
      "lore": "Topeng Barong perlambang kekuatan kebajikan (Dharma) penumpas angkara murka (Adharma) dalam kosmologi Bali.",
      "icon": "🎭"
    },
    "badge": {
      "id": "badge_bali",
      "name": "Harmoni Seni & Dewata",
      "desc": "Menguasai filosofi Tri Hita Karana, tarian kecak sakral, dan keagungan seni budaya Bali.",
      "icon": "🌺"
    },
    "rewardPoints": 300,
    "mcqQuizzes": [
      {
        "question": "Pura terbesar dan tersuci di Bali yang terletak di lereng Gunung Agung dan dijuluki sebagai 'Pura Ibu' (Mother Temple) adalah?",
        "options": [
          "Pura Tanah Lot",
          "Pura Agung Besakih",
          "Pura Uluwatu",
          "Pura Tirta Empul"
        ],
        "correctIndex": 1,
        "explanation": "Pura Besakih merupakan pusat peribadatan utama umat Hindu di Bali yang terdiri dari 86 kompleks pura peninggalan abad ke-10."
      },
      {
        "question": "Pura indah di tepi Danau Beratan Bedugul yang tampak mengapung di atas air dan gambarnya diabadikan pada uang kertas Rp50.000 adalah?",
        "options": [
          "Pura Tanah Lot",
          "Pura Ulun Danu Beratan",
          "Pura Taman Ayun",
          "Pura Goa Lawah"
        ],
        "correctIndex": 1,
        "explanation": "Pura Ulun Danu dipersembahkan untuk Dewi Danu sebagai penguasa air dan kesuburan persawahan masyarakat Bali."
      },
      {
        "question": "Sistem irigasi persawahan berterasering tradisional di Bali yang sarat filosofi Tri Hita Karana dan diakui UNESCO sebagai Warisan Dunia adalah?",
        "options": [
          "Terasering",
          "Subak",
          "Sasi",
          "Pranata Mangsa"
        ],
        "correctIndex": 1,
        "explanation": "Subak mengatur pembagian aliran air secara adil dan demokratis serta berlandaskan keharmonisan spiritual antara manusia, alam, dan Tuhan."
      },
      {
        "question": "Tarian persembahan selamat datang di Bali di mana para penari putri cantik menaburkan bunga warna-warni dari cawan perak adalah?",
        "options": [
          "Tari Kecak",
          "Tari Pendet",
          "Tari Barong",
          "Tari Legong"
        ],
        "correctIndex": 1,
        "explanation": "Tari Pendet awalnya merupakan tarian pemujaan di pura sebelum berkembang menjadi tarian penyambutan tamu terhormat."
      },
      {
        "question": "Tarian kolosal tanpa instrumen gamelan di mana puluhan pria bertelanjang dada duduk melingkar menyerukan irama 'cak-cak-cak' adalah?",
        "options": [
          "Tari Saman",
          "Tari Kecak (Uluwatu)",
          "Tari Barong",
          "Tari Sanghyang"
        ],
        "correctIndex": 1,
        "explanation": "Tari Kecak mengangkat kisah epos Ramayana saat pasukan kera pimpinan Hanoman menolong Sri Rama melawan Rahwana."
      },
      {
        "question": "Tarian drama sakral Bali yang menceritakan pertempuran abadi antara kebajikan (Dharma) melawan kejahatan (Adharma) adalah?",
        "options": [
          "Tari Pendet",
          "Tari Barong dan Rangda",
          "Tari Gambuh",
          "Tari Topeng"
        ],
        "correctIndex": 1,
        "explanation": "Barong berwujud singa pelindung kebaikan, sedangkan Rangda berwujud raksasa bertaring panjang lambang angkara murka."
      },
      {
        "question": "Upacara pembakaran jenazah adat umat Hindu di Bali untuk mengembalikan unsur Panca Mahabhuta ke alam semesta dinamakan?",
        "options": [
          "Tiwah",
          "Ngaben (Pelebon)",
          "Rambu Solo'",
          "Melasti"
        ],
        "correctIndex": 1,
        "explanation": "Ngaben menggunakan replika lembu hitam atau wadah tumpang bertingkat (Bade) yang diarak menuju tempat kremasi suci."
      },
      {
        "question": "Tahun Baru Saka yang dirayakan umat Hindu di Bali dengan menghentikan seluruh aktivitas duniawi selama 24 jam penuh disebut?",
        "options": [
          "Hari Raya Galungan",
          "Hari Raya Nyepi",
          "Hari Raya Kuningan",
          "Saraswati"
        ],
        "correctIndex": 1,
        "explanation": "Saat Nyepi, seluruh pulau hening dalam pelaksanaan Catur Brata Penyepian (tidak menyalakan api, tidak bekerja, tidak bepergian, tidak bersenang-senang)."
      },
      {
        "question": "Boneka patung raksasa berwajah seram simbol sifat buruk (Buta Kala) yang diarak keliling desa pada malam Pengerupukan sebelum Nyepi adalah?",
        "options": [
          "Ondel-ondel",
          "Ogoh-Ogoh",
          "Si Gale-gale",
          "Barongan"
        ],
        "correctIndex": 1,
        "explanation": "Setelah diarak meriah, patung Ogoh-Ogoh dibakar sebagai simbol pemusnahan sifat buruk dan pensucian alam semesta."
      },
      {
        "question": "Hari raya peringatan kemenangan kebajikan (Dharma) melawan kejahatan (Adharma) yang ditandai dengan pemasangan tiang penjor janur di jalan adalah?",
        "options": [
          "Hari Raya Nyepi",
          "Hari Raya Galungan",
          "Hari Raya Saraswati",
          "Pagerwesi"
        ],
        "correctIndex": 1,
        "explanation": "Tiang bambu lengkung berhias janur kuning (Penjor) melambangkan Gunung Agung dan ungkapan terima kasih atas kemakmuran bumi."
      },
      {
        "question": "Kain tenun ikat ganda langka dari Desa Tenganan Pegringsingan Karangasem yang proses pembuatannya memakan waktu bertahun-tahun adalah?",
        "options": [
          "Kain Songket",
          "Kain Tenun Gringsing",
          "Kain Endek",
          "Kain Poleng"
        ],
        "correctIndex": 1,
        "explanation": "Gringsing adalah satu-satunya tenun ikat ganda di Indonesia, dipercaya memiliki kekuatan magis penangkal marabahaya dan penyakit."
      },
      {
        "question": "Kain bermotif kotak catur hitam-putih yang kerap dililitkan pada pohon besar, patung pura, dan penabuh gamelan di Bali disebut?",
        "options": [
          "Kain Songket",
          "Kain Poleng",
          "Kain Endek",
          "Kain Prada"
        ],
        "correctIndex": 1,
        "explanation": "Kain Poleng melambangkan konsep filosofi 'Rwa Bhineda' (dua hal yang berlawanan di dunia: baik-buruk, siang-malam yang harus seimbang)."
      },
      {
        "question": "Wadah anyaman janur kelapa kecil berisi bunga harum warna-warni yang dipersembahkan setiap hari sebagai wujud syukur umat Hindu Bali adalah?",
        "options": [
          "Banten Pejati",
          "Canang Sari",
          "Dupa",
          "Tirta"
        ],
        "correctIndex": 1,
        "explanation": "Canang Sari diletakkan di pelataran rumah, pura, dan persimpangan jalan bersama sebatang dupa harum yang menyala."
      },
      {
        "question": "Pura laut yang berdiri kokoh di atas bongkahan batu karang besar di tengah deburan ombak pantai Tabanan Bali adalah?",
        "options": [
          "Pura Uluwatu",
          "Pura Tanah Lot",
          "Pura Lempuyang",
          "Pura Tirta Empul"
        ],
        "correctIndex": 1,
        "explanation": "Pura Tanah Lot didirikan oleh Dang Hyang Nirartha pada abad ke-16 dan menjadi magnet matahari terbenam paling ikonik di dunia."
      },
      {
        "question": "Pura di puncak tebing karang terjal setinggi 97 meter di ujung barat daya Bali yang dihuni kawanan kera hutan adalah?",
        "options": [
          "Pura Tanah Lot",
          "Pura Luhur Uluwatu",
          "Pura Goa Gajah",
          "Pura Penataran Sasih"
        ],
        "correctIndex": 1,
        "explanation": "Di pelataran luar tebing Pura Uluwatu, setiap sore dipentaskan pertunjukan Tari Kecak spektakuler berlatar samudera Hindia."
      },
      {
        "question": "Pura mata air suci di Gianyar Bali di mana umat dan wisatawan melakukan ritual penyucian diri (Melukat) di pancuran air jernih adalah?",
        "options": [
          "Pura Besakih",
          "Pura Tirta Empul (Tampak Siring)",
          "Pura Taman Ayun",
          "Pura Gunung Kawi"
        ],
        "correctIndex": 1,
        "explanation": "Mata air Tirta Empul dipercaya diciptakan oleh Dewa Indra sebagai penawar racun dan pembersih jiwa raga manusia."
      },
      {
        "question": "Pintu gerbang pura megah di Karangasem yang dijuluki 'The Gate of Heaven' dengan latar belakang pemandangan megah Gunung Agung adalah?",
        "options": [
          "Candi Bentar Pura Lempuyang",
          "Pura Goa Lawah",
          "Pura Batukaru",
          "Pura Ulun Danu"
        ],
        "correctIndex": 0,
        "explanation": "Pura Lempuyang Luhur berdiri di lereng Gunung Lempuyang sebagai benteng timur penjaga pulau Bali."
      },
      {
        "question": "Satwa endemik Pulau Bali berbulu putih bersih dengan jambul indah dan lingkar mata biru terang yang dilindungi di Taman Nasional Bali Barat adalah?",
        "options": [
          "Burung Cendrawasih",
          "Burung Jalak Bali (Leucopsar rothschildi)",
          "Burung Maleo",
          "Burung Enggang"
        ],
        "correctIndex": 1,
        "explanation": "Jalak Bali atau Curik Bali merupakan burung pengicau langka yang menjadi maskot fauna resmi Provinsi Bali."
      },
      {
        "question": "Kuliner khas Bali berupa ayam atau bebek utuh yang dibumbui rempah Base Genep lalu dibungkus pelepah pinang dan dipanggang sekam berjam-jam adalah?",
        "options": [
          "Sate Lilit",
          "Ayam Betutu",
          "Ayam Taliwang",
          "Lawar"
        ],
        "correctIndex": 1,
        "explanation": "Proses memasak Betutu yang lama menghasilkan daging yang empuk meresap hingga ke tulang dengan rasa pedas rempah gurih."
      },
      {
        "question": "Sate khas Bali yang terbuat dari cincangan daging ikan laut berbumbu santan dan parutan kelapa yang dililitkan pada batang serai adalah?",
        "options": [
          "Sate Madura",
          "Sate Lilit",
          "Sate Maranggi",
          "Sate Padang"
        ],
        "correctIndex": 1,
        "explanation": "Batang serai memberi aroma wangi segar saat sate lilit dipanggang di atas bara arang tempurung kelapa."
      },
      {
        "question": "Sambal mentah segar khas Bali yang dibuat dari rajangan bawang merah, serai, cabai rawit, terasi bakar, dan kucuran minyak kelapa panas adalah?",
        "options": [
          "Sambal Terasi",
          "Sambal Matah",
          "Sambal Roa",
          "Sambal Bajak"
        ],
        "correctIndex": 1,
        "explanation": "Matah berarti mentah dalam bahasa Bali; sambal ini menyajikan kerenyahan bawang segar yang harum menggugah selera."
      },
      {
        "question": "Hidangan tradisional Bali berupa campuran sayuran kacang panjang, parutan kelapa berbumbu rempah, dan cincangan daging adalah?",
        "options": [
          "Urap",
          "Lawar Bali",
          "Karedok",
          "Pecel"
        ],
        "correctIndex": 1,
        "explanation": "Lawar memiliki berbagai variasi seperti Lawar Kuwir (bebek), Lawar Nangka, dan Lawar Ayam."
      },
      {
        "question": "Kadal raksasa purba pemakan daging terbesar di dunia yang hanya hidup di Kepulauan Nusa Tenggara Timur adalah?",
        "options": [
          "Biawak Air",
          "Komodo (Varanus komodoensis)",
          "Iguana",
          "Buaya Muara"
        ],
        "correctIndex": 1,
        "explanation": "Komodo dapat tumbuh hingga panjang 3 meter dan memiliki kelenjar bisa mematikan untuk melumpuhkan mangsanya."
      },
      {
        "question": "Taman Nasional yang diakui UNESCO sebagai Situs Warisan Dunia dan Tujuh Keajaiban Alam Baru habitat asli satwa purba komodo adalah?",
        "options": [
          "Taman Nasional Ujung Kulon",
          "Taman Nasional Komodo",
          "Taman Nasional Bunaken",
          "Taman Nasional Way Kambas"
        ],
        "correctIndex": 1,
        "explanation": "Taman Nasional Komodo mencakup tiga pulau utama yaitu Pulau Komodo, Pulau Rinca, dan Pulau Padar."
      },
      {
        "question": "Alat musik petik dawai tradisional khas Pulau Rote Nusa Tenggara Timur yang memiliki wadah resonansi dari anyaman daun lontar adalah?",
        "options": [
          "Sape'",
          "Sasando",
          "Kolintang",
          "Kacapi"
        ],
        "correctIndex": 1,
        "explanation": "Sasando berasal dari kata 'sasandu' yang berarti bergetar merdu, dimainkan dengan memetik dawai melingkar di tengah daun lontar."
      },
      {
        "question": "Desa adat tradisional di Pulau Flores Nusa Tenggara Timur yang memiliki 7 rumah kerucut bertingkat lima di atas awan adalah?",
        "options": [
          "Desa Sade",
          "Desa Wae Rebo (Mbaru Niang)",
          "Desa Penglipuran",
          "Desa Tenganan"
        ],
        "correctIndex": 1,
        "explanation": "Wae Rebo dianugerahi UNESCO Award of Excellence berkat pelestarian arsitektur rumah kerucut Mbaru Niang setinggi 15 meter."
      },
      {
        "question": "Desa tradisional terbersih di dunia yang terletak di Kabupaten Bangli Bali dengan tata ruang arsitektur seragam dan lorong bambu asri adalah?",
        "options": [
          "Desa Tenganan",
          "Desa Penglipuran",
          "Desa Trunyan",
          "Desa Celuk"
        ],
        "correctIndex": 1,
        "explanation": "Penglipuran melarang kendaraan bermotor masuk ke dalam desa dan menjunjung tinggi kelestarian hutan bambu leluhur."
      },
      {
        "question": "Danau kawah gunung berapi di Pulau Flores Nusa Tenggara Timur yang airnya dapat berubah menjadi tiga warna berbeda secara alami adalah?",
        "options": [
          "Danau Toba",
          "Danau Tiga Warna Kelimutu",
          "Danau Batur",
          "Danau Segara Anak"
        ],
        "correctIndex": 1,
        "explanation": "Danau Kelimutu memiliki kawah Tiwu Ata Bupu (merah/putih), Tiwu Ko'o Fai Nuwa Muri (hijau/biru), dan Tiwu Ata Polo (hitam/cokelat)."
      },
      {
        "question": "Tarian perang ksatria Manggarai Flores di mana dua pria saling bertarung menguji ketangkasan mencambuk dengan pecut kulit kerbau dan menangkis perisai adalah?",
        "options": [
          "Tari Caci",
          "Tari Cakalele",
          "Tari Mandau",
          "Tari Kabasaran"
        ],
        "correctIndex": 0,
        "explanation": "Tari Caci melambangkan kejantanan, sportivitas, dan kedewasaan pemuda yang dilakukan dengan saling menghormati."
      },
      {
        "question": "Tradisi adu lempar lembing tombak kayu di atas kuda pacuan kencang yang dilakukan para ksatria padang rumput Pulau Sumba adalah?",
        "options": [
          "Pacu Jawi",
          "Pasola Sumba",
          "Makepung",
          "Karapan Sapi"
        ],
        "correctIndex": 1,
        "explanation": "Pasola digelar untuk merayakan datangnya musim tanam dan panen cacing laut (Nyale) yang melimpah."
      },
      {
        "question": "Kain tenun ikat tradisional Pulau Sumba yang terkenal di galeri seni internasional dengan motif kuda gagah, rusa, dan pohon tengkorak adalah?",
        "options": [
          "Tenun Ikat Sumba (Hinggi)",
          "Songket",
          "Ulos",
          "Sasirangan"
        ],
        "correctIndex": 0,
        "explanation": "Tenun Sumba diwarnai menggunakan akar mengkudu dan lumpur alami yang membutuhkan proses pewarnaan berbulan-bulan."
      },
      {
        "question": "Tradisi balapan sepasang kerbau hias bertanduk emas di lintasan sawah kering di Kabupaten Jembrana Bali dinamakan?",
        "options": [
          "Pacu Jawi",
          "Makepung",
          "Karapan Sapi",
          "Pasola"
        ],
        "correctIndex": 1,
        "explanation": "Makepung menampilkan joki cilik gagah berani yang mengendalikan pedati kerbau dengan kecepatan tinggi diiringi gamelan jegog."
      },
      {
        "question": "Kuliner ayam bakar pedas manis khas Pulau Lombok yang dibumbui terasi bakar, cabai merah, dan perasan jeruk limau adalah?",
        "options": [
          "Ayam Betutu",
          "Ayam Taliwang",
          "Ayam Pop",
          "Ayam Tangkap"
        ],
        "correctIndex": 1,
        "explanation": "Ayam Taliwang menggunakan ayam kampung muda yang dibakar di atas arang disajikan bersama plecing kangkung Lombok."
      },
      {
        "question": "Sayuran khas Lombok berupa kangkung air segar yang disajikan dengan sambal tomat terasi pedas, kacang tanah goreng, dan tauge adalah?",
        "options": [
          "Karedok",
          "Plecing Kangkung",
          "Urap",
          "Gado-gado"
        ],
        "correctIndex": 1,
        "explanation": "Kangkung Lombok memiliki batang besar yang sangat renyah dan empuk saat disantap hangat."
      },
      {
        "question": "Desa tradisional suku Sasak di Lombok Tengah yang rumah adatnya (Bale Tani) berlantai tanah lempung yang dilumuri kotoran kerbau kering adalah?",
        "options": [
          "Desa Sade",
          "Desa Sukarara",
          "Desa Banyumulek",
          "Desa Penglipuran"
        ],
        "correctIndex": 0,
        "explanation": "Kotoran kerbau kering justru membuat lantai tanah desa Sade tidak berdebu, sejuk, dan terhindar dari gigitan serangga."
      },
      {
        "question": "Desa adat di tepi Danau Batur Kintamani Bali yang memiliki tradisi unik membaringkan jenazah di bawah pohon taru menyan tanpa dikubur atau dibakar adalah?",
        "options": [
          "Desa Trunyan",
          "Desa Penglipuran",
          "Desa Tenganan",
          "Desa Ubud"
        ],
        "correctIndex": 0,
        "explanation": "Pohon Taru Menyan mengeluarkan aroma wangi semerbak alami yang menetralkan segala bau di sekitar pemakaman Trunyan."
      },
      {
        "question": "Ansambel musik tradisional Bali berbahan bambu raksasa yang menghasilkan nada bas berat menggelegar dan menggetarkan bumi adalah?",
        "options": [
          "Gamelan Gong Kebyar",
          "Gamelan Jegog Jembrana",
          "Angklung",
          "Kolintang"
        ],
        "correctIndex": 1,
        "explanation": "Gamelan Jegog dibuat dari batang bambu petung berdiameter besar yang hanya tumbuh di hutan barat pulau Bali."
      },
      {
        "question": "Ikat kepala tradisional pria Bali yang dilipat membentuk simpul mengarah ke atas di dahi sebagai simbol pemusatan pikiran kepada Tuhan adalah?",
        "options": [
          "Blangkon",
          "Udeng Bali",
          "Tanjak",
          "Passapu"
        ],
        "correctIndex": 1,
        "explanation": "Udeng dikenakan saat bersembahyang di pura atau menghadiri upacara adat dengan berbagai variasi motif kain batik dan putih."
      },
      {
        "question": "Pakaian adat resmi wanita Bali berupa kebaya berenda yang dipadukan kain kamen dan diikat selendang di bagian pinggang dinamakan?",
        "options": [
          "Baju Bodo",
          "Kebaya Bali berhias Selendang Senteng",
          "Baju Kurung",
          "Baju Ta'a"
        ],
        "correctIndex": 1,
        "explanation": "Selendang di pinggang melambangkan pengikatan nafsu indrawi agar manusia selalu berperilaku santun dan berbudi luhur."
      },
      {
        "question": "Kuda tangguh berbadan padat dan berstamina tinggi asal Pulau Sumba Nusa Tenggara Timur yang terkenal sebagai kuda tunggang adalah?",
        "options": [
          "Kuda Sandalwood (Kuda Sumba)",
          "Kuda Poni",
          "Kuda Sumbawa",
          "Kuda Bima"
        ],
        "correctIndex": 0,
        "explanation": "Kuda Sandalwood dinamakan dari pohon kayu cendana (sandalwood) yang dahulu menjadi komoditas ekspor utama Pulau Sumba."
      },
      {
        "question": "Pantai berpasir merah muda langka di dunia yang terletak di dalam kawasan Taman Nasional Komodo adalah?",
        "options": [
          "Pantai Sanur",
          "Pantai Pink (Pink Beach Komodo)",
          "Pantai Kuta",
          "Pantai Senggigi"
        ],
        "correctIndex": 1,
        "explanation": "Warna merah muda berasal dari serpihan terumbu karang merah mikro Foraminifera yang bercampur dengan pasir putih lembut."
      },
      {
        "question": "Desa pusat pengrajin patung perak dan emas terbaik di Bali yang terletak di Kabupaten Gianyar adalah?",
        "options": [
          "Desa Celuk",
          "Desa Ubud",
          "Desa Mas",
          "Desa Batubulan"
        ],
        "correctIndex": 0,
        "explanation": "Pengrajin di Desa Celuk mahir membuat perhiasan filigri perak dengan ketelitian dan detail seni yang sangat tinggi."
      },
      {
        "question": "Desa di Gianyar Bali yang terkenal sebagai sentra seniman seni ukir patung kayu kelas dunia adalah?",
        "options": [
          "Desa Mas",
          "Desa Celuk",
          "Desa Batubulan",
          "Desa Sukawati"
        ],
        "correctIndex": 0,
        "explanation": "Pematung Desa Mas mengubah bongkahan kayu eboni dan cendana menjadi mahakarya patung Garuda, dewa-dewi, dan satwa."
      },
      {
        "question": "Pusat pasar seni terbesar dan tertua di Bali tempat wisatawan berbelanja cinderamata kain pantai, lukisan, dan kerajinan adalah?",
        "options": [
          "Pasar Beringharjo",
          "Pasar Seni Sukawati",
          "Pasar Klewer",
          "Pasar Tanah Abang"
        ],
        "correctIndex": 1,
        "explanation": "Pasar Sukawati didirikan sejak tahun 1980-an dan menjadi pusat denyut nadi perdagangan cinderamata khas Bali."
      },
      {
        "question": "Hutan cagar alam di Ubud Gianyar yang dihuni ratusan ekor kera ekor panjang jinak di tengah pepohonan beringin kuno adalah?",
        "options": [
          "Mandala Suci Wenara Wana (Monkey Forest Ubud)",
          "Alas Purwo",
          "Taman Ujung",
          "Tirta Gangga"
        ],
        "correctIndex": 0,
        "explanation": "Monkey Forest Ubud dikelola berdasarkan filosofi Tri Hita Karana untuk menjaga keharmonisan kera, manusia, dan pura suci."
      },
      {
        "question": "Istana air peninggalan Kerajaan Karangasem dengan kolam air jernih penuh ikan koi raksasa dan pilar batu pijakan melayang adalah?",
        "options": [
          "Tirta Gangga",
          "Taman Ayun",
          "Kerta Gosa",
          "Puri Agung"
        ],
        "correctIndex": 0,
        "explanation": "Tirta Gangga dibangun oleh Raja Karangasem tahun 1946 dan airnya bersumber dari mata air suci Rejasa."
      },
      {
        "question": "Seni bela diri tradisional khas Bali berupa pertarungan saling memukul menggunakan pelepah daun pandan berduri dan tameng rotan dinamakan?",
        "options": [
          "Tari Caci",
          "Perang Pandan (Mekare-kare)",
          "Silat",
          "Tari Mandau"
        ],
        "correctIndex": 1,
        "explanation": "Perang Pandan diadakan setiap tahun di Desa Tenganan sebagai penghormatan ksatria kepada Dewa Indra sang dewa perang."
      },
      {
        "question": "Pulau terluar di sebelah tenggara Bali yang terkenal dengan tebing curam Kelingking Beach menyerupai bentuk kepala dinosaurus T-Rex adalah?",
        "options": [
          "Nusa Lembongan",
          "Nusa Penida",
          "Nusa Ceningan",
          "Pulau Menjangan"
        ],
        "correctIndex": 1,
        "explanation": "Nusa Penida memiliki perairan laut dalam yang menjadi tempat pertemuan kawanan ikan pari manta raksasa dan ikan Mola-Mola."
      },
      {
        "question": "Ikan laut purba raksasa berbentuk bundar tanpa ekor panjang (Sunfish) yang sering muncul di perairan Nusa Penida pada bulan Juli-Oktober adalah?",
        "options": [
          "Hiu Paus",
          "Ikan Mola-Mola",
          "Pari Manta",
          "Lumba-lumba"
        ],
        "correctIndex": 1,
        "explanation": "Ikan Mola-Mola naik dari kedalaman 200 meter ke permukaan perairan Nusa Penida untuk membersihkan parasit di tubuhnya."
      },
      {
        "question": "Filosofi luhur masyarakat Bali yang mengajarkan tiga penyebab terciptanya kebahagiaan hidup sejati adalah?",
        "options": [
          "Siri' Na Pacce",
          "Tri Hita Karana",
          "Urip Iku Urup",
          "Bhinneka Tunggal Ika"
        ],
        "correctIndex": 1,
        "explanation": "Tri Hita Karana mengajarkan keharmonisan hubungan manusia dengan Tuhan (Parahyangan), manusia dengan sesama (Pawongan), dan manusia dengan alam (Palemahan)."
      }
    ],
    "imageQuizzes": [
      {
        "question": "Topeng makhluk mitologi berwajah singa dengan ornamen kaca dan emas simbol kebajikan pelindung masyarakat Bali adalah?",
        "imageSvg": "topeng_barong",
        "options": [
          "Topeng Barong Ket",
          "Topeng Rangda",
          "Topeng Celuluk",
          "Topeng Jauk"
        ],
        "correctIndex": 0,
        "explanation": "Tepat! Barong Ket adalah raja roh kebaikan yang selalu menjaga desa dari malapetaka.",
        "imageUrl": "assets/images/quiz/quiz_topeng_barong.jpg"
      },
      {
        "question": "Pura ikonik di tepi Danau Beratan Bedugul yang tampak mengapung indah di atas air dan tertera di uang kertas rupiah adalah?",
        "imageSvg": "pura_ulundanu",
        "options": [
          "Pura Ulun Danu Beratan",
          "Pura Tanah Lot",
          "Pura Besakih",
          "Pura Uluwatu"
        ],
        "correctIndex": 0,
        "explanation": "Benar! Pura Ulun Danu dipersembahkan kepada Dewi Danu sebagai dewi kesuburan air danau.",
        "imageUrl": "assets/images/quiz/quiz_pura_ulundanu.jpg"
      },
      {
        "question": "Gerbang pura khas arsitektur Bali yang menyerupai gunung terbelah dua sama simetris tanpa atap disebut?",
        "imageSvg": "gapura_candibentar",
        "options": [
          "Candi Bentar",
          "Paduraksa",
          "Kori Agung",
          "Bale Kulkul"
        ],
        "correctIndex": 0,
        "explanation": "Hebat! Candi Bentar melambangkan gerbang pembatas antara alam luar fana dengan area suci pura.",
        "imageUrl": "assets/images/quiz/quiz_gapura_candibentar.jpg"
      },
      {
        "question": "Wadah anyaman janur kecil berisi bunga harum warna-warni sebagai persembahan rasa syukur harian umat Hindu di Bali adalah?",
        "imageSvg": "canang_sari",
        "options": [
          "Canang Sari",
          "Gebogan",
          "Dupa Sari",
          "Banten Pejati"
        ],
        "correctIndex": 0,
        "explanation": "Tepat sekali! Canang Sari melambangkan pengorbanan tulus dan wujud syukur atas berkah kehidupan setiap hari.",
        "imageUrl": "assets/images/quiz/quiz_canang_sari.jpg"
      },
      {
        "question": "Motif kain catur hitam-putih khas Bali yang melambangkan keseimbangan dua unsur berlawanan di alam semesta adalah?",
        "imageSvg": "kain_poleng",
        "options": [
          "Kain Poleng",
          "Kain Endek",
          "Kain Gringsing",
          "Kain Prada"
        ],
        "correctIndex": 0,
        "explanation": "Sempurna! Kain Poleng adalah lambang filosofi Rwa Bhineda yang sangat dihormati di Bali.",
        "imageUrl": "assets/images/quiz/quiz_kain_poleng.jpg"
      }
    ],
    "matchingSteps": [
      {
        "level": "easy",
        "levelName": "🟢 Tahap Easy (3 Pasangan)",
        "instruction": "Pasangkan Simbol Budaya Bali dengan Maknanya!",
        "pairs": [
          {
            "item": "Canang Sari Wangi",
            "match": "Persembahan Syukur Harian"
          },
          {
            "item": "Sistem Subak Sawah",
            "match": "Gotong Royong Air Tani"
          },
          {
            "item": "Penjor Bambu Kuning",
            "match": "Umbul Kemakmuran Galungan"
          }
        ],
        "explanation": "Pintar! Kamu memahami makna indah di balik pernak-pernik tradisi Bali!"
      },
      {
        "level": "normal",
        "levelName": "🟡 Tahap Normal (4 Pasangan)",
        "instruction": "Pasangkan Tarian Adat Bali dengan Karakteristiknya!",
        "pairs": [
          {
            "item": "Tari Kecak Kolosal",
            "match": "Paduan Suara Tanpa Gamelan"
          },
          {
            "item": "Tari Barong & Keris",
            "match": "Pertarungan Dharma vs Adharma"
          },
          {
            "item": "Tari Pendet Lembut",
            "match": "Penyambutan Tabur Bunga"
          },
          {
            "item": "Tari Legong Kraton",
            "match": "Gerakan Mata & Jemari Anggun"
          }
        ],
        "explanation": "Hebat sekali! Seni tari Bali terkenal di seluruh dunia karena ekspresi gerak matanya yang memukau!"
      },
      {
        "level": "hard",
        "levelName": "🔴 Tahap Hard (5 Pasangan)",
        "instruction": "Tantangan Sakral: Pasangkan Upacara Adat Bali dengan Tujuannya!",
        "pairs": [
          {
            "item": "Upacara Ngaben Agung",
            "match": "Pelepas Sukma Pembakaran Jenazah"
          },
          {
            "item": "Upacara Melasti Pantai",
            "match": "Penyucian Diri & Tirta Laut"
          },
          {
            "item": "Hari Raya Nyepi Catur",
            "match": "Hening Penyucian Jagat 24 Jam"
          },
          {
            "item": "Hari Raya Galungan",
            "match": "Kemenangan Dharma atas Adharma"
          },
          {
            "item": "Tradisi Omed-omedan",
            "match": "Pelukan Guyub Pemuda Sesetan"
          }
        ],
        "explanation": "Luar biasa sempurna! Kamu telah menguasai upacara adat dan filosofi luhur Pulau Dewata Bali!"
      }
    ]
  }
]
};
