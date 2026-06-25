"use client"

import { motion } from "framer-motion"
import { portfolioData } from "../data/portfolioData"
import { BookOpen, CheckCircle, TrendingUp, Cpu } from "lucide-react"

export default function Research() {
  const { research } = portfolioData

  return (
    <section id="research" className="relative py-24 px-4 bg-[#050505] overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-xs uppercase tracking-widest text-neutral-500 font-medium mb-3">Academic Research</h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            学术与科研成果 / <span className="text-gradient-cyan-purple">Research & Publications</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Academic Paper Card */}
          <div className="lg:col-span-7 glass p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-bold tracking-wider text-purple-400 uppercase">
                  Research Paper (外审阶段)
                </span>
              </div>

              {/* Title & Author */}
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug hover:text-purple-300 transition-colors">
                {research.title}
              </h4>
              <p className="text-xs font-mono text-neutral-500 mb-6">
                作者：穆芳铭 等 / 指导实验室：上海第二工业大学 CV 智能实验室
              </p>

              {/* Abstract */}
              <div className="relative border-l-2 border-neutral-800 pl-4 py-1 mb-8">
                <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-neutral-600 block mb-1">
                  Abstract (摘要)
                </span>
                <p className="text-neutral-400 text-sm leading-relaxed text-justify">
                  {research.abstract}
                </p>
              </div>
            </div>

            {/* Bullet Highlights */}
            <div className="flex flex-col gap-3">
              {research.details.map((detail, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <CheckCircle className="w-4 h-4 text-purple-500/80 shrink-0 mt-0.5" />
                  <p className="text-xs text-neutral-300 leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Quantitative Dashboard */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {/* Metrics Dashboard */}
            <div className="glass p-8 rounded-2xl flex-1 flex flex-col justify-center">
              <h4 className="text-sm font-semibold text-white mb-8 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-400" />
                行人重识别 (ReID) 核心算法指标
              </h4>

              <div className="flex flex-col gap-8">
                {research.metrics.map((metric, idx) => (
                  <div key={idx} className="relative flex justify-between items-end border-b border-neutral-900 pb-3">
                    <span className="text-sm font-medium text-neutral-400">{metric.label}</span>
                    <motion.span
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.2, type: "spring" }}
                      className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-tight"
                    >
                      {metric.value}
                    </motion.span>
                  </div>
                ))}
              </div>
            </div>

            {/* Neural Net Architecture Feature Highlight */}
            <div className="glass p-6 rounded-2xl flex items-center gap-4 bg-neutral-950/40 border-neutral-900">
              <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-850 text-blue-400">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h5 className="text-sm font-bold text-white">模型优化架构</h5>
                <p className="text-2xs text-neutral-500 uppercase font-mono mt-0.5">
                  PCB Network + Optimized MFM Block + Fusion-Loss Triplet
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
