ARCHITECTURE.md — Cinematic Portfolio Website

1. Tech Stack
   Frontend:

Angular 21+: Utilized for its robust component architecture, signals for state management (modal/filters), and standalone components for better performance.
Tailwind CSS 3.4.17: Used for the "Cinematic Teal" branding, glassmorphism effects, and mobile-first responsive layout.
TypeScript: Strict mode enabled to ensure type safety for project data structures.
PrimeNG 21+: Used sparingly for complex components like the Modal/Dialog and potentially the Carousel for testimonials.
Anime.js: The primary engine for cinematic transitions, scroll-triggered reveals, and smooth UI interactions.

Backend:
None / Serverless. The contact form directly connects to Formspree, enabling a fully static deployment with zero maintenance cost.

2. Folder Structure
   text/frontend
   ├── src/
   │ ├── app/
   │ │ ├── core/
   │ │ │ ├── services/ # ContactService, ProjectService (handles data)
   │ │ │ └── models/ # Project, Category, ContactRequest interfaces
   │ │ ├── features/
   │ │ │ ├── home/ # Main landing page logic
   │ │ │ │ ├── components/ # Hero, Gallery, About, Services, Contact
   │ │ │ │ └── home.component.ts
   │ │ │ └── project-modal/ # Dedicated logic for the full-screen video player
   │ │ ├── shared/
   │ │ │ ├── components/ # GlassCard, FloatingCTA, ProjectThumbnail
   │ │ │ └── animations/ # Anime.js helper functions and wrappers
   │ │ ├── layout/
   │ │ │ ├── header/ # Glassmorphic nav with Cinematic Teal accents
   │ │ │ └── footer/ # Minimalist footer with social links
   │ │ ├── app.component.ts # Root component
   │ │ ├── app.config.ts # App configuration
   │ │ └── app.routes.ts # Route definitions
   │ │ └── assets/
   │ │ ├── videos/ # Local showreel loops
   │ │ └── images/ # Professional portraits and logos
   │ ├── styles.css # Global styles + Tailwind @theme (Teal tokens)
   │ └── index.html # Entry HTML
   ├── tailwind.config.js # Brand tokens (Cinematic Teal, Dark Mode colors)
   └── angular.json

3. Data Flow

Project Browsing: ProjectService loads a JSON array of project objects →\rightarrow
→ HomeComponent filters via signals →\rightarrow
→ Gallery renders thumbnails.
Modal Trigger: Click on thumbnail →\rightarrow
→ updates activeProject signal →\rightarrow
→ ProjectModal opens and loads the specific Vimeo/YouTube embed.
Form Submission: Frontend ContactForm →\rightarrow
→ ContactService →\rightarrow
→ Formspree Serverless API →\rightarrow
→ Email Delivery →\rightarrow
→ Success response to UI.

4. Component Map
   ComponentLocationResponsibilityHeroComponentfeatures/home/componentsFull-screen video loop, headline, and showreel CTAProjectGalleryfeatures/home/componentsFilterable grid of video thumbnails with hover statesProjectModalfeatures/project-modalFull-screen video player and technical project specsAboutSectionfeatures/home/componentsBio, photo, and the equipment listFloatingCTAshared/componentsPersistent "Work with me" buttonContactFormfeatures/home/componentsLead capture with validation
5. Environment Variables

formspreeUrl: URL for Formspree API (configured in environment.prod.ts)

6. Deployment

Frontend: Vercel or Netlify (Edge network for fast asset delivery).
CI/CD: GitHub Actions for automated testing and deployment.
