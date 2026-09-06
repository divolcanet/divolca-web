import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, Eraser } from "lucide-react";
import { cn } from "../lib/utils";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import type { Model } from "../data/types";

const SpatialModelMenu = ({ models, value, onValueChange, className }: { models: Model[]; value: string | null; onValueChange: (value: string | null) => void; className?: string }) => {
  const [menuExpanded, setMenuExpanded] = useState(true);
  return (
    <div aria-expanded={menuExpanded} className={cn(" group bg-primary-75 text-white left-4 rounded-xl flex flex-col gap-4 max-w-1/2", className)}>
      <Button variant="outline" size="icon" className=" text-white" onClick={() => setMenuExpanded((exp) => !exp)}>
        <Menu />
      </Button>
      <div className={cn("space-y-4 transition-all min-w-0 min-h-0", menuExpanded ? " block" : " hidden")}>
        <div className="flex items-center">
          <h3 className=" text-primary-10 text-xl">Model Tersedia</h3>
          <Button variant="link" onClick={() => onValueChange(null)}>
            <Eraser />
          </Button>
        </div>
        <RadioGroup value={value} onValueChange={onValueChange}>
          {models.map((model) => (
            <label key={model.key} className=" flex gap-2 ">
              <RadioGroupItem value={model.key} />
              {model.label}
            </label>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

export default SpatialModelMenu;
