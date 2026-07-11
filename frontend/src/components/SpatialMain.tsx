import { useState, Suspense } from "react";
import { Hotspot, MapModel, Viewer3D } from "./3d-viewer";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { spatialDieng } from "../data/spatial";
import { Maximize2 } from "lucide-react";
import { cn } from "../lib/utils";
import { buttonVariants } from "./ui/button";
import { Link } from "react-router-dom";
import Legend from "./Legend";
import SpatialModelMenu from "./SpatialModelMenu";
import { LoadingSkeleton } from "./LoadingSkeleton";

export const SpatialMain = () => {
  const [activeMarker, setActiveMarker] = useState<number | null>(null);
  const [tab, setTab] = useState<string | undefined>(
    spatialDieng.categories[0].key,
  );
  const [model, setModel] = useState<string | undefined>();

  const selectedCategory = spatialDieng.categories.find((v) => v.key === tab);
  const selectedModel = selectedCategory?.models.find((m) => m.key === model);

  return (
    <>
      <Tabs value={tab} onValueChange={setTab} className=" mb-5">
        <TabsList className=" mx-auto">
          {spatialDieng.categories.map((category) => (
            <TabsTrigger key={category.key} value={category.key}>
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className=" relative rounded-xl font-mono border border-muted bg-black overflow-hidden">
        <div className=" aspect-2/3 md:aspect-video relative">
          <Suspense
            fallback={
              <div className="absolute inset-0">
                <LoadingSkeleton />
              </div>
            }
          >
            <Viewer3D>
              <MapModel url={spatialDieng.mountainUrl} />

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
          </Suspense>
        </div>

        {/* Top Left Menu */}
        <SpatialModelMenu
          models={selectedCategory?.models ?? []}
          value={model}
          onValueChange={setModel}
          className="p-4 absolute top-4 z-10"
        />

        {/* Top Right Button */}
        <Link
          to={"/full"}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "absolute top-4 right-4 bg-accent-100 text-xs text-white hover:text-black",
          )}
        >
          <Maximize2 />
          <span className=" hidden md:block">Fullscreen</span>
        </Link>

        {/* Legend */}
        <Legend className="absolute bottom-4 left-4" />
      </div>
    </>
  );
};
