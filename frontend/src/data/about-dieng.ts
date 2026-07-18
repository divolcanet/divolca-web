import sikidang from "../assets/dieng/kawah-sikidang.jpg";
import sileri from "../assets/dieng/kawah-sileri.jpg";
import telagaWarna from "../assets/dieng/telaga-warna.jpg";
import telagaPengilon from "../assets/dieng/telaga-pengilon.jpg";
import candiArjuna from "../assets/dieng/candi-arjuna.jpg";
import bukitSikunir from "../assets/dieng/bukit-sikunir.jpg";

const aboutDieng = {
  characteristics: [
    {
      title: { id: "Dataran Tinggi Vulkanik", en: "Volcanic Highland" },
      desc: {
        id: "Salah satu dataran tinggi vulkanik terbesar di Indonesia dengan suhu udara berkisar 6–20°C.",
        en: "One of Indonesia's largest volcanic highlands with air temperatures ranging from 6–20°C.",
      },
    },
    {
      title: { id: "Aktivitas Panas Bumi", en: "Geothermal Activity" },
      desc: {
        id: "Manifestasi panas bumi berupa kawah aktif, mata air panas, solfatara, dan fumarola.",
        en: "Geothermal manifestations including active craters, hot springs, solfataras, and fumaroles.",
      },
    },
    {
      title: { id: "Emisi Gas Beracun", en: "Toxic Gas Emissions" },
      desc: {
        id: "Beberapa kawah menghasilkan gas CO₂ dan H₂S yang berbahaya, terutama di Kawah Timbang.",
        en: "Several craters produce hazardous CO₂ and H₂S gases, particularly at Kawah Timbang.",
      },
    },
    {
      title: { id: "Tanah Vulkanik Subur", en: "Fertile Volcanic Soil" },
      desc: {
        id: "Material vulkanik menyuburkan tanah, menjadikan kawasan ini sentra pertanian kentang, kubis, wortel, carica, dan bawang daun.",
        en: "Volcanic material enriches the soil, making this area a center for potato, cabbage, carrot, carica, and spring onion farming.",
      },
    },
    {
      title: { id: "Potensi Panas Bumi", en: "Geothermal Potential" },
      desc: {
        id: "Lapangan panas bumi Dieng telah dimanfaatkan untuk pembangkitan energi listrik melalui sistem geothermal.",
        en: "The Dieng geothermal field has been utilized for electricity generation through geothermal systems.",
      },
    },
  ],
  eruptionTimeline: [
    {
      year: "Abad 18–20",
      title: { id: "Aktivitas Awal", en: "Early Activity" },
      desc: {
        id: "Erupsi freatik berlangsung pada kawah-kawah aktif seperti Kawah Sileri, Kawah Timbang, dan Kawah Sikidang.",
        en: "Phreatic eruptions occurred at active craters such as Kawah Sileri, Kawah Timbang, and Kawah Sikidang.",
      },
    },
    {
      year: "20 Februari 1979",
      title: { id: "Tragedi Gas Beracun", en: "Toxic Gas Tragedy" },
      desc: {
        id: "Pelepasan gas CO₂ dari Kawah Sinila dan kawasan Timbang menyebabkan kematian sekitar 149 penduduk — salah satu bencana gas vulkanik terbesar di Indonesia.",
        en: "The release of CO₂ gas from Kawah Sinila and the Timbang area caused the deaths of around 149 residents — one of the largest volcanic gas disasters in Indonesia.",
      },
    },
    {
      year: "2017",
      title: { id: "Erupsi Kawah Sileri", en: "Kawah Sileri Eruption" },
      desc: {
        id: "Beberapa letusan freatik melontarkan lumpur dan material vulkanik hingga ratusan meter dari pusat erupsi.",
        en: "Several phreatic eruptions hurled mud and volcanic material hundreds of meters from the eruption center.",
      },
    },
    {
      year: "2018",
      title: { id: "Erupsi Kawah Sileri", en: "Kawah Sileri Eruption" },
      desc: {
        id: "Kawah Sileri kembali mengalami erupsi freatik dengan semburan lumpur dan uap panas.",
        en: "Kawah Sileri experienced another phreatic eruption with sprays of mud and hot steam.",
      },
    },
    {
      year: "29 April 2021",
      title: { id: "Erupsi Kawah Sileri", en: "Kawah Sileri Eruption" },
      desc: {
        id: "Letusan freatik menghasilkan lontaran material hingga ratusan meter sehingga PVMBG menetapkan zona bahaya.",
        en: "A phreatic eruption launched material hundreds of meters, prompting PVMBG to establish a danger zone.",
      },
    },
    {
      year: "Des 2024 – Jan 2025",
      title: { id: "Aktivitas Terbaru", en: "Recent Activity" },
      desc: {
        id: "Erupsi freatik di Kawah Sileri menghasilkan semburan lumpur, sedimen, dan kolom uap putih tanpa peningkatan aktivitas signifikan sebelumnya.",
        en: "Phreatic eruptions at Kawah Sileri produced mud sprays, sediment, and white steam columns with no significant prior increase in activity.",
      },
    },
  ],
  destinations: [
    {
      title: "Kawah Sikidang",
      desc: {
        id: "Kawah aktif yang paling mudah diakses wisatawan, dikenal karena aktivitas solfatara dan lumpur panasnya.",
        en: "The most accessible active crater for visitors, known for its solfatara activity and hot mud.",
      },
      source: "Kompas.com, 2022",
      img: sikidang,
    },
    {
      title: "Kawah Sileri",
      desc: {
        id: "Kawah terbesar dan salah satu kawah paling aktif di Dieng yang sering mengalami erupsi freatik.",
        en: "The largest and one of the most active craters in Dieng, frequently experiencing phreatic eruptions.",
      },
      source: "CNN Indonesia, 2021",
      img: sileri,
    },
    {
      title: "Telaga Warna",
      desc: {
        id: "Air telaga berubah warna-warni karena sinar matahari mengenai air yang mengandung sulfur tinggi.",
        en: "The lake's water changes colors as sunlight hits its high-sulfur content.",
      },
      source: "Kompas.com, 2020",
      img: telagaWarna,
    },
    {
      title: "Telaga Pengilon",
      desc: {
        id: "Perubahan warna air dipengaruhi kandungan mineral dan aktivitas gas vulkanik di dasar danau.",
        en: "Water color changes are influenced by mineral content and volcanic gas activity at the lake bed.",
      },
      source: "Magelang Ekspres, 2023",
      img: telagaPengilon,
    },
    {
      title: "Kompleks Candi Arjuna",
      desc: {
        id: "Salah satu kompleks candi Hindu tertua di Jawa, diperkirakan dibangun pada abad ke-8 hingga ke-9 Masehi.",
        en: "One of the oldest Hindu temple complexes on Java, estimated to have been built in the 8th to 9th centuries AD.",
      },
      source: "Kompasiana.com, 2025",
      img: candiArjuna,
    },
    {
      title: "Bukit Sikunir",
      desc: {
        id: "Lokasi pengamatan matahari terbit yang menjadi salah satu daya tarik wisata utama di Dieng.",
        en: "A sunrise viewing spot that is one of the main tourist attractions in Dieng.",
      },
      source: "Magelang Ekspres, 2023",
      img: bukitSikunir,
    },
  ],
};

export default aboutDieng;