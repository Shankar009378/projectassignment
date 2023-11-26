"use client";
import React, { useEffect, useRef } from "react";

const SliderShow = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    container.style.scrollBehavior = "smooth";

    const slideInterval = setInterval(() => {
      container.style.transform = "translateX(-29%)";
      container.classList.add(
        // "transition-transform",
        // "duration-1000",
        // "ease-in-out"
        "transition-transform",
        "duration-1000",
        "ease-in-out", 
        "infinite",
        "running", 
        "slidein"
      );

      setTimeout(() => {
        container.style.transform = "";
        container.classList.remove(
          // "transition-transform",
          // "duration-1000",
          // "ease-in-out"
          "transition-transform",
          "duration-100",
          "ease-in-out",
          "infinite",
          "running",
          "slidein"
        );
      }, 1000);
    }, 2000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex justify-center items-center p-4 md:justify-around"
    >
      <div className="relative w-full md:w-1/2 lg:w-1/4 h-32 bg-[#09202d] rounded-l-full overflow-hidden flex-shrink-0 mb-6 md:mb-0 md:mr-6">
        <img
          className="w-1/1 h-full rounded-full object-cover"
          src="/assets/logo1.png"
          alt="Logo 1"
        />
        <div className="absolute bottom-0 right-0 p-2 text-white">
          <p className="text-4xl mb-9">bitfins</p>
          <a href="#">
            <p className="cursor-pointer underline ">shop now</p>
          </a>
        </div>
      </div>
      <div className="relative w-full md:w-1/2 lg:w-1/4 h-32 bg-[#fb8b8a] rounded-l-full overflow-hidden flex-shrink-0 mb-6 md:mb-0 md:mr-6">
        <img
          className="w-1/1 h-full rounded-full object-cover"
          src="/assets/logo2.png"
          alt="Logo 2"
        />
        <div className="absolute bottom-0 right-0 p-2 text-white">
          <p className="text-3xl mb-9">cryptoraggies</p>
          <a href="#">
            <p className="cursor-pointer underline ">shop now</p>
          </a>
        </div>
      </div>
      <div className="relative w-full md:w-1/2 lg:w-1/4 h-32  bg-black  rounded-l-full overflow-hidden flex-shrink-0 mb-6 md:mb-0 md:mr-6">
        <img
          className="w-1/1 h-full rounded-full object-cover"
          src="/assets/logo3.png"
          alt="Logo 3"
        />
        <div className="absolute bottom-0 right-0 p-2 text-white">
          <p className="text-4xl mb-9">future fest</p>
          <a href="#">
            <p className="cursor-pointer underline ">shop now</p>
          </a>
        </div>
      </div>
      <div className="relative w-1/4 h-32  bg-black rounded-l-full overflow-hidden flex-shrink-0 mb-6 md:mb-0 md:mr-6">
        <img
          className="w-1/1 h-full rounded-full object-cover"
          src="/assets/logo4.png"
          alt="Logo 4"
        />
        <div className="absolute bottom-0 right-0 p-2 text-white">
          <p className="text-3xl mb-9">vudu brigada</p>
          <a href="#">
            <p className="cursor-pointer underline ">shop now</p>
          </a>
        </div>
      </div>
      <div className="relative w-full md:w-1/2 lg:w-1/4 h-32 bg-black rounded-l-full overflow-hidden flex-shrink-0 mb-6 md:mb-0 md:mr-6">
        <img
          className="w-1/1 h-full rounded-full object-cover"
          src="/assets/logo5.png"
          alt="Logo 5"
        />
        <div className="absolute bottom-0 right-2 p-2 text-white">
          <p className="text-4xl mb-9">pendulum</p>
          <a href="#">
            <p className="cursor-pointer underline ">shop now</p>
          </a>
        </div>
      </div>
      <div className="relative w-full md:w-1/2 lg:w-1/4 h-32 bg-black rounded-l-full overflow-hidden flex-shrink-0 mb-6 md:mb-0 md:mr-6">
        <img
          className="w-1/1 h-full rounded-full object-cover"
          src="/assets/logo6.png"
          alt="Logo 6"
        />
        <div className="absolute bottom-0 right-0 p-2 text-white">
          <p className="text-4xl mb-9">Ṩhosky</p>
          <a href="#">
            <p className="cursor-pointer underline ">shop now</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SliderShow;



