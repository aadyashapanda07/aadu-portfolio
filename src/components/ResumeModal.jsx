import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ExternalLink, Printer, Mail, MapPin, Linkedin, Github } from "lucide-react";
import { profile, skills, projects, education, experience, extracurricular } from "../data";
import { openEmailClient } from "../lib/email";

export default function ResumeModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    const handlePrint = () => {
        window.print();
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-4 md:p-6">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-slate-900/70 backdrop-blur-md"
                />

                {/* Modal Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl z-10 flex flex-col overflow-hidden"
                >
                    {/* Top Control Bar */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-red-400"></span>
                            <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                            <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                            <span className="ml-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                Resume Preview • Aadyasha Panda
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <a
                                href={profile.resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                                title="Open Full PDF in New Tab"
                            >
                                <ExternalLink size={14} />
                                View PDF
                            </a>
                            <button
                                onClick={handlePrint}
                                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                                title="Print Resume"
                            >
                                <Printer size={15} />
                                Print
                            </button>
                            <a
                                href={profile.resumeUrl}
                                download="Aadyasha Panda.pdf"
                                className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-semibold bg-sky-600 hover:bg-sky-500 text-white transition-all shadow-sm hover:shadow cursor-pointer"
                            >
                                <Download size={14} />
                                Download PDF
                            </a>
                            <button
                                onClick={onClose}
                                className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ml-1 cursor-pointer"
                                aria-label="Close Resume"
                            >
                                <X size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Scrollable Document View */}
                    <div className="overflow-y-auto p-6 md:p-10 space-y-8 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
                        {/* Header */}
                        <div className="border-b border-slate-200 dark:border-slate-800 pb-6 text-center md:text-left md:flex md:justify-between md:items-end">
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold font-heading tracking-tight text-slate-900 dark:text-white">
                                    {profile.name}
                                </h1>
                                <p className="text-sky-600 dark:text-sky-400 font-semibold text-lg mt-1">
                                    Full Stack Developer & AI Enthusiast
                                </p>
                                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 flex items-center justify-center md:justify-start gap-1">
                                    <MapPin size={14} /> {profile.location}
                                </p>
                            </div>

                            <div className="mt-4 md:mt-0 flex flex-wrap justify-center md:justify-end gap-3 text-xs">
                                <a
                                    href="tel:7326880984"
                                    className="flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 font-medium"
                                >
                                    <span>📞 7326880984</span>
                                </a>
                                <a
                                    href={`mailto:${profile.email}`}
                                    onClick={openEmailClient}
                                    className="flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 cursor-pointer"
                                >
                                    <Mail size={13} /> {profile.email}
                                </a>
                                <a
                                    href="https://www.aadyasha.in"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400"
                                >
                                    <span>🌐 aadyasha.in</span>
                                </a>
                                <a
                                    href={profile.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400"
                                >
                                    <Github size={13} /> GitHub
                                </a>
                                <a
                                    href={profile.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400"
                                >
                                    <Linkedin size={13} /> LinkedIn
                                </a>
                            </div>
                        </div>

                        {/* Professional Summary */}
                        <div>
                            <h2 className="text-sm font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
                                Professional Summary
                            </h2>
                            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                {profile.bio}
                            </p>
                        </div>

                        {/* Education */}
                        <div>
                            <h2 className="text-sm font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-4">
                                Education
                            </h2>
                            <div className="space-y-4">
                                {education.map((edu, idx) => (
                                    <div key={idx} className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white text-base">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm">
                                                {edu.institution}
                                            </p>
                                            <p className="text-slate-500 dark:text-slate-500 text-xs mt-0.5">
                                                {edu.details}
                                            </p>
                                        </div>
                                        <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md shrink-0">
                                            {edu.year}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Work Experience */}
                        {experience && experience.length > 0 && (
                            <div>
                                <h2 className="text-sm font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-4">
                                    Experience
                                </h2>
                                <div className="space-y-4">
                                    {experience.map((exp, idx) => (
                                        <div key={idx} className="border-l-2 border-sky-500/40 pl-4 py-1">
                                            <div className="flex flex-wrap items-baseline justify-between gap-2">
                                                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                                                    {exp.role} <span className="text-xs font-semibold text-sky-600 dark:text-sky-400">@ {exp.company}</span>
                                                </h3>
                                                <span className="text-xs font-semibold px-2.5 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md">
                                                    {exp.period}
                                                </span>
                                            </div>
                                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                                {exp.location}
                                            </p>
                                            <ul className="mt-2 space-y-1 list-disc list-inside text-xs text-slate-600 dark:text-slate-300">
                                                {exp.description.map((d, dIdx) => (
                                                    <li key={dIdx}>{d}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Technical Skills */}
                        <div>
                            <h2 className="text-sm font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-3">
                                Technical Skills
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-3 text-sm">
                                {skills.map((cat, idx) => (
                                    <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                                        <span className="font-bold text-xs uppercase tracking-wide text-slate-700 dark:text-slate-300 block mb-1.5">
                                            {cat.category}
                                        </span>
                                        <p className="text-slate-600 dark:text-slate-400 text-xs">
                                            {cat.items.map(item => item.name).join(", ")}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Featured Projects */}
                        <div>
                            <h2 className="text-sm font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-4">
                                Key Projects
                            </h2>
                            <div className="space-y-5">
                                {projects.map((proj, idx) => (
                                    <div key={idx} className="border-l-2 border-sky-500/40 pl-4 py-1">
                                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                                            <h3 className="font-bold text-slate-900 dark:text-white text-base">
                                                {proj.title} <span className="text-xs font-normal text-slate-500">| {proj.tagline}</span>
                                            </h3>
                                            <span className="text-[11px] font-mono text-sky-600 dark:text-sky-400">
                                                {proj.category}
                                            </span>
                                        </div>
                                        <p className="text-slate-600 dark:text-slate-300 text-xs mt-1">
                                            {proj.description}
                                        </p>
                                        <div className="flex flex-wrap gap-1.5 mt-2">
                                            {proj.tech.map((t) => (
                                                <span key={t} className="text-[10px] px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Extracurricular Activities */}
                        {extracurricular && extracurricular.length > 0 && (
                            <div>
                                <h2 className="text-sm font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-3">
                                    Extracurricular Activities
                                </h2>
                                <ul className="space-y-1.5 list-disc list-inside text-xs text-slate-600 dark:text-slate-300">
                                    {extracurricular.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Bottom note */}
                        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-xs text-slate-500">
                            <span>References available upon request.</span>
                            <a
                                href={profile.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1"
                            >
                                Connect on LinkedIn <ExternalLink size={12} />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
