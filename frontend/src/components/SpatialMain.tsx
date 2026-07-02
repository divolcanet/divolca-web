import { useState } from "react";
import { Hotspot, MapModel, Viewer3D } from "./3d-viewer";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { spatialDieng } from "../data/spatial";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Maximize2, Menu } from "lucide-react";
import { cn } from "../lib/utils";
import { Button, buttonVariants } from "./ui/button";
import { Link } from "react-router-dom";
import Legend from "./Legend";

export const SpatialMain = () => {
  const [menuExpanded, setMenuExpanded] = useState(true);
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

      <div className=" relative rounded-xl font-mono border border-muted bg-[#A1C2BD] overflow-hidden">
        <div className=" aspect-4/5 md:aspect-video relative">
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
        </div>

        {/* Top Left Menu */}
        <div
          aria-expanded={menuExpanded}
          className=" group bg-primary-75 text-white p-4 absolute top-4 left-4 rounded-xl flex flex-col gap-4"
        >
          <Button
            variant="outline"
            size="icon"
            className=" text-white"
            onClick={() => setMenuExpanded((exp) => !exp)}
          >
            <Menu />
          </Button>
          <div
            className={cn(
              "space-y-4 transition-all min-w-0 min-h-0",
              menuExpanded ? " block" : " hidden",
            )}
          >
            <h3 className=" text-primary-10 text-xl">Model Tersedia</h3>
            <RadioGroup value={model} onValueChange={setModel}>
              {selectedCategory?.models.map((model) => (
                <label key={model.key} className=" flex gap-2 ">
                  <RadioGroupItem value={model.key} />
                  {model.label}
                </label>
              ))}
            </RadioGroup>
          </div>
        </div>

        {/* Top Right Button */}
        <Link
          to={"/full"}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "absolute top-4 right-4 bg-white",
          )}
        >
          <Maximize2 />
          Fullscreen
        </Link>

        {/* Legend */}
        <Legend className="absolute bottom-4 left-4" />
      </div>
    </>
  );
};
