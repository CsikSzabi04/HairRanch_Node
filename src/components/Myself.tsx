"use client";
import React, { useEffect, useState } from "react";
import "./components.css"

const services = [
    {
        name: "Hello, szeretnék egy kicsit ",
        namess: "bemutatkozni :)",
        price: "Nevem: Kecskés Bertold",
        image: "Berti3.jpg",
    },

    {
        name: "",
        price: "",
        image: "szurkeberti.jpg",
    },
];

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

    const backgroundImages3 = [
        'joico.jpeg',
        'joico1.jpg',
        'joico2.jpg'
    ]

    return (
        <div className="overflow-hidden font-['Rye']">
            <section
                className="min-h-screen bg-cover bg-center bg-fixed bg-blend-overlay bg-[#1e1a14]/80 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 pt-10 space-y-10 text-white transition-all duration-1000"
                style={{ backgroundImage: `url(${backgroundImages[currentBg]})` }}
            >
                {/* Banner */}
                <div className="w-[90%] flex justify-center">
                    <div style={{ backgroundImage: 'url("/asd.jpg")', backgroundRepeat: "no-repeat", backgroundSize: "cover", marginTop: "8%" }} id="custom-responsive" className="aaa bg-[#2a2118] border-4 border-[#c2a470] shadow-xl px-6 py-4 transform -rotate-2 w-full sm:w-4/5 md:w-3/5 text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl text-[#fef8ee] font-bold tracking-wider mb-2 font-serif">
                            Egy kicsit Magamról
                        </h2>
                        <p className="text-[#e6d3b3] italic text-sm md:text-lg font-light" style={{ fontStyle: "italic" }}>
                            "Mert minden egyes hajvágásnak lelke van, nálunk ez életre kel." - Kecskés Bertold
                        </p>
                    </div>
                </div>

                {/* Services Carousel */}
                <div className="w-full overflow-x-auto scrollbar-hide whitespace-nowrap" style={{ marginTop: "4%" }}>
                    {/* Szolgáltatások - görgethető sor */}
                    <div className="flex gap-6  justify-center w-max mx-auto px-2">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="min-w-[240px] max-w-[300px] bg-[#1f1a17] border border-[#c2a470] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
                            >
                                <img
                                    src={service.image}
                                    alt={service.name}
                                    className="w-full h-52 object-cover"
                                />
                                <div className="p-4 text-center" style={{ width: "300px" }}>
                                    <h3 className="text-lg md:text-xl text-white font-serif mb-1 tracking-wide text-[#d6b981]">
                                        {service.name} <br />
                                        {service.namess}
                                    </h3>
                                    <p className="text-[#d6b981] font-medium">{service.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Videó és képek - görgethető sor */}
                    <div className="overflow-x-auto whitespace-nowrap scrollbar-hide w-full mt-10" style={{
                        marginTop: "4%",
                        scrollbarWidth: "none",           // Firefox
                        msOverflowStyle: "none",          // IE and Edge
                        overflowX: "auto"
                    }}>
                        <div className="flex gap-4  justify-center w-max mx-auto px-2" >
                            <img
                                src="berti5.png"
                                className="w-[200px] h-[280px] object-cover rounded-md shadow-md"
                                alt="Berti left"
                            />
                            <video
                                src="video.mp4"
                                controls
                                className="rounded-lg shadow-lg max-w-full w-[22%] sm:w-[600px]"
                            >
                                Your browser does not support the video tag.
                            </video>
                            <img
                                src="berti2.png"
                                className="w-[200px] h-[280px] object-cover rounded-md shadow-md"
                                alt="Berti right"
                            />
                        </div>
                    </div>
                </div>


                <div className="overflow-x-auto whitespace-nowrap scrollbar-hide w-[90%]" style={{ marginTop: "1%", marginBottom: "3%" }}>
                    <div >
                        <div className="flex gap-6 justify-center w-max mx-auto px-2  ">
                            {backgroundImages3.map((img, index) => (
                                <div
                                    key={index}
                                    className="w-[240px] max-w-[300px] max-h-[220px] bg-[#1f1a17] border border-[#c2a470] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
                                    style={{ marginLeft: "1%" }}
                                >
                                    <img
                                        src={img}
                                        alt={`Gallery2 ${index + 1}`}
                                        className="w-[100%] h-[100%] object-cover pointer-events-none"

                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
