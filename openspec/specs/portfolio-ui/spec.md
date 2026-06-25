# Portfolio UI Specification

## Purpose

This specification defines the user interface requirements and technical layout for the AI Engineer Personal Brand Website of Fangming Mu.

## Requirements

### Requirement: Global Layout and Styling Framework
The system SHALL be implemented as a responsive, single-page application using Next.js App Router, TypeScript, TailwindCSS, Framer Motion, and Shadcn UI with a dark-only color palette.

#### Scenario: Responsive dark mode rendering
- **WHEN** the user opens the portfolio website on any screen width (mobile, tablet, or desktop)
- **THEN** the layout is responsive, dark-mode is active, and fonts/layout render without breakages.

### Requirement: Section 1 - Hero Section with Background and Cursor
The website SHALL include a Hero Section as the landing view, showing a typing title animation, static slogan, scroll guide, an interactive light-weight canvas particle background, and a mouse-following glow indicator.

#### Scenario: Hero interactive animations
- **WHEN** the landing page loads and the user moves their mouse over the screen
- **THEN** the Title plays a typewriter effect looping 'AI Engineer', 'Agent Developer', and 'AIGC Engineer', a custom particle background moves slightly, and a subtle glowing light follows the cursor position.

### Requirement: Section 2 - About Me Section
The website SHALL include an About Me section with a split layout displaying educational milestones on a timeline and a set of stats cards with numerical counter animations.

#### Scenario: Viewing about me statistics
- **WHEN** the user scrolls down to the About Me section
- **THEN** the timeline shows educational milestones (Huanghe Science and Technology University, Shanghai Polytechnic University) and the stats cards play count-up animations for 'Years Coding' (5+), 'Projects Deployed' (10+), 'Papers/Research' (1+), and 'AI Tokens Processed' (100M+).

### Requirement: Section 3 - Interactive Tech Universe
The website SHALL include a Tech Universe section representing skills classified by categories in a 3D-floating galaxy layout, with laser lines connecting nodes of the same category when hovered.

#### Scenario: Hovering tech universe nodes
- **WHEN** the user hovers over a technology node (e.g. LangGraph)
- **THEN** the node glows and animated laser lines appear connecting it to other nodes in the same category (AI Engineering, Backend, Frontend, Models, Deep Learning).

### Requirement: Section 4 - Featured Projects Catalog
The website SHALL include a Featured Projects section displaying cards that tilt in 3D response to hover, and click triggers that open a drawer or modal displaying detail descriptions, architecture charts, and technical stacks.

#### Scenario: Opening project details
- **WHEN** the user clicks on a featured project card (e.g. Enterprise IT Agent)
- **THEN** a responsive modal or slide-over drawer opens showing detailed architecture diagrams, highlights, and exact technology stacks.

### Requirement: Section 5 - Work Experience Workflow
The website SHALL include a Work Experience section showcasing the AI Application Developer Intern role at Yovole Network, featuring a sequential step animation representing the Spec-Driven Development cycle.

#### Scenario: Playing experience flowchart animation
- **WHEN** the Work Experience section enters the viewport
- **THEN** a visual flowchart represents the progression from requirements to deployment, with nodes lighting up sequentially.

### Requirement: Section 6 - Research & Publications Dashboard
The website SHALL include a Research & Publications section designed as an academic card with key metrics (Rank-1 Accuracy: 93.29%, mAP: 81.75%) and descriptions of the Person ReID research paper.

#### Scenario: Displaying research metrics
- **WHEN** the user views the Research & Publications section
- **THEN** the key metrics and paper title are displayed clearly in a clean scientific dashboard style.

### Requirement: Section 7 - Scroll-driven AI Journey
The website SHALL include an AI Journey section featuring a timeline that grows downward as the user scrolls, revealing year-by-year milestones.

#### Scenario: Scrolling through the journey timeline
- **WHEN** the user scrolls down through the AI Journey section
- **THEN** the vertical timeline line extends downwards and milestones fade/slide in sequentially from year 2020 to 2026.

### Requirement: Section 8 - GitHub Dashboard Integration
The website SHALL include a GitHub Dashboard section showing a simulated/real green contribution matrix, total repo/star counts, and a radar chart depicting technology distribution.

#### Scenario: Hovering github matrix elements
- **WHEN** the user hovers over cells in the contribution matrix or radar chart nodes
- **THEN** the cells display tooltips, and the radar chart segments glow to show percentage distribution.

### Requirement: Section 9 - Contact Form with Glowing Border
The website SHALL include a Contact Me section displaying contact channels (Email, GitHub, LinkedIn, Location) and a form featuring a flow-glow border that supports state transition from sending to success upon submission.

#### Scenario: Submitting contact form
- **WHEN** the user inputs valid data into the contact form and clicks the submit button
- **THEN** the form visual border animates, the button transitions to a 'Sending' state, and eventually changes to a 'Success' message once complete.
