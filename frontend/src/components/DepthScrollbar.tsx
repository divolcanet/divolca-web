import type { DepthSlice } from '../types'

interface DepthScrollbarProps {
  slices: DepthSlice[];
  activeIndex: number | null;
  hoveredIndex: number | null;
  onHover: (index: number | null) => void;
  onClick: (index: number) => void;
}

export default function DepthScrollbar({
  slices,
  activeIndex,
  hoveredIndex,
  onHover,
  onClick,
}: DepthScrollbarProps) {
  return (
    <div
      className="absolute right-0 top-0 bottom-0 w-8 flex flex-col items-center justify-center py-4 z-10"
      onMouseLeave={() => onHover(null)}
    >
      <div className="relative h-full w-full flex flex-col items-center justify-between py-2">
        <div className="absolute left-1/2 top-2 bottom-2 w-px bg-volcanic-600 -translate-x-1/2" />
        {slices.map((slice, index) => {
          const isActive = index === activeIndex
          const isHovered = index === hoveredIndex
          return (
            <button
              key={slice.depth}
              type="button"
              className={`relative z-10 w-6 h-6 rounded-full flex items-center justify-center transition-all text-xs font-mono ${
                isActive
                  ? 'bg-magma-400 text-volcanic-950 scale-110'
                  : isHovered
                    ? 'bg-volcanic-600 text-volcanic-100 scale-105'
                    : 'bg-volcanic-700 text-volcanic-400 hover:bg-volcanic-600'
              }`}
              onMouseEnter={() => onHover(index)}
              onClick={() => onClick(index)}
              title={slice.label}
              aria-label={`Kedalaman ${slice.label}`}
            >
              {index + 1}
            </button>
          )
        })}
      </div>
    </div>
  )
}
