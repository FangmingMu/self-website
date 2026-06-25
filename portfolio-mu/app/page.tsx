"use client"

import GlowCursor from "../components/glow-cursor"
import Hero from "../sections/hero"
import About from "../sections/about"
import TechUniverse from "../sections/tech-universe"
import Projects from "../sections/projects"
import Experience from "../sections/experience"
import Research from "../sections/research"
import Journey from "../sections/journey"
import Contact from "../sections/contact"

export default function Home() {
  return (
    <div className="relative h-screen bg-black overflow-hidden select-none">
      {/* Dynamic Spring Glow Cursor */}
      <GlowCursor />

      {/* Structured Sections */}
      <main className="w-full h-full overflow-y-auto scroll-smooth">
        <Hero />
        <About />
        <TechUniverse />
        <Projects />
        <Experience />
        <Research />
        <Journey />
        <Contact />
      </main>
    </div>
  )
}
