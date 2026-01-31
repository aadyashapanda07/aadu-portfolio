import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar({ onOpenContact }) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#", onClick: (e) => { e.preventDefault(); onOpenContact(); } },
    ];

    return (
        <nav
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[90%] max-w-2xl rounded-full ${scrolled
                ? "glass"
                : "bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-white/10 dark:border-slate-800/50 shadow-sm"
                }`}
        >
            <div className="px-6">
                <div className="flex justify-between items-center h-14">
                    <div className="flex-shrink-0 flex items-center">
                        <a href="#" className="font-heading font-bold text-xl tracking-tighter shadow-sm rounded-full overflow-hidden block">
                            <img src="/favicon.jpg" alt="Logo" className="w-8 h-8 object-cover" />
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    if (link.onClick) link.onClick(e);
                                }}
                                className="px-4 py-1.5 rounded-full text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-800/50 transition-all font-medium text-sm"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        <ThemeToggle />

                        {/* Mobile Menu Button */}
                        <div className="md:hidden ml-2">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white p-1"
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
                        className="md:hidden bg-white/90 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 overflow-hidden rounded-b-2xl mx-1 mb-1"
                    >
                        <div className="px-4 pt-2 pb-4 space-y-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => {
                                        setIsOpen(false);
                                        if (link.onClick) link.onClick(e);
                                    }}
                                    className="block px-3 py-2 rounded-lg text-base font-medium text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
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
