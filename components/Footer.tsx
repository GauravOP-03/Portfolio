import React from 'react';
import { Mail, Github, Linkedin, Twitter, Calendar } from 'lucide-react';
import { BackgroundBeams } from './ui/background-beams';
import { motion } from 'motion/react';

const Footer: React.FC = () => {
    return (
        <footer className="relative pt-24 pb-10 px-6 bg-black border-t border-white/5" id="contact">

            <div className="max-w-4xl mx-auto text-center relative z-10">

                {/* 1. The Hook */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white"
                >
                    Ready to start your <br />
                    <span className="text-primary italic">project?</span>
                </motion.h2>

                {/* 2. Low-Pressure Text */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-slate-400 mb-10 max-w-xl mx-auto text-lg"
                >
                    You don't need a full technical plan. Just pick a time that works for you, and we can discuss your idea.
                </motion.p>

                {/* 3. The Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4 mb-20"
                >

                    {/* PRIMARY: Cal.com Link */}
                    <motion.a
                        href="https://cal.com/gaurav-kumar-md11eh"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 h-14 px-8 rounded-full bg-primary text-white text-lg font-bold shadow-[0_0_40px_-10px_rgba(124,58,237,0.5)] cursor-pointer"
                    >
                        <Calendar className="w-5 h-5" />
                        Book a Strategy Call
                    </motion.a>

                    {/* SECONDARY: Email Link */}
                    <motion.a
                        href="mailto: kgauravop03@gmail.com"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 h-14 px-8 rounded-full bg-white/5 border border-white/10 text-white text-lg font-bold transition-colors cursor-pointer"
                    >
                        <Mail className="w-5 h-5" />
                        Send an Email
                    </motion.a>
                </motion.div>

                {/* 4. Footer Bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 gap-4"
                >
                    <div className="text-sm text-slate-500">
                        © {new Date().getFullYear()} Gaurav. All rights reserved.
                    </div>

                    <div className="flex gap-6">
                        {[
                            { icon: Twitter, link: "https://x.com/GauravOP_03" },
                            { icon: Github, link: "https://github.com/GauravOP-03" },
                            { icon: Linkedin, link: "https://linkedin.com" } // Add your LinkedIn URL
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.link}
                                target="_blank"
                                rel="noreferrer"
                                whileHover={{ scale: 1.2, color: "#fff" }}
                                whileTap={{ scale: 0.9 }}
                                className="text-slate-400 transition-colors"
                            >
                                <social.icon className="w-5 h-5" />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Background Decorative Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] pointer-events-none"></div>
            <BackgroundBeams />
        </footer >
    );
};

export default Footer;