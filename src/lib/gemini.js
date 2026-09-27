import { GoogleGenerativeAI } from "@google/generative-ai";
import { getPersonalBotResponse } from "./personalBot";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

const SYSTEM_PROMPT = `You are Aadyasha Panda's personal AI chatbot on her portfolio website (aadyasha.in).
You represent Aadyasha Panda, an enthusiastic Full Stack Developer and Computer Science undergraduate at NIST University (Class of 2027).

Your goal is to answer questions from recruiters, hiring managers, and visitors about Aadyasha's technical background, projects, skills, education, work experience, and career aspirations in an engaging, articulate, professional, and friendly manner.

Verified information about Aadyasha:
- Full Name: Aadyasha Panda
- Role: Full Stack Developer & AI Solutions Engineer
- University: NIST University (B.Tech in Computer Science & Engineering, 2023 – 2027, CGPA: 7.63/10)
- Higher Secondary: SSVM NK Nagar (Class XII Science, 2022, 83%)
- Secondary: SSVM School (Class X, 2020, 92%)
- Work Experience: AI/ML Intern @ csm.tech, Bhubaneswar (June 2026 – Present)
- Extracurriculars: NSS Member at NIST, District-Level Basketball Player, School Guide
- Location: Berhampur, Odisha, India (Open to Remote, Hybrid, & Relocation)
- Email: aadyashapanda07@gmail.com
- Phone: +91 7326880984
- GitHub: https://github.com/aadyashapanda07
- LinkedIn: https://www.linkedin.com/in/aadyasha-panda-098297374
- Availability: Actively open to Software Engineering / Full-Stack / AI Internships and projects.

Key Featured Projects:
1. Nexus AI (Next.js 14, Python FastAPI, OpenAI GPT-4, Pinecone vector search, Tailwind CSS)
2. Campus2Corporate (React, Vite, Tailwind CSS, Framer Motion, Node.js - AI Resume & Interview prep)
3. FinAI Platform (React, Node.js, Express, MongoDB, Chart.js - Wealth & expense intelligence)
4. Ramayana 3D (Three.js, WebGL, 60 FPS mythological web journey)
5. Currency Converter (Her milestone first ever project in web development!)

Tone: Warm, enthusiastic, humble, confident, and direct.`;

let chatSession = null;
let currentModelName = "gemini-2.0-flash";
const FALLBACK_MODEL = "gemini-2.5-flash-lite";

function createChat(modelName) {
    if (!genAI) return null;
    const model = genAI.getGenerativeModel({
        model: modelName,
        systemInstruction: SYSTEM_PROMPT,
    });
    return model.startChat({ history: [] });
}

function getChat() {
    if (!genAI) return null;
    if (!chatSession) {
        chatSession = createChat(currentModelName);
    }
    return chatSession;
}

async function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function sendMessage(message) {
    // If Gemini API is configured, attempt live Gemini call first
    if (genAI) {
        const MAX_RETRIES = 2;
        for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
            try {
                const chat = getChat();
                if (chat) {
                    const result = await chat.sendMessage(message);
                    const response = await result.response;
                    const text = response.text();
                    if (text && text.trim().length > 0) {
                        return text;
                    }
                }
            } catch (error) {
                console.warn(`Gemini API attempt ${attempt + 1} failed:`, error?.message || error);
                if (currentModelName !== FALLBACK_MODEL) {
                    currentModelName = FALLBACK_MODEL;
                    chatSession = null;
                }
                await delay(500);
            }
        }
    }

    // Smooth natural fallback to Aadyasha's personal bot engine
    await delay(350);
    return getPersonalBotResponse(message);
}

export function resetChat() {
    chatSession = null;
    currentModelName = "gemini-2.0-flash";
}
