import { useState, Suspense } from "react";
import { Hotspot, MapModel, Viewer3D } from "./3d-viewer";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { BaseHotspots, spatialDieng } from "../data/spatial";
import { Link } from "react-router-dom";
import Legend from "./Legend";
import icon from "../assets/icons/icon-dark.svg";
import iconInitial from "../assets/icons/icon-intial.svg";
import SpatialModelMenu from "./SpatialModelMenu";
import { ModelLoader } from "./ModelLoader";
import { Switch } from "./ui/switch";

export const SpatialFull = () => {
  const [activeMarker, setActiveMarker] = useState<number | null>(null);
  const [tab, setTab] = useState<string | undefined>(spatialDieng.categories[0].key);
  const [model, setModel] = useState<string | null>(null);
  const [autorotate, setAutorotate] = useState<boolean>(true);
  const [modelOpacity, setModelOpacity] = useState(1);

  const selectedCategory = spatialDieng.categories.find((v) => v.key === tab);
  const selectedModel = selectedCategory?.models.find((m) => m.key === model);

  const showBase = selectedModel ? selectedModel.show_base_model : true;

  return (
    <div className=" relative font-mono overflow-hidden">
      <div className=" w-full h-svh relative">
        <Suspense fallback={null}>
          <Viewer3D autorotate={autorotate}>
            {showBase && <MapModel url={spatialDieng.mountainUrl} />}

            {selectedModel && selectedModel.url && <MapModel key={selectedModel.url} url={selectedModel.url} opacity={selectedModel.dynamic_transparency ? modelOpacity : 1} position={[0, 0.2, 0]} />}

            {BaseHotspots.map((marker) => (
              <Hotspot
                key={marker.id}
                markerId={marker.id}
                position={marker.utmToScenePosition()}
                title={marker.title}
                description={marker.description}
                activeMarker={activeMarker}
                setActiveMarker={setActiveMarker}
              />
            ))}
          </Viewer3D>
        </Suspense>
        <ModelLoader />
      </div>

      {/* Logo */}
      <Link to="/" className=" absolute top-4 left-1/2 -translate-x-1/2">
        <img className=" hidden md:block " src={icon} width={200} />
        <img className=" block md:hidden" src={iconInitial} width={72} />
      </Link>

      {/* Top Left Menu */}
      <SpatialModelMenu models={selectedCategory?.models ?? []} value={model} onValueChange={setModel} className="p-4 absolute top-4" />

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
      <div className=" absolute bottom-4 right-4 z-10 bg-card/80 backdrop-blur-sm p-3 rounded-xl space-y-3">
        {/* Rotation Controller */}
        <div className="flex items-center gap-1 justify-between">
          <label htmlFor="autorotate" className="text-xs font-fraunces text-body">
            Rotasi
          </label>
          <Switch id="autorotate" checked={autorotate} onCheckedChange={setAutorotate} />
        </div>
        {/* Opacity Slider */}
        {selectedModel?.dynamic_transparency && (
          <div className="flex items-center gap-1 justify-between">
            <span className="text-xs font-fraunces text-body">Opacity</span>
            <input type="range" min="0" max="1" step="0.05" value={modelOpacity} onChange={(e) => setModelOpacity(Number(e.target.value))} className="w-24 accent-primary-10" />
          </div>
        )}
      </div>

      {/* Legend */}
      <Legend className="absolute bottom-4 left-4" title={selectedCategory && `Anomali ${selectedCategory.label}`} unit={selectedCategory?.unit} />
    </div>
  );
};
