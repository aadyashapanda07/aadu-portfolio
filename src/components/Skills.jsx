import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { skills } from "../data";


export default function Skills() {
    return (
        <section id="skills" className="py-20 relative">
            <div className="text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                    whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-4">
                        Technical <span className="text-sky-600 dark:text-accent">Arsenal</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        A curated list of technologies I use to build scalable and robust applications.
                    </p>
                </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {skills.map((category, index) => (
                    <motion.div
                        key={category.category}
                        initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                    >
                        <div className="glass-card p-8 rounded-3xl hover:border-sky-300 dark:hover:border-accent/50 transition-colors">
                            <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {category.items.map((skill) => (
                                    <span
                                        key={skill.name}
                                        className="px-5 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-2xl text-base font-bold border border-slate-200 dark:border-slate-700 hover:scale-105 transition-transform cursor-default flex items-center gap-3 shadow-sm"
                                    >
                                        <skill.icon
                                            className="text-3xl"
                                            style={{ color: skill.color }}
                                        />
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
