import { useState } from "react";
import { Hotspot, MapModel, Viewer3D } from "./3d-viewer";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { spatialDieng } from "../data/spatial";
import { Home } from "lucide-react";
import { cn } from "../lib/utils";
import { buttonVariants } from "./ui/button";
import { Link } from "react-router-dom";
import Legend from "./Legend";
import icon from "../assets/icons/icon-dark.svg";
import iconInitial from "../assets/icons/icon-intial.svg";
import SpatialModelMenu from "./SpatialModelMenu";

export const SpatialFull = () => {
  const [activeMarker, setActiveMarker] = useState<number | null>(null);
  const [tab, setTab] = useState<string | undefined>(
    spatialDieng.categories[0].key,
  );
  const [model, setModel] = useState<string | undefined>();

  const selectedCategory = spatialDieng.categories.find((v) => v.key === tab);
  const selectedModel = selectedCategory?.models.find((m) => m.key === model);

  return (
    <div className=" relative font-mono overflow-hidden">
      <div className=" w-full h-svh relative">
        <Viewer3D>
          <MapModel url={spatialDieng.mountainUrl} />

          {/* {selectedModel && <MapModel url={selectedModel.url} />} */}

          {selectedModel?.hotspots.map((marker) => (
            <Hotspot
              key={marker.id}
              markerId={marker.id}
              position={marker.position}
              title={marker.title}
              description={marker.description}
              activeMarker={activeMarker}
              setActiveMarker={setActiveMarker}
            />
          ))}
        </Viewer3D>
      </div>

      {/* Logo */}
      <Link to="/" className=" absolute top-4 left-1/2 -translate-x-1/2">
        <img className=" hidden md:block " src={icon} width={200} />
        <img className=" block md:hidden" src={iconInitial} width={72} />
      </Link>

      {/* Top Left Menu */}
      <SpatialModelMenu
        models={selectedCategory?.models ?? []}
        value={model}
        onValueChange={setModel}
        className="p-4 absolute top-4"
      />

      {/* Top Right Menu */}
      <div className="absolute top-4 right-4">
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList className=" mx-auto flex-col rounded-2xl md:flex-row md:rounded-full bg-card ">
            {spatialDieng.categories.map((category) => (
              <TabsTrigger key={category.key} value={category.key}>
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Bottom Right Button */}
      <Link
        to={"/"}
        className={cn(
          buttonVariants({ variant: "outline" }),
          "absolute bottom-4 right-4 bg-elevated text-body",
        )}
      >
        <span className=" hidden md:block">Beranda</span>
        <Home />
      </Link>

      {/* Legend */}
      <Legend className="absolute bottom-4 left-4" />
    </div>
  );
};
