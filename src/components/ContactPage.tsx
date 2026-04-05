"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const backgroundImages = ['/Berti3.jpg', '/bg.png'];

export default function ContactPage() {
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
        {/* Header */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           className="w-full max-w-4xl mb-16"
        >
          <div className="glass-card rotate-card p-10 text-center relative overflow-hidden">
             <div className="absolute inset-0 opacity-10 bg-cover bg-center -z-10 bg-[url('/asd.jpg')]" />
             <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#fef8ee] font-bold tracking-widest mb-4 font-['Rye'] uppercase">
                ELÉRHETŐSÉG
             </h2>
             <p className="text-[#e6d3b3] italic text-lg font-light max-w-2xl mx-auto uppercase">
                Várunk szeretettel a Hair Ranch szalonban!
             </p>
          </div>
        </motion.div>

        {/* Contact Info & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl">
           {/* Left Info Column */}
           <div className="space-y-8 order-2 lg:order-1">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="glass-card rounded-2xl p-8 space-y-6">
                 <h3 className="text-2xl font-bold font-['Rye'] text-[#c2a470] border-b border-[#c2a470]/30 pb-4 uppercase">Kapcsolati Adatok</h3>
                 <div className="space-y-4">
                    <div className="flex items-start gap-4">
                       <span className="text-2xl">📍</span>
                       <div>
                          <p className="font-bold text-[#fef8ee]">Cím</p>
                          <p className="text-[#e6d3b3]">6000 Kecskemét, Március 15. utca 11</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <span className="text-2xl">📞</span>
                       <div>
                          <p className="font-bold text-[#fef8ee]">Telefonszám</p>
                          <p className="text-[#e6d3b3]">+36 20 123 4567</p>
                       </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <span className="text-2xl">⚡</span>
                        <div>
                           <p className="font-bold text-[#fef8ee]">Facebook</p>
                           <a 
                             href="https://www.facebook.com/bartalbertold"
                             target="_blank"
                             className="text-[#c2a470] hover:text-[#fef8ee] transition-colors"
                           >
                              HairRanch - Facebook
                           </a>
                        </div>
                     </div>
                  </div>
               </motion.div>

               <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card rounded-2xl p-8 space-y-6">
                  <h3 className="text-2xl font-bold font-['Rye'] text-[#c2a470] border-b border-[#c2a470]/30 pb-4 uppercase">Nyitvatartás</h3>
                  <div className="space-y-3">
                     {[
                       { d: "Kedd - Péntek", h: "09:00 - 19:00" },
                       { d: "Szombat", h: "08:00 - 12:00 (Minden 2. héten)" },
                       { d: "Hétfő & Vasárnap", h: "Zárva", c: "text-red-400" },
                     ].map(item => (
                       <div key={item.d} className="flex justify-between items-center text-[#e6d3b3]">
                          <span className="font-bold">{item.d}:</span>
                          <span className={item.c}>{item.h}</span>
                       </div>
                     ))}
                  </div>
               </motion.div>
            </div>

            {/* Right Map Column */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }} 
               whileInView={{ opacity: 1, scale: 1 }} 
               className="glass-card rounded-3xl overflow-hidden shadow-2xl relative min-h-[400px] lg:min-h-full order-1 lg:order-2"
            >
               <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2729.117183020611!2d19.67055!3d46.91845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4743da3e7a0e7161%3A0xbd76921350a49852!2zS2Vjc2tlbcOpdCwgTcOhcmNpdXMgMTUuIHUuIDExLCA2MDAw!5e0!3m2!1sen!2shu!4v1712332800000!5m2!1sen!2shu"
                 width="100%"
                 height="100%"
                 style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) opacity(0.8)" }}
                 allowFullScreen
                 loading="lazy"
               />
            </motion.div>
        </div>
      </section>
    </div>
  );
}