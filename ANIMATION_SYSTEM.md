# Cinematic motion system

Reference mood: https://www.cinecasero.uy/ — inspiration for pacing and storytelling only. Do not copy its branding, layouts or assets.

## Principles
- Motion supports the content and never delays booking or navigation.
- Prefer Framer Motion and CSS; introduce GSAP/ScrollTrigger only for a genuinely complex pinned sequence.
- Use IntersectionObserver or viewport-triggered variants for simple reveals.
- Provide reduced-motion alternatives and avoid large parallax on mobile.
- Avoid layout shifts; animate transform and opacity where practical.

## Planned reusable components
- `Reveal`: viewport-based entrance.
- `TextReveal`: accessible text reveal; retain readable DOM text.
- `ParallaxImage`: restrained image movement.
- `ScrollProgress`: subtle page progress.
- `HorizontalGallery`: desktop editorial rail with touch-friendly mobile fallback.
- `MagneticButton`: optional pointer enhancement; standard click remains reliable.
- `PageTransition`: restrained route transition.

## Interaction checklist
Test rapid/reverse scroll, route navigation, keyboard focus, touch input, low-end mobile, slow network and `prefers-reduced-motion`. Do not claim a frame rate or performance score without measurement.
