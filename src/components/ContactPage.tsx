"use client";
import { useEffect, useState } from "react";
import "./components.css"
import { motion, AnimatePresence } from 'framer-motion'

  const backgroundImages = [
          'berti3.jpg',
          'bg.png'  
  ];

export default function ContactPage() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

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
        {/* Header */}
        <div className="w-[85%] max-w-4xl text-center mb-10 aaa" style={{ marginTop: "8%" }}>
          <div style={{ backgroundImage: 'url("/asd.jpg")', backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className="aaa bg-[#2a2118] border-4 border-[#c2a470] px-6 py-4 transform -rotate-1 shadow-xl">
            <h2 className="text-3xl md:text-5xl font-serif text-[#fef8ee] font-bold tracking-wider">
              ELÉRHETŐSÉG
            </h2>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-8 w-[85%] max-w-6xl px-4 aaa" style={{ marginTop: "3%", marginLeft: "0%" }}>
          {/* Contact Info */}
          <div className="bg-[#1f1a17]/90 border-2 border-[#c2a470] rounded-2xl p-8 md:p-10 shadow-2xl text-[#fef8ee] space-y-8">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-center border-b border-[#c2a470]/50 pb-4">
              Hair Ranch – Barber
            </h3>

            <div className="space-y-6 divide-y divide-[#c2a470]/30">
              {/* Address */}
              <div className="flex items-end gap-4 pt-2" style={{ fontSize: "14pt", marginBottom: "10px", marginLeft: "10px" }}>
                <span style={{ fontSize: "14pt", marginRight: "10px", marginBottom: "10px" }} className="text-2xl bg-[#c2a470]/20 text-[#d6b981] p-2 rounded-full">📍</span>
                <span style={{ fontSize: "14pt", marginRight: "10px", marginBottom: "10px" }} className="font-bold text-lg">Cím:</span>
                <span style={{ fontSize: "14pt", marginRight: "10px", marginBottom: "10px" }} className="text-[#f5e8d3]">Március 15. utca 11, HairRanch, Kecskemét, Hungary</span>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 pt-4" style={{ fontSize: "14pt", marginBottom: "10px", marginLeft: "10px" }}>
                <span style={{ fontSize: "14pt", marginRight: "10px", marginBottom: "10px" }} className="text-2xl bg-[#c2a470]/20 text-[#d6b981] p-2 rounded-full">📞</span>
                <span style={{ fontSize: "14pt", marginRight: "10px", marginBottom: "10px" }} className="font-bold text-lg mb-1">Telefon:</span>
                <span style={{ fontSize: "14pt", marginRight: "10px", marginBottom: "10px" }} className="text-[#f5e8d3]">+36 30 520 7871</span>
              </div>

              {/* Facebook */}
              <div className="flex items-start gap-4 pt-4" style={{ fontSize: "14pt", marginBottom: "10px", marginLeft: "10px" }}>
                <span style={{ fontSize: "14pt", marginRight: "10px", marginBottom: "10px" }} className="text-2xl bg-[#c2a470]/20 text-[#d6b981] p-2 rounded-full">✉️</span>
                <span style={{ fontSize: "14pt", marginRight: "10px", marginBottom: "10px" }} className="font-bold text-lg mb-1">Facebook | Messenger: </span>
                <span style={{ fontSize: "14pt", marginRight: "10px", marginBottom: "10px" }} className="text-[#f5e8d3]">
                  HairRanch |{" "}
                  <a
                    href="https://www.facebook.com/bartalbertold"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-[#d6b981] hover:text-white transition"
                    style={{ fontSize: "14pt", marginRight: "10px", marginBottom: "10px" }}
                  >
                    Ide kattintva elérhető vagyok
                  </a>
                </span>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 pt-4" style={{ fontSize: "14pt", marginBottom: "10px", marginLeft: "10px" }}>
                <span style={{ fontSize: "14pt", marginRight: "10px", marginBottom: "10px" }} className="text-2xl bg-[#c2a470]/20 text-[#d6b981] p-2 rounded-full">⏰</span>
                <div>
                  <div><span style={{ fontSize: "14pt", marginRight: "10px", marginBottom: "10px" }} className="font-bold text-lg mb-1">Nyitvatartás:</span> </div>
                  <div><span style={{ fontSize: "14pt", marginBottom: "10px", marginLeft: "2%", display: "flex", flexWrap: "wrap", width: "300px" }}>Hétfő – Péntek: 9:00 – 18:00</span></div>
                  <div><span style={{ fontSize: "14pt", marginBottom: "10px", marginLeft: "2%", display: "flex", flexWrap: "wrap", width: "300px" }}>Szombat: 8:00 – 12:00</span></div>
                  <div> <span style={{ fontSize: "14pt", marginBottom: "10px", marginLeft: "2%", display: "flex", flexWrap: "wrap", width: "300px" }}>Vasárnap: Zárva</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-[#c2a470]" style={{ marginTop: "3%" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2725.228373364381!2d19.670309076894156!3d46.91789183528123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4743d0a90ce1fe83%3A0xd4a167efd22c2c9e!2sKecskem%C3%A9t%2C%20M%C3%A1rcius%2015.%20u.%2011%2C%206000!5e0!3m2!1shu!2shu!4v1750810422454!5m2!1shu!2shu"
              width="100%"
              height="100%"
              className="w-full min-h-[400px] border-none rounded-xl"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        </motion.div>
      </section>
    </div>
  );
}