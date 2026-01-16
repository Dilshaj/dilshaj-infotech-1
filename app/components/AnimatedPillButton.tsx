"use client";

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

interface AnimatedPillButtonProps {
    href: string;
    label: string;
    className?: string;
    /** Circle expansion color (default: black #0a0a0a) */
    hoverColor?: string;
    /** Text color when hovered (default: white #ffffff) */
    hoverTextColor?: string;
}

const AnimatedPillButton: React.FC<AnimatedPillButtonProps> = ({
    href,
    label,
    className = '',
    hoverColor = '#0a0a0a',
    hoverTextColor = '#ffffff'
}) => {
    const circleRef = useRef<HTMLSpanElement>(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);
    const activeTweenRef = useRef<gsap.core.Tween | null>(null);
    const buttonRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const layout = () => {
            const circle = circleRef.current;
            const button = buttonRef.current;
            if (!circle || !button) return;

            const rect = button.getBoundingClientRect();
            const { width: w, height: h } = rect;

            if (w === 0 || h === 0) return;

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

            const labelEl = button.querySelector<HTMLElement>('.pill-label');
            const whiteEl = button.querySelector<HTMLElement>('.pill-label-hover');

            if (labelEl) gsap.set(labelEl, { y: 0 });
            if (whiteEl) gsap.set(whiteEl, { y: h + 12, opacity: 0 });

            tlRef.current?.kill();
            const tl = gsap.timeline({ paused: true });

            tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease: 'power3.easeOut', overwrite: 'auto' }, 0);

            if (labelEl) {
                tl.to(labelEl, { y: -(h + 8), duration: 2, ease: 'power3.easeOut', overwrite: 'auto' }, 0);
            }

            if (whiteEl) {
                gsap.set(whiteEl, { y: Math.ceil(h + 100), opacity: 0 });
                tl.to(whiteEl, { y: 0, opacity: 1, duration: 2, ease: 'power3.easeOut', overwrite: 'auto' }, 0);
            }

            tlRef.current = tl;
        };

        layout();

        const onResize = () => layout();
        window.addEventListener('resize', onResize);

        if (document.fonts) {
            document.fonts.ready.then(layout).catch(() => { });
        }

        // Small delay to ensure layout paints
        const timeout = setTimeout(layout, 50);

        return () => {
            window.removeEventListener('resize', onResize);
            clearTimeout(timeout);
            tlRef.current?.kill();
            activeTweenRef.current?.kill();
        };
    }, [label]);

    const handleEnter = () => {
        const tl = tlRef.current;
        if (!tl) return;
        activeTweenRef.current?.kill();
        activeTweenRef.current = tl.tweenTo(tl.duration(), {
            duration: 0.3,
            ease: 'power3.easeOut',
            overwrite: 'auto'
        });
    };

    const handleLeave = () => {
        const tl = tlRef.current;
        if (!tl) return;
        activeTweenRef.current?.kill();
        activeTweenRef.current = tl.tweenTo(0, {
            duration: 0.2,
            ease: 'power3.easeOut',
            overwrite: 'auto'
        });
    };

    return (
        <Link
            href={href}
            ref={buttonRef}
            className={`relative overflow-hidden inline-flex items-center justify-center no-underline rounded-full box-border cursor-pointer select-none ${className}`}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            <span
                ref={circleRef}
                className="hover-circle absolute left-1/2 bottom-0 rounded-full z-1 block pointer-events-none"
                style={{
                    background: hoverColor,
                    willChange: 'transform'
                }}
                aria-hidden="true"
            />
            <span className="label-stack relative inline-block leading-none z-2 pointer-events-none">
                <span
                    className="pill-label relative z-2 inline-block leading-none"
                    style={{ willChange: 'transform' }}
                >
                    {label}
                </span>
                <span
                    className="pill-label-hover absolute left-0 top-0 z-3 inline-block font-bold"
                    style={{
                        color: hoverTextColor,
                        willChange: 'transform, opacity'
                    }}
                    aria-hidden="true"
                >
                    {label}
                </span>
            </span>
        </Link>
    );
};

export default AnimatedPillButton;
