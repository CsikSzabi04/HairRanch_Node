"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Főoldal", href: "/" },
  { name: "Szolgáltatások", href: "/szolgaltatasok" },
  { name: "Galéria", href: "/galery" },
  { name: "Magamról", href: "/myself" },
  { name: "Elérhetőség", href: "/elerhetoseg" },
  { name: "Szabályok", href: "/rules" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0806]/90 backdrop-blur-lg border-b border-[#c2a470]/30 py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 md:w-14 md:h-14">
            <img
              src="/hairranch.png"
              alt="Hair Ranch Logo"
              className="rounded-full border-2 border-[#c2a470] group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <span className="text-xl md:text-2xl font-bold font-['Rye'] text-[#c2a470] tracking-wider hidden sm:block">
            HAIR RANCH
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#fef8ee] hover:text-[#c2a470] uppercase text-sm font-semibold tracking-widest transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c2a470] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-[#c2a470] p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menü"
        >
          <div className="w-8 h-6 flex flex-col justify-between items-end">
            <span className={`w-full h-0.5 bg-[#c2a470] transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
            <span className={`w-3/4 h-0.5 bg-[#c2a470] transition-all ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`w-full h-0.5 bg-[#c2a470] transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 lg:hidden bg-[#0a0806]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-2xl text-[#fef8ee] font-bold font-['Rye'] hover:text-[#c2a470] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="mt-8 text-[#c2a470] uppercase tracking-tighter border border-[#c2a470] px-6 py-2 rounded-full"
            >
              Bezárás
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}