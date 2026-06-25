# Fangming Mu 个人极客简历与作品集网站

这是一个为 **Fangming Mu** 量身打造、极具现代极客美学与高端人机交互的个人简历及作品集网站。项目基于 **Next.js 16 (App Router)** 和 **TypeScript** 开发，结合了高性能的 Web 交互动效，提供全响应式、丝滑且视觉震撼的浏览体验。

---

## 🌌 核心特色与交互动效

本项目不仅是一个静态简历展示，更是一个融合了多种人机交互科技感特效的数字空间：

### 1. 🌟 璀璨 Canvas 星空与鼠标星云背景 (Hero Section)
* **轻量高性能星群**：底层由原生 Canvas 2D 驱动，在背景中渲染 `120` 颗高密度、微弱连线的群星（粒子），避免了 3D 着色器造成的 GPU 高负载。
* **跟随星云光圈**：鼠标所到之处，Canvas 会在其下方实时渲染一个 `240px` 半径的多彩放射状渐变（Radial Gradient）光晕（高亮青色到紫色的过渡），形成一团跟随鼠标飘动的微亮星云。
* **避障与手势连线网络**：鼠标具有 `180px` 半径的粒子推开排斥力（1.5 倍强度）。同时，当连线落在鼠标 `180px` 范围内时，连线会自动从暗白渐变过渡到高亮青色（Cyan），并且透明度提升，实现随手势实时点亮星空网络的效果。

### 2. 🌊 英文姓名“蓝色分立波纹”起伏 (Hero Title)
* **独立字母 spring 涟漪**：当鼠标划过大标题的英文字母时，由 Framer Motion 物理弹簧引擎（stiffness = 300, damping = 15）驱动，鼠标下方的字母会精准向上跳起 `-18px`（放大 1.2 倍）并高亮为青蓝色（`#06b6d4`）。
* **协同梯次过渡**：相邻的字母会根据索引差值，依次呈梯度微弹起并向白色淡化（`#67e8f9` -> `#a5f3fc` -> `#ecfeff` -> 白色），掠过时产生清爽、活泼的蓝色琴弦涟漪。
* **防频闪整体容器**：大标题 H1 容器统一监听 `onMouseLeave` 以防鼠标进入字母缝隙时产生高频抖动或闪烁。

### 3. ☄️ 交互式技能宇宙星图 (Tech Universe)
* **星图共鸣**：基于 2D 坐标系将技能节点散落为星图。当鼠标悬停在某一具体技能上时，会亮起同类别（AI Engineering、Backend、Frontend、AI Models、Deep Learning）内部所有技术节点之间的共鸣黄色连线网。
* **前沿节点扩充**：在 `AI Models` 分类中加入了 `Codex`、`Antigravity` 和 `Claude Code` 等 AI 辅助开发工具与模型节点，排版均衡美观。

### 4. ✨ 纯 CSS 驱动卡片发光影效 (Projects Section)
* **1px 渐变呼吸边框**：Projects 板块的卡片去除了多余的指针监听 JS 计算，采用纯 CSS Hover 驱动。鼠标悬停时，卡片四周 1px 极细的蓝紫粉多彩渐变边框（`.edge-light`）整体亮起。
* **环境氛围背影**：在卡片后方投射一圈 `25px` 高斯模糊的渐变氛围投影，给项目卡片带来非常有质感的三维立体呼吸感。

---

## 🛠️ 技术栈 (Tech Stack)

* **核心框架**：Next.js 16.2 (React 19, App Router)
* **开发语言**：TypeScript
* **样式系统**：TailwindCSS v4, Vanilla CSS
* **动效引擎**：Framer Motion (用于字母 spring 与 SVG 连线动画) + HTML5 Canvas 2D API (用于背景星空)
* **图标库**：Lucide React

---

## 📂 项目目录结构

```text
portfolio-mu/
├── app/                  # Next.js 页面与全局配置入口
│   ├── favicon.ico
│   ├── globals.css       # 全局样式，包含自定义卡片发光与动画类
│   ├── layout.tsx        # 根布局，配置了默认字体 fallback 方案
│   └── page.tsx          # 网站主页，组装所有板块，提供流畅的原生滚动
├── components/           # 通用交互组件
│   ├── border-glow.tsx   # 纯 CSS 驱动的多彩发光卡片容器
│   └── glow-cursor.tsx   # 随指针缓动移动的渐变发光鼠标圆点
├── data/                 # 网站核心静态数据
│   └── portfolioData.ts  # 个人简介、项目、经历、联系方式等所有数据源
├── public/               # 静态资源
│   └── 个人简历.pdf       # 简历 PDF 下载文件
├── sections/             # 各功能板块组件
│   ├── hero.tsx          # 首屏（ Canvas 背景、姓名 Hover、Typewriter 动效）
│   ├── about.tsx         # 技术成长与故事
│   ├── tech-universe.tsx # 交互式技能宇宙星图
│   ├── projects.tsx      # 项目作品集卡片（支持点击弹窗查看架构与交付细节）
│   ├── experience.tsx    # 职业经历与交付成果
│   ├── research.tsx      # 科研论文与学术板块
│   ├── journey.tsx       # 学习与研究里程碑时间轴
│   └── contact.tsx       # 联络信息矩阵与底部页脚
├── tsconfig.json         # TypeScript 配置文件
├── package.json          # 项目依赖与运行脚本
└── README.md             # 本说明文档
```

---

## 🚀 本地开发与构建指南

### 1. 安装项目依赖
在项目根目录运行以下命令来安装所有依赖包：
```bash
npm install
```

### 2. 启动本地开发服务器
运行开发服务，并在浏览器中打开 [http://localhost:3000](http://localhost:3000) 预览：
```bash
npm run dev
```

### 3. 执行生产级静态打包
执行生产编译打包，验证 TypeScript 类型检查与页面静态预渲染（Prerender）：
```bash
npm run build
```

### 4. 预览本地静态包
编译成功后，可以在本地运行生成的静态打包文件：
```bash
npm start
```

---

## ✍️ 如何修改和定制内容？

本项目采用了**数据与渲染分离**的原则。您不需要深入修改 React/TypeScript 渲染代码，只需要修改 `data/portfolioData.ts` 中的数据，即可完成个人网站的全部内容定制：

1. **基本信息修改**：在 `portfolioData.personalInfo` 中更新英文名、邮箱、电话等。
2. **简历更换**：将您最新的 PDF 简历命名为 `个人简历.pdf` 并替换 `/public/` 目录下的同名文件，页面上的“下载简历”按钮会自动链接到新 PDF。
3. **项目库更新**：在 `portfolioData.projects` 数组中添加、删除或修改项目标题、介绍、技术标签以及系统架构与核心功能。
4. **经历与文章**：在 `portfolioData.experiences`、`portfolioData.researchPapers`、`portfolioData.journey` 中直接修改对应的内容，时间轴和列表将自动重新计算和渲染。

---

## 📄 开源许可证

本项目使用 **MIT 许可证**，欢迎自由定制与修改。
