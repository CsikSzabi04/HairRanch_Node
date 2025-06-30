"use client";
import { useEffect, useState } from "react";
import "./components.css"

export default function BookingPage() {
  const backgroundImages = [
          'berti3.jpg',
          'bg.png'  
  ];

  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 60000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="overflow-hidden font-['Rye']">
      <section
        className="min-h-screen bg-cover bg-center bg-fixed bg-blend-overlay bg-[#1e1a14]/80 flex flex-col items-center justify-start px-4 sm:px-6 md:px-10 pt-10 pb-20 text-white transition-all duration-1000"
        style={{ backgroundImage: `url(${backgroundImages[currentBg]})` }}
      >
        {/* Header Banner */}
       <div className="w-[85%] max-w-4xl text-center mb-10 aaa" style={{ marginTop: "8%" }}>
           <div style={{ backgroundImage: 'url("/asd.jpg")', backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className="aaa bg-[#2a2118] border-4 border-[#c2a470] px-6 py-4 transform -rotate-1 shadow-xl">
            <h2 className="text-2xl sm:text-3xl md:text-5xl text-[#fef8ee] font-bold tracking-wider mb-2 font-serif">
              IDŐPONTFOGLALÁS
            </h2>
            <p className="text-[#e6d3b3] italic text-sm md:text-lg font-light">
              Foglalj időpontot stílusos környezetben, profik keze alatt.
            </p>
          </div>
        </div>

        {/* Booking Form */}
        <div style={{ marginTop: "3%", marginLeft: "0%" }} className="w-[90%] max-w-4xl bg-[#1f1a17]/90 border-2 border-[#c2a470] rounded-2xl p-8 md:p-10 shadow-2xl space-y-6">
          <form className="space-y-8 p-10">
            {/* Name & Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg mb-2 font-semibold text-[#e6d3b3]">Név</label>
                <input
                  type="text"
                  className="w-[90%] px-4 py-2 rounded border border-[#c2a470] bg-transparent text-white placeholder-[#d6b981] focus:outline-none focus:ring-2 focus:ring-[#d6b981]"
                  placeholder="Teljes neved"
                  required
                />
              </div>
              <div>
                <label className="block text-lg mb-2 font-semibold text-[#e6d3b3]">Telefonszám</label>
                <input
                  type="tel"
                  className="w-[90%] px-4 py-2 rounded border border-[#c2a470] bg-transparent text-white placeholder-[#d6b981] focus:outline-none focus:ring-2 focus:ring-[#d6b981]"
                  placeholder="+36 20 123 4567"
                  required
                />
              </div>
            </div>

            {/* Service */}
            <div>
              <label className="block text-lg mb-2 font-semibold text-[#e6d3b3]">Szolgáltatás</label>
              <select className="w-[90%] px-4 py-2 rounded border border-[#c2a470] bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-[#d6b981]">
                <option>Klasszikus Nyírás</option>
                <option>Szakáll Formázás</option>
                <option>Borotválás</option>
                <option>Gyermek Nyírás</option>
                <option>Prémium Csomag</option>
              </select>
            </div>

            {/* Date & Time */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg mb-2 font-semibold text-[#e6d3b3]">Dátum</label>
                <input
                  type="date"
                  className="w-[90%] px-4 py-2 rounded border border-[#c2a470] bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-[#d6b981]"
                  required
                />
              </div>
              <div>
                <label className="block text-lg mb-2 font-semibold text-[#e6d3b3]">Időpont</label>
                <select className="w-[90%] px-4 py-2 rounded border border-[#c2a470] bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-[#d6b981]">
                  <option>09:00</option>
                  <option>10:00</option>
                  <option>11:00</option>
                  <option>13:00</option>
                  <option>14:00</option>
                  <option>15:00</option>
                  <option>16:00</option>
                  <option>17:00</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-lg mb-2 font-semibold text-[#e6d3b3]">Üzenet (opcionális)</label>
              <textarea
                className="w-[90%] px-4 py-2 rounded border border-[#c2a470] bg-transparent text-white placeholder-[#d6b981] focus:outline-none focus:ring-2 focus:ring-[#d6b981]"
                placeholder="Speciális kérések..."
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-[90%] bg-[#c2a470] hover:bg-[#a88d65] text-[#1f1a17] font-bold py-3 px-4 rounded text-lg transition duration-300"
            >
              FOGLALÁS MEGERŐSÍTÉSE
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}