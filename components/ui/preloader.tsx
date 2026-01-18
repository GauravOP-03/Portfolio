'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useProgress } from '@react-three/drei';

export const Preloader = () => {
    const { progress } = useProgress();
    const [isLoading, setIsLoading] = useState(true);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        // Smooth counter animation
        const interval = setInterval(() => {
            setCounter((prev) => {
                if (prev < progress) return Math.min(prev + 1, Math.round(progress));
                return prev;
            });
        }, 10);
        return () => clearInterval(interval);
    }, [progress]);

    useEffect(() => {
        if (progress === 100) {
            const timer = setTimeout(() => setIsLoading(false), 1200);
            return () => clearTimeout(timer);
        }
    }, [progress]);

    const name = "GAURAV KUMAR";

    return (
        <AnimatePresence mode='wait'>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0a0a0c]"
                    initial={{ opacity: 1 }}
                    exit={{
                        y: "-100%",
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
                    }}
                >
                    {/* Background Subtle Gradient */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-[0.03]" />

                    <div className="relative flex flex-col items-center">
                        {/* Name Reveal */}
                        <div className="flex overflow-hidden mb-8">
                            {name.split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ y: "110%" }}
                                    animate={{ y: 0 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: index * 0.05,
                                        ease: [0.33, 1, 0.68, 1]
                                    }}
                                    className={`text-2xl md:text-4xl font-black tracking-[0.2em] text-white ${char === " " ? "mr-4" : ""}`}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </div>

                        {/* Progress Container */}
                        <div className="relative w-64 md:w-96 h-[1px] bg-white/5 overflow-hidden">
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-purple-400 to-primary"
                                initial={{ width: 0, x: "-100%" }}
                                animate={{
                                    width: `${progress}%`,
                                    x: 0
                                }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            />
                            {/* Inner Glow Line */}
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-white opacity-40 blur-[1px]"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            />
                        </div>

                        {/* Counter and Loading text */}
                        <div className="mt-8 flex flex-col items-center gap-2">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] text-slate-500 flex items-center gap-4"
                            >
                                <span className="w-12 text-right">{counter}%</span>
                                <span className="h-4 w-[1px] bg-white/10" />
                                <span>Initialising</span>
                            </motion.div>
                        </div>
                    </div>

                    {/* Industrial/Pro Decorative Elements */}
                    <div className="absolute bottom-12 left-12 overflow-hidden hidden md:block">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 }}
                            className="flex flex-col gap-1"
                        >
                            <div className="text-[10px] uppercase tracking-widest text-slate-600 font-medium">
                                Portfolio v2.0
                            </div>
                            <div className="text-[8px] uppercase tracking-widest text-slate-700 font-mono">
                                Loc: {new Date().getFullYear()}.34.12
                            </div>
                        </motion.div>
                    </div>

                    <div className="absolute bottom-12 right-12 overflow-hidden hidden md:block">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2 }}
                            className="flex flex-col items-end gap-1"
                        >
                            <div className="text-[10px] uppercase tracking-widest text-slate-600 font-medium">
                                Gaurav Kumar
                            </div>
                            <div className="text-[10px] uppercase tracking-widest text-primary font-bold">
                                Full Stack Developer
                            </div>
                        </motion.div>
                    </div>

                    {/* Corner Borders */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="absolute top-8 left-8 w-4 h-4 border-t border-l border-white/10"
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="absolute top-8 right-8 w-4 h-4 border-t border-r border-white/10"
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="absolute bottom-8 left-8 w-4 h-4 border-b border-l border-white/10"
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-white/10"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};