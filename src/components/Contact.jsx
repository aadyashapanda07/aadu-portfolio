import { motion } from "framer-motion";
import { profile } from "../data";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl -z-10"></div>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">Let's Connect</h2>
                    <p className="text-slate-400 mb-8 text-lg">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                        I'll try my best to get back to you!
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-slate-300">
                            <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-accent">
                                <Mail size={20} />
                            </div>
                            <span>{profile.email}</span>
                        </div>
                        <div className="flex items-center gap-4 text-slate-300">
                            {/* Placeholder for phone since not everyone wants it public, but it's in the data so I'll add it */}
                            <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-accent">
                                <Phone size={20} />
                            </div>
                            <span>+91 7326880984</span>
                        </div>
                        <div className="flex items-center gap-4 text-slate-300">
                            <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-accent">
                                <MapPin size={20} />
                            </div>
                            <span>{profile.location}</span>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-10">
                        {profile.social.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:border-accent hover:bg-accent/10 transition-all"
                                aria-label={social.name}
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-slate-900 border border-slate-800 rounded-2xl p-8"
                >
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                                placeholder="Your message here..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-accent text-slate-900 font-bold py-3.5 rounded-lg hover:bg-sky-400 transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
