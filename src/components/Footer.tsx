"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

const openingHours = [
  { day: "Kedd - Péntek", hours: "09:00 - 19:00" },
  { day: "Szombat", hours: "08:00 - 12:00 (Minden 2. héten)" },
  { day: "Hétfő & Vasárnap", hours: "Zárva" },
];

const navLinks = [
  { name: "Főoldal", href: "/" },
  { name: "Szolgáltatások", href: "/szolgaltatasok" },
  { name: "Galéria", href: "/galery" },
  { name: "Magamról", href: "/myself" },
  { name: "Elérhetőség", href: "/elerhetoseg" },
  { name: "Szabályok", href: "/rules" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0806] text-[#fef8ee] border-t border-[#c2a470]/30 pt-16 pb-8 relative overflow-hidden">
      {/* Subtle Grainy Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/asd.jpg')] bg-repeat" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          
          {/* Column 1: Brand & Social */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold font-['Rye'] text-[#c2a470] tracking-tighter uppercase">
                HAIR RANCH
              </h3>
              <p className="text-[#e6c9a8] italic leading-relaxed text-sm">
                "Ahol minden férﬁ és nő a legjobb stílusban távozik. Professzionális hajvágás, styling és prémium szolgáltatások Kecskemét szívében."
              </p>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <motion.a 
                whileHover={{ scale: 1.1, backgroundColor: '#c2a470', color: '#0a0806' }}
                href="https://www.facebook.com/bartalbertold" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1e1a14] border border-[#c2a470]/30 flex items-center justify-center text-[#c2a470] transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, backgroundColor: '#c2a470', color: '#0a0806' }}
                href="https://www.instagram.com/bartalbertold_hairranch/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1e1a14] border border-[#c2a470]/30 flex items-center justify-center text-[#c2a470] transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </motion.a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold font-['Rye'] text-[#c2a470] tracking-widest uppercase">Navigáció</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-[#e6c9a8] hover:text-[#c2a470] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <motion.span 
                      whileHover={{ x: 3 }}
                      className="w-1.5 h-1.5 rounded-full bg-[#c2a470]/30 group-hover:bg-[#c2a470] transition-all" 
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Opening Hours */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold font-['Rye'] text-[#c2a470] tracking-widest uppercase">Nyitvatartás</h4>
            <div className="space-y-3 font-['Inter']">
              {openingHours.map((item) => (
                <div key={item.day} className="text-sm">
                  <p className="text-[#fef8ee] font-semibold">{item.day}</p>
                  <p className="text-[#e6c9a8] font-light">{item.hours}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Contact & CTA */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold font-['Rye'] text-[#c2a470] tracking-widest uppercase">Kapcsolat</h4>
            <div className="space-y-4 font-['Inter']">
              <div className="flex items-start gap-4 group">
                <span className="text-[#c2a470] group-hover:scale-110 transition-transform">📍</span>
                <p className="text-[#e6c9a8] text-sm leading-relaxed">
                  6000 Kecskemét,<br />
                  Március 15. utca 11
                </p>
              </div>
              <div className="flex items-center gap-4 group">
                <span className="text-[#c2a470] group-hover:scale-110 transition-transform">📞</span>
                <p className="text-[#e6c9a8] text-sm font-semibold">+36 20 123 4567</p>
              </div>
            </div>
            
            <div className="pt-4 border-t border-[#c2a470]/20">
              <Link
                href="/review"
                className="inline-flex items-center gap-2 text-[#c2a470] hover:text-[#fef8ee] font-bold uppercase text-xs tracking-tighter group"
              >
                Olvass véleményeket
                <span className="group-hover:translate-x-1 transition-transform">➡</span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#c2a470]/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-widest text-[#a67c52]">
          <p>&copy; {new Date().getFullYear()} Hair Ranch | Minden jog fenntartva.</p>
          <div className="flex items-center gap-4">
            <span>Készült:</span>
            <a
              href="https://csszabj.hu/"
              className="text-[#c2a470] hover:underline transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Csík Szabolcs
            </a>
            <span className="opacity-30">|</span>
            <span className="text-[#c2a470]/50">Next.js & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}