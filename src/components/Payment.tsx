"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

const backgroundImages = ['/Berti3.jpg', '/bg.png'];

const rules = [
  {
    title: "Időpont törlése / módosítása",
    content: "Díjmentesen törölhető vagy áthelyezhető, amennyiben az időpontot megelőző 24 órán belül történik."
  },
  {
    title: "Aznapi lemondás",
    content: "Az aznap lemondott időpont, vagy módosítása esetében a következő alkalomnál az elmaradt szolgáltatás értékének az 50%-a kerül felszámításra."
  },
  {
    title: "Meg nem jelenés",
    content: "Ha nem jelensz meg a beírt időpontban és ezt nem jelzed legalább 24 órával az időpont előtt, a szolgáltatási árak 100%-a kerül felszámításra. (Abban az esetben is érvényes, ha betegség miatt nem jelensz meg.)"
  },
  {
    title: "Új vendégek",
    content: "Ha új vendégként nem jelensz meg a beírt időpontban és új időpontot szeretnél foglalni, az elmaradt szolgáltatási ár 100%-át meg kell térítened."
  },
  {
    title: "Késés",
    content: "Késés esetén, ha már a szolgáltatásra nincs idő, a következő alkalomnál találkozunk. Ha miattam történik csúszás, a következő alkalomnál 10% kedvezményt biztosítok."
  },
];

export default function RulesPage() {
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
           className="w-full max-w-3xl mb-24"
        >
          <div className="glass-card rotate-card p-10 text-center relative overflow-hidden">
             <div className="absolute inset-0 opacity-10 bg-cover bg-center -z-10 bg-[url('/asd.jpg')]" />
             <h2 className="text-4xl md:text-6xl text-[#fef8ee] font-bold tracking-widest mb-4 font-['Rye'] uppercase">
                SZABÁLYOK
             </h2>
             <p className="text-[#e6d3b3] italic text-lg font-light">
                "Mert szabályok nélkül nem lenne rend a káoszban"
             </p>
          </div>
        </motion.div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mb-24">
           {rules.map((rule, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: index * 0.1 }}
               className="glass-card p-8 rounded-2xl border-l-4 border-l-[#c2a470] hover-glow transition-all"
             >
                <h3 className="text-xl font-bold font-['Rye'] text-[#c2a470] mb-4 uppercase tracking-wider">{rule.title}</h3>
                <p className="text-[#fef8ee] leading-relaxed opacity-90">{rule.content}</p>
             </motion.div>
           ))}
        </div>

        {/* Payment & Thank You */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }} 
           whileInView={{ opacity: 1, scale: 1 }} 
           className="w-full max-w-3xl glass-card p-12 rounded-3xl text-center space-y-8"
        >
           <h3 className="text-4xl font-bold font-['Rye'] text-[#c2a470] uppercase text-shadow-gold">** Fizetés **</h3>
           <div className="space-y-4 text-[#fef8ee] text-lg">
              <p>A szalonban <strong>készpénzes fizetésre</strong> van lehetőség.</p>
              <p className="italic text-[#e6d3b3]">Az árváltoztatás jogát minden esetben fenntartjuk.</p>
           </div>
           <p className="text-2xl font-bold font-['Rye'] text-[#c2a470] pt-8 uppercase tracking-widest">
              Megértésüket Köszönöm! :)
           </p>
        </motion.div>
      </section>
    </div>
  );
}
