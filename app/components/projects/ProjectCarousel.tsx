"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projects = [
    {
        id: 1,
        mainTitle: "EduProva AI\nTech Skill App",
        cardTitle: "EduProva",
        description: "Eduprova is an AI-Tech skill and career ecosystem that combines skill-based courses, expert guidance, community learning, and job opportunities on a single platform.",
        image: "/projects/eduprova.png",
        color: "#A78BFA",
        bgColor: "bg-[#A78BFA]",
        textColor: "text-[#A78BFA]"
    },
    {
        id: 2,
        mainTitle: "Digital News\nChannel",
        cardTitle: "News Channel",
        description: "A modern news platform delivering real-time updates, multimedia content, and personalized news experiences.",
        image: "/projects/news.png",
        color: "#B91C1C",
        bgColor: "bg-[#B91C1C]",
        textColor: "text-[#B91C1C]"
    },
    {
        id: 3,
        mainTitle: "Bike & Car\nRider App",
        cardTitle: "Bike & Car Rider App",
        description: "A smart transportation platform enabling seamless ride booking, real-time tracking, and secure digital payments for urban mobility.",
        image: "/projects/bike & car.png",
        color: "#EA580C",
        bgColor: "bg-[#EA580C]",
        textColor: "text-[#EA580C]"
    },
    {
        id: 4,
        mainTitle: "Architecture &\nDesign Platform",
        cardTitle: "Architecture & Design Platform",
        description: "A collaborative digital platform that connects architects, designers, and clients with advanced visualization and planning tools.",
        image: "/projects/design.png",
        color: "#78716C",
        bgColor: "bg-[#78716C]",
        textColor: "text-[#78716C]"
    },
    {
        id: 5,
        mainTitle: "E-Commerce\nPlatform",
        cardTitle: "E-Commerce Platform",
        description: "A high-performance online marketplace offering smooth shopping experiences, secure transactions, and scalable operations.",
        image: "/projects/e-commerce.png",
        color: "#FDBA74",
        bgColor: "bg-[#FDBA74]",
        textColor: "text-[#FDBA74]"
    },
    {
        id: 6,
        mainTitle: "Security &\nNavigation App",
        cardTitle: "Security & Navigation App",
        description: "An intelligent safety and navigation app providing real-time location tracking, alerts, and route assistance.",
        image: "/projects/security.png",
        color: "#18181b",
        bgColor: "bg-[#18181b]",
        textColor: "text-[#18181b]"
    },
    {
        id: 7,
        mainTitle: "Doctor-on-\nOne-Click",
        cardTitle: "Doctor-on-One-Click",
        description: "A digital healthcare platform enabling instant access to medical professionals through online consultations and appointments.",
        image: "/projects/doctor.png",
        color: "#4385F5",
        bgColor: "bg-[#4385F5]",
        textColor: "text-[#4385F5]"
    },
    {
        id: 8,
        mainTitle: "Food Delivery\nApplication",
        cardTitle: "Food Delivery Application",
        description: "A user-friendly food ordering platform with real-time order tracking and fast delivery management.",
        image: "/projects/food.png",
        secondaryImage: "/projects/deliver.png",
        color: "#C1A066",
        bgColor: "bg-[#C1A066]",
        textColor: "text-[#C1A066]"
    }
];

export default function ProjectCarousel({ isHomePage = false }: { isHomePage?: boolean }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState<'next' | 'prev'>('next');
    const [isAnimating, setIsAnimating] = useState(false);

    const containerRef = React.useRef<HTMLDivElement>(null);
    const { contextSafe } = useGSAP({ scope: containerRef });

    // Section Reveal Animation
    useGSAP(() => {
        if (isHomePage) {
            gsap.from(".project-card-container", {
                scale: 0.9,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "center center",
                    scrub: 1
                }
            });
        } else {
            gsap.from(containerRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    toggleActions: "play reverse play reverse"
                }
            });
        }
    }, { scope: containerRef });

    const changeSlide = contextSafe((newDirection: 'next' | 'prev') => {
        if (isAnimating) return;
        setIsAnimating(true);
        setDirection(newDirection);

        // Exit Animation
        const tl = gsap.timeline({
            onComplete: () => {
                if (newDirection === 'next') {
                    setCurrentIndex((prev) => (prev + 1) % projects.length);
                } else {
                    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
                }
            }
        });

        // Elements to animate out
        const xOffsetTitle = newDirection === 'next' ? -50 : 50;
        const xOffsetImage = newDirection === 'next' ? -100 : 100;

        tl.to(".gsap-title", {
            x: xOffsetTitle,
            opacity: 0,
            duration: 0.4,
            ease: "power2.in"
        })
            .to(".gsap-card", {
                y: 20,
                opacity: 0,
                duration: 0.4,
                ease: "power2.in"
            }, "<")
            .to(".gsap-image", {
                x: xOffsetImage,
                opacity: 0,
                duration: 0.4,
                ease: "power2.in"
            }, "<");
    });

    // Enter Animation (runs when currentIndex changes)
    useGSAP(() => {
        const fromX = direction === 'next' ? 100 : -100;
        const imgFromX = direction === 'next' ? 200 : -200;

        const tl = gsap.timeline({
            onComplete: () => setIsAnimating(false)
        });

        tl.fromTo(".gsap-title",
            { x: fromX, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
        )
            .fromTo(".gsap-card",
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
                "<0.1"
            )
            .fromTo(".gsap-image",
                { x: imgFromX, opacity: 0, scale: 0.9 },
                { x: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.2)" },
                "<"
            );

    }, { dependencies: [currentIndex], scope: containerRef });

    const project = projects[currentIndex];

    // Conditional Styles
    const containerClasses = isHomePage
        ? "w-[90%] md:w-[90%] mx-auto rounded-[2.5rem] bg-white border border-gray-100 shadow-lg"
        : "w-full border-y border-gray-100 bg-white";

    return (
        <div ref={containerRef} className="w-full relative pt-24 md:pt-32 pb-0">

            {/* Header */}
            <div className={`w-full mb-10 pl-4 flex items-center gap-3 ${isHomePage ? "md:pl-24" : "md:pl-15"}`}>
                <div className="relative w-8 h-8 md:w-12 md:h-12 flex items-center justify-center">
                    <Image
                        src="/about/hero/star-icon.png"
                        alt="Star Icon"
                        fill
                        className="object-contain"
                    />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 underline decoration-blue-500 decoration-4 underline-offset-8">
                    Future Products & Projects
                </h2>
            </div>

            {/* Main Card Container */}
            <div className={`${containerClasses} project-card-container h-[700px] md:h-[800px] relative overflow-hidden flex flex-col lg:flex-row`}>

                {/* Left Side - Content Area */}
                <div className="w-full lg:w-[35%] h-full relative p-6 md:p-12 flex flex-col justify-start z-30 pointer-events-none md:pointer-events-auto">
                    {/* Main Title - Animated */}
                    <div className="mb-6 md:mb-10 overflow-hidden">
                        <h3 className={`gsap-title text-3xl md:text-5xl lg:text-5xl font-bold ${project.textColor} leading-tight whitespace-pre-line`}>
                            {project.mainTitle}
                        </h3>
                    </div>
                </div>

                {/* Floating Info Card - Desktop & Mobile (Unified or similar style) */}
                <div className="absolute top-[45%] lg:top-1/2 left-1/2 lg:left-[32%] transform -translate-x-1/2 -translate-y-1/2 z-40 max-w-[85%] md:max-w-md lg:max-w-xl w-full">
                    <div className={`gsap-card bg-white/40 backdrop-blur-xl p-6 md:p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/40 md:min-h-[260px] lg:min-h-[350px] flex flex-col justify-center`}>
                        <h4 className={`text-xl md:text-3xl font-bold ${project.textColor} mb-3 md:mb-4`}>
                            {project.cardTitle}
                        </h4>
                        <p className="text-gray-700 leading-relaxed text-sm md:text-lg font-medium">
                            {project.description}
                        </p>
                    </div>
                </div>

                {/* Mobile View Card Removed (using the one above for both) */}


                {/* Right Side - Colored Background & Image */}
                <div
                    className={`absolute lg:static inset-0 lg:inset-auto w-full lg:w-[75%] h-full ${project.bgColor} transition-colors duration-700 ease-in-out z-10 overflow-hidden lg:ml-[-10%]`}
                    style={{
                        clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)"
                    }}
                >
                    <style jsx>{`
               @media (max-width: 1024px) {
                 div[class*="inset-0"] {
                   clip-path: polygon(85% 0, 100% 0, 100% 100%, 0% 100%) !important;
                   margin-left: 0 !important;
                   top: 0;
                   height: 100%;
                   width: 100%;
                 }
               }
             `}</style>

                    {/* Image Container */}
                    <div className="relative w-full h-full">
                        {(project as any).secondaryImage ? (
                            <>
                                {/* Top Image (Food) - Background */}
                                <div className="hidden lg:block absolute top-[38%] lg:top-[2%] right-[14%] lg:right-[-5%] w-[50%] h-[50%] z-10">
                                    <Image
                                        src={project.image}
                                        alt={project.cardTitle}
                                        fill
                                        className="gsap-image object-contain drop-shadow-2xl"
                                        priority
                                    />
                                </div>
                                {/* Bottom Image (Delivery) - Foreground */}
                                <div className="absolute bottom-[8%] lg:bottom-0 right-[3%] lg:right-[15%] w-[70%] h-[70%] lg:w-[60%] lg:h-[60%] z-20">
                                    <Image
                                        src={(project as any).secondaryImage}
                                        alt={project.cardTitle + " Secondary"}
                                        fill
                                        className="gsap-image object-contain object-bottom drop-shadow-2xl"
                                        priority
                                    />
                                </div>
                            </>
                        ) : (
                            <div className="absolute bottom-0 right-[-5%] md:right-[-5%] lg:right-0 w-[75%] h-[45%] md:w-[50%] md:h-[50%] lg:w-[85%] lg:h-[85%]">
                                <Image
                                    src={project.image}
                                    alt={project.cardTitle}
                                    fill
                                    className="gsap-image object-contain object-bottom-right drop-shadow-2xl"
                                    priority
                                />
                            </div>
                        )}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4 md:gap-6 z-50">
                    <button
                        onClick={() => changeSlide('prev')}
                        className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/30 backdrop-blur-md border border-white/40 shadow-xl flex items-center justify-center hover:bg-white/50 transition-all text-gray-800 hover:scale-110 active:scale-95 group"
                    >
                        <ArrowLeft className="w-5 h-5 md:w-7 md:h-7 group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <button
                        onClick={() => changeSlide('next')}
                        className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/30 backdrop-blur-md border border-white/40 shadow-xl flex items-center justify-center hover:bg-white/50 transition-all text-gray-800 hover:scale-110 active:scale-95 group"
                    >
                        <ArrowRight className="w-5 h-5 md:w-7 md:h-7 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

            </div>
        </div>
    );
}
