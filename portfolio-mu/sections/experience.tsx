"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { portfolioData } from "../data/portfolioData"
import { Briefcase, CheckCircle2 } from "lucide-react"

const flowSteps = [
  { name: "用户需求", sub: "Requirements" },
  { name: "技术规范", sub: "OpenSpec" },
  { name: "智能体编排", sub: "Agent Flow" },
  { name: "自动化代码", sub: "Code Auto" },
  { name: "全栈测试", sub: "Verify Test" },
  { name: "生产上线", sub: "Deploy Prod" },
]

export default function Experience() {
  const { experience } = portfolioData
  const [activeStep, setActiveStep] = useState(0)

  // Step looping animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % flowSteps.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="experience" className="relative py-24 px-4 bg-black overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-0 w-[350px] h-[350px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-xs uppercase tracking-widest text-neutral-500 font-medium mb-3">Professional Experience</h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            企业级工程实践 / <span className="text-gradient-cyan-purple">Work Experience</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Work Experience Info */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {experience.map((exp, idx) => (
              <div key={idx} className="glass p-8 rounded-2xl relative overflow-hidden">
                {/* Decorative glow */}
                <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-blue-500/10 blur-xl" />

                <div className="flex gap-4 items-start mb-6">
                  <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-blue-400">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-blue-400 uppercase font-mono tracking-wider">
                      {exp.period}
                    </span>
                    <h4 className="text-xl font-bold text-white mt-1">{exp.company}</h4>
                    <p className="text-sm font-semibold text-neutral-400 font-mono mt-0.5">{exp.role}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  {exp.points.map((point, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-blue-500/80 shrink-0 mt-0.5" />
                      <p className="text-sm text-neutral-300 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Spec-Driven Pipeline Visualization */}
          <div className="lg:col-span-6 glass p-8 rounded-2xl flex flex-col h-full justify-between min-h-[350px]">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Spec-Driven Development 工作流</h4>
              <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                在有孚网络践行的规范驱动开发体系：需求抽象为规范契约，驱动多智能体协同编写并自动化部署。
              </p>
            </div>

            {/* Pipeline Step Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 relative p-4">
              {flowSteps.map((step, idx) => {
                const isActive = activeStep === idx
                return (
                  <div
                    key={idx}
                    className={`relative p-4 rounded-xl border flex flex-col items-center justify-center text-center transition-all duration-500 ${
                      isActive
                        ? "bg-blue-500/10 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.25)] scale-105"
                        : "bg-neutral-950/60 border-neutral-900"
                    }`}
                  >
                    <span className="text-[10px] font-mono text-neutral-500 font-semibold mb-1">
                      STEP 0{idx + 1}
                    </span>
                    <span
                      className={`text-sm font-bold tracking-tight transition-colors duration-300 ${
                        isActive ? "text-white" : "text-neutral-400"
                      }`}
                    >
                      {step.name}
                    </span>
                    <span
                      className={`text-[9px] font-mono mt-0.5 transition-colors duration-300 ${
                        isActive ? "text-blue-400" : "text-neutral-500"
                      }`}
                    >
                      {step.sub}
                    </span>

                    {/* Sequential Glowing Arrow Dots */}
                    {idx < flowSteps.length - 1 && (
                      <div className="hidden sm:block absolute top-1/2 -right-3.5 -translate-y-1/2 z-10 pointer-events-none text-neutral-800">
                        <span className={`text-xs ${isActive ? "text-blue-500 animate-pulse font-bold" : ""}`}>
                          ➔
                        </span>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
            
            {/* Visual description */}
            <div className="mt-8 text-2xs font-mono text-neutral-600 uppercase tracking-widest text-center">
              * LOOP SEQUENCE UPDATING AUTOMATICALLY EVERY 2 SECONDS *
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
