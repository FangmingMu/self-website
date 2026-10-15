import { Mail, MapPin, Phone } from "lucide-react"
import { GithubIcon } from "../components/brand-icons"
import { portfolioData } from "../data/portfolioData"
import Footer from "./footer"

export default function Contact() {
  const { email, github, phone, location } = portfolioData.personalInfo

  return (
    <section id="contact" className="relative pt-24 pb-6 px-4 bg-[#050505] overflow-hidden flex flex-col justify-between">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full my-auto">
        <div className="mb-16 text-center">
          <h2 className="text-xs uppercase tracking-widest text-neutral-500 font-medium mb-3">Get in touch</h2>
          <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            联系方式 / <span className="text-gradient-cyan-purple">Contact Me</span>
          </h3>
          <p className="text-neutral-400 text-sm max-w-sm mx-auto">
            欢迎通过电话、邮箱或 GitHub 与我联系，期待与您的合作。
          </p>
        </div>

        <div className="max-w-4xl mx-auto glass p-6 sm:p-8 rounded-2xl">
          <div className="text-center mb-8">
            <h4 className="text-lg font-bold text-white mb-2">联络信息矩阵</h4>
            <p className="text-neutral-400 text-sm leading-relaxed">
              无论是岗位邀约、项目合作还是技术交流，欢迎随时联系。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex gap-4 items-center rounded-xl border border-neutral-800 bg-neutral-950/40 p-4">
              <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-blue-400"><Mail className="w-5 h-5" /></div>
              <div>
                <span className="text-3xs uppercase font-mono text-neutral-500 font-bold block">Email</span>
                <a href={`mailto:${email}`} className="text-sm font-semibold text-neutral-200 hover:text-white transition-colors">{email}</a>
              </div>
            </div>

            <div className="flex gap-4 items-center rounded-xl border border-neutral-800 bg-neutral-950/40 p-4">
              <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-purple-400"><MapPin className="w-5 h-5" /></div>
              <div>
                <span className="text-3xs uppercase font-mono text-neutral-500 font-bold block">Location</span>
                <span className="text-sm font-semibold text-neutral-200">{location}</span>
              </div>
            </div>

            <div className="flex gap-4 items-center rounded-xl border border-neutral-800 bg-neutral-950/40 p-4">
              <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400"><GithubIcon className="w-5 h-5" /></div>
              <div>
                <span className="text-3xs uppercase font-mono text-neutral-500 font-bold block">GitHub</span>
                <a href={github} target="_blank" rel="noreferrer" className="text-sm font-semibold text-neutral-200 hover:text-white transition-colors">github.com/fangming-mu</a>
              </div>
            </div>

            <div className="flex gap-4 items-center rounded-xl border border-neutral-800 bg-neutral-950/40 p-4">
              <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-blue-500"><Phone className="w-5 h-5" /></div>
              <div>
                <span className="text-3xs uppercase font-mono text-neutral-500 font-bold block">Phone</span>
                <a href={`tel:${phone}`} className="text-sm font-semibold text-neutral-200 hover:text-white transition-colors">{phone}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  )
}
