import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, User } from "lucide-react";
import { sendMessage, resetChat } from "../lib/gemini";

const WELCOME_MESSAGE = {
    role: "ai",
    text: "Hey there! 👋 I'm Aadyasha's AI assistant. Ask me anything about her skills, projects, education, or career — I'm happy to help!",
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

    const handleSend = async () => {
        const trimmed = input.trim();
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
                    text: "Sorry, something went wrong. Please try again!",
                },
            ]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleReset = () => {
        resetChat();
        setMessages([WELCOME_MESSAGE]);
    };

    return (
        <>
            {/* Floating Chat Bubble */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleOpen}
                        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 dark:from-sky-400 dark:to-blue-500 text-white shadow-lg shadow-sky-500/30 dark:shadow-sky-400/20 flex items-center justify-center chatbot-pulse cursor-pointer"
                        aria-label="Open AI Chat"
                        id="chatbot-bubble"
                    >
                        <img src="/logo.png" alt="Chat" className="w-full h-full object-cover rounded-full" />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Chat Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] h-[520px] max-h-[calc(100vh-48px)] flex flex-col rounded-3xl border border-white/20 dark:border-slate-700/50 bg-white/80 dark:bg-slate-900/90 backdrop-blur-xl shadow-2xl shadow-black/10 dark:shadow-black/30 overflow-hidden"
                        id="chatbot-panel"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200/50 dark:border-slate-700/50 bg-gradient-to-r from-sky-500/10 to-blue-500/10 dark:from-sky-400/10 dark:to-blue-500/10">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 dark:from-sky-400 dark:to-blue-500 flex items-center justify-center shadow-md shadow-sky-500/20 overflow-hidden">
                                    <img src="/logo.png" alt="AI Avatar" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white leading-tight">
                                        Aadyasha's AI
                                    </h3>
                                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                                        Powered by Gemini
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <button
                                    onClick={handleReset}
                                    className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                                    title="Reset conversation"
                                    aria-label="Reset conversation"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                                        <path d="M3 3v5h5" />
                                    </svg>
                                </button>
                                <button
                                    onClick={handleClose}
                                    className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                                    aria-label="Close chat"
                                >
                                    <X size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-3 chatbot-scrollbar">
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{
                                        opacity: 0,
                                        x: msg.role === "user" ? 20 : -20,
                                        scale: 0.95,
                                    }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    transition={{
                                        type: "spring",
                                        damping: 20,
                                        stiffness: 300,
                                        delay: msg.role === "ai" ? 0.05 : 0,
                                    }}
                                    className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"
                                        }`}
                                >
                                    {/* Avatar */}
                                    {msg.role === "user" ? (
                                        <div className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5 bg-sky-500/20 dark:bg-sky-400/20">
                                            <User size={14} className="text-sky-600 dark:text-sky-400" />
                                        </div>
                                    ) : (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", damping: 15, stiffness: 400, delay: 0.1 }}
                                            className="flex-shrink-0 w-7 h-7 rounded-full overflow-hidden shadow-sm shadow-sky-500/20 mt-0.5"
                                        >
                                            <img src="/logo.png" alt="AI" className="w-full h-full object-cover" />
                                        </motion.div>
                                    )}

                                    {/* Message Bubble */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3, delay: msg.role === "ai" ? 0.15 : 0 }}
                                        className={`max-w-[75%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${msg.role === "user"
                                            ? "bg-gradient-to-br from-sky-500 to-blue-600 dark:from-sky-400 dark:to-blue-500 text-white rounded-tr-md shadow-md shadow-sky-500/15"
                                            : "bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 rounded-tl-md border border-slate-200/50 dark:border-slate-700/30"
                                            }`}
                                    >
                                        {msg.text}
                                    </motion.div>
                                </motion.div>
                            ))}

                            {/* Typing Indicator */}
                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex gap-2.5"
                                >
                                    <motion.div
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                        className="flex-shrink-0 w-7 h-7 rounded-full overflow-hidden shadow-sm shadow-sky-500/20 mt-0.5"
                                    >
                                        <img src="/logo.png" alt="AI" className="w-full h-full object-cover" />
                                    </motion.div>
                                    <div className="bg-slate-100 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/30 rounded-2xl rounded-tl-md px-4 py-3 flex items-center gap-1.5">
                                        <span className="typing-dot" />
                                        <span className="typing-dot" style={{ animationDelay: "0.15s" }} />
                                        <span className="typing-dot" style={{ animationDelay: "0.3s" }} />
                                    </div>
                                </motion.div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Bar */}
                        <div className="p-3 border-t border-slate-200/50 dark:border-slate-700/50 bg-white/50 dark:bg-slate-900/50">
                            <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800/60 rounded-2xl px-4 py-2 border border-slate-200/50 dark:border-slate-700/30 focus-within:border-sky-400 dark:focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-400/20 transition-all">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Ask about Aadyasha..."
                                    className="flex-1 bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 outline-none"
                                    disabled={isTyping}
                                    id="chatbot-input"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!input.trim() || isTyping}
                                    className="p-1.5 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 dark:from-sky-400 dark:to-blue-500 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-md hover:shadow-sky-500/20 active:scale-95 transition-all cursor-pointer"
                                    aria-label="Send message"
                                    id="chatbot-send"
                                >
                                    <Send size={16} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
