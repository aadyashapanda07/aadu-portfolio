import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../data";
import { Mail, X, Send, Copy, Check, Sparkles, MessageSquare, User, AtSign, ArrowRight } from "lucide-react";

export default function ContactModal({ isOpen, onClose }) {
    const [copied, setCopied] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!isOpen) return null;

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(profile.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Construct pre-filled email mailto url for guaranteed deliverability
        const subjectEncoded = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`);
        const bodyEncoded = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
        const mailtoLink = `mailto:${profile.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            window.location.href = mailtoLink;
        }, 600);
    };

    const handleReset = () => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsSubmitted(false);
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-slate-900/70 backdrop-blur-md"
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="relative w-full max-w-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 max-h-[95vh] overflow-y-auto"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                        aria-label="Close Contact Modal"
                    >
                        <X size={20} />
                    </button>

                    {/* Header */}
                    <div className="text-center mb-6">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs font-semibold uppercase tracking-wider mb-2">
                            <Sparkles size={13} />
                            <span>Let's Build Together</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white">
                            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600 dark:from-sky-400 dark:to-indigo-300">Touch</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1 max-w-md mx-auto">
                            Whether you have an internship opportunity, project collaboration, or just want to connect — my inbox is open!
                        </p>
                    </div>

                    {/* Quick Copy Email Card */}
                    <div className="mb-6 p-3 sm:p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3 min-w-0">
                            <div className="w-10 h-10 rounded-xl bg-sky-500/15 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                                <Mail size={18} />
                            </div>
                            <div className="min-w-0">
                                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                                    Direct Email
                                </span>
                                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 truncate block">
                                    {profile.email}
                                </span>
                            </div>
                        </div>

                        <button
                            onClick={handleCopyEmail}
                            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shrink-0 cursor-pointer ${copied
                                ? "bg-emerald-500 text-white"
                                : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-750"
                                }`}
                        >
                            {copied ? (
                                <>
                                    <Check size={14} />
                                    <span>Copied!</span>
                                </>
                            ) : (
                                <>
                                    <Copy size={14} />
                                    <span>Copy</span>
                                </>
                            )}
                        </button>
                    </div>

                    {/* Interactive Contact Form */}
                    {isSubmitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="p-6 text-center rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 mb-6"
                        >
                            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-3">
                                <Check size={24} />
                            </div>
                            <h3 className="text-base font-bold text-slate-900 dark:text-white">
                                Message Prepared!
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                                Your email client has been opened with your message. If it didn't open automatically, you can email directly at {profile.email}.
                            </p>
                            <button
                                onClick={handleReset}
                                className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors cursor-pointer"
                            >
                                Send Another Note
                            </button>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-3.5 mb-6">
                            <div className="grid sm:grid-cols-2 gap-3.5">
                                <div>
                                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                                        Your Name
                                    </label>
                                    <div className="relative">
                                        <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Jane Doe"
                                            className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                                        Your Email
                                    </label>
                                    <div className="relative">
                                        <AtSign size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="jane@example.com"
                                            className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Internship opportunity / Project collaboration"
                                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500"
                                />
                            </div>

                            <div>
                                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your team, project, or timeline..."
                                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-sky-500/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                            >
                                {isSubmitting ? (
                                    <span>Sending...</span>
                                ) : (
                                    <>
                                        <Send size={15} />
                                        <span>Send Message</span>
                                    </>
                                )}
                            </button>
                        </form>
                    )}

                    {/* Social Channels Footer */}
                    <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                        <span className="text-xs text-slate-400 font-medium">Or connect via socials:</span>
                        <div className="flex gap-2">
                            {profile.social.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-300 hover:text-white hover:bg-sky-600 dark:hover:bg-sky-500 transition-all shadow-sm"
                                    aria-label={social.name}
                                    title={social.name}
                                >
                                    <social.icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
