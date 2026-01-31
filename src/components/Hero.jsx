import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { profile } from "../data";

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>

            <div className="text-center max-w-4xl mx-auto z-10">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-accent font-medium mb-4 tracking-wide uppercase text-sm"
                >
                    Hi, I am {profile.name}
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold font-heading text-white mb-6 tracking-tight leading-tight"
                >
                    {profile.role} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">
                        crafting experiences.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    {profile.tagline} {profile.bio}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <a
                        href="#projects"
                        className="px-8 py-3.5 bg-accent text-slate-900 rounded-full font-semibold hover:bg-sky-400 transition-all flex items-center gap-2 group"
                    >
                        View Work
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3.5 border border-slate-700 text-white rounded-full font-medium hover:bg-slate-800 transition-all flex items-center gap-2"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
