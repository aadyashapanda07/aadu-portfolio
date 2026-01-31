import { Github, Linkedin, Instagram, Mail, ExternalLink } from "lucide-react";

export const profile = {
    name: "Aadyasha Panda",
    role: "Frontend Developer",
    tagline: "Building digital experiences that matter.",
    bio: "Currently a B.Tech CSE student at NIST University. I specialize in building responsive, user-friendly web applications. Passionate about clean code, modern design, and solving real-world problems through technology.",
    location: "Berhampur, Odisha",
    email: "aadyashapanda07@gmail.com",
    social: [
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/aadyasha-panda",
            icon: Linkedin,
        },
        {
            name: "Instagram",
            url: "https://instagram.com/aadyashapanda07",
            icon: Instagram,
        },
        {
            name: "Email",
            url: "mailto:aadyashapanda07@gmail.com",
            icon: Mail,
        },
    ],
};

export const skills = [
    { category: "Languages", items: ["C", "Java", "Python", "JavaScript"] },
    { category: "Frontend", items: ["HTML", "CSS", "React", "Tailwind CSS", "Framer Motion"] },
    { category: "Backend & DB", items: ["Node.js", "SQL", "MySQL", "MongoDB"] },
    { category: "Tools", items: ["Git", "GitHub", "VS Code", "Vite"] },
];

export const projects = [
    {
        title: "Currency Converter",
        description: "A real-time currency conversion tool with a clean, responsive interface.",
        tech: ["HTML", "CSS", "JavaScript", "API"],
        link: "#", // Placeholder as link wasn't extracted
        github: "#",
    },
    {
        title: "Amazon Clone",
        description: "A functional frontend replica of Amazon's e-commerce platform.",
        tech: ["HTML", "CSS"],
        link: "#",
        github: "#",
    },
    {
        title: "Netflix Clone",
        description: "Responsive streaming service interface featuring iconic Netflix design.",
        tech: ["HTML", "CSS"],
        link: "#",
        github: "#",
    },
    {
        title: "Tic-Tac-Toe",
        description: "Interactive classic game with logic for win detection and replay ability.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "#",
        github: "#",
    },
];

export const education = [
    {
        degree: "B.Tech in Computer Science & Engineering",
        institution: "NIST University",
        year: "2023 – 2027",
        details: "Currently pursuing.",
    },
    {
        degree: "Higher Secondary (XII)",
        institution: "SSVM NK Nagar",
        year: "2022",
        details: "CGPA: 8.5",
    },
];
