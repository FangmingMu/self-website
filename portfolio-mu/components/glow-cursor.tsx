"use client"

import { useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function GlowCursor() {
  const mouseX = useMotionValue(-175)
  const mouseY = useMotionValue(-175)

  const springConfig = { damping: 35, stiffness: 250, mass: 0.6 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Offset by half of cursor size (350px)
      mouseX.set(e.clientX - 175)
      mouseY.set(e.clientY - 175)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <motion.div
      style={{
        x,
        y,
      }}
      className="hidden md:block fixed top-0 left-0 w-[350px] h-[350px] rounded-full bg-gradient-to-r from-blue-500/18 via-purple-500/15 to-pink-500/12 blur-[100px] pointer-events-none z-50 mix-blend-screen"
    />
  )
}
