import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../data";
import { Mail, X } from "lucide-react";

export default function ContactModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-2xl z-10"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                    >
                        <X size={24} />
                    </button>

                    <div className="text-center">
                        <h2 className="text-2xl md:text-3xl font-bold font-heading text-slate-900 dark:text-white mb-4">
                            Get in <span className="text-sky-600 dark:text-accent">Touch</span>
                        </h2>

                        <p className="text-slate-600 dark:text-slate-400 mb-8 text-base">
                            I'm always open to discussing new projects, creative ideas, or opportunities.
                        </p>

                        <div className="flex flex-col items-center gap-6 mb-8">
                            <a
                                href={`mailto:${profile.email}`}
                                className="group flex items-center gap-3 text-xl md:text-2xl font-bold text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-accent transition-colors"
                            >
                                <Mail className="text-sky-600 dark:text-accent group-hover:scale-110 transition-transform" size={24} />
                                {profile.email}
                            </a>
                        </div>

                        <div className="flex justify-center gap-4">
                            {profile.social.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-500 dark:text-slate-400 hover:text-white hover:bg-sky-600 dark:hover:bg-accent hover:border-sky-600 dark:hover:border-accent transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
                                    aria-label={social.name}
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
