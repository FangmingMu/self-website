## 1. Setup and Project Initialization

- [x] 1.1 Initialize Next.js project using latest App Router and TypeScript
- [x] 1.2 Install required dependencies (framer-motion, lucide-react, clsx, tailwind-merge)
- [x] 1.3 Configure global Tailwind styling, custom theme variables, and glow border utilities in tailwind.config.js and globals.css
- [x] 1.4 Setup base project structure (app, components, sections, data, hooks, lib directories)
- [x] 1.5 Scaffold dummy components for each section (Hero, About, TechUniverse, Projects, Experience, Research, Journey, GitHub, Contact, Footer) to confirm correct page aggregation

## 2. Data Definition and Core Layout

- [x] 2.1 Define data/portfolioData.ts with detailed project records, education timeline, skills, work experience details, and research papers
- [x] 2.2 Create GlowCursor component to handle mouse tracking and soft radial-gradient rendering
- [x] 2.3 Set up app/layout.tsx with global viewport settings, SEO metadata, and import Outfit/Inter google font

## 3. Section Component Implementations

- [x] 3.1 Implement Hero section featuring a typewriter titles transition, floating particles on HTML5 Canvas, and navigation scroll down indicators
- [x] 3.2 Implement About Me section showcasing timeline of education, and numeric stats cards with frame-based count-up animation
- [x] 3.3 Implement Tech Universe section containing floating technology nodes and dynamic SVG line drawings for connections upon hover
- [x] 3.4 Implement Featured Projects section featuring 3D tilt tilt cards, Lucide stack tags, and click action opening details inside a modal or drawer
- [x] 3.5 Implement Work Experience section showcasing the AI developer intern role and the step-by-step flowchart highlighting Spec-Driven Development cycle
- [x] 3.6 Implement Research section presenting academic metrics (Rank-1, mAP) and pedestrian re-identification research highlights
- [x] 3.7 Implement AI Journey section featuring scroll-linked growing timeline and reveal animations
- [x] 3.8 Implement GitHub Dashboard displaying contribution grids, star count metadata, and a custom SVG Radar Chart showing language share percentages
- [x] 3.9 Implement Contact Me section showcasing channels list, form input fields, custom border animations, and state triggers for sending and success
- [x] 3.10 Implement Footer containing brand copyright, built statements, and links

## 4. Verification and Polish

- [x] 4.1 Perform interactive checks across all sections for smooth transitions and mouse hover effects
- [x] 4.2 Verify responsiveness on mobile, tablet, and desktop viewports
- [x] 4.3 Validate that canvas particle updates pause when out of browser viewport (using IntersectionObserver)
- [x] 4.4 Run local production build to check for compilation or linting errors
