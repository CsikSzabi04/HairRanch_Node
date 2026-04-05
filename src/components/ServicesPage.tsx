"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    name: "Férfi hajvágás (rövid)",
    price: "? -Ft",
    image: "/ferfi3.jpg",
  },
  {
    name: "Férfi hajvágás (medium & long)",
    price: "? -Ft",
    image: "/ferfi2.png",
  },
  {
    name: "Férfi hajfestés",
    price: "? -Ft",
    image: "/ferfi.jpg",
  },
];

const services2 = [
  {
    name: "Női hajvágás (rövid)",
    price: "? -Ft",
    image: "/l.jpg",
  },
  {
    name: "Női hajvágás (long)",
    price: "? -Ft",
    image: "/sz.jpg",
  },
  {
    name: "Női hajfestés",
    price: "? -Ft",
    image: "/szl.jpg",
  },
];

const backgroundImages = ['/Berti3.jpg', '/bg.png'];

export default function ServicesPage() {
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
            <div className="absolute inset-0 bg-[#0a0806]/85" />
          </motion.div>
        </AnimatePresence>
      </div>

      <section className="relative z-10 px-4 py-32 max-w-7xl mx-auto flex flex-col items-center">
        {/* Banner Section */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           className="w-full max-w-3xl mb-24"
        >
          <div className="glass-card rotate-card p-10 text-center relative overflow-hidden">
             <div className="absolute inset-0 opacity-10 bg-cover bg-center -z-10 bg-[url('/asd.jpg')]" />
             <h2 className="text-4xl md:text-6xl text-[#fef8ee] font-bold tracking-widest mb-4 font-['Rye']">
                SZOLGÁLTATÁSOK
             </h2>
             <p className="text-[#e6d3b3] italic text-lg font-light">
                "Mert minden egyes hajvágásnak lelke van, nálunk ez életre kel."
             </p>
          </div>
        </motion.div>

        {/* Férfi Szolgáltatások */}
        <h3 className="text-3xl md:text-4xl font-bold font-['Rye'] text-[#c2a470] mb-12 self-start border-b border-[#c2a470]/30 w-full pb-4">
          FÉRRFI SZOLGÁLTATÁSOK
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl overflow-hidden hover-glow transition-all duration-300 group"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0806] to-transparent opacity-60" />
              </div>
              <div className="p-6 text-center space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-[#fef8ee] font-serif group-hover:text-[#c2a470] transition-colors">
                  {service.name}
                </h3>
                <p className="text-[#c2a470] text-xl font-bold font-['Rye']">{service.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Női Szolgáltatások */}
        <h3 className="text-3xl md:text-4xl font-bold font-['Rye'] text-[#c2a470] mb-12 self-start border-b border-[#c2a470]/30 w-full pb-4">
          NŐI SZOLGÁLTATÁSOK
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-12">
          {services2.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl overflow-hidden hover-glow transition-all duration-300 group"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0806] to-transparent opacity-60" />
              </div>
              <div className="p-6 text-center space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-[#fef8ee] font-serif group-hover:text-[#c2a470] transition-colors">
                  {service.name}
                </h3>
                <p className="text-[#c2a470] text-xl font-bold font-['Rye']">{service.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}