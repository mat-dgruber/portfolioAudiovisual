# Design State: Cinematic Portfolio Website

_Last updated: 2026-05-05 by Gemini CLI_

## Brief

- **Problem:** Audiovisual professionals need an immersive platform to showcase technical precision and artistic quality to high-ticket leads.
- **Primary persona:** Creative Directors & Producers (seeking technical precision and "Quiet Authority").
- **Success metric:** High-impact engagement with the showreel and successful "Work with me" inquiries.
- **Brief document:** [docs/designpowers/briefs/2026-05-05-cinematic-portfolio.md](docs/designpowers/briefs/2026-05-05-cinematic-portfolio.md)

## Personas

- **Creative Directors & Producers** — Seekers of specific technical aesthetics and reliable high-end collaborators.
- **Brand Managers** — Looking for a reliable partner to execute a commercial vision.
- **Inclusive Spectrum** — Users with visual, motor, or cognitive impairments needing accessible, performant UI.

## Design Principles

1. **Motion as a Narrative Tool** — Animations mirror fluid film edits; purposeful Anime.js transitions.
2. **The Dark Room Aesthetic** — Deep black background with Glassmorphic overlays to support the image.
3. **Invisible Navigation (Quiet Authority)** — Pill-shaped floating header appears only when needed.
4. **Technical Transparency** — Showcasing gear and roles to establish technical authority.

## Taste Profile

- **Emotional target:** Quiet authority, precision, liquid immersion.
- **Quality level:** Flagship.
- **Key references:** Apple (liquid glass, minimalist spacing).
- **Aesthetic principles:** Liquid glassmorphism, functional color only (Teal), technical precision.
- **Taste document:** [docs/designpowers/taste/2026-05-05-cinematic-portfolio-taste.md](docs/designpowers/taste/2026-05-05-cinematic-portfolio-taste.md)

## Decisions Log

| Date       | Agent             | Decision                          | Rationale                                                           |
| ---------- | ----------------- | --------------------------------- | ------------------------------------------------------------------- |
| 2026-05-05 | user              | Pill-shaped floating header       | Enhances cinematic focus by appearing/disappearing on scroll.       |
| 2026-05-05 | design-discovery  | Angular 21+ & Anime.js Stack      | Ensures high-performance, fluid cinematic animations.               |
| 2026-05-05 | design-strategist | "Technical Specs" panel in modals | Establishes authority with CD/Producers by showing process.         |
| 2026-05-05 | design-taste      | Liquid Glassmorphism              | Apple-inspired soft blurs and low-opacity borders for premium feel. |

## Open Questions

- [ ] Which specific Anime.js easing should be the "signature" for the site? (Pending design-lead)
- [ ] Specific content for the "Equipment List" to ensure staggered animation quality.

## Artefact Index

| Artefact      | Path                                                                  | Status           |
| ------------- | --------------------------------------------------------------------- | ---------------- |
| Brief         | docs/designpowers/briefs/2026-05-05-cinematic-portfolio.md            | Approved         |
| Strategy      | docs/designpowers/strategy/2026-05-05-cinematic-portfolio-strategy.md | Approved         |
| Taste Profile | docs/designpowers/taste/2026-05-05-cinematic-portfolio-taste.md       | Complete         |
| Design Plan   | docs/designpowers/plans/2026-05-05-foundation-plan.md                 | Pending Approval |
| Architecture  | docs/ARCHITECTURE.md                                                  | Exists           |
| Roadmap       | docs/PLAN.md                                                          | Exists           |

## Handoff Chain

### 2026-05-05 Gemini CLI → design-strategist

> "Brief approved. We're building a 'Quiet Authority' portfolio. The user specifically wants a pill-shaped header that scrolls in and out. The stack is strictly Angular 21 and Anime.js. Over to you to define the user journey and interaction strategy."

### 2026-05-05 design-strategist → design-lead

> "Strategy locked. We're leaning into the 'Dark Room' aesthetic. The UI should be invisible until it's needed. We need a 'Technical Specs' panel in every modal to prove technical authority. Motion must feel like a film edit—staggered and smooth. Over to you for the visual system and layout."

### 2026-05-05 design-taste → design-lead

> "Taste calibrated. Think Apple 'liquid glass'—soft, organic blurs and thin, high-contrast borders. No neon glows or unnecessary colors. Cinematic Teal is for purpose only. This needs to feel expensive, precise, and quiet."

### 2026-05-05 design-lead → design-builder

> "Visual foundation planned. We're starting with the design tokens (Cinematic Teal/Deep Black) and the scroll-aware pill header. The motion signature is fluid and staggered—no bounce. Accessibility is priority #1, starting with AA contrast and reduced-motion support."
