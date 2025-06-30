"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./components.css"
const services = [
  {
    name: "Férfi hajvágás (rövid)",
    price: "4.500 Ft-tól",
    image: "/ferfi3.jpg",
  },
  {
    name: "Férfi hajvágás (medium & long)",
    price: "7.500 Ft-tól",
    image: "/ferfi2.png",
  },
  {
    name: "Női hajvágás",
    price: "8.000 Ft-tól",
    image: "/noi2.jpg",
  },
];

const services2 = [
  {
    name: "Női hajvágás (rövid)",
    price: "5.000 Ft-tól",
    image: "l.jpg",
  },
  {
    name: "Női hajvágás (long)",
    price: "10.000 Ft-tól",
    image: "sz.jpg",
  },
  {
    name: "Női hajfestés",
    price: "8.000 Ft-tól",
    image: "szl.jpg",
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

  return (
    <div className="overflow-hidden font-['Rye']">
      <section
        className="min-h-screen bg-cover bg-center bg-fixed bg-blend-overlay bg-[#1e1a14]/80 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 pt-10 space-y-10 text-white transition-all duration-1000"
        style={{ backgroundImage: `url(${backgroundImages[currentBg]})` }}
      >
        {/* Banner */}
        <div className="w-[90%] flex justify-center aaa">
          <div 
            style={{ 
              backgroundImage: 'url("/asd.jpg")',  
              backgroundRepeat: "no-repeat", 
              backgroundSize: "cover",
              marginTop: "6%" 
            }} 
            id="custom-responsive"  
            className="bg-[#2a2118] border-4 border-[#c2a470] shadow-xl px-6 py-4 transform -rotate-2 w-full sm:w-4/5 md:w-3/5 text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl text-[#fef8ee] font-bold tracking-wider mb-2 font-serif">
              SZOLGÁLTATÁSAIM
            </h2>
            <p className="text-[#e6d3b3] italic text-sm md:text-lg font-light">
              Mert minden egyes hajvágásnak lelke van, nálunk ez életre kel.
            </p>
          </div>
        </div>

        {/* First Services Carousel - Local images */}
        <div className="overflow-x-auto whitespace-nowrap scrollbar-hide w-full" style={{marginTop: "3%"}}>
          <div className="flex gap-6 justify-center w-max mx-auto px-2">
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
                <div className="p-4 text-center">
                  <h3 className="text-lg md:text-xl text-white font-serif mb-1 tracking-wide">
                    {service.name}
                  </h3>
                  <p className="text-[#d6b981] font-medium">{service.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Services Carousel - External images */}
        <div className="overflow-x-auto whitespace-nowrap scrollbar-hide w-full" style={{marginTop: "3%", marginBottom: "3%"}}>
          <div className="flex gap-6 justify-center w-max mx-auto px-2">
            {services2.map((service, index) => (
              <div
                key={index}
                className="min-w-[240px] max-w-[320px] bg-[#1f1a17] border border-[#c2a470] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
              >
                {/* Using regular img for external images */}
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-60 object-cover"
                  style={{
                    marginLeft: "0px", 
                    backgroundColor: "white", 
                    border: "5px solid white",
                    borderRight: "5px solid white"
                  }}
                />
                <div className="p-4 text-center">
                  <h3 
                    style={{marginLeft: "5%", marginRight: "5%"}} 
                    className="text-lg md:text-xl text-white font-serif mb-1 tracking-wide"
                  >
                    {service.name}
                  </h3>
                  <p className="text-[#d6b981] font-medium">{service.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}