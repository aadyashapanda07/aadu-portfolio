import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
    const [position, setPosition] = useState({ x: -500, y: -500 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        const handleMouseEnter = () => {
            setIsVisible(true);
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.documentElement.addEventListener("mouseleave", handleMouseLeave);
        document.documentElement.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
            document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [isVisible]);

    // Only show in dark mode
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const checkDark = () => {
            setIsDark(document.documentElement.classList.contains("dark"));
        };
        checkDark();

        const observer = new MutationObserver(checkDark);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);

    if (!isDark) return null;

    return (
        <motion.div
            className="cursor-glow"
            animate={{
                x: position.x,
                y: position.y,
                opacity: isVisible ? 1 : 0,
            }}
            transition={{
                type: "spring",
                damping: 30,
                stiffness: 200,
                mass: 0.5,
            }}
            style={{
                left: 0,
                top: 0,
            }}
        />
    );
}
