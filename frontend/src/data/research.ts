import { MapPin, Clock, Calendar, Database } from "lucide-react";
import hasib from "../assets/team/hasib.jpeg";
import sukir from "../assets/team/sukir.jpg";
import aditya from "../assets/team/aditya.jpeg";
import anjar from "../assets/team/anjar.jpeg";
import aufa from "../assets/team/aufa.jpg";
import hanif from "../assets/team/hanif.jpeg";
import arif from "../assets/team/arif.jpeg";
import syafrizal from "../assets/team/syafrizal.jpeg";
import fadlu from "../assets/team/fadlu.jpeg";
import ade from "../assets/team/ade.jpeg";

const researchData = {
  stats: [
    { key: "location", title: { id: "Lokasi", en: "Location" }, value: "Pegunungan Dieng, Jawa Tengah, Indonesia", icon: MapPin },
    { key: "research-offline", title: { id: "Penelitian Langsung", en: "Field Research" }, value: "14 hari", icon: Clock },
    { key: "research-total", title: { id: "Total Penelitian", en: "Total Research" }, value: "6 bulan", icon: Calendar },
    { key: "data-type", title: { id: "Jenis Data", en: "Data Type" }, value: "Primer", icon: Database },
  ],
  teams: [
    {
      name: "Mohammad Hasib",
      description: {
        id: "Periset bidang volcano seismology dan computational geophysics dengan fokus pada analisis aktivitas gunung api, tomografi seismik, serta pemodelan kebencanaan geologi. Dalam tim, berperan sebagai Principal Investigator yang mengoordinasikan dan mengontrol jalannya penelitian, melakukan akuisisi data lapangan, menganalisis data, serta menyusun laporan kegiatan.",
        en: "Researcher in volcano seismology and computational geophysics, focusing on volcanic activity analysis, seismic tomography, and geological disaster modeling. In the team, serves as Principal Investigator, coordinating research activities, conducting field data acquisition, analyzing data, and preparing activity reports.",
      },
      photo: hasib,
    },
    {
      name: "Sukir Maryanto",
      description: {
        id: "Akademisi dan pakar fisika gunung api, geofisika, seismologi, gravity, magnetik, dan mitigasi kebencanaan. Pengalaman risetnya mencakup monitoring gunung api, sistem peringatan dini, eksplorasi panas bumi, dan penguatan ketahanan bencana. Dalam tim, berperan sebagai validator interpretasi data serta melakukan analisis data seismik, gravity, dan magnetik.",
        en: "Academic and expert in volcano physics, geophysics, seismology, gravity, magnetics, and disaster mitigation. Research experience includes volcanic monitoring, early warning systems, geothermal exploration, and disaster resilience. In the team, serves as data interpretation validator and analyzes seismic, gravity, and magnetic data.",
      },
      photo: sukir,
    },
    {
      name: "Aditya Pratama",
      description: {
        id: "Periset bidang volkanologi, geofisika, petrologi, geokimia, rock magnetism, serta volcanic hazard assessment. Memiliki pengalaman dalam kajian sistem magmatik, karakterisasi material vulkanik, dan analisis potensi bahaya gunung api. Dalam tim, berperan dalam akuisisi data lapangan, validasi data, serta analisis seismik, gravity, dan magnetik.",
        en: "Researcher in volcanology, geophysics, petrology, geochemistry, rock magnetism, and volcanic hazard assessment. Has experience in magmatic system studies, volcanic material characterization, and volcanic hazard analysis. In the team, conducts field data acquisition, data validation, and seismic, gravity, and magnetic analysis.",
      },
      photo: aditya,
    },
    {
      name: "Ade Surya Putra",
      description: {
        id: "Periset dengan kepakaran pada kebencanaan geologi dan pengolahan data geofisika berbasis komputasi. Latar belakangnya kuat dalam fisika dan teknik geofisika, termasuk pengembangan perangkat lunak untuk analisis sinyal seismik. Dalam tim, berperan melakukan akuisisi data lapangan, mengontrol perancangan desain web, serta mengolah data berbasis pemrograman.",
        en: "Researcher with expertise in geological disaster assessment and computational geophysical data processing. Strong background in physics and geophysical engineering, including software development for seismic signal analysis. In the team, conducts field data acquisition, oversees web design, and processes data through programming.",
      },
      photo: ade,
    },
    {
      name: "Anjar Dwi Hariadi",
      description: {
        id: "Praktisi dan pengembang bidang rekayasa perangkat lunak dengan pengalaman pada pengembangan sistem berbasis teknologi, machine learning, dan desain aplikasi. Dalam tim, berperan sebagai pengembang teknis yang merancang kerangka kerja website serta membuat, merancang, dan mendesain website.",
        en: "Software engineering practitioner and developer with experience in technology-based system development, machine learning, and application design. In the team, serves as technical developer designing the website framework and creating, planning, and designing the website.",
      },
      photo: anjar,
    },
    {
      name: "Muhammad Aufaristama",
      description: {
        id: "Pakar remote sensing, GIS, geospatial cloud computing, big data, time-series analysis, dan pemodelan bahaya geologi. Pengalamannya mencakup pemanfaatan citra satelit, data geospasial, dan aplikasi web untuk visualisasi hasil riset kebencanaan. Dalam tim, berperan dalam perancangan desain web, validasi website, serta pengolahan data fotogrametri dan satelit berbasis pemrograman.",
        en: "Expert in remote sensing, GIS, geospatial cloud computing, big data, time-series analysis, and geological hazard modeling. Experience includes satellite imagery, geospatial data, and web applications for visualizing disaster research results. In the team, contributes to web design, website validation, and photogrammetry and satellite data processing through programming.",
      },
      photo: aufa,
    },
    {
      name: "Hanif 'Izzuddin Zakly",
      description: {
        id: "Periset muda bidang geofisika dengan pengalaman pada pemetaan geologi, geokimia, sifat magnetik batuan, serta eksplorasi REE pada material vulkanik. Dalam tim, berperan melakukan akuisisi data lapangan, pengolahan dan analisis data lapangan, serta mendukung perancangan website.",
        en: "Junior geophysics researcher with experience in geological mapping, geochemistry, rock magnetic properties, and REE exploration in volcanic materials. In the team, conducts field data acquisition, processes and analyzes field data, and supports website development.",
      },
      photo: hanif,
    },
    {
      name: "Arif Nur Rohman",
      description: {
        id: "Periset bidang geofisika dengan latar belakang teknik geofisika dan pengalaman pada kegiatan ekspedisi geologi darat untuk mitigasi bencana serta pengelolaan sumber daya geologi. Dalam tim, berperan melakukan akuisisi data lapangan, pengolahan dan analisis data lapangan, serta membantu perancangan website.",
        en: "Geophysics researcher with a background in geophysical engineering and experience in land geology expeditions for disaster mitigation and geological resource management. In the team, conducts field data acquisition, processes and analyzes field data, and assists with website development.",
      },
      photo: arif,
    },
    {
      name: "Syafrizal Hidayat",
      description: {
        id: "Periset bidang oseanografi dengan pengalaman pada pengembangan geoportal, instrumentasi oseanografi, pengukuran pasang surut, suhu permukaan laut, serta kegiatan kebencanaan pesisir dan tsunami. Dalam tim, berperan melakukan akuisisi data lapangan serta membuat dan merancang desain website.",
        en: "Oceanography researcher with experience in geoportal development, oceanographic instrumentation, tidal measurement, sea surface temperature, and coastal and tsunami disaster activities. In the team, conducts field data acquisition and creates and designs the website.",
      },
      photo: syafrizal,
    },
    {
      name: "Fadlu Rijal",
      description: {
        id: "Periset bidang geofisika dengan latar belakang teknik geofisika, seismologi eksplorasi, dan geofisika perminyakan. Berpengalaman pada ekspedisi geologi dan eksplorasi geofisika, akuisisi, pemrosesan, hingga interpretasi data geofisika untuk analisis bawah permukaan penemuan cadangan energi. Dalam tim, berperan melakukan akuisisi data lapangan serta pengolahan dan analisis data lapangan.",
        en: "Geophysics researcher with a background in geophysical engineering, exploration seismology, and petroleum geophysics. Experienced in geological expeditions and geophysical exploration — from acquisition, processing, to interpretation of geophysical data for subsurface analysis and energy reserve discovery. In the team, conducts field data acquisition and processes and analyzes field data.",
      },
      photo: fadlu,
    },
  ],
  bibtex:
    "@misc{zhou2026danceopdonpolicygenerativefield,\n      title={DanceOPD: On-Policy Generative Field Distillation}, \n      author={Wei Zhou and Xiongwei Zhu and Zelin Xu and Bo Dong and Lixue Gong and Yongyuan Liang and Meng Chu and Leigang Qu and Lingdong Kong and Wei Liu and Tat-Seng Chua},\n      year={2026},\n      eprint={2606.27377},\n      archivePrefix={arXiv},\n      primaryClass={cs.CV},\n      url={https://arxiv.org/abs/2606.27377},\n}",
};

export default researchData;
