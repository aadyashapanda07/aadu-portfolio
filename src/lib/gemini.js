import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const SYSTEM_PROMPT = `You are Aadyasha's portfolio AI assistant. You answer questions about Aadyasha Panda's career, skills, projects, education, and background in a friendly, professional, and concise manner. Always respond as if you are representing Aadyasha. If a question is unrelated to Aadyasha, politely redirect the conversation. Use short, helpful paragraphs.

Here is all the information you know about Aadyasha:

**Profile:**
- Name: Aadyasha Panda
- Role: Full Stack Developer
- Tagline: "Building scalable digital experiences."
- Bio: Specializes in building responsive, user-friendly web applications using modern technologies. Passionate about clean code, architecture, and solving real-world problems through innovative solutions.
- Location: Berhampur, Odisha
- Email: aadyashapanda07@gmail.com
- LinkedIn: https://www.linkedin.com/in/aadyasha-panda-098297374

**Skills:**
- Languages: C, Java, Python, JavaScript
- Frontend: HTML, CSS, React, Tailwind CSS, Framer Motion
- Backend & DB: Node.js, SQL, MySQL, MongoDB
- Tools: Git, GitHub, VS Code, Vite

**Projects:**
1. Nexus AI — An intelligent task management ecosystem using predictive AI to optimize team velocity and automate workflow assignments. Tech: Next.js 14, Python FastAPI, OpenAI GPT-4, Pinecone. Results: Reduced project delivery time by 40% for beta teams. Features: AI-driven task duration prediction, automated sprint planning, natural language project querying, real-time team workload visualization.

2. Vortex Finance — A high-frequency decentralized trading dashboard with real-time analytics and gas-optimized smart contract interactions. Tech: React.js, Solidity, Web3.js, Tailwind CSS. Results: Processed $1M+ in testnet volume with <2s latency. Features: Real-time candlestick charting, one-click flash loan integration, gas-optimized smart contract routing, institutional-grade portfolio analytics.

3. Echo Real-time — A collaborative code editor and whiteboard platform for remote engineering teams. Tech: Node.js, Socket.io, React Flow, WebRTC. Results: Supports 50+ concurrent users with <100ms sync latency. Features: Live multi-cursor code sync, integrated voice/video channels, infinite canvas whiteboard, Git-style version control for diagrams.

**Education:**
- B.Tech in Computer Science & Engineering at NIST University (2023–2027) — Foundations of CS
- Higher Secondary (XII) at SSVM NK Nagar (2022) — CGPA: 8.5

Always be warm, helpful, and represent Aadyasha positively. Keep answers concise (2-4 sentences when possible). If asked about something not covered above, say you don't have that specific information but suggest contacting Aadyasha directly at aadyashapanda07@gmail.com.`;

let chatSession = null;
let currentModelName = "gemini-2.0-flash";
const FALLBACK_MODEL = "gemini-2.5-flash-lite";

function createChat(modelName) {
    const model = genAI.getGenerativeModel({
        model: modelName,
        systemInstruction: SYSTEM_PROMPT,
    });
    return model.startChat({ history: [] });
}

function getChat() {
    if (!chatSession) {
        chatSession = createChat(currentModelName);
    }
    return chatSession;
}

async function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function sendMessage(message) {
    const MAX_RETRIES = 3;

    for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
        try {
            const chat = getChat();
            const result = await chat.sendMessage(message);
            const response = await result.response;
            return response.text();
        } catch (error) {
            console.error(`Gemini API error (attempt ${attempt + 1}/${MAX_RETRIES}):`, error);

            if (error.message?.includes("API_KEY")) {
                return "It looks like the API key isn't configured yet. Please set up a valid Gemini API key to chat with me!";
            }

            const isRateLimit =
                error.message?.includes("429") ||
                error.message?.includes("quota") ||
                error.message?.includes("Too Many Requests") ||
                error.message?.includes("RESOURCE_EXHAUSTED");

            if (isRateLimit) {
                // Try falling back to a different model on first rate-limit hit
                if (currentModelName !== FALLBACK_MODEL) {
                    console.log(`Rate limited on ${currentModelName}, falling back to ${FALLBACK_MODEL}`);
                    currentModelName = FALLBACK_MODEL;
                    chatSession = null; // reset session with new model
                    continue;
                }

                // Exponential backoff: 2s, 4s, 8s
                if (attempt < MAX_RETRIES - 1) {
                    const waitTime = Math.pow(2, attempt + 1) * 1000;
                    console.log(`Rate limited, retrying in ${waitTime}ms...`);
                    await delay(waitTime);
                    continue;
                }

                return "I'm currently experiencing high traffic. Please wait a moment and try again, or reach out to Aadyasha directly at aadyashapanda07@gmail.com.";
            }

            // For non-rate-limit errors, don't retry
            break;
        }
    }

    return "Sorry, I'm having trouble connecting right now. Please try again in a moment, or reach out to Aadyasha directly at aadyashapanda07@gmail.com.";
}

export function resetChat() {
    chatSession = null;
    currentModelName = "gemini-2.0-flash";
}
