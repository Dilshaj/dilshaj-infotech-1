"use client";

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
    const heartRef = useRef<HTMLDivElement>(null);
    const helmetRef = useRef<HTMLDivElement>(null);
    const sphereRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const topTextRef = useRef<HTMLDivElement>(null);
    const bottomTextRef = useRef<HTMLDivElement>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    useEffect(() => {
        const startAnimations = () => {
            const ctx = gsap.context(() => {
                // Floating animations
                const floatingAnimate = (ref: React.RefObject<HTMLDivElement | null>, y: number, duration: number, delay: number) => {
                    if (ref.current) {
                        gsap.to(ref.current, {
                            y: y,
                            rotation: 5,
                            duration: duration,
                            repeat: -1,
                            yoyo: true,
                            ease: "sine.inOut",
                            delay: delay
                        });
                    }
                };

                floatingAnimate(heartRef, -15, 3, 0);
                floatingAnimate(helmetRef, -20, 3.5, 0.5);
                floatingAnimate(sphereRef, -25, 4, 1);

                // Smooth continuous rotation for the bottom asset
                if (sphereRef.current) {
                    gsap.to(sphereRef.current.querySelector('img'), {
                        rotation: 360,
                        duration: 8,
                        repeat: -1,
                        ease: "none"
                    });
                }

                // Initial reveal animation
                if (containerRef.current) {
                    gsap.from(containerRef.current.children, {
                        y: 60,
                        opacity: 0,
                        duration: 1.2,
                        stagger: 0.15,
                        ease: "power4.out",
                        clearProps: "all"
                    });
                }

                // Marquee animation
                if (marqueeRef.current) {
                    gsap.to(marqueeRef.current, {
                        x: "-50%",
                        duration: 20,
                        ease: "none",
                        repeat: -1
                    });
                }

                // Smooth rotation for the scroll text
                gsap.to(".scroll-text-svg", {
                    rotation: 360,
                    duration: 12,
                    repeat: -1,
                    ease: "none"
                });

                // Very slow rotation for the central object
                gsap.to(".central-obj", {
                    rotation: -360,
                    duration: 30,
                    repeat: -1,
                    ease: "none"
                });

                // PARALLAX SCROLL EFFECTS FOR TEXT
                const mm = gsap.matchMedia();

                mm.add("(min-width: 768px)", () => {
                    // Desktop: Move together to preserve original gap
                    if (topTextRef.current && bottomTextRef.current) {
                        gsap.to([topTextRef.current, bottomTextRef.current], {
                            scrollTrigger: {
                                trigger: containerRef.current,
                                start: "top top",
                                end: "bottom top",
                                scrub: 1,
                                invalidateOnRefresh: true,
                            },
                            y: -100,
                            ease: "none"
                        });
                    }
                });

                mm.add("(max-width: 767px)", () => {
                    // Mobile: Gentle drift up
                    if (topTextRef.current && bottomTextRef.current) {
                        gsap.to([topTextRef.current, bottomTextRef.current], {
                            scrollTrigger: {
                                trigger: containerRef.current,
                                start: "top center",
                                end: "bottom top",
                                scrub: 1,
                            },
                            y: -50,
                            ease: "none"
                        });
                    }
                });
            });
            return ctx;
        };

        let ctx: gsap.Context;

        const hasLoaded = sessionStorage.getItem("preloader-shown");
        if (hasLoaded) {
            ctx = startAnimations();
        } else {
            const handleLoadingComplete = () => {
                ctx = startAnimations();
            };
            window.addEventListener("loading-complete", handleLoadingComplete);
            return () => {
                window.removeEventListener("loading-complete", handleLoadingComplete);
                if (ctx) ctx.revert();
            };
        }

        return () => {
            if (ctx) ctx.revert();
        };
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white font-sans pt-32 pb-24 md:pt-45 md:px-10 md:pb-32">
            <div ref={containerRef} className="relative z-20 flex flex-col items-center w-full">

                {/* First Line: Design, [shaj in] */}
                <div ref={topTextRef} className="flex items-center relative">
                    {/* 3D Asset - Behind text */}
                    <div
                        ref={heartRef}
                        className="absolute -left-30 top-1/2 -translate-y-1/2 w-[200px] h-[200px] -z-10 pointer-events-none opacity-50 hidden lg:block"
                    >
                        <Image
                            src="/home/hero/900x900_err-01.webp"
                            alt="3D Error Asset"
                            width={200}
                            height={200}
                            className="object-contain"
                            priority
                        />
                    </div>

                    <h1 className="text-[48px] sm:text-[72px] md:text-[100px] lg:text-[120px] font-bold tracking-tight text-black flex flex-col md:flex-row items-center gap-4 md:gap-6 whitespace-nowrap px-4 text-center md:text-left">
                        Design,
                        <div className="flex items-center gap-4">
                            <span className="bg-[#A594F9] text-white px-6 md:px-10 rounded-full inline-flex items-center h-[60px] sm:h-[80px] md:h-[110px] leading-none translate-y-[2px] shadow-lg shadow-purple-500/20 overflow-hidden w-[280px] sm:w-[320px] md:w-[400px]">
                                <div ref={marqueeRef} className="flex items-center gap-8 whitespace-nowrap">
                                    <span className="flex items-center gap-8 shrink-0">
                                        Dilshaj Infotech
                                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5L12 2Z" fill="currentColor" />
                                        </svg>
                                    </span>
                                    <span className="flex items-center gap-8 shrink-0">
                                        Dilshaj Infotech
                                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5L12 2Z" fill="currentColor" />
                                        </svg>
                                    </span>
                                </div>
                            </span>

                            {/* Mobile Magic Star - Visible beside the pill on mobile */}
                            <div className="md:hidden flex items-center justify-center animate-pulse">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
                                    <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5L12 2Z" fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                    </h1>

                    {/* Helmet Image - Right side */}
                    <div
                        ref={helmetRef}
                        className="absolute -right-[40px] md:-right-[100px] -top-[40px] md:-top-[80px] w-[120px] md:w-[200px] h-[120px] md:h-[200px] z-0 pointer-events-none hidden lg:block"
                    >
                        <Image
                            src="/home/hero/02_hero-img.webp"
                            alt="3D Hero Asset"
                            width={130}
                            height={120}
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                {/* Second Line: + and some magic */}
                <div ref={bottomTextRef} className="flex flex-col md:flex-row items-center gap-4 md:gap-8 relative mt-2 md:-mt-1">

                    <div className="text-black hidden w-[60px] h-[60px] md:w-[100px] md:h-[100px] md:flex items-center justify-center">
                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[60px] h-[60px] md:w-[100px] md:h-[100px]">
                            <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5L12 2Z" fill="currentColor" />
                        </svg>
                    </div>

                    <h2 className="text-[48px] sm:text-[72px] md:text-[100px] lg:text-[120px] font-bold tracking-tight text-black whitespace-nowrap text-center">
                        and some magic
                    </h2>

                    {/* Sphere Image - Bottom center */}
                    <div
                        ref={sphereRef}
                        className="absolute left-1/2 -translate-x-1/2 -bottom-[80px] md:-bottom-[120px] w-[120px] md:w-[200px] h-[120px] md:h-[200px] z-0 pointer-events-none hidden lg:block"
                    >
                        <Image
                            src="/home/hero/03_hero-img.webp"
                            alt="3D Creative Asset"
                            width={150}
                            height={150}
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="w-full max-w-[1400px] mt-20 md:mt-15 px-6 md:px-12">
                    {/* Dashed Line */}
                    <div className="w-full border-t border-dashed border-zinc-300 mb-8 md:mb-12"></div>

                    <div className="flex flex-col md:flex-row items-center lg:items-start justify-between w-full gap-12 lg:gap-4 lg:px-4">
                        {/* Scroll for More indicator */}
                        <div className="relative w-32 h-32 hidden lg:flex md:w-40 md:h-40 items-center justify-center shrink-0">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <svg viewBox="0 0 100 100" className="w-full h-full scroll-text-svg">
                                    <path
                                        id="circlePath"
                                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                                        fill="none"
                                    />
                                    <text className="text-[9px] uppercase tracking-[0.15em] font-medium fill-zinc-900">
                                        <textPath xlinkHref="#circlePath">
                                            SCROLL FOR MORE • SCROLL FOR MORE • SCROLL FOR MORE •
                                        </textPath>
                                    </text>
                                </svg>
                            </div>
                            <div className="w-16 h-16 md:w-20 md:h-20 relative central-obj">
                                <Image
                                    src="/home/hero/300x300_obj-btn-01.webp"
                                    alt="Scroll Asset"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Agency Description & Socials */}
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20 text-center md:text-left">
                            <p className="max-w-[400px] text-lg md:text-xl font-medium leading-relaxed text-zinc-900">
                                We are a creative digital agency specializing
                                in innovative design and cutting-edge
                                development.
                            </p>

                            <ul className="hidden lg:flex flex-col gap-3 md:gap-4">
                                {['Innovating', 'Educating', 'Empowering'].map((item) => (
                                    <li key={item} className="flex items-center justify-center md:justify-start gap-3 group cursor-pointer">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-900">
                                            <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5L12 2Z" fill="currentColor" />
                                        </svg>
                                        <span className="text-base md:text-lg font-medium text-zinc-900 group-hover:translate-x-1 transition-transform">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Video/Preview Card */}
                        <div
                            onClick={() => setIsModalOpen(true)}
                            className="relative w-full sm:w-[320px] md:w-[280px] h-[180px] bg-zinc-200 rounded-[32px] overflow-hidden flex items-center justify-center group cursor-pointer shadow-lg hover:shadow-xl transition-shadow shrink-0"
                        >
                            <video
                                ref={videoRef}
                                src="/home/hero/Dilshaj_promo.mp4"
                                className="w-full h-full object-cover"
                                loop
                                muted
                                playsInline
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />

                            {/* Play/Pause Button */}
                            <button
                                onClick={togglePlay}
                                className="absolute bottom-4 right-4 w-12 h-12 bg-[#A594F9] rounded-full flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform z-10"
                            >
                                {isPlaying ? (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                                    </svg>
                                ) : (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            {/* Background radial gradient for depth */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(165,148,249,0.1),transparent_70%)]" />

            {/* Video Logout Modal */}
            {isModalOpen && (
                <div onScroll={(e) => e.stopPropagation()} className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10 animate-in fade-in duration-300">
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="absolute cursor-pointer top-8 right-8 text-white hover:text-[#A594F9] transition-colors"
                    >
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>

                    <div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
                        <video
                            src="/home/hero/Dilshaj_promo.mp4"
                            className="w-full h-full object-contain"
                            controls
                            autoPlay
                        />
                    </div>
                </div>
            )}
        </section>
    )
}

export default HeroSection