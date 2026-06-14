# Feature: 2D Spatial Data Vertical Scroller

The following plan should be complete, but it's important that you validate documentation and codebase patterns and task sanity before you start implementing.

Pay special attention to naming of existing utils types and models. Import from the right files etc.

## Feature Description

Add a 2D spatial data section below the 3D viewer on the landing page. This section displays cross-section images (gravity and magnetic anomaly slices) at different depth levels. Users select a depth level from a vertical scroller, and the corresponding 2D image is displayed. Each depth level shows both gravity and magnetic data side by side with toggle controls.

Since real images are not yet available, placeholder gradient cards will be used to represent each depth slice.

## User Story

As a researcher or visitor
I want to browse 2D spatial data slices at different depth levels
So that I can examine gravity and magnetic anomalies beneath the Dieng Mountains surface

## Problem Statement

The current landing page only shows a 3D model viewer. The README specifies a requirement for "Model data spasial untuk tiap-tiap kedalaman (2D/gambar flat), terdapat vertical scroller untuk menentukan gambar yang ditampilkan" — flat 2D spatial data per depth level with a vertical scroller to select which image is displayed. This feature is currently missing.

## Solution Statement

Create a new `SpatialDataScroller` component placed below the 3D viewer. It consists of:
- A vertical depth level selector (scrollable list of depth buttons)
- A main display area showing the selected depth's gravity and magnetic data as placeholder image cards
- Toggle buttons to show/hide gravity vs magnetic views
- Depth level label and description

## Feature Metadata

**Feature Type**: New Capability
**Estimated Complexity**: Medium
**Primary Systems Affected**: `frontend/src/components/`, `frontend/src/pages/LandingPage.tsx`, `frontend/src/data/spatial.json`, `frontend/src/types/index.ts`
**Dependencies**: lucide-react (already installed)

---

## CONTEXT REFERENCES

### Relevant Codebase Files IMPORTANT: YOU MUST READ THESE FILES BEFORE IMPLEMENTING!

- `frontend/src/components/Viewer3D.tsx` — Why: Contains the 3D viewer section; SpatialDataScroller will be placed after it in the landing page
- `frontend/src/pages/LandingPage.tsx` — Why: Composes HeroSection + Viewer3D; needs to add SpatialDataScroller
- `frontend/src/data/spatial.json` (line 13) — Why: Contains `depthLevels` array that drives the scroller
- `frontend/src/types/index.ts` — Why: Contains SpatialData interface; needs DepthSlice type added
- `frontend/src/components/HeroSection.tsx` — Why: Reference for component structure and Tailwind patterns
- `frontend/src/components/Navbar.tsx` — Why: Reference for responsive component patterns

### New Files to Create

- `frontend/src/components/SpatialDataScroller.tsx` — Main 2D spatial data scroller component
- `frontend/src/components/DepthSliceCard.tsx` — Individual depth level image card (placeholder)

### Files to Update

- `frontend/src/types/index.ts` — Add `DepthSlice` interface
- `frontend/src/data/spatial.json` — Add depth slice data with labels
- `frontend/src/pages/LandingPage.tsx` — Add SpatialDataScroller import and render

### Relevant Documentation

- [Tailwind CSS v4 Scroll Snap](https://tailwindcss.com/docs/scroll-snap-type)
  - Why: For smooth vertical scrolling behavior in the depth selector
- [Lucide React Icons](https://lucide.dev/guide/packages/lucide-react)
  - Why: Icons for depth levels, gravity, magnetic toggles

### Patterns to Follow

**Naming Conventions:**
- PascalCase for React components: `SpatialDataScroller.tsx`, `DepthSliceCard.tsx`
- `src/components/` for reusable UI components
- Default exports for all components

**Component Pattern:**
- Functional components with explicit prop interfaces
- useState for local state (selected depth, layer visibility)
- Tailwind utility classes for all styling

**Data Pattern:**
- JSON data imported directly (Vite handles this natively)
- TypeScript interfaces in `src/types/index.ts`

---

## IMPLEMENTATION PLAN

### Phase 1: Foundation

Add types and data structure for depth slices.

**Tasks:**
- Add `DepthSlice` interface to types/index.ts
- Update spatial.json with depth slice entries

### Phase 2: Core Implementation

Build the scroller component and depth card.

**Tasks:**
- Create DepthSliceCard component (placeholder image card)
- Create SpatialDataScroller with vertical depth selector and display area

### Phase 3: Integration

Wire into the landing page.

**Tasks:**
- Update LandingPage.tsx to include SpatialDataScroller
- Validate build, lint, and type-check

---

## STEP-BY-STEP TASKS

IMPORTANT: Execute every task in order, top to bottom. Each task is atomic and independently testable.

### Task 1: UPDATE frontend/src/types/index.ts

- **IMPLEMENT**: Add `DepthSlice` interface after `SpatialData`:
```typescript
export interface DepthSlice {
  depth: string;
  label: string;
  gravityImage?: string;
  magneticImage?: string;
  description: string;
}
```
- **GOTCHA**: Keep existing interfaces unchanged. Append only.
- **VALIDATE**: `npx tsc --noEmit -p tsconfig.app.json`

### Task 2: UPDATE frontend/src/data/spatial.json

- **IMPLEMENT**: Add `depthSlices` array alongside existing data:
```json
"depthSlices": [
  { "depth": "0m", "label": "Permukaan", "description": "Data anomali pada level permukaan", "gravityImage": null, "magneticImage": null },
  { "depth": "-50m", "label": "50m Bawah Permukaan", "description": "Data anomali pada kedalaman 50 meter", "gravityImage": null, "magneticImage": null },
  { "depth": "-100m", "label": "100m Bawah Permukaan", "description": "Data anomali pada kedalaman 100 meter", "gravityImage": null, "magneticImage": null },
  { "depth": "-200m", "label": "200m Bawah Permukaan", "description": "Data anomali pada kedalaman 200 meter", "gravityImage": null, "magneticImage": null },
  { "depth": "-500m", "label": "500m Bawah Permukaan", "description": "Data anomali pada kedalaman 500 meter", "gravityImage": null, "magneticImage": null },
  { "depth": "-1000m", "label": "1000m Bawah Permukaan", "description": "Data anomali pada kedalaman 1000 meter", "gravityImage": null, "magneticImage": null }
]
```
- **GOTCHA**: Valid JSON only — double quotes, no trailing commas.
- **VALIDATE**: File is valid JSON

### Task 3: CREATE frontend/src/components/DepthSliceCard.tsx

- **IMPLEMENT**: Create a placeholder card component that represents a 2D spatial image at a given depth:
```tsx
import type { DepthSlice } from '../types'

interface DepthSliceCardProps {
  slice: DepthSlice;
  type: 'gravity' | 'magnetic';
}

export default function DepthSliceCard({ slice, type }: DepthSliceCardProps) {
  const isGravity = type === 'gravity'
  const gradient = isGravity
    ? 'from-lava-600/30 via-lava-500/20 to-volcanic-800'
    : 'from-blue-600/30 via-blue-500/20 to-volcanic-800'
  const accentColor = isGravity ? 'text-lava-400' : 'text-blue-400'
  const label = isGravity ? 'Gravitasi' : 'Magnetik'

  return (
    <div className="rounded-lg overflow-hidden border border-volcanic-700 bg-volcanic-950">
      <div className={`h-64 sm:h-80 bg-gradient-to-br ${gradient} flex items-center justify-center relative`}>
        <div className="text-center">
          <p className={`text-sm font-mono ${accentColor} mb-2`}>{slice.depth}</p>
          <p className="text-volcanic-500 text-sm">Gambar {label.toLowerCase()}</p>
          <p className="text-volcanic-600 text-xs mt-1">Placeholder — akan diganti dengan data asli</p>
        </div>
      </div>
      <div className="p-3 flex items-center justify-between">
        <span className={`text-sm font-medium ${accentColor}`}>{label}</span>
        <span className="text-xs text-volcanic-500">{slice.depth}</span>
      </div>
    </div>
  )
}
```
- **IMPORTS**: `import type { DepthSlice } from '../types'`
- **GOTCHA**: The card uses gradient backgrounds as placeholders. When real images arrive, replace the gradient div with an `<img>` tag.
- **VALIDATE**: `npx tsc --noEmit -p tsconfig.app.json`

### Task 4: CREATE frontend/src/components/SpatialDataScroller.tsx

- **IMPLEMENT**: Create the main scroller component with:
  1. Section heading: "Data Spasial 2D"
  2. Description paragraph
  3. Layer toggle buttons (Gravity / Magnetik) — same pattern as Viewer3D
  4. Two-column layout:
     - Left: Vertical depth level scroller (scrollable list of depth buttons, ~200px tall, snap scrolling)
     - Right: Display area showing DepthSliceCard(s) for the selected depth
  5. Selected depth highlighted in the scroller
  6. Responsive: stacks vertically on mobile

  Key implementation details:
  - `useState` for `selectedDepthIndex` (default 0) and `showLayers` (default: `{ gravity: true, magnetic: true }`)
  - Import `spatialData` from `../data/spatial.json`
  - Import `DepthSlice` type from `../types`
  - Import `DepthSliceCard` from `./DepthSliceCard`
  - Use Lucide icons: `import { Layers, ArrowDownToLine } from 'lucide-react'`
  - Vertical scroller: `div` with `overflow-y-auto max-h-64 space-y-1` containing buttons for each depth level
  - Active depth button: `bg-volcanic-700 text-magma-400`, inactive: `text-volcanic-400 hover:bg-volcanic-800`
  - Display area: grid with 1 or 2 columns depending on which layers are visible
  - If both layers visible: `grid-cols-2`, if one: `grid-cols-1`

  Structure:
```tsx
<section className="bg-volcanic-950 py-16 sm:py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <div className="text-center mb-10">
      <h2 className="font-oswald text-3xl sm:text-4xl font-bold text-volcanic-50 mb-4">
        Data Spasial 2D
      </h2>
      <p className="text-volcanic-400 max-w-2xl mx-auto">
        Pilih kedalaman untuk melihat irisan data anomali gravitasi dan magnetik.
      </p>
    </div>

    {/* Toggle buttons */}
    <div className="flex justify-center gap-3 mb-8">
      {/* Gravity toggle button */}
      {/* Magnetic toggle button */}
    </div>

    {/* Two-column layout: scroller + display */}
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Left: Vertical depth scroller */}
      <div className="lg:w-56 shrink-0">
        <h3 className="text-sm font-semibold text-volcanic-300 mb-3 flex items-center gap-2">
          <ArrowDownToLine className="w-4 h-4" />
          Kedalaman
        </h3>
        <div className="overflow-y-auto max-h-64 space-y-1 pr-2">
          {/* Depth buttons */}
        </div>
      </div>

      {/* Right: Display area */}
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-volcanic-300 mb-3 flex items-center gap-2">
          <Layers className="w-4 h-4" />
          {selected slice label}
        </h3>
        <div className="grid gap-4" style={{ gridTemplateColumns: showGravity && showMagnetic ? '1fr 1fr' : '1fr' }}>
          {/* DepthSliceCard components */}
        </div>
      </div>
    </div>
  </div>
</section>
```
- **IMPORTS**: `import { useState } from 'react'`, `import { Layers, ArrowDownToLine } from 'lucide-react'`, `import spatialData from '../data/spatial.json'`, `import type { DepthSlice } from '../types'`, `import DepthSliceCard from './DepthSliceCard'`
- **GOTCHA**: Use `grid-cols-1` or `grid-cols-2` via Tailwind class based on state, not inline style. Use conditional className: `className={\`grid gap-4 ${showGravity && showMagnetic ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}\`}`
- **GOTCHA**: The `spatialData.depthSlices` field must exist — ensure spatial.json was updated in Task 2.
- **VALIDATE**: `npx tsc --noEmit -p tsconfig.app.json` && `npm run lint`

### Task 5: UPDATE frontend/src/pages/LandingPage.tsx

- **IMPLEMENT**: Add SpatialDataScroller import and render it after Viewer3D:
```tsx
import HeroSection from '../components/HeroSection'
import Viewer3D from '../components/Viewer3D'
import SpatialDataScroller from '../components/SpatialDataScroller'

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <Viewer3D />
      <SpatialDataScroller />
    </>
  )
}
```
- **VALIDATE**: `npx tsc --noEmit -p tsconfig.app.json` && `npm run lint`

### Task 6: Full Build Validation

- **VALIDATE**: `npm run build` — must complete with zero errors
- **VALIDATE**: `npm run lint` — must pass with zero warnings
- **VALIDATE**: `npx tsc --noEmit -p tsconfig.app.json` — type check must pass

---

## TESTING STRATEGY

### Unit Tests

No test framework configured. Manual validation covers correctness.

### Edge Cases

- Single layer visible: display area should show one card, not break layout
- No layers visible: show empty state message ("Pilih lapisan data untuk melihat irisan")
- Mobile viewport: scroller and display should stack vertically
- Many depth levels: scroller should scroll, not overflow

---

## VALIDATION COMMANDS

### Level 1: Syntax & Style

```bash
cd frontend && npm run lint
```

### Level 2: Type Checking

```bash
cd frontend && npx tsc --noEmit -p tsconfig.app.json
```

### Level 3: Build

```bash
cd frontend && npm run build
```

### Level 4: Manual Validation

1. `cd frontend && npm run dev` — start dev server
2. Open `http://localhost:5173/` — scroll down past 3D viewer
3. Verify "Data Spasial 2D" section appears
4. Click depth levels in vertical scroller — display updates
5. Toggle gravity/magnetic buttons — cards show/hide
6. Resize to mobile width — layout stacks vertically

---

## ACCEPTANCE CRITERIA

- [ ] `DepthSlice` interface added to types/index.ts
- [ ] `depthSlices` array added to spatial.json
- [ ] `DepthSliceCard` component renders placeholder gradient cards
- [ ] `SpatialDataScroller` component with vertical depth selector
- [ ] Layer toggle buttons for gravity and magnetic views
- [ ] Selected depth highlighted in scroller
- [ ] Display area shows correct cards based on selected depth and visible layers
- [ ] Responsive layout (stacks on mobile)
- [ ] LandingPage includes SpatialDataScroller after Viewer3D
- [ ] `npm run build` completes with zero errors
- [ ] `npm run lint` passes with zero warnings
- [ ] TypeScript type checking passes with zero errors

---

## COMPLETION CHECKLIST

- [ ] All 6 tasks completed in order
- [ ] Each task validation passed immediately
- [ ] `npm run build` succeeds
- [ ] `npm run lint` passes
- [ ] `npx tsc --noEmit` passes
- [ ] All acceptance criteria met

---

## NOTES

**Design Decisions:**
- Placeholder gradient cards instead of real images — real .png/.jpg data will replace these later
- Vertical scroller on the left, display on the right — follows the "vertical scroller" requirement from the README
- Both gravity and magnetic visible by default — user can toggle off
- Depth slices data stored in spatial.json alongside existing layers/stats — keeps all spatial config in one file

**Trade-offs:**
- Gradient placeholders are visually distinct but not real data. Clear labeling as "Placeholder" avoids confusion.
- No image optimization needed yet since we use CSS gradients. When real images arrive, consider lazy loading.

**Future:**
- Replace gradient backgrounds with real `<img>` tags pointing to actual spatial data images
- Add crosshair or annotation overlay on images
- Add download buttons for each depth slice
- Add color scale legend for anomaly values
