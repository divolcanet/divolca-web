import type { MountainSpatial } from "./types";

export const spatialDieng: MountainSpatial = {
  mountainUrl: "/3d/basemap.glb",
  categories: [
    {
      key: "magnetik",
      label: "Magnetik",
      models: [
        { key: "magnetik_pengukuran", label: "Titik Pengukuran", url: "/3d/magnetik_stations.glb", hotspots: [] },
        { key: "tmi", label: "Total Magnetic Intensity (TMI)", url: "/3d/magnetik_tmi.glb", hotspots: [] },
        { key: "magnetik_regional", label: "Magnetik Regional", hotspots: [] },
        { key: "magnetik_rtp", label: "Magnetik RTP", hotspots: [] },
      ],
    },
    {
      key: "gravity",
      label: "Gravity",
      models: [
        { key: "magnetik_pengukuran", label: "Titik Pengukuran", url: "/3d/gravity_stations.glb", hotspots: [] },
        { key: "gravity_cba", label: "Complete Bouguer Anomaly (CBA)", url: "/3d/gravity_cba.glb", hotspots: [] },
        { key: "gravity_regional", label: "Gravity Regional", hotspots: [] },
      ],
    },
    {
      key: "thermal",
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
