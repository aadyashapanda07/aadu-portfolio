import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, User, Sparkles, RotateCcw } from "lucide-react";
import { sendMessage, resetChat } from "../lib/gemini";
import { chatSuggestions } from "../data";

const WELCOME_MESSAGE = {
    role: "ai",
    text: "Hey there! 👋 I'm Aadyasha's AI assistant. Ask me anything about her projects, technical skills, education at NIST, or internship availability!",
};

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([WELCOME_MESSAGE]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const handleSendText = async (textToSend) => {
        const trimmed = (textToSend || input).trim();
        if (!trimmed || isTyping) return;

        const userMessage = { role: "user", text: trimmed };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsTyping(true);

        try {
            const response = await sendMessage(trimmed);
            setMessages((prev) => [...prev, { role: "ai", text: response }]);
        } catch {
            setMessages((prev) => [
                ...prev,
                {
                    role: "ai",
                    text: "Sorry, I ran into a network hiccup. You can also reach out to Aadyasha directly at aadyashapanda07@gmail.com!",
                },
            ]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendText(input);
        }
    };

    const handleReset = () => {
        resetChat();
        setMessages([WELCOME_MESSAGE]);
    };

    return (
        <>
            {/* Floating Chat Bubble Button */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.92 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-6 right-6 z-50 p-1.5 rounded-full bg-gradient-to-tr from-sky-600 to-indigo-600 text-white shadow-xl shadow-sky-500/30 flex items-center justify-center cursor-pointer chatbot-pulse group"
                        aria-label="Ask Aadyasha's AI"
                        id="chatbot-bubble"
                    >
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/80">
                            <img src="/logo.png" alt="Aadyasha AI" className="w-full h-full object-cover" />
                        </div>
                        {/* Tooltip on hover */}
                        <span className="absolute right-16 px-3 py-1.5 rounded-xl bg-slate-900/90 text-white text-xs font-medium whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            Ask Aadyasha's AI ✨
                        </span>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Chatbot Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-32px)] h-[560px] max-h-[calc(100vh-48px)] flex flex-col rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl shadow-2xl overflow-hidden"
                        id="chatbot-panel"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-850/70">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full overflow-hidden border border-sky-500/40 shrink-0">
                                    <img src="/logo.png" alt="Aadyasha AI" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                                        <span>Aadyasha's AI</span>
                                        <Sparkles size={13} className="text-sky-500" />
                                    </h3>
                                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                                        Powered by Gemini
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-1">
                                <button
                                    onClick={handleReset}
                                    className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                                    title="Reset conversation"
                                    aria-label="Reset conversation"
                                >
                                    <RotateCcw size={16} />
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                                    aria-label="Close Chatbot"
                                >
                                    <X size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Messages Feed */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-3.5 chatbot-scrollbar">
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{
                                        opacity: 0,
                                        x: msg.role === "user" ? 15 : -15,
                                    }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.25 }}
                                    className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                                >
                                    {/* Icon Avatar */}
                                    {msg.role === "user" ? (
                                        <div className="w-7 h-7 rounded-full flex items-center justify-center bg-sky-100 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5">
                                            <User size={14} />
                                        </div>
                                    ) : (
                                        <div className="w-7 h-7 rounded-full overflow-hidden border border-sky-400/40 shrink-0 mt-0.5 shadow-sm">
                                            <img src="/logo.png" alt="AI" className="w-full h-full object-cover" />
                                        </div>
                                    )}

                                    {/* Bubble */}
                                    <div
                                        className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-wrap ${msg.role === "user"
                                            ? "bg-sky-600 text-white rounded-tr-sm shadow-sm"
                                            : "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-sm border border-slate-200/70 dark:border-slate-700/50"
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}

                            {/* Typing Indicator */}
                            {isTyping && (
                                <div className="flex gap-2.5">
                                    <div className="w-7 h-7 rounded-full overflow-hidden border border-sky-400/40 shrink-0 mt-0.5">
                                        <img src="/logo.png" alt="AI" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="bg-slate-100 dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/50 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1.5">
                                        <span className="typing-dot" />
                                        <span className="typing-dot" style={{ animationDelay: "0.15s" }} />
                                        <span className="typing-dot" style={{ animationDelay: "0.3s" }} />
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Suggestion Chips */}
                        <div className="px-3 pt-2 pb-1 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                            <div className="flex gap-1.5 overflow-x-auto pb-1.5 custom-scrollbar">
                                {chatSuggestions.map((promptText, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleSendText(promptText)}
                                        disabled={isTyping}
                                        className="text-[11px] px-2.5 py-1 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 border border-slate-200 dark:border-slate-700 whitespace-nowrap shrink-0 transition-colors shadow-2xs hover:shadow-xs cursor-pointer disabled:opacity-50"
                                    >
                                        {promptText}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="p-3 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                            <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800/80 rounded-2xl px-3.5 py-2 border border-slate-200 dark:border-slate-700 focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-500/20 transition-all">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Ask anything about Aadyasha..."
                                    className="flex-1 bg-transparent text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 outline-none"
                                    disabled={isTyping}
                                    id="chatbot-input"
                                />
                                <button
                                    onClick={() => handleSendText(input)}
                                    disabled={!input.trim() || isTyping}
                                    className="p-1.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
                                    aria-label="Send message"
                                    id="chatbot-send"
                                >
                                    <Send size={15} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
