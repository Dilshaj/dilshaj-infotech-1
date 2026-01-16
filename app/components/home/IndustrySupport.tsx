"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedPillButton from '../AnimatedPillButton';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const projects = [
    {
        title: "Innovation That Drives Results",
        tags: ["UI/UX", "Web design", "Illustrations"],
        image: "/services/ai-service.jpg",
    },
    {
        title: "Digital Transformation Strategy",
        tags: ["Strategy", "AI", "Cloud"],
        image: "/services/web-service.png",
    }
];

const IndustrySupport = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.from(".left-content", {
                scrollTrigger: {
                    trigger: ".industry-section",
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });

            gsap.from(".project-item", {
                scrollTrigger: {
                    trigger: ".industry-section",
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                y: 60,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "power3.out"
            });

            gsap.utils.toArray<HTMLElement>(".project-item").forEach((item) => {
                const imgWrapper = item.querySelector(".parallax-inner");
                if (imgWrapper) {
                    gsap.fromTo(imgWrapper,
                        { yPercent: -15 },
                        {
                            yPercent: 15,
                            ease: "none",
                            scrollTrigger: {
                                trigger: item,
                                start: "top bottom",
                                end: "bottom top",
                                scrub: true
                            }
                        }
                    );
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="industry-section py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 max-w-[1920px] mx-auto font-sans bg-[#FDFBF7]">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] xl:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 xl:gap-32 items-start">

                {/* Left Side - Content */}
                <div className="left-content lg:sticky lg:top-32 space-y-6 md:space-y-8">
                    <h2 className="text-[34px] sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-bold text-gray-900 leading-[1.05] tracking-tighter">
                        Our <br /> <span className="whitespace-nowrap">Industry Support</span>
                    </h2>
                    <p className="text-gray-500 text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-sm sm:max-w-md">
                        Explore a selection of projects blending creativity with practical design
                    </p>
                    <div className="pt-2 md:pt-4">
                        <AnimatedPillButton
                            href="/service"
                            label="All Works"
                            className="px-7 py-3 md:px-10 md:py-4 border border-[#e5e5e5] text-gray-900 font-bold text-sm sm:text-base shadow-sm"
                        />
                    </div>
                </div>

                {/* Right Side - Projects List */}
                <div className="space-y-16 md:space-y-24 lg:space-y-32">
                    {projects.map((project, index) => (
                        <div key={index} className="project-item group cursor-pointer w-full">
                            <div className="relative aspect-video sm:aspect-16/10 rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden mb-6 md:mb-8 shadow-md">
                                <div className="parallax-inner absolute w-full h-[120%] -top-[10%] left-0">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                {/* Tags on image */}
                                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-10 md:left-10 flex flex-wrap gap-2 md:gap-3">
                                    {project.tags.map((tag, tIdx) => (
                                        <span key={tIdx} className="bg-white/95 backdrop-blur-sm px-3 py-1 sm:px-5 sm:py-1.5 md:px-6 md:py-2 rounded-full text-[9px] sm:text-[10px] md:text-xs font-bold text-gray-900 border border-gray-100 shadow-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight group-hover:text-purple-600 transition-colors pl-1 md:pl-2">
                                {project.title}
                            </h3>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default IndustrySupport;
