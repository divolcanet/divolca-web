import { Info, MountainSnow } from "lucide-react";
import { cn } from "../lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { useState } from "react";

const events = {
  AWAS: 0,
  SIAGA: 5,
  WASPADA: 21,
  NORMAL: 43,
};

const eventClassname: Record<string, string> = {
  AWAS: "bg-red-500/35 border-red-500 text-red-500",
  SIAGA: "bg-orange-500/35 border-orange-500 text-orange-500",
  WASPADA: "bg-yellow-500/35 border-yellow-500 text-yellow-500",
  NORMAL: "bg-green-500/35 border-green-500 text-green-500",
};

const VolcanoEventStats = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" bg-secondary px-5 py-3 flex gap-3 justify-between text-sm">
      <Tooltip open={open} onOpenChange={setOpen}>
        <TooltipTrigger
          className=" block md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          onPointerDown={(e) => {
            if (window.matchMedia("(max-width: 767px)").matches) {
              e.preventDefault();
            }
          }}
        >
          <Info />
        </TooltipTrigger>
        <TooltipContent>
          <BannerTooltipContent />
        </TooltipContent>
      </Tooltip>
      <div className=" hidden md:block">
        <BannerTooltipContent />
      </div>
      <div className=" flex items-center gap-2 animate-pulse">
        {Object.entries(events).map(([status, count]) => {
          return (
            <div
              key={status}
              className={cn(
                " rounded-full px-2 py-1 border flex gap-1 items-center h-fit",
                eventClassname[status],
              )}
            >
              <MountainSnow size={16} />
              <span className=" text-sm text-black line-clamp-1 hidden sm:block">
                {status.charAt(0).toUpperCase() + status.slice(1).toLowerCase()}{" "}
                :
              </span>
              <span className=" text-sm text-black line-clamp-1">{count}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const BannerTooltipContent = () => {
  return (
    <div>
      <div className=" font-bold">
        Status gunung berapi indonesia{" "}
        <a href="#" className=" underline font-normal">
          (Selengkapnya)
        </a>
      </div>
      <div className=" text-xs">Per 14 Juli 2026, 12:00 WIB</div>
    </div>
  );
};

export default VolcanoEventStats;
