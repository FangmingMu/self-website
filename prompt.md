# 🚀 AI 高端个人品牌网站（Portfolio）PRD —— 穆芳铭 (Fangming Mu)

## 1. 项目目标与定位
构建一个 **AI 工程师级个人品牌网站**，而非传统的静态简历。该网站需要打破“学生作业风”与“卡片堆砌感”，全面对标 OpenAI、Anthropic、Stripe 等硅谷一线 AI/技术公司的视觉美学与技术表达。

### 🎯 核心目标（访问者 30 秒感知）
* **顶尖 AI 工程落地能力**：快速感知用户在 Agent（智能体）、RAG（检索增强生成）、LLM（大语言模型）应用层的高级开发能力（如状态机控制、混合检索）。
* **系统级工程思维**：展示从 0 到 1 构建复杂系统、Spec-Driven 开发、可生产架构的设计能力。
* **科研与算法底蕴**：体现扎实的深度学习（如计算机视觉 ReID、融合损失函数）及学术论文撰写、实验评测能力。
* **产品与商业化嗅觉**：具备独立打造 MVP 并在真实场景落地、实现流式输出与商业闭环的综合素质。

---

## 2. 设计风格与视觉语言
* **视觉风格参考**：OpenAI 官网、Anthropic Console、Stripe 动画、Vercel 仪表盘、Linear 极简暗黑、Apple Developer。
* **设计关键词**：极简主义（Minimalism）、高级科技感、AI 未来感、大量留白、暗黑模式优先（Dark Mode Only）、渐变光晕（Glow Effects）、毛玻璃微动效（Glassmorphism）、鼠标跟随光效、动态粒子背景。
* **❌ 绝对禁止的风格**：普通博客模板风、传统卡片堆砌感、学生作业/教条化简历、毫无动效的死板布局。

---

## 3. 核心技术栈架构
* **前端核心框架**：Next.js (App Router)
* **开发语言**：TypeScript (严谨类型定义)
* **样式解决方案**：TailwindCSS + CSS Modules
* **动画系统**：Framer Motion (用于 Scroll Reveal、Parallax、3D Hover 及组件微动效)
* **UI 组件库**：Shadcn UI (基于 Radix UI，保证无障碍与高度定制性)
* **图标库**：Lucide Icons
* **技术指标要求**：
  * 全设备完美响应式（PC / 平板 / 手机）。
  * SEO 极度友好（SSG/ISR 渲染模式，完备的 Meta 配置）。
  * Lighthouse 全项评分 90+（卓越的性能、可访问性及最佳实践）。
  * 无缝接入 Vercel 一键一阶段部署。

---

## 4. 网站整体结构与板块定义

### 🌌 SECTION 1 — Hero 首页（核心视觉首屏）
* **设计与交互**：
  * 全屏首屏（Full-bleed Layout），暗黑色底，嵌入柔和的**鼠标跟随渐变光晕**与后台**动态粒子流**。
  * 底部设有一个优雅的 `scroll` 引导指示动画。
* **核心内容**：
  * **姓名**：穆芳铭 (Fangming Mu)
  * **动态 Title**（打字机动画循环）：`AI Engineer` | `Agent Developer` | `AIGC Engineer`
  * **Slogan**：*Building Intelligent Systems Beyond Chatbots.*
  * **副标题**：专注 Agent / RAG / AIGC / AI Engineering，致力于构建生产级、可落地的智能系统。
  * **CTA 按钮组**：`View Projects`（平滑滚动至项目）、`Download Resume`（简历下载）、`Contact Me`（锚点跳转）。

### 👤 SECTION 2 — About Me（故事化技术成长）
* **设计与布局**：左右分栏结构。左侧为精致磨砂感个人形象/抽象技术剪影；右侧为故事型叙述，拒绝死板陈述，采用**时间轴**形式展现教育路径。
* **教育经历时间轴**：
  * **本科**：黄河科技学院（计算机科学与技术）
  * **硕士**：上海第二工业大学（计算机技术 / 研二）
* **核心表达**：重点展现自学与技术进阶的韧性、对 AI 行业“高增长弹簧床”机会的渴望、工程逻辑与学术实验室研究的融合。
* **数据卡片展示**（带数字滚动增长动画）：
  * `Years Coding`: 5+ 
  * `Projects Deployed`: 10+
  * `Papers/Research`: 1+
  * `AI Tokens Processed`: 100M+

### 🌌 SECTION 3 — Tech Stack（技能宇宙星图）
* **设计要求**：**❌ 严禁传统纯文本或进度条列表**。必须设计为 **Interactive Tech Universe（交互式技能星图）**。
* **核心分类与技术标签**：
  1. **AI Engineering**：LangChain, LangGraph (核心), Hybrid RAG, Agentic Workflows, Prompt Engineering, Ragas (评测)
  2. **Backend Ecosystem**：Python, FastAPI, Flask, SQLite, MySQL
  3. **Frontend Engineering**：Next.js, TypeScript, TailwindCSS, Vue3, Streamlit, UniApp
  4. **AI Models**：OpenAI, Gemini, GLM-4, Qwen
  5. **Deep Learning / Research**：PyTorch, CNN, Transformer, Person ReID
* **交互效果**：各个技能节点在太空中轻微 3D 浮动，鼠标 Hover 触发节点高亮发光，并在同类节点间产生**动态激光连线**。

### 🛠️ SECTION 4 — Featured Projects（核心项目作品集）
* **设计要求**：大卡片式流式布局，支持 3D 倾斜 Hover 动效，点击可展开无缝抽屉/弹窗显示深度架构图与技术细节。
* **展示项目**：
  1. **Enterprise IT Agent**
     * *技术栈*：LangGraph, Hybrid RAG, FastAPI, SQLite
     * *核心亮点*：构建了基于 DAG（有向无环图）的复杂状态机控制流，引入 Human-in-the-loop（人工要件介入）机制，并基于 Ragas 搭建了严谨的 RAG 评测体系。
  2. **AI Fitness Assistant**
     * *技术栈*：Qwen, Streamlit, AIGC Ecosystem
     * *核心亮点*：实现生产级低延迟流式输出（Streaming Output），独立跑通商业化闭环，自研激活码分发与鉴权管理系统。
  3. **Agentic News Workflow**
     * *核心亮点*：多智能体协同流水线。实现全网自动化垂直抓取、高质量跨国翻译、基于 LLM 的事实与内容核验、以及爆款标题多模态生成。
  4. **ReID Research Project**
     * *技术栈*：PyTorch, PCB (Part-based Convolutional Baseline), Fusion-Loss
     * *核心亮点*：针对行人重识别（ReID）领域的尖端研究，提出优化 MFM (Max-Feature-Map) 机制，基于 LSMS PB 等数据集进行全流程构建与模型训练，成果已形成学术论文并外审。

### 💼 SECTION 5 — Work Experience（企业级工程实践）
* **时间轴结构**：
  * **公司/组织**：上海有孚网络科技有限公司 (Yovole Network)
  * **职位**：AI 应用研发实习生
* **核心技术交付**：
  * 全面推行 **Spec-Driven Development（规范驱动开发）** 与行为驱动开发（BDD），基于 OpenSpec 规范设计前后端契约。
  * 技术栈采用 FastAPI + UniApp，高效交付高并发、跨平台的 AI 应用接口。
* **可视化流程动画**（节点按顺序渐进亮起）：
  `用户需求 (Requirements)` ➔ `技术规范 (OpenSpec)` ➔ `智能体编排 (Agent)` ➔ `自动化代码 (Code)` ➔ `全栈测试 (Test)` ➔ `生产上线 (Deploy)`

### 📄 SECTION 6 — Research & Publications（学术与科研成果）
* **视觉风格**：严谨、干净的学术期刊风格与硬核数据看板相结合。
* **研究方向**：行人重识别（Person Re-identification）、领域自适应（Domain Adaptation）、局部卷积基线（PCB）、融合损失函数优化（Fusion-Loss）。
* **核心算法指标看板**（高亮显示）：
  * **Rank-1 Accuracy**: `93.29%`
  * **mAP (Mean Average Precision)**: `81.75%`

### ⏳ SECTION 7 — AI Journey（个人进化时间轴）
* **设计交互**：Scroll 驱动（滚动时轴线向下延伸，节点依次 Reveal 显现）。
* **关键里程碑**：
  * **2020**：初识编程，构建首行代码，建立扎实的计算机基础。
  * **2024**：本科毕业（黄河科技学院），荣获优秀毕业生。
  * **2024**：开启硕士研究生生涯（上海第二工业大学），深耕 CV 与深度学习。
  * **2025**：入局工业界，于有孚网络主导企业级 AI 应用研发。
  * **2026**：专注全栈 Agent系统开发，独立交付多个商业化 MVP，探索 Token 出口套利。
  * **Future**：致力于成为 AI 时代的全栈独立创作者或高成长团队核心骨干。

### 📊 SECTION 8 — GitHub Dashboard（开源贡献看板）
* **设计与逻辑**：预留标准 GitHub REST/GraphQL API 接口。
* **展示内容**：
  * 实时同步的 GitHub Contributions 绿动阵列。
  * 核心仓库数量（Repos）与 Star 累计数。
  * 基于开源代码库自动解析的**技术栈占比雷达图**（Python/TypeScript/Vue）。

### ✉️ SECTION 9 — Contact Me（联系渠道与漏斗）
* **表单与信息**：
  * 信息矩阵：Email、GitHub 个人主页、LinkedIn、当前所在地（中国·上海）。
  * **高级互动表单**：支持用户直接在线留言（预留 Webhook/API 接收端）。
* **UI 效果**：表单边框采用悬停流光色带（Glow Border），提交按钮具备平滑的状态切换动画（Sending ➔ Success）。

### 📝 SECTION 10 — Footer（页脚）
* **内容**：
  * `Built with Next.js (App Router) & TailwindCSS`
  * `Powered by Advancements in AI Engineering`
  * `Copyright © 2026 Designed & Engineered by Fangming Mu`

---

## 5. 动画、交互与微动效规范
* **全局控制原则**：**克制、高级、具有呼吸感，绝不为了炫技而牺牲首屏加载速度。**
* **动效技术矩阵**：
  * **Framer Motion**：页面入场无缝淡入、组件 Scroll Reveal（下落/淡入显现）、Parallax 视差滚动。
  * **Canvas Elements**：首屏极轻量化的数学粒子网格，随鼠标移动产生微弱排斥/吸引效果。
  * **CSS Keyframes**：打字机序列（Typewriter Effect）、数字计时器累加（Number Counter）、磨砂玻璃微光流转。

---

## 6. 项目工程结构与规范
网站源代码需遵循严格的模块化设计，高内聚低耦合：
```bash
portfolio-mu/
├── app/                  # Next.js App Router 路由与页面入口
│   ├── layout.tsx        # 全局配置、全局 Meta、字体加载
│   ├── page.tsx          # 聚合单页（包含 Section 1 - 10）
│   └── sitemap.ts        # 动态站点地图生成
├── components/           # 跨页面的高复用基础原子组件
│   ├── ui/               # Shadcn UI 组件 (Button, Dialog, Card)
│   └── glow-cursor.tsx   # 鼠标跟随发光组件
├── sections/             # 网站核心业务板块 (Section 1 到 10 独立解耦)
│   ├── hero.tsx
│   ├── about.tsx
│   ├── tech-universe.tsx
│   └── projects.tsx
├── data/                 # 静态与 Mock 数据集
│   └── portfolioData.ts  # 存储项目、经历、技能树等核心静态文本
├── hooks/                # 常用自定义 React Hooks (如 useScrollActive)
├── lib/                  # 工具类函数 (如 utils.ts, cn 样式合并)
├── tailwind.config.js    # Tailwind 核心配置文件（定制暗黑主题、流光动效、深色调色盘）
└── README.md             # Vercel 一键部署与生产环境配置指南