"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const backgroundImages = ['/Berti3.jpg', '/bg.png'];

export default function BookingPage() {
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
           className="w-full max-w-4xl mb-16"
        >
          <div className="glass-card rotate-card p-10 text-center relative overflow-hidden">
             <div className="absolute inset-0 opacity-10 bg-cover bg-center -z-10 bg-[url('/asd.jpg')]" />
             <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#fef8ee] font-bold tracking-widest mb-4 font-['Rye'] uppercase">
                IDŐPONTFOGLALÁS
             </h2>
             <p className="text-[#e6d3b3] italic text-lg font-light max-w-2xl mx-auto">
                Foglalj időpontot stílusos környezetben, profik keze alatt.
             </p>
          </div>
        </motion.div>

        {/* Booking Form Card */}
        <div className="w-full max-w-4xl glass-card rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
          <form className="space-y-10 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-10">
              {/* Name */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-[#c2a470] tracking-widest uppercase mb-2">Név*</label>
                <input
                  type="text"
                  className="w-full bg-[#1e1a14]/50 border border-[#c2a470]/30 p-4 rounded-xl text-white focus:ring-2 focus:ring-[#c2a470] transition-all outline-none placeholder-[#c2a470]/30"
                  placeholder="Teljes neved"
                  required
                />
              </div>
              {/* Phone */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-[#c2a470] tracking-widest uppercase mb-2">Telefonszám*</label>
                <input
                  type="tel"
                  className="w-full bg-[#1e1a14]/50 border border-[#c2a470]/30 p-4 rounded-xl text-white focus:ring-2 focus:ring-[#c2a470] transition-all outline-none placeholder-[#c2a470]/30"
                  placeholder="+36 20 123 4567"
                  required
                />
              </div>
            </div>

            {/* Service Selection */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-[#c2a470] tracking-widest uppercase mb-2">Szolgáltatás*</label>
              <select className="w-full bg-[#1e1a14]/50 border border-[#c2a470]/30 p-4 rounded-xl text-white focus:ring-2 focus:ring-[#c2a470] transition-all outline-none appearance-none cursor-pointer">
                <option>Klasszikus Nyírás</option>
                <option>Szakáll Formázás</option>
                <option>Borotválás</option>
                <option>Gyermek Nyírás</option>
                <option>Prémium Csomag</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Date */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-[#c2a470] tracking-widest uppercase mb-2">Dátum</label>
                <input
                  type="date"
                  className="w-full bg-[#1e1a14]/50 border border-[#c2a470]/30 p-4 rounded-xl text-white focus:ring-2 focus:ring-[#c2a470] transition-all outline-none invert dark:invert-0"
                  required
                />
              </div>
              {/* Time */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-[#c2a470] tracking-widest uppercase mb-2">Időpont</label>
                <select className="w-full bg-[#1e1a14]/50 border border-[#c2a470]/30 p-4 rounded-xl text-white focus:ring-2 focus:ring-[#c2a470] transition-all outline-none appearance-none cursor-pointer">
                   {["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00"].map(t => (
                     <option key={t} value={t}>{t}</option>
                   ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-[#c2a470] tracking-widest uppercase mb-2">Üzenet (opcionális)</label>
              <textarea
                className="w-full bg-[#1e1a14]/50 border border-[#c2a470]/30 p-4 rounded-xl text-white focus:ring-2 focus:ring-[#c2a470] transition-all outline-none min-h-[120px] placeholder-[#c2a470]/30"
                placeholder="Speciális kérések..."
              />
            </div>

            {/* Submit Button */}
            <button
               type="submit"
               className="btn-gold w-full text-xl mt-6 uppercase tracking-widest"
            >
               FOGLALÁS MEGERŐSÍTÉSE
            </button>
          </form>
          
          <div className="absolute top-0 right-0 p-8 opacity-10 font-bold font-['Rye'] text-6xl select-none group-hover:text-[#c2a470] group-hover:opacity-20 transition-all duration-700 pointer-events-none">
            HAIR<br/>RANCH
          </div>
        </div>
      </section>
    </div>
  );
}