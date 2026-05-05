# Design Brief: Cinematic Portfolio Website

## Problem Statement
Audiovisual professionals (DPs & Editors) need a high-end, immersive platform to showcase high-quality work that reflects their technical precision and artistic quality, moving beyond generic portfolios to capture a "cinematic feel" and convert high-ticket leads.

## Users
- **Creative Directors & Producers:** Looking for specific technical aesthetics and reliability.
- **Brand Managers:** Seeking professional partners for commercial execution.
- **Inclusive Spectrum:** Users requiring screen readers (aria-labels for video controls), high contrast for low-vision (Cinematic Teal on Deep Black), and motion-sensitive users (reduced motion options for Anime.js transitions).

## Design Direction
A deep-dark, single-page immersive experience utilizing **Glassmorphism** (backdrop-blur, semi-transparent borders) and **Cinematic Teal** accents. The navigation features a floating, centered pill-shaped header that appears/disappears on scroll to maintain visual focus on the cinematic content.

## Constraints
- **Stack:** Angular 21+, Tailwind CSS 3.4.17, Anime.js, PrimeNG (Dialog only).
- **Performance:** 60fps animations, optimized WebP/lazy-loaded video.
- **Timeline:** Phase-based implementation as per `PLAN.md`.

## Existing Design System
Custom-defined "Cinematic Teal" tokens (referenced in `AI_RULES.md`). No heavy CSS libraries.

## Taste Direction (Early Signal)
- **Feel:** Quiet authority.
- **Aesthetic:** Minimalist, precise, high-end, dark room atmosphere.
- **Key UI:** Pill-shaped floating header, staggered grids, scale/overlay hover effects.

## Success Criteria
- High-impact first impression (low bounce rate).
- Conversion via "Work with me" FAB and Contact Form.
- Successful completion of the "Showreel" modal viewing.

## Out of Scope
- Video hosting (uses embeds).
- E-commerce or blog functionality.
- Social networking features.
