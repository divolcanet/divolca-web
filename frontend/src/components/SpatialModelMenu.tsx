import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, Eraser, BookOpen } from "lucide-react";
import { cn } from "../lib/utils";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Link } from "react-router-dom";
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
            <div key={model.key} className="flex items-center gap-2">
              <label className="flex items-center gap-2 flex-1 cursor-pointer">
                <RadioGroupItem value={model.key} />
                {model.label}
              </label>
              {model.glossarySlug && (
                <Link
                  to={`/glosarium#${model.glossarySlug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0"
                  aria-label={`Penjelasan ${model.label}`}
                  onClick={(e) => e.stopPropagation()}>
                  <Button variant="ghost" size="icon" className="h-7 w-7 text-white hover:text-primary-10">
                    <BookOpen className="h-4 w-4" />
                  </Button>
                </Link>
              )}
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

export default SpatialModelMenu;
