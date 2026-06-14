import type { DepthSlice } from '../types'

interface DepthPopupProps {
  slice: DepthSlice;
  index: number;
  totalSlices: number;
  onClose?: () => void;
}

export default function DepthPopup({ slice, index, totalSlices, onClose }: DepthPopupProps) {
  const depthPercent = ((index) / (totalSlices - 1)) * 100
  const topPosition = `${depthPercent}%`

  return (
    <div
      className="absolute right-10 z-20 pointer-events-none"
      style={{ top: topPosition, transform: 'translateY(-50%)' }}
    >
      <div className="bg-volcanic-900/95 backdrop-blur-sm border border-volcanic-600 rounded-lg shadow-xl p-4 w-64 pointer-events-auto">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h4 className="font-oswald text-lg font-semibold text-magma-400">{slice.label}</h4>
            <p className="text-xs text-volcanic-400 font-mono">{slice.depth}</p>
          </div>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="text-volcanic-500 hover:text-volcanic-200 transition-colors"
              aria-label="Tutup"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        <p className="text-xs text-volcanic-400 mb-3">{slice.description}</p>

        <div className="space-y-2">
          <div className="rounded overflow-hidden border border-volcanic-700">
            <div className="h-20 bg-gradient-to-br from-lava-600/30 via-lava-500/20 to-volcanic-800 flex items-center justify-center">
              <div className="text-center">
                <p className="text-xs font-mono text-lava-400">{slice.depth}</p>
                <p className="text-volcanic-500 text-xs">Gravitasi</p>
              </div>
            </div>
          </div>
          <div className="rounded overflow-hidden border border-volcanic-700">
            <div className="h-20 bg-gradient-to-br from-blue-600/30 via-blue-500/20 to-volcanic-800 flex items-center justify-center">
              <div className="text-center">
                <p className="text-xs font-mono text-blue-400">{slice.depth}</p>
                <p className="text-volcanic-500 text-xs">Magnetik</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
