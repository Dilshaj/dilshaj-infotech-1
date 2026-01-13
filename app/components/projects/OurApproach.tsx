"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        id: "1",
        title: "Discovery & Planning",
        description: "Understanding your vision to define a clear roadmap."
    },
    {
        id: "2",
        title: "Design & Innovation",
        description: "Creating intuitive, user-focused, and innovative designs."
    },
    {
        id: "3",
        title: "Development & Execution",
        description: "Building secure, scalable, high-performance solutions."
    },
    {
        id: "4",
        title: "Testing & Optimization",
        description: "Ensuring quality, reliability, and smooth performance."
    },
    {
        id: "5",
        title: "Launch & Support",
        description: "Seamless deployment with ongoing support."
    },
    {
        id: "6",
        title: "Iterative Delivery",
        description: "Milestone-based delivery for flexibility and clarity."
    }
];

export default function OurApproach() {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        // Header & Line Animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".approach-header",
                start: "top 80%",
                toggleActions: "play reverse play reverse"
            }
        });

        tl.from(".approach-title", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        })
            .from(".approach-line", {
                width: 0,
                duration: 1,
                ease: "power2.out"
            }, "-=0.4");

        // Steps Stagger Animation
        gsap.from(".approach-step", {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".steps-container",
                start: "top 80%",
                toggleActions: "play reverse play reverse"
            }
        });

        // Bot Parallax & Fade In
        gsap.fromTo(".bot-image",
            { x: 200, opacity: 0, scale: 0.9 },
            {
                x: 0,
                opacity: 1,
                scale: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".bot-container",
                    start: "top 80%",
                    scrub: false,
                    toggleActions: "play reverse play reverse"
                }
            }
        );

        // Continuous Floating Animation for Bot
        gsap.to(".bot-image-inner", {
            y: -20,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="w-full bg-[#050505] py-12 md:py-20 px-4 md:px-0 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-[1400px] mx-auto relative z-10">

                {/* Header */}
                <div className="approach-header flex flex-col items-end mb-8 px-4 md:px-30">
                    <h2 className="approach-title text-4xl md:text-5xl font-bold text-white tracking-wide mb-4">
                        Our Approach
                    </h2>
                    {/* Decorative Line */}
                    <div className="approach-line w-full max-w-[400px] h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />
                </div>

                <div className="flex flex-col lg:flex-row items-start justify-between gap-12 px-4 md:px-12">

                    {/* Left Column: Steps List */}
                    <div className="steps-container w-full lg:w-1/2 flex flex-col gap-6 lg:pl-0">
                        {steps.map((step) => (
                            <div key={step.id} className="approach-step flex items-start gap-4 md:gap-6">
                                <span className="text-5xl md:text-7xl font-bold text-[#8B5CF6] opacity-80 leading-none font-sans">
                                    {step.id}
                                </span>
                                <div className="mt-1 md:mt-2">
                                    <h3 className="text-lg md:text-2xl font-bold text-[#A78BFA] mb-1 md:mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Bot Image */}
                    <div className="bot-container w-full lg:w-1/2 flex justify-center relative">
                        {/* Image Glow Effect */}
                        <div className="absolute inset-0 bg-purple-600/20 blur-[80px] rounded-full transform scale-75" />

                        <div className="bot-image relative w-full max-w-[700px] aspect-square">
                            <div className="bot-image-inner relative w-full h-full">
                                <Image
                                    src="/projects/robo.png"
                                    alt="AI Bot Assistant"
                                    fill
                                    className="object-contain drop-shadow-2xl"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
