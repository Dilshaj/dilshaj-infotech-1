"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const SayHelloButton = () => {
    const circleRef = useRef<HTMLSpanElement>(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);
    const activeTweenRef = useRef<gsap.core.Tween | null>(null);

    useEffect(() => {
        const layout = () => {
            const circle = circleRef.current;
            if (!circle?.parentElement) return;

            const pill = circle.parentElement as HTMLElement;
            const rect = pill.getBoundingClientRect();
            const { width: w, height: h } = rect;
            const R = ((w * w) / 4 + h * h) / (2 * h);
            const D = Math.ceil(2 * R) + 2;
            const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
            const originY = D - delta;

            circle.style.width = `${D}px`;
            circle.style.height = `${D}px`;
            circle.style.bottom = `-${delta}px`;

            gsap.set(circle, {
                xPercent: -50,
                scale: 0,
                transformOrigin: `50% ${originY}px`
            });

            const label = pill.querySelector<HTMLElement>('.pill-label');
            const white = pill.querySelector<HTMLElement>('.pill-label-hover');

            if (label) gsap.set(label, { y: 0 });
            if (white) gsap.set(white, { y: h + 12, opacity: 0 });

            tlRef.current?.kill();
            const tl = gsap.timeline({ paused: true });

            tl.to(circle, { scale: 1.2, xPercent: -50, duration: 1, ease: 'power3.out', overwrite: 'auto' }, 0);

            if (label) {
                tl.to(label, { y: -(h + 8), duration: 0.8, ease: 'power3.out', overwrite: 'auto' }, 0);
            }

            if (white) {
                gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
                tl.to(white, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', overwrite: 'auto' }, 0);
            }

            tlRef.current = tl;
        };

        layout();
        const onResize = () => layout();
        window.addEventListener('resize', onResize);
        if (document.fonts) {
            document.fonts.ready.then(layout).catch(() => { });
        }
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const handleEnter = () => {
        const tl = tlRef.current;
        if (!tl) return;
        activeTweenRef.current?.kill();
        activeTweenRef.current = tl.tweenTo(tl.duration(), {
            duration: 0.4,
            ease: 'power3.out',
            overwrite: 'auto'
        });
    };

    const handleLeave = () => {
        const tl = tlRef.current;
        if (!tl) return;
        activeTweenRef.current?.kill();
        activeTweenRef.current = tl.tweenTo(0, {
            duration: 0.3,
            ease: 'power3.out',
            overwrite: 'auto'
        });
    };

    return (
        <Link
            href="/contact"
            className="relative overflow-hidden inline-flex items-center justify-center h-[48px] md:h-[54px] px-10 no-underline rounded-full box-border font-medium text-sm md:text-base tracking-[0.2px] whitespace-nowrap cursor-pointer bg-transparent text-[#1a1a1a] border border-[#1a1a1a] font-sans"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            <span
                ref={circleRef}
                className="hover-circle absolute left-1/2 bottom-0 rounded-full z-1 block pointer-events-none"
                style={{
                    background: '#1a1a1a',
                    willChange: 'transform'
                }}
                aria-hidden="true"
            />
            <span className="label-stack relative inline-block leading-none z-2">
                <span
                    className="pill-label relative z-2 inline-block leading-none"
                    style={{ willChange: 'transform' }}
                >
                    Say Hello
                </span>
                <span
                    className="pill-label-hover absolute left-0 top-0 z-3 inline-block"
                    style={{
                        color: '#ffffff',
                        willChange: 'transform, opacity'
                    }}
                    aria-hidden="true"
                >
                    Say Hello
                </span>
            </span>
        </Link>
    );
};

const LineRevealText = ({ text, className }: { text: string; className: string }) => {
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (!textRef.current) return;

        const el = textRef.current;
        let tl: gsap.core.Timeline;

        const splitAndAnimate = () => {
            // Cleanup previous triggers
            ScrollTrigger.getAll().filter(st => st.trigger === el).forEach(st => st.kill());
            if (tl) tl.kill();

            const words = text.split(" ");
            el.innerHTML = words
                .map((word) => `<span class="inline-block mr-[0.2em] translate-y-full opacity-0" style="will-change: transform, opacity;">${word}</span>`)
                .join("");

            const wordSpans = Array.from(el.children) as HTMLElement[];

            // Group words into lines based on their vertical offset
            const lines: HTMLElement[][] = [];
            let currentLine: HTMLElement[] = [];
            let lastTop = -1;

            wordSpans.forEach((span) => {
                const top = span.offsetTop;
                if (top !== lastTop) {
                    if (currentLine.length > 0) lines.push(currentLine);
                    currentLine = [span];
                    lastTop = top;
                } else {
                    currentLine.push(span);
                }
            });
            if (currentLine.length > 0) lines.push(currentLine);

            // Clear and wrap lines for masking
            el.innerHTML = "";
            const lineContainers = lines.map((lineWords) => {
                const wrapper = document.createElement("div");
                wrapper.className = "overflow-hidden py-1 sm:py-2";
                const inner = document.createElement("div");
                inner.className = "flex flex-wrap items-center justify-center lg:justify-start";
                lineWords.forEach((word) => {
                    word.classList.remove("opacity-0", "translate-y-full");
                    inner.appendChild(word);
                });
                wrapper.appendChild(inner);
                el.appendChild(wrapper);
                return inner;
            });

            // Scrub animation
            tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                    end: "bottom 70%",
                    scrub: 1,
                }
            });

            tl.fromTo(lineContainers,
                { y: "100%", opacity: 0 },
                {
                    y: "0%",
                    opacity: 1,
                    stagger: 0.2,
                    ease: "power2.out"
                }
            );
        };

        splitAndAnimate();

        const handleResize = () => {
            splitAndAnimate();
            ScrollTrigger.refresh();
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            if (tl) tl.kill();
        };
    }, [text]);

    return <h1 ref={textRef} className={className} />;
};

const WhoWeAre = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Entry animation for image
            if (imageRef.current) {
                gsap.from(imageRef.current, {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                        toggleActions: "play none none reverse",
                    },
                    x: -30,
                    opacity: 0,
                    duration: 1.2,
                    ease: 'power3.out',
                });
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="bg-[#fbf8f7] flex items-center justify-center py-16 md:py-24 lg:py-32 px-4 sm:px-8 md:px-12 lg:px-24 overflow-hidden"
        >
            <div className="max-w-[1500px] w-full flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16 lg:gap-20">
                {/* Left Side: Target Image */}
                <div
                    ref={imageRef}
                    className="w-full lg:w-[40%] flex justify-center lg:justify-start"
                >
                    <div className="relative w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] animate-float">
                        <Image
                            src="/img/whoweare_dart_final.png"
                            alt="Future Focused Technology"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                {/* Right Side: Content */}
                <div
                    ref={contentRef}
                    className="w-full lg:w-[60%] flex flex-col items-center lg:items-start text-center lg:text-left gap-4 lg:gap-6"
                >
                    <div className="flex items-center gap-2 text-xs sm:text-sm md:text-base font-normal text-[#1a1a1a]/60 font-sans">
                        <span className="text-base md:text-lg font-light">+</span>
                        <span className="uppercase tracking-widest text-[10px] sm:text-xs md:text-sm">Who we are</span>
                    </div>

                    <LineRevealText
                        text="Dilshaj Infotech is a future focused technology company offering training, digital solutions, and innovative products."
                        className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[54px] xl:text-[60px] font-normal tracking-tight leading-[1.2] text-[#1a1a1a] max-w-[1000px] font-sans"
                    />

                    <div className="mt-4 md:mt-6">
                        <SayHelloButton />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
