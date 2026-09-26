import { motion } from "framer-motion";
import { Award, BookOpen, User, Calendar, MapPin, Code2, Cpu, Globe, CheckCircle2, GraduationCap } from "lucide-react";
import { education, profile, highlights } from "../data";

export default function About() {
    return (
        <section id="about" className="py-24 relative">
            <motion.div
                initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-full"
            >
                {/* Section Header */}
                <div className="text-center md:text-left mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
                        <User size={14} />
                        <span>Background & Journey</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white tracking-tight">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600 dark:from-sky-400 dark:to-indigo-300">Me</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Left Column: Personal Narrative & Pillars */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
                            <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-4">
                                Driven by Clean Code, Architecture & Innovation
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-4">
                                I am an undergraduate computer science engineer at NIST University (Class of 2027) with an intense passion for crafting robust web architectures, intuitive user interfaces, and AI-powered digital products.
                            </p>
                            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                                From architecting intelligent sprint planners like <strong className="text-slate-900 dark:text-white font-semibold">Nexus AI</strong> to building full-stack financial intelligence systems and scroll-driven 3D WebGL experiences with <strong className="text-slate-900 dark:text-white font-semibold">Three.js</strong>, I bridge algorithmic thinking with creative digital design.
                            </p>

                            {/* Key Highlights Grid */}
                            <div className="grid sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                                {highlights.map((h, i) => {
                                    const Icon = h.icon;
                                    return (
                                        <div key={i} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/60">
                                            <div className="w-8 h-8 rounded-xl bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-2.5">
                                                <Icon size={18} />
                                            </div>
                                            <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-1">
                                                {h.title}
                                            </h4>
                                            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                                                {h.desc}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Quick Facts Strip */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center">
                                <span className="text-[11px] font-semibold uppercase text-slate-400 block mb-1">Location</span>
                                <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">Odisha, India</span>
                            </div>
                            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center">
                                <span className="text-[11px] font-semibold uppercase text-slate-400 block mb-1">Degree</span>
                                <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">B.Tech CSE</span>
                            </div>
                            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center">
                                <span className="text-[11px] font-semibold uppercase text-slate-400 block mb-1">Graduation</span>
                                <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">Batch 2027</span>
                            </div>
                            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center">
                                <span className="text-[11px] font-semibold uppercase text-slate-400 block mb-1">Status</span>
                                <span className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400">Open to Work</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Education & Academic History */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
                            <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-6 flex items-center gap-2.5">
                                <GraduationCap className="text-sky-600 dark:text-sky-400" size={22} />
                                Academic Background
                            </h3>

                            <div className="space-y-6">
                                {education.map((edu, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15 }}
                                        className="relative pl-6 sm:pl-8 border-l-2 border-sky-500/30 pb-6 last:pb-0"
                                    >
                                        {/* Timeline Dot */}
                                        <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-sky-600 dark:border-sky-400 shadow-sm"></div>

                                        <div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/60 hover:border-sky-300 dark:hover:border-sky-700/60 transition-colors">
                                            <div className="flex items-center justify-between gap-2 mb-1">
                                                <span className="text-xs font-bold text-sky-600 dark:text-sky-400 flex items-center gap-1">
                                                    <Calendar size={13} />
                                                    {edu.year}
                                                </span>
                                                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300">
                                                    {edu.badge}
                                                </span>
                                            </div>

                                            <h4 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                                                {edu.degree}
                                            </h4>
                                            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium mt-0.5">
                                                {edu.institution}
                                            </p>
                                            <p className="text-slate-500 dark:text-slate-400 text-xs mt-2 leading-relaxed">
                                                {edu.details}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
