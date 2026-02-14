import { motion } from "framer-motion";
import { skills } from "../data";

export default function Skills() {
    const allSkills = skills.flatMap((category) => category.items);

    return (
        <section id="skills" className="py-20 relative">
            <div className="text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                    whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-4">
                        Tech <span className="text-sky-600 dark:text-accent">Stack</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Technologies I use to build scalable and robust applications.
                    </p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-3xl mx-auto group/container"
            >
                {allSkills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.03 }}
                        className="group/item relative cursor-default flex items-center justify-center w-12 h-12 md:w-14 md:h-14"
                    >
                        <skill.icon
                            className="text-3xl md:text-4xl transition-all duration-300 opacity-25 grayscale group-hover/item:opacity-100 group-hover/item:grayscale-0"
                            style={{ color: skill.color }}
                        />
                        <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[10px] font-medium text-slate-400 dark:text-slate-500 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                            {skill.name}
                        </span>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
