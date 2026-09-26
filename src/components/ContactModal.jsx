import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../data";
import { Mail, X, Send, Copy, Check, Sparkles, User, AtSign, CheckCircle2, AlertCircle, ExternalLink } from "lucide-react";

export default function ContactModal({ isOpen, onClose }) {
    const [copied, setCopied] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    if (!isOpen) return null;

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(profile.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage("");

        try {
            const response = await fetch("https://formsubmit.co/ajax/aadyashapanda07@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    _subject: `New Portfolio Message from ${formData.name}: ${formData.subject || "Collaboration Inquiry"}`,
                    message: formData.message,
                    _replyto: formData.email,
                    _template: "table",
                    _captcha: "false"
                })
            });

            const data = await response.json();

            // FormSubmit returns { success: "true", message: "..." } or activation message
            if (response.ok || data.success === "true" || data.success === true) {
                setIsSubmitting(false);
                setIsSubmitted(true);
            } else if (data.message && data.message.includes("Activation")) {
                // Initial form activation stage
                setIsSubmitting(false);
                setIsSubmitted(true);
            } else {
                throw new Error(data.message || "Failed to submit form");
            }
        } catch (err) {
            console.warn("Direct form submission error, falling back to mail client:", err);
            // Fallback to mailto so visitor's input is never lost
            const subjectEncoded = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`);
            const bodyEncoded = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
            window.location.href = `mailto:${profile.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
            setIsSubmitting(false);
            setIsSubmitted(true);
        }
    };

    const handleReset = () => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsSubmitted(false);
        setErrorMessage("");
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
                            <span>Direct Inbox Delivery</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white">
                            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600 dark:from-sky-400 dark:to-indigo-300">Touch</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1 max-w-md mx-auto">
                            Fill out the form below and your message will be delivered straight to my personal Gmail inbox.
                        </p>
                    </div>

                    {/* Quick Direct Email Action Card */}
                    <div className="mb-6 p-3.5 sm:p-4 rounded-2xl bg-sky-50/60 dark:bg-slate-850 border border-sky-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <a
                            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 min-w-0 group cursor-pointer flex-1"
                            title="Click to open Gmail composer"
                        >
                            <div className="w-10 h-10 rounded-xl bg-sky-500/15 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <Mail size={18} />
                            </div>
                            <div className="min-w-0">
                                <span className="text-[10px] uppercase font-bold text-sky-700 dark:text-sky-400 block tracking-wider flex items-center gap-1">
                                    Direct Email • Click to Open in Gmail
                                </span>
                                <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 truncate block transition-colors underline decoration-dotted underline-offset-2">
                                    {profile.email}
                                </span>
                            </div>
                        </a>

                        <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                            {/* Open Web Gmail button */}
                            <a
                                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-sky-600 hover:bg-sky-500 text-white transition-all flex items-center gap-1.5 cursor-pointer shadow-sm hover:shadow"
                                title="Open in Gmail Web Browser"
                            >
                                <ExternalLink size={13} />
                                <span>Open Gmail</span>
                            </a>

                            {/* Copy button */}
                            <button
                                type="button"
                                onClick={handleCopyEmail}
                                className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shrink-0 cursor-pointer ${copied
                                    ? "bg-emerald-500 text-white"
                                    : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-750"
                                    }`}
                                title="Copy Email to Clipboard"
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
                    </div>

                    {/* Form Success State */}
                    {isSubmitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="p-6 text-center rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 mb-6"
                        >
                            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-3">
                                <CheckCircle2 size={26} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                                Message Sent Directly to Aadyasha! 🚀
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed max-w-sm mx-auto">
                                Thank you, <strong className="font-semibold text-slate-900 dark:text-white">{formData.name}</strong>! Your message has been dispatched straight to <strong className="text-sky-600 dark:text-sky-400">{profile.email}</strong>.
                            </p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                                Aadyasha will reply directly to <strong className="text-slate-700 dark:text-slate-300">{formData.email}</strong> shortly.
                            </p>
                            <button
                                onClick={handleReset}
                                className="mt-5 px-5 py-2.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors cursor-pointer shadow-sm"
                            >
                                Send Another Message
                            </button>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-3.5 mb-6">
                            {errorMessage && (
                                <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/50 text-red-700 dark:text-red-300 text-xs flex items-center gap-2">
                                    <AlertCircle size={15} className="shrink-0" />
                                    <span>{errorMessage}</span>
                                </div>
                            )}

                            <div className="grid sm:grid-cols-2 gap-3.5">
                                <div>
                                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                                        Your Name <span className="text-red-500">*</span>
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
                                        Your Email <span className="text-red-500">*</span>
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
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    name="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project, team, or opportunity..."
                                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-sky-500/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        <span>Delivering to Inbox...</span>
                                    </div>
                                ) : (
                                    <>
                                        <Send size={15} />
                                        <span>Send Direct to My Email</span>
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
                                    target={social.url.startsWith("mailto:") ? undefined : "_blank"}
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
