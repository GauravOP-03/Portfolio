import React from 'react';
import { Layout, Smartphone, Globe, Zap, Database, BarChart3, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

const Services: React.FC = () => {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Delays each child by 0.1s
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
        },
        transition: { duration: 0.5, ease: "easeOut" }
    };

    const headerVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
        },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    return (
        <section className="py-24 px-4 md:px-10 lg:px-20 relative z-10 bg-black" id="services">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4"
                >
                    <motion.div variants={headerVariants}>
                        <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white">
                            How I Can <span className="text-primary">Help You</span>
                        </h2>
                        <p className="text-slate-400">Digital solutions designed to grow your revenue.</p>
                    </motion.div>

                    {/* Decorative Line Animation */}
                    <motion.div
                        initial={{ scaleX: 0, originX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent mx-8 hidden md:block mb-4"
                    ></motion.div>
                </motion.div>

                {/* Grid Layout */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[200px]"
                >

                    {/* CARD 1 (Large): Website Design */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        className="md:col-span-2 md:row-span-2 rounded-2xl p-8 flex flex-col justify-between group overflow-hidden relative border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Layout className="w-40 h-40 text-white" />
                        </div>
                        <div className="relative z-10">
                            <div className="size-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6 text-primary border border-primary/20">
                                <Layout className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-white">Custom Website Design</h3>
                            <p className="text-slate-400 mb-6">
                                Stop using generic templates. I build custom, high-performance websites that capture attention and turn visitors into customers.
                            </p>
                            {/* Tags focused on benefits */}
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 font-medium">Mobile Responsive</span>
                                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 font-medium">SEO Optimized</span>
                                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 font-medium">Fast Loading</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* CARD 2 (Medium): 3D Experiences */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        className="md:col-span-2 md:row-span-1 rounded-2xl p-6 flex items-center justify-between group relative overflow-hidden bg-[#1a0b2e] border border-white/10"
                    >
                        <div className="relative z-10 flex-1">
                            <h3 className="text-xl font-bold text-white mb-1">Interactive 3D Visuals</h3>
                            <p className="text-sm text-slate-400">Make your brand unforgettable with immersive web experiences.</p>
                        </div>
                        <motion.div
                            whileHover={{ rotate: 15, scale: 1.1 }}
                            className="relative z-10 size-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-primary transition-colors"
                        >
                            <Globe className="w-6 h-6 text-white" />
                        </motion.div>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-transparent"></div>
                    </motion.div>

                    {/* CARD 3 (Small): Speed/SEO */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        className="md:col-span-1 md:row-span-1 rounded-2xl p-6 flex flex-col justify-center gap-2 group bg-white/5 border border-white/10 hover:border-primary/50 transition-colors"
                    >
                        <div className="size-10 rounded-lg bg-orange-500/10 text-orange-400 flex items-center justify-center mb-2">
                            <Zap className="w-5 h-5" />
                        </div>
                        <h4 className="font-bold text-white">Speed & SEO</h4>
                        <div className="text-xs text-slate-400">Rank higher on Google with a lightning-fast site.</div>
                    </motion.div>

                    {/* CARD 4 (Small): Analytics/Dashboards */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        className="md:col-span-1 md:row-span-1 rounded-2xl p-6 flex flex-col justify-center gap-2 group bg-white/5 border border-white/10 hover:border-primary/50 transition-colors"
                    >
                        <div className="size-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-2">
                            <BarChart3 className="w-5 h-5" />
                        </div>
                        <h4 className="font-bold text-white">Analytics</h4>
                        <div className="text-xs text-slate-400">Track your growth with custom data dashboards.</div>
                    </motion.div>

                    {/* CARD 5 (Wide): Custom Software */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        className="md:col-span-4 md:row-span-1 rounded-2xl p-8 flex flex-col md:flex-row md:items-center gap-8 relative overflow-hidden bg-gradient-to-br from-slate-900 to-black border border-white/10"
                    >
                        <div className="z-10 flex-1">
                            <h3 className="text-2xl font-bold mb-2 text-white">Complex Web Applications (SaaS)</h3>
                            <p className="text-slate-400 max-w-2xl">
                                Need more than just a website? I build powerful booking systems, customer portals, and internal tools to automate your business operations.
                            </p>
                        </div>
                        <div className="z-10 flex gap-4">
                            <motion.a
                                href="#contact"
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-2 text-white font-bold hover:text-primary transition-colors"
                            >
                                Discuss Your Idea <ArrowUpRight className="w-4 h-4" />
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;