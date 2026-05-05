# Design Plan: Cinematic Portfolio Foundation

> **For agentic workers:** REQUIRED: Use designpowers:designpowers-critique to review completed work against this plan.

**Goal:** Establish the high-end "Quiet Authority" visual system and core layout structure in Angular 21 with Tailwind and Anime.js.

**Design Direction:** [docs/designpowers/strategy/2026-05-05-cinematic-portfolio-strategy.md](docs/designpowers/strategy/2026-05-05-cinematic-portfolio-strategy.md)

**Personas:** [Creative Directors & Producers, Brand Managers, Inclusive Spectrum]

---

## Task 1: Design System Foundation (Tailwind & Tokens)
**Files:** `tailwind.config.js`, `src/styles.css`

- [ ] Step 1: Define "Cinematic Teal" and "Deep Black" color tokens.
- [ ] Step 2: Configure "Liquid Glass" utility classes (backdrop-blur + semi-transparent borders).
- [ ] Step 3: Set up typography scale (Inter/Sans-serif) with specific tracking for "Quiet Authority."

**Accessibility check:** Verify Cinematic Teal on Deep Black meets WCAG 2.2 AA contrast (4.5:1 for text).

**Verification:** Run `npx tailwindcss build` and check for token availability in a test component.

---

## Task 2: Pill-Shaped Scroll Header (Structure & Motion)
**Files:** `src/app/layout/header/header.component.*`, `src/app/shared/animations/scroll.animations.ts`

- [ ] Step 1: Build the standalone pill-shaped header component with glassmorphism.
- [ ] Step 2: Implement Anime.js "signature easing" for entrance/exit animations.
- [ ] Step 3: Wire scroll listeners (using Angular Signals) to trigger visibility.

**Accessibility check:** Header must be keyboard-accessible (Tab order) even when "hidden" visually (use `aria-hidden` or `visibility: hidden` carefully).

**Verification:** Scroll the page and confirm the header appears/disappears with a fluid, non-bouncy transition.

---

## Task 3: Cinematic Hero & Grid Layout
**Files:** `src/app/features/home/components/hero/hero.component.ts`, `src/app/features/home/home.component.html`

- [ ] Step 1: Implement full-screen video background with "Quiet Authority" headline.
- [ ] Step 2: Define the responsive grid (1 col mobile → 3 col desktop) for the gallery.
- [ ] Step 3: Create the `GlassCard` wrapper for project thumbnails.

**Accessibility check:** Video must be muted by default; headline must be <h1>. Ensure grid has proper `role="list"` and `role="listitem"`.

**Verification:** Test responsiveness from 320px to 2560px.

---

## Task 4: Staggered Gallery Interaction
**Files:** `src/app/features/home/components/gallery/gallery.component.ts`, `src/app/shared/animations/gallery.animations.ts`

- [ ] Step 1: Use Anime.js to implement a staggered entrance for the project grid.
- [ ] Step 2: Add "Scale + Liquid Overlay" hover effects to `GlassCard`.
- [ ] Step 3: Implement Signal-based filtering (e.g., Commercials vs. Music Videos).

**Accessibility check:** Ensure staggered animations honor `prefers-reduced-motion`. Confirm filter buttons have descriptive `aria-label`.

**Verification:** Switch filters and confirm the grid re-staggers smoothly.
