"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { Calendar } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ReadyToStart() {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        // Card Scale Up Animation
        gsap.from(".cta-card", {
            scale: 0.9,
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".cta-card",
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });

        // Content Stagger
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".cta-content",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        tl.from(".cta-title", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        })
            .from(".cta-text", {
                y: 20,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.6")
            .from(".cta-button", {
                scale: 0.8,
                opacity: 0,
                duration: 0.6,
                ease: "back.out(1.7)"
            }, "-=0.6");

        // Background Parallax
        gsap.to(".cta-bg", {
            yPercent: 10,
            scrollTrigger: {
                trigger: ".cta-card",
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="w-full bg-[#fdfbf7] py-12 md:py-20 px-4 md:px-0">
            <div className="cta-card max-w-[1400px] mx-auto relative w-full h-[450px] md:h-[500px] rounded-[30px] md:rounded-[40px] overflow-hidden group shadow-2xl">

                {/* Background Image with Parallax Class */}
                <div className="cta-bg absolute inset-0 w-full h-[120%] -top-[10%]">
                    <Image
                        src="/projects/ready.png"
                        alt="Ready to Start Background"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                    />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 z-10" />

                {/* Content */}
                <div className="cta-content absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 md:px-4">
                    <h2 className="cta-title text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                        Ready to Start Your Project?
                    </h2>

                    <p className="cta-text text-gray-200 text-base md:text-xl max-w-2xl mb-8 md:mb-10 leading-relaxed">
                        Join the AI revolution. Let's discuss how Dilshaj Infotech can help you unlock new possibilities and drive unprecedented growth.
                    </p>

                    <button className="cta-button bg-[#A78BFA] hover:bg-[#8B5CF6] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full flex items-center gap-2 md:gap-3 transition-all duration-300 transform hover:scale-105 shadow-lg active:scale-95">
                        <Calendar className="w-5 h-5 md:w-6 md:h-6" />
                        <span className="text-base md:text-lg">Get Started Now</span>
                    </button>
                </div>

            </div>
        </section>
    );
}
