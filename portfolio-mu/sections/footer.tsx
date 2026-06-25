export default function Footer() {
  return (
    <footer className="py-6 px-4 border-t border-neutral-900/60 bg-transparent text-center text-neutral-500 font-mono text-xs w-full mt-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex flex-col gap-1 sm:text-left">
          <p>Built with Next.js (App Router) & TailwindCSS</p>
          <p className="text-2xs text-neutral-600 uppercase tracking-wider">
            Powered by Advancements in AI Engineering
          </p>
        </div>
        <p className="sm:text-right">
          Copyright © 2026 Designed & Engineered by{" "}
          <span className="text-neutral-400 font-semibold">Fangming Mu</span>
        </p>
      </div>
    </footer>
  )
}
