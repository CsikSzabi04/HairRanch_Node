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
        <div className="relative flex items-center w-full justify-center" style={{ maxHeight: "80px" }}>
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

          {/* Center/Responsive: Logo + Hamburger button container */}
          <div className="flex w-full min-[950px]:w-[13%] justify-center items-center px-2" style={{ margin: "0px 20px" }}>

            {/* Logo - Left on mobile */}
            <Link
              href="/"
              className="flex items-center justify-start flex-1 min-[950px]:justify-center"
              style={{ marginLeft: "1%", marginRight: "0%", paddingLeft: "1%", paddingRight: "0%" }}
            >
              <img
                src="/hairranch.png"
                alt="Hair Ranch Logo"
                style={{ textDecoration: "none", margin: "10px 0px" }}
                className="w-[50%] h-[50%] rounded-full border-2 border-[#a67c52] min-[300px]:w-[40%] min-[300px]:h-[40%] min-[650px]:w-[20%] min-[650px]:h-[20%] min-[950px]:w-[80%] min-[950px]:h-[20%]"


              />
            </Link>

            {/* Hamburger Button - Right on mobile */}
            <button
              className="min-[950px]:hidden text-4xl px-4 flex justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menü megnyitása"
              style={{
                backgroundColor: "#c2a470",
                opacity: "0.9",
                padding: "5px 8px",
                cursor: "pointer",
                width: "50px"
              }}
            >
              <span style={{ fontSize: "11pt" }}>☰</span>
            </button>
          </div>

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
        </div>


        {/* Mobile Menu - appears when hamburger is clicked (below 900px) */}
        {mobileMenuOpen && (
          <div
            style={{
              marginTop: "3%",
              maxHeight: "180px",
              overflowY: "scroll",
              scrollbarWidth: "none",         // Firefox
              msOverflowStyle: "none"         // IE/Edge
            }}
            className="min-[900px]:hidden bg-[#2a2118] border-t border-[#a67c52] rounded-b-md shadow-md [&::-webkit-scrollbar]:hidden"
          >

            <div className="flex flex-col py-2">
              <Link
                href="/"
                className="px-6 py-3 text-[#c2a470] hover:bg-[#a67c52] hover:text-white transition-colors uppercase tracking-wide font-semibold"
                onClick={() => setMobileMenuOpen(false)}
                style={{ textDecoration: "none", padding: "15px 10px", borderBottom: "1px solid #c2a470" }}
              >
                FŐOLDAL
              </Link>
              <Link
                href="/szolgaltatasok"
                className="px-6 py-3 text-[#c2a470] hover:bg-[#a67c52] hover:text-white transition-colors uppercase tracking-wide font-semibold"
                onClick={() => setMobileMenuOpen(false)}
                style={{ textDecoration: "none", padding: "15px 10px", borderBottom: "1px solid #c2a470" }}
              >
                SZOLGÁLTATÁSOK
              </Link>
              <Link
                href="/galery"
                className="px-6 py-3 text-[#c2a470] hover:bg-[#a67c52] hover:text-white transition-colors uppercase tracking-wide font-semibold"
                onClick={() => setMobileMenuOpen(false)}
                style={{ textDecoration: "none", padding: "15px 10px", borderBottom: "1px solid #c2a470" }}
              >
                GALÉRIA
              </Link>
              <Link
                href="/myself"
                className="px-6 py-3 text-[#c2a470] hover:bg-[#a67c52] hover:text-white transition-colors uppercase tracking-wide font-semibold"
                onClick={() => setMobileMenuOpen(false)}
                style={{ textDecoration: "none", padding: "15px 10px", borderBottom: "1px solid #c2a470" }}
              >
                MAGAMRÓL
              </Link>
              {/*
              <Link
                href="/idopontfoglalas"
                className="px-6 py-3 text-[#c2a470] hover:bg-[#a67c52] hover:text-white transition-colors uppercase tracking-wide font-semibold"
                onClick={() => setMobileMenuOpen(false)}
                style={{ textDecoration: "none", padding: "15px 10px", borderBottom: "1px solid #c2a470" }}
              >
                IDŐPONTFOGLALÁS
              </Link>
              <Link
                href="/review"
                className="px-6 py-3 text-[#c2a470] hover:bg-[#a67c52] hover:text-white transition-colors uppercase tracking-wide font-semibold"
                onClick={() => setMobileMenuOpen(false)}
                style={{ textDecoration: "none", padding: "15px 10px", borderBottom: "1px solid #c2a470" }}
              >
                VÉLEMÉNYEK
              </Link>*/}
              <Link
                href="/elerhetoseg"
                className="px-6 py-3 text-[#c2a470] hover:bg-[#a67c52] hover:text-white transition-colors uppercase tracking-wide font-semibold"
                onClick={() => setMobileMenuOpen(false)}
                style={{ textDecoration: "none", padding: "15px 10px", borderBottom: "1px solid #c2a470" }}
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
