"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const backgroundImages = ['/Berti3.jpg', '/bg.png'];

export default function Home() {
    const [currentBg, setCurrentBg] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
        }, 10000); 
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative min-h-screen font-['Inter']">
            {/* Dynamic Background with AnimatePresence */}
            <div className="fixed inset-0 z-0 bg-[#0a0806]">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={currentBg}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ 
                            backgroundImage: `url(${backgroundImages[currentBg]})`,
                        }}
                    >
                        {/* Overlay as a child to ensure perfect sync */}
                        <div className="absolute inset-0 bg-[#0a0806]/80" />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Content Area */}
            <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-4xl"
                >
                    <div className="glass-card rotate-card p-12 text-center relative overflow-hidden group">
                        {/* Decorative background for the hero card */}
                        <div 
                            className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700 bg-cover bg-center -z-10 bg-[url('/asd.jpg')]"
                        />

                        <h1 className="text-6xl md:text-8xl font-bold text-[#c2a470] tracking-[0.2em] mb-4 font-['Rye'] text-shadow-gold">
                            HAIR RANCH
                        </h1>
                        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#c2a470] to-transparent mx-auto mb-8" />
                        
                        <h2 className="text-xl md:text-3xl text-[#fef8ee] font-serif italic tracking-widest mb-12 px-4 leading-relaxed uppercase">
                            "Ahol minden férﬁ és nő a legjobb stílusban távozik"
                        </h2>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/myself" className="btn-gold min-w-[200px]">
                                RÓLAM
                            </Link>
                            <Link 
                                href="/szolgaltatasok" 
                                className="bg-transparent border border-[#c2a470] text-[#c2a470] hover:bg-[#c2a470] hover:text-[#0a0806] font-bold py-3 px-8 rounded-lg transition-all duration-300 min-w-[200px]"
                            >
                                SZOLGÁLTATÁSOK
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Micro-animation for scroll hint */}
                <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-[#c2a470]/50"
                >
                    <span className="text-[10px] uppercase tracking-widest mb-2 font-semibold">Tudj meg többet</span>
                    <div className="w-0.5 h-10 bg-gradient-to-b from-[#c2a470]/50 to-transparent" />
                </motion.div>
            </section>
        </div>
    );
}