import type { MountainSpatial } from "./types";

export const spatialDieng: MountainSpatial = {
  mountainUrl: "/3d/map3d.glb",
  categories: [
    {
      key: "magnetik",
      label: "Magnetik",
      models: [
        {
          key: "tmi",
          label: "Total Magnetic Intensity (TMI)",
          url: "",
          hotspots: [
            {
              id: 1,
              position: [0, 3, 50],
              title: "Area A",
              description: "Detail informasi area A.",
            },
            {
              id: 2,
              position: [-3, 1, 4],
              title: "Area B",
              description: "Detail informasi area B.",
            },
          ],
        },
        {
          key: "mag-residual",
          label: "Magnetik Residual",
          url: "",
          hotspots: [],
        },
        {
          key: "mag-regional",
          label: "Magnetik Regional",
          url: "",
          hotspots: [],
        },
        {
          key: "rtp",
          label: "Magnetik RTP",
          url: "",
          hotspots: [],
        },
      ],
    },
    {
      key: "gravity",
      label: "Gravity",
      models: [
        {
          key: "tgi",
          label: "Total Gravity Intensity (TGI)",
          url: "",
          hotspots: [],
        },
        {
          key: "grav-residual",
          label: "Gravity Residual",
          url: "",
          hotspots: [],
        },
        {
          key: "grav-regional",
          label: "Gravity Regional",
          url: "",
          hotspots: [],
        },
      ],
    },
  ],
};
