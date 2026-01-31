import { motion } from "framer-motion";
import { skills } from "../data";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function Skills() {
    return (
        <section id="skills" className="py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">Technical Proficiency</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    A collection of tools and technologies I use to build robust applications.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {skills.map((skillGroup, idx) => (
                    <motion.div
                        key={idx}
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-50px" }}
                        className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors"
                    >
                        <h3 className="text-xl font-bold text-white mb-4 border-b border-slate-800 pb-2">
                            {skillGroup.category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {skillGroup.items.map((skill, sIdx) => (
                                <motion.span
                                    key={sIdx}
                                    variants={item}
                                    className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full border border-slate-700 hover:text-accent hover:border-accent/50 transition-colors cursor-default"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
