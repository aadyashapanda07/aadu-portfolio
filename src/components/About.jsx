import { motion } from "framer-motion";
import { education } from "../data";
import { GraduationCap } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-20">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold font-heading text-white mb-6">About Me</h2>
                    <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                        <p className="text-slate-300 leading-relaxed text-lg">
                            I am an organized and responsible individual with a passion for web development.
                            My journey involves leadership roles such as being a School Captain and active participation in NSS.
                            I believe in experiential learning and constantly strive to evolve technically and personally.
                            When not coding, you can find me painting, taking photos, or playing basketball.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h3 className="text-2xl font-bold font-heading text-white mb-6 flex items-center gap-2">
                        <GraduationCap className="text-accent" /> Education
                    </h3>
                    <div className="space-y-6">
                        {education.map((edu, index) => (
                            <div
                                key={index}
                                className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-slate-700 hover:before:bg-accent transition-colors"
                            >
                                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-slate-900 border-2 border-slate-600 group-hover:border-accent"></div>
                                <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                                <p className="text-accent text-sm mb-1">{edu.institution}</p>
                                <div className="flex justify-between items-center text-slate-400 text-sm">
                                    <span>{edu.year}</span>
                                    <span>{edu.details}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
