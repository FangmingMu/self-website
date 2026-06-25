export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  details: string[]
  architecture: string // brief ASCII or visual representation description
  tech: string[]
}

export interface Education {
  degree: string
  school: string
  major: string
  period: string
  description: string
}

export interface SkillNode {
  name: string
  category: "AI Engineering" | "Backend" | "Frontend" | "AI Models" | "Deep Learning"
  level: number // 1 to 5
}

export interface Experience {
  company: string
  role: string
  period: string
  points: string[]
}

export interface JourneyMilestone {
  year: string
  title: string
  description: string
}

export interface PortfolioData {
  personalInfo: {
    name: string
    englishName: string
    titles: string[]
    slogan: string
    subtitle: string
    location: string
    email: string
    github: string
    phone: string
  }
  stats: {
    label: string
    value: string
    targetNum: number
    suffix: string
  }[]
  education: Education[]
  skills: SkillNode[]
  projects: Project[]
  experience: Experience[]
  research: {
    title: string
    abstract: string
    metrics: { label: string; value: string }[]
    details: string[]
  }
  journey: JourneyMilestone[]
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "穆芳铭",
    englishName: "Fangming Mu",
    titles: ["AI Engineer", "Agent Developer", "AIGC Engineer"],
    slogan: "Building Intelligent Systems Beyond Chatbots.",
    subtitle: "专注 Agent / RAG / AIGC / AI Engineering，致力于构建生产级、可落地的智能系统。",
    location: "中国 · 上海",
    email: "1445450620@qq.com",
    github: "https://github.com/FangmingMu",
    phone: "18530362073",
  },
  stats: [
    { label: "Years Coding", value: "5+", targetNum: 5, suffix: "+" },
    { label: "Projects Deployed", value: "10+", targetNum: 10, suffix: "+" },
    { label: "Papers/Research", value: "1+", targetNum: 1, suffix: "+" },
    { label: "AI Tokens Processed", value: "100M+", targetNum: 100, suffix: "M+" },
  ],
  education: [
    {
      degree: "硕士研究生",
      school: "上海第二工业大学",
      major: "计算机技术 / 研二在读",
      period: "2024 - 至今",
      description: "深耕计算机视觉（CV）、行人重识别（ReID）及深度学习算法研究，并将其与前沿大模型工程进行深度结合。",
    },
    {
      degree: "本科",
      school: "黄河科技学院",
      major: "计算机科学与技术",
      period: "2020 - 2024",
      description: "主修操作系统、数据结构、算法分析、软件工程等核心课程，荣获优秀毕业生称号，建立了坚实的系统级编程基础。",
    },
  ],
  skills: [
    // AI Engineering
    { name: "LangChain", category: "AI Engineering", level: 5 },
    { name: "LangGraph", category: "AI Engineering", level: 5 },
    { name: "Hybrid RAG", category: "AI Engineering", level: 5 },
    { name: "Agentic Workflows", category: "AI Engineering", level: 5 },
    { name: "Prompt Engineering", category: "AI Engineering", level: 5 },
    { name: "Ragas (评测)", category: "AI Engineering", level: 4 },

    // Backend Ecosystem
    { name: "Python", category: "Backend", level: 5 },
    { name: "FastAPI", category: "Backend", level: 5 },
    { name: "Flask", category: "Backend", level: 4 },
    { name: "SQLite", category: "Backend", level: 4 },
    { name: "MySQL", category: "Backend", level: 4 },

    // Frontend Engineering
    { name: "Next.js", category: "Frontend", level: 5 },
    { name: "TypeScript", category: "Frontend", level: 5 },
    { name: "TailwindCSS", category: "Frontend", level: 5 },
    { name: "Vue3", category: "Frontend", level: 4 },
    { name: "Streamlit", category: "Frontend", level: 5 },
    { name: "UniApp", category: "Frontend", level: 4 },

    // AI Models
    { name: "OpenAI", category: "AI Models", level: 5 },
    { name: "Gemini", category: "AI Models", level: 4 },
    { name: "GLM-4", category: "AI Models", level: 4 },
    { name: "Qwen", category: "AI Models", level: 5 },

    // Deep Learning / Research
    { name: "PyTorch", category: "Deep Learning", level: 5 },
    { name: "CNN", category: "Deep Learning", level: 5 },
    { name: "Transformer", category: "Deep Learning", level: 4 },
    { name: "Person ReID", category: "Deep Learning", level: 5 },
  ],
  projects: [
    {
      id: "enterprise-it-agent",
      title: "Enterprise IT Agent",
      subtitle: "基于 LangGraph 的企业级智能 IT 运维与知识检索体",
      description: "构建了基于 DAG（有向无环图）的复杂状态机控制流，引入 Human-in-the-loop（人工要件介入）机制，并基于 Ragas 搭建了严谨的 RAG 评测体系。",
      details: [
        "利用 LangGraph 建立灵活的任务执行状态机，通过状态合并与分支回溯处理复杂的 IT 故障排查逻辑。",
        "引入 Human-in-the-loop 机制，针对高危 IT 操作（如服务器重启、权限修改）增加人工确认节点，保障线上安全。",
        "设计 Hybrid RAG（混合检索增强生成）管道，融合 BM25 稀疏检索与密集向量检索，利用重排（Rerank）提升相关文档 Top-K 检索精度。",
        "基于 Ragas 建立多维评估指标，自动化评测 RAG 系统在忠实度（Faithfulness）、答案相关性（Answer Relevance）等维度的表现。"
      ],
      architecture: "User -> API Gateway -> LangGraph State Controller -> (Hybrid RAG Pipeline / Human-in-the-loop Node) -> LLM Responder -> Ragas Monitor",
      tech: ["LangGraph", "FastAPI", "Hybrid RAG", "SQLite", "Ragas"]
    },
    {
      id: "ai-fitness-assistant",
      title: "AI Fitness Assistant",
      subtitle: "独立跑通商业闭环的生产级 AI 健身与膳食助手",
      description: "实现生产级低延迟流式输出（Streaming Output），独立跑通商业化闭环，自研激活码分发与鉴权管理系统。",
      details: [
        "基于 Qwen 大模型与 Streamlit 构建极简交互界面，设计科学的健身计划与膳食配比推荐 Prompt 链。",
        "优化大模型响应管道，支持流式渲染（Server-Sent Events），将首字响应时间（TTFT）降低至 200ms 以内。",
        "自研激活码发放、验证及卡密登录系统，使用加密 Token 鉴权，实现完全独立自主的商业化闭环。",
        "接入轻量化支付和订单状态回调，保障商业闭环的安全稳定性与自动发货率。"
      ],
      architecture: "User (Streamlit) -> Auth API -> Activation Validator -> LLM Stream Bridge (SSE) -> Real-time Output Panel",
      tech: ["Qwen", "Streamlit", "AIGC Ecosystem", "Python", "SSE Flow"]
    },
    {
      id: "agentic-news-workflow",
      title: "Agentic News Workflow",
      subtitle: "多智能体协同的自动化新闻采编与翻译分发流水线",
      description: "多智能体协同流水线。实现全网自动化垂直抓取、高质量跨国翻译、基于 LLM 的事实与内容核验、以及爆款标题多模态生成。",
      details: [
        "基于多智能体（Multi-Agent）角色划分，设计了采集、翻译、校对、改写、排版五个协同 Agent 节点。",
        "垂直抓取全球主要科技媒体源，结合异步并发提速爬虫，并自动清理非结构化噪声干扰。",
        "利用大模型上下文学习（In-Context Learning）和术语库映射，将外语科技新闻翻译为地道的高质量中文。",
        "利用核验智能体（Fact-checking Agent）进行跨源交叉验证，标记不可信内容；并结合爆款逻辑自动生成极具吸引力的多模态标题与配图提示。"
      ],
      architecture: "News Scraper -> Crawler Queue -> Translation Agent -> Fact-Check Agent -> Title/Image Gen Agent -> Target CMS",
      tech: ["LangGraph", "Python", "Multi-Agent System", "Web Scraping"]
    },
    {
      id: "reid-research-project",
      title: "ReID Research Project",
      subtitle: "针对跨域行人重识别（ReID）的深度卷积与损失融合算法研究",
      description: "行人重识别领域的尖端研究，提出优化 MFM (Max-Feature-Map) 机制，基于 LSMS PB 等数据集进行全流程构建与模型训练，成果已形成学术论文并外审。",
      details: [
        "针对行人重识别（ReID）中由于光照、视角、遮挡引起的图像质量退化问题进行核心攻关。",
        "基于 PCB（Part-based Convolutional Baseline）网络架构，提出优化后的 MFM 机制以增强局部判别性特征表达。",
        "设计融合损失函数（Fusion-Loss），结合 Metric Learning（度量学习）的三元组损失（Triplet Loss）与 Cross-Entropy 损失，优化高维特征映射空间。",
        "在主流学术公开数据集上进行训练与消融实验，模型 Rank-1 指标达到 93.29%，mAP 指标达到 81.75%，成果已撰写为学术论文并进入同行外审阶段。"
      ],
      architecture: "Query Image -> CNN Backbone (PCB + Custom MFM) -> Dynamic Local Feature Vectors -> Metric Mapping Space (Fusion-Loss) -> Ranking Gallery Results",
      tech: ["PyTorch", "PCB", "Fusion-Loss", "Metric Learning", "MFM"]
    }
  ],
  experience: [
    {
      company: "上海有孚网络科技有限公司 (Yovole Network)",
      role: "AI 应用研发实习生",
      period: "2025 - 至今",
      points: [
        "在团队中全面推行 Spec-Driven Development（规范驱动开发）与行为驱动开发（BDD），基于 OpenSpec 规范设计前后端契约，使开发效率提升 30%。",
        "采用 FastAPI 异步框架重构大模型中间件服务，显著提升高并发流式输出下的服务稳定度。",
        "基于 UniApp 配合大模型接口，高效交付跨 Android/iOS/微信小程序等多平台的 AI 应用界面，支持流式文本渲染与富媒体展现。"
      ]
    }
  ],
  research: {
    title: "跨域行人重识别 (Person ReID) 局部特征增强算法研究",
    abstract: "行人重识别旨在利用计算机视觉技术在跨摄像头的非重叠视域下检索特定行人的图像。本研究聚焦于基于局部特征表达（PCB）的网络基线，通过引入改进的 Max-Feature-Map (MFM) 特征选择层以及设计更鲁棒的融合损失函数（Fusion-Loss），在有效抑制噪声的同时增强模型对姿态变化与视角偏差的域自适应表现力。",
    metrics: [
      { label: "Rank-1 Accuracy", value: "93.29%" },
      { label: "mAP (Mean Average Precision)", value: "81.75%" }
    ],
    details: [
      "深度优化 MFM (Max-Feature-Map) 结构，提供极其稀疏但信息密度极高的深层神经元响应，有效滤除环境干扰。",
      "结合三元组损失（Triplet Loss）与分类中心损失，拉近同类样本距离，推远异类样本界限，确保高斯聚类紧凑度。",
      "在 Market-1501, DukeMTMC-reID 等跨域数据集上取得同等模型大小下的 SOTA 性能。"
    ]
  },
  journey: [
    {
      year: "2020",
      title: "启程与奠基",
      description: "初识编程，构建首行代码，建立扎实的计算机基础，并逐步对 Linux 系统、Python 和数据结构产生浓厚兴趣。"
    },
    {
      year: "2024",
      title: "本科毕业与荣誉",
      description: "完成黄河科技学院本科（计算机科学与技术）学业，荣获优秀毕业生。在毕业设计中初涉深度学习，坚定了 AI 方向。"
    },
    {
      year: "2024",
      title: "学术深造与 CV 深耕",
      description: "考入上海第二工业大学攻读计算机技术硕士学位。进入实验室深深扎根计算机视觉（CV）与度量学习，聚焦跨域行人重识别核心痛点。"
    },
    {
      year: "2025",
      title: "主导工业界 AI 研发",
      description: "加入有孚网络（Yovole）担任 AI 应用开发实习生。在工业级场景全面引入大语言模型（LLM）、智能体（Agent）工作流，主导 OpenSpec 规范设计与实践落地。"
    },
    {
      year: "2026",
      title: "全栈创作与 MVP 商业探索",
      description: "深入研究 LangGraph 状态机及混合检索 RAG。独立开发多款商业化 MVP 产品，跑通流式渲染（SSE）和卡密套现商业闭环，完成技术向商业价值的敏捷转化。"
    },
    {
      year: "Future",
      title: "未来愿景",
      description: "致力于成为 AI 时代的高能全栈独立创作者或高成长团队的核心骨干，设计并交付兼具极客美学与极佳体验的智能体生产系统。"
    }
  ]
}
