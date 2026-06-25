"use client"

import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { portfolioData } from "../data/portfolioData"
import { GraduationCap, Code, Server, BookOpen, Layers } from "lucide-react"

// Counter Subcomponent
function Counter({ target, suffix, duration = 2 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true })

  useEffect(() => {
    if (!inView) return

    let start = 0
    const end = target
    const totalFrames = 60 * duration
    let frame = 0

    const counter = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      // Ease out quadratic
      const currentVal = Math.round(end * (1 - (1 - progress) * (1 - progress)))
      
      if (frame >= totalFrames) {
        setCount(end)
        clearInterval(counter)
      } else {
        setCount(currentVal)
      }
    }, 1000 / 60)

    return () => clearInterval(counter)
  }, [inView, target, duration])

  return (
    <span ref={ref} className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-white tracking-tight">
      {count}
      <span className="text-blue-500 font-semibold">{suffix}</span>
    </span>
  )
}

export default function About() {
  const { education, stats } = portfolioData

  return (
    <section id="about" className="relative py-24 px-4 bg-black overflow-hidden min-h-screen md:h-screen flex flex-col justify-center">
      {/* Glow effect */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-l from-purple-500/5 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-xs uppercase tracking-widest text-neutral-500 font-medium mb-3">About Me</h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            技术成长与故事 / <span className="text-gradient-cyan-purple">Story & Education</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Left Column: Stats & Abstract Design */}
          <div className="md:col-span-5 flex flex-col gap-8">
            <div className="glass p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-blue-500/10 rounded-full blur-[30px]" />
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-400" />
                技术进阶数据
              </h4>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                在探索 AI 高增长的道路上，以 Spec 开发规范为牵引，将深度学习底蕴与现代 Agent 系统工程深度链接。
              </p>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="flex flex-col gap-1 p-4 rounded-xl bg-neutral-900/50 border border-neutral-800">
                    <Counter target={stat.targetNum} suffix={stat.suffix} />
                    <span className="text-xs text-neutral-500 font-medium uppercase mt-1">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Profile silhouette / technology representation */}
            <div className="w-full aspect-[4/3] rounded-2xl border border-neutral-800 bg-neutral-950 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.2),rgba(255,255,255,0))]" />
              <div className="z-10 text-center flex flex-col items-center p-6">
                <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                  <Code className="w-8 h-8 text-blue-400" />
                </div>
                <span className="text-sm font-semibold text-white tracking-wide">Fangming Mu</span>
                <span className="text-xs text-neutral-500 font-mono mt-1">AI Engineering & DL CV Research</span>
              </div>
            </div>
          </div>

          {/* Right Column: Educational Timeline */}
          <div className="md:col-span-7 flex flex-col gap-8">
            <div className="glass p-8 rounded-2xl">
              <h4 className="text-lg font-semibold text-white mb-8 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-purple-400" />
                教育背景时间轴
              </h4>

              <div className="relative border-l border-neutral-800 ml-4 pl-8 flex flex-col gap-10">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    className="relative"
                  >
                    {/* Node Dot */}
                    <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-black border-2 border-purple-500 flex items-center justify-center shadow-[0_0_10px_rgba(168,85,247,0.3)]">
                      <div className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                    </div>

                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-semibold text-purple-400 uppercase font-mono tracking-wider">{edu.period}</span>
                      <h5 className="text-xl font-bold text-white flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                        {edu.school}
                        <span className="text-xs font-normal py-0.5 px-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 self-start sm:self-auto">
                          {edu.degree}
                        </span>
                      </h5>
                      <p className="text-sm font-medium text-neutral-300 font-mono">{edu.major}</p>
                      <p className="text-neutral-400 text-sm leading-relaxed mt-2">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
