interface LegendProps {
  min?: number;
  max?: number;
  unit?: string;
  title?: string;
  steps?: number[] | string[];
  category?: string;
  className?: string;
}

const DEFAULT_STEPS = ["Rendah", "Sedang", "Tinggi"];

// Arah kiri ke kanan = nilai rendah ke tinggi, disamakan dengan tekstur GLB.
const PALETTES: Record<string, string[]> = {
  gravity: ["#5e4fa2", "#3288bd", "#66c2a5", "#abdda4", "#e6f598", "#ffffbf", "#fee08b", "#fdae61", "#f46d43", "#d53e4f", "#9e0142"],
  magnetik: ["#00004d", "#0000ff", "#ffffff", "#ff0000", "#800000"],
  thermal: ["#222380", "#2A9D8F", "#E9C46A", "#ff5500"],
};

const DEFAULT_PALETTE = ["#3b82f6", "#22c55e", "#eab308", "#ef4444"];

export function Legend({ min, max, unit = "satuan", title, steps = DEFAULT_STEPS, category, className }: LegendProps) {
  const displayMin = min ?? steps[0];
  const displayMax = max ?? steps[steps.length - 1];
  const palette = (category && PALETTES[category]) || DEFAULT_PALETTE;

  return (
    <div className={className}>
      <h3 className="font-bold font-fraunces">Legenda</h3>
      {title && <p>{title}</p>}
      <div className="flex items-start gap-2">
        <div className="flex-1">
          <div className="w-full h-3 rounded-full" style={{ background: `linear-gradient(to right, ${palette.join(", ")})` }} />
          <div className="flex w-full justify-between gap-3 text-xs text-dim mt-1">
            {steps.map((s, i) => (
              <span key={i}>{s}</span>
            ))}
          </div>
        </div>
        <span className="text-lg font-bold text-primary-50">{unit}</span>
      </div>
      <div className="flex justify-between text-xs text-dim">
        <span>Min: {displayMin}</span>
        <span>Max: {displayMax}</span>
      </div>
    </div>
  );
}

export default Legend;
