import { Github, Linkedin, Instagram, Mail, ExternalLink } from "lucide-react";
import { FaJava, FaPython, FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiC, SiTailwindcss, SiFramer, SiMysql, SiMongodb, SiVite } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const profile = {
    name: "Aadyasha Panda",
    role: "Full Stack",
    tagline: "Building scalable digital experiences.",
    bio: "I specialize in building responsive, user-friendly web applications using modern technologies. Passionate about clean code, architecture, and solving real-world problems through innovative solutions.",
    location: "Berhampur, Odisha",
    email: "aadyashapanda07@gmail.com",
    social: [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/aadyasha-panda-098297374",
            icon: Linkedin,
        },

        {
            name: "Email",
            url: "mailto:aadyashapanda07@gmail.com",
            icon: Mail,
        },
    ],
};



export const skills = [
    {
        category: "Languages",
        items: [
            { name: "C", icon: SiC, color: "#A8B9CC" },
            { name: "Java", icon: FaJava, color: "#007396" },
            { name: "Python", icon: FaPython, color: "#3776AB" },
            { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
        ],
    },
    {
        category: "Frontend",
        items: [
            { name: "HTML", icon: FaHtml5, color: "#E34F26" },
            { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
            { name: "React", icon: FaReact, color: "#61DAFB" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
            { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
        ],
    },
    {
        category: "Backend & DB",
        items: [
            { name: "Node.js", icon: FaNodeJs, color: "#339933" },
            { name: "SQL", icon: FaDatabase, color: "#4479A1" },
            { name: "MySQL", icon: SiMysql, color: "#4479A1" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        ],
    },
    {
        category: "Tools",
        items: [
            { name: "Git", icon: FaGitAlt, color: "#F05032" },
            { name: "GitHub", icon: FaGithub, color: "#181717" },
            { name: "VS Code", icon: VscVscode, color: "#007ACC" },
            { name: "Vite", icon: SiVite, color: "#646CFF" },
        ],
    },
];

export const projects = [
    {
        title: "Nexus AI",
        description: "An intelligent task management ecosystem that uses predictive AI to optimize team velocity and automate workflow assignments.",
        tech: ["Next.js 14", "Python FastAPI", "OpenAI GPT-4", "Pinecone"],
        link: "#",
        github: "#",
        img: "/projects/nexus.png",
        results: "Reduced project delivery time by 40% for beta teams.",
        features: [
            "AI-driven task duration prediction",
            "Automated sprint planning based on velocity",
            "Natural Language Project querying",
            "Real-time team workload visualization"
        ]
    },
    {
        title: "Vortex Finance",
        description: "A high-frequency decentralized trading dashboard featuring real-time analytics and gas-optimized smart contract interactions.",
        tech: ["React.js", "Solidity", "Web3.js", "Tailwind CSS"],
        link: "#",
        github: "#",
        img: "/projects/vortex.png",
        results: "Processed $1M+ in testnet volume with <2s latency.",
        features: [
            "Real-time candlestick charting engine",
            "One-click flash loan integration",
            "Gas-optimized smart contract routing",
            "Institutional-grade portfolio analytics"
        ]
    },
    {
        title: "Echo Real-time",
        description: "A collaborative code editor and whiteboard platform designed for remote engineering teams to brainstorm and build simultaneously.",
        tech: ["Node.js", "Socket.io", "React Flow", "WebRTC"],
        link: "#",
        github: "#",
        img: "/projects/echo.png",
        results: "Supports 50+ concurrent users with <100ms sync latency.",
        features: [
            "Live multi-cursor code synchronization",
            "Integrated voice and video channels",
            "Infinite canvas whiteboard with mind-mapping",
            "Git-style version control for diagrams"
        ]
    },
];

export const education = [
    {
        degree: "B.Tech in Computer Science & Engineering",
        institution: "NIST University",
        year: "2023 – 2027",
        details: "Foundations of CS",
    },
    {
        degree: "Higher Secondary (XII)",
        institution: "SSVM NK Nagar",
        year: "2022",
        details: "CGPA: 8.5",
    },
];
