import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText, Send } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar({ onOpenContact, onOpenResume }) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        {
            name: "Resume",
            href: "#",
            onClick: (e) => {
                e.preventDefault();
                if (onOpenResume) onOpenResume();
            },
        },
        {
            name: "Contact",
            href: "#",
            onClick: (e) => {
                e.preventDefault();
                if (onOpenContact) onOpenContact();
            },
        },
    ];

    const handleNavClick = (e, link) => {
        if (link.onClick) {
            e.preventDefault();
            setIsOpen(false);
            link.onClick(e);
            return;
        }

        if (link.href && link.href.startsWith("#")) {
            e.preventDefault();
            const targetId = link.href.substring(1);
            const targetElement = document.getElementById(targetId);

            setIsOpen(false);

            if (targetElement) {
                setTimeout(() => {
                    if (window.__lenis) {
                        window.__lenis.scrollTo(targetElement, { offset: -80, duration: 1.2 });
                    } else {
                        const navOffset = 80;
                        const elementPosition = targetElement.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - navOffset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth",
                        });
                    }
                }, 80);
            }
        }
    };

    return (
        <nav
            className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[92%] max-w-3xl rounded-full ${scrolled
                ? "bg-white/80 dark:bg-slate-900/85 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 shadow-lg shadow-black/5 dark:shadow-black/20"
                : "bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-white/20 dark:border-slate-800/40 shadow-sm"
                }`}
        >
            <div className="px-5 sm:px-6">
                <div className="flex justify-between items-center h-14">
                    {/* Brand / Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <a
                            href="#home"
                            onClick={(e) => handleNavClick(e, { href: "#home" })}
                            className="flex items-center gap-2 group cursor-pointer"
                        >
                            <div className="w-8 h-8 rounded-full overflow-hidden border border-sky-500/40 group-hover:scale-105 transition-transform">
                                <img src="/logo.png" alt="Aadyasha Logo" className="w-full h-full object-cover" />
                            </div>
                            <span className="font-heading font-bold text-sm tracking-tight text-slate-900 dark:text-white hidden sm:inline-block">
                                Aadyasha<span className="text-sky-600 dark:text-sky-400">.</span>
                            </span>
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link)}
                                className="px-3.5 py-1.5 rounded-full text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800/60 transition-all font-medium text-xs sm:text-sm cursor-pointer"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Right Tools (Theme Toggle + Action Button) */}
                    <div className="flex items-center gap-2">
                        <ThemeToggle />

                        <button
                            onClick={onOpenContact}
                            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
                        >
                            <Send size={12} />
                            <span>Hire Me</span>
                        </button>

                        {/* Mobile Hamburger Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white p-1.5 rounded-lg cursor-pointer"
                                aria-label="Toggle Menu"
                            >
                                {isOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 overflow-hidden rounded-b-3xl mx-1 mb-1 shadow-xl"
                    >
                        <div className="px-4 pt-3 pb-4 space-y-1.5">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link)}
                                    className="block px-3 py-2 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
