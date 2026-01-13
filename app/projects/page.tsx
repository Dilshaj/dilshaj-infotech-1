"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ProjectCarousel from '../components/projects/ProjectCarousel';
import OurApproach from '../components/projects/OurApproach';
import ReadyToStart from '../components/projects/ReadyToStart';

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Star Floating Animation
    gsap.to(".floating-star", {
      y: -15,
      rotation: 10,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Cube Floating Animation
    gsap.to(".floating-cube", {
      y: 20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, { scope: containerRef });

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans overflow-x-hidden">

      {/* Section 1: Impactful Solutions */}
      <div ref={containerRef} className="min-h-screen flex flex-col md:flex-row items-center justify-center p-4 md:p-10 pt-20 md:pt-0 lg:mt-25 mt-10">
        <div className="w-full h-full max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-20 relative">

          {/* Left Content (Text) */}
          <div className="relative w-full md:w-1/2 flex flex-col justify-start md:justify-center px-2 md:pl-10 pt-10 md:pt-0">

            {/* Star Decoration - Mobile Position matched to screenshot (Top Right relative to text container) */}
            <div className="floating-star absolute top-0 right-0 md:-top-20 md:right-20 w-16 h-16 md:w-24 md:h-24 pointer-events-none transform translate-x-1/4 -translate-y-1/2 md:translate-x-0 md:translate-y-0">
              <Image
                src="/about/hero/star-icon.png"
                alt="Star"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>

            {/* Typography */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight md:leading-[1.1] mb-6 md:mb-8 tracking-tight pr-6 md:pr-0">
              Where Ideas Turn Into <br className="hidden md:block" />
              Impactful Solutions
            </h1>

            <p className="text-gray-500 text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed max-w-2xl font-medium mb-10 md:mb-0">
              At Dilshaj Infotech, our projects showcase innovation, quality,
              and real-world impact—delivering smart solutions that drive
              growth and lasting value.
            </p>

            {/* Cube Decoration - Hidden/Adjusted for Mobile if needed, kept for desktop */}
            <div className="floating-cube hidden md:block absolute -bottom-48 -left-20 w-56 h-56 pointer-events-none opacity-90">
              <Image
                src="/about/hero/blob-left.png"
                alt="Cube"
                width={220}
                height={220}
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Content (Square Stack) - Centered Image */}
          <div className="w-full md:w-[45%] flex justify-center items-center relative z-10 px-4 md:pr-10 lg:pr-0">
            <div className="absolute inset-0 bg-blue-400/20 blur-[80px] md:blur-[120px] rounded-full scale-90 pointer-events-none"></div>

            <div className="relative w-full aspect-square max-w-[350px] md:max-w-[450px] lg:max-w-[550px]">
              <Image
                src="/projects/geometric-shapes.png"
                alt="Impactful Solutions Visual"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>

        </div>
      </div>

      {/* Section 2: Future Products Carousel */}
      <ProjectCarousel />



      {/* Section 3: Our Approach */}
      <OurApproach />

      <ReadyToStart />

    </div>
  );
}