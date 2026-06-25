"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { portfolioData } from "../data/portfolioData"
import { Milestone, Flag, Star, Target, Compass, Award } from "lucide-react"

// Icon matching utility for milestones
const getMilestoneIcon = (year: string) => {
  if (year === "2020") return <Compass className="w-5 h-5" />
  if (year === "2024") return <Award className="w-5 h-5" />
  if (year === "2025") return <Milestone className="w-5 h-5" />
  if (year === "2026") return <Star className="w-5 h-5" />
  return <Target className="w-5 h-5" />
}

export default function Journey() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const { journey } = portfolioData

  // In PPT Scroll mode, we use whileInView for path animation rather than scroll percentage

  return (
    <section
      ref={containerRef}
      id="journey"
      className="relative py-24 px-4 bg-black overflow-hidden"
    >
      {/* Background soft lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        {/* Section Heading */}
        <div className="mb-20 text-center">
          <h2 className="text-xs uppercase tracking-widest text-neutral-500 font-medium mb-3">Evolution Timeline</h2>
          <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            个人进化时间轴 / <span className="text-gradient-cyan-purple">AI Journey</span>
          </h3>
          <p className="text-neutral-400 text-sm max-w-md mx-auto">
            向下滚动页面，见证从第一行代码到全栈智能体独立开发者的进化历程。
          </p>
        </div>

        {/* Timeline Path container */}
        <div className="relative min-h-[800px] ml-4 sm:ml-0">
          {/* Vertical Path Background Track Line */}
          <div className="absolute top-0 bottom-0 left-6 sm:left-1/2 -translate-x-1/2 w-[2px] bg-neutral-900" />

          {/* Growing Progress Path Line (Triggered by whileInView) */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
              originY: 0,
            }}
            className="absolute top-0 bottom-0 left-6 sm:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"
          />

          {/* Timeline Nodes Grid */}
          <div className="flex flex-col gap-16">
            {journey.map((item, idx) => {
              const isEven = idx % 2 === 0
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center w-full ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Circle Node Dot Marker */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-black border-2 border-neutral-800 flex items-center justify-center z-10 text-neutral-400 group shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                    <motion.div
                      whileInView={{
                        borderColor: ["#262626", "#3b82f6", "#a855f7", "#262626"],
                        color: ["#737373", "#ffffff", "#ffffff", "#737373"],
                      }}
                      viewport={{ once: false, amount: 0.8 }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-full h-full rounded-full border border-neutral-800 flex items-center justify-center bg-neutral-950"
                    >
                      {getMilestoneIcon(item.year)}
                    </motion.div>
                  </div>

                  {/* Card content container */}
                  <div className="w-full sm:w-[45%] pl-16 sm:pl-0 sm:px-6">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30, y: 10 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="glass p-6 rounded-2xl relative overflow-hidden group hover:border-neutral-700 transition-colors duration-300"
                    >
                      {/* Hover background line glow */}
                      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 pointer-events-none" />

                      <span className="text-xl font-bold font-mono text-gradient-cyan-purple">
                        {item.year}
                      </span>
                      <h4 className="text-lg font-bold text-white mt-1 mb-2 tracking-tight">
                        {item.title}
                      </h4>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                  
                  {/* Empty spacer for grid alignment */}
                  <div className="hidden sm:block w-[45%]" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
