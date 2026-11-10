const glossaryData = [
  {
    slug: "gravity",
    title: { id: "Gravitasi", en: "Gravity" },
    content: {
      id: "Metode geofisika yang mengukur variasi medan gravitasi bumi untuk mengidentifikasi perbedaan densitas batuan di bawah permukaan. Data gravitasi digunakan untuk memetakan struktur geologi bawah permukaan, seperti cekungan, patahan, dan intrusi batuan.",
      en: "A geophysical method that measures variations in Earth's gravitational field to identify differences in rock density beneath the surface. Gravity data is used to map subsurface geological structures such as basins, faults, and rock intrusions.",
    },
    externalLink: "https://id.wikipedia.org/wiki/Gravitasi",
  },
  {
    slug: "magnetik",
    title: { id: "Magnetik", en: "Magnetics" },
    content: {
      id: "Metode geofisika yang mengukur variasi medan magnet bumi untuk mengidentifikasi batuan yang memiliki sifat kemagnetan. Data magnetik dimanfaatkan untuk memetakan struktur bawah permukaan, seperti keberadaan batuan beku dan patahan.",
      en: "A geophysical method that measures variations in Earth's magnetic field to identify rocks with magnetic properties. Magnetic data is used to map subsurface structures such as the presence of igneous rocks and faults.",
    },
    externalLink: "https://id.wikipedia.org/wiki/Magnetik",
  },
  {
    slug: "seismik",
    title: { id: "Seismik", en: "Seismic" },
    content: {
      id: "Metode geofisika yang menggunakan gelombang seismik untuk menggambarkan struktur lapisan batuan di bawah permukaan. Dalam eksplorasi, metode seismik memberikan resolusi tinggi untuk mengidentifikasi struktur geologi dan potensi sumber daya alam.",
      en: "A geophysical method that uses seismic waves to image rock layer structures beneath the surface. In exploration, the seismic method provides high resolution for identifying geological structures and potential natural resources.",
    },
    externalLink: "https://id.wikipedia.org/wiki/Seismik",
  },
  {
    slug: "geofisika",
    title: { id: "Geofisika", en: "Geophysics" },
    content: {
      id: "Cabang ilmu kebumian yang mempelajari bumi menggunakan prinsip-prinsip fisika, seperti gravitasi, magnetik, seismik, dan listrik. Data geofisika digunakan untuk menyelidiki struktur dan komposisi bawah permukaan bumi.",
      en: "A branch of earth science that studies the Earth using physical principles such as gravity, magnetics, seismics, and electrical methods. Geophysical data is used to investigate the structure and composition of the Earth's subsurface.",
    },
  },
  {
    slug: "vulkanologi",
    title: { id: "Vulkanologi", en: "Volcanology" },
    content: {
      id: "Ilmu yang mempelajari gunung api, termasuk aktivitas erupsi, struktur magma, serta dampak vulkanik terhadap lingkungan. Vulkanologi berperan penting dalam mitigasi bencana geologi dan pemahaman sistem panas bumi.",
      en: "The science that studies volcanoes, including eruption activity, magma structure, and volcanic impacts on the environment. Volcanology plays an important role in geological disaster mitigation and understanding geothermal systems.",
    },
    externalLink: "https://id.wikipedia.org/wiki/Vulkanologi",
  },
  {
    slug: "anomali-gravitasi",
    title: { id: "Anomali Gravitasi", en: "Gravity Anomaly" },
    content: {
      id: "Perbedaan antara nilai gravitasi terukur di suatu titik dengan nilai gravitasi teoritis pada titik yang sama. Anomali ini mengindikasikan adanya variasi densitas batuan di bawah permukaan yang menjadi dasar interpretasi struktur geologi.",
      en: "The difference between the measured gravitational value at a point and the theoretical gravitational value at the same point. This anomaly indicates variations in rock density beneath the surface, forming the basis for geological structure interpretation.",
    },
  },
  {
    slug: "anomali-magnetik",
    title: { id: "Anomali Magnetik", en: "Magnetic Anomaly" },
    content: {
      id: "Perbedaan antara nilai medan magnet terukur dengan nilai medan magnet teoritis bumi. Anomali magnetik digunakan untuk mengidentifikasi batuan yang memiliki suseptibilitas magnetik tinggi, seperti batuan beku.",
      en: "The difference between the measured magnetic field value and the theoretical Earth magnetic field value. Magnetic anomalies are used to identify rocks with high magnetic susceptibility, such as igneous rocks.",
    },
  },
  {
    slug: "tomografi-seismik",
    title: { id: "Tomografi Seismik", en: "Seismic Tomography" },
    content: {
      id: "Teknik pencitraan struktur bawah permukaan menggunakan gelombang seismik, mirip dengan CT scan di bidang medis. Tomografi seismik menghasilkan model tiga dimensi kecepatan gelombang yang merepresentasikan distribusi material di dalam bumi.",
      en: "A technique for imaging subsurface structures using seismic waves, similar to CT scanning in medicine. Seismic tomography produces a three-dimensional model of wave velocities that represents the distribution of materials inside the Earth.",
    },
  },
  {
    slug: "mitigasi-bencana",
    title: { id: "Mitigasi Bencana Vulkanik", en: "Volcanic Disaster Mitigation" },
    content: {
      id: "Serangkaian upaya untuk mengurangi risiko bencana akibat aktivitas gunung api, meliputi pemantauan, pemetaan kawasan rawan bencana, sistem peringatan dini, serta edukasi masyarakat. Mitigasi berbasis data geofisika meningkatkan kesiapsiagaan dan mengurangi dampak erupsi.",
      en: "A set of efforts to reduce the risk of disasters caused by volcanic activity, including monitoring, hazard zone mapping, early warning systems, and community education. Geophysics-based mitigation improves preparedness and reduces the impact of eruptions.",
    },
  },
  {
    slug: "panas-bumi",
    title: { id: "Panas Bumi (Geotermal)", en: "Geothermal Energy" },
    content: {
      id: "Energi panas yang tersimpan di dalam bumi, sering ditemukan di kawasan vulkanik seperti Dieng. Eksplorasi panas bumi menggunakan metode geofisika untuk mengidentifikasi reservoir dan mengestimasi potensi energinya.",
      en: "Heat energy stored inside the Earth, often found in volcanic areas like Dieng. Geothermal exploration uses geophysical methods to identify reservoirs and estimate their energy potential.",
    },
    externalLink: "https://id.wikipedia.org/wiki/Panas_bumi",
  },
  {
    slug: "pengukuran-magnetik",
    title: { id: "Titik Pengukuran Magnetik", en: "Magnetic Survey Stations" },
    content: {
      id: "Titik-titik di lapangan tempat alat magnetometer diletakkan untuk mengukur kekuatan medan magnet bumi. Data dari titik-titik ini adalah data mentah yang nantinya diolah menjadi peta anomali magnetik. Semakin banyak dan rapat titik pengukuran, semakin detail peta yang dihasilkan.",
      en: "Points in the field where a magnetometer is placed to measure Earth's magnetic field strength. Data from these points is raw data that is later processed into a magnetic anomaly map. More and denser measurement points yield a more detailed map.",
    },
  },
  {
    slug: "tmi",
    title: { id: "Total Magnetic Intensity (TMI)", en: "Total Magnetic Intensity (TMI)" },
    content: {
      id: "Medan magnet total yang terukur di suatu titik di permukaan bumi. Nilai ini adalah gabungan medan magnet utama bumi (yang berasal dari inti bumi) dengan anomali kecil dari batuan di bawah permukaan. Peta TMI adalah langkah awal sebelum data dipisahkan menjadi komponen regional dan residual.",
      en: "The total magnetic field measured at a point on Earth's surface. This value combines Earth's main magnetic field (from the core) with small anomalies from subsurface rocks. The TMI map is the starting step before data is separated into regional and residual components.",
    },
  },
  {
    slug: "magnetik-regional",
    title: { id: "Magnetik Regional", en: "Regional Magnetic" },
    content: {
      id: "Bagian dari anomali magnetik yang mencerminkan struktur geologi berskala besar dan dalam, seperti bentuk kerak bumi atau batuan dasar. Komponen ini dipisahkan menggunakan filter (misalnya upward continuation) agar struktur dangkal tidak mengganggu gambaran umum.",
      en: "The part of the magnetic anomaly reflecting large, deep geological structures such as crustal shape or basement rock. This component is separated using filters (e.g., upward continuation) so shallow structures do not obscure the broad picture.",
    },
  },
  {
    slug: "magnetik-residual",
    title: { id: "Magnetik Residual", en: "Residual Magnetic" },
    content: {
      id: "Bagian anomali magnetik yang mencerminkan struktur geologi dangkal, seperti intrusi batuan beku, patahan, atau tubuh bijih dekat permukaan. Diperoleh dengan mengurangkan komponen regional dari data total, sehingga detail dangkal lebih terlihat.",
      en: "The part of the magnetic anomaly reflecting shallow geological structures such as igneous intrusions, faults, or near-surface ore bodies. Obtained by subtracting the regional component from the total data, making shallow details more visible.",
    },
  },
  {
    slug: "magnetik-rtp",
    title: { id: "Magnetik RTP (Reduction to Pole)", en: "Magnetic RTP (Reduction to Pole)" },
    content: {
      id: "Teknik pengolahan data magnetik agar anomali terlihat seolah-olah diukur di kutub magnet bumi, di mana medan magnet vertikal. Tujuannya menyederhanakan tampilan: puncak anomali berada tepat di atas sumbernya, sehingga lebih mudah diinterpretasi oleh orang awam maupun peneliti.",
      en: "A magnetic data processing technique so anomalies appear as if measured at Earth's magnetic pole, where the field is vertical. The goal is to simplify the display: anomaly peaks sit directly above their sources, making interpretation easier.",
    },
  },
  {
    slug: "pengukuran-gravitasi",
    title: { id: "Titik Pengukuran Gravitasi", en: "Gravity Survey Stations" },
    content: {
      id: "Titik-titik di lapangan tempat gravimeter diletakkan untuk mengukur percepatan gravitasi bumi. Data mentah dari titik ini (nilai gravitasi dan elevasi) diolah dengan berbagai koreksi (bouguer, terrain) menjadi peta anomali gravitasi.",
      en: "Points in the field where a gravimeter is placed to measure Earth's gravitational acceleration. Raw data from these points (gravity values and elevation) is processed with various corrections (Bouguer, terrain) into a gravity anomaly map.",
    },
  },
  {
    slug: "cba",
    title: { id: "Complete Bouguer Anomaly (CBA)", en: "Complete Bouguer Anomaly (CBA)" },
    content: {
      id: "Peta anomali gravitasi setelah semua koreksi (bouguer dan terrain) diterapkan. Nilai ini mencerminkan variasi densitas batuan di bawah permukaan, sehingga berguna untuk memetakan struktur geologi seperti cekungan, patahan, dan intrusi. Ini adalah peta utama dalam survei gravitasi.",
      en: "A gravity anomaly map after all corrections (Bouguer and terrain) are applied. This value reflects variations in subsurface rock density, useful for mapping geological structures such as basins, faults, and intrusions. It is the main map in gravity surveys.",
    },
  },
  {
    slug: "gravitasi-regional",
    title: { id: "Gravitasi Regional", en: "Regional Gravity" },
    content: {
      id: "Komponen anomali gravitasi berskala besar dan dalam, mencerminkan struktur geologi regional seperti bentuk kerak bumi. Dipisahkan dengan filter agar detail dangkal tidak menutupi gambaran umum wilayah.",
      en: "The large, deep component of the gravity anomaly, reflecting regional geological structures such as crustal shape. Separated with filters so shallow details do not obscure the broad regional picture.",
    },
  },
  {
    slug: "gravitasi-residual",
    title: { id: "Gravitasi Residual", en: "Residual Gravity" },
    content: {
      id: "Komponen anomali gravitasi berskala kecil dan dangkal, mencerminkan struktur dekat permukaan seperti intrusi atau patahan lokal. Diperoleh dengan mengurangkan komponen regional dari data total, sehingga detail dangkal lebih jelas.",
      en: "The small, shallow component of the gravity anomaly, reflecting near-surface structures such as local intrusions or faults. Obtained by subtracting the regional component from the total data, making shallow details clearer.",
    },
  },
];

export default glossaryData;
