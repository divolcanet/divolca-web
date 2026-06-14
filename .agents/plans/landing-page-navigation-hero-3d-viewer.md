# Feature: Landing Page with Navigation, Hero, and 3D Viewer

The following plan should be complete, but it's important that you validate documentation and codebase patterns and task sanity before you start implementing.

Pay special attention to naming of existing utils types and models. Import from the right files etc.

## Feature Description

Build the first phase of the DiVolca.net landing page — a geospatial information portal for the Dieng Mountains research area. This phase delivers:
- Site-wide navigation bar with responsive hamburger menu
- Hero/bridging section explaining the Dieng Mountains research
- Interactive 3D mountain viewer using Three.js with procedural terrain mesh
- Toggle controls for spatial data layers (mountain, gravity, magnetic models)

All UI text in Indonesian (Bahasa). Volcanic/geology visual theme using Tailwind CSS v4.

## User Story

As a visitor to the DiVolca.net website
I want to see the Dieng Mountains research information with an interactive 3D model
So that I can explore the geospatial data and understand the research findings

## Problem Statement

The project currently has only a default Vite scaffold with no application-specific UI. Users cannot view any research content, navigate between pages, or interact with 3D spatial data models.

## Solution Statement

Build the landing page incrementally: first install dependencies (Tailwind v4, Three.js ecosystem, React Router), then create the routing structure, navigation, hero section, and 3D viewer component with placeholder terrain mesh. Use Tailwind v4 with a volcanic/geology color palette for consistent styling.

## Feature Metadata

**Feature Type**: New Capability
**Estimated Complexity**: Medium
**Primary Systems Affected**: Frontend (React/TypeScript/Vite)
**Dependencies**: Tailwind CSS v4, @tailwindcss/vite, Three.js, @react-three/fiber, @react-three/drei, react-router-dom

---

## CONTEXT REFERENCES

### Relevant Codebase Files IMPORTANT: YOU MUST READ THESE FILES BEFORE IMPLEMENTING!

- `frontend/package.json` — Why: Current dependencies, scripts, versions (React 19.2, Vite 8.0, TypeScript ~5.9)
- `frontend/vite.config.ts` — Why: Vite plugin configuration, needs @tailwindcss/vite added
- `frontend/index.html` — Why: Root HTML, needs lang="id" and title update
- `frontend/src/main.tsx` — Why: App entry point, needs BrowserRouter wrapper
- `frontend/src/App.tsx` — Why: Current default Vite template, will be replaced with route-based layout
- `frontend/src/index.css` — Why: Current vanilla CSS, will be replaced with Tailwind import + custom theme
- `frontend/src/App.css` — Why: Current component CSS, will be deleted (replaced by Tailwind)
- `frontend/tsconfig.app.json` — Why: TypeScript config, strict mode, noUnusedLocals/Parameters enabled
- `frontend/eslint.config.js` — Why: ESLint flat config, may need adjustment for new imports

### New Files to Create

- `frontend/src/index.css` (UPDATE) — Replace with `@import "tailwindcss"` + custom theme tokens
- `frontend/src/App.tsx` (UPDATE) — Replace with route-based layout using Routes/Route
- `frontend/src/main.tsx` (UPDATE) — Wrap App with BrowserRouter
- `frontend/src/components/Navbar.tsx` — Responsive navigation bar
- `frontend/src/components/HeroSection.tsx` — Landing page hero/bridging section
- `frontend/src/components/Viewer3D.tsx` — Three.js canvas with terrain mesh and layer toggles
- `frontend/src/components/TerrainMesh.tsx` — Procedural terrain geometry component
- `frontend/src/pages/LandingPage.tsx` — Landing page composing Hero + Viewer3D
- `frontend/src/pages/ResearchPage.tsx` — Research page skeleton
- `frontend/src/pages/AboutDiengPage.tsx` — About Dieng page skeleton
- `frontend/src/pages/AboutTeamPage.tsx` — About Team page skeleton
- `frontend/src/layouts/AppLayout.tsx` — Shared layout with Navbar + Outlet
- `frontend/src/data/spatial.json` — Config file for research stats and spatial metadata
- `frontend/src/types/index.ts` — Shared TypeScript types

### Relevant Documentation YOU SHOULD READ THESE BEFORE IMPLEMENTING!

- [Tailwind CSS v4 + Vite Installation](https://tailwindcss.com/docs/installation/using-vite)
  - Specific section: "Installing Tailwind CSS as a Vite plugin"
  - Why: Shows exact vite.config.ts setup and CSS import pattern
- [Tailwind CSS v4 Theme Variables](https://tailwindcss.com/docs/theme)
  - Specific section: Custom theme variables using `@theme`
  - Why: v4 uses `@theme` directive in CSS instead of tailwind.config.js
- [Tailwind CSS v4 Colors](https://tailwindcss.com/docs/colors)
  - Specific section: Defining custom color palettes
  - Why: Volcanic theme color definitions
- [React Router Declarative Installation](https://reactrouter.com/start/declarative/installation)
  - Specific section: BrowserRouter wrapping pattern
  - Why: Shows how to wrap the app with routing
- [React Router Declarative Routing](https://reactrouter.com/start/declarative/routing)
  - Specific section: Routes, Route, Link, NavLink components
  - Why: Route definition and navigation patterns
- [@react-three/fiber Getting Started](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
  - Why: Canvas, useFrame, mesh patterns
- [@react-three/drei Documentation](https://github.com/pmndrs/drei)
  - Why: OrbitControls, Text, and helper components for 3D scene

### Patterns to Follow

**Naming Conventions:**
- PascalCase for React components: `Navbar.tsx`, `HeroSection.tsx`
- camelCase for utility functions and variables
- kebab-case for CSS class names (Tailwind utility classes)
- `src/components/` for reusable UI components
- `src/pages/` for route-level page components
- `src/layouts/` for layout wrappers
- `src/data/` for static JSON data files
- `src/types/` for TypeScript type definitions

**Error Handling:**
- TypeScript strict mode enabled (`tsconfig.app.json` line 20: `"strict": true`)
- `noUnusedLocals` and `noUnusedParameters` enabled — all imports and params must be used
- `erasableSyntaxOnly` enabled — no TypeScript-only syntax that doesn't compile to JS

**Component Pattern:**
- Functional components with explicit prop interfaces
- No default exports preferred but acceptable for page components
- Import paths use `.tsx` extension where needed

**Project Structure:**
```
frontend/
├── src/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Route-level page components
│   ├── layouts/       # Layout wrappers (Navbar + Outlet)
│   ├── data/          # Static JSON data
│   ├── types/         # Shared TypeScript types
│   ├── assets/        # Images and static assets
│   ├── App.tsx        # Route definitions
│   ├── main.tsx       # Entry point + BrowserRouter
│   └── index.css      # Tailwind import + custom theme
```

---

## IMPLEMENTATION PLAN

### Phase 1: Foundation

Install dependencies, configure Tailwind v4, set up routing infrastructure, create base types and data files.

**Tasks:**
- Install npm packages: tailwindcss, @tailwindcss/vite, three, @types/three, @react-three/fiber, @react-three/drei, react-router-dom
- Update vite.config.ts to add @tailwindcss/vite plugin
- Replace index.css with Tailwind import + volcanic theme tokens
- Update index.html: lang="id", title="DiVolca.net"
- Create src/types/index.ts with shared interfaces
- Create src/data/spatial.json with research stats placeholder

### Phase 2: Core Implementation

Build the main UI components: Navbar, HeroSection, Viewer3D, TerrainMesh.

**Tasks:**
- Create AppLayout with Navbar + Outlet
- Create Navbar component with responsive hamburger
- Create HeroSection with volcanic-themed research intro
- Create Viewer3D with Canvas, OrbitControls, and layer toggle state
- Create TerrainMesh with procedural heightmap geometry
- Create LandingPage composing HeroSection + Viewer3D

### Phase 3: Integration

Wire up routing, replace App.tsx with route definitions, update main.tsx.

**Tasks:**
- Update main.tsx to wrap with BrowserRouter
- Update App.tsx with Routes/Route definitions
- Create page skeletons for Research, About Dieng, About Team
- Ensure all routes render within AppLayout

### Phase 4: Testing & Validation

**Tasks:**
- Run `npm run build` — must compile with zero errors
- Run `npm run lint` — must pass with zero warnings
- Run `tsc --noEmit` — type check must pass
- Dev server renders correctly with all routes navigable
- 3D viewer displays terrain mesh with orbit controls
- Toggle buttons show/hide spatial layers
- Navbar responsive hamburger works on mobile widths

---

## STEP-BY-STEP TASKS

IMPORTANT: Execute every task in order, top to bottom. Each task is atomic and independently testable.

### Task 1: Install Dependencies

- **IMPLEMENT**: Install all required npm packages
- **COMMAND**: `npm install tailwindcss @tailwindcss/vite three @react-three/fiber @react-three/drei react-router-dom && npm install -D @types/three`
- **GOTCHA**: Run from `frontend/` directory. `@types/three` is a devDependency.
- **VALIDATE**: `npm ls tailwindcss @tailwindcss/vite three @react-three/fiber @react-three/drei react-router-dom` — all should show in dependency tree

### Task 2: Update vite.config.ts for Tailwind

- **IMPLEMENT**: Add `@tailwindcss/vite` plugin to the plugins array, keep existing react and babel plugins
- **IMPORTS**: `import tailwindcss from '@tailwindcss/vite'`
- **PATTERN**: Add as first plugin in array
- **VALIDATE**: `npx tsc --noEmit -p tsconfig.app.json` — no type errors

### Task 3: Replace index.css with Tailwind + Volcanic Theme

- **IMPLEMENT**: Replace entire file contents with:
  1. `@import "tailwindcss"` at top
  2. `@theme` block defining volcanic color tokens:
     - `--color-volcanic-950: #0a0a0f` (deep abyss)
     - `--color-volcanic-900: #1a1a2e` (dark basalt)
     - `--color-volcanic-800: #2d2d44` (charcoal)
     - `--color-volcanic-700: #3d3d5c` (ash gray)
     - `--color-volcanic-600: #5a5a7a` (smoke)
     - `--color-volcanic-500: #7a7a9a` (mid gray)
     - `--color-volcanic-400: #9a9ab0` (light ash)
     - `--color-volcanic-300: #b8b8cc` (pale ash)
     - `--color-volcanic-200: #d4d4e0` (mist)
     - `--color-volcanic-100: #e8e8f0` (cloud)
     - `--color-volcanic-50: #f4f4f8` (snow)
     - `--color-magma-500: #f59e0b` (amber)
     - `--color-magma-600: #d97706` (deep amber)
     - `--color-magma-400: #fbbf24` (light amber)
     - `--color-lava-500: #dc2626` (red)
     - `--color-lava-600: #b91c1c` (deep red)
     - `--color-lava-400: #ef4444` (bright red)
     - `--color-obsidian-500: #1e293b` (dark slate)
     - `--color-ash-500: #f8fafc` (white-ash)
  3. Custom font families:
     - `--font-nunito: 'Nunito', system-ui, sans-serif`
     - `--font-oswald: 'Oswald', system-ui, sans-serif`
     - `--font-mono: 'JetBrains Mono', ui-monospace, monospace`
  4. Body styles: bg-volcanic-950, text-volcanic-100, font-nunito
  5. Google Fonts import for Nunito, Oswald, JetBrains Mono
- **GOTCHA**: Tailwind v4 uses `@theme` directive in CSS, NOT tailwind.config.js. The `@import "tailwindcss"` must come before `@theme`.
- **GOTCHA**: `@theme` variables use CSS custom property syntax: `--color-name: value` maps to `text-name`, `bg-name`, etc.
- **VALIDATE**: `npx vite build` — should compile without CSS errors

### Task 4: Update index.html

- **IMPLEMENT**: Change `lang="en"` to `lang="id"`, change `<title>frontend</title>` to `<title>DiVolca.net — Pegunungan Dieng</title>`
- **ADD**: Google Fonts preconnect links in `<head>`:
  - `<link rel="preconnect" href="https://fonts.googleapis.com">`
  - `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`
  - `<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Nunito:wght@300;400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap" rel="stylesheet">`
- **VALIDATE**: File is valid HTML, fonts load in dev server

### Task 5: Create src/types/index.ts

- **IMPLEMENT**: Define TypeScript interfaces:
```typescript
export interface SpatialLayer {
  id: string;
  name: string;
  description: string;
  color: string;
  visible: boolean;
}

export interface ResearchStats {
  lokasi: string;
  lamaPenelitianLangsung: string;
  lamaPenelitianTotal: string;
  jenisData: string;
}

export interface SpatialData {
  layers: SpatialLayer[];
  stats: ResearchStats;
  depthLevels: string[];
}
```
- **VALIDATE**: `npx tsc --noEmit -p tsconfig.app.json` — no errors

### Task 6: Create src/data/spatial.json

- **IMPLEMENT**: Create JSON config:
```json
{
  "layers": [
    { "id": "mountain", "name": "Model Gunung", "description": "Model 3D pegunungan Dieng", "color": "#f59e0b", "visible": true },
    { "id": "gravity", "name": "Model Gravitasi", "description": "Model anomali gravitasi bawah permukaan", "color": "#dc2626", "visible": false },
    { "id": "magnetic", "name": "Model Magnetik", "description": "Model anomali magnetik bawah permukaan", "color": "#3b82f6", "visible": false }
  ],
  "stats": {
    "lokasi": "Pegunungan Dieng, Jawa Tengah, Indonesia",
    "lamaPenelitianLangsung": "14 hari",
    "lamaPenelitianTotal": "6 bulan",
    "jenisData": "Primer"
  },
  "depthLevels": ["0m", "-50m", "-100m", "-200m", "-500m", "-1000m"]
}
```
- **VALIDATE**: Valid JSON, parseable

### Task 7: Create src/layouts/AppLayout.tsx

- **IMPLEMENT**: Layout component that renders `<Navbar />` at top and `<Outlet />` from react-router-dom below
- **IMPORTS**: `import { Outlet } from 'react-router-dom'`, `import Navbar from '../components/Navbar'`
- **PATTERN**: Standard react-router layout pattern
- **VALIDATE**: `npx tsc --noEmit -p tsconfig.app.json`

### Task 8: Create src/components/Navbar.tsx

- **IMPLEMENT**: Responsive navigation bar with:
  - Logo/brand name "DiVolca.net" on left
  - Desktop nav links: Beranda, Riset, Tentang Dieng, Tentang Tim
  - Mobile hamburger button (hidden on desktop, visible on md breakpoint)
  - Mobile menu dropdown (toggled by hamburger)
  - Sticky/fixed top positioning
  - Volcanic theme: bg-volcanic-900, text-volcanic-100, hover:text-magma-400
  - Use `NavLink` from react-router-dom for active state styling
  - useState for mobile menu toggle
- **IMPORTS**: `import { NavLink } from 'react-router-dom'`, `import { useState } from 'react'`
- **GOTCHA**: Use Tailwind responsive prefixes: `hidden md:flex` for desktop nav, `md:hidden` for hamburger
- **VALIDATE**: `npx tsc --noEmit -p tsconfig.app.json` && `npm run lint`

### Task 9: Create src/components/HeroSection.tsx

- **IMPLEMENT**: Hero/bridging section with:
  - Large heading using font-oswald: "Informasi Geospasial Pegunungan Dieng"
  - Subtitle/paragraph: Lorem ipsum Indonesian placeholder about the research
  - Volcanic themed background gradient or subtle pattern
  - CTA or scroll indicator
  - Responsive padding and font sizes
- **PATTERN**: Single section component, self-contained styling via Tailwind
- **VALIDATE**: `npx tsc --noEmit -p tsconfig.app.json` && `npm run lint`

### Task 10: Create src/components/TerrainMesh.tsx

- **IMPLEMENT**: Procedural terrain mesh using Three.js geometry:
  - Create a `PlaneGeometry` with sufficient segments (e.g., 100x100)
  - Access position attribute array and apply simplex/noise-like height values
  - Use `Math.sin` and `Math.cos` combinations for pseudo-random terrain (no external noise library needed)
  - Apply a material with volcanic color gradient (amber/brown tones based on height)
  - Rotate to lay flat (rotateX(-Math.PI / 2))
  - Export as default React component using @react-three/fiber primitives
- **IMPORTS**: `import { useRef, useMemo } from 'react'`, `import * as THREE from 'three'`
- **GOTCHA**: In R3F, use `mesh` JSX element, not `new THREE.Mesh()`. Use `useMemo` for geometry creation to avoid recalculation.
- **GOTCHA**: Position attribute is a `Float32Array`. Modify in place: `const positions = geometry.attributes.position.array as Float32Array`
- **PATTERN**: 
```tsx
const geometry = useMemo(() => {
  const geo = new THREE.PlaneGeometry(10, 10, 100, 100);
  const pos = geo.attributes.position.array as Float32Array;
  for (let i = 0; i < pos.length; i += 3) {
    const x = pos[i], y = pos[i + 1];
    pos[i + 2] = Math.sin(x * 0.5) * Math.cos(y * 0.5) * 1.5 + Math.sin(x * 1.2 + y * 0.8) * 0.5;
  }
  geo.computeVertexNormals();
  return geo;
}, []);
```
- **VALIDATE**: `npx tsc --noEmit -p tsconfig.app.json`

### Task 11: Create src/components/Viewer3D.tsx

- **IMPLEMENT**: 3D viewer component with:
  - `<Canvas>` from @react-three/fiber as the 3D viewport
  - `<OrbitControls>` from @react-three/drei for camera interaction
  - `<TerrainMesh />` component inside the Canvas
  - Ambient + directional lighting setup
  - Toggle buttons panel outside/overlaying the Canvas for each spatial layer
  - useState for layer visibility (read from spatial.json layers)
  - Layer toggles: checkbox or button per layer with color indicator
  - Responsive Canvas container (full width, fixed height or aspect ratio)
  - Loading fallback text
- **IMPORTS**: `import { Canvas } from '@react-three/fiber'`, `import { OrbitControls } from '@react-three/drei'`, `import { useState } from 'react'`, `import spatialData from '../data/spatial.json'`, `import type { SpatialLayer } from '../types'`
- **GOTCHA**: Canvas needs an explicit height on its container (e.g., `h-[500px]` or `aspect-video`). Without it, the canvas collapses to 0 height.
- **GOTCHA**: @react-three/drei's OrbitControls may need `makeDefault` prop to work properly with multiple canvases.
- **GOTCHA**: JSON imports work in Vite with `resolve.jsonModule` — but tsconfig.app.json doesn't have this. Use `import ... with { type: 'json' }` or fetch the JSON. Safer: import the JSON as a module — Vite handles this by default.
- **VALIDATE**: `npx tsc --noEmit -p tsconfig.app.json` && `npm run lint`

### Task 12: Create src/pages/LandingPage.tsx

- **IMPLEMENT**: Landing page component that composes:
  - `<HeroSection />` at top
  - `<Viewer3D />` below
  - Full-width sections with appropriate spacing
  - Volcanic themed section backgrounds
- **IMPORTS**: `import HeroSection from '../components/HeroSection'`, `import Viewer3D from '../components/Viewer3D'`
- **VALIDATE**: `npx tsc --noEmit -p tsconfig.app.json` && `npm run lint`

### Task 13: Create Page Skeletons

- **IMPLEMENT**: Create three page skeleton components:
  - `src/pages/ResearchPage.tsx` — Heading "Riset", placeholder text, sections for articles, infographics, mitigasi
  - `src/pages/AboutDiengPage.tsx` — Heading "Tentang Dieng", placeholder text about Dieng Mountains
  - `src/pages/AboutTeamPage.tsx` — Heading "Tentang Tim", placeholder text about the research team
- **PATTERN**: Each is a simple functional component returning a section with heading and lorem ipsum paragraph
- **VALIDATE**: `npx tsc --noEmit -p tsconfig.app.json`

### Task 14: Update App.tsx with Route Definitions

- **IMPLEMENT**: Replace entire App.tsx with route configuration:
```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import LandingPage from './pages/LandingPage'
import ResearchPage from './pages/ResearchPage'
import AboutDiengPage from './pages/AboutDiengPage'
import AboutTeamPage from './pages/AboutTeamPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="riset" element={<ResearchPage />} />
          <Route path="tentang-dieng" element={<AboutDiengPage />} />
          <Route path="tentang-tim" element={<AboutTeamPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
```
- **GOTCHA**: Do NOT wrap with BrowserRouter in main.tsx if it's already in App.tsx. Pick ONE location. This plan puts it in App.tsx for clarity.
- **VALIDATE**: `npx tsc --noEmit -p tsconfig.app.json` && `npm run lint`

### Task 15: Update main.tsx

- **IMPLEMENT**: Keep main.tsx minimal — just render `<App />` with StrictMode. Remove any BrowserRouter wrapping (since it's in App.tsx per Task 14).
- **GOTCHA**: Ensure no unused imports remain (noUnusedLocals is enabled).
- **VALIDATE**: `npx tsc --noEmit -p tsconfig.app.json`

### Task 16: Remove Old CSS

- **IMPLEMENT**: Delete `src/App.css` — no longer needed, all styling via Tailwind
- **UPDATE**: Remove `import './App.css'` from old App.tsx (already replaced in Task 14)
- **VALIDATE**: `npm run build` — should succeed without missing import errors

### Task 17: Full Build Validation

- **VALIDATE**: `npm run build` — must complete with zero errors
- **VALIDATE**: `npm run lint` — must pass with zero warnings
- **VALIDATE**: `npm run dev` — start dev server, verify:
  - Landing page renders at `/` with hero and 3D viewer
  - Navigation links work to `/riset`, `/tentang-dieng`, `/tentang-tim`
  - 3D terrain mesh is visible and rotatable
  - Layer toggle buttons appear and are interactive
  - Navbar hamburger menu works at mobile widths
  - Dark volcanic theme is applied throughout

---

## TESTING STRATEGY

### Unit Tests

No test framework is currently configured. This plan focuses on build-time validation. If tests are added later:
- Test Navbar mobile toggle state changes
- Test Viewer3D layer toggle state updates
- Test spatial.json data structure matches SpatialLayer/ResearchStats types

### Integration Tests

Not applicable for this phase (no test framework). Manual validation covers integration.

### Edge Cases

- Mobile viewport: Navbar hamburger must toggle correctly, 3D canvas must not overflow
- No JavaScript: Graceful degradation (3D viewer shows "requires JavaScript" message)
- Long nav labels: Text truncation or wrapping in mobile menu
- Canvas resize: 3D scene should adapt to container size changes

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
2. Open `http://localhost:5173/` — verify landing page with hero + 3D viewer
3. Click nav links — verify routing to /riset, /tentang-dieng, /tentang-tim
4. Interact with 3D canvas — drag to orbit, scroll to zoom
5. Toggle layer buttons — verify visibility changes
6. Resize browser to <768px — verify hamburger menu appears and works
7. Check font rendering — Nunito for body, Oswald for headings

### Level 5: Additional Validation

```bash
cd frontend && npm run preview
```
— Build preview to verify production output

---

## ACCEPTANCE CRITERIA

- [ ] All dependencies installed and listed in package.json
- [ ] Tailwind v4 configured via @tailwindcss/vite plugin
- [ ] Volcanic color tokens defined in @theme block
- [ ] Google Fonts (Nunito, Oswald, JetBrains Mono) loaded
- [ ] React Router configured with 4 routes (/, /riset, /tentang-dieng, /tentang-tim)
- [ ] Navbar renders with responsive hamburger menu
- [ ] HeroSection displays Indonesian heading and placeholder text
- [ ] 3D Canvas renders with procedural terrain mesh
- [ ] OrbitControls allow camera rotation and zoom
- [ ] Layer toggle buttons for mountain/gravity/magnetic models
- [ ] spatial.json contains research stats and layer config
- [ ] `npm run build` completes with zero errors
- [ ] `npm run lint` passes with zero warnings
- [ ] TypeScript type checking passes with zero errors
- [ ] All nav links navigate correctly
- [ ] Mobile responsive layout verified

---

## COMPLETION CHECKLIST

- [ ] All 17 tasks completed in order
- [ ] Each task validation passed immediately
- [ ] `npm run build` succeeds
- [ ] `npm run lint` passes
- [ ] `npx tsc --noEmit` passes
- [ ] Dev server renders all pages correctly
- [ ] 3D viewer is interactive with terrain mesh
- [ ] Layer toggles function correctly
- [ ] Navbar responsive menu works
- [ ] All acceptance criteria met

---

## NOTES

**Design Decisions:**
- BrowserRouter placed in App.tsx rather than main.tsx for co-location with route definitions
- Procedural terrain uses Math.sin/cos combinations instead of a noise library to avoid extra dependency
- Tailwind v4 `@theme` directive used instead of tailwind.config.js (v4 approach)
- JSON data imported directly — Vite supports this natively
- Page skeletons are minimal placeholders — content to be added in future phases

**Trade-offs:**
- Procedural terrain is visually simple but proves the 3D pipeline works. Replace with .glb models later.
- No test framework yet — manual validation is the quality gate. Add Vitest/Jest in a future phase.
- No state management library — useState is sufficient for layer toggles. Consider Zustand if state grows.

**Known Gotchas:**
- `noUnusedLocals` and `noUnusedParameters` in tsconfig will fail builds on unused imports — be diligent
- Canvas container MUST have explicit height or the 3D scene collapses
- Tailwind v4 class detection scans all source files — ensure components are in `src/`
- @react-three/drei components may have peer dependency warnings — safe to ignore if working

**Future Phases:**
- Phase 2: 2D spatial data vertical scroller with depth level images
- Phase 3: Research stats display component
- Phase 4: Backend FastAPI setup for dynamic data
- Phase 5: Real .glb model integration
- Phase 6: Content population with real Indonesian research data
