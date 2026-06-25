"use client"

import { useState } from "react"
import BorderGlow from "../components/border-glow"
import { motion, AnimatePresence } from "framer-motion"
import { portfolioData, Project } from "../data/portfolioData"
import { ExternalLink, X, Cpu, GitFork, Server, Database, Code, Activity } from "lucide-react"

// Icon matching utility
const getIcon = (tech: string) => {
  const t = tech.toLowerCase()
  if (t.includes("graph") || t.includes("agent") || t.includes("workflow")) return <GitFork className="w-4 h-4" />
  if (t.includes("api") || t.includes("fastapi") || t.includes("flask") || t.includes("sse")) return <Server className="w-4 h-4" />
  if (t.includes("sqlite") || t.includes("db") || t.includes("mysql") || t.includes("sql")) return <Database className="w-4 h-4" />
  if (t.includes("pytorch") || t.includes("cnn") || t.includes("loss")) return <Activity className="w-4 h-4" />
  return <Code className="w-4 h-4" />
}

// Glow Border Card Subcomponent
function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <BorderGlow
      className="cursor-pointer"
      borderRadius={20}
    >
      <div
        onClick={onClick}
        className="p-5 flex flex-col justify-between min-h-[220px] md:min-h-[240px] lg:min-h-[260px] h-full"
      >
        {/* Header */}
        <div>
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-blue-400">
              <Cpu className="w-6 h-6" />
            </div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500">
              Click to expand
            </span>
          </div>

          {/* Title */}
          <h4 className="text-xl font-bold text-white mb-2 font-mono group-hover:text-gradient-cyan-purple transition-all duration-300">
            {project.title}
          </h4>
          <p className="text-xs font-medium text-neutral-400 mb-3">{project.subtitle}</p>
          <p className="text-sm text-neutral-500 line-clamp-3 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech Tags Footer */}
        <div className="flex flex-wrap gap-2 mt-4 z-10">
          {project.tech.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono py-1 px-2.5 rounded-full bg-neutral-900 border border-neutral-850 text-neutral-400 flex items-center gap-1"
            >
              {getIcon(tag)}
              {tag}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="text-[10px] font-mono py-1 px-2.5 rounded-full bg-neutral-900 border border-neutral-850 text-neutral-500">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
      </div>
    </BorderGlow>
  )
}

export default function Projects() {
  const { projects } = portfolioData
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="relative py-24 px-4 bg-[#050505] overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500/5 to-transparent blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-l from-purple-500/5 to-transparent blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-xs uppercase tracking-widest text-neutral-500 font-medium mb-3">Featured Work</h2>
          <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            核心项目作品集 / <span className="text-gradient-cyan-purple">Featured Projects</span>
          </h3>
          <p className="text-neutral-400 text-sm max-w-lg mx-auto">
            点击项目卡片以深入查看其底层的系统架构图、核心交付功能及技术细节。
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Details Drawer / Modal Dialog Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/85 backdrop-blur-md"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative w-full max-w-3xl glass max-h-[85vh] rounded-3xl overflow-y-auto p-6 sm:p-8 z-10"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Content */}
                <div className="flex flex-col gap-6">
                  <div>
                    <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-purple-400">
                      Project Specifications
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                      {selectedProject.title}
                    </h3>
                    <p className="text-sm font-semibold text-neutral-400 mt-1">
                      {selectedProject.subtitle}
                    </p>
                  </div>

                  {/* Architecture Diagram */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-neutral-950 border border-neutral-900 font-mono text-2xs sm:text-xs text-neutral-400 overflow-x-auto leading-relaxed">
                    <div className="text-[10px] text-neutral-600 font-semibold uppercase mb-2">
                      💡 System Flow Architecture
                    </div>
                    {selectedProject.architecture}
                  </div>

                  {/* Detailed Description */}
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-neutral-500 font-bold mb-3">
                      核心技术交付 (Key Accomplishments)
                    </h4>
                    <ul className="flex flex-col gap-2.5">
                      {selectedProject.details.map((detail, index) => (
                        <li
                          key={index}
                          className="text-sm text-neutral-300 leading-relaxed flex items-start gap-3"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack tags */}
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-neutral-500 font-bold mb-3">
                      完整技术栈 (Tech Stack)
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono py-1.5 px-3 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 flex items-center gap-1.5"
                        >
                          {getIcon(tag)}
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
