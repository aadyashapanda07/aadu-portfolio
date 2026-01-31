import { motion } from "framer-motion";
import { Award, BookOpen, User, Calendar } from "lucide-react";
import { education } from "../data";


export default function About() {
    return (
        <section id="about" className="py-20 relative">
            <motion.div
                initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-full"
            >
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/2">
                        <div className="relative">
                            <div className="absolute inset-0 bg-sky-200 dark:bg-indigo-500 blur-3xl opacity-20 dark:opacity-10 rounded-full"></div>
                            <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-6 relative">
                                About <span className="text-sky-600 dark:text-accent">Me</span>
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
                                I'm a passionate full-stack developer who loves creating beautiful, functional web applications.
                                My journey in tech is driven by curiosity and a desire to build solutions that make a difference.
                                I enjoy working with modern web technologies and am always eager to learn new things.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="p-4 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800">
                                <div className="w-10 h-10 bg-sky-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-sky-600 dark:text-accent mb-3">
                                    <User size={20} />
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-white text-lg">Experience</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">Fresh & Ready</p>
                            </div>
                            <div className="p-4 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800">
                                <div className="w-10 h-10 bg-sky-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-sky-600 dark:text-accent mb-3">
                                    <Award size={20} />
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-white text-lg">Projects</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">Quality Built</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                            <BookOpen className="text-sky-600 dark:text-accent" />
                            Education
                        </h3>
                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    key={index}
                                    className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800 pb-2 last:pb-0"
                                >
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-sky-600 dark:border-accent"></div>
                                    <div className="bg-white dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800/50 hover:border-sky-200 dark:hover:border-accent/30 transition-colors">
                                        <span className="text-xs font-bold text-sky-600 dark:text-accent mb-1 block flex items-center gap-1">
                                            <Calendar size={12} />
                                            {edu.year}
                                        </span>
                                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">{edu.degree}</h4>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-1">{edu.institution}</p>
                                        <p className="text-slate-500 dark:text-slate-500 text-xs italic">{edu.details}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
