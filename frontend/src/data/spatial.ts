import { HotspotModel, type MountainSpatial } from "./types";

export const BaseHotspots: HotspotModel[] = [
  new HotspotModel({ id: 1, position: [381955.1793, 9204702.139, 2559], title: "Gunung Prau", description: "Dieng, Kab. Wonosobo, Jawa Tengah" }),
  new HotspotModel({ id: 2, position: [377155, 9199368, 2369], title: "Gunung Bisma", description: "Dieng, Kab. Wonosobo, Jawa Tengah" }),
  new HotspotModel({ id: 3, position: [389111.1, 9192881.669, 3136], title: "Gunung Sindoro", description: "Kabupaten Temanggung, Jawa Tengah" }),
  new HotspotModel({ id: 4, position: [397609.9754, 9183556.122, 3313], title: "Gunung Sumbing", description: "Kabupaten Magelang, Jawa Tengah" }),
  new HotspotModel({ id: 5, position: [380076.9553, 9202385.526, 2040], title: "Telaga Warna", description: "Dieng, Kab. Wonosobo, Jawa Tengah" }),
  new HotspotModel({ id: 6, position: [377497.4999, 9202720.093, 2035], title: "Telaga Merdada", description: "Batur, Kab. Banjarnegara, Jawa Tengah" }),
  new HotspotModel({ id: 7, position: [381249, 9199943, 2125], title: "Gunung Sikunir", description: "Dieng, Kab. Wonosobo, Jawa Tengah" }),
  new HotspotModel({ id: 8, position: [380917.761, 9200583.286, 2302], title: "Gunung Pakuwaja", description: "Dieng, Kab. Wonosobo, Jawa Tengah" }),
  new HotspotModel({ id: 9, position: [379212.9121, 9201836.482, 2039], title: "Kawah Sikidang", description: "Dieng, Kab. Banjarnegara Jawa Tengah" }),
  new HotspotModel({ id: 10, position: [376880.3518, 9204846.473, 1869], title: "Kawah Sileri", description: "Batur, kab. Banjarnegara, Jawa Tengah" }),
  new HotspotModel({ id: 11, position: [373362.7341, 9205233.182, 1904], title: "Kawah Candradimuka", description: "Batur, kab. Banjarnegara, Jawa Tengah" }),
  new HotspotModel({ id: 12, position: [372972.7212, 9204696.813, 1796], title: "Kawah Sinila", description: "Batur, kab. Banjarnegara, Jawa Tengah" }),
  new HotspotModel({ id: 13, position: [380979, 9201074, 2218], title: "Kawah Wurung", description: "Dieng, Kab. Wonosobo, Jawa Tengah" }),
  new HotspotModel({ id: 14, position: [375866, 9201660, 1952], title: "Telaga Menjer", description: "Kabupaten Wonosobo, Jawa Tengah" }),
];

export const spatialDieng: MountainSpatial = {
  mountainUrl: "/3d/basemap.glb",
  categories: [
    {
      key: "magnetik",
      label: "Magnetik",
      unit: "nT",
      models: [
        { key: "magnetik_pengukuran", label: "Titik Pengukuran", url: "/3d/magnetik_stations.glb", hotspots: [] },
        { key: "tmi", show_base_model: true, label: "Total Magnetic Intensity (TMI)", dynamic_transparency: true, url: "/3d/magnetik_tmi.glb", hotspots: [] },
        { key: "magnetik_regional", label: "Magnetik Regional", hotspots: [] },
        { key: "magnetik_rtp", label: "Magnetik RTP", hotspots: [] },
      ],
    },
    {
      key: "gravity",
      label: "Gravity",
      unit: "mmGal",
      models: [
        { key: "magnetik_pengukuran", label: "Titik Pengukuran", url: "/3d/gravity_stations.glb", hotspots: [] },
        { key: "gravity_cba", show_base_model: true, label: "Complete Bouguer Anomaly (CBA)", dynamic_transparency: true, url: "/3d/gravity_cba.glb", hotspots: [] },
        { key: "gravity_regional", label: "Gravity Regional", hotspots: [] },
      ],
    },
    {
      key: "thermal",
      unit: "°C",
      label: "Thermal",
      models: [
        { key: "thermal-sileri", label: "Kawah Sileri", hotspots: [] },
        { key: "thermal-candradimuka", label: "Kawah Candradimuka", hotspots: [] },
        { key: "thermal-dringo", label: "Telaga Dringo", hotspots: [] },
        { key: "thermal-sipandu", label: "Kawah Sipandu", hotspots: [] },
        { key: "thermal-Sikunir", label: "Sikunir", hotspots: [] },
        { key: "thermal-Bismo", label: "Gunung Bismo", hotspots: [] },
        { key: "thermal-mili", label: "Pemandian Air Panas Kolam Mili", hotspots: [] },
        { key: "thermal-warna", label: "Telaga Warna", hotspots: [] },
        { key: "thermal-pengilon", label: "Telaga Pengilon", hotspots: [] },
        { key: "thermal-ratapan", label: "Ratapan Angin", hotspots: [] },
      ],
    },
  ],
};
