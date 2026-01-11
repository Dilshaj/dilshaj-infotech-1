"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function Preloader() {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        // Save original scroll position
        const scrollY = window.scrollY;
        const originalPosition = document.body.style.position;
        const originalTop = document.body.style.top;
        const originalWidth = document.body.style.width;

        // Lock scroll using position fixed (prevents scroll without hiding scrollbar)
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';

        // Counter animation using setInterval for reliability
        let currentCount = 0;
        const totalDuration = 3000; // 3 seconds
        const fps = 60;
        const totalFrames = (totalDuration / 1000) * fps;
        const incrementPerFrame = 100 / totalFrames;

        intervalRef.current = setInterval(() => {
            currentCount += incrementPerFrame;

            if (currentCount >= 100) {
                currentCount = 100;
                setCount(100);
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = null;
                }

                // Pause at 100, then shutter animation
                setTimeout(() => {
                    if (containerRef.current) {
                        gsap.to(containerRef.current, {
                            yPercent: -100,
                            duration: 1.2,
                            ease: "expo.inOut",
                            onComplete: () => {
                                setIsVisible(false);
                                window.dispatchEvent(new Event("loading-complete"));

                                // Restore scroll position and body styles
                                document.body.style.position = originalPosition;
                                document.body.style.top = originalTop;
                                document.body.style.width = originalWidth;
                                window.scrollTo(0, scrollY);
                            }
                        });
                    }
                }, 400);
            } else {
                setCount(Math.floor(currentCount));
            }
        }, 1000 / fps);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
            // Restore body styles on cleanup
            document.body.style.position = originalPosition;
            document.body.style.top = originalTop;
            document.body.style.width = originalWidth;
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-99999 flex items-center justify-center bg-white text-black"
        >
            <div className="relative flex flex-col items-center">
                <div className="flex items-baseline">
                    <h1 className="text-[180px] md:text-[350px] font-bold text-black leading-none tracking-tighter select-none tabular-nums">
                        {count}
                    </h1>
                    <span className="text-[60px] md:text-[120px] font-bold text-black ml-2 md:ml-4">
                        %
                    </span>
                </div>
            </div>
        </div>
    );
}
