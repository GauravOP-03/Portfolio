import React from 'react';
import { Bolt } from 'lucide-react';
import { motion } from 'motion/react';

const Navbar: React.FC = () => {
    return (
        <header className="fixed top-6 left-0 w-full z-40 flex justify-center px-4 pointer-events-none">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    mass: 1
                }}
                className="glass rounded-full px-6 py-3 flex items-center gap-8 shadow-2xl max-w-3xl w-full justify-between pointer-events-auto"
            >

                {/* BRANDING */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 cursor-pointer"
                >
                    <div className="size-8 rounded-full bg-gradient-to-br from-primary to-black flex items-center justify-center border border-white/10 shadow-inner">
                        <Bolt className="w-4 h-4 text-white" fill="currentColor" />
                    </div>
                    {/* Your Name */}
                    <span className="font-bold text-lg tracking-tight text-white">Gaurav Kumar</span>
                </motion.div>

                {/* NAVIGATION */}
                <div className="hidden md:flex items-center gap-8">
                    {['Work', 'Services', 'Contact'].map((item) => (
                        <motion.a
                            key={item}
                            whileHover={{ scale: 1.1, color: "#ffffff" }}
                            whileTap={{ scale: 0.95 }}
                            className="text-sm font-medium text-slate-400 transition-colors"
                            href={`#${item.toLowerCase()}`}
                        >
                            {item}
                        </motion.a>
                    ))}
                </div>

                {/* CTA BUTTON - Cal.com Link */}
                <motion.a
                    href="https://cal.com/gaurav-kumar-md11eh"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]"
                >
                    Book a Call
                </motion.a>
            </motion.nav>
        </header>
    );
};

export default Navbar;