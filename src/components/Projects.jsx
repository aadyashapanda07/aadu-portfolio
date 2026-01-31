import { motion } from "framer-motion";
import { projects } from "../data";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
    return (
        <section id="projects" className="py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">Featured Projects</h2>
                <p className="text-slate-400">Some of the things I've built.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:border-accent/50 transition-colors"
                    >
                        <div className="p-8 h-full flex flex-col">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>
                                <div className="flex gap-3">
                                    <a href={project.github} className="text-slate-400 hover:text-white transition-colors">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.link} className="text-slate-400 hover:text-white transition-colors">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <p className="text-slate-400 mb-6 flex-grow">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((tech, tIdx) => (
                                    <span
                                        key={tIdx}
                                        className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Hover Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
