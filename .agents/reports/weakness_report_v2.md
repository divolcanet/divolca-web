# DiVolca.net — Comprehensive Weakness & Improvement Report v2

> **Context:** Client feedback that the site looks "mainstream" — lacking visual sophistication, interactive depth, and the "premium" feel expected from a cutting-edge geophysics data visualization platform.
>
> **Research basis:** Analysis of DiVolca codebase + study of Earth.nullschool.net, Cesium Ion, Apple product pages, Stripe, Shader.se, Google Earth, Terrascan, Hypatia Zero, The Pudding, and academic visualization papers.

---

## 1. The Core Problem

The site is **structurally sound but visually flat**. It follows a standard blog-template layout (navbar → hero → content sections → footer) with no unexpected moments, no visual drama, and no interactive depth. Everything is "read and scroll" — nothing makes the user stop and say "wow."

The site functions as a **content website that happens to have a 3D viewer**, rather than a **geospatial data platform with a polished UI**. It does not visually signal that it represents cutting-edge geophysics research.

---

## 2. Specific Issues Identified in the Current Codebase

### 2.1 Visual & Theming

| Issue | Current Code | Problem |
|-------|-------------|---------|
| **Light theme background** | `bg-[#EEEEEE]` (primary-fg) | Geophysical data universally looks better on dark surfaces — colored anomaly maps pop against dark, not light |
| **Inconsistent 3D backdrop** | `bg-[#A1C2BD]` (teal) for 3D scene | Breaks from the site theme; feels disconnected |
| **No post-processing** | Default MeshStandardMaterial | No bloom, tone-mapping, or atmospheric effects — 3D scene looks game-engine flat |
| **Flat page transitions** | React Router instant swap (no animation) | No continuity between pages, no dramatic entrance |
| **No loading experience** | Nothing for GLB 3D model load | User waits blindly with no feedback |
| **Static scroll behavior** | Basic `Reveal` IntersectionObserver | No scroll-driven camera, no parallax, 3D viewer is fixed and disconnected from scroll narrative |
| **Color palette feels generic** | `#99fd53` (neon green) on `#EEEEEE` | Reads as "2010s startup" rather than "serious research platform" |

### 2.2 3D Viewer Limitations

| Issue | Current Code | Problem |
|-------|-------------|---------|
| **Static single GLB model** | `<MapModel url={mountainUrl} />` | No dynamic data visualization — just one mesh with markers |
| **No data overlays** | Only hotspot markers | Magnetic/gravity data described in text but never visually rendered on terrain |
| **No depth slicing** | Not implemented (planned in `.agents/plans/`) | Users cannot explore subsurface data at different depths |
| **No volume rendering** | Surface-only terrain | True 3D geophysics data (magnetic, gravity volumes) not visualized |
| **No particle/flow visualization** | None | The single most recognizable "premium" geospatial pattern is missing |
| **Default Three.js lighting** | `ambientLight` + 2 `directionalLight` | No physically-based lighting, no shadows, no atmosphere |
| **No camera animation presets** | OrbitControls only | No guided views, no programmatic camera reveals |
| **No multi-model comparison** | Tab-switch replaces the view | Users cannot compare models side-by-side |

### 2.3 Interaction & UX

| Issue | Current Code | Problem |
|-------|-------------|---------|
| **No micro-interactions** | Button hover states exist but are minimal | No hover scale, press feedback, skeleton loaders, success/error animations |
| **No loading states** | None anywhere | All content appears instantly or not at all |
| **No scroll-driven narrative** | Sections independent, no scroll choreography | No guided experience connecting sections |
| **No URL state persistence** | Camera/view state lost on navigation | Cannot share specific viewpoints or model selections |
| **No minimap/spatial context** | None | Users lose spatial orientation when navigating data |
| **No comparison mode** | No split-screen or swipe-compare | Researchers cannot visually compare gravity vs magnetic at the same depth |
| **No data annotation interaction** | Static hotspot cards (hardcoded placeholder text) | Annotations are generic, not linked to actual data values |
| **No keyboard shortcuts** | None | Power users cannot navigate efficiently |

### 2.4 Data Visualization Depth

| Issue | Current Code | Problem |
|-------|-------------|---------|
| **No data visualization for magnetic/gravity** | Only described in text on other pages | The core research data is never actually *shown* visually |
| **Static color legend** | Single hardcoded nT scale in Legend component | Not interactive, not data-driven, same for all models |
| **No anomaly heatmap overlay on terrain** | None | The most intuitive way to show geophysics data is absent |
| **No time-dynamic data** | Single snapshot | Cannot explore data across time dimensions |
| **No 2D cross-section view** | Planned but not built | Flat depth slices would help understanding structure at specific depths |

### 2.5 Content & Storytelling

| Issue | Current Code | Problem |
|-------|-------------|---------|
| **Hardcoded placeholder hotspot data** | `"Detail informasi area A."` | Not real data annotations — undermines credibility |
| **Bibtex citation is placeholder** | References a non-Dieng paper | The one citation present is unrelated (DanceOPD paper) |
| **No scrollytelling/narrative** | Static page sections | No guided data exploration experience |
| **No data source credibility markers** | Not emphasized | Users cannot distinguish real data from placeholders |
| **No comparison between data types** | Separate tabs, no cross-referencing | Researchers cannot correlate gravity and magnetic anomalies |

---

## 3. Competitive Reference Analysis

### 3.1 Earth.nullschool.net
- **Key pattern:** Animated particle flow visualization for wind/ocean/atmosphere data
- **What to steal:** Dark theme + animated field lines + URL state persistence for shareable views
- **Relevance to DiVolca:** Magnetic/gravity field lines visualized as animated particle flows over terrain

### 3.2 Apple Product Pages
- **Key pattern:** Scroll-driven 3D camera animation + smooth Lenis scroll + GSAP-triggered reveals
- **What to steal:** Camera orbits terrain on scroll, staggered element reveals, polished physics easing
- **Relevance:** Landing page should feel like an Apple product reveal — camera orbits Dieng terrain as user scrolls

### 3.3 Stripe (2025 Bento Grid)
- **Key pattern:** Modular bento grid with hover previews + loading skeletons + physics micro-interactions
- **What to steal:** Hover-to-preview on model cards, skeleton loaders, button scale on click
- **Relevance:** Data model selector becomes a visual bento grid instead of radio buttons

### 3.4 Terrascan
- **Key pattern:** Subsurface volume rendering composited with surface terrain
- **What to steal:** 3D volume cutting planes + depth-controlled slicing + fuzzy-outlined anomaly bodies
- **Relevance:** Directly applicable — DiVolca's magnetic/gravity subsurface data rendered as true 3D volumes

### 3.5 CesiumJS / Cesium Stories
- **Key pattern:** Guided narrative with bookmarked camera positions + time-dynamic data (CZML)
- **What to steal:** "Jelajahi" (Explore) mode with preset viewpoints + timeline scrubbing for time-series
- **Relevance:** Guided tour of Dieng's subsurface structure with animated camera transitions

### 3.6 Shader.se / VertexFlow
- **Key pattern:** Custom GLSL shaders, bloom + chromatic aberration post-processing, FBO render chain for seamless scene transitions
- **What to steal:** Post-processing pipeline + page morph transitions + custom wireframe shaders
- **Relevance:** Elevates Three.js rendering from basic to cinematic quality

### 3.7 The Pudding / NYTimes Interactive
- **Key pattern:** Scrollytelling with annotated data visualizations at each scroll step
- **What to steal:** Step-reveal data layers as user scrolls + inline annotations tied to scroll position
- **Relevance:** Turn landing page into a scroll-based story: terrain → gravity overlay → depth slice → annotations

---

## 4. Recommended Improvements (Prioritized)

### 🎯 Phase 1 — Quick Wins (Low Effort, High Visual Impact)

Estimated effort: **2–3 days**

| # | Improvement | Effort | Impact | Details |
|---|-------------|--------|--------|---------|
| 1 | **Dark theme redesign** | 4h | ⭐⭐⭐⭐⭐ | Switch from `#EEEEEE` to `#091413` (existing `--color-accent`) as default bg. Data colors pop against dark. |
| 2 | **Post-processing bloom** | 2h | ⭐⭐⭐⭐⭐ | `@react-three/postprocessing` — subtle bloom on emissive materials makes 3D scene cinematic. |
| 3 | **Loading skeletons** | 3h | ⭐⭐⭐⭐ | Pulse-animated placeholder for GLB load + page content. Most impactful UX cheap fix. |
| 4 | **Micro-interactions** | 4h | ⭐⭐⭐⭐ | Hover scale (1.05x), press scale (0.95x), card lift shadow, navbar blur transition. |
| 5 | **Better 3D lighting + fog** | 2h | ⭐⭐⭐⭐ | Add fog, hemisphere light, shadow map. The terrain needs atmosphere. |
| 6 | **Persistent 3D background** | 6h | ⭐⭐⭐⭐ | Single Three.js canvas persists across pages, subtly reacting to route changes. Feels like a "3D world." |

### 🚀 Phase 2 — Medium Impact (Moderate Effort)

Estimated effort: **1.5–2 weeks**

| # | Improvement | Effort | Impact | Details |
|---|-------------|--------|--------|---------|
| 7 | **Scroll-driven 3D camera animation** | 8h | ⭐⭐⭐⭐⭐ | Install Lenis + GSAP ScrollTrigger. Camera orbits terrain as user scrolls hero → 3D section. |
| 8 | **Depth slicing for 2D spatial data** | 8h | ⭐⭐⭐⭐⭐ | Already planned (`.agents/plans/`). Animated vertical slider to cut through earth at different depths. |
| 9 | **Animated particle flow visualization** | 12h | ⭐⭐⭐⭐⭐ | Custom Three.js particle system for magnetic/gravity field lines flowing over terrain. |
| 10 | **Side-by-side comparison mode** | 6h | ⭐⭐⭐⭐ | Split-screen or swipe-compare two models (gravity vs magnetic) with synchronized OrbitControls. |
| 11 | **URL state persistence** | 4h | ⭐⭐⭐⭐ | Camera position, active model, depth, and tab in URL hash for shareable deep links. |
| 12 | **Data-driven legend** | 3h | ⭐⭐⭐⭐ | Legend component reads from active model data instead of being hardcoded. Interactive: hover-to-query, click-to-filter. |
| 13 | **Hotspot card animations** | 4h | ⭐⭐⭐ | Spring-animated popover entrance, staggered reveal, physics bounce on close. |
| 14 | **Page transition animations** | 6h | ⭐⭐⭐ | Framer Motion AnimatePresence — staggered fade/slide between routes. |

### 💎 Phase 3 — Transformational Changes (High Effort, Game-Changing)

Estimated effort: **3–6 weeks**

| # | Improvement | Effort | Impact | Details |
|---|-------------|--------|--------|---------|
| 15 | **Subsurface volume rendering** | 3-4 weeks | ⭐⭐⭐⭐⭐ | True 3D volume of magnetic/gravity data with interactive cutting plane. The ultimate differentiator. |
| 16 | **Guided scrollytelling "Jelajahi" mode** | 2 weeks | ⭐⭐⭐⭐⭐ | Full scroll-based narrative: terrain → gravity → depth slice → annotations → citation. Each scroll step triggers camera + data reveal. |
| 17 | **AI/NLP data query integration** | 2-3 weeks | ⭐⭐⭐⭐ | Replace placeholder chatbot with real geophysics QA: "What is the magnetic anomaly at -200m?" |
| 18 | **2.5D/3D view toggle** | 1 week | ⭐⭐⭐⭐ | Switch between 3D perspective and 2D top-down orthographic view. |
| 19 | **Comparison with real-time volcano data** | 1 week | ⭐⭐⭐⭐ | Animate volcano activity data on a timeline with map markers and status changes. |
| 20 | **Multi-language support** | 2 weeks | ⭐⭐⭐ | EN/ID toggle. Indonesian is correct for local audience but English expands reach. |

---

## 5. Thematic & Styling Recommendations

### 5.1 Color Palette

**Current (mainstream feel):**
```
Primary FG:    #EEEEEE (light gray — washes out)
Accent:        #091413 (dark — barely used)
Primary-10:    #99fd53 (neon green — loud)
Primary-75:    #1f6f5f (teal-green — muted)
Secondary:     #dceb52 (yellow-green)
```

**Recommended (premium geospatial):**
```
Background:    #091413 or #0a0a0f (deep dark)
Surface:       #1a1a2e or #1a2322 (dark card surfaces)
Data accent:   #99fd53 (keep, but use sparingly — CTAs only)
Magnetic map:  #3b82f6 → #8b5cf6 → #ec4899 (blue→purple→pink diverging)
Gravity map:   #f97316 → #eab308 → #22c55e (orange→yellow→green diverging)
Text primary:  #f4f4f8 (near-white)
Text muted:    #9a9ab0 (gray)
Warning:       #f59e0b (amber)
Danger:        #ef4444 (red)
```

### 5.2 Typography

**Keep as-is:**
- Fraunces for headings (editorial, distinctive)
- Inter for body (clean, readable)
- JetBrains Mono for data values (technical credibility)

**Add:**
- Monospace for ALL data values in Hotspots, Legend, tooltips (reinforces "scientific tool" feel)
- Increased letter-spacing on UI labels in data panels

### 5.3 Animation Language

Define a consistent animation system:
- **Duration:** 300ms for micro-interactions, 700ms for reveals, 1000–1500ms for camera movements
- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` — Apple-style "spring-like" easing
- **Stagger:** 60ms delay between sibling items (cards, list items)
- **Physics:** Light spring bounce on popovers, smooth easing on camera moves

---

## 6. Critical Note: Placeholder/Real Data Gap

The current codebase has placeholder data that undermines credibility:
- `frontend/src/components/Legend.tsx` — hardcoded nT scale (not connected to actual data)
- `frontend/src/data/spatial.ts` — hotspot descriptions are generic: `"Detail informasi area A."`
- `frontend/src/data/research.ts` — bibtex references an unrelated paper (DanceOPD)
- `frontend/src/data/spatial.ts` — model URLs are empty strings (`url: ""`)

**Before any visual improvements, consider:**
1. Either make placeholders LOOK like placeholders (transparent skeleton / "Data akan tersedia" badge)
2. Or populate with real data before launch

The worst case is a polished UI showing placeholder content — this amplifies the "incomplete" perception.

---

## 7. Build Recommendations

### 7.1 Dependencies to Add

```bash
# Animation & Scroll
npm install gsap @gsap/react lenis framer-motion

# 3D Enhancement
npm install @react-three/postprocessing three-mesh-bvh

# Data Visualization (if needed)
npm install deck.gl @deck.gl/layers

# Performance
npm install @react-three/drei  # (already installed, use <Stats>, <Preload>, <Detailed>)
```

### 7.2 Architecture Changes

| Change | Reason |
|--------|--------|
| Extract 3D scene into a persistent `SceneContext` | Single canvas across pages instead of mount/unmount per page |
| Create `useScrollAnimation` hook | Centralized GSAP ScrollTrigger orchestration |
| Create `useTransitionRouter` | Wraps React Router with Framer Motion page transitions |
| Create `data/types.ts` for dynamic data models | Move from inline types to centralized data contracts |
| Create `lib/constants.ts` | Color scales, animation defaults, easing curves |
| Set up `__tests__/` structure | Start with component tests for critical UI |

---

## 8. Measuring Success

After implementing Phase 1–2, the site should differ from the current version in these measurable ways:

| Metric | Current State | Target State |
|--------|--------------|--------------|
| First meaningful paint impression | "Blog with 3D embed" | "Premium data platform" |
| User interaction depth | Scroll + click links | Scroll, orbit, compare, query, share |
| Data comprehension | Read text descriptions | See animated data overlays |
| Mobile experience | Vertical stacked sections | Adapted layout with touch 3D controls |
| Shareability | Fixed URL per page | Deep-linkable to specific view + model + depth |
| Loading experience | White flash / invisible load | Skeleton screens + progress + progressive reveal |
| Visual polish score | 4/10 | 8/10 |

---

## 9. Appendix: Reference Sites Analysis

| Site | URL | Key Takeaway |
|------|-----|-------------|
| Earth.nullschool.net | https://earth.nullschool.net | Particle flow + dark theme + URL state |
| Cesium Ion | https://cesium.com/platform/cesium-ion/ | 3D globe + time-dynamic data + guided tours |
| Google Earth | https://earth.google.com | Photorealism + seamless navigation + AI features |
| Apple Product Pages | https://www.apple.com | Scroll-driven 3D + physics micro-interactions |
| Stripe | https://stripe.com | Bento grid + loading skeletons + hover states |
| Shader.se | https://shader.se | Custom GLSL + bloom + page morph transitions |
| The Pudding | https://pudding.cool | Scrollytelling data journalism |
| Terrascan (bowd) | https://bowd.io | Subsurface volume composited with surface |
| Hypatia Zero | https://hypatia.zero | Weather data particle flow + time scrubbing |
| Maplable | https://maplable.com | Interactive maps with clean dark theme |
| VertexFlow | https://vertexflow.xyz | Creative 3D transitions + particle effects |
| NASA Eyes | https://eyes.nasa.gov | Real-time 3D data visualization at scale |

---

*Report generated from comprehensive codebase analysis + competitive research. July 2026.*
