"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { portfolioData } from "../data/portfolioData"

interface PositionNode {
  name: string
  category: string
  level: number
  x: number // percent
  y: number // percent
}

const skillPositions: PositionNode[] = [
  // AI Engineering
  { name: "LangChain", category: "AI Engineering", level: 5, x: 15, y: 25 },
  { name: "LangGraph", category: "AI Engineering", level: 5, x: 25, y: 15 },
  { name: "Hybrid RAG", category: "AI Engineering", level: 5, x: 30, y: 32 },
  { name: "Agentic Workflows", category: "AI Engineering", level: 5, x: 12, y: 38 },
  { name: "Prompt Engineering", category: "AI Engineering", level: 5, x: 23, y: 45 },
  { name: "Ragas", category: "AI Engineering", level: 4, x: 36, y: 22 },

  // Backend
  { name: "Python", category: "Backend", level: 5, x: 50, y: 12 },
  { name: "FastAPI", category: "Backend", level: 5, x: 42, y: 28 },
  { name: "Flask", category: "Backend", level: 4, x: 58, y: 20 },
  { name: "SQLite", category: "Backend", level: 4, x: 48, y: 35 },
  { name: "MySQL", category: "Backend", level: 4, x: 55, y: 32 },

  // Frontend
  { name: "Next.js", category: "Frontend", level: 5, x: 74, y: 22 },
  { name: "TypeScript", category: "Frontend", level: 5, x: 86, y: 15 },
  { name: "TailwindCSS", category: "Frontend", level: 5, x: 80, y: 30 },
  { name: "Vue3", category: "Frontend", level: 4, x: 89, y: 35 },
  { name: "Streamlit", category: "Frontend", level: 5, x: 68, y: 38 },
  { name: "UniApp", category: "Frontend", level: 4, x: 82, y: 46 },

  // AI Models
  { name: "OpenAI", category: "AI Models", level: 5, x: 28, y: 72 },
  { name: "Gemini", category: "AI Models", level: 4, x: 20, y: 80 },
  { name: "GLM-4", category: "AI Models", level: 4, x: 38, y: 82 },
  { name: "Qwen", category: "AI Models", level: 5, x: 32, y: 62 },
  { name: "Codex", category: "AI Models", level: 5, x: 15, y: 68 },
  { name: "Antigravity", category: "AI Models", level: 5, x: 24, y: 60 },
  { name: "Claude Code", category: "AI Models", level: 5, x: 42, y: 70 },

  // Deep Learning
  { name: "PyTorch", category: "Deep Learning", level: 5, x: 65, y: 70 },
  { name: "CNN", category: "Deep Learning", level: 5, x: 58, y: 80 },
  { name: "Transformer", category: "Deep Learning", level: 4, x: 72, y: 78 },
  { name: "Person ReID", category: "Deep Learning", level: 5, x: 68, y: 60 },
]

const categoryColors: Record<string, { base: string; glow: string; text: string }> = {
  "AI Engineering": { base: "#3b82f6", glow: "rgba(59, 130, 246, 0.4)", text: "text-blue-400" },
  Backend: { base: "#10b981", glow: "rgba(16, 185, 129, 0.4)", text: "text-emerald-400" },
  Frontend: { base: "#ec4899", glow: "rgba(236, 72, 153, 0.4)", text: "text-pink-400" },
  "AI Models": { base: "#f59e0b", glow: "rgba(245, 158, 11, 0.4)", text: "text-amber-400" },
  "Deep Learning": { base: "#8b5cf6", glow: "rgba(139, 92, 246, 0.4)", text: "text-violet-400" },
}

export default function TechUniverse() {
  const [hoveredNode, setHoveredNode] = useState<PositionNode | null>(null)

  // Find all links to draw between matching category nodes when hovered
  const getCategoryLines = () => {
    if (!hoveredNode) return []
    const sameCategoryNodes = skillPositions.filter(
      (node) => node.category === hoveredNode.category && node.name !== hoveredNode.name
    )
    return sameCategoryNodes.map((targetNode) => ({
      x1: `${hoveredNode.x}%`,
      y1: `${hoveredNode.y}%`,
      x2: `${targetNode.x}%`,
      y2: `${targetNode.y}%`,
      id: `${hoveredNode.name}-${targetNode.name}`,
    }))
  };

  const activeColor = hoveredNode ? categoryColors[hoveredNode.category] : null

  return (
    <section id="tech-universe" className="relative py-24 px-4 bg-black overflow-hidden">
      {/* Light glow on background */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <div className="mb-16 text-center">
          <h2 className="text-xs uppercase tracking-widest text-neutral-500 font-medium mb-3">Tech Stack</h2>
          <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            技能宇宙星图 / <span className="text-gradient-cyan-purple">Interactive Tech Universe</span>
          </h3>
          <p className="text-neutral-400 text-sm max-w-lg mx-auto">
            鼠标悬停在技能节点上以激活星图共鸣，展示各技术领域内部的核心联动网络。
          </p>
        </div>

        {/* Categories Legend */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-12">
          {Object.entries(categoryColors).map(([category, colors]) => (
            <div key={category} className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: colors.base }} />
              <span className="text-xs sm:text-sm text-neutral-400 font-medium">{category}</span>
            </div>
          ))}
        </div>

        {/* Stars Universe Interactive Box */}
        <div className="relative w-full aspect-[16/10] min-h-[380px] max-h-[600px] rounded-3xl border border-neutral-900 bg-neutral-950/30 overflow-hidden shadow-2xl p-6">
          {/* Dynamic Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

          {/* SVG Lasers Line Canvas */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <defs>
              <linearGradient id="laserGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={activeColor?.base || "#3b82f6"} stopOpacity="0.8" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {hoveredNode &&
              getCategoryLines().map((line) => (
                <motion.line
                  key={line.id}
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke="url(#laserGrad)"
                  strokeWidth="1.5"
                  initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              ))}
          </svg>

          {/* Render Skills Nodes */}
          {skillPositions.map((node) => {
            const colors = categoryColors[node.category]
            const isHovered = hoveredNode?.name === node.name
            const isDimmed = hoveredNode !== null && hoveredNode.category !== node.category

            return (
              <div
                key={node.name}
                style={{
                  position: "absolute",
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                className="z-10 group"
              >
                {/* Visual node particle */}
                <div
                  onMouseEnter={() => setHoveredNode(node)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className="cursor-pointer relative flex flex-col items-center"
                >
                  <motion.div
                    animate={{
                      y: [0, -3, 0],
                      scale: isHovered ? 1.25 : 1,
                    }}
                    transition={{
                      y: {
                        repeat: Infinity,
                        duration: 3 + (node.x % 3),
                        ease: "easeInOut",
                        delay: node.y % 2,
                      },
                      scale: { duration: 0.2 },
                    }}
                    style={{
                      backgroundColor: colors.base,
                      boxShadow: isHovered
                        ? `0 0 20px 6px ${colors.base}`
                        : `0 0 10px 1px ${colors.glow}`,
                    }}
                    className={`w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 rounded-full border border-black/40 flex items-center justify-center transition-opacity duration-300 ${
                      isDimmed ? "opacity-35" : "opacity-100"
                    }`}
                  >
                    {isHovered && <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />}
                  </motion.div>

                  {/* Skills node label */}
                  <motion.span
                    animate={{
                      opacity: isDimmed ? 0.35 : 1,
                      scale: isHovered ? 1.05 : 1,
                    }}
                    style={{ textShadow: isHovered ? `0 0 8px ${colors.base}` : "none" }}
                    className={`absolute top-6 whitespace-nowrap text-2xs sm:text-xs font-mono font-bold px-1.5 py-0.5 rounded transition-all duration-300 ${
                      isHovered ? "text-white bg-neutral-900 border border-neutral-800" : "text-neutral-400 bg-transparent"
                    }`}
                  >
                    {node.name}
                  </motion.span>
                </div>
              </div>
            )
          })}

          {/* Interactive Info Board Overlay */}
          <AnimatePresence>
            {hoveredNode && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs glass p-5 rounded-2xl z-20 pointer-events-none"
              >
                <div className="flex justify-between items-center mb-1">
                  <span className={`text-[10px] uppercase font-mono font-semibold ${categoryColors[hoveredNode.category].text}`}>
                    {hoveredNode.category}
                  </span>
                  <span className="text-[10px] text-neutral-500 font-mono">Expertise</span>
                </div>
                <h4 className="text-lg font-bold text-white font-mono">{hoveredNode.name}</h4>
                <div className="flex gap-1 mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      style={{
                        backgroundColor: i < hoveredNode.level ? categoryColors[hoveredNode.category].base : "#222",
                      }}
                      className="w-4 h-1.5 rounded-full"
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
