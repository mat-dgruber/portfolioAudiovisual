# Taste Profile: Cinematic Portfolio Website

## Existing Design System
No existing system — building taste from scratch based on "Cinematic Teal" and Apple-inspired glassmorphism.

## Emotional Target
"Quiet Authority" — Minimalist, precise, and premium. It should feel like a high-end digital color-grading suite: immersive and focused.

## Aesthetic Principles

1. **Liquid Glassmorphism** — Borrowing from Apple's "liquid glass" aesthetic. Background blurs should be soft and organic, using semi-transparent borders (1px at low opacity) rather than heavy glows.
   _Test: Does the card feel like it's part of the background, or is it "hovering" with a distracting glow?_

2. **Functional Color Only** — Cinematic Teal is for focus and action. Every other element is monochromatic (Black/Grey/White).
   _Test: If I remove the teal, does the hierarchy still make sense?_

3. **Technical Precision** — Alignment and spacing must be pixel-perfect. Typography should be clean and authoritative.
   _Test: Are the margins and gutters consistent across all responsive breakpoints?_

## Quality Level
**Flagship** — Every pixel is intentional. Micro-interactions (via Anime.js) must be polished and fluid.

## References
| Reference | What to borrow | What to avoid |
|-----------|---------------|---------------|
| Apple | Liquid glass effects, minimalist spacing, "premium" feel. | Overly locked-down ecosystem vibes. |

## Anti-References
| Anti-reference | What makes it wrong for us |
|----------------|---------------------------|
| Neon/Glow slop | Too much glow and "purpose-less" colors distract from the cinematic content. |
| Corporate SaaS | Feels too rigid and cold; lacks the "artistic" depth of a portfolio. |

## Craft Standards
- **Shadows:** Soft, large-radius ambient shadows; no sharp hard shadows.
- **Borders:** 1px width, 10-15% opacity white/teal to define edges on dark backgrounds.
- **Radius:** Pill-shaped for the header; soft rounded corners (12px-16px) for cards.
- **Color usage:** 95% Neutral (Deep Blacks/Dark Greys), 5% Cinematic Teal.
- **Typography:** Clean Sans-serif (targeting Inter or similar) with deliberate tracking.
- **Animation:** Fluid, staggered "film edit" style via Anime.js.

## Personality
If this site were a person, they would wear a tailored black linen suit—minimalist, high-quality, and commanding respect without raising their voice.
