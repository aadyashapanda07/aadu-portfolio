import { profile, projects, skills, education, experience, extracurricular } from "../data.js";

// Comprehensive intelligent response engine for Aadyasha Panda's personal chatbot
export function getPersonalBotResponse(query) {
    if (!query || typeof query !== "string") {
        return "Hey there! 👋 I'm Aadyasha's personal AI chatbot. Ask me anything about her projects, tech stack, experience at csm.tech, or how to contact her!";
    }

    const q = query.toLowerCase().trim();

    // 1. Greetings & Pleasantries
    if (/^(hi|hello|hey|heyy|heya|hola|namaste|pranam|sup|yo|greetings)\b/i.test(q) || q === "hi" || q === "hello") {
        return `Hey there! 👋 Welcome to Aadyasha's portfolio!

I'm her personal AI assistant. Here are a few things you can ask me:
• 🚀 Top featured projects (Nexus AI, Ramayana 3D, FinAI, etc.)
• 🛠️ Core technical skills & programming languages
• 💼 Work experience & internship at csm.tech
• 🎓 Education at NIST University & CGPA
• 📄 How to download her official resume
• 📞 How to contact or hire Aadyasha

What would you like to know?`;
    }

    if (/how are you|kaise ho|kaisa hai|how's it going|whats up|what's up/i.test(q)) {
        return `I'm doing fantastic, thank you for asking! 😊 I'm always here and ready to tell you all about Aadyasha's coding journey, projects, and skills. How can I help you today?`;
    }

    if (/who are you|what is your name|who made you|koun ho|kon ho|tum kon ho|what can you do/i.test(q)) {
        return `I am Aadyasha Panda's Personal AI Chatbot! 🤖✨

I represent Aadyasha, a passionate Full-Stack & AI developer and CSE student at NIST University ('27). I can answer questions about her engineering projects, technical stack, internship experience, college achievements, and how you can get in touch with her!`;
    }

    // 2. Who is Aadyasha / Bio / Background
    if (/who is aadyasha|about aadyasha|tell me about yourself|tell me about aadyasha|intro|introduction|bio|background|kon hai aadyasha|kya karti hai/i.test(q)) {
        return `Aadyasha Panda is a Computer Science undergraduate at NIST University (Class of 2027) based in Berhampur, Odisha, India. 👩‍💻

She is a Full-Stack Developer & AI Solutions Engineer who loves building scalable web platforms, intelligent AI tools, and immersive 3D web experiences.

Key Highlights:
• 🏢 AI/ML Intern @ csm.tech, Bhubaneswar
• 🎓 B.Tech CSE at NIST University (CGPA: 7.63 / 10)
• 💻 5+ Featured Projects built with React, Next.js, Python, Node.js & Three.js
• 🏀 NSS Member & District-Level Basketball Player
• 🚀 Actively open for Software Engineering & Full-Stack Internships!`;
    }

    // 3. Work Experience / Internships
    if (/experience|intern|internship|csm|csm\.tech|job|work history|kam kiya|kahan kaam/i.test(q)) {
        const exp = experience?.[0];
        return `💼 Work Experience:

Aadyasha is currently working as an AI/ML Intern at csm.tech (Bhubaneswar, Odisha):
• Role: AI/ML Intern (Delivery Department)
• Duration: June 2026 – Present
• Highlights:
  - Working on production AI/ML projects under the guidance of industry experts.
  - Gaining hands-on experience in machine learning pipelines, data processing, and predictive solutions.

She is also actively looking for upcoming full-stack and AI internship opportunities!`;
    }

    // 4. Specific Projects
    // 4a. Nexus AI
    if (/nexus|sprint|orchestration|velocity/i.test(q)) {
        const proj = projects.find(p => p.id === "nexus-ai");
        return `🚀 Nexus AI — Intelligent Task Orchestration & Sprint Velocity:

Nexus AI is an enterprise-grade agile platform that predicts sprint velocity and balances workloads using AI.
• Tech Stack: Next.js 14, Python FastAPI, OpenAI GPT-4, Pinecone Vector DB, Tailwind CSS.
• Key Impact: Boosted sprint delivery rates by 40% with real-time natural language sprint queries.
• Live Demo: https://nexus-ai-bice-one.vercel.app/
• GitHub: https://github.com/aadyashapanda07/-Nexus-AI`;
    }

    // 4b. Ramayana 3D
    if (/ramayan|ramayana|3d|three\.js|hanuman|mytholog/i.test(q)) {
        const proj = projects.find(p => p.id === "ramayana-3d");
        return `🏹 Ramayana 3D — Scroll-bound Mythological Web Journey:

An immersive 3D web experience built entirely in Three.js and WebGL.
• Tech Stack: Three.js, WebGL, custom GLSL shaders, Canvas API.
• Features: 8-chapter cinematic story with procedural terrains, rigged low-poly animations (walk cycles, flying Hanuman), running smoothly at 60 FPS without external model bloat!
• Live Demo: https://ramayana-3d.vercel.app/
• GitHub: https://github.com/aadyashapanda07/ramayana-3d`;
    }

    // 4c. Campus2Corporate
    if (/campus2corporate|campus|corporate|placement|interview|ats/i.test(q)) {
        const proj = projects.find(p => p.id === "campus2corporate");
        return `🎓 Campus2Corporate — Student Career & Placement Suite:

An all-in-one placement prep application engineered to help engineering students bridge the university-to-industry transition.
• Tech Stack: React, Vite, Tailwind CSS, Framer Motion, Node.js.
• Features: AI Resume Analyzer with ATS score benchmarking, technical mock interview simulator, and coding challenge arena.
• Live Demo: https://campus2corporate-pearl.vercel.app/
• GitHub: https://github.com/aadyashapanda07/campus2corporate`;
    }

    // 4d. FinAI
    if (/finai|finance|wealth|expense|money|budget|cash/i.test(q)) {
        const proj = projects.find(p => p.id === "finai-platform");
        return `💰 FinAI Platform — Wealth & Financial Intelligence:

A full-stack wealth and personal finance tracking dashboard.
• Tech Stack: React, Node.js, Express, MongoDB, Chart.js, Tailwind CSS.
• Features: Automated expense categorization, interactive cash-flow forecasts, receipt parsing heuristics, and multi-account net worth tracking.
• Live Demo: https://finai-platform-kappa.vercel.app/
• GitHub: https://github.com/aadyashapanda07/finai-platform`;
    }

    // 4e. Currency Converter / First Project
    if (/currency|converter|first project|pehla project|first ever|milestone/i.test(q)) {
        const proj = projects.find(p => p.id === "currency-converter");
        return `⭐ Currency Converter — Aadyasha's First Ever Project!

This is the project where Aadyasha's coding journey began! 🌟
• Tech Stack: JavaScript, Fetch API, Exchange Rate REST API, HTML5, CSS3.
• Features: Real-time global currency conversions across dozens of currencies with country flag mappings and a clean responsive UI.
• Live Demo: https://currency-converter-five-eta.vercel.app/
• GitHub: https://github.com/aadyashapanda07/currency-converter

It holds a special sentimental milestone in her software engineering story.`;
    }

    // 4f. General Projects inquiry
    if (/project|projects|kya banaya|what did (she|you) build|portfolio work/i.test(q)) {
        return `Aadyasha has built several impressive full-stack & AI projects:

1. 🚀 **Nexus AI** — Intelligent task orchestration & sprint velocity prediction (Next.js 14, FastAPI, GPT-4, Pinecone).
2. 🎓 **Campus2Corporate** — Placement suite with AI Resume ATS analyzer & mock interviews (React, Node.js).
3. 💰 **FinAI Platform** — Personal finance & expense intelligence system (MERN Stack, Chart.js).
4. 🏹 **Ramayana 3D** — Cinematic 60 FPS Three.js mythological experience.
5. ⭐ **Currency Converter** — Her milestone first web development project!

Ask me about any specific project to learn more or explore live links!`;
    }

    // 5. Technical Skills & Stack
    if (/skill|skills|tech stack|technolog|stack|languages|react|python|java|javascript|node|sql|mongo|fastapi|three|css|tailwind/i.test(q)) {
        return `🛠️ Aadyasha's Core Technical Skills:

• **Languages:** Java, Python, JavaScript (ES6+), C, SQL
• **Frontend:** React.js, Next.js 14, Tailwind CSS, Framer Motion, Three.js / WebGL, HTML5, CSS3
• **Backend & DB:** Node.js, Express.js, Python FastAPI, MongoDB, MySQL
• **Dev Tools:** Git, GitHub, VS Code, Vite, Postman, npm

She loves building full-stack applications with clean architecture and modern AI capabilities!`;
    }

    // 6. Education & College & CGPA
    if (/education|college|university|nist|school|ssvm|cgpa|marks|grades|degree|b\.?tech|cse|padhai/i.test(q)) {
        return `🎓 Education Background:

• **B.Tech in Computer Science & Engineering**
  - NIST University, Berhampur, Odisha (2023 – 2027)
  - Current CGPA: **7.63 / 10**
  - Coursework: Data Structures & Algorithms, Full Stack Web Development, DBMS, AI Principles.

• **Higher Secondary School (Class XII Science)**
  - SSVM Higher Secondary School, N.K. Nagar (2022)
  - Score: **83%** (Physics, Chemistry, Mathematics)

• **Secondary School (Class X)**
  - SSVM School, N.K. Nagar (2020)
  - Score: **92%**`;
    }

    // 7. Contact Info / Phone / Email / Hire
    if (/contact|hire|email|phone|number|call|reach|message|connect|touch|bat karna|sampark/i.test(q)) {
        return `📬 You can connect with Aadyasha directly via:

• 📧 **Email:** aadyashapanda07@gmail.com
• 📞 **Phone:** +91 7326880984
• 💼 **LinkedIn:** https://www.linkedin.com/in/aadyasha-panda-098297374
• 🐙 **GitHub:** https://github.com/aadyashapanda07
• 🌐 **Website:** https://www.aadyasha.in

Feel free to reach out for internship opportunities, project collaborations, or just a friendly tech chat!`;
    }

    // 8. Resume Download
    if (/resume|cv|biodata|pdf|download resume/i.test(q)) {
        return `📄 You can view and download Aadyasha's official resume directly:

• Click the **"View Resume"** button on the homepage to inspect her full profile.
• Click the **"Download PDF"** button to download **"Aadyasha Panda.pdf"** directly to your device!
• Direct link: https://www.aadyasha.in/Aadyasha%20Panda.pdf`;
    }

    // 9. Extracurriculars & Hobbies
    if (/hobby|hobbies|extracurricular|basketball|nss|sports|free time|khel/i.test(q)) {
        return `🌟 Extracurricular Activities & Interests:

• 🏀 **District-Level Basketball Player:** Competed in district-level basketball tournaments.
• 🤝 **NSS Member:** Active volunteer with the National Service Scheme at NIST University.
• 🧭 **School Guide:** Mentored junior students and led student activities.
• 🎨 In her free time, she enjoys exploring creative 3D web design and creative coding!`;
    }

    // 10. Location / Availability
    if (/location|where (is she|do you live)|city|odisha|berhampur|relocate|remote|availability|open to work/i.test(q)) {
        return `📍 **Location & Availability:**

• Location: Berhampur, Odisha, India.
• Flexibility: Open to **Remote**, **Hybrid**, or **Relocation** opportunities!
• Status: Actively available for Software Engineering, Full-Stack, and AI Internships & Projects.`;
    }

    // 11. Compliments / Positive feedback
    if (/good|great|awesome|cool|nice|amazing|mast|badhiya|superb|love it|impressive/i.test(q)) {
        return `Thank you so much! 😊 Aadyasha puts a lot of passion into crafting clean code and delightful web experiences. Feel free to explore her projects or get in touch!`;
    }

    // 12. Hindi / Hinglish General Questions
    if (/kya hal|kya kar rahi|kya kaam|kuch batao/i.test(q)) {
        return `Sab badhiya! 😊 Mai Aadyasha ka personal AI assistant hoon. Aap Aadyasha ke projects (Nexus AI, Ramayana 3D, FinAI), technical skills, NIST University ki padhai, ya unse contact karne ke baare me pooch sakte hain!`;
    }

    // 13. Smart Fallback: Provides helpful context and prompts
    return `That's an interesting question! As Aadyasha's personal AI chatbot, I can help you learn all about her background:

• **Projects:** 5+ full-stack and AI apps (Nexus AI, Ramayana 3D, FinAI, etc.)
• **Skills:** React, Next.js, Node.js, Python, Java, Three.js & Tailwind CSS
• **Experience:** AI/ML Intern @ csm.tech, Bhubaneswar
• **Education:** B.Tech CSE @ NIST University ('27)
• **Contact:** aadyashapanda07@gmail.com | 📞 7326880984

You can ask me specifically about any of these, or download her resume directly!`;
}
