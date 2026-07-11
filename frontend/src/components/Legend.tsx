import { cn } from "../lib/utils";

interface LegendProps {
  min?: number;
  max?: number;
  unit?: string;
  steps?: number[];
  className?: string;
}

const DEFAULT_STEPS = [-50, 15, 50, 100, 300, 500];

export function Legend({
  min,
  max,
  unit = "nT",
  steps = DEFAULT_STEPS,
  className,
}: LegendProps) {
  const displayMin = min ?? steps[0];
  const displayMax = max ?? steps[steps.length - 1];

  return (
    <div
      className={cn(
        "bg-accent-100/90 backdrop-blur-sm p-4 rounded-xl flex flex-col gap-3 w-2/3 md:w-120 text-sm text-primary-fg border border-accent-200",
        className,
      )}
    >
      <h3 className="font-bold font-fraunces">Legenda</h3>
      <div className="flex items-start gap-2">
        <div className="flex-1">
          <div className="w-full h-3 bg-[linear-gradient(to_right,var(--color-blue-500),var(--color-green-500),var(--color-yellow-500),var(--color-red-500))] rounded-full" />
          <div className="flex w-full justify-between gap-3 text-xs text-primary-fg/70 mt-1">
            {steps.map((s, i) => (
              <span key={i}>{s}</span>
            ))}
          </div>
        </div>
        <span className="text-lg font-bold text-primary-10">{unit}</span>
      </div>
      <div className="flex justify-between text-xs text-primary-fg/50">
        <span>Min: {displayMin}</span>
        <span>Max: {displayMax}</span>
      </div>
    </div>
  );
}

export default Legend;
