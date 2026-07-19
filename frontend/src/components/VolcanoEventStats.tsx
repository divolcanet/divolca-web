import { Info, MountainSnow } from "lucide-react";
import { cn } from "../lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { useState, useEffect } from "react";
import type { VolcanoActivityStat } from "../data/types";

const eventClassname: Record<string, string> = {
  AWAS: "bg-red-500/35 border-red-500 text-red-500",
  SIAGA: "bg-orange-500/35 border-orange-500 text-orange-500",
  WASPADA: "bg-yellow-500/35 border-yellow-500 text-yellow-500",
  NORMAL: "bg-green-500/35 border-green-500 text-green-500",
};

const LEVEL_ORDER = ["AWAS", "SIAGA", "WASPADA", "NORMAL"];

const VolcanoEventStats = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<VolcanoActivityStat | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const url = import.meta.env.DEV
        ? "/volcano_activity.json"
        : "/api/volcano-activity";

      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        setData(json);
        setError(false);
      } catch {
        setError(true);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <div className=" bg-secondary px-5 py-3 flex gap-2 justify-start text-sm text-black">
        <Info />
        <span>Data status gunung tidak tersedia</span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        " bg-secondary px-5 py-3 flex gap-3 text-sm text-black",
        loading || error ? " justify-start" : "justify-between",
      )}
    >
      {loading && <span>Loading...</span>}
      {error && <span>Data status gunung tidak tersedia</span>}
      {data && (
        <>
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
              <BannerTooltipContent
                updatedAt={data.metadata.updated_at}
                source={data.metadata.source}
              />
            </TooltipContent>
          </Tooltip>
          <div className=" hidden md:block">
            <BannerTooltipContent
              updatedAt={data.metadata.updated_at}
              source={data.metadata.source}
            />
          </div>
          <div className=" flex items-center gap-2">
            {LEVEL_ORDER.map((status, index) => {
              const count = data.summary[status] ?? 0;
              return (
                <div
                  key={status}
                  className={cn(
                    "animate-bounce-stagger rounded-full px-2 py-1 border flex gap-1 items-center h-fit",
                    eventClassname[status],
                  )}
                  style={{ animationDelay: `${index * 0.4}s` }}
                >
                  <MountainSnow size={16} />
                  <span className=" text-sm text-black line-clamp-1 hidden sm:block">
                    {status.charAt(0).toUpperCase() +
                      status.slice(1).toLowerCase()}{" "}
                    :
                  </span>
                  <span className=" text-sm text-black line-clamp-1">
                    {count}
                  </span>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

const BannerTooltipContent = ({
  updatedAt,
  source,
}: {
  updatedAt?: string;
  source?: string;
}) => {
  const formatted = updatedAt
    ? new Date(updatedAt).toLocaleString("id-ID", {
        timeZone: "Asia/Jakarta",
        dateStyle: "long",
        timeStyle: "short",
      })
    : null;

  return (
    <div className=" text-black">
      <div className=" font-bold ">
        Status gunung berapi indonesia{" "}
        <a
          href={source ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          className=" underline font-normal"
        >
          (Selengkapnya)
        </a>
      </div>
      {formatted && <div className=" text-xs">Per {formatted} WIB</div>}
    </div>
  );
};

export default VolcanoEventStats;
