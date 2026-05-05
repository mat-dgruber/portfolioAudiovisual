AI_RULES.md — Cinematic Portfolio Website
⚠️ Purpose
This document defines the non-negotiable rules for any AI assistant working on this codebase. The goal is to maintain a high-end "cinematic" feel, ensuring that performance and aesthetics are never compromised.
🔴 ABSOLUTE RULES (Never Break These)
Stack (NON-NEGOTIABLE)

Frontend: Always Angular 21+ (Standalone). No React/Vue.
Styling: Always Tailwind CSS 3.4.17. Use the defined Cinematic Teal tokens.
Animations: Use Anime.js for all complex transitions. Do not use heavy CSS animation libraries or jQuery.
Components: Use PrimeNG 21+ only for the Modal/Dialog. All other cards and buttons must be custom-built to ensure the "Glassmorphism" aesthetic.
Backend: Python 3.14+ with FastAPI and uv.

Angular Code Quality

Signals First: Use signal(), computed(), and effect() for all state (e.g., current filter, active project in modal).
New Control Flow: Only use @if, @for, and @switch.
Strict Typing: No any. Every project and category must have a defined interface.
Logic Separation: Components handle UI; core/services/ handle data fetching and form submission.

Cinematic Design & UX

Color Palette: Strictly adhere to Dark Mode. Primary accent is Cinematic Teal.
Glassmorphism: Use backdrop-blur and semi-transparent borders for all cards and menus.
Contrast: Maintain WCAG AA standards while keeping the "dark room" cinematic atmosphere.
Mobile-First: The gallery grid must be perfectly responsive (1 col mobile →\rightarrow
→ 3+ col desktop).
Conversion: The "Work with me" floating button must be visible and accessible on all pages.

Animation Behavior

Anime.js: Implement "Stagger" effects for the project grid and the equipment list.
Transitions: All modals must fade and scale smoothly using Anime.js.
Performance: Use requestAnimationFrame or Anime.js's internal timing to prevent layout thrashing during scroll animations.

🟡 STRONG PREFERENCES

Use input() and output() signals for component communication.
Keep components lean (<150 lines).
Use OnPush change detection strategy for the gallery to optimize render performance.
Ensure all images are WebP and videos are optimized/lazy-loaded.

✅ REQUIRED BEHAVIOR

Before implementing an animation, describe the "easing" and "duration" to match the cinematic feel.
After any UI change, verify that the "Cinematic Teal" accent is used correctly.
Always refer to PLAN.md before starting a new step.
