"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import './components.css'

export default function Gallery() {
  const backgroundImages = [
    '3.jpg',
    '4.jpg',
    '5.jpg',
     '1.jpg',
    '2.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
  ];

  const backgroundImages2 = [
    'berti5.png',
    'ferfi2.png',
    'szurkeberti.jpg',
    'berti6.jpg',
    'noi2.jpg',
    'ferfi6.jpg',
    'regi.jpg',
    'ferfi.jpg',
    'ferfi3.jpg',
    'ferfi4.jpg',
    ];

  const backgroundImages3 = [
   '9.jpg',  
   '10.jpg',  
   '12.jpg',  
   '13.jpg',  
   '14.jpg',  
   '15.jpg',  
   '16.jpg',  
   '17.jpg',  
   '18.jpg',  
   '19.jpg',  
   '20.jpg',  
   '21.jpg',  
   '22.jpg',  
   '23.jpg',  
   '24.jpg',  
   '25.jpg',  
   '26.jpg',  
   '5.jpg',  

  ]

  const [currentBg, setCurrentBg] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef2 = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDragging2, setIsDragging2] = useState(false);
  const [startX2, setStartX2] = useState(0);
  const [scrollLeft2, setScrollLeft2] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  // Drag handlers for first gallery
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollContainerRef.current.scrollLeft = scrollLeft - (x - startX) * 2;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    scrollContainerRef.current.scrollLeft = scrollLeft - (x - startX) * 2;
  };

  // Drag handlers for second gallery
  const handleMouseDown2 = (e: React.MouseEvent) => {
    setIsDragging2(true);
    setStartX2(e.pageX - (scrollContainerRef2.current?.offsetLeft || 0));
    setScrollLeft2(scrollContainerRef2.current?.scrollLeft || 0);
  };

  const handleMouseUp2 = () => setIsDragging2(false);
  const handleMouseLeave2 = () => setIsDragging2(false);
  const handleMouseMove2 = (e: React.MouseEvent) => {
    if (!isDragging2 || !scrollContainerRef2.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef2.current.offsetLeft;
    scrollContainerRef2.current.scrollLeft = scrollLeft2 - (x - startX2) * 2;
  };

  const handleTouchStart2 = (e: React.TouchEvent) => {
    setIsDragging2(true);
    setStartX2(e.touches[0].pageX - (scrollContainerRef2.current?.offsetLeft || 0));
    setScrollLeft2(scrollContainerRef2.current?.scrollLeft || 0);
  };

  const handleTouchMove2 = (e: React.TouchEvent) => {
    if (!isDragging2 || !scrollContainerRef2.current) return;
    const x = e.touches[0].pageX - scrollContainerRef2.current.offsetLeft;
    scrollContainerRef2.current.scrollLeft = scrollLeft2 - (x - startX2) * 2;
  };

  // Arrow click handlers
  const scrollGallery = (direction: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction * 680,
        behavior: "smooth",
      });
    }
  };

  const scrollGallery2 = (direction: number) => {
    if (scrollContainerRef2.current) {
      scrollContainerRef2.current.scrollBy({
        left: direction * 680,
        behavior: "smooth",
      });
    }
  };




  return (
    <div className="overflow-hidden font-['Rye']">
      <section
        className="min-h-screen bg-cover bg-center bg-fixed bg-blend-overlay bg-[#1e1a14]/80 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 pt-10 space-y-10 text-white transition-all duration-1000"
        style={{ backgroundImage: `url(${backgroundImages[currentBg]})` }}
      >
        {/* Header */}
        <div className="w-[80%] flex justify-center mt-[4%]">
          <div
            className="bg-[#2a2118] border-4 border-[#c2a470] shadow-xl px-6 py-4 transform rotate-2 w-full sm:w-4/5 md:w-3/5 text-center aaa"
            style={{
              backgroundImage: 'url("/asd.jpg")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              marginTop: "5%",
              marginBottom: "2%"
            }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl text-[#fef8ee] font-bold tracking-wider mb-2 font-serif">
              Galéria
            </h2>
            <p className="text-[#e6d3b3] italic text-sm md:text-lg font-light">
              Nem mindig a harsány a feltűnő. <br />
              A legnagyobb változás néha csendben történik, csak hagyni kell, hogy a fény elvégezze a dolgát.
            </p>
          </div>
        </div>

        {/* Second Gallery */}
        <div className="relative w-[90%] mb-10" style={{ marginBottom: "10px", marginTop: "1%" }}>
          <div
            ref={scrollContainerRef2}
            style={{ marginBottom: "10px", marginTop: "2%" }}
            className="overflow-x-auto whitespace-nowrap scrollbar-hide cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown2}
            onMouseLeave={handleMouseLeave2}
            onMouseUp={handleMouseUp2}
            onMouseMove={handleMouseMove2}
            onTouchStart={handleTouchStart2}
            onTouchMove={handleTouchMove2}
            onTouchEnd={handleMouseUp2}
          >
            <div className="flex gap-6 justify-center w-max mx-auto px-2">
              {backgroundImages2.map((img, index) => (
                <div
                  key={index}
                  style={{ marginBottom: "10px", marginLeft: "5px" }}
                  className="w-[340px] max-w-[400px] max-h-[370px] bg-[#1f1a17] border border-[#c2a470] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex-shrink-0"
                >
                  <img
                    src={img}
                    alt={`Gallery2 ${index + 1}`}
                    width={400}
                    height={370}
                    className="w-full h-full object-cover pointer-events-none"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* First Gallery */}
        <div className="relative w-[90%] mx-auto" style={{ marginBottom: "10px", marginTop: "1%" }}>
          <div
            ref={scrollContainerRef}
            style={{ marginBottom: "10px", marginTop: "2%" }}
            className="overflow-x-auto whitespace-nowrap scrollbar-hide cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
          >
            <div className="flex gap-6 justify-center w-max mx-auto px-2">
              {backgroundImages.map((img, index) => (
                <div
                  key={index}
                  style={{ marginBottom: "10px", marginLeft: "10px" }}
                  className="w-[340px] max-w-[400px] bg-[#1f1a17] border border-[#c2a470] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex-shrink-0"
                >
                  <img
                    src={img}
                    alt={`Gallery ${index + 1}`}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover pointer-events-none"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Third Gallery */}
        <div className="w-[85%] mx-auto mb-10" style={{ marginTop: "2%", marginBottom: "2%" }}>
          <div>
            <div className="image-scroll-container flex flex-wrap gap-6 justify-start">
              {backgroundImages3.map((img, index) => (
                <div
                  key={index}
                  className="w-[240px] max-w-[300px] max-h-[270px] bg-[#1f1a17] border border-[#c2a470] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
                  style={{ marginBottom: "1%", marginLeft: "1%" }}
                >
                  <img
                    src={img}
                    alt={`Gallery2 ${index + 1}`}
                    width={300}
                    height={270}
                    className="w-full h-full object-cover pointer-events-none"
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