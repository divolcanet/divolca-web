const faqs = [
  {
    question: { id: "Apa itu DiVolca?", en: "What is DiVolca?" },
    answer: {
      id: "DiVolca (Dieng Volcanic Complex) adalah platform informasi geospasial yang dikembangkan oleh tim peneliti gabungan akademisi dan praktisi geofisika, vulkanologi, oseanografi, serta rekayasa perangkat lunak. Platform ini menyajikan hasil penelitian struktur bawah permukaan Pegunungan Dieng dalam bentuk visualisasi 3D, data gravity, magnetik, dan seismik, agar mudah diakses oleh publik, akademisi, maupun pihak yang berkepentingan dalam mitigasi bencana.",
      en: "DiVolca (Dieng Volcanic Complex) is a geospatial information platform developed by a team of researchers combining academics and practitioners in geophysics, volcanology, oceanography, and software engineering. The platform presents research results on the subsurface structure of the Dieng Mountains in 3D visualizations, gravity, magnetic, and seismic data, making them accessible to the public, academics, and those involved in disaster mitigation.",
    },
  },
  {
    question: { id: "Apa tujuan dibangunnya platform DiVolca?", en: "What is the purpose of the DiVolca platform?" },
    answer: {
      id: "DiVolca bertujuan menjembatani hasil riset geofisika yang kompleks dengan masyarakat umum, sehingga data struktur bawah permukaan, sejarah aktivitas vulkanik, dan potensi bahaya di kawasan Dieng dapat dipahami secara visual dan mudah diakses, sekaligus mendukung upaya mitigasi bencana di kawasan tersebut.",
      en: "DiVolca aims to bridge complex geophysical research with the general public, making subsurface structure data, volcanic activity history, and hazard potential in the Dieng area visually understandable and accessible, while supporting disaster mitigation efforts in the region.",
    },
  },
  {
    question: { id: "Apa itu Kawasan Vulkanik Dieng?", en: "What is the Dieng Volcanic Area?" },
    answer: {
      id: "Kawasan Dieng merupakan salah satu daerah vulkanik paling unik di Indonesia, berupa kompleks vulkanik aktif tipe kompleks yang tersusun atas sejumlah kerucut vulkanik, kubah lava, kawah, dan zona panas bumi. Selain memiliki nilai geologi tinggi, Dieng juga merupakan kawasan budaya dan pariwisata penting yang menyimpan kompleks candi Hindu tertua di Pulau Jawa.",
      en: "The Dieng area is one of Indonesia's most unique volcanic regions — a complex-type active volcanic complex consisting of several volcanic cones, lava domes, craters, and geothermal zones. Besides its high geological value, Dieng is also an important cultural and tourism area housing the oldest Hindu temple complex on Java.",
    },
  },
  {
    question: { id: "Di mana lokasi geografis Dataran Tinggi Dieng?", en: "Where is the Dieng Plateau located geographically?" },
    answer: {
      id: "Dataran Tinggi Dieng terletak pada elevasi sekitar 1.900–2.100 meter di atas permukaan laut, secara administratif berada di Kabupaten Wonosobo dan Kabupaten Banjarnegara, Provinsi Jawa Tengah. Koordinatnya sekitar 7,2° LS, 109,88° BT, dengan elevasi maksimum kompleks vulkanik mencapai sekitar 2.565 mdpl. Lokasinya sekitar 26 km dari Kota Wonosobo, 116 km dari Semarang, dan 130 km dari Yogyakarta.",
      en: "The Dieng Plateau is located at an elevation of approximately 1,900–2,100 meters above sea level, administratively spanning Wonosobo Regency and Banjarnegara Regency, Central Java Province. Its coordinates are approximately 7.2° S, 109.88° E, with the maximum elevation reaching about 2,565 m asl. It is about 26 km from Wonosobo, 116 km from Semarang, and 130 km from Yogyakarta.",
    },
  },
  {
    question: { id: "Bagaimana karakteristik geologi Dieng?", en: "What are the geological characteristics of Dieng?" },
    answer: {
      id: "Kompleks Vulkanik Dieng merupakan kaldera vulkanik besar hasil aktivitas vulkanik Kuarter, dengan luas sekitar 6 × 14 km dan terdiri atas lebih dari 20 kawah dan kerucut vulkanik. Produk vulkaniknya berumur Pleistosen hingga Holosen, didominasi batuan andesit dan andesit basaltik, serta memiliki kubah lava, aliran lava, kawah, danau kawah, dan manifestasi panas bumi seperti fumarola, solfatara, dan mata air panas.",
      en: "The Dieng Volcanic Complex is a large volcanic caldera formed by Quaternary volcanic activity, covering about 6 × 14 km and comprising more than 20 craters and volcanic cones. Volcanic products range from Pleistocene to Holocene in age, dominated by andesite and basaltic andesite, with lava domes, lava flows, craters, crater lakes, and geothermal manifestations such as fumaroles, solfataras, and hot springs.",
    },
  },
  {
    question: { id: "Jenis erupsi apa yang umum terjadi di Dieng?", en: "What type of eruption commonly occurs in Dieng?" },
    answer: {
      id: "Aktivitas vulkanik Dieng sebagian besar berupa erupsi freatik, yaitu letusan yang terjadi akibat interaksi air tanah dengan panas di bawah permukaan tanpa keluarnya magma secara langsung. Erupsi jenis ini umumnya terjadi di kawah-kawah aktif seperti Kawah Sileri, Kawah Timbang, dan Kawah Sikidang.",
      en: "Volcanic activity in Dieng is mostly phreatic eruptions — eruptions caused by groundwater interacting with subsurface heat without direct magma discharge. This type of eruption typically occurs at active craters such as Kawah Sileri, Kawah Timbang, and Kawah Sikidang.",
    },
  },
  {
    question: { id: "Apa peristiwa vulkanik paling mematikan di Dieng?", en: "What was the most deadly volcanic event in Dieng?" },
    answer: {
      id: "Peristiwa paling mematikan terjadi pada 20 Februari 1979, ketika pelepasan gas karbon dioksida dari Kawah Sinila dan kawasan Timbang menyebabkan sekitar 149 penduduk meninggal. Gas CO₂ yang lebih berat dari udara mengalir ke daerah rendah dan menyebabkan sesak napas hingga kematian — menjadikannya salah satu bencana gas vulkanik terbesar di Indonesia.",
      en: "The deadliest event occurred on February 20, 1979, when the release of carbon dioxide gas from Kawah Sinila and the Timbang area caused around 149 residents to die. CO₂, being heavier than air, flowed into low-lying areas and caused asphyxiation and death — making it one of the largest volcanic gas disasters in Indonesia.",
    },
  },
  {
    question: { id: "Apa aktivitas vulkanik terbaru di Dieng?", en: "What is the most recent volcanic activity in Dieng?" },
    answer: {
      id: "Kawah Sileri tercatat mengalami beberapa kali erupsi freatik pada 2017, 2018, dan 29 April 2021 yang melontarkan lumpur dan material vulkanik hingga ratusan meter dari pusat erupsi. PVMBG juga melaporkan erupsi freatik di Kawah Sileri pada Desember 2024 dan Januari 2025, berupa semburan lumpur, sedimen, dan kolom uap putih.",
      en: "Kawah Sileri recorded several phreatic eruptions in 2017, 2018, and on April 29, 2021, hurling mud and volcanic material hundreds of meters from the eruption center. PVMBG also reported phreatic eruptions at Kawah Sileri in December 2024 and January 2025, producing mud sprays, sediment, and white steam columns.",
    },
  },
  {
    question: { id: "Apa bahaya utama yang mengintai di kawasan Dieng?", en: "What are the main hazards in the Dieng area?" },
    answer: {
      id: "Bahaya utama kawasan ini tidak hanya berasal dari erupsi freatik, tetapi juga emisi gas beracun seperti karbon dioksida (CO₂) dan hidrogen sulfida (H₂S). Kawah Timbang dikenal sebagai salah satu lokasi dengan potensi emisi gas yang tinggi, sehingga masyarakat diminta menjauhi area kawah aktif.",
      en: "The main hazards in this area come not only from phreatic eruptions, but also from toxic gas emissions such as carbon dioxide (CO₂) and hydrogen sulfide (H₂S). Kawah Timbang is known as one of the locations with high gas emission potential, and people are advised to stay away from active crater areas.",
    },
  },
  {
    question: { id: "Apa saja destinasi wisata utama di kawasan Dieng?", en: "What are the main tourist destinations in the Dieng area?" },
    answer: {
      id: "Beberapa destinasi wisata geologi dan budaya utama di Dieng antara lain Kawah Sikidang, Kawah Sileri, Telaga Warna dan Telaga Pengilon, Kompleks Candi Arjuna (candi Hindu tertua di Jawa), dan Bukit Sikunir yang terkenal sebagai lokasi pengamatan matahari terbit.",
      en: "Some of the main geological and cultural tourist destinations in Dieng include Kawah Sikidang, Kawah Sileri, Telaga Warna and Telaga Pengilon, Kompleks Candi Arjuna (the oldest Hindu temple complex on Java), and Bukit Sikunir, famous as a sunrise viewing spot.",
    },
  },
  {
    question: { id: "Mengapa tanah di kawasan Dieng sangat subur?", en: "Why is the soil in the Dieng area so fertile?" },
    answer: {
      id: "Material vulkanik dari aktivitas gunung api di Dieng menghasilkan tanah yang sangat subur, sehingga kawasan ini menjadi sentra pertanian dataran tinggi yang menghasilkan kentang, kubis, wortel, carica, dan bawang daun.",
      en: "Volcanic material from Dieng's volcanic activity produces very fertile soil, making this area a highland farming center producing potatoes, cabbage, carrots, carica, and spring onions.",
    },
  },
  {
    question: { id: "Apakah Dieng memiliki potensi energi panas bumi?", en: "Does Dieng have geothermal energy potential?" },
    answer: {
      id: "Ya. Lapangan panas bumi Dieng merupakan salah satu sumber energi panas bumi penting di Indonesia dan telah dimanfaatkan untuk pembangkitan energi listrik melalui sistem geothermal.",
      en: "Yes. The Dieng geothermal field is one of Indonesia's important geothermal energy sources and has been utilized for electricity generation through geothermal systems.",
    },
  },
];

export default faqs;