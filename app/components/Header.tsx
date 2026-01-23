"use client";

import React, { useRef, useEffect } from 'react';
import PillNav from './PillNav';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

import StaggeredMenu from './StaggeredMenu';

const LetsTalkButton = () => {
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

            tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease: 'power3.easeOut', overwrite: 'auto' }, 0);

            if (label) {
                tl.to(label, { y: -(h + 8), duration: 2, ease: 'power3.easeOut', overwrite: 'auto' }, 0);
            }

            if (white) {
                gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
                tl.to(white, { y: 0, opacity: 1, duration: 2, ease: 'power3.easeOut', overwrite: 'auto' }, 0);
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
            href="/contact"
            className="relative overflow-hidden inline-flex items-center justify-center h-[42px] no-underline rounded-full box-border font-semibold text-[12px] lg:text-[14px] leading-0 uppercase tracking-[0.2px] whitespace-nowrap cursor-pointer px-6 bg-white text-black border border-[#9e9e9e46]"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            <span
                ref={circleRef}
                className="hover-circle absolute left-1/2 bottom-0 rounded-full z-1 block pointer-events-none"
                style={{
                    background: '#0a0a0a',
                    willChange: 'transform'
                }}
                aria-hidden="true"
            />
            <span className="label-stack relative inline-block leading-none z-2">
                <span
                    className="pill-label relative z-2 inline-block leading-none"
                    style={{ willChange: 'transform' }}
                >
                    Let's Talk
                </span>
                <span
                    className="pill-label-hover absolute left-0 top-0 z-3 inline-block font-bold"
                    style={{
                        color: '#ffffff',
                        willChange: 'transform, opacity'
                    }}
                    aria-hidden="true"
                >
                    Let's Talk
                </span>
            </span>
        </Link>
    );
};

const Header = () => {
    const pathname = usePathname();

    const menuItems = [
        { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
        { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
        { label: 'Services', ariaLabel: 'View our services', link: '/service' },
        { label: 'Project', ariaLabel: 'View our projects', link: '/projects' },
        { label: 'Career', ariaLabel: 'Join our team', link: '/career' },
        { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
    ];

    const socialItems = [
        { label: 'Twitter', link: 'https://twitter.com' },
        { label: 'GitHub', link: 'https://github.com' },
        { label: 'LinkedIn', link: 'https://linkedin.com' }
    ];

    /* 
    // STASHED CHANGES (Incomplete/Conflicting):
    return (
        <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4 flex md:grid md:grid-cols-3 justify-between items-center bg-transparent backdrop-blur-sm">
            {/* Logo on the left * /}
            <div className="flex justify-start">
                <Link href="/" className="relative w-25 h-full flex items-center justify-center overflow-hidden p-1 border border-[#ffffff3e] rounded-full transition-transform duration-300 bg-white/20 backdrop-blur-md">
                    <Image
                        src="/about/stats/logo.png"
                        alt="Dilshaj Infotech Logo"
                        width={64}
                        height={64}
                        className="object-cover"
                    />
                </Link>
            </div>
    */

    const desktopNavItems = menuItems.map(item => ({
        label: item.label,
        href: item.link
    }));

    return (
        <>
            {/* Desktop Header: Visible on md and above */}
            <header className="hidden md:grid fixed top-0 left-0 w-full z-50 px-4 md:px-8 lg:px-20 py-4 grid-cols-3 justify-between items-center bg-transparent">
                {/* Logo on the left */}
                <div className="flex justify-start">
                    <Link href="/" className="relative w-32 h-full flex items-center justify-center overflow-hidden p-1 border border-[#9e9e9e46] rounded-full transition-transform duration-300 bg-white/20 backdrop-blur-md">
                        <Image
                            src="/mainlogo.png"
                            alt="Dilshaj Infotech Logo"
                            width={64}
                            height={65}
                            className="object-cover"
                        />
                    </Link>
                </div>

                {/* Pill Nav in the center */}
                <div className="flex justify-center">
                    <PillNav
                        items={desktopNavItems}
                        activeHref={pathname}
                        baseColor="rgba(255, 255, 255, 0.2)"
                        pillColor="#ffffff"
                        hoveredPillTextColor="#000000"
                        pillTextColor="#000000"
                    />
                </div>

                {/* Separate "Let's Talk" button on the right */}
                <div className="flex justify-end items-center">
                    <LetsTalkButton />
                </div>
            </header>

            {/* Mobile Header: Visible below md */}
            <div className="md:hidden">
                <StaggeredMenu
                    position="right"
                    items={menuItems}
                    socialItems={socialItems}
                    displaySocials={true}
                    displayItemNumbering={true}
                    menuButtonColor="#000"
                    openMenuButtonColor="#000"
                    changeMenuColorOnOpen={true}
                    colors={['#B19EEF', '#5227FF']}
                    logoUrl="/logo.png"
                    accentColor="#B19EEF"
                    isFixed={true}
                />
            </div>
        </>
    );
};

export default Header;