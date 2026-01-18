import React, { useState } from 'react';
import { Bolt, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle menu handler
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="fixed top-6 left-0 w-full z-50 flex flex-col items-center px-4 pointer-events-none">

            {/* MAIN NAVBAR */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="glass rounded-full px-6 py-3 flex items-center justify-between shadow-2xl max-w-3xl w-full pointer-events-auto relative z-50 bg-black/50 backdrop-blur-xl border border-white/10"
            >
                {/* BRANDING */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 cursor-pointer"
                >
                    <div className="size-8 rounded-full bg-gradient-to-br from-primary to-black flex items-center justify-center border border-white/10 shadow-inner">
                        <Bolt className="w-4 h-4 text-white" fill="currentColor" />
                    </div>
                    <span className="font-bold text-lg tracking-tight text-white">Gaurav Kumar</span>
                </motion.div>

                {/* DESKTOP NAVIGATION (Hidden on Mobile) */}
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

                {/* DESKTOP CTA (Hidden on Mobile) */}
                <motion.a
                    href="https://cal.com/gaurav-kumar-md11eh"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="hidden md:block bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]"
                >
                    Book a Call
                </motion.a>

                {/* MOBILE MENU TOGGLE (Visible on Mobile) */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-white p-1 rounded-full hover:bg-white/10 transition-colors"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </motion.nav>

            {/* MOBILE MENU DRAWER */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-20 left-4 right-4 md:hidden pointer-events-auto"
                    >
                        <div className="glass rounded-2xl p-6 flex flex-col gap-6 bg-black/90 backdrop-blur-xl border border-white/10 shadow-2xl">
                            {/* Mobile Links */}
                            <div className="flex flex-col gap-4">
                                {['Work', 'Services', 'Contact'].map((item) => (
                                    <a
                                        key={item}
                                        onClick={() => setIsOpen(false)} // Close menu on click
                                        href={`#${item.toLowerCase()}`}
                                        className="text-lg font-medium text-slate-300 hover:text-white transition-colors flex items-center justify-between border-b border-white/5 pb-2"
                                    >
                                        {item}
                                    </a>
                                ))}
                            </div>

                            {/* Mobile CTA */}
                            <a
                                href="https://cal.com/gaurav-kumar-md11eh"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-xl text-center font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                            >
                                Book a Call
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;