import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, projectCategories } from "../data";
import { Github, ExternalLink, ArrowRight, X, Sparkles, Zap, Layers, Star, CheckCircle } from "lucide-react";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <section id="projects" className="py-24 relative">
            <motion.div
                initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-full"
            >
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
                            <Layers size={14} />
                            <span>Featured Showcase</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white tracking-tight">
                            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600 dark:from-sky-400 dark:to-indigo-300">Work</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-xl text-base mt-2">
                            A showcase of my recent advanced development projects. Click on any project to view details.
                        </p>
                    </div>

                    <a
                        href="https://github.com/aadyashapanda07"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-900 dark:text-white font-medium hover:text-sky-600 dark:hover:text-sky-400 transition-colors group text-sm md:text-base cursor-pointer"
                    >
                        <span>View all projects</span>
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                    </a>
                </div>

                {/* Category Filter Pills */}
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-12">
                    {projectCategories.map((category) => {
                        const isActive = activeCategory === category;
                        return (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`relative px-4 sm:px-5 py-2 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${isActive
                                    ? "text-white dark:text-slate-900 shadow-md shadow-sky-500/20"
                                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-850 hover:bg-slate-200/80 dark:hover:bg-slate-800"
                                    }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activeCategoryPill"
                                        className="absolute inset-0 bg-sky-600 dark:bg-sky-400 rounded-2xl"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{category}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.35, delay: index * 0.05 }}
                                onClick={() => setSelectedProject(project)}
                                className={`group cursor-pointer bg-white dark:bg-slate-900/90 rounded-3xl overflow-hidden border transition-all duration-300 hover:shadow-2xl dark:hover:shadow-sky-500/10 flex flex-col ${project.isFirstProject
                                    ? "border-amber-400/40 dark:border-amber-500/30 hover:border-amber-400"
                                    : "border-slate-200 dark:border-slate-800 hover:border-sky-400/50 dark:hover:border-sky-500/50"
                                    }`}
                            >
                                {/* Thumbnail */}
                                <div className="aspect-[16/10] relative overflow-hidden bg-slate-100 dark:bg-slate-800">
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                                    {/* Category / Milestone Floating Badges */}
                                    <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between gap-2">
                                        <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-sky-600 dark:text-sky-300 border border-white/20 dark:border-slate-700/40 shadow-sm">
                                            {project.category}
                                        </span>

                                        {project.isFirstProject && (
                                            <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-amber-500/90 backdrop-blur-md text-white shadow-sm flex items-center gap-1">
                                                <Star size={12} className="fill-white" />
                                                <span>My First Project</span>
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center justify-between gap-2 mb-1.5">
                                            <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                                                {project.title}
                                            </h3>
                                        </div>

                                        <p className="text-xs font-medium text-sky-600 dark:text-sky-400 mb-3">
                                            {project.tagline}
                                        </p>

                                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div>
                                        {/* Result Pill */}
                                        {project.results && (
                                            <div className="mb-4 px-3 py-2 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-100 dark:border-sky-900/40 text-[12px] text-sky-800 dark:text-sky-300 font-medium flex items-center gap-1.5 line-clamp-1">
                                                <Zap size={13} className="shrink-0 text-sky-600 dark:text-sky-400" />
                                                <span className="truncate">{project.results}</span>
                                            </div>
                                        )}

                                        {/* Tech Badges */}
                                        <div className="flex flex-wrap gap-1.5 pt-3 mb-4 border-t border-slate-100 dark:border-slate-800/80">
                                            {project.tech.slice(0, 3).map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-[11px] font-medium px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                            {project.tech.length > 3 && (
                                                <span className="text-[11px] font-medium px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-lg">
                                                    +{project.tech.length - 3}
                                                </span>
                                            )}
                                        </div>

                                        {/* Direct Quick Action Buttons */}
                                        <div className="flex items-center gap-2 pt-1" onClick={(e) => e.stopPropagation()}>
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 py-2 px-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                                                title="Open Live Vercel Demo"
                                            >
                                                <ExternalLink size={13} />
                                                <span>Live Demo</span>
                                            </a>
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center justify-center gap-1.5 border border-slate-200/80 dark:border-slate-700/80 transition-colors"
                                                title="Open GitHub Repository"
                                            >
                                                <Github size={13} />
                                                <span>GitHub</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </motion.div>

            {/* Modal Detail View */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-slate-900/70 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl z-10 relative max-h-[90vh] flex flex-col border border-slate-200 dark:border-slate-800"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2.5 bg-slate-900/60 hover:bg-slate-900 text-white backdrop-blur-md rounded-full transition-colors z-20 cursor-pointer shadow-md"
                                aria-label="Close Modal"
                            >
                                <X size={20} />
                            </button>

                            {/* Hero Banner inside modal */}
                            <div className="relative h-56 sm:h-72 shrink-0 bg-slate-900">
                                <img
                                    src={selectedProject.img}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover opacity-60"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/20 text-sky-300 border border-sky-500/30">
                                            {selectedProject.category}
                                        </span>
                                        {selectedProject.isFirstProject && (
                                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-white flex items-center gap-1 shadow-sm">
                                                <Star size={12} className="fill-white" />
                                                <span>My First Project</span>
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-2xl sm:text-4xl font-bold font-heading text-white">
                                        {selectedProject.title}
                                    </h3>
                                    <p className="text-slate-300 text-sm sm:text-base mt-1">
                                        {selectedProject.tagline}
                                    </p>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6 sm:p-8 overflow-y-auto space-y-8 custom-scrollbar">
                                <div className="grid md:grid-cols-3 gap-8">
                                    {/* Left Details */}
                                    <div className="md:col-span-2 space-y-6">
                                        <div>
                                            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                                                <Sparkles className="text-sky-600 dark:text-sky-400" size={18} />
                                                Overview
                                            </h4>
                                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                                                {selectedProject.description}
                                            </p>
                                        </div>

                                        {selectedProject.features && (
                                            <div>
                                                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                                                    <Zap className="text-sky-600 dark:text-sky-400" size={18} />
                                                    Key Capabilities & Architecture
                                                </h4>
                                                <ul className="grid sm:grid-cols-2 gap-2.5">
                                                    {selectedProject.features.map((feature, i) => (
                                                        <li
                                                            key={i}
                                                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/40 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800"
                                                        >
                                                            <CheckCircle size={15} className="mt-0.5 text-emerald-500 shrink-0" />
                                                            <span>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>

                                    {/* Right Sidebar */}
                                    <div className="space-y-6">
                                        {/* Tech Stack */}
                                        <div>
                                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                                                Tech Stack
                                            </h4>
                                            <div className="flex flex-wrap gap-1.5">
                                                {selectedProject.tech.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-medium border border-slate-200 dark:border-slate-700"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Measured Result */}
                                        {selectedProject.results && (
                                            <div className="bg-sky-50 dark:bg-sky-950/40 p-4 rounded-2xl border border-sky-100 dark:border-sky-900/40">
                                                <h4 className="text-xs font-bold text-sky-900 dark:text-sky-300 uppercase tracking-wider mb-1">
                                                    Engineering Impact
                                                </h4>
                                                <p className="text-xs sm:text-sm text-sky-800 dark:text-sky-200 leading-snug">
                                                    {selectedProject.results}
                                                </p>
                                            </div>
                                        )}

                                        {/* Links */}
                                        <div className="flex flex-col gap-2.5 pt-2">
                                            <a
                                                href={selectedProject.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 px-5 py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-sm font-semibold transition-all shadow-md shadow-sky-500/20"
                                            >
                                                <ExternalLink size={16} />
                                                Open Live Vercel Demo
                                            </a>
                                            <a
                                                href={selectedProject.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 px-5 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors"
                                            >
                                                <Github size={16} />
                                                View GitHub Repository
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
