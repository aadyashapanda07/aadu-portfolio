import { profile } from "../data";
import { ArrowUp, Github, Linkedin, Mail, Heart } from "lucide-react";
import { openEmailClient } from "../lib/email";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 backdrop-blur-md pt-12 pb-8 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200/60 dark:border-slate-800/60">
                    {/* Brand */}
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full overflow-hidden border border-sky-500/40">
                            <img src="/logo.png" alt="Aadyasha Logo" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <span className="font-heading font-bold text-base text-slate-900 dark:text-white">
                                {profile.name}
                            </span>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                B.Tech CSE @ NIST University
                            </p>
                        </div>
                    </div>

                    {/* Quick Nav */}
                    <div className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                        <a href="#home" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Home</a>
                        <a href="#about" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">About</a>
                        <a href="#skills" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Skills</a>
                        <a href="#projects" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Projects</a>
                    </div>

                    {/* Socials & Back To Top */}
                    <div className="flex items-center gap-3">
                        {profile.social.map((item) => (
                            <a
                                key={item.name}
                                href={item.url}
                                onClick={item.name.toLowerCase() === "email" ? openEmailClient : undefined}
                                target={item.url.startsWith("mailto:") ? undefined : "_blank"}
                                rel="noreferrer"
                                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-850 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-sky-600 dark:hover:bg-sky-500 transition-all cursor-pointer"
                                aria-label={item.name}
                            >
                                <item.icon size={16} />
                            </a>
                        ))}

                        <button
                            onClick={scrollToTop}
                            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-850 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 border border-slate-200 dark:border-slate-800 transition-all cursor-pointer"
                            aria-label="Back to top"
                            title="Back to top"
                        >
                            <ArrowUp size={16} />
                        </button>
                    </div>
                </div>

                <div className="pt-6 flex items-center justify-center text-center">
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium tracking-wide flex items-center justify-center gap-1.5">
                        <span>© since 2024 made by</span>
                        <Heart size={14} className="text-red-500 fill-red-500 inline mx-0.5" />
                        <span className="font-semibold text-slate-700 dark:text-slate-300">aadyasha panda</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
