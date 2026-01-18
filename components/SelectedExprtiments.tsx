import React from 'react';
import { ArrowRight, Database, Zap, LayoutDashboard } from 'lucide-react';
import { motion } from 'motion/react';

const projects = [
    {
        title: "Real-Time Interaction Engines",
        category: "WebSocket Architecture",
        description: "Built high-concurrency systems for live quiz apps and collaborative note-taking platforms (NoteNest).",
        icon: <Zap className="w-4 h-4" />,
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "Admin Analytics Dashboard",
        category: "Internal Business Tools",
        description: "A comprehensive management panel for approving agents, managing users, and tracking university stats.",
        icon: <LayoutDashboard className="w-4 h-4" />,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
    },
    {
        title: "Scalable Database Design",
        category: "Backend Architecture",
        description: "Architecting complex, normalized SQL schemas from scratch designed to handle massive data growth.",
        icon: <Database className="w-4 h-4" />,
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2121&auto=format&fit=crop"
    }
];

const MoreCapabilities: React.FC = () => {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
        },
        transition: {
            type: "spring",
            stiffness: 50,
            damping: 20
        }
    };

    return (
        <section className="py-24 overflow-hidden bg-black border-t border-white/5">
            <div className="px-4 md:px-10 max-w-7xl mx-auto mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-3xl md:text-4xl font-bold text-white">Technical <span className="text-primary">Capabilities</span></h3>
                    <p className="text-slate-400 mt-2">Beyond the frontend: The systems that power your business.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="hidden md:flex gap-2 text-slate-500 text-sm items-center"
                >
                    Scroll to explore
                    <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    >
                        <ArrowRight className="w-4 h-4" />
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="flex gap-6 px-4 md:px-10 overflow-x-auto pb-8 snap-x scrollbar-hide"
            >
                {projects.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        className="min-w-[300px] md:min-w-[400px] snap-center group cursor-pointer"
                    >
                        {/* Image Container */}
                        <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-4 border border-white/10">
                            {/* 1. The Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url("${item.image}")` }}
                            ></div>

                            {/* 2. THE FIX: Purple Tint Overlay */}
                            <div className="absolute inset-0 bg-violet-600/20 mix-blend-overlay z-10 pointer-events-none"></div>
                            <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none"></div>
                        </div>

                        {/* Text Content */}
                        <div className="flex items-center gap-3 mb-2">
                            <span className="p-2 rounded-full bg-white/5 border border-white/10 text-primary">
                                {item.icon}
                            </span>
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">{item.category}</span>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                        <p className="text-sm text-slate-400">{item.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default MoreCapabilities;