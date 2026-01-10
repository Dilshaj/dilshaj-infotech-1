"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';

export default function NotFound() {
    const heartRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Floating animation for all hearts in the marquee
            gsap.to(".floating-heart", {
                y: -30,
                rotation: 8,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: {
                    amount: 1,
                    from: "random"
                }
            });

            // Reveal animation for text and elements
            if (containerRef.current) {
                gsap.from(containerRef.current.children, {
                    y: 60,
                    opacity: 0,
                    duration: 1.2,
                    stagger: 0.1,
                    ease: "power4.out"
                });
            }

            // Infinite marquee animation
            if (marqueeRef.current) {
                gsap.to(marqueeRef.current, {
                    x: "-50%",
                    duration: 20,
                    ease: "none",
                    repeat: -1
                });
            }
        });

        return () => ctx.revert();
    }, []);

    return (
        <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white font-sans px-4">
            {/* Background decorative numbers for depth */}
            <div className="absolute top-20 left-20 text-[200px] font-black text-zinc-50 opacity-[0.03] select-none rotate-12">404</div>
            <div className="absolute bottom-20 right-20 text-[250px] font-black text-zinc-50 opacity-[0.03] select-none -rotate-12">Lost?</div>

            <div ref={containerRef} className="relative z-10 flex flex-col items-center">

                {/* Infinite Marquee Section */}
                <div className="w-screen overflow-hidden whitespace-nowrap py-20 relative">
                    <div ref={marqueeRef} className="inline-flex items-center gap-16 md:gap-32 px-16 md:px-32">
                        {/* Repeat the 404 content multiple times for seamless scroll */}
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="flex items-center gap-16 md:gap-32">
                                <h1 className="text-[180px] md:text-[350px] font-bold text-black leading-none tracking-tighter select-none">
                                    404
                                </h1>

                                <div className="text-black">
                                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[120px] md:h-[120px]">
                                        <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5L12 2Z" fill="currentColor" />
                                    </svg>
                                </div>

                                <div className="relative flex items-center justify-center">
                                    {/* <div className="absolute -z-10 w-[250px] md:w-[600px] aspect-square opacity-70 pointer-events-none floating-heart">
                                        <Image
                                            src="/home/hero/900x900_err-01.webp"
                                            alt="3D Heart"
                                            fill
                                            className="object-contain"
                                            priority
                                        />
                                    </div> */}
                                    <h1 className="text-[180px] md:text-[350px] font-bold text-black leading-none tracking-tighter select-none">
                                        404
                                    </h1>
                                </div>

                                <div className="text-black">
                                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[120px] md:h-[120px]">
                                        <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5L12 2Z" fill="currentColor" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Subtext subtle as per image focus */}
                <p className="mt-4 text-zinc-400 font-medium tracking-widest uppercase text-sm opacity-60 animate-pulse">
                    Page not found
                </p>
            </div>

            {/* Bottom Left Button as per image */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
                <Link
                    href="/"
                    className="group flex items-center justify-center gap-3 bg-[#A594F9] text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl shadow-purple-500/30 hover:bg-black transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                    Let's Go Home
                    <svg
                        width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    >
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                </Link>
            </div>

            {/* Background radial gradient for depth */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(165,148,249,0.08),transparent_70%)]" />
        </main>
    );
}
