import React from 'react';
import {  Github, ArrowRight, CheckCircle2, Globe, Bot, Play, Loader2, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';

const WorkSection: React.FC = () => {
    return (
        <section className="py-24 relative bg-black overflow-hidden" id="work">
            <div className="max-w-7xl mx-auto px-4 md:px-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-24"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Featured <span className="text-primary">Projects</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl">
                        Real-world applications built for scale, performance, and business growth.
                    </p>
                </motion.div>

                {/* PROJECT 1: UniversityPortal (IN DEVELOPMENT) */}
                <div className="flex flex-col lg:flex-row gap-12 items-center mb-32 group">
                    {/* Image Side (Slides from Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:w-1/2 w-full relative"
                    >
                        {/* Breathing Background Glow */}
                        <motion.div
                            animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.1, 1] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"
                        ></motion.div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0E1338] shadow-2xl"
                        >
                            <div className="h-8 bg-black/40 flex items-center px-4 gap-2 border-b border-white/5">
                                <div className="flex gap-1.5">
                                    <div className="size-2.5 rounded-full bg-red-500/80"></div>
                                    <div className="size-2.5 rounded-full bg-yellow-500/80"></div>
                                    <div className="size-2.5 rounded-full bg-green-500/80"></div>
                                </div>
                                <div className="ml-4 text-[10px] text-slate-500 font-mono bg-black/20 px-2 py-0.5 rounded flex items-center gap-1">
                                    <Globe className="w-3 h-3" /> university-portal.dev
                                </div>
                            </div>
                            <div className="aspect-[16/8] bg-cover bg-top hover:bg-bottom transition-all duration-[3s] ease-in-out" style={{ backgroundImage: 'url(image.png)' }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1338] via-transparent to-transparent opacity-60"></div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="absolute -bottom-6 -right-6 glass p-4 rounded-xl border border-white/10 shadow-xl hidden md:flex items-center gap-4 bg-black/80 backdrop-blur-md"
                        >
                            <div className="size-12 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400">
                                <Loader2 className="w-6 h-6 animate-spin" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 uppercase tracking-wider">Status</p>
                                <p className="font-bold text-white">In Active Development</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Content Side (Slides Up) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:w-1/2 flex flex-col gap-6"
                    >
                        <div className="flex items-center gap-3">
                            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-bold uppercase tracking-widest">Enterprise Client</span>
                            <span className="text-yellow-500 text-sm flex items-center gap-1 font-medium">
                                <span className="size-1.5 rounded-full bg-yellow-500 animate-pulse"></span> Currently Building
                            </span>
                        </div>
                        <h3 className="text-4xl font-bold text-white">UniversityPortal <span className="text-slate-500">Global</span></h3>
                        <p className="text-lg text-slate-400 leading-relaxed">
                            A massive scale education marketplace being built for an international consultancy.<br /><br />
                            I am currently architecting the full-stack infrastructure to connect students, universities, and agents globally. The system is designed to handle complex role-based access, secure document uploads, and real-time application tracking.
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                            {['Supabase Architecture', 'Role-Based Security', 'Agent Dashboards', 'Next.js Monorepo'].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + (i * 0.1) }}
                                    className="flex items-center gap-2 text-slate-300 text-sm"
                                >
                                    <CheckCircle2 className="w-4 h-4 text-blue-500" /> {item}
                                </motion.li>
                            ))}
                        </ul>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link href={"https://university-portal-frontend-ten.vercel.app/"} target="_blank" className="px-6 py-3 bg-white text-black font-bold rounded-lg flex items-center gap-2">
                                    View Progress <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* PROJECT 2: Script AI */}
                <div className="flex flex-col lg:flex-row-reverse gap-12 items-center mb-32 group">
                    {/* Image Side (Slides from Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:w-1/2 w-full relative"
                    >
                        <motion.div
                            animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.1, 1] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                            className="absolute inset-0 bg-purple-500/20 blur-[100px] rounded-full"
                        ></motion.div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            className="relative rounded-xl overflow-hidden border border-white/10 bg-[#1a0b2e] shadow-2xl"
                        >
                            <div className="h-8 bg-black/40 flex items-center px-4 gap-2 border-b border-white/5">
                                <div className="flex gap-1.5">
                                    <div className="size-2.5 rounded-full bg-slate-600"></div>
                                    <div className="size-2.5 rounded-full bg-slate-600"></div>
                                    <div className="size-2.5 rounded-full bg-slate-600"></div>
                                </div>
                                <div className="ml-4 text-[10px] text-slate-500 font-mono bg-black/20 px-2 py-0.5 rounded flex items-center gap-1">
                                    <Bot className="w-3 h-3" /> script-ai.app
                                </div>
                            </div>
                            <div className="aspect-[16/8] bg-cover bg-center" style={{ backgroundImage: 'url(ScriptAi.png)' }}></div>
                        </motion.div>
                    </motion.div>

                    {/* Content Side (Slides Up) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:w-1/2 flex flex-col gap-6"
                    >
                        <div className="flex items-center gap-3">
                            <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-bold uppercase tracking-widest">AI SaaS Product</span>
                            <span className="text-slate-500 text-sm flex items-center gap-1"><span className="size-1.5 rounded-full bg-purple-500"></span> Open Source</span>
                        </div>
                        <h3 className="text-4xl font-bold text-white">Script AI <span className="text-slate-500">Co-Pilot</span></h3>
                        <p className="text-lg text-slate-400 leading-relaxed">
                            A personalized AI assistant built for content creators. Unlike generic AI, Script AI <span className="text-white">learns your specific style and voice</span>.<br /><br />
                            It automates the entire production workflow—generating scripts, designing thumbnails, and syncing subtitles—tailored specifically to the creator's audience.
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                            {['Style Learning Algorithms', 'Auto-Thumbnails', 'Subtitle Sync', 'Creator Workflow'].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + (i * 0.1) }}
                                    className="flex items-center gap-2 text-slate-300 text-sm"
                                >
                                    <Bot className="w-4 h-4 text-purple-500" /> {item}
                                </motion.li>
                            ))}
                        </ul>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link href={"https://github.com/scriptaiapp/scriptai"} target="_blank" className="px-6 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2">
                                    View Source Code <Github className="w-4 h-4" />
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link href={"https://tryscriptai.com/"} target="_blank" className="px-6 py-3 text-slate-400 hover:text-white font-medium transition-colors flex items-center gap-2">
                                    Watch Demo <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* COMING SOON / ARCHIVE INDICATOR */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center justify-center text-center mt-20 pt-10 border-t border-white/5"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium mb-6 animate-pulse">
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                        <span>More Projects In The Pipeline</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        Constantly <span className="text-slate-500">Shipping</span>
                    </h3>
                    <p className="text-slate-400 max-w-lg mx-auto">
                        I have built scalable databases, real-time engines, and multiple internal tools.
                        Check out my capabilities below or ask me about my other work.
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default WorkSection;