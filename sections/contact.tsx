"use client"

import { useState, FormEvent } from "react"
import { motion } from "framer-motion"
import { portfolioData } from "../data/portfolioData"
import { Mail, MapPin, Send, Check, Phone } from "lucide-react"
import { GithubIcon } from "../components/brand-icons"
import Footer from "./footer"

export default function Contact() {
  const { name, email, github, phone, location } = portfolioData.personalInfo
  const [formState, setFormState] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setFormState("sending")

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormState("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setFormState("error")
      }
    } catch (err) {
      console.error(err)
      setFormState("error")
    }

    // Reset status after a few seconds
    setTimeout(() => {
      setFormState("idle")
    }, 3000)
  }

  return (
    <section id="contact" className="relative pt-24 pb-6 px-4 bg-[#050505] overflow-hidden flex flex-col justify-between">
      {/* Glow backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full my-auto">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-xs uppercase tracking-widest text-neutral-500 font-medium mb-3">Get in touch</h2>
          <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            联系渠道与漏斗 / <span className="text-gradient-cyan-purple">Contact Me</span>
          </h3>
          <p className="text-neutral-400 text-sm max-w-sm mx-auto">
            欢迎通过下方矩阵方式或者在线留言表单与我建联，期待与您的合作。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Contact Matrix (5 cols) */}
          <div className="md:col-span-5 flex flex-col justify-between gap-6">
            <div className="glass p-8 rounded-2xl flex flex-col justify-between h-full">
              <div>
                <h4 className="text-lg font-bold text-white mb-2">联络信息矩阵</h4>
                <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                  无论是关于智能体开发咨询、科研探讨还是岗位邀约，随时欢迎垂询。
                </p>
              </div>

              {/* Information Matrix List */}
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-center">
                  <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-blue-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-3xs uppercase font-mono text-neutral-500 font-bold block">Email</span>
                    <a href={`mailto:${email}`} className="text-sm font-semibold text-neutral-200 hover:text-white transition-colors">
                      {email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-purple-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-3xs uppercase font-mono text-neutral-500 font-bold block">Location</span>
                    <span className="text-sm font-semibold text-neutral-200">{location}</span>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-3xs uppercase font-mono text-neutral-500 font-bold block">GitHub</span>
                    <a href={github} target="_blank" rel="noreferrer" className="text-sm font-semibold text-neutral-200 hover:text-white transition-colors">
                      github.com/fangming-mu
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-blue-500">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-3xs uppercase font-mono text-neutral-500 font-bold block">Phone</span>
                    <a href={`tel:${phone}`} className="text-sm font-semibold text-neutral-200 hover:text-white transition-colors">
                      {phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Webhook Form with Flow Border (7 cols) */}
          <div className="md:col-span-7">
            <div className="glow-border p-8 rounded-2xl border border-neutral-900 relative overflow-hidden">
              <h4 className="text-lg font-bold text-white mb-6">在线留言板 (API Message Box)</h4>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Input Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-name" className="text-2xs font-mono font-bold text-neutral-500 uppercase">
                    Your Name (您的称呼)
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-neutral-950/80 border border-neutral-900 focus:border-blue-500 focus:outline-none rounded-xl p-3 text-sm text-white font-medium transition-colors"
                    placeholder="请输入您的姓名"
                  />
                </div>

                {/* Input Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-email" className="text-2xs font-mono font-bold text-neutral-500 uppercase">
                    Your Email (您的邮箱)
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-neutral-950/80 border border-neutral-900 focus:border-blue-500 focus:outline-none rounded-xl p-3 text-sm text-white font-medium transition-colors"
                    placeholder="请输入您的邮箱"
                  />
                </div>

                {/* Input Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-message" className="text-2xs font-mono font-bold text-neutral-500 uppercase">
                    Your Message (留言内容)
                  </label>
                  <textarea
                    id="form-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-neutral-950/80 border border-neutral-900 focus:border-blue-500 focus:outline-none rounded-xl p-3 text-sm text-white font-medium transition-colors resize-none"
                    placeholder="请写下您的意见或合作设想..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formState !== "idle"}
                  className={`w-full py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                    formState === "idle"
                      ? "bg-white text-black hover:bg-neutral-200 cursor-pointer"
                      : formState === "sending"
                      ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                      : formState === "success"
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                      : "bg-rose-500/20 text-rose-400 border border-rose-500/30"
                  }`}
                >
                  {formState === "idle" && (
                    <>
                      发送留言 (Send Message) <Send className="w-4 h-4" />
                    </>
                  )}
                  {formState === "sending" && (
                    <>
                      正在投递... (Sending)
                      <span className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
                    </>
                  )}
                  {formState === "success" && (
                    <>
                      留言投递成功! (Success) <Check className="w-4 h-4" />
                    </>
                  )}
                  {formState === "error" && (
                    <>
                      投递失败 (Failed)
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}
