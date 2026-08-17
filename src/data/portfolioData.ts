import { Project, SkillCategory, TimelineItem, Achievement, Service } from '../types';

export const PERSONAL_INFO = {
  name: "Naitik Pandey",
  title: "AI & ML Student | Developer | Builder",
  headline: "I build intelligent applications, full-stack web experiences, and practical solutions using modern technologies.",
  email: "25amtics049@gmail.com",
  location: "India",
  education: "B.Tech — Artificial Intelligence & Machine Learning",
  status: "Available for Internships & Projects",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  aboutBio: [
    "I am an enthusiastic AI & ML undergraduate with a deep passion for building practical, end-to-end software systems. From training machine learning models to crafting responsive, high-performance web applications, I enjoy transforming complex problems into clean, scalable digital products.",
    "My focus lies at the intersection of Generative AI, backend architecture, and intuitive user experiences. I actively participate in hackathons, continuously build real-world side projects, and sharpen my core algorithmic and problem-solving skills."
  ],
  quickStats: [
    { label: "B.Tech Specialization", value: "AI & Machine Learning" },
    { label: "Core Projects Built", value: "8+ Completed" },
    { label: "Hackathons & Challenges", value: "Active Participant" },
    { label: "Continuous Learning", value: "DSA • ML • GenAI" },
  ],
  currentlyLearning: ["Advanced DSA in Java", "Machine Learning Pipelines", "Generative AI Agents", "FastAPI & Microservices"]
};

export const PROJECTS: Project[] = [
  {
    id: "nikai",
    title: "NikAI",
    tagline: "Full-Stack Intelligent AI Assistant for Learning, Coding & Research",
    description: "A comprehensive AI workspace featuring multi-modal intelligence, interactive study modes, automated quiz generation, coding diagnostics, and persistent session memory.",
    longDescription: "NikAI is an end-to-end AI productivity suite engineered for students, developers, and researchers. Built with a reactive React/Vite frontend and a high-performance Python FastAPI backend integrated with Google Gemini API, it provides specialized workspaces tailored to distinct academic and technical tasks.",
    category: "AI / ML",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Vite", "FastAPI", "Python", "Google Gemini", "SQLite", "Vercel", "Render"],
    featured: true,
    githubUrl: "https://github.com",
    liveUrl: "https://nikai-preview.demo",
    features: [
      "Multi-Mode Workspace: Coding Assistant, Research Summarizer, Study Guide, Quiz Generator",
      "Persistent Chat History & Session Management powered by SQLite",
      "Real-time streaming responses and syntax-highlighted code output",
      "Dynamic prompt engineering pipelines with Google Gemini model grounding",
      "Custom quiz generator converting dense notes into interactive tests"
    ],
    architecture: [
      "Client: React 19 + Tailwind CSS + Framer Motion (Vercel)",
      "Server: FastAPI asynchronous ASGI API server (Render)",
      "AI Engine: Google Gemini API integration with custom system instructions",
      "Storage: SQLite relational database for thread persistence and user sessions"
    ],
    metrics: [
      { label: "Modes Supported", value: "4 Workspaces" },
      { label: "Response Latency", value: "< 750ms" },
      { label: "Architecture", value: "FastAPI + Vite" }
    ]
  },
  {
    id: "neuralflow-ml",
    title: "NeuralFlow ML Studio",
    tagline: "Interactive Neural Network & Machine Learning Playground",
    description: "A visual simulation platform that allows developers to design feed-forward neural layers, visualize backpropagation loss curves, and test classification boundaries in real time.",
    category: "AI / ML",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1000&q=80",
    tags: ["Python", "Machine Learning", "JavaScript", "Canvas API", "NumPy"],
    githubUrl: "https://github.com",
    liveUrl: "https://neuralflow.demo",
    features: [
      "Interactive 2D decision boundary visualization with custom dataset generators",
      "Real-time weight matrix and gradient descent step tracking",
      "Configurable activation functions (ReLU, Sigmoid, Tanh, Softmax)",
      "Hyperparameter tuning panel (learning rate, epochs, batch size, momentum)"
    ],
    metrics: [
      { label: "Visualization", value: "60 FPS Canvas" },
      { label: "Model Type", value: "Custom MLP Engine" }
    ]
  },
  {
    id: "pulsehealth-ai",
    title: "PulseHealth Diagnostic Assistant",
    tagline: "Predictive Health Risk & Medical Metric Analyzer",
    description: "Machine learning-powered diagnostic risk assessment tool that processes vital indicators and provides interpretable health risk factor reports.",
    category: "AI / ML",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
    tags: ["Python", "FastAPI", "Scikit-Learn", "React", "Pandas"],
    githubUrl: "https://github.com",
    liveUrl: "https://pulsehealth.demo",
    features: [
      "Trained classification models for cardiovascular and diabetic risk indicators",
      "Explainable AI feature importance charts showing contributing variables",
      "Secure patient vital metric input with instant statistical validation",
      "Downloadable health assessment summary reports"
    ],
    metrics: [
      { label: "Accuracy", value: "94.2% Validation" },
      { label: "Inference Time", value: "45ms" }
    ]
  },
  {
    id: "devquery-engine",
    title: "DevQuery API Engine",
    tagline: "High-Throughput Developer Query & Code Snippet Indexer",
    description: "FastAPI REST service designed for instant technical documentation indexing, regex code search, and API request throttling.",
    category: "Backend",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
    tags: ["FastAPI", "Python", "SQLite", "REST APIs", "Docker"],
    githubUrl: "https://github.com",
    features: [
      "Asynchronous request pipeline handling parallel database queries",
      "Full-text search indexing on programming syntax patterns and docs",
      "Token bucket rate limiting and automated API key verification",
      "Swagger & ReDoc auto-generated schema documentation"
    ],
    metrics: [
      { label: "API Framework", value: "FastAPI ASGI" },
      { label: "Throughput", value: "1,200+ req/s" }
    ]
  },
  {
    id: "smartcampus-hub",
    title: "SmartCampus Academic Hub",
    tagline: "Centralized Resource & Study Collaborative Platform",
    description: "Full-stack university portal enabling student peers to share curated study notes, track assignment deadlines, and participate in academic discussion threads.",
    category: "Full-Stack",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "JavaScript", "ASP.NET Core", "MySQL", "REST APIs"],
    githubUrl: "https://github.com",
    liveUrl: "https://smartcampus.demo",
    features: [
      "Role-based authentication for students and course representatives",
      "Dynamic deadline reminders with calendar synchronization",
      "Tag-based academic resource repository with preview mode",
      "Structured MySQL database schema with relational integrity"
    ],
    metrics: [
      { label: "Database", value: "MySQL Relational" },
      { label: "Stack", value: "React + ASP.NET" }
    ]
  },
  {
    id: "codecraft-algorithms",
    title: "CodeCraft DSA Visualizer",
    tagline: "Interactive Algorithm & Data Structure Playground",
    description: "Educational tool implementing step-by-step visual execution for sorting, graph traversal (BFS/DFS), and tree operations with complexity analysis.",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1516116211227-bbc13c6041e0?auto=format&fit=crop&w=1000&q=80",
    tags: ["JavaScript", "HTML5 Canvas", "CSS3", "Algorithms"],
    githubUrl: "https://github.com",
    features: [
      "Visual step debugger with playback speed controls (0.25x to 4x)",
      "Time and space complexity breakdown for each algorithmic step",
      "Custom array inputs and randomized edge-case generators",
      "Implementations in Java, Python, and C alongside visualizations"
    ],
    metrics: [
      { label: "Algorithms", value: "18+ Visualized" },
      { label: "Languages", value: "Java / Python / C" }
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Artificial Intelligence & ML",
    id: "ai-ml",
    icon: "Brain",
    skills: [
      { name: "Artificial Intelligence", level: "Core", description: "Foundational AI algorithms, heuristics, search strategies, and knowledge representation." },
      { name: "Machine Learning", level: "Core", description: "Supervised and unsupervised learning, regression, classification, clustering, evaluation metrics." },
      { name: "Generative AI", level: "Advanced", description: "LLM orchestration, system prompting, context chaining, and multi-modal assistants." },
      { name: "Prompt Engineering", level: "Advanced", description: "Few-shot prompting, chain-of-thought formatting, JSON mode guarantees, safety guardrails." },
      { name: "Google Gemini API", level: "Advanced", description: "API integration, streaming inference, function calling, multi-modal vision inputs." }
    ]
  },
  {
    name: "Programming Languages",
    id: "languages",
    icon: "Code",
    skills: [
      { name: "Python", level: "Core", description: "Primary language for AI/ML modeling, FastAPI backends, data processing scripts, and automation." },
      { name: "Java", level: "Core", description: "Object-oriented software design, Data Structures & Algorithms, and robust enterprise foundations." },
      { name: "C", level: "Core", description: "Memory management, pointers, system-level programming fundamentals, and algorithmic efficiency." },
      { name: "JavaScript", level: "Advanced", description: "ES6+, asynchronous event loop, DOM manipulation, and modern web application logic." }
    ]
  },
  {
    name: "Web & Frontend",
    id: "frontend",
    icon: "Layout",
    skills: [
      { name: "React", level: "Advanced", description: "Hooks, state management, component lifecycles, custom hooks, and virtual DOM rendering." },
      { name: "HTML5 & CSS3", level: "Core", description: "Semantic markup, modern flexbox/grid architecture, animations, and accessible layouts." },
      { name: "Bootstrap & Tailwind", level: "Advanced", description: "Rapid utility-first styling, glassmorphism systems, and responsive design break-points." },
      { name: "Vite", level: "Advanced", description: "Fast bundler configuration, HMR pipelines, and modern frontend production builds." }
    ]
  },
  {
    name: "Backend & Systems",
    id: "backend",
    icon: "Server",
    skills: [
      { name: "FastAPI", level: "Advanced", description: "Asynchronous RESTful APIs, Pydantic data schemas, dependency injection, and auto OpenAPI." },
      { name: "ASP.NET Core", level: "Intermediate", description: "C# backend services, controllers, dependency injection, and secure middleware." },
      { name: "REST APIs", level: "Core", description: "RESTful architecture, JSON payload design, HTTP status standards, and authentication headers." }
    ]
  },
  {
    name: "Databases & Storage",
    id: "databases",
    icon: "Database",
    skills: [
      { name: "MySQL", level: "Core", description: "Relational database schema design, indexed queries, foreign keys, and normalized tables." },
      { name: "SQLite", level: "Core", description: "Lightweight embedded storage, file-based persistence for microservices and prototyping." }
    ]
  },
  {
    name: "Tools & Deployment",
    id: "tools",
    icon: "Terminal",
    skills: [
      { name: "Git & GitHub", level: "Core", description: "Version control workflows, branch management, pull requests, and collaborative repositories." },
      { name: "VS Code & IntelliJ", level: "Core", description: "Primary IDEs optimized for Python, Java, C, and frontend development workflows." },
      { name: "Vercel & Render", level: "Advanced", description: "Cloud deployments, CI/CD webhooks, environment management, and domain routing." }
    ]
  }
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: "step-6",
    period: "Present & Future",
    title: "Hackathons & Real-World AI Products",
    organization: "Innovating & Competing",
    description: "Building production-ready applications like NikAI, participating in hackathons like HackDevengers 1.0, and solving real user problems through full-stack AI integrations.",
    technologies: ["Google Gemini", "FastAPI", "React", "Cloud Deployment"],
    highlight: "HackDevengers 1.0 International Hackathon participant with NikAI",
    iconType: "hackathon"
  },
  {
    id: "step-5",
    period: "2024 - 2025",
    title: "AI & Generative AI Exploration",
    organization: "Advanced Studies",
    description: "Diving deep into Machine Learning algorithms, neural network fundamentals, prompt engineering techniques, and LLM APIs to build automated agents.",
    technologies: ["Python", "Machine Learning", "Scikit-Learn", "Prompt Engineering"],
    highlight: "Created predictive classifiers and specialized AI assistance flows",
    iconType: "ai"
  },
  {
    id: "step-4",
    period: "2023 - 2024",
    title: "Full-Stack Projects & Backend Systems",
    organization: "Project Development",
    description: "Transitioned to building interconnected applications using FastAPI, ASP.NET Core, SQLite, and MySQL to handle data persistence, API routing, and state synchronization.",
    technologies: ["FastAPI", "ASP.NET Core", "MySQL", "REST APIs"],
    highlight: "Architected multi-tier web applications with database persistence",
    iconType: "code"
  },
  {
    id: "step-3",
    period: "2023",
    title: "Modern Web Development",
    organization: "Frontend Mastery",
    description: "Mastered responsive UI design, component-driven development with React, modern CSS frameworks, and asynchronous data fetching patterns.",
    technologies: ["React", "JavaScript", "HTML/CSS", "Bootstrap"],
    highlight: "Developed interactive browser tools and responsive web interfaces",
    iconType: "web"
  },
  {
    id: "step-2",
    period: "2022 - 2023",
    title: "Programming Fundamentals & DSA",
    organization: "Foundational Coding",
    description: "Built strong foundations in computational logic, memory models, object-oriented principles, and algorithm efficiency in C, Java, and Python.",
    technologies: ["C", "Java", "Python", "Data Structures"],
    highlight: "Solved core data structure problems (arrays, trees, graphs, sorting)",
    iconType: "code"
  },
  {
    id: "step-1",
    period: "2022 - Present",
    title: "B.Tech in Artificial Intelligence & Machine Learning",
    organization: "University Degree",
    description: "Undergraduate engineering degree specializing in AI, Machine Learning, Applied Mathematics, and Computer Science fundamentals.",
    technologies: ["Artificial Intelligence", "Machine Learning", "Mathematics", "DSA"],
    highlight: "Formal academic training in cutting-edge intelligent systems",
    iconType: "academic"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "hackdevengers",
    title: "HackDevengers 1.0",
    event: "International Online Hackathon",
    date: "2024",
    role: "Lead Creator & Full-Stack Developer",
    project: "NikAI",
    description: "Engineered and submitted NikAI — an end-to-end full-stack AI assistant tailored for learning, coding, and dynamic quiz generation powered by FastAPI and Google Gemini.",
    badge: "International Hackathon Participant",
    tags: ["NikAI", "FastAPI", "Google Gemini", "React", "AI Assistant"],
    link: "https://github.com"
  },
  {
    id: "ai-certifications",
    title: "AI & ML Academic Milestone",
    event: "Departmental Honors & Technical Showcase",
    date: "2024",
    role: "AI & ML Student",
    project: "Predictive Models & Web Apps",
    description: "Recognized for building functional machine learning prototypes and demonstrating practical software architecture during project exhibitions.",
    badge: "Technical Showcase Highlight",
    tags: ["Machine Learning", "Python", "Problem Solving", "Academic"]
  },
  {
    id: "dsa-milestone",
    title: "Core Problem Solving & DSA Consistency",
    event: "Coding Platforms & Academic Lab",
    date: "Ongoing",
    role: "Competitive Learner",
    project: "Algorithmic Implementations",
    description: "Consistent problem-solving streak across Java, C, and Python data structure implementations including trees, sorting algorithms, and graphs.",
    badge: "Continuous Skill Growth",
    tags: ["Java", "C", "Algorithms", "DSA"]
  }
];

export const SERVICES: Service[] = [
  {
    id: "ai-genai",
    title: "AI & Generative AI",
    description: "Building intelligent applications and AI assistants leveraging modern LLM APIs, custom system prompts, and automated reasoning pipelines.",
    icon: "Sparkles",
    deliverables: ["Custom AI Assistants (NikAI)", "Prompt Engineering & Guardrails", "Multi-modal API Integrations", "Study & Research Summarizers"]
  },
  {
    id: "fullstack",
    title: "Full-Stack Development",
    description: "Creating complete web applications with reactive frontends, resilient backend APIs, and connected database persistence layers.",
    icon: "Layers",
    deliverables: ["React / Vite Single Page Applications", "Responsive UI/UX Layouts", "Client-Server State Synchronization", "End-to-End Deployment (Vercel/Render)"]
  },
  {
    id: "backend-api",
    title: "Backend Development & APIs",
    description: "Architecting clean, performant RESTful APIs and backend services using Python FastAPI and ASP.NET Core with structured data models.",
    icon: "Server",
    deliverables: ["FastAPI Asynchronous Microservices", "Pydantic Request/Response Validation", "SQLite & MySQL Database Schemas", "Swagger / OpenAPI Documentation"]
  },
  {
    id: "ui-ux",
    title: "UI/UX & Frontend Craft",
    description: "Designing modern, dark-mode technology interfaces with thoughtful typography, smooth animations, and high accessibility standards.",
    icon: "Palette",
    deliverables: ["Dark Futuristic Themes", "Glassmorphism & Micro-interactions", "Responsive Mobile-First Views", "Tailwind CSS Utility Architecture"]
  },
  {
    id: "problem-solving",
    title: "Problem Solving & DSA",
    description: "Turning complex academic and real-world algorithmic problems into clean, optimized, and maintainable software code.",
    icon: "Cpu",
    deliverables: ["Data Structure Implementations (Java/C/Python)", "Algorithmic Complexity Optimization", "Modular Code Refactoring", "Technical Debugging"]
  }
];
