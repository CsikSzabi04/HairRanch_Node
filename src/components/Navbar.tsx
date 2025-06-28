"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className="w-full bg-[#2a2118] backdrop-blur-md text-[#f0d8b8] border-b-4 border-[#a67c52]"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: "url('https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/FREE_CONTENT66dehxycKqgS4Mhiabti/PREVIEW_SCREENSHOT7_166081.jpg')"
      }}
    >
      <div className="mx-auto px-4">
        <div className="relative flex items-center w-full" style={{ justifyContent: "center", maxHeight: "80px" }}>
          {/* Bal oldal - Főoldal és Szolgáltatások */}
          <div className="hidden min-[950px]:flex gap-1" style={{ borderBottom: "1px solid #c2a470" }}>
            <Link
              href="/"
              style={{
                textDecoration: "none",
                paddingRight: "0px",
                paddingLeft: "20px",
                marginRight: "30px"
              }}
              className="text-[#c2a470] uppercase font-semibold text-sm hover:text-[#fef8ee] transition-colors tracking-wide px-3 py-1"
            >
              FŐOLDAL
            </Link>
            <Link
              href="/szolgaltatasok"
              style={{ textDecoration: "none", paddingRight: "50px" }}
              className="text-[#c2a470] uppercase font-semibold text-sm hover:text-[#fef8ee] transition-colors tracking-wide px-3 py-1"
            >
              SZOLGÁLTATÁSOK
            </Link>
            <Link
              href="/myself"
              style={{ textDecoration: "none", paddingRight: "10px" }}
              className="text-[#c2a470] uppercase font-semibold text-sm hover:text-[#fef8ee] transition-colors tracking-wide px-3 py-1"
            >
              Magamról
            </Link>
          </div>

          {/* Logo - Középen */}
          <Link
            href="/"
            className="flex items-center"
            style={{ marginLeft: "1%", marginRight: "0%", paddingLeft: "1%", paddingRight: "0%", }}
          >
            <img
              src="/hairranch.png"
              alt="Hair Ranch Logo"
              style={{ textDecoration: "none", margin: "10px 0px" }}
              className="h-[50%] w-[75%] rounded-full border-2 border-[#a67c52]"
            />
          </Link>

          {/* Jobb oldal - Galéria és Elérhetőség */}
          <div className="hidden min-[950px]:flex gap-1" style={{ borderBottom: "1px solid #c2a470" }}>
            <Link
              href="/galery"
              style={{
                textDecoration: "none",
                paddingRight: "10px",
                marginRight: "60px"
              }}
              className="text-[#c2a470] uppercase font-semibold text-sm hover:text-[#fef8ee] transition-colors tracking-wide px-3 py-1"
            >
              GALÉRIA
            </Link>
            <Link
              href="/elerhetoseg"
              style={{ textDecoration: "none", paddingRight: "40px" }}
              className="text-[#c2a470] uppercase font-semibold text-sm hover:text-[#fef8ee] transition-colors tracking-wide px-3 py-1"
            >
              ELÉRHETŐSÉG
            </Link>
            <Link
              href="/rules"
              style={{
                textDecoration: "none",
                paddingRight: "10px",
                marginRight: "10px"
              }}
              className="text-[#c2a470] uppercase font-semibold text-sm hover:text-[#fef8ee] transition-colors tracking-wide px-3 py-1"
            >
              SZABÁLYOK
            </Link>
          </div>

          {/* Mobil hamburger ikon */}
          <button
            className="min-[950px]:hidden text-4xl px-4"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menü megnyitása"
            style={{
              backgroundColor: "#c2a470",
              opacity: "0.9",
              padding: "5px 8px",
              cursor: "pointer"
            }}
          >
            <span style={{ fontSize: "11pt" }}>☰</span>
          </button>
        </div>

        {/* Mobile Menu - appears when hamburger is clicked (below 900px) */}
        {mobileMenuOpen && (
          <div
            style={{ marginTop: "8%" }}
            className="min-[900px]:hidden bg-[#2a2118] border-t border-[#a67c52] rounded-b-md shadow-md"
          >
            <div className="flex flex-col py-2">
              <Link
                href="/"
                className="px-6 py-3 text-[#c2a470] hover:bg-[#a67c52] hover:text-white transition-colors uppercase tracking-wide font-semibold"
                onClick={() => setMobileMenuOpen(false)}
                style={{ textDecoration: "none" }}
              >
                FŐOLDAL
              </Link>
              <Link
                href="/szolgaltatasok"
                className="px-6 py-3 text-[#c2a470] hover:bg-[#a67c52] hover:text-white transition-colors uppercase tracking-wide font-semibold"
                onClick={() => setMobileMenuOpen(false)}
                style={{ textDecoration: "none" }}
              >
                SZOLGÁLTATÁSOK
              </Link>
              <Link
                href="/idopontfoglalas"
                className="px-6 py-3 text-[#c2a470] hover:bg-[#a67c52] hover:text-white transition-colors uppercase tracking-wide font-semibold"
                onClick={() => setMobileMenuOpen(false)}
                style={{ textDecoration: "none" }}
              >
                IDŐPONTFOGLALÁS
              </Link>
              <Link
                href="/review"
                className="px-6 py-3 text-[#c2a470] hover:bg-[#a67c52] hover:text-white transition-colors uppercase tracking-wide font-semibold"
                onClick={() => setMobileMenuOpen(false)}
                style={{ textDecoration: "none" }}
              >
                VÉLEMÉNYEK
              </Link>
              <Link
                href="/elerhetoseg"
                className="px-6 py-3 text-[#c2a470] hover:bg-[#a67c52] hover:text-white transition-colors uppercase tracking-wide font-semibold"
                onClick={() => setMobileMenuOpen(false)}
                style={{ textDecoration: "none" }}
              >
                ELÉRHETŐSÉG
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}