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
  const [tab, setTab] = useState<string | undefined>(spatialDieng.categories[0].key);
  const [model, setModel] = useState<string | undefined>();
  const [modelOpacity, setModelOpacity] = useState(1);

  const selectedCategory = spatialDieng.categories.find((v) => v.key === tab);
  const selectedModel = selectedCategory?.models.find((m) => m.key === model);

  const showBase = selectedModel ? selectedModel.show_base_model : true;

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

      <div className=" relative rounded-xl font-mono border border-muted bg-card overflow-hidden">
        <div className=" aspect-2/3 md:aspect-video relative">
          <Suspense
            fallback={
              <div className="absolute inset-0">
                <LoadingSkeleton />
              </div>
            }>
            <Viewer3D>
              {showBase && <MapModel url={spatialDieng.mountainUrl} />}
              {selectedModel && selectedModel.url && <MapModel key={selectedModel.key} url={selectedModel.url} opacity={modelOpacity} position={[0, 0.7, 0]} />}
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
        <SpatialModelMenu models={selectedCategory?.models ?? []} value={model} onValueChange={setModel} className="p-4 absolute top-4 z-10" />

        {/* Top Right Button */}
        <Link to={"/full"} className={cn(buttonVariants({ variant: "outline" }), "absolute top-4 right-4 bg-elevated text-xs text-body")}>
          <Maximize2 />
          <span className=" hidden md:block">Fullscreen</span>
        </Link>

        {/* Opacity Slider */}
        <div className="absolute bottom-4 right-4 z-10 bg-card/80 backdrop-blur-sm p-3 rounded-xl flex items-center gap-2 border border-line">
          <span className="text-xs font-fraunces text-body">Opacity</span>
          <input type="range" min="0" max="1" step="0.05" value={modelOpacity} onChange={(e) => setModelOpacity(Number(e.target.value))} className="w-24 accent-primary-10" />
        </div>

        {/* Legend */}
        <Legend className={cn("absolute bottom-4 left-4", selectedModel ? "block" : "hidden")} title={selectedCategory && `Anomali ${selectedCategory.label}`} />
      </div>
    </>
  );
};
