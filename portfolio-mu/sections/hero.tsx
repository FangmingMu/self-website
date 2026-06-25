"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { portfolioData } from "../data/portfolioData"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [typedText, setTypedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const { titles, slogan, subtitle } = portfolioData.personalInfo

  const nameLetters = portfolioData.personalInfo.englishName.split("")

  // Typing effect
  useEffect(() => {
    let timer: NodeJS.Timeout
    const targetText = titles[currentTitleIndex]
    const typingSpeed = isDeleting ? 40 : 100

    if (!isDeleting && typedText === targetText) {
      // Pause before deleting
      timer = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false)
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length)
    } else {
      timer = setTimeout(() => {
        setTypedText(
          isDeleting
            ? targetText.substring(0, typedText.length - 1)
            : targetText.substring(0, typedText.length + 1)
        )
      }, typingSpeed)
    }

    return () => clearTimeout(timer)
  }, [typedText, isDeleting, currentTitleIndex, titles])

  // Canvas Particles
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const particles: {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
    }[] = []

    const particleCount = Math.min(120, Math.floor((width * height) / 12000))

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.5,
      })
    }

    const mouse = { x: -1000, y: -1000 }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)

    // IntersectionObserver to pause loop when out of viewport
    let isVisible = true
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting
      },
      { threshold: 0.05 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    const draw = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(draw)
        return
      }

      ctx.clearRect(0, 0, width, height)

      // 1. Draw Nebula background under mouse cursor
      if (mouse.x > -1000 && mouse.y > -1000) {
        const nebulaRadius = 240
        const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, nebulaRadius)
        grad.addColorStop(0, 'rgba(6, 182, 212, 0.22)')
        grad.addColorStop(0.3, 'rgba(168, 85, 247, 0.08)')
        grad.addColorStop(0.7, 'rgba(59, 130, 246, 0.02)')
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)')

        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, nebulaRadius, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.fillStyle = "rgba(255, 255, 255, 0.25)"

      particles.forEach((p, idx) => {
        p.x += p.vx
        p.y += p.vy

        // Bounds collision
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        // Mouse avoidance (soft repulsion) - Larger and stronger
        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const repulseRadius = 180
        if (dist < repulseRadius) {
          const force = (repulseRadius - dist) / repulseRadius
          p.x -= (dx / dist) * force * 1.5
          p.y -= (dy / dist) * force * 1.5
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()

        // Draw connections
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dist2 = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2)
          if (dist2 < 100) {
            const distToMouse1 = Math.sqrt((p.x - mouse.x) ** 2 + (p.y - mouse.y) ** 2)
            const distToMouse2 = Math.sqrt((p2.x - mouse.x) ** 2 + (p2.y - mouse.y) ** 2)
            const minMouseDist = Math.min(distToMouse1, distToMouse2)

            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)

            if (minMouseDist < 180) {
              const proximity = 1 - minMouseDist / 180
              ctx.strokeStyle = `rgba(6, 182, 212, ${0.03 + proximity * 0.28})`
            } else {
              ctx.strokeStyle = "rgba(255, 255, 255, 0.03)"
            }
            ctx.stroke()
          }
        }
      })

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
      observer.disconnect()
    }
  }, [])


  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-black text-center px-4"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Decorative Blur Orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-[100px] pointer-events-none" />

      <div className="z-10 max-w-4xl mx-auto flex flex-col items-center -mt-16 md:-mt-24">
        {/* Name (English only, with letter-by-letter spring hover effect) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onMouseLeave={() => setHoveredIdx(null)}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-white mb-4 cursor-default select-none flex justify-center flex-wrap gap-x-[0.02em]"
        >
          {nameLetters.map((letter, idx) => {
            let y = 0
            let scale = 1
            let color = "#ffffff"
            let textShadow = "none"

            if (hoveredIdx !== null) {
              const dist = Math.abs(idx - hoveredIdx)
              if (dist === 0) {
                y = -18
                scale = 1.2
                color = "#06b6d4"
                textShadow = "0 0 20px rgba(6, 182, 212, 0.9), 0 0 40px rgba(168, 85, 247, 0.5)"
              } else if (dist === 1) {
                y = -11
                scale = 1.12
                color = "#67e8f9"
                textShadow = "0 0 12px rgba(103, 232, 249, 0.65)"
              } else if (dist === 2) {
                y = -6
                scale = 1.06
                color = "#a5f3fc"
                textShadow = "0 0 8px rgba(165, 243, 252, 0.45)"
              } else if (dist === 3) {
                y = -2
                scale = 1.02
                color = "#ecfeff"
                textShadow = "0 0 4px rgba(236, 254, 255, 0.25)"
              }
            }

            return (
              <motion.span
                key={idx}
                animate={{ y, scale, color, textShadow }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                onMouseEnter={() => setHoveredIdx(idx)}
                className="inline-block"
                style={{ display: "inline-block", minWidth: letter === " " ? "0.25em" : "auto" }}
              >
                {letter}
              </motion.span>
            )
          })}
        </motion.h1>

        {/* Dynamic Title (Typewriter) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="h-10 sm:h-12 md:h-16 flex items-center mb-6 text-xl sm:text-3xl md:text-4xl font-mono font-medium text-gradient-cyan-purple"
        >
          <span>{typedText}</span>
          <span className="w-[3px] h-[80%] bg-blue-400 ml-1 animate-pulse" />
        </motion.div>

        {/* Slogan */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg sm:text-2xl italic font-light tracking-wide text-neutral-300 mb-4 max-w-2xl"
        >
          {slogan}
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-sm sm:text-base text-neutral-400 max-w-xl leading-relaxed mb-8 px-4"
        >
          {subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105"
          >
            查看项目 (View Projects)
          </a>
          <a
            href="file:///D:/Daily/AI-project/self-websites/%E4%B8%AA%E4%BA%BA%E7%AE%80%E5%8E%86.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-neutral-800 text-neutral-300 font-medium hover:bg-neutral-900 transition-all duration-300 hover:scale-105 hover:border-neutral-700"
          >
            下载简历 (Resume)
          </a>
          <a
            href="#contact"
            className="text-neutral-400 hover:text-white transition-all text-sm underline underline-offset-4"
          >
            联系我 (Contact)
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
        onClick={() => {
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }}
      >
        <span className="text-xs uppercase tracking-widest text-neutral-500 font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-neutral-500" />
        </motion.div>
      </motion.div>
    </section>
  )
}
