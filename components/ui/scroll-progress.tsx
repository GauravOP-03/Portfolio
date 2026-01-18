"use client";
import React from 'react';
import { motion, useScroll, useSpring } from "motion/react";

export const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();

    // Smooth out the animation so it feels fluid, not robotic
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        // The container is fixed at the top
        <div className="fixed top-0 left-0 w-full h-1 z-50 pointer-events-none">
            {/* The moving bar */}
            <motion.div
                className="h-full bg-primary shadow-[0_0_15px_rgba(154,13,242,0.8)]"
                initial={{ scaleX: 0 }} // Starts at 0 width
                style={{
                    scaleX,
                    transformOrigin: "left"
                }}
            />
        </div>
    );
};