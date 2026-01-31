import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data";
import { Github, ExternalLink, ArrowRight, X, Sparkles, Zap, Smartphone } from "lucide-react";


export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="py-20 relative">
            <motion.div
                initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-full"
            >
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-4">
                            Featured <span className="text-sky-600 dark:text-accent">Work</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-xl">
                            A showcase of my recent advanced development projects. Click on any project to view details.
                        </p>
                    </div>
                    <a href="https://github.com/aadyashapanda" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-900 dark:text-white font-medium hover:text-sky-600 dark:hover:text-accent transition-colors group">
                        View all projects <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                    </a>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            layoutId={`project-card-${project.title}`}
                            onClick={() => setSelectedProject(project)}
                            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                            className="group cursor-pointer bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-sky-300 dark:hover:border-accent transition-all duration-300 hover:shadow-2xl dark:hover:shadow-indigo-500/20"
                        >
                            <div className="aspect-video relative overflow-hidden">
                                <motion.img
                                    layoutId={`project-image-${project.title}`}
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <div className="p-6">
                                <motion.h3 layoutId={`project-title-${project.title}`} className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-accent transition-colors">
                                    {project.title}
                                </motion.h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.slice(0, 3).map(tag => (
                                        <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md">
                                            {tag}
                                        </span>
                                    ))}
                                    {project.tech.length > 3 && (
                                        <span className="text-xs font-medium px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md">
                                            +{project.tech.length - 3}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                        />
                        <motion.div
                            layoutId={`project-card-${selectedProject.title}`}
                            className="w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl z-10 relative max-h-[90vh] flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors z-20"
                            >
                                <X size={24} />
                            </button>

                            <div className="relative h-64 md:h-80 shrink-0">
                                <motion.img
                                    layoutId={`project-image-${selectedProject.title}`}
                                    src={selectedProject.img}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                                    <motion.h3 layoutId={`project-title-${selectedProject.title}`} className="text-3xl md:text-5xl font-bold font-heading text-white mb-2">
                                        {selectedProject.title}
                                    </motion.h3>
                                </div>
                            </div>

                            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
                                <div className="grid md:grid-cols-3 gap-8">
                                    <div className="md:col-span-2 space-y-8">
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                                                <Sparkles className="text-sky-600 dark:text-accent" size={20} />
                                                About the Project
                                            </h4>
                                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                                                {selectedProject.description}
                                            </p>
                                        </div>

                                        {selectedProject.features && (
                                            <div>
                                                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                                    <Zap className="text-sky-600 dark:text-accent" size={20} />
                                                    Key Features
                                                </h4>
                                                <ul className="grid sm:grid-cols-2 gap-3">
                                                    {selectedProject.features.map((feature, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-600 dark:bg-accent shrink-0" />
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>

                                    <div className="space-y-8">
                                        <div>
                                            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Tech Stack</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProject.tech.map(tag => (
                                                    <span key={tag} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {selectedProject.results && (
                                            <div className="bg-sky-50 dark:bg-sky-900/20 p-5 rounded-2xl border border-sky-100 dark:border-sky-800/30">
                                                <h4 className="text-sm font-bold text-sky-900 dark:text-sky-100 uppercase tracking-wider mb-2">Key Result</h4>
                                                <p className="text-sky-800 dark:text-sky-200 font-medium">
                                                    {selectedProject.results}
                                                </p>
                                            </div>
                                        )}

                                        <div className="flex flex-col gap-3">
                                            <a
                                                href={selectedProject.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 px-6 py-3 bg-sky-600 dark:bg-accent text-white dark:text-slate-900 rounded-xl font-bold hover:bg-sky-500 dark:hover:bg-sky-400 transition-colors"
                                            >
                                                <ExternalLink size={18} />
                                                View Live Demo
                                            </a>
                                            <a
                                                href={selectedProject.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                                            >
                                                <Github size={18} />
                                                Source Code
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section >
    );
}
