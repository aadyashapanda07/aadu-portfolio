import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "../data";
import { Cpu, Terminal, Sparkles, CheckCircle2 } from "lucide-react";

export default function Skills() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", ...skills.map((c) => c.category)];

    const displayedCategories = selectedCategory === "All"
        ? skills
        : skills.filter((c) => c.category === selectedCategory);

    return (
        <section id="skills" className="py-24 relative">
            <div className="text-center mb-12">
                <motion.div
                    initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                    whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
                        <Cpu size={14} />
                        <span>Core Competencies</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white tracking-tight">
                        Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600 dark:from-sky-400 dark:to-indigo-300">Technologies</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-2 text-base">
                        A solid stack combining modern JavaScript/TypeScript, Java, Python, reactive UI frameworks, server architectures, and 3D web engines.
                    </p>
                </motion.div>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
                {categories.map((category) => {
                    const isActive = selectedCategory === category;
                    return (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`relative px-4 sm:px-5 py-2 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${isActive
                                ? "text-white dark:text-slate-900 shadow-md shadow-sky-500/20"
                                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-850 hover:bg-slate-200/80 dark:hover:bg-slate-800"
                                }`}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="activeSkillTab"
                                    className="absolute inset-0 bg-sky-600 dark:bg-sky-400 rounded-2xl"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{category}</span>
                        </button>
                    );
                })}
            </div>

            {/* Categorized Cards Grid */}
            <motion.div
                layout
                className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto"
            >
                <AnimatePresence>
                    {displayedCategories.map((cat, catIdx) => (
                        <motion.div
                            key={cat.category}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4, delay: catIdx * 0.08 }}
                            className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800/90 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-sky-300 dark:hover:border-sky-800/60 transition-all duration-300"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-sky-500"></span>
                                    {cat.category}
                                </h3>
                                <span className="text-xs text-slate-400 font-medium">
                                    {cat.items.length} tools
                                </span>
                            </div>

                            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                                {cat.description}
                            </p>

                            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                                {cat.items.map((skill, index) => {
                                    const Icon = skill.icon;
                                    return (
                                        <div
                                            key={skill.name}
                                            className="group flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 hover:bg-sky-50/70 dark:hover:bg-slate-800 border border-slate-100 dark:border-slate-800 hover:border-sky-200 dark:hover:border-sky-700/50 transition-all duration-200"
                                        >
                                            <div
                                                className="w-10 h-10 rounded-xl flex items-center justify-center bg-white dark:bg-slate-900 shadow-sm border border-slate-200/60 dark:border-slate-700/60 group-hover:scale-110 transition-transform duration-200 shrink-0"
                                            >
                                                <Icon
                                                    size={22}
                                                    style={{ color: skill.color }}
                                                />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <div className="font-semibold text-xs sm:text-sm text-slate-800 dark:text-slate-200 truncate group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                                                    {skill.name}
                                                </div>
                                                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium block">
                                                    {skill.level}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}
