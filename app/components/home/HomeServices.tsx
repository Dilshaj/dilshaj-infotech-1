"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollStack, { ScrollStackItem } from '../ui/ScrollStack';

const homeServices = [
    {
        title: "3D Design & Visualization",
        image: "/services/card-1-3d-design.png",
        tier: "small"
    },
    {
        title: "UI/UX Designing",
        image: "/services/card-2-uiux.png",
        tier: "medium"
    },
    {
        title: "Artificial Intelligence (AI) & Machine Learning",
        image: "/services/card-3-ai-ml.png",
        tier: "large"
    },
    {
        title: "Web & Mobile App Development",
        image: "/services/card-4-web-mobile-new.png",
        tier: "medium"
    },
    {
        title: "Cloud & Digital Solutions",
        image: "/services/card-5-cloud.png",
        tier: "small"
    }
];

const HomeServices = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const cardsContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Header animation
            if (headerRef.current) {
                gsap.from(headerRef.current, {
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                    y: 30,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out"
                });
            }

            // Desktop Cards animation (only run if visible)
            if (window.innerWidth >= 768) {
                const cards = gsap.utils.toArray<HTMLElement>(".service-card-home");
                if (cards.length > 0 && cardsContainerRef.current) {
                    gsap.fromTo(cards,
                        { opacity: 0, y: 150 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 1.4,
                            ease: "power3.out",
                            stagger: {
                                each: 0.15,
                                from: "center"
                            },
                            scrollTrigger: {
                                trigger: cardsContainerRef.current,
                                start: "top 80%",
                                toggleActions: "play none none reverse",
                                onLeaveBack: () => {
                                    gsap.set(cards, { transition: "none" });
                                }
                            },
                            onStart: () => {
                                // Disable CSS transitions during GSAP animation
                                gsap.set(cards, { transition: "none" });
                            },
                            onComplete: () => {
                                // Clear GSAP transforms and re-enable CSS transitions/hover
                                gsap.set(cards, { clearProps: "all" });
                            },
                            onReverseComplete: () => {
                                gsap.set(cards, { clearProps: "all" });
                            }
                        }
                    );
                }
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="services-section py-20 md:py-32 px-4 bg-[#FDFBF7] relative">
            <div className="max-w-[1440px] mx-auto">

                {/* Header */}
                <div ref={headerRef} className="services-header text-center mb-16 md:mb-24 space-y-4">
                    <h2 className="text-5xl md:text-7xl font-bold text-[#1a1a1a] tracking-tighter">
                        Services We Offer
                    </h2>
                    <p className="text-gray-500 text-base md:text-xl max-w-3xl mx-auto font-medium leading-relaxed">
                        We will bring the breathe of our experience and industry knowledge to help you succeed
                    </p>
                </div>

                {/* MOBILE VIEW: ScrollStack */}
                <div className="block md:hidden w-full pb-20">
                    <ScrollStack
                        itemDistance={20}
                        itemScale={0.05}
                        stackPosition="10%"
                        itemStackDistance={20}
                    >
                        {homeServices.map((service, index) => (
                            <ScrollStackItem key={index}>
                                <div className="relative w-full h-full">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 p-6 bg-linear-to-t from-black/95 via-black/40 to-transparent">
                                        <h3 className="text-white font-bold text-xl leading-tight">
                                            {service.title}
                                        </h3>
                                    </div>
                                </div>
                            </ScrollStackItem>
                        ))}
                    </ScrollStack>
                </div>

                {/* DESKTOP VIEW: Grid/Focal Layout */}
                <div ref={cardsContainerRef} className="hidden md:flex flex-wrap lg:flex-nowrap justify-center items-center gap-4 md:gap-6 lg:gap-4 xl:gap-8 min-h-[540px]">
                    {homeServices.map((service, index) => {
                        const isLarge = service.tier === "large";
                        const isMedium = service.tier === "medium";
                        const isSmall = service.tier === "small";

                        return (
                            <div
                                key={index}
                                className={`service-card-home group relative cursor-pointer overflow-hidden rounded-[32px] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2
                                    ${isLarge ? 'w-[280px] sm:w-[320px] md:w-[380px] h-[400px] md:h-[540px] z-20' : ''}
                                    ${isMedium ? 'w-[240px] sm:w-[280px] md:w-[320px] h-[350px] md:h-[460px] z-10 opacity-90 hover:opacity-100' : ''}
                                    ${isSmall ? 'w-[200px] sm:w-[240px] md:w-[260px] h-[300px] md:h-[380px] z-0 opacity-70 hover:opacity-100' : ''}
                                `}
                            >
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading={isLarge ? "eager" : "lazy"}
                                />
                                {/* Overlay with Text */}
                                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 bg-linear-to-t from-black/95 via-black/40 to-transparent">
                                    <h3 className={`text-white font-bold text-center leading-tight tracking-tight
                                        ${isLarge ? 'text-xl md:text-2xl' : ''}
                                        ${isMedium ? 'text-lg md:text-xl' : ''}
                                        ${isSmall ? 'text-sm md:text-base' : ''}
                                    `}>
                                        {service.title}
                                    </h3>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* View All Button */}
                <div className="mt-16 md:mt-24 text-center">
                    <Link
                        href="/service"
                        className="inline-flex items-center justify-center px-10 py-3.5 bg-[#A594F9] text-white rounded-full font-bold text-lg hover:bg-[#8e7be6] transition-all duration-300 shadow-lg shadow-purple-500/20"
                    >
                        View All
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default HomeServices;
