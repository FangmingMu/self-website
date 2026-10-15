import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "穆芳铭 (Mufangming) - 个人主页 | AI 工程师 / 个人作品集",
  description: "穆芳铭（Mufangming）的个人主页与技术博客。专注 AI 应用开发、智能体系统与软件工程，展示个人项目与联络方式。",
  keywords: [
    "穆芳铭",
    "mufangming",
    "Fangming Mu",
    "穆芳铭 个人主页",
    "穆芳铭 简历",
    "穆芳铭 博客",
    "AI 工程师 穆芳铭",
  ],
  authors: [{ name: "穆芳铭 (Mufangming)" }],
  openGraph: {
    title: "穆芳铭 (Mufangming) - 个人主页",
    description: "欢迎访问穆芳铭的个人技术主页。",
    url: "https://mufangming-self-website.netlify.app",
    siteName: "穆芳铭个人主页",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="zh-CN"
      className="dark scroll-smooth"
    >
      <body className="antialiased bg-[#030303] text-[#f5f5f7] min-h-screen">
        {children}
      </body>
    </html>
  )
}
