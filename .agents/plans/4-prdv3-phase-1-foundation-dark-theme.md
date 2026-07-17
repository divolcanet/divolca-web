# Feature: PRDv3 Phase 1 — Foundation & Dark Theme

The following plan should be complete, but validate documentation and codebase patterns before implementing.

Pay special attention to: existing Tailwind theme tokens in `index.css`, the `cn()` utility import path, Three.js/R3F version compatibility, and the `Viewer3D` component's current rendering pattern.

---

## Feature Description

Transform DiVolca.net's visual foundation by applying a consistent dark theme (`#091413` base), adding smooth-scroll infrastructure (Lenis), animation libraries (GSAP, framer-motion), post-processing effects (bloom) to the 3D scene, atmospheric 3D lighting, micro-interactions, the persistent 3D scene context, loading skeletons for the GLB model, and a data-driven legend. This is the visual and architectural foundation for all subsequent PRDv3 phases.

## User Story

As a visitor to DiVolca.net,
I want the site to feel like a premium geospatial data platform with cinematic dark visuals, smooth scrolling, and polished micro-interactions,
So that the research data feels authoritative and the experience is engaging from the first moment.

## Problem Statement

The current site has an inconsistent visual theme (mix of dark and light elements), no smooth scroll, basic 3D lighting without post-processing effects, no loading experience for the 3D model, no persistent 3D context causing costly re-initialization on navigation, a hardcoded static legend, and no micro-interactions on interactive elements. It "feels mainstream" and fails to signal premium research-grade quality.

## Solution Statement

Phase 1 establishes the entire visual and animation foundation:
1. Consistent dark theme across all routes using the defined `#091413` palette
2. New dependencies for animation (Lenis, GSAP, framer-motion, zustand, postprocessing)
3. Lenis smooth scroll wrapping the app globally
4. Bloom + tone-mapping post-processing on the 3D scene
5. Enhanced 3D lighting (fog, hemisphere light, drop-shadow map)
6. Hover/press micro-interactions on all interactive components
7. Loading skeleton component for the GLB terrain model
8. Persistent Scene3D context (single Canvas across navigations)
9. Data-driven Legend that reads min/max/unit from props

## Feature Metadata

**Feature Type**: Enhancement (visual/architectural overhaul)
**Estimated Complexity**: High
**Primary Systems Affected**: `index.css`, `3d-viewer.tsx`, `AppLayout.tsx`, `Legend.tsx`, `SpatialMain.tsx`, `SpatialFull.tsx`, `LandingPage.tsx` + new files (`Scene3DContext`, `LoadingSkeleton`)
**Dependencies**: `gsap` ^3.12.x, `lenis` ^1.x, `framer-motion` ^12.x, `@react-three/postprocessing` ^3.x, `zustand` ^5.x, `three-mesh-bvh` ^0.8.x

---

## CONTEXT REFERENCES

### Relevant Codebase Files — READ BEFORE IMPLEMENTING

- `frontend/src/index.css` — Current Tailwind theme tokens (`#091413` accent, primary colors, fonts). Add new tokens for surfaces and overlays.
- `frontend/src/components/3d-viewer.tsx` (full file, 167 lines) — Current Canvas setup with basic ambient+directional lights, no postprocessing. This is the main file to enhance.
- `frontend/src/components/SpatialMain.tsx` (full file, 78 lines) — Uses `Viewer3D` with `MapModel` and `Legend`. Has hardcoded `bg-[#A1C2BD]` container — needs dark theming.
- `frontend/src/components/SpatialFull.tsx` (full file, 87 lines) — Same pattern as SpatialMain. Also has `bg-[#A1C2BD]`.
- `frontend/src/components/Legend.tsx` (full file, 35 lines) — Hardcoded static legend. Must become data-driven with min/max/unit props.
- `frontend/src/layouts/AppLayout.tsx` (31 lines) — Wraps routes with Navbar, Footer, VolcanoEventStats, Chatbot. Canvas should mount here.
- `frontend/src/pages/LandingPage.tsx` (177 lines) — Uses `bg-primary-fg` on containers. Hero slides + SpatialMain + Citation.
- `frontend/src/pages/FullPage.tsx` (7 lines) — Renders `SpatialFull`.
- `frontend/src/main.tsx` (18 lines) — Entry point. BrowserRouter + TooltipProvider + Toaster.
- `frontend/src/lib/utils.ts` — `cn()` function using `clsx` + `tailwind-merge`.
- `frontend/src/components/ui/reveal.tsx` — IntersectionObserver-based fade-in pattern (reference for micro-interaction patterns).
- `frontend/src/components/ui/button.tsx` — CVA variant structure (reference for styling patterns).
- `frontend/src/data/types.ts` — `MountainSpatial`, `Category`, `Model`, `HotspotData`, `VolcanoActivityStat`.
- `frontend/src/data/spatial.ts` — Static spatial model data with categories and models.
- `frontend/package.json` — Current dependencies list.

### New Files to Create

- `frontend/src/context/Scene3DContext.tsx` — React context + provider for persistent Three.js canvas
- `frontend/src/components/LoadingSkeleton.tsx` — Skeleton loader for GLB model loading state
- `frontend/src/components/Scene3DCanvas.tsx` — The single persistent Canvas wrapper

### Relevant Documentation

- [@react-three/postprocessing docs](https://github.com/pmndrs/react-postprocessing) — EffectComposer, Bloom, ToneMapping passes
- [@react-three/drei Environment](https://github.com/pmndrs/drei#environment) — For hemisphere light and scene atmosphere
- [Lenis docs](https://github.com/studio-freight/lenis) — Smooth scroll configuration
- [GSAP ScrollTrigger docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) — Scroll-driven animations (used in later phases, install in Phase 1)
- [zustand docs](https://github.com/pmndrs/zustand) — Lightweight store for view state

### Patterns to Follow

**Naming Conventions:**
- PascalCase for component files (`LoadingSkeleton.tsx`, `Scene3DCanvas.tsx`)
- camelCase for utility/hook files (`useScroll.ts`)
- Components use named exports where the file has multiple exports, default export for single-component files
- React context files use PascalCase (`Scene3DContext.tsx`)

**Canvas/Scene Pattern (current `3d-viewer.tsx`):**
```tsx
// Current pattern — each page creates its own Canvas
<Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
  <ambientLight intensity={0.4} />
  <directionalLight position={[5, 8, 5]} intensity={0.8} />
  {children}
  <OrbitControls makeDefault />
</Canvas>
```

**UI Component Pattern (from `button.tsx`):**
```tsx
// CVA-based variant pattern
const variants = cva("base-styles", {
  variants: { variant: { default: "...", outline: "..." } }
})
```

**Dark Theme Token Pattern (from `index.css`):**
```css
@theme {
  --color-primary-fg: #eeeeee;
  --color-accent: #091413;
  --color-primary-10: #99fd53;
  /* ... */
}
```

### Gotchas & Constraints

- The `Viewer3D` component is imported in both `SpatialMain.tsx:2` and `SpatialFull.tsx:2` — both must continue to work after refactoring
- `useGLTF` from `@react-three/drei` must be wrapped in `<Suspense>` with a fallback (loading skeleton)
- The persistent Canvas pattern requires the Canvas to never unmount — mount it in `AppLayout` and control children via context
- `OrbitControls` from drei uses `makeDefault` — when we split into two viewports (Phase 3), this will change, but for Phase 1 keep `makeDefault`
- Post-processing requires R3F v9+ with the `@react-three/postprocessing` v3 API — the `EffectComposer` is a child of `<Canvas>`
- `three-mesh-bvh` is installed but not immediately used in Phase 1 — it's a dependency for future phases; install it now
- React Compiler is enabled (babel-plugin-react-compiler in vite.config.ts) — ensure new components satisfy React Compiler rules (no hooks in conditionals, stable key usage)
- TypeScript 6.0's `erasableSyntaxOnly` means `enum` is not allowed — use `as const` objects or union types instead

---

## IMPLEMENTATION PLAN

### Phase 1: Dependencies & Foundation

**Tasks:**
- Install all new npm packages
- Verify they compile with existing `tsconfig.app.json` strict settings

### Phase 2: Core Implementation

**Tasks:**
- Enhance `index.css` with full dark theme surface tokens
- Update `3d-viewer.tsx` with post-processing, fog, hemisphere light, shadow
- Create `LoadingSkeleton.tsx` for GLB model loading
- Create `Scene3DContext.tsx` for persistent 3D scene
- Create `Scene3DCanvas.tsx` as the single Canvas instance
- Refactor `AppLayout.tsx` to mount the persistent Canvas
- Update `SpatialMain.tsx` and `SpatialFull.tsx` for dark theme + persistent Canvas
- Rewrite `Legend.tsx` to be data-driven
- Apply dark theme across all pages
- Add micro-interaction utilities

### Phase 3: Integration & Polish

**Tasks:**
- Wire up Lenis smooth scroll in main.tsx
- Wire up framer-motion AnimatePresence for page transitions
- Remove legacy light backgrounds from all remaining components

### Phase 4: Testing & Validation

**Tasks:**
- Run `npm run build` (tsc + vite build) — zero errors
- Run `npm run lint` — zero warnings
- Visual verification of dark theme across all 8 routes
- Visual verification of bloom effect on 3D scene

---

## STEP-BY-STEP TASKS

Execute every task in order, top to bottom. Each task is independently testable.

### TASK 1: Install new dependencies

- **IMPLEMENT**: Run npm install for all Phase 1 packages
- **GOTCHA**: `@gsap/react` is optional — GSAP works fine without it. For React 19 compatibility, use `gsap` directly. `@react-three/postprocessing` v3 requires R3F v9+. `zustand` v5 uses the new `create` API.

```bash
npm install gsap@^3.12.5 lenis@^1.1.18 framer-motion@^12.6.3 @react-three/postprocessing@^3.0.1 zustand@^5.0.3 three-mesh-bvh@^0.8.4
```

- **VALIDATE**: `npm ls gsap lenis framer-motion @react-three/postprocessing zustand three-mesh-bvh` shows all packages installed

---

### TASK 2: Enhance dark theme tokens in `index.css`

- **IMPLEMENT**: Add new color tokens for card surfaces, elevated surfaces, and overlay backgrounds. The base dark theme uses `#091413` as `--color-accent`. Add a darker shade for cards and a lighter tint for elevated surfaces.
- **FILE**: `frontend/src/index.css`
- **PATTERN**: Existing theme block in `index.css:3-14`

**UPDATE** `frontend/src/index.css` — Add new tokens after the existing `--color-accent` line:

```css
@theme {
  --color-primary-fg: #eeeeee;
  --color-accent: #091413;
  --color-accent-50: #0d1f1c;
  --color-accent-100: #122a25;
  --color-accent-200: #1a3d36;
  --color-surface: #0d1f1c;
  --color-surface-elevated: #122a25;
  --color-primary-10: #99fd53;
  --color-primary-25: #6fcf97;
  --color-primary-50: #2fa084;
  --color-primary-75: #1f6f5f;
  --color-secondary: #dceb52;
  --color-muted: oklch(0.556 0 0);
  --color-destructive: #ff383c;

  --font-fraunces: "Fraunces", system-ui, sans-serif;
  --font-inter: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
}

/* Add after the existing @theme block */
@layer base {
  body {
    @apply bg-accent text-primary-fg;
  }
}
```

- **VALIDATE**: `npm run build` passes without errors

---

### TASK 3: Create `LoadingSkeleton.tsx`

- **IMPLEMENT**: Create a skeleton component for the GLB model loading state. Shows pulsing placeholder shapes styled with dark theme tokens.
- **FILE**: `frontend/src/components/LoadingSkeleton.tsx`
- **PATTERN**: Follow `card.tsx` component structure — a simple div-based skeleton with animate-pulse

```tsx
import { cn } from "../lib/utils";

export function LoadingSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-full h-full flex items-center justify-center bg-accent-50 rounded-xl",
        className,
      )}
    >
      <div className="flex flex-col items-center gap-4 p-8">
        <div className="w-24 h-24 rounded-full bg-accent-100 animate-pulse" />
        <div className="h-4 w-48 bg-accent-100 rounded animate-pulse" />
        <div className="h-3 w-32 bg-accent-100 rounded animate-pulse" />
      </div>
    </div>
  );
}
```

- **VALIDATE**: File exists and TypeScript compiles: `npx tsc --noEmit --pretty`

---

### TASK 4: Create `Scene3DContext.tsx`

- **IMPLEMENT**: Create a React context that will hold the persistent Three.js scene state. For Phase 1, this holds: `sceneReady` flag, the scene object reference, and a `registerContent`/`unregisterContent` API for pages to add child components.
- **FILE**: `frontend/src/context/Scene3DContext.tsx`
- **PATTERN**: Standard React context + provider pattern, similar to how `TooltipProvider` wraps components in `main.tsx`

```tsx
import { createContext, useContext, useState, useRef, type ReactNode } from "react";
import type * as THREE from "three";

interface Scene3DContextValue {
  sceneRef: React.MutableRefObject<THREE.Scene | null>;
  isReady: boolean;
  setReady: (v: boolean) => void;
  modelLoading: boolean;
  setModelLoading: (v: boolean) => void;
}

const Scene3DContext = createContext<Scene3DContextValue | null>(null);

export function Scene3DProvider({ children }: { children: ReactNode }) {
  const sceneRef = useRef<THREE.Scene | null>(null);
  const [isReady, setReady] = useState(false);
  const [modelLoading, setModelLoading] = useState(true);

  return (
    <Scene3DContext.Provider value={{ sceneRef, isReady, setReady, modelLoading, setModelLoading }}>
      {children}
    </Scene3DContext.Provider>
  );
}

export function useScene3D() {
  const ctx = useContext(Scene3DContext);
  if (!ctx) throw new Error("useScene3D must be used within Scene3DProvider");
  return ctx;
}
```

- **VALIDATE**: `npx tsc --noEmit --pretty` passes

---

### TASK 5: Create `Scene3DCanvas.tsx`

- **IMPLEMENT**: The single persistent Canvas wrapper. Uses `@react-three/fiber` Canvas with all the enhanced lighting, post-processing, and OrbitControls. Rendered once in AppLayout.
- **FILE**: `frontend/src/components/Scene3DCanvas.tsx`
- **PATTERN**: Based on current `Viewer3D` in `3d-viewer.tsx:155-166` but with post-processing, fog, hemisphere light, and shadows

```tsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { EffectComposer, Bloom, ToneMapping } from "@react-three/postprocessing";
import { Suspense, type ReactNode } from "react";
import { LoadingSkeleton } from "./LoadingSkeleton";

export function Scene3DCanvas({ children }: { children?: ReactNode }) {
  return (
    <Canvas
      camera={{ position: [8, 6, 8], fov: 45 }}
      shadows
      gl={{
        antialias: true,
        toneMapping: 3,
        toneMappingExposure: 1.2,
      }}
      style={{ background: "#091413" }}
    >
      {/* Atmospheric lighting */}
      <fog attach="fog" args={["#091413", 15, 30]} />
      <hemisphereLight args={["#87ceeb", "#3a3a3a", 0.6]} />
      <directionalLight
        position={[8, 12, 4]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <ambientLight intensity={0.3} />

      {/* Scene content */}
      <Suspense fallback={null}>{children}</Suspense>

      {/* Controls */}
      <OrbitControls makeDefault />

      {/* Post-processing */}
      <EffectComposer>
        <Bloom
          intensity={0.3}
          luminanceThreshold={0.6}
          luminanceSmoothing={0.7}
        />
        <ToneMapping mode={3} exposure={1.0} />
      </EffectComposer>
    </Canvas>
  );
}
```

**IMPORTS**:
- `@react-three/fiber` for `Canvas`
- `@react-three/drei` for `OrbitControls`, `Environment`
- `@react-three/postprocessing` for `EffectComposer`, `Bloom`, `ToneMapping`

**GOTCHA**: Post-processing v3 API differs from v2. The `EffectComposer` wraps passes as children. `ToneMapping` with `mode={3}` is ACES Filmic tone mapping. Bloom `luminanceThreshold` of 0.6 means only bright areas bloom.

- **VALIDATE**: `npx tsc --noEmit --pretty` passes

---

### TASK 6: Refactor `AppLayout.tsx` to mount persistent Canvas

- **IMPLEMENT**: Wrap the app content with `Scene3DProvider` and render `Scene3DCanvas` once (hidden when not on 3D pages, visible on landing + full page). The Canvas persists across navigations.
- **FILE**: `frontend/src/layouts/AppLayout.tsx`
- **PATTERN**: Current file at `AppLayout.tsx:1-31`

**UPDATE** `frontend/src/layouts/AppLayout.tsx`:

```tsx
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import NoupeChatbot from "../components/NoupeChatbot";
import VolcanoEventStats from "../components/VolcanoEventStats";
import { Scene3DProvider } from "../context/Scene3DContext";
import { Scene3DCanvas } from "../components/Scene3DCanvas";
import { useScroll } from "../hooks/useScroll";
import { cn } from "../lib/utils";

const SCENE_PAGES = ["/", "/full"];

export default function AppLayout() {
  const scrolled = useScroll(50);
  const { pathname } = useLocation();
  const showScene = SCENE_PAGES.includes(pathname);

  return (
    <Scene3DProvider>
      {/* Persistent 3D canvas — rendered once, visibility toggled */}
      <div
        className={cn(
          "fixed inset-0 z-0 transition-opacity duration-500 pointer-events-none",
          showScene ? "opacity-100" : "opacity-0",
        )}
        aria-hidden={!showScene}
      >
        <Scene3DCanvas />
      </div>

      <div className="relative z-10 min-h-svh flex flex-col">
        <div
          className={cn(
            "sticky top-0 z-60 transition-transform duration-300",
            scrolled && "-translate-y-full",
          )}
        >
          <VolcanoEventStats />
        </div>
        <Navbar />

        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <NoupeChatbot />
      </div>
    </Scene3DProvider>
  );
}
```

**GOTCHA**: The fixed Canvas uses `pointer-events-none` on the outer div but the Canvas itself must capture events when visible. The `Scene3DCanvas` div needs `pointer-events-auto` when `showScene` is true, or we handle it differently. Alternative: render the Canvas only on the landing and full pages but keep it mounted using React's `key` or conditional rendering with `display:none`.

- **VALIDATE**: `npx tsc --noEmit --pretty` passes

---

### TASK 7: Update `3d-viewer.tsx` to work with context (legacy adapter)

- **IMPLEMENT**: Keep the existing `Viewer3D` component as a backward-compatible wrapper that adds content to the persistent scene. For Phase 1, the simpler approach is: keep `Viewer3D` as a standalone Canvas for pages that don't use the persistent Canvas yet (e.g., if the persistent Canvas path isn't fully implemented, fall back per-page). Actually, since SpatialMain and SpatialFull each render their own Canvas, we need to refactor them to use the persistent Canvas.

For Phase 1, the cleanest approach: `SpatialMain` and `SpatialFull` no longer render `<Viewer3D>` directly. Instead, page content is rendered inside the persistent `Scene3DCanvas`. We create a `SceneContent` component that SpatialMain/SpatialFull render inside the Canvas.

**Alternative simpler approach for Phase 1**: Keep the current per-page Canvas rendering but wire up the Scene3DContext to share camera state. The full persistence (single Canvas mount) requires more architectural changes that can be spread across phases.

**Decision**: For Phase 1, implement Scene3DContext as a zustand-like store (not a React context) for view state (camera, active model, depth), and update `Viewer3D` to use it. The true single-Canvas persistence will be fully implemented in Phase 2 when scroll-driven narrative is added. This prevents breaking the existing working 3D views.

**UPDATE** `frontend/src/context/Scene3DContext.tsx` — Replace content with:

```tsx
import { create } from "zustand";

interface ViewState {
  cameraPosition: [number, number, number] | null;
  activeModel: string | null;
  activeCategory: string | null;
  depth: number;
  comparisonMode: boolean;
  modelLoading: boolean;
  setCameraPosition: (pos: [number, number, number] | null) => void;
  setActiveModel: (model: string | null) => void;
  setActiveCategory: (cat: string | null) => void;
  setDepth: (depth: number) => void;
  setComparisonMode: (on: boolean) => void;
  setModelLoading: (v: boolean) => void;
}

export const useViewStore = create<ViewState>((set) => ({
  cameraPosition: null,
  activeModel: null,
  activeCategory: null,
  depth: 0,
  comparisonMode: false,
  modelLoading: true,
  setCameraPosition: (pos) => set({ cameraPosition: pos }),
  setActiveModel: (model) => set({ activeModel: model }),
  setActiveCategory: (cat) => set({ activeCategory: cat }),
  setDepth: (depth) => set({ depth }),
  setComparisonMode: (on) => set({ comparisonMode: on }),
  setModelLoading: (v) => set({ modelLoading: v }),
}));
```

**UPDATE** `frontend/src/components/3d-viewer.tsx` — Add post-processing and enhanced lighting to `Viewer3D`:

Replace the `Viewer3D` function (lines 155-166) with:

```tsx
import { EffectComposer, Bloom, ToneMapping } from "@react-three/postprocessing";

export function Viewer3D({ children }: { children?: ReactNode }) {
  return (
    <Canvas
      camera={{ position: [5, 5, 5], fov: 50 }}
      shadows
      gl={{
        antialias: true,
        toneMapping: 3,
        toneMappingExposure: 1.0,
      }}
      style={{ background: "#091413" }}
    >
      <fog attach="fog" args={["#091413", 15, 25]} />
      <hemisphereLight args={["#87ceeb", "#3a3a3a", 0.6]} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.0}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight position={[-3, 4, -3]} intensity={0.3} />
      <ambientLight intensity={0.2} />

      <Suspense fallback={null}>
        {children}
      </Suspense>

      <OrbitControls makeDefault />

      <EffectComposer>
        <Bloom
          intensity={0.2}
          luminanceThreshold={0.7}
          luminanceSmoothing={0.8}
        />
        <ToneMapping mode={3} exposure={1.0} />
      </EffectComposer>
    </Canvas>
  );
}
```

**IMPORTS** (add to existing imports in `3d-viewer.tsx:1-8`):
- `Suspense` from `react`
- `EffectComposer`, `Bloom`, `ToneMapping` from `@react-three/postprocessing`

- **VALIDATE**: `npx tsc --noEmit --pretty` passes

---

### TASK 8: Apply dark theme to `SpatialMain.tsx`

- **IMPLEMENT**: Remove the light `bg-[#A1C2BD]` container background, use `bg-accent` instead. Remove the white backgrounds from overlay elements.
- **FILE**: `frontend/src/components/SpatialMain.tsx`
- **PATTERN**: Lines 34 (`bg-[#A1C2BD]`), 66 (`bg-white`), Legend

**UPDATE** in `SpatialMain.tsx`:
- Line 34: Change `bg-[#A1C2BD]` to `bg-accent-50`
- Line 66: Change `bg-white` to `bg-accent-100` on the fullscreen button
- The Legend component will be updated in Task 10

- **VALIDATE**: `npx tsc --noEmit --pretty` passes

---

### TASK 9: Apply dark theme to `SpatialFull.tsx`

- **IMPLEMENT**: Same changes as Task 8 but for the full-page viewer.
- **FILE**: `frontend/src/components/SpatialFull.tsx`
- **PATTERN**: Line 25 (`bg-[#A1C2BD]`), Line 76 (`bg-white`)

**UPDATE** in `SpatialFull.tsx`:
- Line 25: Change `bg-[#A1C2BD]` to `bg-accent-50`
- Line 76: Change `bg-white` to `bg-accent-100` on the "Beranda" button

- **VALIDATE**: `npx tsc --noEmit --pretty` passes

---

### TASK 10: Rewrite `Legend.tsx` to be data-driven

- **IMPLEMENT**: Replace the hardcoded static legend with a component that accepts `min`, `max`, `unit`, and an optional `steps` array. Re-style with dark theme.
- **FILE**: `frontend/src/components/Legend.tsx`
- **PATTERN**: Current `Legend.tsx:1-35` — replace all content

```tsx
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
        "bg-accent-100/90 backdrop-blur-sm p-4 rounded-xl flex flex-col gap-3 w-48 text-sm text-primary-fg border border-accent-200",
        className,
      )}
    >
      <h3 className="font-bold font-fraunces">Legenda</h3>
      <div className="flex items-start gap-2">
        <div className="flex-1">
          <div className="w-full h-3 bg-gradient-to-r from-blue-500 via-green-500 via-yellow-500 to-red-500 rounded-full" />
          <div className="flex w-full justify-between text-xs text-primary-fg/70 mt-1">
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
```

- **VALIDATE**: `npx tsc --noEmit --pretty` passes

---

### TASK 11: Update all pages with consistent dark theme

- **IMPLEMENT**: Replace all `bg-primary-fg` (light `#eeeeee`) with `bg-accent` (dark `#091413`) in page containers. Adjust text colors for contrast on dark backgrounds.
- **FILES**:
  - `frontend/src/pages/LandingPage.tsx` — Lines 155, 170: change `bg-primary-fg` to `bg-accent`
  - `frontend/src/pages/ResearchPage.tsx` — Line 35: change `bg-primary-fg` to `bg-accent`; Lines 60, 81: same
  - `frontend/src/pages/AboutDiengPage.tsx` — Line 11: change `bg-primary-fg` to `bg-accent`; Line 19: adjust gradient overlay; Lines 73, 163, 213: update card backgrounds
  - `frontend/src/pages/AboutTeamPage.tsx` — Line 105: change `bg-primary-fg` to `bg-accent`
  - `frontend/src/pages/GalleryPage.tsx` — Line 98: change `bg-primary-fg` to `bg-accent`
  - `frontend/src/pages/FAQPage.tsx` — Line 16: change `bg-primary-fg` to `bg-accent`
  - `frontend/src/pages/GlossaryPage.tsx` — Line 43: change `bg-primary-fg` to `bg-accent`

**PATTERN**: Each page has `Container className=" bg-primary-fg"` at the top level. Replace `bg-primary-fg` with `bg-accent` and update descendant white card backgrounds to use `bg-accent-50` or `bg-accent-100`.

**SPECIFIC CHANGES**:

`LandingPage.tsx`:
- Line 155: `bg-primary-fg` → `bg-accent`
- Line 157: `text-primary-75` → `text-primary-25` (lighter on dark bg)
- Line 170: `bg-primary-fg` → `bg-accent`

`ResearchPage.tsx`:
- Line 35: `bg-primary-fg` → `bg-accent`
- Line 43: `bg-white` → `bg-accent-100`
- Line 60: `bg-primary-fg` → `bg-accent`
- Line 81: `bg-primary-fg` → `bg-accent`

`AboutDiengPage.tsx`:
- Line 11: `bg-primary-fg` → `bg-accent`
- Line 19: gradient should be `from-accent via-accent/70 to-accent/50`
- Lines 73, 163: `bg-white` → `bg-accent-100`
- Line 213: `bg-white` → `bg-accent-100`
- Line 132: `bg-secondary` is fine (yellow accent banner)

`AboutTeamPage.tsx`:
- Line 105: `bg-primary-fg` → `bg-accent`
- Adjust card/text colors to match dark theme

`GalleryPage.tsx`:
- Line 98: `bg-primary-fg` → `bg-accent`
- Keep existing card patterns (they use `border-primary-10` which works on dark)

`FAQPage.tsx`:
- Line 16: `bg-primary-fg` → `bg-accent`
- Line 35: `bg-white` → `bg-accent-100`

`GlossaryPage.tsx`:
- Line 43: `bg-primary-fg` → `bg-accent`
- Line 60: `bg-white` → `bg-accent-100`
- Text colors may need adjustment for contrast

- **VALIDATE**: `npm run build` passes; navigate to each route and verify dark background

---

### TASK 12: Add micro-interactions

- **IMPLEMENT**: Add a small CSS utility class for hover/press effects and apply to interactive elements. Add `transform-gpu transition-all duration-200 hover:scale-105 active:scale-95` pattern to buttons and clickable cards.
- **FILES**:
  - `frontend/src/index.css` — Add micro-interaction utilities
  - Update `button.tsx` base styles to include hover/press transforms

**UPDATE** `frontend/src/index.css` — Add after the `@layer base` block:

```css
@layer utilities {
  .micro-interact {
    @apply transition-all duration-200 ease-out cursor-pointer;
  }
  .micro-interact-hover {
    @apply micro-interact hover:scale-[1.03] active:scale-[0.97];
  }
  .micro-interact-press {
    @apply micro-interact active:scale-[0.95];
  }
}
```

**UPDATE** `frontend/src/components/ui/button.tsx` — Add hover/press transforms to the base variants string (line 6). Add `hover:scale-[1.03] active:scale-[0.97]` to the `cva` base class string.

- **VALIDATE**: `npx tsc --noEmit --pretty` passes; verify hover/press effects on buttons

---

### TASK 13: Configure Lenis smooth scroll globally

- **IMPLEMENT**: Initialize Lenis in `main.tsx` and sync with the scroll target. Lenis replaces native scroll with smooth physics-based scrolling.
- **FILE**: `frontend/src/main.tsx`
- **PATTERN**: Lenis 1.x API — `new Lenis()` → `lenis.on('scroll', callback)` → `requestAnimationFrame` loop

**UPDATE** `frontend/src/main.tsx`:

```tsx
import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Lenis from "lenis";
import "./index.css";
import App from "./App.tsx";
import { Toaster } from "./components/ui/sonner.tsx";
import { BrowserRouter } from "react-router-dom";
import { TooltipProvider } from "./components/ui/tooltip.tsx";

function Root() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <StrictMode>
      <Toaster richColors position="top-center" />
      <BrowserRouter>
        <TooltipProvider>
          <App />
        </TooltipProvider>
      </BrowserRouter>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")!).render(<Root />);
```

**GOTCHA**: Lenis may interfere with the `useScroll` hook in `NavBar.tsx` since it overrides native scroll. The `useScroll` hook listens to `window.scrollY` — Lenis provides `lenis.scroll` as the replacement. For Phase 1, keep the existing `useScroll` hook working by listening to Lenis's scroll events instead of `window`. But that would require changes across multiple files. **Alternative**: Add a Lenis sync to update `window.scrollY` — or create a separate Lenis-aware scroll hook.

**Decision**: For Phase 1, keep `useScroll` working by making Lenis update the DOM scroll position. Use `lenis.on('scroll', (e) => { /* scroll position handled by lenis */ })` and update `useScroll` to optionally accept a Lenis instance. This is simpler but a more thorough integration will happen in Phase 2.

For now, wrap Lenis initialization in `main.tsx` and leave `useScroll` as-is. Lenis provides `window.scrollY` compatibility by default.

- **VALIDATE**: Page has smooth scroll animation when scrolling

---

### TASK 14: Add Framer Motion AnimatePresence for page transitions

- **IMPLEMENT**: Wrap `<Routes>` with `<AnimatePresence>` and add `motion.div` wrappers to pages for fade/slide transitions.
- **FILES**: `frontend/src/App.tsx`, each page's root wrapper

**UPDATE** `frontend/src/App.tsx`:

```tsx
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import AppLayout from "./layouts/AppLayout";
import ScrollToTop from "./components/ScrollToTop";

// ... lazy imports ...

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AppLayout />}>
            <Route index element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <LandingPage />
              </motion.div>
            } />
            {/* ... other routes similarly wrapped ... */}
          </Route>
          <Route path="/full" element={<FullPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
```

**GOTCHA**: `AnimatePresence mode="wait"` ensures one page fully exits before the next enters. The `key={location.pathname}` on Routes triggers re-render on path change. Each route's element needs a `motion.div` wrapper.

**ALTERNATIVE SIMPLER APPROACH**: Instead of wrapping each route, wrap the `<Outlet>` in AppLayout:

```tsx
// In AppLayout.tsx
import { motion, AnimatePresence } from "framer-motion";

<main className="flex-1">
  <AnimatePresence mode="wait">
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Outlet />
    </motion.div>
  </AnimatePresence>
</main>
```

This is cleaner and avoids modifying App.tsx. Use this approach.

- **VALIDATE**: Navigate between pages — each transition should have a subtle fade + slide

---

### TASK 15: Add GLB model loading skeleton

- **IMPLEMENT**: Update `SpatialMain.tsx` to wrap `MapModel` in `<Suspense>` with `LoadingSkeleton` as fallback. Connect the loading state to `useViewStore`.
- **FILE**: `frontend/src/components/SpatialMain.tsx`
- **PATTERN**: Wrap the `Viewer3D` children in Suspense

**UPDATE** `SpatialMain.tsx` — Wrap the 3D scene content:

```tsx
import { Suspense } from "react";
import { LoadingSkeleton } from "./LoadingSkeleton";

// Inside the return, around the Viewer3D:
<Suspense
  fallback={
    <div className="aspect-2/3 md:aspect-video relative">
      <LoadingSkeleton />
    </div>
  }
>
  <Viewer3D>
    {/* ... existing children ... */}
  </Viewer3D>
</Suspense>
```

**GOTCHA**: The `Suspense` must wrap the `Viewer3D` (which contains `useGLTF`). Place it at the correct level to preserve layout dimensions.

- **VALIDATE**: Temporarily disable the GLB file, confirm LoadingSkeleton renders

---

### TASK 16: Update `index.html` language and meta

- **IMPLEMENT**: Change `lang="en"` to `lang="id"` since content is in Bahasa Indonesia.
- **FILE**: `frontend/index.html`
- Line 2: `<html lang="en">` → `<html lang="id">`

- **VALIDATE**: `npm run build` passes

---

## TESTING STRATEGY

No existing test framework is present in the project. Testing is manual/visual for Phase 1.

### Visual Verification Checklist

1. All 8 routes render with `#091413` or `accent`-based dark backgrounds
2. No white backgrounds remain on any page (only intentional light surfaces like cards use `accent-100`)
3. 3D scene has visible bloom effect on emissive/light areas
4. SceneCanvas background is dark (`#091413`)
5. Smooth scroll works via Lenis (scroll feels eased)
6. Page transitions have fade animation via Framer Motion
7. Buttons have hover scale effect (1.03x) and press effect (0.97x)
8. Legend component accepts dynamic props and renders correctly
9. Loading skeleton shows during GLB fetch (test by throttling network)
10. No console errors on any page

### Validation Commands

```bash
# Type check
npx tsc --noEmit --pretty

# Build
npm run build

# Lint
npm run lint

# Dev server for visual testing
npm run dev
```

---

## VALIDATION COMMANDS

### Level 1: Syntax & Style

```bash
cd frontend && npx tsc --noEmit --pretty
cd frontend && npm run lint
cd frontend && npm run build
```

### Level 2: Visual Verification

```bash
cd frontend && npm run dev
```

Then verify:
- Open `http://localhost:5173` — hero section renders with dark background
- Scroll down — Lenis smooth scroll is active
- Navigate to `/riset` — page fades in, dark background
- Navigate to `/full` — 3D scene has bloom effect
- Click buttons — hover/press micro-interactions work
- Hover over legend — no errors
- All pages: `/`, `/riset`, `/tentang-dieng`, `/tentang-tim`, `/galeri`, `/faq`, `/glosarium`, `/full`

### Level 3: Build Validation

```bash
cd frontend && npm run build
# Verify dist/ is generated without errors
# Verify Lighthouse (optional): npx lighthouse http://localhost:5173 --view
```

---

## ACCEPTANCE CRITERIA

- [ ] All 9 Phase 1 deliverables implemented
- [ ] `npm run build` succeeds with zero errors
- [ ] `npm run lint` passes with zero warnings
- [ ] `npx tsc --noEmit --pretty` passes
- [ ] Dark theme is consistently applied across all 8 routes (`#091413` base)
- [ ] Lenis smooth scroll is active (scroll feels eased, not janky)
- [ ] 3D scene has visible bloom + tone-mapping + fog + hemisphere light + shadow map
- [ ] Loading skeleton renders during GLB model fetch
- [ ] Legend component accepts `min`, `max`, `unit` props dynamically
- [ ] Micro-interactions work on all buttons (hover scale, press scale)
- [ ] Page transitions are animated (not instant)
- [ ] No console errors on any page
- [ ] `index.html` has `lang="id"`
- [ ] All `bg-primary-fg` replaced with `bg-accent` across all pages

---

## COMPLETION CHECKLIST

- [ ] All 16 tasks completed in order
- [ ] Each task validation passed immediately
- [ ] All validation commands executed successfully
- [ ] No linting or type checking errors
- [ ] Manual testing confirms feature works on all routes
- [ ] Acceptance criteria all met

---

## NOTES

**Design Decisions:**

1. **zustand store vs React Context for Scene3D**: Using zustand (`useViewStore`) for view state sharing is simpler and more performant than React Context for this use case. zustand v5 has zero boilerplate and excellent TypeScript support. The true persistent single-Canvas architecture will be introduced in Phase 2 when the scroll-driven narrative requires camera animation across sections.

2. **Lenis in main.tsx**: Wrapping initialization in a `Root` component avoids the StrictMode double-mount issue in dev. The `useEffect` cleanup calls `lenis.destroy()`.

3. **Page transitions in AppLayout via Outlet**: Wrapping `<Outlet>` with `<AnimatePresence>` in `AppLayout` is cleaner than modifying `App.tsx` routes. This pattern keeps routing logic simple.

4. **`bg-accent-50` for card surfaces**: Using `accent-50` (`#0d1f1c`) for card/component surfaces provides subtle depth against the `accent` (`#091413`) page background, following the Material Design elevation principle.

5. **Post-processing settings**: Conservative bloom settings (intensity 0.2, threshold 0.7) prevent over-bloom while adding a subtle quality lift. These can be tuned in Phase 4 polish.

**Future Phases:**
- Phase 2 will fully implement the persistent Canvas in AppLayout with GSAP scroll-driven camera animation
- Phase 3 will split the Canvas into comparison mode with synchronized OrbitControls
- The `three-mesh-bvh` dependency is pre-installed for raycasting in Phase 3 particle overlay
