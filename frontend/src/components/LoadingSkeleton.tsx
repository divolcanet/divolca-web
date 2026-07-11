import { cn } from "../lib/utils";

export function LoadingSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-full h-full flex items-center justify-center bg-card rounded-xl",
        className,
      )}
    >
      <div className="flex flex-col items-center gap-4 p-8">
        <div className="w-24 h-24 rounded-full bg-elevated animate-pulse" />
        <div className="h-4 w-48 bg-elevated rounded animate-pulse" />
        <div className="h-3 w-32 bg-elevated rounded animate-pulse" />
      </div>
    </div>
  );
}
