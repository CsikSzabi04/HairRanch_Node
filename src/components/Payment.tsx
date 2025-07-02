"use client";
import React, { useEffect, useState } from "react";
import "./components.css"
import { motion, AnimatePresence } from 'framer-motion'

export default function ServicesPage() {
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
                    {/* Banner */}
                    <div className="w-[70%] flex justify-center">
                        <div style={{ backgroundImage: 'url("/asd.jpg")', backgroundRepeat: "no-repeat", backgroundSize: "cover", marginTop: "6%" }} id="custom-responsive" className="aaa bg-[#2a2118] border-4 border-[#c2a470] shadow-xl px-6 py-4 transform -rotate-2 w-full sm:w-4/5 md:w-3/5 text-center">
                            <h2 className="text-2xl sm:text-3xl md:text-5xl text-[#fef8ee] font-bold tracking-wider mb-2 font-serif">
                                SZABÁLYOK*
                            </h2>
                            <p className="text-[#e6d3b3] italic text-sm md:text-lg font-light" style={{ fontStyle: "italic" }}>
                                "Mert szabálályok nélkül nem lenne rend a káoszban"
                            </p>
                        </div>
                    </div>

                    {/* Rules // Payment */}
                    <div className="overflow-x-auto whitespace-nowrap scrollbar-hide w-full items-center justify-center">
                        {/* Rules1 */}
                        <div className="overflow-x-auto whitespace-nowrap scrollbar-hide w-[100%]" style={{ marginTop: "1%", marginBottom: "0%" }}>
                            <div className="flex gap-6 justify-start w-max mx-auto px-2">
                                <div
                                    style={{
                                        backgroundImage: 'url("/asdasd.jpg")',
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                        marginTop: "1%",
                                        marginBottom: "4%",
                                    }}
                                    id="custom-responsive"
                                    className="bg-[#2a2118] border-4 border-[#c2a470] shadow-xl px-6 py-4 transform -rotate-1 min-w-[300px] sm:min-w-[400px] md:min-w-[600px] text-center"
                                >
                                    <h2
                                        className="text-2xl sm:text-3xl md:text-5xl text-[#fef8ee] font-bold tracking-wider mb-2 font-serif"
                                        style={{ fontSize: "30px", textDecoration: "underline", paddingBottom: "2px" }}
                                    >
                                        Házirend*
                                    </h2>

                                    <p
                                        className="text-[#e6d3b3] text-sm md:text-lg font-light"
                                        style={{ letterSpacing: "2px" }}
                                    >
                                        <strong>
                                            Időpont törlése vagy módosítása díjmentesen törölhető vagy áthelyezhető <br /> amennyiben az időpontot megelőző 24 órán belül történik. <br /><br />
                                            Az aznap lemondott időpont, vagy módosítása esetében a <br /> következő alkalomnál az  elmaradt szolgáltatás értékének az 50%-a kerül felszámításra. <br /><br />
                                            Ha nem jelensz meg a beírt időpontban és ezt nem jelzed legalább 24 órával <br />az időpont előtt, <br /> a szolgáltatási árak 100%-a kerül felszámításra. (Abban az esetben is érvényes, ha betegség miatt nem jelensz meg.) <br /><br />
                                        </strong>

                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Rules2 */}
                        <div className="overflow-x-auto whitespace-nowrap scrollbar-hide w-[100%]" style={{ marginTop: "0%", marginBottom: "0%" }}>
                            <div className="flex gap-6 justify-start w-max mx-auto px-2">
                                <div
                                    style={{
                                        backgroundImage: 'url("/asdasd.jpg")',
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                        marginTop: "1%",
                                        marginBottom: "4%",
                                    }}
                                    id="custom-responsive"
                                    className="bg-[#2a2118] border-4 border-[#c2a470] shadow-xl px-6 py-4 transform -rotate-1 min-w-[300px] sm:min-w-[400px] md:min-w-[600px] text-center"
                                >


                                    <p
                                        className="text-[#e6d3b3] text-sm md:text-lg font-light"
                                        style={{ letterSpacing: "2px" }}
                                    >
                                        <strong>
                                            Ha új vendégként nem jelensz meg a beírt időpontban és ha új időpontot <br /> szeretnél foglalni akkor, <br /> az elmaradt szolgáltatási ár 100%-át meg kell térítened. <br /><br />
                                            Késés esetén és ha már a szolgáltatásra nincs idő akkor a beírt következő  <br /> alkalomnál találkozunk. Abban az esetben, <br /> ha miattam történt a csúszás és nem volt szolgáltatás elvégezve akkor a következő alkalomnál <br /> a szolgáltatás árából 10% kedvezményt biztosítok. <br /><br />
                                        </strong>


                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Payment */}
                        <div className="overflow-x-auto whitespace-nowrap scrollbar-hide w-[100%]" style={{ marginTop: "0%", marginBottom: "3%" }}>
                            <div className="flex gap-6 justify-start w-max mx-auto px-2">
                                <div
                                    style={{
                                        backgroundImage: 'url("/asdasd.jpg")',
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                        marginTop: "1%",
                                        marginBottom: "4%",
                                    }}
                                    id="custom-responsive"
                                    className="bg-[#2a2118] border-4 border-[#c2a470] shadow-xl px-6 py-4 transform -rotate-1 min-w-[300px] sm:min-w-[400px] md:min-w-[600px] text-center"
                                >
                                    <strong>
                                        <h2 style={{ fontSize: "30px" }} className="text-2xl sm:text-3xl md:text-5xl text-[#fef8ee] font-bold tracking-wider  font-serif"><strong>**Fizetés**</strong></h2>
                                        <p
                                            className="text-[#e6d3b3] text-sm md:text-lg font-light"
                                            style={{ letterSpacing: "2px" }}
                                        >

                                            A szalonban készpénzes fizetésre van lehetőség. <br /> Az árak minden esetben az ár változtatás jogát fenntartom. <br /><br />
                                            <span style={{ fontSize: "20px" }} className="text-2xl sm:text-3xl md:text-5xl text-[#fef8ee] font-bold tracking-wider  font-serif"><strong>Megértésüket Köszönöm! :)</strong></span>

                                        </p></strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
