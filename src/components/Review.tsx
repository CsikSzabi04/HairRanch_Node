"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const backgroundImages = ['/Berti3.jpg', '/bg.png'];

const westernEmojis = ["🤠", "🌵", "🐎", "🏜️", "💀", "💰", "🍺", "💈", "✂️", "⭐"];

export default function ReviewPage() {
  const [currentBg, setCurrentBg] = useState(0);
  const [reviews, setReviews] = useState<any[]>([]);
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    review: "", 
    stars: 5 
  });
  const backendURL = "https://hairranchbackenda.onrender.com";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetch(`${backendURL}/reviews`)
      .then((res) => res.json())
      .then(setReviews)
      .catch(console.error);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.review || !form.stars) return;

    fetch(`${backendURL}/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to submit review");
        return res.json();
      })
      .then((newReview) => {
        setReviews([...reviews, newReview]);
        setForm({ name: "", email: "", review: "", stars: 5 });
      })
      .catch(console.error);
  };

  const handleDelete = (id: string) => {
    fetch(`${backendURL}/reviews`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to delete review");
        setReviews(reviews.filter((r) => r.id !== id));
      })
      .catch(console.error);
  };

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
                VÉLEMÉNYEK
             </h2>
             <p className="text-[#e6d3b3] italic text-lg font-light max-w-2xl mx-auto">
                „Láttad, tapasztaltad, átélted – most rajtad a sor, írd meg!”
             </p>
          </div>
        </motion.div>

        {/* Form and Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl">
          {/* Left Column: Form */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="glass-card rounded-3xl p-8 shadow-2xl relative order-2 lg:order-1">
             <h3 className="text-2xl font-bold font-['Rye'] text-[#c2a470] border-b border-[#c2a470]/30 pb-4 mb-8 uppercase">Írj véleményt</h3>
             <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-[#c2a470] tracking-widest uppercase mb-1">Név*</label>
                    <input
                      type="text"
                      className="w-full bg-[#1e1a14]/50 border border-[#c2a470]/30 p-4 rounded-xl text-white focus:ring-2 focus:ring-[#c2a470] transition-all outline-none"
                      placeholder="Neved"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-[#c2a470] tracking-widest uppercase mb-1">Email*</label>
                    <input
                      type="email"
                      className="w-full bg-[#1e1a14]/50 border border-[#c2a470]/30 p-4 rounded-xl text-white focus:ring-2 focus:ring-[#c2a470] transition-all outline-none"
                      placeholder="Email címed"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-[#c2a470] tracking-widest uppercase mb-1">Véleményed*</label>
                    <textarea
                      className="w-full bg-[#1e1a14]/50 border border-[#c2a470]/30 p-4 rounded-xl text-white focus:ring-2 focus:ring-[#c2a470] transition-all outline-none min-h-[140px]"
                      placeholder="Írd meg, mit gondolsz..."
                      value={form.review}
                      onChange={(e) => setForm({ ...form, review: e.target.value })}
                      required
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                       <span className="text-[#c2a470] font-bold uppercase tracking-widest text-sm">Értékelés:</span>
                       <select
                         value={form.stars}
                         onChange={(e) => setForm({ ...form, stars: parseInt(e.target.value) })}
                         className="bg-[#1e1a14] border border-[#c2a470]/30 text-white rounded-lg p-2 focus:ring-1 focus:ring-[#c2a470] appearance-none cursor-pointer px-4"
                       >
                         {[5, 4, 3, 2, 1].map((s) => (
                           <option key={s} value={s}>{'⭐'.repeat(s)}</option>
                         ))}
                       </select>
                    </div>
                    <button type="submit" className="btn-gold px-12">Küldés</button>
                  </div>
                </div>
             </form>
          </motion.div>

          {/* Right Column: Reviews List */}
          <div className="order-1 lg:order-2">
             <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="glass-card rounded-3xl p-8 shadow-2xl h-full flex flex-col">
                <h3 className="text-2xl font-bold font-['Rye'] text-[#c2a470] border-b border-[#c2a470]/30 pb-4 mb-8 uppercase text-center">
                   VÉLEMÉNYEK ({reviews.length})
                </h3>

                {reviews.length === 0 ? (
                  <div className="flex-1 flex flex-col items-center justify-center py-20 space-y-4">
                     <p className="text-[#fef8ee]/50 text-xl font-['Rye']">Még nincsenek vélemények, partner!</p>
                     <p className="text-[#c2a470] italic">Legyél te az első!</p>
                  </div>
                ) : (
                  <div className="flex-1 space-y-6 max-h-[600px] overflow-y-auto pr-2 scrollbar-style">
                     <AnimatePresence>
                        {reviews.map((r, idx) => (
                           <motion.div
                             key={r.id || idx}
                             initial={{ opacity: 0, y: 20 }}
                             animate={{ opacity: 1, y: 0 }}
                             exit={{ opacity: 0, scale: 0.9 }}
                             className="bg-[#1e1a14]/50 border border-[#c2a470]/20 p-6 rounded-2xl relative group"
                           >
                              <div className="flex justify-between items-start mb-4">
                                 <div>
                                    <h4 className="font-bold text-[#fef8ee] text-lg">{r.name}</h4>
                                    <p className="text-xs text-[#c2a470] uppercase tracking-widest">{r.date || "Éppen most"}</p>
                                 </div>
                                 <div className="text-3xl grayscale group-hover:grayscale-0 transition-all">
                                    {westernEmojis[Math.floor(Math.random() * westernEmojis.length)]}
                                 </div>
                              </div>
                              <p className="text-[#e6d3b3] mb-4 leading-relaxed italic">"{r.review}"</p>
                              <div className="flex justify-between items-center">
                                 <div className="flex">{ '⭐'.repeat(r.stars) }</div>
                                 <button
                                   onClick={() => handleDelete(r.id)}
                                   className="opacity-0 group-hover:opacity-100 transition-opacity text-red-500 hover:text-red-400 p-2"
                                   title="Törlés"
                                 >
                                   <span className="text-xl">🗑️</span>
                                 </button>
                              </div>
                           </motion.div>
                        ))}
                     </AnimatePresence>
                  </div>
                )}
             </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}