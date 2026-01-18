import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import CrystalScene from './CrystalScene';
import { ArrowDown, Calendar, ArrowRight, Box } from 'lucide-react';
import { motion } from 'motion/react';
import { FlipWords } from './ui/flip-words';

const Hero: React.FC = () => {
    const [show3D, setShow3D] = useState(true);

    return (
        <section className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-32 pb-12 px-4 md:px-6 overflow-hidden bg-black">

            {/* 3D TOGGLE SWITCH 
               - Mobile: Top 28 (clears navbar), Right 4
               - Desktop: Top 24, Right 10
            */}
            <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => setShow3D(!show3D)}
                className={`absolute top-28 right-4 md:top-24 md:right-10 z-30 flex items-center gap-2 px-4 py-2 md:px-3 md:py-1.5 rounded-full border backdrop-blur-md transition-all duration-300 ${show3D
                        ? "bg-white/10 border-primary/50 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                        : "bg-black/40 border-white/5 hover:bg-white/5"
                    }`}
            >
                {/* Status Dot */}
                <div className={`w-1.5 h-1.5 rounded-full transition-colors ${show3D ? "bg-green-400 animate-pulse" : "bg-slate-600"}`} />

                {/* Icon & Text */}
                <Box className={`w-4 h-4 md:w-3 md:h-3 ${show3D ? "text-white" : "text-slate-500"}`} />
                <span className={`text-[10px] font-bold tracking-widest uppercase ${show3D ? "text-white" : "text-slate-500"}`}>
                    3D {show3D ? "ON" : "OFF"}
                </span>
            </motion.button>

            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vh] bg-violet-600/20 blur-[120px] rounded-full pointer-events-none z-0"></div>

            {/* 3D Scene Background */}
            {show3D && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 z-0 cursor-pointer"
                >
                    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
                        <Suspense fallback={null}>
                            <CrystalScene />
                            <Environment preset="city" />
                        </Suspense>
                    </Canvas>
                </motion.div>
            )}

            {/* Main Content */}
            <div className="relative z-10 text-center max-w-5xl flex flex-col items-center gap-6 pointer-events-none mt-0 md:mt-0">

                {/* Badge: "Available for Hire" */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="pointer-events-auto inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-xs font-medium tracking-wide uppercase text-slate-300">Accepting New Projects</span>
                </motion.div>

                {/* H1: The Sales Pitch */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] md:leading-[1.1] text-white pb-2 px-2"
                >
                    I Build Custom Websites <br className="hidden md:block" />
                    That <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-400">
                        Grow Your <br className="md:hidden" />
                        <FlipWords className='!text-violet-500 dark:!text-violet-500' words={["Business", "Revenue", "Brand", "Trust"]} />
                    </span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-base sm:text-lg md:text-xl text-slate-400 font-medium max-w-2xl leading-relaxed pointer-events-auto px-4"
                >
                    Stop losing customers to slow, outdated websites. I design and develop
                    high-converting platforms that look perfect on every device.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 mt-8 pointer-events-auto w-full sm:w-auto px-6 sm:px-0"
                >
                    {/* Primary: View Work */}
                    <motion.a
                        href="#work"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-lg overflow-hidden transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-slate-200 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        <span className="relative z-10">View My Work</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                    </motion.a>

                    {/* Secondary: Book Call */}
                    <motion.a
                        href="https://cal.com/gaurav-kumar-md11eh"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 backdrop-blur-md"
                    >
                        <span>Book a Strategy Call</span>
                        <Calendar className="w-4 h-4 text-slate-300" />
                    </motion.a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5, y: [0, 10, 0] }}
                transition={{
                    opacity: { delay: 1, duration: 1 },
                    y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-20"
            >
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Scroll to explore</span>
                <ArrowDown className="w-4 h-4 text-slate-400" />
            </motion.div>

        </section>
    );
};

export default Hero;