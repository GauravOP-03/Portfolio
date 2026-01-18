import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import CrystalScene from './CrystalScene'; // Assuming this is your existing component
import { ArrowDown, Calendar, ArrowRight } from 'lucide-react';
import { motion, useScroll } from 'motion/react';
import { FlipWords } from './ui/flip-words';

const Hero: React.FC = () => {

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 md:px-6 overflow-hidden">


            {/* Background Glows - Adjusted for better text contrast */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-violet-glow opacity-40 pointer-events-none z-0"></div>

            {/* 3D Scene Background - Kept the "expensive" look */}
            <div className="absolute inset-0 z-0 opacity-70 cursor-pointer">
                <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
                    <Suspense fallback={null}>
                        <CrystalScene />
                        <Environment preset="city" />
                    </Suspense>
                </Canvas>

            </div>


            {/* Main Content */}
            <div className="relative z-10 text-center max-w-5xl flex flex-col items-center gap-6 pointer-events-none">


                {/* Badge: "Available for Hire" builds urgency */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="pointer-events-auto inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
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
                    className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] md:leading-[0.95] text-white pb-2"
                >
                    I Build Custom Websites <br className="hidden md:block" />
                    That <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-400">Grow Your <FlipWords className='!text-violet-500 dark:!text-violet-500' words={["Business", "Revenue", "Brand", "Trust"]} /></span>
                </motion.h1>

                {/* Subtext: Addressing Pain Points (Speed, Mobile, Design) */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-base md:text-xl text-slate-400 font-medium max-w-2xl leading-relaxed pointer-events-auto px-4"
                >
                    Stop losing customers to slow, outdated websites. I design and develop
                    high-converting platforms that look perfect on every device.
                </motion.p>

                {/* Buttons: Direct Call to Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col md:flex-row gap-4 mt-8 pointer-events-auto w-full md:w-auto px-4"
                >
                    {/* Primary: View Work */}
                    <a href="#work" className="group relative w-full md:w-auto px-8 py-4 bg-white text-black font-bold rounded-lg overflow-hidden transition-all hover:scale-105 flex items-center justify-center gap-2">
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-slate-200 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        <span>View My Work</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>

                    {/* Secondary: Book Call */}
                    <a
                        href="https://cal.com/gaurav-kumar-md11eh" // Replace with actual link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full md:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-lg hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-2 backdrop-blur-md"
                    >
                        <span>Book a Strategy Call</span>
                        <Calendar className="w-4 h-4 text-slate-300" />
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce pointer-events-none z-20"
            >
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Scroll to explore</span>
                <ArrowDown className="w-4 h-4 text-slate-400" />
            </motion.div>


        </section>
    );
};

export default Hero;