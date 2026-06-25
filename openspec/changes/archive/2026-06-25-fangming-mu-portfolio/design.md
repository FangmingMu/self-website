## Context

Mu Fangming needs an interactive, premium personal brand website. It should be built from scratch, emphasizing performance, responsive design, visual excellence, and modern frontend techniques.

## Goals / Non-Goals

**Goals:**
- Implement a single-page portfolio with 10 sections.
- Deliver an outstanding visual appearance: custom animations, high-fidelity interactivity, sleek dark mode aesthetics.
- Responsive design from mobile (320px) up to ultra-wide screens.
- Clean component structure and easy-to-maintain TypeScript codebase.

**Non-Goals:**
- Building a full CMS (content management system) for editing data (portfolio will use `data/portfolioData.ts`).
- Complex backend server management (all dynamic data is either fetched clientside or static-rendered).

## Decisions

### 1. Framework: Next.js (App Router) with TypeScript
- **Rationale**: Meets the requirements of a modern React environment, App Router provides clean routing and server components, and TypeScript ensures strict typing for safety and long-term maintenance.

### 2. Styling and Theme: TailwindCSS + CSS variables
- **Rationale**: Simple styling integration, easy configuration of custom animations (like typing, flows, glows), and clean layout control. Customized via `tailwind.config.js` to support glowing effects, dark background palettes, and futuristic visual accents.

### 3. Component Architecture & Custom Components
- **Glow Cursor**: Framer Motion or React state hooks listening to `window.mousemove` to render a blur radial-gradient div.
- **Tech Universe Map**: React/SVG component. Nodes are positioned within an relative container. Hovering a node maps its group coordinates and draws dynamic `<svg>` lines with gradient strokes between the hovered node and other nodes of the same group.
- **GitHub radar**: A custom inline SVG Radar chart component utilizing pure trigonometry to draw points and paths. This eliminates additional heavy charting libraries and guarantees seamless customization.
- **Canvas Particles**: An HTML5 Canvas component in the Hero section. It runs a lightweight physics loop drawing floating dots connected by faint lines if they are close, and interacting slightly with cursor coordinates.
- **Scroll Journey & Workflow Timeline**: Uses Framer Motion's `useScroll` and `useTransform` to tie element opacity and line heights to scroll percentages.

## Risks / Trade-offs

- **[Performance & Load Times]** → Heavy canvas animation and Framer Motion could impact Lighthouse scores.
  - *Mitigation*: Run the Canvas update loop with `requestAnimationFrame`. Pause the canvas rendering loop when the Hero section is out of the viewport (using `IntersectionObserver`). Keep dependencies minimal.
- **[Safari / iOS Compatibility]** → Glassmorphism and mix-blend-mode for glowing cursors can lag or render incorrectly on Safari.
  - *Mitigation*: Use standard CSS fallbacks, avoid excessive `backdrop-filter: blur` overlays, and check cross-browser styles.
