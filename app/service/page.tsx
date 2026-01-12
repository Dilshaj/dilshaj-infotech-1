"use client";
import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import { gsap } from "gsap";

import ServicesList from '../components/service/ServicesList'
import ServiceProcess from '../components/service/ServiceProcess'
import ContactFormSection from '../components/about/ContactFormSection'
import ServiceCTA from '../components/service/ServiceCTA'

const Service = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-title", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1
      })
        .from(".hero-desc", {
          y: 20,
          opacity: 0,
          duration: 0.6
        }, "-=0.4")
        .from(".hero-image", {
          scale: 0.9,
          opacity: 0,
          duration: 1,
          ease: "back.out(1.7)"
        }, "-=0.6")
        .from(".hero-blob", {
          scale: 0,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2
        }, "-=0.8");

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center bg-[#fff] overflow-hidden pt-20">
        {/* Background Blobs - positioned to match the flow */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/services/pastel-blobs.png"
            alt="Background Gradient"
            fill
            className="object-cover opacity-80"
            priority
          />
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 h-full flex items-center">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full">

            {/* Left Side Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8 pt-10 lg:pt-0 relative z-20">
              <h1 className="hero-title text-[32px] sm:text-[40px] md:text-[40px] lg:text-[54px] xl:text-[64px] 2xl:text-[94px] font-bold leading-[1.1] text-black tracking-tight">
                Comprehensive <br />
                Digital Solutions
              </h1>
              <p className="hero-desc text-neutral-500 text-lg md:text-xl leading-relaxed max-w-[540px] font-medium">
                We provide comprehensive digital solutions tailored to your
                business needs, from design and development to marketing and AI
                integration. Let us help you achieve your digital transformation
                goals.
              </p>
            </div>

            {/* Right Side Image Area */}
            <div className="w-full lg:w-1/2 relative h-[350px] md:h-[500px] flex items-end justify-center lg:justify-end">

              {/* Star - Positioned absolutely relative to this container to match reference */}
              <div className="hero-blob absolute top-[10%] right-[10%] lg:right-[80%] lg:left-auto w-10 h-10 lg:w-32 lg:h-32 animate-pulse z-20">
                <Image
                  src="/services/purple-star.png"
                  alt="Sparkle"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="relative w-full h-full max-w-[900px]">
                {/* Main VR Woman Image */}
                <Image
                  src="/services/hero-image.png"
                  alt="VR Digital Solutions"
                  fill
                  className="hero-image object-contain object-right-bottom scale-100 lg:scale-110 translate-y-6"
                  priority
                />
              </div>
            </div>

          </div>
        </div>

        {/* Floating Bottom Left Cube element from reference */}
        <div className="hero-blob absolute bottom-[-5%] left-[-2%] w-32 h-32 lg:w-48 lg:h-48 pointer-events-none z-20 opacity-90">
          <Image
            src="/services/small-cube.png"
            alt="Decorative Cube"
            fill
            className="object-contain rotate-12"
          />
        </div>
      </section>

      {/* Services List Section */}
      <ServicesList />

      {/* Process Section */}
      <ServiceProcess />

      {/* CTA & Contact Section Wrapper (Light Background) */}
      <div className="bg-[#FDFBF7]">
        <ServiceCTA />
        <ContactFormSection />
      </div>
    </main>
  )
}

export default Service