import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "穆芳铭 (Fangming Mu) | AI Engineer & Agent Developer",
  description: "专注 Agent / RAG / AIGC / AI Engineering，致力于构建生产级、可落地的智能系统。本科毕业于黄河科技学院，硕士就读于上海第二工业大学深度学习CV实验室，深耕跨域行人重识别 (ReID) 算法研究与大模型应用工程化落地。",
  keywords: [
    "穆芳铭",
    "Fangming Mu",
    "AI Engineer",
    "Agent Developer",
    "AIGC",
    "LangGraph",
    "Hybrid RAG",
    "Person ReID",
    "行人重识别",
    "有孚网络",
    "上海第二工业大学"
  ].join(", "),
  authors: [{ name: "Fangming Mu" }],
  creator: "Fangming Mu",
  openGraph: {
    title: "穆芳铭 (Fangming Mu) | AI Engineer & Agent Developer",
    description: "专注 Agent / RAG / AIGC / AI Engineering，致力于构建生产级、可落地的智能系统。",
    type: "website",
    locale: "zh_CN",
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
