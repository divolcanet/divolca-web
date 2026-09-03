import type { MountainSpatial } from "./types";

export const spatialDieng: MountainSpatial = {
  mountainUrl: "/3d/mountain_terrain.glb",
  categories: [
    {
      key: "magnetik",
      label: "Magnetik",
      models: [
        { key: "magnetik_pengukuran", label: "Titik Pengukuran", url: "/3d/magnetic_points_3d.glb", hotspots: [] },
        {
          key: "tmi",
          label: "Total Magnetic Intensity (TMI)",
          url: "/3d/tmi_3d.glb",
          hotspots: [
            // {
            //   id: 1,
            //   position: [0, 3, 50],
            //   title: "Area A",
            //   description: "Detail informasi area A.",
            // },
            // {
            //   id: 2,
            //   position: [-3, 1, 4],
            //   title: "Area B",
            //   description: "Detail informasi area B.",
            // },
          ],
        },
        { key: "magnetik_regional", label: "Magnetik Regional", hotspots: [] },
        { key: "magnetik_rtp", label: "Magnetik RTP", hotspots: [] },
        // {
        //   key: "mag-residual",
        //   label: "Magnetik Residual",
        //   url: "",
        //   hotspots: [],
        // },
        // {
        //   key: "mag-regional",
        //   label: "Magnetik Regional",
        //   url: "",
        //   hotspots: [],
        // },
        // {
        //   key: "rtp",
        //   label: "Magnetik RTP",
        //   url: "",
        //   hotspots: [],
        // },
      ],
    },
    {
      key: "gravity",
      label: "Gravity",
      models: [
        { key: "magnetik_pengukuran", label: "Titik Pengukuran", hotspots: [] },
        { key: "gravity_cba", label: "Complete Bouguer Anomaly (CBA)", hotspots: [] },
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
