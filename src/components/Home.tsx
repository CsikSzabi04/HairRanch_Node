"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
    const backgroundImages = [
        'berti3.jpg',
    ];

    const [currentBg, setCurrentBg] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
        }, 60000); // 60 seconds

        return () => clearInterval(interval);
    }, [backgroundImages.length]);

   return (
      <div className="overflow-hidden font-['Rye']">
      {/* Background wrapper - NO animation here */}
      <section
        className="min-h-screen bg-cover bg-center bg-fixed bg-blend-overlay bg-[#1e1a14]/80 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 pt-10 space-y-10 text-white transition-all duration-1000"
        style={{ backgroundImage: `url(${backgroundImages[currentBg]})` }}
      >
        {/* Animated content wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center w-full"
        >
        <div className="w-full max-w-2xl flex flex-col items-center space-y-10 text-center">
          <div
            style={{
              backgroundImage: 'url("/asd.jpg")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="w-[80%] p-6 rounded-xl bg-[#2a2118] border-4 border-[#c2a470] shadow-2xl ring-2 ring-[#796043] rotate-[-2deg]"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-[#fef8ee] tracking-widest mb-3">
              HAIR RANCH
            </h1>
            <div className="w-24 h-1 bg-[#c2a470] mx-auto mb-4" />
            <h2 className="text-xl md:text-2xl text-[#e6d3b3] italic tracking-widest">
              <strong>"Ahol minden férfi és nő, legjobb stílusban távozik"</strong>
            </h2>
            <Link
              href="/myself"
              className="text-[#c2a470] uppercase font-semibold text-sm hover:text-[#fef8ee] transition-colors no-underline tracking-wide px-3 py-1"
              style={{ textDecoration: "none", paddingRight: "10px" }}
            >
              Rólam ⬅ Katt
            </Link>
          </div>
        </div>
      </motion.div>
            </section>
    </div>
  )
}