# Feature: Glosarium Page with Sidebar Outline and Hash-Based Anchors

The following plan should be complete, but it's important that you validate documentation and codebase patterns and task sanity before you start implementing.

Pay special attention to naming of existing utils types and models. Import from the right files etc.

## Feature Description

Create a Glossary (Glosarium) page at `/glosarium` that displays a dictionary of geophysical/volcanological terms relevant to the Dieng Mountains research. The page has a two-column layout: a sticky sidebar on the left containing an outline (table of contents) listing all terms, and the main content area on the right showing each term's full definition. Each term has:
- A title (display name)
- A slug (URL-safe identifier used as anchor ID)
- Content (plain text description in Indonesian)
- An optional external link for further reading

Users can navigate via the sidebar outline, or directly via URL hash (`/glosarium#magnetik`), which auto-scrolls to and highlights the matching term. The sidebar uses native HTML `<a href="#slug">` elements — no custom hook needed for clicks. A brief `useEffect` handles the SPA edge case (React Router intercepting hash navigation on initial page load).

## User Story

As a visitor to the DiVolca.net website
I want to browse a glossary of geophysical terms with a sidebar outline and anchor links
So that I can quickly find definitions, share direct links to specific terms, and understand the research terminology

## Problem Statement

The current `/glosarium` route renders an empty fragment. The navigation bar and footer both link to it, but users see a blank page. There is no existing pattern in the codebase for sidebar/outline navigation, hash-based scrolling, or anchor-linked page sections — all of which need to be built for this feature.

## Solution Statement

Build the glossary page using the same page structure, Tailwind volcanic theme, and static data patterns as existing pages. Create two new artifacts: a glossary data file (`src/data/glossary.json`) and a glossary page component (`src/pages/GlossaryPage.tsx`) with an integrated sidebar outline. The sidebar is sticky on desktop and collapses above the content on mobile. Each term section has an `id={slug}` for native HTML anchor targeting. Sidebar items use `<a href="#slug">` for native browser scroll behavior. A small `useEffect` handles the SPA edge case where React Router intercepts hash navigation on initial page load.

## Feature Metadata

**Feature Type**: New Capability
**Estimated Complexity**: Low
**Primary Systems Affected**: `frontend/src/pages/GlossaryPage.tsx`, `frontend/src/data/glossary.json`, `frontend/src/App.tsx`
**Dependencies**: None (browser-native `scrollIntoView` + `location.hash`)

---

## CONTEXT REFERENCES

### Relevant Codebase Files IMPORTANT: YOU MUST READ THESE FILES BEFORE IMPLEMENTING!

- `frontend/src/App.tsx` (line 23) — Why: Contains the empty `<Route path="glosarium" element={<></>} />` that must be replaced with the lazy-loaded GlossaryPage
- `frontend/src/pages/GalleryPage.tsx` (lines 64-143) — Why: Best reference for page structure pattern (heading, description, content area, responsive grid), same complexity level
- `frontend/src/pages/AboutDiengPage.tsx` (lines 1-108) — Why: Shows rich content page with multiple sections, tables, and factual data — closest to glossary's content density
- `frontend/src/data/spatial.json` (lines 1-22) — Why: Data pattern to mirror for glossary.json (static JSON array imported directly)
- `frontend/src/types/index.ts` (lines 1-28) — Why: Location to add `GlossaryEntry` interface
- `frontend/src/components/ScrollToTop.tsx` (lines 1-11) — Why: Shows existing scroll/effect pattern using `useLocation` for reference in building the hash scroll effect in GlossaryPage
- `frontend/src/components/Navbar.tsx` (line 10) — Why: Confirms `/glosarium` is already linked in the nav
- `frontend/src/components/Footer.tsx` (line 10) — Why: Confirms `/glosarium` is already linked in the footer
- `frontend/src/index.css` (lines 1-34) — Why: Contains all Tailwind v4 `@theme` tokens available for styling
- `frontend/tailwind.config.js` — Why: Does NOT exist (Tailwind v4 uses `@theme` in CSS, not a config file)
- `frontend/tsconfig.app.json` (lines 19-26) — Why: `strict: true`, `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly` — all unused imports/params will fail build

### New Files to Create

- `frontend/src/data/glossary.json` — Static glossary term definitions
- `frontend/src/pages/GlossaryPage.tsx` — Main glossary page with sidebar and content

### Files to Update

- `frontend/src/types/index.ts` — Add `GlossaryEntry` interface
- `frontend/src/App.tsx` — Replace empty `<Route path="glosarium">` with lazy-loaded GlossaryPage

### Relevant Documentation

- [MDN: Element.scrollIntoView()](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
  - Specific section: `scrollIntoView({ behavior: 'smooth', block: 'start' })`
  - Why: Core API for smooth scrolling to anchor targets
- [MDN: Window.location.hash](https://developer.mozilla.org/en-US/docs/Web/API/Location/hash)
  - Why: Getting/setting the URL hash for shareable anchors
- [MDN: hashchange event](https://developer.mozilla.org/en-US/docs/Web/API/Window/hashchange_event)
  - Why: Listening for hash changes from browser navigation (back/forward buttons)
- [Tailwind CSS v4 Sticky Positioning](https://tailwindcss.com/docs/position#sticky-positioning)
  - Why: `sticky top-24` for sidebar outline positioning below the navbar
- [Tailwind CSS v4 Scroll Margin](https://tailwindcss.com/docs/scroll-margin)
  - Why: `scroll-mt-24` on term sections so the sticky navbar doesn't overlap the scrolled-to anchor
- [Tailwind CSS v4 Dividing Lines](https://tailwindcss.com/docs/border-width#divide-width)
  - Why: `divide-y divide-volcanic-800` separator between glossary entries

### Patterns to Follow

**Naming Conventions:**
- PascalCase for React components: `GlossaryPage.tsx`
- camelCase for utility functions and hooks: `useHashScroll.ts`
- kebab-case for JSON keys: `externalLink`
- `src/pages/` for route-level page components
- `src/data/` for static JSON data files
- `src/types/` for TypeScript type definitions
- Self-contained page — no custom hooks needed; hash scroll handled via inline `useEffect` and native `<a href="#slug">`

**Page Structure Pattern** (from GalleryPage.tsx):
```tsx
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  <h1 className="font-oswald text-4xl font-bold text-volcanic-50 mb-8">
    Judul Halaman
  </h1>
  <p className="text-volcanic-300 leading-relaxed text-lg max-w-3xl mb-10">
    Description paragraph
  </p>
  {/* content */}
</section>
```

**Data Import Pattern** (from Viewer3D.tsx):
```tsx
import spatialData from "../data/spatial.json";
```

**Type Pattern** (from types/index.ts):
```typescript
export interface GlossaryEntry {
  slug: string;
  title: string;
  content: string;
  externalLink?: string;
}
```

**Hash Scroll Pattern** (inline useEffect in GlossaryPage, not a separate hook):
Native HTML `<a href="#slug">` handles click-based scrolling. A small `useEffect` handles the SPA edge case (React Router intercepts hash navigation on initial page load):
```typescript
useEffect(() => {
  const hash = window.location.hash;
  if (hash) {
    const el = document.getElementById(hash.replace("#", ""));
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}, []);
```

**Lazy Loading Pattern** (from App.tsx):
```tsx
const GlossaryPage = React.lazy(() => import("./pages/GlossaryPage"));
```

**Error Handling:**
- TypeScript strict mode — all types must be explicit, no implicit any
- `noUnusedLocals` and `noUnusedParameters` — every import and param must be used
- `erasableSyntaxOnly` — no enums or namespaces; use string unions or const objects
- Empty glossary array must render an empty state message
- Invalid/unmatched hash must be silently ignored (no error thrown)

**Component Pattern:**
- Functional components with explicit prop interfaces
- Default exports for page components
- No `.tsx` extension in import paths
- Tailwind utility classes for all styling (no CSS modules or styled-components)

---

## IMPLEMENTATION PLAN

### Phase 1: Foundation

Add types and glossary data.

**Tasks:**
- Add `GlossaryEntry` interface to types/index.ts
- Create glossary.json with ~10+ geophysical/volcanology terms relevant to Dieng research

### Phase 2: Core Implementation

Build the glossary page component.

**Tasks:**
- Create `GlossaryPage` component with sidebar outline, term content area, and inline hash scroll effect

### Phase 3: Integration

Wire into routing.

**Tasks:**
- Update App.tsx to lazy-load GlossaryPage instead of rendering empty fragment
- Validate build, lint, and type-check

---

## STEP-BY-STEP TASKS

IMPORTANT: Execute every task in order, top to bottom. Each task is atomic and independently testable.

### Task 1: ADD GlossaryEntry interface to frontend/src/types/index.ts

- **IMPLEMENT**: Append a new `GlossaryEntry` interface at the end of the file (after the closing `}` of `DepthSlice`):
```typescript
export interface GlossaryEntry {
  slug: string;
  title: string;
  content: string;
  externalLink?: string;
}
```
- **GOTCHA**: Keep all existing interfaces unchanged. Append only.
- **GOTCHA**: The file uses semicolons (`;`) as terminators, not commas.
- **VALIDATE**: `npx tsc --noEmit -p tsconfig.app.json` (runs from `frontend/` directory)

### Task 2: CREATE frontend/src/data/glossary.json

- **IMPLEMENT**: Create a new JSON file with an array of glossary entries. Include at minimum these terms relevant to the Dieng geophysical research:

```json
[
  {
    "slug": "gravity",
    "title": "Gravitasi",
    "content": "Metode geofisika yang mengukur variasi medan gravitasi bumi untuk mengidentifikasi perbedaan densitas batuan di bawah permukaan. Data gravitasi digunakan untuk memetakan struktur geologi bawah permukaan, seperti cekungan, patahan, dan intrusi batuan.",
    "externalLink": "https://id.wikipedia.org/wiki/Gravitasi"
  },
  {
    "slug": "magnetik",
    "title": "Magnetik",
    "content": "Metode geofisika yang mengukur variasi medan magnet bumi untuk mengidentifikasi batuan yang memiliki sifat kemagnetan. Data magnetik dimanfaatkan untuk memetakan struktur bawah permukaan, seperti keberadaan batuan beku dan patahan.",
    "externalLink": "https://id.wikipedia.org/wiki/Magnetik"
  },
  {
    "slug": "seismik",
    "title": "Seismik",
    "content": "Metode geofisika yang menggunakan gelombang seismik untuk menggambarkan struktur lapisan batuan di bawah permukaan. Dalam eksplorasi, metode seismik memberikan resolusi tinggi untuk mengidentifikasi struktur geologi dan potensi sumber daya alam.",
    "externalLink": "https://id.wikipedia.org/wiki/Seismik"
  },
  {
    "slug": "geofisika",
    "title": "Geofisika",
    "content": "Cabang ilmu kebumian yang mempelajari bumi menggunakan prinsip-prinsip fisika, seperti gravitasi, magnetik, seismik, dan listrik. Data geofisika digunakan untuk menyelidiki struktur dan komposisi bawah permukaan bumi."
  },
  {
    "slug": "vulkanologi",
    "title": "Vulkanologi",
    "content": "Ilmu yang mempelajari gunung api, termasuk aktivitas erupsi, struktur magma, serta dampak vulkanik terhadap lingkungan. Vulkanologi berperan penting dalam mitigasi bencana geologi dan pemahaman sistem panas bumi.",
    "externalLink": "https://id.wikipedia.org/wiki/Vulkanologi"
  },
  {
    "slug": "anomali-gravitasi",
    "title": "Anomali Gravitasi",
    "content": "Perbedaan antara nilai gravitasi terukur di suatu titik dengan nilai gravitasi teoritis pada titik yang sama. Anomali ini mengindikasikan adanya variasi densitas batuan di bawah permukaan yang menjadi dasar interpretasi struktur geologi."
  },
  {
    "slug": "anomali-magnetik",
    "title": "Anomali Magnetik",
    "content": "Perbedaan antara nilai medan magnet terukur dengan nilai medan magnet teoritis bumi. Anomali magnetik digunakan untuk mengidentifikasi batuan yang memiliki suseptibilitas magnetik tinggi, seperti batuan beku."
  },
  {
    "slug": "tomografi-seismik",
    "title": "Tomografi Seismik",
    "content": "Teknik pencitraan struktur bawah permukaan menggunakan gelombang seismik, mirip dengan CT scan di bidang medis. Tomografi seismik menghasilkan model tiga dimensi kecepatan gelombang yang merepresentasikan distribusi material di dalam bumi."
  },
  {
    "slug": "mitigasi-bencana",
    "title": "Mitigasi Bencana Vulkanik",
    "content": "Serangkaian upaya untuk mengurangi risiko bencana akibat aktivitas gunung api, meliputi pemantauan, pemetaan kawasan rawan bencana, sistem peringatan dini, serta edukasi masyarakat. Mitigasi berbasis data geofisika meningkatkan kesiapsiagaan dan mengurangi dampak erupsi."
  },
  {
    "slug": "panas-bumi",
    "title": "Panas Bumi (Geotermal)",
    "content": "Energi panas yang tersimpan di dalam bumi, sering ditemukan di kawasan vulkanik seperti Dieng. Eksplorasi panas bumi menggunakan metode geofisika untuk mengidentifikasi reservoir dan mengestimasi potensi energinya.",
    "externalLink": "https://id.wikipedia.org/wiki/Panas_bumi"
  }
]
```
- **GOTCHA**: Valid JSON only — double quotes, no trailing commas.
- **GOTCHA**: The `externalLink` field is optional — some entries may omit it.
- **GOTCHA**: All text in Indonesian.
- **VALIDATE**: `node -e "JSON.parse(require('fs').readFileSync('src/data/glossary.json','utf8'))"` (runs from `frontend/` directory) — must exit without error.

### Task 3: CREATE frontend/src/pages/GlossaryPage.tsx

- **IMPLEMENT**: Create the main glossary page component with:
  1. Page heading and description
  2. Two-column layout: sticky sidebar (left) + main content (right)
  3. Sidebar: vertical list of all glossary term titles as `<a href="#slug">` links (native HTML anchor scrolling)
  4. Main content: each term rendered as a section with `id={slug}`, title, content, and optional external link
  5. Active sidebar item highlighted via IntersectionObserver tracking scroll position
  6. Responsive: sidebar stacks above content on mobile (`flex-col lg:flex-row`)
  7. Empty state if glossary array is empty
  8. Inline `useEffect` on mount to handle the SPA edge case (React Router intercepts initial hash navigation)

  Critical implementation details:
  - Page structure follows the established pattern: `<section>` with `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16`
  - Heading: `font-oswald text-4xl font-bold text-volcanic-50 mb-8`
  - Description: `text-volcanic-300 leading-relaxed text-lg max-w-3xl mb-10`
  - Sidebar container: `lg:w-64 shrink-0` with `sticky top-24` positioning and `max-h-[calc(100vh-8rem)] overflow-y-auto`
  - Sidebar items: `<a href="#{slug}">` styled as `block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors` — using `<a>` not `<button>` so native browser hash scrolling works
  - Active sidebar item: `bg-volcanic-800 text-magma-400`, inactive: `text-volcanic-400 hover:bg-volcanic-800 hover:text-volcanic-100`
  - Main content area: `flex-1 min-w-0`
  - Term section: `<div id={slug} className="scroll-mt-24">` — the `scroll-mt-24` accounts for the sticky navbar height
  - Term heading: `<h2 className="font-oswald text-2xl font-semibold text-volcanic-50">`
  - Term content: `<p className="text-volcanic-300 leading-relaxed">`
  - External link: rendered as `<a href={externalLink} target="_blank" rel="noopener noreferrer">` with an external link icon, only when `externalLink` exists
  - Separator between terms: `divide-y divide-volcanic-800` on the container
  - Empty state: message "Belum ada istilah yang tersedia." centered

  State management:
  - `useState` for `activeSlug` — tracks which term is currently active/highlighted in the sidebar
  - IntersectionObserver tracks which term is in view to update sidebar highlight (no click handler needed since `<a href="#slug">` handles scrolling natively)

  Icon imports from lucide-react:
  - `import { BookOpen, ExternalLink } from "lucide-react";`

  Inline hash scroll effect for SPA edge case (when user lands directly on `/glosarium#slug` via React Router):
  ```typescript
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);
  ```

  Full component skeleton:
```tsx
import { useState, useEffect } from "react";
import { BookOpen, ExternalLink } from "lucide-react";
import glossaryData from "../data/glossary.json";
import type { GlossaryEntry } from "../types";

export default function GlossaryPage() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  // SPA edge case: React Router intercepts initial hash navigation
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  // IntersectionObserver: update activeSlug based on scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSlug(entry.target.id);
          }
        }
      },
      { rootMargin: "-120px 0px -60% 0px" },
    );

    const elements = document.querySelectorAll("[id]");
    elements.forEach((el) => {
      if (glossaryData.some((g) => g.slug === el.id)) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  if (glossaryData.length === 0) {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-oswald text-4xl font-bold text-volcanic-50 mb-8">
          Glosarium
        </h1>
        <p className="text-volcanic-400">Belum ada istilah yang tersedia.</p>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-10">
        <h1 className="font-oswald text-4xl font-bold text-volcanic-50 mb-4 flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-magma-400" />
          Glosarium
        </h1>
        <p className="text-volcanic-300 leading-relaxed text-lg max-w-3xl">
          Kumpulan istilah geofisika dan vulkanologi yang digunakan dalam
          penelitian Pegunungan Dieng.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar — uses native <a href="#slug"> for browser-managed scroll */}
        <aside className="lg:w-64 shrink-0">
          <nav className="lg:sticky lg:top-24 space-y-1 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
            <h2 className="text-xs font-semibold text-volcanic-500 uppercase tracking-wider mb-3 lg:mb-4">
              Daftar Istilah
            </h2>
            {glossaryData.map((entry) => (
              <a
                key={entry.slug}
                href={`#${entry.slug}`}
                onClick={() => setActiveSlug(entry.slug)}
                className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSlug === entry.slug
                    ? "bg-volcanic-800 text-magma-400"
                    : "text-volcanic-400 hover:bg-volcanic-800 hover:text-volcanic-100"
                }`}
              >
                {entry.title}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0 divide-y divide-volcanic-800">
          {glossaryData.map((entry) => (
            <div
              key={entry.slug}
              id={entry.slug}
              className="scroll-mt-24 py-8 first:pt-0 last:pb-0"
            >
              <h2 className="font-oswald text-2xl font-semibold text-volcanic-50 mb-3">
                {entry.title}
              </h2>
              <p className="text-volcanic-300 leading-relaxed">
                {entry.content}
              </p>
              {entry.externalLink && (
                <a
                  href={entry.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 text-sm text-magma-400 hover:text-magma-500 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Baca selengkapnya
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```
- **IMPORTS**:
  ```typescript
  import { useState, useEffect } from "react";
  import { BookOpen, ExternalLink } from "lucide-react";
  import glossaryData from "../data/glossary.json";
  import type { GlossaryEntry } from "../types";
  ```
- **GOTCHA**: `scroll-mt-24` on term sections is critical — without it, the sticky navbar (h-16 = 4rem) would overlap the scrolled-to anchor target. The 24 (6rem = 96px) provides enough offset.
- **GOTCHA**: Sidebar items use `<a>` not `<button>` — this lets the browser handle `#slug` scrolling natively. The `onClick` is only for updating `activeSlug` highlight state.
- **GOTCHA**: The `rootMargin` in IntersectionObserver (`"-120px 0px -60% 0px"`) compensates for the navbar height and makes the active detection work naturally.
- **GOTCHA**: `verbatimModuleSyntax` requires `import type { ... }` for type-only imports.
- **GOTCHA**: The glossary must be imported as a default import (matches pattern from Viewer3D.tsx). Since it's a JSON array (not an object with named exports), `import glossaryData from "../data/glossary.json"` will import the entire array.
- **GOTCHA**: `glossaryData` is typed as `GlossaryEntry[]` by inference, but Vite's JSON import may type it as `never[]` or loose types. Use `as GlossaryEntry[]` cast or rely on Vite's JSON module typings. Safer: define the array in a `.ts` file instead of `.json` if type inference is problematic. However, for consistency with `spatial.json`, use `.json` and cast.
- **VALIDATE**: `npx tsc --noEmit -p tsconfig.app.json` && `npm run lint`

### Task 4: UPDATE frontend/src/App.tsx

- **IMPLEMENT**: 
  1. Add a lazy import for GlossaryPage:
  ```tsx
  const GlossaryPage = React.lazy(() => import("./pages/GlossaryPage"));
  ```
  2. Replace the empty fragment route with the new component:
  ```tsx
  <Route path="glosarium" element={<GlossaryPage />} />
  ```
- **GOTCHA**: The lazy import must use the exact same pattern as the other 5 lazy imports already in App.tsx (lines 6-10).
- **GOTCHA**: Ensure the import is added alphabetically among the other lazy imports for consistency.
- **GOTCHA**: `noUnusedLocals` is enabled — the `React` import on line 1 is used by the `React.lazy` calls, so it won't be flagged as unused.
- **VALIDATE**: `npx tsc --noEmit -p tsconfig.app.json` && `npm run lint`

### Task 5: Full Build Validation

- **VALIDATE**: `cd frontend && npm run build` — must complete with zero errors
- **VALIDATE**: `cd frontend && npm run lint` — must pass with zero warnings
- **VALIDATE**: `cd frontend && npx tsc --noEmit -p tsconfig.app.json` — type check must pass

---

## TESTING STRATEGY

### Unit Tests

No test framework is currently configured. Manual validation covers correctness.

### Edge Cases

- **Empty glossary**: `glossary.json` contains an empty array `[]` — page renders "Belum ada istilah yang tersedia." message
- **Invalid hash**: URL `/glosarium#nonexistent` — no matching element ID, `useEffect` silently ignores, page renders normally
- **No hash**: URL `/glosarium` — no hash, `useEffect` returns early, no scroll behavior
- **Hash with special characters**: Slug like `anomali-gravitasi` with hyphens — valid HTML id, no issues
- **Single term**: Only one entry in glossary — sidebar shows one item, content has one section, no divide border needed
- **Many terms (20+)**: Sidebar should scroll (`overflow-y-auto`), main content should paginate naturally
- **Mobile viewport**: Sidebar stacks above content, sticky positioning disabled, full-width layout
- **Browser back/forward**: `hashchange` event fires via `useLocation`, `useEffect` re-runs, scroll happens
- **External link missing**: Some entries without `externalLink` — no link rendered, no layout shift

---

## VALIDATION COMMANDS

Execute every command to ensure zero regressions and 100% feature correctness.

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
2. Navigate to `http://localhost:5173/glosarium` — page renders with heading, description, sidebar, and term sections
3. Click a term in the sidebar — page scrolls to that term, URL hash updates to `#slug`, sidebar item highlights
4. Navigate to `http://localhost:5173/glosarium#magnetik` — page loads and auto-scrolls to the "Magnetik" entry
5. Navigate to `http://localhost:5173/glosarium#nonexistent` — page loads normally, no error, no scroll
6. Click an external link — opens in new tab
7. Resize browser to <1024px — sidebar moves above content, sticky positioning disengaged
8. Test browser back/forward buttons — hash changes trigger correct scroll behavior

---

## ACCEPTANCE CRITERIA

- [ ] `GlossaryEntry` interface added to types/index.ts
- [ ] `glossary.json` created with 10+ geophysical/volcanology terms in Indonesian
- [ ] `GlossaryPage` component renders at `/glosarium` with sidebar outline + term content
- [ ] Sidebar uses native `<a href="#slug">` links (not custom JS scroll)
- [ ] Sidebar items are clickable, scroll to term, and highlight when active
- [ ] Term sections have `id={slug}` for direct anchor access
- [ ] URL hash (`/glosarium#[slug]`) auto-scrolls on page load
- [ ] External links render with icon and open in new tab when present
- [ ] Empty glossary state displays appropriate message
- [ ] Invalid hash silently ignored (no error)
- [ ] Mobile responsive: sidebar stacks above content below `lg` breakpoint
- [ ] Empty `<Route path="glosarium">` in App.tsx replaced with lazy-loaded GlossaryPage
- [ ] `npm run build` completes with zero errors
- [ ] `npm run lint` passes with zero warnings
- [ ] TypeScript type checking passes with zero errors

---

## COMPLETION CHECKLIST

- [ ] All 5 tasks completed in order
- [ ] Each task validation passed immediately
- [ ] `npm run build` succeeds
- [ ] `npm run lint` passes
- [ ] `npx tsc --noEmit` passes
- [ ] Dev server renders glossary page correctly
- [ ] Sidebar navigation works end-to-end
- [ ] Hash-based URL navigation works
- [ ] Mobile responsive layout verified
- [ ] All acceptance criteria met

---

## NOTES

**Design Decisions:**
- Sidebar uses sticky positioning with `top-24` to clear the navbar height (h-16 = 4rem + some padding)
- Term sections use `scroll-mt-24` to prevent the sticky navbar from overlapping the scrolled-to anchor
- Sidebar items use native `<a href="#slug">` instead of `<button>` + JS scroll — the browser handles native hash scrolling, no custom logic needed
- A small inline `useEffect` on mount handles the SPA edge case where React Router intercepts the initial hash before the browser can process it (e.g., navigating from another page to `/glosarium#magnetik`)
- IntersectionObserver tracks which term is in view to update the active sidebar highlight — this is more robust than scroll event listeners
- The glossary data is in a standalone JSON file rather than embedded in a .tsx file for future extensibility — terms could be loaded dynamically from an API later

**Trade-offs:**
- IntersectionObserver with querySelectorAll is slightly impure but necessary for scroll-based active state. An alternative would be a scroll event listener with `getBoundingClientRect()`, but IntersectionObserver is more performant.
- No custom hook was created — the hash scroll logic is a simple 8-line `useEffect` inline. A separate hook would only add value if hash scroll was needed across multiple pages, which it isn't.
- The `useEffect` only runs on mount, not on every hash change — for a glossary where each term is a static anchor within the same page, mount-time handling is sufficient. Subsequent `<a href="#slug">` clicks are handled natively by the browser.

**Future Enhancements:**
- Search/filter functionality for terms
- Categorization of terms (e.g., "Metode Geofisika", "Fenomena Vulkanik")
- Backend API endpoint for glossary terms
- Internationalization (EN/ID toggle)
