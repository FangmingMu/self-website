"use client"

import { useState, useMemo, useEffect } from "react"
import { motion } from "framer-motion"
import { GitPullRequest, Star, BookOpen, ExternalLink } from "lucide-react"
import { GithubIcon } from "../components/brand-icons"
import { portfolioData } from "../data/portfolioData"

// Configuration for Mock Contribution Grid
const COLS = 42
const ROWS = 7
const LEVEL_COLORS = [
  "bg-neutral-900 border-neutral-950", // level 0
  "bg-emerald-950/80 border-emerald-950", // level 1
  "bg-emerald-800/80 border-emerald-900", // level 2
  "bg-emerald-600/80 border-emerald-700", // level 3
  "bg-emerald-400 border-emerald-500", // level 4
]

export default function GitHubDashboard() {
  const [hoveredCell, setHoveredCell] = useState<{ date: string; count: number } | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Generate randomized contribution cells
  const gridCells = useMemo(() => {
    const cells = []
    const baseDate = mounted ? new Date() : new Date("2026-01-01T00:00:00")
    baseDate.setFullYear(baseDate.getFullYear() - 1)

    for (let c = 0; c < COLS; c++) {
      for (let r = 0; r < ROWS; r++) {
        const date = new Date(baseDate)
        date.setDate(date.getDate() + (c * ROWS + r))
        
        let level = 0
        let count = 0

        if (mounted) {
          // Pseudo random contribution levels, biased to look realistic
          const rand = Math.random()
          if (rand > 0.45) level = 1
          if (rand > 0.7) level = 2
          if (rand > 0.85) level = 3
          if (rand > 0.95) level = 4

          count = level === 0 ? 0 : Math.floor(Math.random() * (level * 4)) + 1
        }

        cells.push({
          date: mounted
            ? date.toLocaleDateString("zh-CN", { month: "short", day: "numeric" })
            : `${date.getMonth() + 1}月${date.getDate()}日`,
          level,
          count,
        })
      }
    }
    return cells
  }, [mounted])

  // Custom SVG Radar Chart Calculation (5-axis)
  const radarAxes = [
    { label: "Python/AI", val: 0.95 },
    { label: "TypeScript/TS", val: 0.85 },
    { label: "Next.js/React", val: 0.90 },
    { label: "Deep Learning", val: 0.92 },
    { label: "SQL/Backend", val: 0.78 },
  ]

  const cx = 130
  const cy = 130
  const r = 90
  const N = radarAxes.length

  // Calculate coordinates for grid lines
  const getRadarPoints = (scale: number) => {
    return radarAxes
      .map((_, i) => {
        const angle = i * ((2 * Math.PI) / N) - Math.PI / 2
        const x = cx + r * scale * Math.cos(angle)
        const y = cy + r * scale * Math.sin(angle)
        return `${x},${y}`
      })
      .join(" ")
  }

  // Calculate data polygon coordinates
  const getRadarDataPoints = () => {
    return radarAxes
      .map((axis, i) => {
        const angle = i * ((2 * Math.PI) / N) - Math.PI / 2
        const x = cx + r * axis.val * Math.cos(angle)
        const y = cy + r * axis.val * Math.sin(angle)
        return `${x},${y}`
      })
      .join(" ")
  }

  return (
    <section id="github" className="py-24 px-4 bg-black relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-xs uppercase tracking-widest text-neutral-500 font-medium mb-3">Open Source</h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            开源贡献看板 / <span className="text-gradient-cyan-purple">GitHub Dashboard</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contributions & Repos (8 columns) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Grid Box */}
            <div className="glass p-6 sm:p-8 rounded-2xl relative">
              <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-emerald-400">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-none">@fangming-mu</h4>
                    <span className="text-[10px] font-mono text-neutral-500">Contributions Grid</span>
                  </div>
                </div>

                {/* Tooltip display */}
                <div className="h-6 flex items-center">
                  {hoveredCell ? (
                    <span className="text-xs text-neutral-300 font-mono">
                      {hoveredCell.date}: <strong className="text-emerald-400">{hoveredCell.count}</strong> contributions
                    </span>
                  ) : (
                    <span className="text-xs text-neutral-600 font-mono">Hover over cell to inspect</span>
                  )}
                </div>
              </div>

              {/* Contribution Grid Scroller */}
              <div className="overflow-x-auto w-full pb-2">
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${COLS}, minmax(10px, 1fr))`,
                    gap: "4px",
                    width: "100%",
                    minWidth: "600px",
                  }}
                >
                  {gridCells.map((cell, idx) => (
                    <div
                      key={idx}
                      onMouseEnter={() => setHoveredCell({ date: cell.date, count: cell.count })}
                      onMouseLeave={() => setHoveredCell(null)}
                      className={`aspect-square w-full rounded-[2px] border ${
                        LEVEL_COLORS[cell.level]
                      } cursor-crosshair hover:scale-125 hover:z-10 transition-transform duration-100`}
                    />
                  ))}
                </div>
              </div>

              {/* Legend Footer */}
              <div className="flex justify-between items-center mt-4 text-2xs font-mono text-neutral-600">
                <span>Less than 365 days ago</span>
                <div className="flex gap-1 items-center">
                  <span>Less</span>
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-neutral-900 border border-neutral-950" />
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-950" />
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-800" />
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-600" />
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-400" />
                  <span>More</span>
                </div>
              </div>
            </div>

            {/* Repos Info Panel */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="glass p-6 rounded-2xl flex flex-col justify-between">
                <span className="text-3xs uppercase tracking-widest text-neutral-500 font-bold font-mono">
                  Repositories
                </span>
                <span className="text-3xl font-extrabold text-white font-mono mt-3">24</span>
                <span className="text-2xs text-neutral-500 mt-1">Active Public & Private Repos</span>
              </div>
              <div className="glass p-6 rounded-2xl flex flex-col justify-between">
                <span className="text-3xs uppercase tracking-widest text-neutral-500 font-bold font-mono">
                  Stars Count
                </span>
                <span className="text-3xl font-extrabold text-white font-mono mt-3 flex items-baseline gap-1">
                  128 <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 shrink-0" />
                </span>
                <span className="text-2xs text-neutral-500 mt-1">Total repository stars earned</span>
              </div>
              <div className="glass p-6 rounded-2xl flex flex-col justify-between">
                <span className="text-3xs uppercase tracking-widest text-neutral-500 font-bold font-mono">
                  Pull Requests
                </span>
                <span className="text-3xl font-extrabold text-white font-mono mt-3 flex items-baseline gap-1">
                  64+ <GitPullRequest className="w-4 h-4 text-purple-400 shrink-0" />
                </span>
                <span className="text-2xs text-neutral-500 mt-1">Merged Open-source commits</span>
              </div>
            </div>
          </div>

          {/* Right Column: Custom SVG Radar Chart (4 columns) */}
          <div className="lg:col-span-4 glass p-6 sm:p-8 rounded-2xl flex flex-col justify-between items-center text-center">
            <div className="w-full">
              <h4 className="text-sm font-bold text-white mb-1">技术分布雷达图</h4>
              <span className="text-[10px] font-mono text-neutral-500 uppercase">
                Technology Ratio Analysis
              </span>
            </div>

            {/* SVG Radar */}
            <div className="w-[260px] h-[260px] relative my-6">
              <svg className="w-full h-full" viewBox="0 0 260 260">
                {/* Background Grid Concentric Polygons */}
                <polygon points={getRadarPoints(0.2)} fill="none" stroke="#222" strokeWidth="0.5" />
                <polygon points={getRadarPoints(0.4)} fill="none" stroke="#222" strokeWidth="0.5" />
                <polygon points={getRadarPoints(0.6)} fill="none" stroke="#222" strokeWidth="0.5" />
                <polygon points={getRadarPoints(0.8)} fill="none" stroke="#222" strokeWidth="0.5" />
                <polygon points={getRadarPoints(1.0)} fill="none" stroke="#333" strokeWidth="0.8" />

                {/* Grid Web Axis Lines */}
                {radarAxes.map((_, i) => {
                  const angle = i * ((2 * Math.PI) / N) - Math.PI / 2
                  const targetX = cx + r * Math.cos(angle)
                  const targetY = cy + r * Math.sin(angle)
                  return (
                    <line
                      key={i}
                      x1={cx}
                      y1={cy}
                      x2={targetX}
                      y2={targetY}
                      stroke="#222"
                      strokeWidth="0.8"
                    />
                  )
                })}

                {/* Data Polygon */}
                <polygon
                  points={getRadarDataPoints()}
                  fill="rgba(16, 185, 129, 0.2)"
                  stroke="#10b981"
                  strokeWidth="1.8"
                  className="animate-pulse"
                />

                {/* Axis Labels */}
                {radarAxes.map((axis, i) => {
                  const angle = i * ((2 * Math.PI) / N) - Math.PI / 2
                  const labelOffset = 18
                  const textX = cx + (r + labelOffset) * Math.cos(angle)
                  const textY = cy + (r + labelOffset) * Math.sin(angle)
                  
                  // Text Alignment helper
                  let textAnchor: "middle" | "start" | "end" = "middle"
                  if (Math.cos(angle) > 0.1) textAnchor = "start"
                  if (Math.cos(angle) < -0.1) textAnchor = "end"

                  return (
                    <text
                      key={i}
                      x={textX}
                      y={textY + 4}
                      fill="#888"
                      fontSize="9"
                      fontFamily="monospace"
                      fontWeight="bold"
                      textAnchor={textAnchor}
                    >
                      {axis.label}
                    </text>
                  )
                })}
              </svg>
            </div>

            <div className="w-full pt-4 border-t border-neutral-900">
              <a
                href={portfolioData.personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-neutral-400 hover:text-white flex items-center justify-center gap-1.5 font-medium transition-colors"
              >
                访问我的 GitHub (View Profile)
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
