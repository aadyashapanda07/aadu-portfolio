import { useState, useEffect, useRef } from "react";
import { ArrowRight, FileText, Mail, Sparkles, MapPin, CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { profile } from "../data";
import profileImg from "../assets/profile.jpg";

export default function Hero({ onOpenContact, onOpenResume }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    // Rotating title roles
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRoleIndex((prev) => (prev + 1) % profile.titleRoles.length);
        }, 3200);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            ref={ref}
            id="home"
            className="min-h-screen flex items-center justify-center pt-28 pb-16 relative overflow-hidden"
        >
            {/* Background Ambient Glows */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-sky-400/15 via-indigo-500/15 to-purple-500/10 rounded-full blur-[120px] dark:opacity-40" />
                <div className="absolute -bottom-10 left-10 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl" />
                <div className="absolute top-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
            </div>

            <motion.div
                style={{ y, opacity }}
                className="max-w-7xl mx-auto z-10 px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center"
            >
                {/* Left Column (Content) */}
                <div className="text-center lg:text-left lg:col-span-7 order-2 lg:order-1">
                    {/* Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-medium mb-6 shadow-sm"
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                        </span>
                        <span>{profile.availability}</span>
                    </motion.div>

                    {/* Main Headline with Animated Role */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-4"
                    >
                        Hi, I'm{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 dark:from-sky-400 dark:via-blue-400 dark:to-indigo-300">
                            {profile.name}
                        </span>
                        <div className="h-16 sm:h-20 md:h-24 flex items-center justify-center lg:justify-start overflow-hidden mt-1">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={currentRoleIndex}
                                    initial={{ y: 30, opacity: 0, filter: "blur(6px)" }}
                                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                                    exit={{ y: -30, opacity: 0, filter: "blur(6px)" }}
                                    transition={{ duration: 0.45, ease: "easeOut" }}
                                    className="text-2xl sm:text-4xl md:text-5xl text-slate-800 dark:text-slate-200 font-semibold"
                                >
                                    {profile.titleRoles[currentRoleIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </motion.h1>

                    {/* Tagline & Bio */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
                    >
                        {profile.tagline}{" "}
                        <span className="text-slate-500 dark:text-slate-400 block sm:inline mt-1 sm:mt-0">
                            {profile.bio}
                        </span>
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap gap-3.5 justify-center lg:justify-start items-center mb-10"
                    >
                        <a
                            href="#projects"
                            className="px-7 py-3.5 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white rounded-2xl font-semibold shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all flex items-center gap-2 group cursor-pointer"
                        >
                            Explore Work
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>

                        <button
                            onClick={onOpenResume}
                            className="px-6 py-3.5 bg-white dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-white rounded-2xl font-semibold border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow transition-all flex items-center gap-2 cursor-pointer"
                        >
                            <FileText size={18} className="text-sky-600 dark:text-sky-400" />
                            View Resume
                        </button>

                        <button
                            onClick={onOpenContact}
                            className="px-6 py-3.5 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60 rounded-2xl font-medium transition-all flex items-center gap-2 cursor-pointer"
                        >
                            <Mail size={18} />
                            Contact
                        </button>
                    </motion.div>

                    {/* Quick Stats & Socials Row */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-6"
                    >
                        <div className="grid grid-cols-3 gap-6 sm:gap-8 text-center sm:text-left">
                            <div>
                                <div className="text-2xl font-bold font-heading text-slate-900 dark:text-white">6+</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Projects Built</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold font-heading text-sky-600 dark:text-sky-400">15+</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Tech Skills</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold font-heading text-slate-900 dark:text-white">NIST '27</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">B.Tech CSE</div>
                            </div>
                        </div>

                        {/* Social Buttons */}
                        <div className="flex items-center gap-2">
                            {profile.social.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.url}
                                    target={item.url.startsWith("mailto:") ? undefined : "_blank"}
                                    rel="noreferrer"
                                    className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-sky-600 dark:hover:bg-sky-500 transition-all hover:scale-110 shadow-sm"
                                    aria-label={item.name}
                                    title={item.name}
                                >
                                    <item.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Right Column (Hero Image & Floating Badges) */}
                <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="relative"
                    >
                        {/* Ambient Aura */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-sky-500 to-indigo-600 rounded-[2.8rem] opacity-30 dark:opacity-40 blur-2xl animate-pulse" />

                        {/* Profile Image Frame */}
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-[2.5rem] overflow-hidden border-4 border-white/60 dark:border-white/10 shadow-2xl bg-slate-900/10 backdrop-blur-sm">
                            <img
                                src={profileImg}
                                alt={profile.name}
                                className="w-full h-full object-cover object-[50%_25%] scale-110 transition-transform duration-700 hover:scale-115"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                        </div>

                        {/* Floating Badge 1: Top Right */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/40 dark:border-slate-700/60 shadow-xl flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800 dark:text-white"
                        >
                            <span className="p-1 rounded-lg bg-sky-500/20 text-sky-600 dark:text-sky-400">
                                <Sparkles size={16} />
                            </span>
                            <span>Full-Stack & AI</span>
                        </motion.div>

                        {/* Floating Badge 2: Bottom Left */}
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute -bottom-3 -left-3 sm:-bottom-5 sm:-left-5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/40 dark:border-slate-700/60 shadow-xl flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800 dark:text-white"
                        >
                            <span className="p-1 rounded-lg bg-indigo-500/20 text-indigo-600 dark:text-indigo-400">
                                <CheckCircle2 size={16} />
                            </span>
                            <div>
                                <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-bold">Campus</span>
                                <span>NIST University</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
