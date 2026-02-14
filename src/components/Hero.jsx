import { ArrowRight } from "lucide-react";
import { profile } from "../data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import profileImg from "../assets/profile.jpg";


export default function Hero({ onOpenContact }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <section ref={ref} id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Background Sync */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50 dark:to-black z-10" />
                <img
                    src={profileImg}
                    alt="Background Ambience"
                    className="w-full h-full object-cover opacity-30 dark:opacity-20 blur-[100px] scale-150 transform"
                    style={{ maskImage: "radial-gradient(circle, black 40%, transparent 80%)" }}
                />
            </div>

            <motion.div
                style={{ y, opacity }}
                className="max-w-7xl mx-auto z-10 px-4 w-full grid md:grid-cols-2 gap-12 items-center"
            >
                {/* Content Left */}
                {/* Content Left */}
                <div className="text-center md:text-left order-2 md:order-1">
                    {/* Status Badge */}


                    <h1 className="text-5xl md:text-7xl font-bold font-heading text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]">
                        {profile.role} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600 dark:from-sky-400 dark:to-indigo-400">
                            {Array.from("crafting experiences.").map((char, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.05, delay: index * 0.05 }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </span>
                    </h1>

                    <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed">
                        {profile.tagline} {profile.bio}
                    </p>

                    {/* Stats Row */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-8 mb-10 text-sm font-medium text-slate-500 dark:text-slate-400">
                        <div className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                            Full Stack Dev
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                            Based in India
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                            Remote Friendly
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
                        <a
                            href="#projects"
                            className="px-8 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all flex items-center gap-2 group shadow-lg shadow-sky-500/20"
                        >
                            View Work
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <button
                            onClick={onOpenContact}
                            className="px-8 py-3.5 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-white rounded-full font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center gap-2"
                        >
                            Contact Me
                        </button>
                    </div>
                </div>



                {/* Image Right */}
                <div className="order-1 md:order-2 flex justify-center relative">
                    <div className="relative w-72 h-72 md:w-96 md:h-96 overflow-hidden rounded-[2rem] border-4 border-white/20 dark:border-white/10 shadow-2xl">
                        <div className="absolute inset-0 bg-sky-500/10 blur-2xl transform rotate-6"></div>
                        <img
                            src={profileImg}
                            alt={profile.name}
                            className="relative w-full h-full object-cover object-[50%_25%] scale-125"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
