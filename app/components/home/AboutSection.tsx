"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Image animation
            if (imageRef.current) {
                gsap.fromTo(imageRef.current,
                    {
                        x: -100,
                        opacity: 0,
                        rotateY: -20,
                        scale: 0.8
                    },
                    {
                        x: 0,
                        opacity: 1,
                        rotateY: 0,
                        scale: 1,
                        duration: 1.5,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: imageRef.current,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            }

            // Content stagger animation
            if (contentRef.current) {
                const elements = contentRef.current.children;
                gsap.fromTo(elements,
                    {
                        x: 50,
                        opacity: 0,
                        y: 20
                    },
                    {
                        x: 0,
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        stagger: 0.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: contentRef.current,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            }

            // Subtle parallax for background glows
            gsap.to(".bg-glow-1", {
                y: -50,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    scrub: 1
                }
            });
            gsap.to(".bg-glow-2", {
                y: 50,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    scrub: 1
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative min-h-auto lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#FDFBF7] py-12 md:py-20 px-4 sm:px-8 md:px-12 lg:px-20">
            {/* Subtle color gradient effects */}
            <div className="bg-glow-1 absolute top-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-300/20 rounded-full blur-[80px] md:blur-[120px]" />
            <div className="bg-glow-2 absolute bottom-0 right-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-blue-300/15 rounded-full blur-[70px] md:blur-[100px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-purple-200/10 rounded-full blur-[100px] md:blur-[150px]" />

            {/* Sparkle/Star decorations - Hidden on small mobile */}
            <div className="absolute top-10 md:top-20 left-5 md:left-10 w-3 md:w-4 h-3 md:h-4 opacity-40">
                <Image src="/about-section/purple-star.png" alt="" fill className="object-contain" />
            </div>
            <div className="absolute top-30 md:top-40 right-10 md:right-20 w-2 md:w-3 h-2 md:h-3 opacity-30">
                <Image src="/about-section/black-star.png" alt="" fill className="object-contain" />
            </div>
            <div className="absolute bottom-20 md:bottom-40 left-10 md:left-20 w-2 md:w-3 h-2 md:h-3 opacity-30">
                <Image src="/about-section/black-star.png" alt="" fill className="object-contain" />
            </div>
            <div className="absolute bottom-10 md:bottom-20 right-20 md:right-40 w-3 md:w-4 h-3 md:h-4 opacity-40">
                <Image src="/about-section/purple-star.png" alt="" fill className="object-contain" />
            </div>

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
                {/* Left: Image with 3D Frame Effect */}
                <div ref={imageRef} className="relative flex justify-center lg:justify-start order-1 lg:order-0">
                    <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[450px] aspect-square">
                        {/* 3D Frame/Tablet Effect */}
                        <div className="absolute inset-0 bg-linear-to-br from-[#4a5568] via-[#2d3748] to-[#1a202c] rounded-[24px] md:rounded-[32px] shadow-2xl transform perspective-1000 -rotate-y-2 md:-rotate-y-5 scale-95 sm:scale-100">
                            {/* Inner glow */}
                            <div className="absolute inset-2 md:inset-4 bg-white rounded-[18px] md:rounded-[24px] overflow-hidden">
                                <Image
                                    src="/about-section/meeting-room.jpg"
                                    alt="Dilshaj Infotech Team Meeting"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Top reflection */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 md:w-32 h-1 md:h-2 bg-white/30 blur-sm rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Right: Content */}
                <div ref={contentRef} className="relative space-y-5 md:space-y-6 text-center lg:text-left order-2 lg:order-0 px-2 sm:px-0">
                    {/* Floating 3D Object - Adjusted for mobile visibility */}
                    <div className="absolute -right-4 lg:-right-10 bottom-0 lg:bottom-10 w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 opacity-60 lg:opacity-100 animate-float">
                        <Image
                            src="/about-section/3d-object.png"
                            alt="3D Decoration"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Heading */}
                    <div className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-2 md:gap-3">
                        <div className="flex items-center gap-3">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-600 w-6 h-6 md:w-7 md:h-7">
                                <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5L12 2Z" fill="currentColor" />
                            </svg>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black leading-tight">
                                About <span className="text-gray-400">US</span>
                            </h2>
                        </div>
                    </div>

                    {/* Subheading */}
                    <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-700 leading-snug">
                        Empowering Your Vision with <br className="hidden sm:block lg:hidden" />
                        <span className="text-[#A594F9] font-semibold">Dilshaj Infotech</span>
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg max-w-2xl mx-auto lg:mx-0">
                        Dilshaj Infotech is a next-generation global technology company driving impact,
                        innovation, and digital excellence. We build high-performance digital products
                        and scalable, intelligent solutions that help businesses grow, delivering secure
                        and future-ready technology worldwide.
                    </p>

                    {/* Checklist */}
                    <ul className="space-y-3 sm:space-y-4 inline-block lg:block text-left">
                        <li className="flex items-start gap-3">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-1 w-5 h-5 md:w-6 md:h-6">
                                <path d="M9 12L11 14L15 10" stroke="#A594F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="12" cy="12" r="10" stroke="#A594F9" strokeWidth="2" />
                            </svg>
                            <span className="text-gray-700 text-sm sm:text-base md:text-lg">High-performance digital product development</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-1 w-5 h-5 md:w-6 md:h-6">
                                <path d="M9 12L11 14L15 10" stroke="#A594F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="12" cy="12" r="10" stroke="#A594F9" strokeWidth="2" />
                            </svg>
                            <span className="text-gray-700 text-sm sm:text-base md:text-lg">Intelligent platforms & AI-driven solutions</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-1 w-5 h-5 md:w-6 md:h-6">
                                <path d="M9 12L11 14L15 10" stroke="#A594F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="12" cy="12" r="10" stroke="#A594F9" strokeWidth="2" />
                            </svg>
                            <span className="text-gray-700 text-sm sm:text-base md:text-lg">Scalable, secure, and future-ready technology</span>
                        </li>
                    </ul>

                    {/* CTA Button */}
                    <div className="pt-4 md:pt-6">
                        <Link
                            href="/about"
                            className="inline-block bg-[#A594F9] text-white px-7 md:px-10 py-2.5 md:py-3.5 rounded-full font-semibold text-sm sm:text-base hover:bg-[#8b7ad8] transition-all duration-300 shadow-lg shadow-purple-500/30"
                        >
                            Know More
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
