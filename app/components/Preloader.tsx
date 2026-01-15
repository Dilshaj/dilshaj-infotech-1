"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import CountUp from "./CountUp";

export default function Preloader() {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Check if preloader has already run in this session
        const hasLoaded = sessionStorage.getItem("preloader-shown");
        if (hasLoaded) {
            setIsVisible(false);
            window.dispatchEvent(new Event("loading-complete"));
            return;
        }

        // If not loaded, show it and lock scroll
        setIsVisible(true);
        const scrollY = window.scrollY;

        // Lock scroll using position fixed
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';

        return () => {
            // Restore body styles on cleanup (in case component unmounts unexpectedly)
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            window.scrollTo(0, scrollY);
        };
    }, []);

    const handleLoadingComplete = () => {
        const scrollY = Math.abs(parseInt(document.body.style.top || '0'));

        // Pause at 100, then shutter animation
        setTimeout(() => {
            if (containerRef.current) {
                gsap.to(containerRef.current, {
                    yPercent: -100,
                    duration: 1.2,
                    ease: "expo.inOut",
                    onComplete: () => {
                        setIsVisible(false);
                        sessionStorage.setItem("preloader-shown", "true");

                        // Restore scroll position and body styles
                        document.body.style.position = '';
                        document.body.style.top = '';
                        document.body.style.width = '';
                        window.scrollTo(0, scrollY);

                        window.dispatchEvent(new Event("loading-complete"));
                    }
                });
            }
        }, 400);
    };

    if (!isVisible) return null;

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-99999 flex items-center justify-center bg-white text-black"
        >
            <div className="relative flex flex-col items-center">
                <div className="flex items-baseline">
                    <CountUp
                        from={0}
                        to={100}
                        duration={2.5}
                        className="text-[180px] md:text-[350px] font-bold text-black leading-none tracking-tighter select-none tabular-nums"
                        onEnd={handleLoadingComplete}
                    />
                    <span className="text-[60px] md:text-[120px] font-bold text-black ml-2 md:ml-4">
                        %
                    </span>
                </div>
            </div>
        </div>
    );
}
