PLAN.md — Cinematic Portfolio Website
Rules

Do ONE step at a time.
Do NOT move to the next step until the current step is marked ✅ DONE.
Each step must be tested for "cinematic feel" (animations and contrast).

Phase 1 — Project Setup

Step 1: Scaffold Angular 21+ project with standalone components and strict TypeScript.
Step 2: Install and configure Tailwind CSS 3.4.17.
Step 3: Install PrimeNG 21+ and Anime.js.
Step 4: Set up folder structure (core/, features/, shared/, layout/).
Step 5: Configure tailwind.config.js with Cinematic Teal and Dark Mode tokens.
Step 6: Initialize FastAPI backend with uv init and verify connectivity.
Step 7: Deploy blank frontend to Vercel.

Phase 2 — Cinematic Layout & Navigation

Step 8: Build Glassmorphic Header with logo, nav links, and "Work with me" shortcut.
Step 9: Build Minimalist Footer with social icons (Vimeo, Instagram, etc.).
Step 10: Implement the "Work with me" Floating Action Button (FAB) with an Anime.js entrance animation.
Step 11: Configure app.routes.ts for the single-page experience.

Phase 3 — High-Impact Homepage Sections

Step 12: Build Hero Section with full-screen muted video loop and "View Showreel" CTA.
Step 13: Create the Project Gallery grid with "Glassmorphism" cards.
Step 14: Implement category filters (Commercials, Music Videos, etc.) using Angular signals.
Step 15: Add Anime.js hover effects to project thumbnails (scale + overlay).
Step 16: Build "About Me" section with a professional portrait and a staggered equipment list.
Step 17: Build Services section with minimalist icons and "Process" description.
Step 18: Create the Client Logos strip and Testimonials carousel.
Step 19: Assemble all sections in home.component.ts with scroll-reveal animations.

Phase 4 — The Video Experience (Modal)

Step 20: Build the ProjectModal component using PrimeNG Dialog as a base.
Step 21: Integrate the video player (Vimeo/YouTube embed) with full-screen capability.
Step 22: Add the "Technical Specs" panel inside the modal (Gear used, Role, Year).
Step 23: Implement the Anime.js "Zoom-in" transition when opening a project.

Phase 5 — Lead Generation & Contact

Step 24: Build the minimalist Contact Form with reactive validation.
Step 25: Create ContactService to handle API requests to the FastAPI backend.
Step 26: Implement the FastAPI /contact endpoint and email notification logic.
Step 27: Wire the "Work with me" FAB to scroll directly to the contact form.
Step 28: Test end-to-end submission and success/error state UI.

Phase 6 — Polish & Performance

Step 29: Optimize all assets (WebP images, lazy-loading video embeds).
Step 30: Add SEO meta tags and LocalBusiness JSON-LD for the professional's name/location.
Step 31: Run a Lighthouse audit (Target: 90+ Performance and Accessibility).
Step 32: Final QA pass on mobile/tablet — ensure the "Cinematic Teal" contrast is perfect.
Step 33: Production deployment and final showreel verification.

✅ PROJECT COMPLETE WHEN: The live site displays a seamless, animated, dark-themed portfolio where a user can watch a showreel in a modal and successfully submit a "Work with me" inquiry.
