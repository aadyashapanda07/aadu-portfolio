import { Github, Linkedin, Mail, ExternalLink, Sparkles, Terminal, Code2, Cpu, Globe, Star } from "lucide-react";
import { FaJava, FaPython, FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiC, SiTailwindcss, SiFramer, SiMysql, SiMongodb, SiVite, SiNextdotjs, SiExpress, SiFastapi, SiThreedotjs, SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const profile = {
    name: "Aadyasha Panda",
    role: "Full Stack Developer",
    titleRoles: [
        "Full Stack Developer",
        "AI & Web Solutions Engineer",
        "Creative 3D & WebGL Explorer",
        "B.Tech CSE @ NIST University"
    ],
    tagline: "Engineering scalable web platforms, intelligent AI tools, and immersive digital experiences.",
    bio: "Computer Science student at NIST University with a strong foundation in modern full-stack development, AI systems, and interactive 3D web interfaces. Driven by architectural cleanliness, intuitive user experiences, and high-performance engineering.",
    location: "Berhampur, Odisha, India",
    email: "aadyashapanda07@gmail.com",
    gmailUrl: "https://mail.google.com/mail/?view=cm&fs=1&to=aadyashapanda07@gmail.com",
    github: "https://github.com/aadyashapanda07",
    linkedin: "https://www.linkedin.com/in/aadyasha-panda-098297374",
    resumeUrl: "/resume.pdf",
    availability: "Available for Internships & Projects",
    stats: [
        { label: "Featured Projects", value: "5" },
        { label: "Tech Stack Tools", value: "15+" },
        { label: "B.Tech CSE", value: "NIST '27" },
        { label: "Code Quality", value: "100%" }
    ],
    social: [
        {
            name: "GitHub",
            url: "https://github.com/aadyashapanda07",
            icon: Github,
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/aadyasha-panda-098297374",
            icon: Linkedin,
        },
        {
            name: "Email",
            url: "https://mail.google.com/mail/?view=cm&fs=1&to=aadyashapanda07@gmail.com",
            icon: Mail,
        },
    ],
};

export const skills = [
    {
        category: "Languages",
        description: "Core programming languages for algorithmic problem solving and software development",
        items: [
            { name: "Java", level: "Advanced", icon: FaJava, color: "#007396" },
            { name: "Python", level: "Advanced", icon: FaPython, color: "#3776AB" },
            { name: "JavaScript", level: "Advanced", icon: FaJs, color: "#F7DF1E" },
            { name: "C", level: "Intermediate", icon: SiC, color: "#A8B9CC" },
        ],
    },
    {
        category: "Frontend",
        description: "Modern UI/UX libraries and creative rendering frameworks",
        items: [
            { name: "React", level: "Advanced", icon: FaReact, color: "#61DAFB" },
            { name: "Next.js", level: "Intermediate", icon: SiNextdotjs, color: "#ffffff" },
            { name: "Tailwind CSS", level: "Advanced", icon: SiTailwindcss, color: "#06B6D4" },
            { name: "Three.js", level: "Intermediate", icon: SiThreedotjs, color: "#049EF4" },
            { name: "Framer Motion", level: "Advanced", icon: SiFramer, color: "#0055FF" },
            { name: "HTML5", level: "Advanced", icon: FaHtml5, color: "#E34F26" },
            { name: "CSS3", level: "Advanced", icon: FaCss3Alt, color: "#1572B6" },
        ],
    },
    {
        category: "Backend & Databases",
        description: "Server architecture, REST APIs, and database engineering",
        items: [
            { name: "Node.js", level: "Advanced", icon: FaNodeJs, color: "#339933" },
            { name: "Express.js", level: "Advanced", icon: SiExpress, color: "#828282" },
            { name: "FastAPI", level: "Intermediate", icon: SiFastapi, color: "#009688" },
            { name: "MongoDB", level: "Advanced", icon: SiMongodb, color: "#47A248" },
            { name: "MySQL", level: "Intermediate", icon: SiMysql, color: "#4479A1" },
            { name: "SQL", level: "Intermediate", icon: FaDatabase, color: "#336791" },
        ],
    },
    {
        category: "Tools & DevOps",
        description: "Development environment, version control, and workflow tooling",
        items: [
            { name: "Git", level: "Advanced", icon: FaGitAlt, color: "#F05032" },
            { name: "GitHub", level: "Advanced", icon: FaGithub, color: "#181717" },
            { name: "VS Code", level: "Advanced", icon: VscVscode, color: "#007ACC" },
            { name: "Vite", level: "Advanced", icon: SiVite, color: "#646CFF" },
            { name: "Postman", level: "Intermediate", icon: SiPostman, color: "#FF6C37" },
        ],
    },
];

export const projectCategories = [
    "All",
    "AI & Full-Stack",
    "Web Applications",
    "Creative & 3D"
];

export const projects = [
    {
        title: "Nexus AI",
        category: "AI & Full-Stack",
        tagline: "Intelligent Task Orchestration & Team Velocity Engine",
        description: "An intelligent task management ecosystem that leverages predictive AI models to forecast project velocity, balance team workloads, and automate workflow task assignment in real-time.",
        tech: ["Next.js 14", "Python FastAPI", "OpenAI GPT-4", "Pinecone", "Tailwind CSS"],
        link: "https://nexus-ai-bice-one.vercel.app/",
        github: "https://github.com/aadyashapanda07/-Nexus-AI",
        img: "/projects/nexus.png",
        results: "Reduced project delivery cycle time by 40% for beta teams with predictive task scheduling.",
        features: [
            "AI-driven task duration and sprint effort prediction",
            "Automated sprint planning based on team historical velocity",
            "Natural Language Project and roadmap querying",
            "Real-time team workload and bottleneck visualization"
        ]
    },
    {
        title: "Campus2Corporate",
        category: "Web Applications",
        tagline: "AI-Enhanced Career Transition & Placement Suite",
        description: "An all-in-one placement preparation portal engineered for engineering students, featuring an AI Resume Analyzer, technical mock interview simulation, coding challenge arena, and curated aptitude modules.",
        tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Node.js", "Lucide Icons"],
        link: "https://campus2corporate-pearl.vercel.app/",
        github: "https://github.com/aadyashapanda07/campus2corporate",
        img: "/projects/echo.png",
        results: "Complete recruitment readiness platform featuring ATS scoring, coding IDE, and mock interviews.",
        features: [
            "AI Resume Analyzer with ATS score benchmark and keyword suggestions",
            "Interactive technical mock interview scenario practice",
            "Curated algorithmic coding challenge arena with instant evaluation",
            "Comprehensive aptitude modules and student progress tracking"
        ]
    },
    {
        title: "FinAI Platform",
        category: "AI & Full-Stack",
        tagline: "AI-Powered Personal Finance & Wealth Intelligence",
        description: "A comprehensive full-stack personal finance application integrating automated budget tracking, multi-account analytics, intelligent expense categorization, and smart receipt ingestion.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Chart.js"],
        link: "https://finai-platform-kappa.vercel.app/",
        github: "https://github.com/aadyashapanda07/finai-platform",
        img: "/projects/vortex.png",
        results: "Seamlessly parses receipts and delivers actionable spending anomaly alerts in <2 seconds.",
        features: [
            "Automated transaction classification using custom rule & AI heuristics",
            "Interactive cash-flow forecasting and visual net worth telemetry",
            "Multi-account balance aggregation with secure backend sessions",
            "Receipt and invoice document parsing pipeline"
        ]
    },
    {
        title: "Ramayana 3D",
        category: "Creative & 3D",
        tagline: "Cinematic Scroll-Driven WebGL & Three.js Experience",
        description: "A single-page, cinematic scroll-driven 3D experience built with Three.js. Features procedural textures, custom GLSL lighting shaders, rigged low-poly figure animations, and 60 FPS camera flight paths.",
        tech: ["Three.js", "WebGL", "GLSL Shaders", "JavaScript", "HTML5 Canvas"],
        link: "https://ramayana-3d.vercel.app/",
        github: "https://github.com/aadyashapanda07/ramayana-3d",
        img: "/projects/nexus.png",
        results: "Delivers smooth 60 FPS scroll-driven 3D camera flight paths with zero external model bloat.",
        features: [
            "Procedural terrain generation with custom lighting and fog shaders",
            "Rigged low-poly figure animations (walk cycles, flying Hanuman, sena crowd)",
            "Scroll-driven Catmull-Rom spline camera flight trajectory across 8 chapters",
            "Zero build-step dependency with lightweight canvas-generated procedural textures"
        ]
    },
    {
        title: "Currency Converter",
        category: "Web Applications",
        isFirstProject: true,
        tagline: "My First Ever Web Project ⭐ Milestone",
        badge: "First Project",
        description: "The very first project that kicked off my web development journey! A fast and responsive currency converter fetching live global exchange rates with clean conversion calculations and an intuitive, user-friendly UI.",
        tech: ["JavaScript", "Fetch API", "HTML5", "CSS3", "Exchange Rate API"],
        link: "https://currency-converter-five-eta.vercel.app/",
        github: "https://github.com/aadyashapanda07/currency-converter",
        img: "/projects/vortex.png",
        results: "My foundational milestone that sparked my passion for frontend engineering and modern web development.",
        features: [
            "Real-time currency exchange rates via REST API integration",
            "Multi-currency conversion with automatic flag and currency code mapping",
            "Instant two-way conversion calculations with responsive layout",
            "Where it all began — foundational milestone project"
        ]
    }
];

export const education = [
    {
        degree: "B.Tech in Computer Science & Engineering",
        institution: "NIST University",
        year: "2023 – 2027",
        details: "Focus: Data Structures & Algorithms, Full Stack Web Development, Database Management Systems, AI Principles.",
        badge: "Undergraduate"
    },
    {
        degree: "Higher Secondary (Class XII)",
        institution: "SSVM NK Nagar",
        year: "2022",
        details: "Score: CGPA 8.5 / 10 | Major in Science (Physics, Chemistry, Mathematics)",
        badge: "Higher Secondary"
    },
];

export const highlights = [
    {
        title: "Full-Stack Development",
        desc: "Designing and building complete web applications from database schema to responsive, animated frontends.",
        icon: Code2
    },
    {
        title: "AI Integration & Tools",
        desc: "Incorporating LLMs, Gemini APIs, and smart recommendation pipelines into functional consumer apps.",
        icon: Cpu
    },
    {
        title: "3D & Creative Web",
        desc: "Crafting immersive 3D WebGL experiences and physics animations with Three.js and custom shaders.",
        icon: Globe
    }
];

export const chatSuggestions = [
    "Tell me about your top projects 🚀",
    "What is your tech stack? 🛠️",
    "Tell me about your first project! ⭐",
    "How can I contact or hire you? 💼"
];
