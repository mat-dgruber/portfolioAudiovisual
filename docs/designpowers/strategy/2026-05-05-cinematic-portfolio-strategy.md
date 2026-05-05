# Design Strategy: Cinematic Portfolio Website

## Design Principles

### 1. Motion as a Narrative Tool
**The principle:** Animations are never decorative; they mirror the fluid transitions of a high-end film edit.
**What this means in practice:** Use Anime.js for staggering reveals and smooth modal transitions. Every movement should have a purpose, guiding the eye to the next piece of content.
**What this means we will NOT do:** We will not use "bouncy" or generic UI animations that break the cinematic immersion.

### 2. The Dark Room Aesthetic
**The principle:** The UI exists only to support the image. 
**What this means in practice:** Deep black backgrounds, Glassmorphic overlays (backdrop-blur), and Cinematic Teal accents. The interface should feel like a premium monitor in a color-grading suite.
**What this means we will NOT do:** We will not use high-key backgrounds, cluttered borders, or bright colors that distract from the video content.

### 3. Invisible Navigation (Quiet Authority)
**The principle:** Navigation should be available but non-intrusive.
**What this means in practice:** The pill-shaped floating header appears only when the user needs it (on scroll) and centers itself to stay balanced. 
**What this means we will NOT do:** We will not have a persistent, chunky top-bar that eats vertical screen real estate.

### 4. Technical Transparency
**The principle:** Showcase not just the "what" but the "how."
**What this means in practice:** Every project modal includes a dedicated "Technical Specs" panel (gear, role, year). This establishes authority with producers and creative directors.
**What this means we will NOT do:** We will not hide the process or technical details behind generic descriptions.

## Experience Map

| Stage | Action | Emotional State | Inclusive Design |
|-------|--------|-----------------|------------------|
| **Entry** | Lands on Hero | Impressed, intrigued | Muted video loop (vestibular safety), high-contrast headline. |
| **Discovery** | Scrolls Gallery | Curiously scanning | Keyboard-navigable grid, aria-labels for category filters. |
| **Engagement** | Opens Project Modal | Focused, expectant | Screen reader announcements for modal open, focus trap inside modal. |
| **Authority Check** | Reads Technical Specs | Respected, informed | Legible typography (WCAG AA), screen reader accessible data tables. |
| **Conversion** | Clicks "Work with me" | Motivated, professional | Clear focus states on form fields, descriptive error messages. |

## Success Metrics

| Metric | What It Measures | Target | How to Measure |
|--------|-----------------|--------|---------------|
| Showreel Completion | Engagement quality | >70% completion | Video player events (Vimeo/YouTube API) |
| Conversion Rate | Lead generation | 2-5% of visitors | Contact form submissions / Total sessions |
| Accessibility Compliance | Inclusive quality | WCAG 2.2 Level AA | Automated (Lighthouse/Axe) + Manual audit |
| Performance Score | Technical precision | 90+ on Lighthouse | Web Vitals / Performance tab |

## Constraints and Trade-offs
We are optimizing for **High-Resolution Desktop** and **High-End Mobile** users (Producers/Directors). We will prioritize high-quality WebP assets and Anime.js complexity over support for legacy browsers or ultra-low-bandwidth connections.
