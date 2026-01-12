"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const items = [
    "Creatives",
    "Talents",
    "Dreamers",
    "Innovators",
    "Visionaries",
    "Makers",
    "Thinkers",
    "Architects",
    "Developers",
    "Collaborators",
    "Builders",
    "Problem Solvers",
    "Strategists"
];

const MarqueeSection = () => {
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const marquee = marqueeRef.current;
        if (!marquee) return;

        // Clone for infinite effect
        const originalContent = marquee.innerHTML;
        marquee.innerHTML = originalContent + originalContent + originalContent + originalContent;

        let currentPos = 0;
        let skew = 0;
        let direction = -1; // -1 = left, 1 = right
        let speed = 0.6;

        const updateMarquee = () => {
            currentPos += speed * direction;

            // Boundary check for infinite loop
            const totalWidth = marquee.scrollWidth / 4;
            if (currentPos <= -totalWidth) {
                currentPos = 0;
            } else if (currentPos > 0) {
                currentPos = -totalWidth;
            }

            gsap.set(marquee, { x: currentPos });
            requestAnimationFrame(updateMarquee);
        };

        const rafId = requestAnimationFrame(updateMarquee);

        const st = ScrollTrigger.create({
            onUpdate: (self) => {
                const vel = self.getVelocity();

                // Adjust direction based on scroll
                if (vel > 0) {
                    direction = -1; // Scrolling down
                } else if (vel < 0) {
                    direction = 1; // Scrolling up
                }

                // Further reduced speed boost on scroll
                const boost = Math.min(Math.abs(vel) / 300, 2);
                gsap.to({ val: speed }, {
                    val: 0.6 + boost,
                    duration: 0.5,
                    onUpdate: function () { speed = this.targets()[0].val; },
                    ease: "power2.out"
                });

                // Return to base speed
                gsap.to({ val: speed }, {
                    val: 0.6,
                    duration: 1.5,
                    delay: 0.2,
                    onUpdate: function () { speed = this.targets()[0].val; },
                    ease: "power1.inOut"
                });
            }
        });

        return () => {
            cancelAnimationFrame(rafId);
            st.kill();
        };
    }, []);

    return (
        <section
            className="w-full bg-white py-2 overflow-hidden select-none"
        >
            <div
                ref={marqueeRef}
                className="flex whitespace-nowrap items-center"
            >
                {items.map((item, idx) => (
                    <div key={idx} className="flex items-center">
                        <span className="text-[32px] md:text-[64px] lg:text-[100px] font-bold text-black/50 uppercase tracking-tighter px-6 md:px-12 transition-all duration-700 hover:text-purple-600/30">
                            {item}
                        </span>
                        <div className="text-black/50">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-16 md:h-16 ">
                                <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5L12 2Z" fill="currentColor" />
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MarqueeSection;
