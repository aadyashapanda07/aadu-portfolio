import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

function getInitialTheme() {
    if (typeof window !== "undefined" && window.localStorage) {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) return storedTheme;
    }
    return "dark";
}

export default function ThemeToggle() {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors relative overflow-hidden"
            aria-label="Toggle Theme"
        >
            <motion.div
                initial={false}
                animate={{ rotate: theme === "dark" ? 0 : 180 }}
                transition={{ duration: 0.3 }}
            >
                {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
            </motion.div>
        </button>
    );
}
