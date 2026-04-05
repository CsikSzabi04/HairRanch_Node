"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    name: "Üdvözöllek, a nevem",
    namess: "Bartal Bertold",
    price: "A Hair Ranch megálmodója",
    image: "/Berti3.jpg",
  },
  {
    name: "Szenvedélyem",
    namess: "A fodrászat",
    price: "Minden vágás egy új történet",
    image: "/szurkeberti.jpg",
  },
];

const backgroundImages = ['/Berti3.jpg', '/bg.png'];

const brandImages = [
  '/joico.jpeg',
  '/joico1.jpg',
  '/joico2.jpg'
];

export default function MyselfPage() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen font-['Inter'] overflow-x-hidden">
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
            <div className="absolute inset-0 bg-[#0a0806]/85" />
          </motion.div>
        </AnimatePresence>
      </div>

      <section className="relative z-10 px-4 py-32 max-w-7xl mx-auto flex flex-col items-center">
        {/* Header Banner */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           className="w-full max-w-3xl mb-24"
        >
          <div className="glass-card rotate-card p-10 text-center relative overflow-hidden">
             <div className="absolute inset-0 opacity-10 bg-cover bg-center -z-10 bg-[url('/asd.jpg')]" />
             <h2 className="text-4xl md:text-6xl text-[#fef8ee] font-bold tracking-widest mb-4 font-['Rye'] uppercase">
                Magamról
             </h2>
             <p className="text-[#e6d3b3] italic text-lg font-light">
                "Mert minden egyes hajvágásnak lelke van, nálunk ez életre kel." - Bartal Bertold
             </p>
          </div>
        </motion.div>

        {/* Intro Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl mb-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-card rounded-3xl overflow-hidden hover-glow transition-all duration-300 group"
            >
              <div className="h-80 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.namess}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0806] to-transparent opacity-60" />
              </div>
              <div className="p-8 text-center space-y-4">
                <h3 className="text-[#c2a470] uppercase tracking-widest text-sm font-bold">
                  {service.name}
                </h3>
                <h4 className="text-2xl md:text-3xl font-bold font-['Rye'] text-[#fef8ee]">
                   {service.namess}
                </h4>
                <p className="text-[#e6d3b3] italic font-medium">{service.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Media Section: Video & Images */}
        <div className="w-full max-w-5xl mb-24 space-y-12">
            <h3 className="text-3xl font-bold font-['Rye'] text-[#c2a470] text-center border-b border-[#c2a470]/30 pb-4">
               GALÉRIA & STÍLUS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="aspect-[3/4] rounded-2xl overflow-hidden border-2 border-[#c2a470]/30 shadow-2xl">
                    <img src="/berti5.png" alt="Berti 1" className="w-full h-full object-cover" loading="lazy" />
                </motion.div>
                
                <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#c2a470]/50 relative group">
                    <video src="/video.mp4" controls className="w-full h-full object-cover" />
                    <div className="absolute inset-0 pointer-events-none border-8 border-transparent group-hover:border-[#c2a470]/20 transition-all duration-500" />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="aspect-[3/4] rounded-2xl overflow-hidden border-2 border-[#c2a470]/30 shadow-2xl">
                    <img src="/berti2.png" alt="Berti 2" className="w-full h-full object-cover" loading="lazy" />
                </motion.div>
            </div>
        </div>

        {/* Brand/Partner Grid */}
        <div className="w-full max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {brandImages.map((img, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card aspect-square rounded-2xl overflow-hidden group shadow-lg"
                  >
                    <img
                      src={img}
                      alt={`Brand ${index + 1}`}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}