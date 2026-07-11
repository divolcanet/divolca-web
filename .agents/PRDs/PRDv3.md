# DiVolca.net — Product Requirements Document v3

> **Document Version:** 3.0 \
> **Status:** Draft \
> **Date:** July 2026 \
> **Authors:** Product Team \
> **Based on:** Client feedback ("looks mainstream"), codebase analysis v2, competitive research (Earth.nullschool.net, Apple, Stripe, Cesium, Terrascan, Shader.se, The Pudding)

---

## 1. Executive Summary

DiVolca.net is a geospatial information platform for the Dieng Volcanic Complex research project. It presents subsurface geophysics data (gravity, magnetic, seismic) from the Dieng Mountains as interactive 3D visualizations, making complex research data accessible to academics, students, and the public.

The current v2 release is structurally functional but visually "mainstream" — it follows a standard blog-template layout with a disconnected 3D viewer, static data presentation, and no interactive depth. The core problem is that the site **looks like a content website that happens to embed a 3D model**, rather than a **premium geospatial data platform**.

**PRDv3** defines a transformation: evolve DiVolca.net from a static information page into an immersive, interactive geospatial data experience. The MVP goal is a scroll-driven narrative landing page with animated 3D data overlays, depth-slicing for subsurface exploration, and polished micro-interactions throughout — all within a switchable light/dark theme that defaults to dark — without adding content that doesn't exist yet.

**Core value proposition:** Turn complex geophysics research data into an intuitive, visually stunning exploration experience that feels like a premium product, not a research blog.

**MVP goal statement:** Create a visually premium geospatial data platform where users can intuitively explore 3D terrain with animated magnetic/gravity overlays and navigate a scroll-driven narrative — all within a switchable light/dark theme that defaults to dark for maximum visual impact.

---

## 2. Mission

### Product Mission

Democratize access to complex geophysics research data by transforming it into an intuitive, visually immersive exploration experience — making the Dieng Volcanic Complex subsurface structure understandable at a glance.

### Core Principles

| #   | Principle                    | Description                                                                                                  |
| --- | ---------------------------- | ------------------------------------------------------------------------------------------------------------ |
| 1   | **Data-first visualization** | Every visual element must encode or explain data. Decoration without purpose is noise.                       |
| 2   | **Cinematic interaction**    | Interactions should feel polished, not mechanical. 60fps animations, physics easing, purposeful transitions. |
| 3   | **Progressive disclosure**   | Never overwhelm. Reveal complexity step by step through scroll, hover, and click.                            |
| 4   | **Scientific credibility**   | Typography, color, and layout must signal that this is serious research, not entertainment.                  |
| 5   | **Switchable theme, dark default** | Dark mode is the default but users can toggle to light mode via a Sun/Moon button in the navbar. CSS custom properties with `:root.dark` and Tailwind's `dark:` variant handle the switch. |

---

## 3. Target Users

### Primary Personas

#### Persona A: The Academic Researcher

- **Who:** Geophysics student, volcanology researcher, or earth science academic
- **Tech comfort:** High — comfortable with 3D tools, GIS software, data visualization
- **Needs:** Access raw data, compare models (gravity vs magnetic), explore at specific depths, cite findings
- **Pain points:** Current site has placeholder data, no comparison tools, no data download
- **Success metric:** Can visually correlate gravity and magnetic anomalies at any depth

#### Persona B: The Curious Visitor

- **Who:** Indonesian student, tourist interested in Dieng, general public
- **Tech comfort:** Medium — uses smartphones, familiar with social media UI patterns
- **Needs:** Understand what the research found, see beautiful visuals, learn about Dieng
- **Pain points:** Current site is text-heavy, no guided experience, feels "dry"
- **Success metric:** Can explain what DiVolca is about after 60 seconds on the site

#### Persona C: The Stakeholder / Client

- **Who:** Research team PI (Principal Investigator), funding body representative
- **Tech comfort:** Low–Medium — cares about presentation and credibility
- **Needs:** A site that reflects research quality, impresses visitors, is shareable
- **Pain points:** Current site looks "mainstream" — doesn't signal cutting-edge research
- **Success metric:** Proud to share the URL at conferences and with collaborators

### Key User Needs

| Need                                        | Priority | Current State                                |
| ------------------------------------------- | -------- | -------------------------------------------- |
| See animated magnetic/gravity data overlays | Critical | Not implemented                              |
| Explore subsurface at different depths      | Critical | Not implemented                              |
| Compare gravity vs magnetic side-by-side    | High     | Not implemented (tabs switch, don't compare) |
| Understand the research at a glance         | High     | Text-heavy, no visual narrative              |
| Share a specific viewpoint                  | Medium   | Not implemented                              |
| Download data / cite the research           | Medium   | Placeholder citation only                    |
| Use on mobile                               | Medium   | Responsive but not touch-optimized           |

---

## 4. MVP Scope

### ✅ In Scope (MVP Phase 1–2)

#### Core Functionality

- ✅ Switchable light/dark theme (default: dark `#091413`, toggle via Sun/Moon button in navbar, persisted in localStorage)
- ✅ Scroll-driven 3D camera animation on landing page (GSAP + Lenis)
- ✅ Animated magnetic and gravity field lines (particle flow over terrain)
- ✅ 2D depth slicing with vertical slider (planned feature from `.agents/plans/`)
- ✅ Side-by-side comparison mode (gravity vs magnetic with synchronized cameras)
- ✅ Post-processing bloom + tone-mapping on Three.js scene
- ✅ Interactive data legend (hover-to-query values)
- ✅ Loading skeletons for 3D model and page content

#### UI/UX

- ✅ Hover + click micro-interactions on all interactive elements
- ✅ Smooth page transitions (Framer Motion AnimatePresence)
- ✅ URL state persistence (camera, model, depth in URL hash)
- ✅ Better 3D lighting (fog, hemisphere light, shadows)

#### Data Integrity

- ✅ Clear labeling of placeholder vs real data (badge system)
- ✅ Real hotspot data annotations (replace `"Detail informasi area A."` with actual coordinates and values)
- ✅ Update bibtex citation to correct Dieng research paper

### ❌ Out of Scope (MVP Phase 3+)

- ❌ Subsurface volume rendering (true 3D volume with cutting plane)
- ❌ AI/NLP data query chatbot
- ❌ Multi-language support (EN/ID toggle)
- ❌ Time-dynamic data animation (volcano timeline scrubber)
- ❌ Data download / export functionality
- ❌ User accounts or authentication
- ❌ Backend API for dynamic data
- ❌ Real-time data streaming from MAGMA beyond current daily scrape
- ❌ Mobile touch-optimized 3D controls (gesture-based)
- ❌ 2.5D orthographic view toggle

---

## 5. User Stories

### Story 1: Landing Page Immersion

> **As a** curious visitor,
> **I want** to scroll down the landing page and see the 3D camera orbit around the Dieng terrain,
> **so that** I feel like I'm being guided into the data rather than just reading text.

**Concrete example:** User lands on the hero section. As they scroll past "Model 3D Peta Spasial" heading, the Three.js camera smoothly arcs from a wide establishing shot to a close orbit around the mountain terrain. The gravity overlay fades in at 50% scroll, magnetic at 70%.

### Story 2: Depth Exploration

> **As an** academic researcher,
> **I want** to drag a vertical slider to see 2D cross-section slices at different depths,
> **so that** I can examine how magnetic and gravity anomalies change beneath the surface.

**Concrete example:** User selects "Magnetik" and sees a vertical depth slider (-50m, -100m, -200m, -500m, -1000m). Dragging to "-500m" updates both the 2D cross-section image and the 3D scene overlay simultaneously. A label reads "Anomali Magnetik pada -500m."

### Story 3: Side-by-Side Comparison

> **As a** geophysics researcher,
> **I want** to view gravity and magnetic data for the same depth side by side,
> **so that** I can visually correlate anomalies across data types.

**Concrete example:** User clicks "Bandingkan" (Compare). The screen splits vertically: left shows Total Magnetic Intensity at -200m, right shows Total Gravity Intensity at -200m. Camera controls are synchronized — orbiting one side orbits both.

### Story 4: Model Switching with Preview

> **As a** student learning geophysics,
> **I want** to hover over model names to see a preview thumbnail before selecting,
> **so that** I understand what each model represents without trial-and-error clicking.

**Concrete example:** The SpatialModelMenu currently shows radio buttons. Instead, each model option shows a small preview thumbnail of its data visualization on hover, with a tooltip explaining what "Magnetik RTP" means.

### Story 5: Shareable Viewpoints

> **As a** research team member,
> **I want** to copy a URL that preserves my current view (camera position, active model, depth),
> **so that** I can share a specific finding with my team.

**Concrete example:** User has the terrain at a 30° angle, showing RTP model at -200m depth. They click "Salin Tautan" and the URL `divolca.net/?view=30,45,500&model=rtp&depth=-200m` is copied to clipboard.

### Story 6: Scientific Credibility

> **As a** stakeholder presenting at a conference,
> **I want** the site to visually signal that it's a professional research platform,
> **so that** it reflects well on the quality of our work.

**Concrete example:** First-time visitor opens the site on a projector at a conference. The dark theme, smooth animations, polished typography, and cinematic 3D viewer immediately communicate "this is serious research" rather than "this is a student project."

---

## 6. Core Architecture & Patterns

### High-Level Architecture

```
divolca-net/
├── backend/                          # FastAPI (future expansion)
│   └── scrap_volcano.py             # MAGMA volcano status scraper
├── frontend/                         # Vite + React 19 + TypeScript
│   ├── api/                          # Vercel serverless functions
│   │   └── volcano-activity.ts      # Edge-scraped volcano status
│   ├── src/
│   │   ├── app/                     # App-level setup
│   │   │   ├── App.tsx              # Routes + lazy loading
│   │   │   ├── main.tsx             # Entry point
│   │   │   └── index.css            # Tailwind theme
│   │   ├── layouts/                 # Shell layout (Nav, Footer, Chatbot)
│   │   ├── pages/                   # Route-level components (lazy)
│   │   ├── components/              # Shared UI components
│   │   │   ├── ui/                  # Primitive UI (Button, Card, Tabs, etc.)
│   │   │   └── *.tsx               # Domain components (Viewer3D, Spatial*, etc.)
│   │   ├── data/                    # Static data + types
│   │   ├── hooks/                   # Custom hooks
│   │   ├── lib/                     # Utilities (cn, constants)
│   │   └── context/                 # React contexts (Scene3D, Theme)
│   └── public/                      # Static assets
└── .agents/
    ├── plans/                        # Implementation plans
    └── reports/                      # Analysis reports (this PRD)
```

### Key Design Patterns

| Pattern                         | Where                                                      | Why                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **Persistent 3D Scene Context** | `context/Scene3D.tsx`                                      | Single Three.js canvas persists across page navigation. Camera, lights, and objects are shared — only overlays change. |
| **Scroll-Driven Orchestration** | Lenis + GSAP ScrollTrigger                                 | Smooth scroll physics + timeline-based camera animation. Each section triggers a camera position and data reveal.      |
| **Data Layer Overlay**          | Custom `ShaderMaterial` compositing                        | Magnetic/gravity data rendered as semitransparent colored overlays on the terrain mesh. Animated with vertex shaders.  |
| **Depth Slicing**               | Vertical slider → 2D cross-section + 3D plane intersection | Reactive: slider change updates both 2D and 3D views simultaneously.                                                   |
| **URL State Machine**           | `useSearchParams` → `zustand` store                        | All view state (camera, model, depth, comparison mode) serialized to URL and shared.                                   |

### Component Communication Model

```
URL State (source of truth)
       │
       ▼
  zustand Store
       │
       ├──► Scene3D Context (persistent Three.js)
       │       ├── Terrain (GLB model)
       │       ├── Data Overlays (ShaderMaterial planes or particles)
       │       └── Camera (animated via GSAP)
       │
       ├──► SpatialModelMenu (radio → bento grid)
       ├──► DepthSlider (range input)
       ├──► ComparisonPanel (split-screen toggle)
       └──► Legend (data-driven, hoverable)
```

---

## 7. Tools/Features

### 7.1 Feature: Scroll-Driven 3D Narrative

**Purpose:** Transform static scrolling into a guided data exploration experience.

**Specification:**

- Install Lenis for smooth scroll (eased, 60fps, no scroll jank)
- Define scroll sections with GSAP ScrollTrigger:
  1. **Hero (0–20%):** Wide establishing shot, text reveals
  2. **Introduction (20–40%):** Camera arcs down toward terrain, heading fades
  3. **3D Reveal (40–60%):** Camera orbits to 45° angle, terrain fills viewport
  4. **Data Overlay (60–80%):** Magnetic/gravity overlay fades in on terrain
  5. **Depth Slice (80–100%):** Camera pulls back slightly, depth slider appears

**States:**

- `scroll=0`: Hero slide at full screen, no terrain visible yet
- `scroll=0.25`: Terrain enters bottom of viewport, camera starts moving
- `scroll=0.5`: Terrain centered, orbit controls become active
- `scroll=0.75`: Data overlay shown, depth slider revealed
- `scroll=1.0`: Full data exploration mode

**Validation:**

- 60fps scroll performance on a mid-range device (M1 MacBook Air or equivalent)
- No jarring camera cuts — all transitions are eased (cubic-bezier)
- Scroll position persists correctly on browser refresh

### 7.2 Feature: Animated Particle Flow Overlay

**Purpose:** Visualize magnetic/gravity field lines as premium animated particles flowing over terrain.

**Specification:**

- Custom Three.js `Points` geometry with 5,000–10,000 particles
- Particle positions follow a vector field derived from magnetic/gravity anomaly data
- Color mapping: particle color encodes field intensity (cold colors = low, warm = high)
- Particle speed: ~0.5 units/sec with slight randomization
- Trail effect: particles leave a 1-second alpha-fade trail behind them

**States:**

- `loading`: Show skeleton placeholder in overlay panel
- `empty`: No model selected → "Pilih model untuk melihat data"
- `active`: Particles flowing, legend visible
- `transition`: Switching models → old particles fade out (300ms), new fade in (500ms)

**Validation:**

- 60fps with 5,000 particles on target device
- Particles visibly react when user orbits the camera (depth sorting correct)
- Color mapping matches the legend scale

### 7.3 Feature: Depth Slicing with 2D/3D Sync

**Purpose:** Let users explore subsurface data at specific depth levels.

**Specification:**

- Vertical slider on the right side of the 3D viewer
- Depth labels: Permukaan, -50m, -100m, -200m, -500m, -1000m
- Slider drag updates three things simultaneously:
  1. 2D cross-section image (placeholder → real data when available)
  2. 3D scene: a translucent plane intersecting the terrain at selected depth
  3. Info panel: shows depth label and anomaly values at that depth

**States:**

- `default`: Depth set to "Permukaan" (0m), no plane visible
- `dragging`: Slider position changes, views update in real-time (~16ms response)
- `snapped`: Slider releases to nearest depth marker with spring animation
- `no-data`: Depth level with no data → shows "Data tidak tersedia" badge

**Validation:**

- Slider position and 2D/3D views are always in sync (±1 frame)
- No layout shift when toggling between depths
- Touch-draggable on mobile

### 7.4 Feature: Side-by-Side Comparison

**Purpose:** Let researchers visually correlate gravity and magnetic data.

**Specification:**

- "Bandingkan" toggle button activates split-screen mode
- Left: gravity model, Right: magnetic model (or vice versa)
- Both views share a single synchronized OrbitControls instance
- A vertical divider can be dragged left/right to adjust split ratio
- Both views show the same depth level simultaneously

**States:**

- `off`: Normal single-view mode
- `entering`: Split animation (600ms, camera animates to centered position)
- `active`: Both views rendered, cameras linked
- `exiting`: Merge back to single view (400ms)

**Validation:**

- Camera rotation on one side mirrors perfectly on the other
- Depth slider changes affect both sides equally
- Performance: 60fps with two viewports rendering the same scene

### 7.5 Feature: Data Legend Interaction

**Purpose:** Replace the static hardcoded legend with an interactive, data-driven component.

**Specification:**

- Color scale reads from active model's data range (min/max values)
- Hovering over legend shows a tooltip with the exact value at that color stop
- Clicking a color range filters/isolates data within that range (future)
- Legend updates dynamically when model or depth changes

**States:**

- `loading`: Pulsing gradient bar (no data loaded)
- `active`: Rendered color gradient with min/max labels and unit
- `hover`: Vertical cursor line follows mouse, value tooltip shown
- `empty`: Model with no data → "Tidak ada data untuk legend"

---

## 8. Technology Stack

### Frontend (Existing + Additions)

| Technology                      | Version  | Purpose                               | Status       |
| ------------------------------- | -------- | ------------------------------------- | ------------ |
| React                           | ^19.2.7  | UI framework                          | ✅ Installed |
| TypeScript                      | ~6.0.2   | Type safety                           | ✅ Installed |
| Vite                            | ^8.1.0   | Build tool                            | ✅ Installed |
| Tailwind CSS                    | ^4.3.2   | Styling                               | ✅ Installed |
| Three.js                        | ^0.185.0 | 3D rendering                          | ✅ Installed |
| @react-three/fiber              | ^9.6.1   | React reconciler for Three.js         | ✅ Installed |
| @react-three/drei               | ^10.7.7  | R3F utilities                         | ✅ Installed |
| react-router-dom                | ^7.18.1  | Routing                               | ✅ Installed |
| lucide-react                    | ^1.22.0  | Icons                                 | ✅ Installed |
| class-variance-authority        | ^0.7.1   | Variant props                         | ✅ Installed |
| tailwind-merge                  | ^3.6.0   | Tailwind class merging                | ✅ Installed |
| **gsap**                        | ^3.12.x  | Scroll-triggered animation            | ❌ To add    |
| **@gsap/react**                 | ^1.0.x   | GSAP React integration                | ❌ To add    |
| **lenis**                       | ^1.x     | Smooth scroll                         | ❌ To add    |
| **framer-motion**               | ^12.x    | Page transitions + micro-interactions | ❌ To add    |
| **@react-three/postprocessing** | ^3.x     | Bloom, tone-mapping effects           | ❌ To add    |
| **zustand**                     | ^5.x     | Lightweight state management          | ❌ To add    |
| **three-mesh-bvh**              | ^0.8.x   | Raycasting on complex terrain         | ❌ To add    |

### Backend

| Technology     | Version | Purpose                 | Status                   |
| -------------- | ------- | ----------------------- | ------------------------ |
| Python         | 3.12+   | Backend scripts         | ✅ Available             |
| httpx          | latest  | HTTP client for scraper | ✅ In `scrap_volcano.py` |
| BeautifulSoup4 | latest  | HTML parsing            | ✅ In `scrap_volcano.py` |
| FastAPI        | TBD     | Future API endpoints    | ❌ Future                |

### Integrations

| Integration      | Purpose                         | Status        |
| ---------------- | ------------------------------- | ------------- |
| MAGMA ESDM       | Volcano activity data source    | ✅ Connected  |
| Vercel           | Hosting + serverless functions  | ✅ Configured |
| Vercel Analytics | Usage monitoring                | ❌ Future     |
| Google Fonts     | Fraunces, Inter, JetBrains Mono | ✅ Connected  |

---

## 9. Security & Configuration

### Authentication / Authorization

- **Status:** Not required for MVP. Site is public, read-only.
- **Future:** OAuth2 if user accounts are needed for data download.

### Configuration Management

```env
# frontend/.env
VITE_MAGMA_URL=https://magma.esdm.go.id/v1/gunung-api/tingkat-aktivitas
VITE_ENV=development  # development | production
VITE_USE_MOCK_DATA=false  # Use local mock data instead of live fetch
```

### Security Scope

| Concern          | In Scope (MVP)                      | Out of Scope                        |
| ---------------- | ----------------------------------- | ----------------------------------- |
| XSS              | React's built-in sanitization (JSX) | CSP headers (Vercel handled)        |
| API key exposure | Not applicable (no keys)            | —                                   |
| CORS             | Vercel serverless handles this      | —                                   |
| Data validation  | TypeScript strict mode              | Server-side validation (no backend) |
| Rate limiting    | Not applicable (static site)        | Future API endpoints                |

### Deployment

- **Platform:** Vercel (already configured via `vercel.json`)
- **Build command:** `cd frontend && npm run build`
- **Output directory:** `frontend/dist`
- **SPA rewrites:** `vercel.json` rewrites all routes to `/index.html`
- **Serverless functions:** `frontend/api/` deployed as Vercel Functions

---

## 10. API Specification

### Current: Volcano Activity API

**Endpoint:** `GET /api/volcano-activity` (Vercel serverless function)

**Response format:**

```json
{
  "metadata": {
    "updated_at": "2026-07-11T10:30:00.000Z",
    "source": "https://magma.esdm.go.id/v1/gunung-api/tingkat-aktivitas"
  },
  "summary": {
    "AWAS": 0,
    "SIAGA": 1,
    "WASPADA": 6,
    "NORMAL": 18
  },
  "volcanoes": [
    {
      "name": "Gunung Merapi",
      "province": "DI Yogyakarta",
      "level": "SIAGA",
      "level_id": 3,
      "level_label": "Level III (Siaga)",
      "report_url": "https://magma.esdm.go.id/v1/gunung-api/laporan/..."
    }
  ]
}
```

### Future: Spatial Data API (Post-MVP)

| Endpoint                       | Method | Description                                   |
| ------------------------------ | ------ | --------------------------------------------- |
| `/api/models`                  | GET    | List available spatial models                 |
| `/api/models/:id`              | GET    | Get model data (URLs, depth levels, metadata) |
| `/api/models/:id/depth/:level` | GET    | Get cross-section data at specific depth      |
| `/api/dieng/stats`             | GET    | Research statistics                           |

---

## 11. Success Criteria

### ✅ MVP Success Definition

The MVP is complete when:

- ✅ Switchable light/dark theme is applied consistently across all pages (default: dark)
- ✅ Scroll-driven camera animation works on the landing page (hero → 3D viewer)
- ✅ Magnetic/gravity particle flow visualization renders on terrain at 60fps
- ✅ Depth slider controls both 2D cross-section and 3D scene
- ✅ Side-by-side comparison mode works with synchronized cameras
- ✅ Post-processing bloom improves 3D scene visual quality
- ✅ Active element hover/press micro-interactions work on all interactive components
- ✅ Page transitions are animated (not instant swaps)
- ✅ URL state persists camera position and active model
- ✅ Loading skeletons appear during GLB model fetch
- ✅ All hotspot data is updated with real annotations (no "Detail informasi area A." placeholders)
- ✅ Bibtex citation references the correct Dieng research paper
- ✅ `npm run build` succeeds with zero errors
- ✅ `npm run lint` passes with zero warnings
- ✅ Lighthouse performance score ≥ 80 (desktop)
- ✅ Lighthouse accessibility score ≥ 90

### Quality Indicators

| Indicator              | Target           | Measurement                     |
| ---------------------- | ---------------- | ------------------------------- |
| First Contentful Paint | < 1.5s           | Lighthouse                      |
| Time to Interactive    | < 3s             | Lighthouse                      |
| 3D Frame Rate          | 60fps            | Chrome DevTools Performance tab |
| Scroll Smoothness      | No jank at 60fps | Lenis + GSAP profiler           |
| User session duration  | +50% vs current  | Vercel Analytics (future)       |
| Bounce rate            | -20% vs current  | Vercel Analytics (future)       |

### User Experience Goals

- A first-time visitor can explain "what DiVolca is about" after 60 seconds
- A researcher can find and compare two data models within 30 seconds
- A stakeholder feels confident sharing the URL publicly
- Mobile users can navigate all pages without horizontal overflow or broken layouts

---

## 12. Implementation Phases

### Phase 1: Foundation & Theme (Week 1)

**Goal:** Establish visual foundation and animation infrastructure. Make the site feel premium immediately.

**Deliverables:**

- ✅ Add switchable light/dark theme using CSS custom properties (`:root` / `:root.dark`) mapped to Tailwind semantic tokens (`bg-page`, `text-body`, `bg-card`, etc.)
- ✅ Add theme toggle button (Sun/Moon) in navbar with localStorage persistence and FOUC-prevention script
- ✅ Add `gsap`, `lenis`, `framer-motion`, `@react-three/postprocessing`, `zustand`, `three-mesh-bvh` dependencies
- ✅ Configure Lenis smooth scroll globally
- ✅ Add post-processing bloom + tone-mapping to 3D scene
- ✅ Add 3D fog + hemisphere light + shadow map for atmospheric depth
- ✅ Implement micro-interactions (hover scale, press scale, card lift shadows)
- ✅ Build loading skeleton for GLB model
- ✅ Create persistent Scene3D context (zustand store for view state)
- ✅ Update Legend component to be data-driven

**Validation:**

- `npm run build` passes
- Theme is consistent across all 8 routes in both light and dark modes
- Toggle persists across page refreshes (localStorage)
- No FOUC (flash of wrong theme)
- 3D scene has visible bloom effect
- Loading skeleton shows during page load
- All interactive elements have hover/press feedback

### Phase 2: Scroll-Driven Narrative & Depth Slicing (Weeks 2–3)

**Goal:** Transform the landing page into a guided exploration experience. Implement the planned 2D spatial data scroller.

**Deliverables:**

- ✅ Define scroll sections with GSAP ScrollTrigger
- ✅ Animate camera path through scroll sections (hero → terrain → overlay → depth)
- ✅ Build depth slider component with 6 levels (Permukaan to -1000m)
- ✅ Sync depth slider with 2D cross-section display + 3D scene plane
- ✅ Show depth label and info panel
- ✅ Implement `zustand` store for view state
- ✅ Implement URL hash persistence for all view state
- ✅ Wire up URL state ↔ store ↔ UI (bidirectional sync)

**Validation:**

- Scrolling from top to bottom of landing page animates camera along planned path
- Depth slider updates 2D and 3D views simultaneously
- Refreshing page restores camera position and active model from URL
- Mobile: scroll behavior degrades gracefully (no camera animation, static sections)

### Phase 3: Particle Flow & Comparison Mode (Weeks 3–4)

**Goal:** Add premium data visualization features that directly address the "mainstream" critique.

**Deliverables:**

- ✅ Build custom Three.js particle system for magnetic/gravity field lines
- ✅ Implement color mapping from model data to particle colors
- ✅ Add particle trail effect (1s alpha fade)
- ✅ Build side-by-side comparison panel
- ✅ Synchronize OrbitControls between two viewports
- ✅ Add drag-to-resize divider between comparison panels
- ✅ Implement model switching with hover preview thumbnails
- ✅ Animate page transitions with Framer Motion AnimatePresence
- ✅ Replace all placeholder hotspot data with real annotations

**Validation:**

- Particle system runs at 60fps with 5,000 particles
- Comparison mode shows gravity left / magnetic right with synced cameras
- Dragging divider resizes panels smoothly
- Model hover shows preview thumbnail within 200ms
- Page transitions are smooth (no white flash or layout shift)

### Phase 4: Polish & QA (Week 5)

**Goal:** Polish everything, fix edge cases, ensure production readiness.

**Deliverables:**

- ✅ Mobile responsiveness audit (fix any broken layouts)
- ✅ Performance optimization (reduce draw calls, optimize GLB, lazy load non-critical)
- ✅ Update all content: fix bibtex citation, replace placeholder text, verify data accuracy
- ✅ Add error boundaries for 3D scene failures
- ✅ Keyboard navigation support (tab through interactive elements)
- ✅ Lighthouse audit (score ≥ 80 performance, ≥ 90 accessibility)
- ✅ Cross-browser testing (Chrome, Firefox, Safari, Edge)
- ✅ Final build validation (`npm run build`, `npm run lint`, `npx tsc --noEmit`)

**Validation:**

- Lighthouse scores met
- Site works on Chrome, Firefox, Safari, Edge (latest 2 versions)
- No console errors on any page
- All animations run at 60fps
- Mobile layout has no horizontal scroll or overlapping elements

---

## 13. Future Considerations

### Post-MVP Enhancements

| Feature                             | Priority | Description                                                                                                                 |
| ----------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------- |
| **Subsurface volume rendering**     | High     | True 3D volume of magnetic/gravity data with interactive cutting plane. Replace 2D depth slices with real volume rendering. |
| **AI/NLP data query**               | Medium   | Allow users to ask questions like "Show me the area with highest magnetic anomaly" via the chatbot.                         |
| **Time-dynamic data animation**     | Medium   | Animate volcano activity levels on a timeline with map markers.                                                             |
| **Data download**                   | Medium   | Allow users to download model data (CSV, JSON, GeoJSON) for their own analysis.                                             |
| **Multi-language (EN/ID)**          | Low      | Add English toggle for international audience.                                                                              |
| **Mobile touch 3D controls**        | Low      | Custom gesture handling for 3D scene on touch devices.                                                                      |
| **2.5D / orthographic view toggle** | Low      | Switch between 3D perspective and technical 2D top-down view.                                                               |
| **User accounts**                   | Low      | Save favorite viewpoints, bookmark depths.                                                                                  |
| **Real-time MAGMA streaming**       | Low      | WebSocket connection for live volcano status updates.                                                                       |

### Integration Opportunities

- **Google Scholar / DOI integration** for paper citations
- **Leaflet / MapLibre** for 2D map view of research area
- **MAGMA API webhooks** for real-time volcano alerts
- **WebGPU** for compute shader particle systems (future-proofing)

---

## 14. Risks & Mitigations

| #   | Risk                                                             | Likelihood | Impact | Mitigation                                                                                                                                       |
| --- | ---------------------------------------------------------------- | ---------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | **GLB model is too large causing slow load times**               | Medium     | High   | Compress with DRACO decoder, use progressive loading (low-res → high-res), show skeleton immediately. Target: < 3s load time.                    |
| 2   | **Particle system causes frame drops on mid-range devices**      | Medium     | High   | Implement particle count scaling based on device capability. Start with 5,000, degrade to 1,000 on low-end. Use `navigator.hardwareConcurrency`. |
| 3   | **Scroll-driven animation conflicts with native browser scroll** | Medium     | Medium | Use Lenis for smooth scroll replacement. Handle `wheel` event conflicts. Test on Chrome, Firefox, Safari.                                        |
| 4   | **Data placeholder still visible (not replaced with real data)** | High       | Medium | Clear labeling system: badge "Data Sementara" for placeholders, badge "Data Aktual" for real data. Never pass placeholder as real.               |
| 5   | **Mobile 3D performance unusable**                               | Medium     | High   | Feature-detect mobile GPU. If below threshold, replace 3D canvas with static image fallback + message "Buka di desktop untuk pengalaman 3D."     |

### Contingency Plans

- **If 3D load fails entirely:** Show a static hero image (`landing-cover.jpeg`) with a "Model 3D tidak dapat dimuat" message and retry button.
- **If GSAP/Lenis is overkill:** Fall back to CSS `scroll-behavior: smooth` + IntersectionObserver-based reveals (current approach, but enhanced).
- **If particle system is too complex for timeline:** Ship depth slider + comparison mode first (Phase 3a), defer particles to Phase 3b.

---

## 15. Appendix

### Related Documents

| Document           | Location                                | Description                                                            |
| ------------------ | --------------------------------------- | ---------------------------------------------------------------------- |
| Weakness Report v2 | `.agents/reports/weakness_report_v2.md` | Comprehensive analysis of current site issues and competitive research |
| README             | `README.md`                             | Project overview and original requirements                             |

### Repository Structure

```
divolca-net/
├── frontend/          # Active development
│   ├── api/           # Serverless functions
│   ├── public/        # Static assets
│   └── src/           # React application
├── backend/           # Python scripts
├── .agents/           # Planning & analysis
│   ├── plans/         # Feature plans
│   └── reports/       # Analysis reports
└── frontend.old/      # Legacy reference
```

### Key Decisions & Rationale

| Decision                                    | Rationale                                                                                                                                              |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Lenis + GSAP over Framer Motion scroll**  | GSAP ScrollTrigger is the industry standard for scroll-driven 3D camera animation. Framer Motion is better for UI micro-interactions (used for those). |
| **zustand over Redux/Context**              | Minimal boilerplate, excellent TypeScript support, tiny bundle size. Only needed for URL state sync — not complex state management.                    |
| **Custom particle system over deck.gl**     | Fewer dependencies, full control over shaders, better integration with existing Three.js scene. deck.gl if we need to render millions of points later. |
| **Switchable theme, dark default**          | Dark mode is the default but users can toggle to light mode. CSS custom properties (`:root` / `:root.dark`) + Tailwind `dark:` variant enable zero-FOUC switching with minimal maintenance. Tailwind's `dark:` prefix is available for component-level overrides. |
| **Persistent 3D canvas over mount/unmount** | Avoids expensive Three.js re-initialization on every page navigation. Keeps camera state alive.                                                        |
| **Placeholder badges over hiding**          | Transparency about data readiness builds trust. "Data Sementara" badges are honest. Hidden placeholders look like bugs.                                |
