'use client';
import React, { Suspense } from 'react';
import { motion } from 'motion/react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import CrystalScene from './CrystalScene';

const IntroSplash = () => {
    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center bg-[#0a0a0c] overflow-hidden">
            {/* Background Texture/Ambient Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-[0.05] pointer-events-none" />

            {/* 3D Visual Centerpiece */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                    <Suspense fallback={null}>
                        <CrystalScene />
                        <Environment preset="city" />
                    </Suspense>
                </Canvas>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-4"
                >
                    {/* Big White Text */}
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-none">
                        GAURAV <br className="md:hidden" /> KUMAR
                    </h1>

                    {/* Subtext */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="flex items-center justify-center gap-4"
                    >
                        <span className="h-[1px] w-8 bg-primary/50 md:w-16" />
                        <p className="text-sm md:text-lg font-mono uppercase tracking-[0.4em] text-slate-400">
                            Full Stack Developer
                        </p>
                        <span className="h-[1px] w-8 bg-primary/50 md:w-16" />
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative Industrial Metadata */}
            <div className="absolute bottom-10 left-10 hidden md:block">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    className="text-[10px] uppercase tracking-[0.3em] text-slate-600 font-medium"
                >
                    Perspective / 2024
                </motion.div>
            </div>

            <div className="absolute bottom-10 right-10 hidden md:block">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 }}
                    className="text-right"
                >
                    <p className="text-[10px] uppercase tracking-[0.3em] text-slate-600">Based in India</p>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">Open for Work</p>
                </motion.div>
            </div>

            {/* Bottom Scroll Indicator (Optional) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="h-10 w-[1px] bg-gradient-to-b from-primary to-transparent" />
            </motion.div>
        </section>
    );
};

export default IntroSplash;
