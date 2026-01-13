"use client";

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const profiles = [
    {
        id: 1,
        name: "Ananya Sharma",
        role: "Software Engineer @ InnovateLabs",
        quote: "Dilshaj Infotech changed my life. Within 6 months of finishing my MERN course and internship, I secured a role at a top tech firm with a package I never thought possible.",
        image: "/home/alumni-student.png",
        stat: "95%",
        statLabel: "Placement Rate"
    },
    {
        id: 2,
        name: "Priya Patel",
        role: "Product Manager @ TechFlow",
        quote: "The mentorship provided here is unmatched. It wasn't just about coding; it was about understanding the product lifecycle. I felt industry-ready from day one.",
        image: "/home/alumni-female.png",
        stat: "120%",
        statLabel: "Salary Hike"
    },
    {
        id: 3,
        name: "Rohan Mehta",
        role: "UX Designer @ CreativeMinds",
        quote: "Working on live projects gave me the confidence I needed. The portfolio I built during my internship directly helped me land my dream job.",
        image: "/home/alumni-male-creative.png",
        stat: "50+",
        statLabel: "Projects Done"
    }
];

const HomeAlumni = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Initial Scroll Trigger Animation
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.from(containerRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    // Cycle Animation Logic
    useEffect(() => {
        const interval = setInterval(() => {
            // Animate OUT
            const tl = gsap.timeline({
                onComplete: () => {
                    setActiveIndex((prev) => (prev + 1) % profiles.length);
                }
            });

            if (contentRef.current && imageRef.current) {
                tl.to([contentRef.current, imageRef.current], {
                    opacity: 0,
                    y: -20,
                    duration: 0.5,
                    ease: "power2.in"
                });
            }
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    // Animate IN when index changes
    useEffect(() => {
        if (contentRef.current && imageRef.current) {
            gsap.fromTo([contentRef.current, imageRef.current],
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.1 }
            );
        }
    }, [activeIndex]);

    const activeProfile = profiles[activeIndex];

    return (
        <section ref={containerRef} className="py-20 md:py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Content */}
                    <div className="space-y-8 md:space-y-10 order-2 md:order-1">
                        <h2 className="text-4xl md:text-6xl font-extrabold text-[#1a1a1a] leading-[1.1] tracking-tight">
                            Join thousands of <br />
                            <span className="text-blue-600 italic font-serif relative inline-block">
                                successful alumni
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-blue-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z" fill="currentColor" />
                                </svg>
                            </span>
                        </h2>

                        {/* Avatars */}
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-4">
                                {[
                                    "https://i.pravatar.cc/100?img=11",
                                    "https://i.pravatar.cc/100?img=32",
                                    "https://i.pravatar.cc/100?img=12",
                                    "https://i.pravatar.cc/100?img=5"
                                ].map((src, i) => (
                                    <div key={i} className="w-12 h-12 rounded-full border-[3px] border-white overflow-hidden shadow-md relative z-0 hover:z-10 hover:scale-110 transition-transform duration-300">
                                        <img
                                            src={src}
                                            alt={`Alumni ${i + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                                <div className="w-12 h-12 rounded-full border-[3px] border-white bg-blue-50 flex items-center justify-center text-xs font-bold text-blue-600 shadow-sm z-10">
                                    +2k
                                </div>
                            </div>
                        </div>

                        {/* DYNAMIC CONTENT CONTAINER (Ref here) */}
                        <div ref={contentRef} className="space-y-8">
                            {/* Testimonial */}
                            <blockquote className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium relative pl-4 border-l-4 border-blue-500 rounded-sm min-h-[100px]">
                                "{activeProfile.quote}"
                            </blockquote>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div>
                                    <h4 className="font-bold text-[#1a1a1a] text-lg">{activeProfile.name}</h4>
                                    <p className="text-blue-600 font-medium text-sm md:text-base">{activeProfile.role}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Image */}
                    <div className="relative order-1 md:order-2 flex justify-center md:justify-end">
                        {/* Background Shapes */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/50 rounded-full blur-3xl z-0"></div>

                        <div className="relative z-10 w-[85%] md:w-[90%] lg:w-full max-w-md mx-auto md:mr-0">
                            {/* Card bg behind image */}
                            <div className="absolute inset-0 bg-gray-100 rounded-[32px] md:rounded-[48px] rotate-6 scale-95 translate-y-4 z-0 shadow-lg transition-all duration-500"></div>

                            {/* Main Image Container */}
                            <div ref={imageRef} className="relative bg-white rounded-[32px] md:rounded-[48px] overflow-hidden shadow-2xl z-10 border border-gray-100 aspect-[4/5]">
                                <Image
                                    src={activeProfile.image}
                                    alt={activeProfile.name}
                                    fill
                                    className="object-cover"
                                    priority
                                />

                                {/* Floating Badge */}
                                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 max-w-[150px]">
                                    <div className="text-4xl font-bold text-blue-600 mb-1">{activeProfile.stat}</div>
                                    <div className="text-xs text-gray-600 font-bold leading-tight">{activeProfile.statLabel}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HomeAlumni;
