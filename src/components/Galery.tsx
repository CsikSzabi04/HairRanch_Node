"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

const shopImages = [ '/3.jpg', '/4.jpg', '/5.jpg', '/1.jpg', '/2.jpg', '/6.jpg', '/7.jpg', '/8.jpg' ];
const workImages1 = [ '/berti5.png', '/ferfi2.png', '/szurkeberti.jpg', '/berti6.jpg', '/noi2.jpg', '/ferfi6.jpg', '/regi.jpg', '/ferfi.jpg', '/ferfi3.jpg', '/ferfi4.jpg' ];
const workImages2 = [ '/9.jpg', '/10.jpg', '/12.jpg', '/13.jpg', '/14.jpg', '/15.jpg', '/16.jpg', '/17.jpg', '/18.jpg', '/19.jpg', '/20.jpg', '/21.jpg', '/22.jpg', '/23.jpg', '/24.jpg', '/25.jpg', '/26.jpg' ];

const backgroundImages = ['/Berti3.jpg', '/bg.png'];

export default function GalleryPage() {
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
            <div className="absolute inset-0 bg-[#0a0806]/90" />
          </motion.div>
        </AnimatePresence>
      </div>

      <section className="relative z-10 px-4 py-32 max-w-7xl mx-auto flex flex-col items-center">
        {/* Header Banner */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           className="w-full max-w-4xl mb-24"
        >
          <div className="glass-card rotate-card p-10 text-center relative overflow-hidden">
             <div className="absolute inset-0 opacity-10 bg-cover bg-center -z-10 bg-[url('/asd.jpg')]" />
             <h2 className="text-4xl md:text-6xl text-[#fef8ee] font-bold tracking-widest mb-4 font-['Rye'] uppercase">
                GALÉRIA
             </h2>
             <p className="text-[#e6d3b3] italic text-lg font-light max-w-2xl mx-auto">
                Nem mindig a harsány a feltűnő. A legnagyobb változás néha csendben történik, csak hagyni kell, hogy a fény elvégezze a dolgát.
             </p>
          </div>
        </motion.div>

        {/* Section: A Szalon */}
        <div className="w-full mb-24">
            <h3 className="text-3xl font-bold font-['Rye'] text-[#c2a470] mb-12 border-b border-[#c2a470]/30 pb-4 uppercase tracking-widest">A Szalon</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {shopImages.map((img, idx) => (
                    <motion.div 
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className="aspect-square glass-card rounded-2xl overflow-hidden hover-glow transition-all"
                    >
                        <img src={img} alt={`Szalon ${idx}`} className="w-full h-full object-cover" loading="lazy" />
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Section: Munkáink */}
        <div className="w-full mb-24">
            <h3 className="text-3xl font-bold font-['Rye'] text-[#c2a470] mb-12 border-b border-[#c2a470]/30 pb-4 uppercase tracking-widest">Stílus & Formák</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {[...workImages1, ...workImages2].map((img, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: (idx % 4) * 0.1 }}
                        viewport={{ once: true }}
                        className="aspect-[3/4] glass-card rounded-2xl overflow-hidden group shadow-xl"
                    >
                        <img 
                            src={img} 
                            alt={`Work ${idx}`} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                            loading="lazy" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0806]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}