import { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
import { useModelLoading } from "../lib/loading-store";
import { cn } from "../lib/utils";

export function ProgressTracker() {
  const { active } = useProgress();
  const setActive = useModelLoading((s) => s.setActive);

  useEffect(() => {
    setActive(active);
  }, [active, setActive]);

  return null;
}

export function ModelLoader({ className }: { className?: string }) {
  const active = useModelLoading((s) => s.active);
  const [visible, setVisible] = useState(active);

  useEffect(() => {
    if (active) {
      setVisible(true);
    } else if (visible) {
      const t = setTimeout(() => setVisible(false), 600);
      return () => clearTimeout(t);
    }
  }, [active, visible]);

  return (
    <div
      className={cn(
        "absolute inset-0 z-0 flex items-center justify-center bg-card/80 backdrop-blur-sm transition-opacity duration-300",
        visible ? "opacity-100" : "opacity-0 pointer-events-none",
        className,
      )}>
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-2 border-primary-10 border-t-transparent animate-spin" />
        <span className="text-sm font-mono text-dim">Memuat model 3D...</span>
      </div>
    </div>
  );
}
