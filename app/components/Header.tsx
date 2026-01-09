"use client";

import React from 'react';
import PillNav from './PillNav';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
    const pathname = usePathname();
    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about' },
        { label: 'Services', href: '/service' },
        { label: 'Project', href: '/projects' },
        { label: 'Career', href: '/career' },
        { label: 'Contact Us', href: '/contact' },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4 flex md:grid md:grid-cols-3 justify-between items-center bg-transparent backdrop-blur-sm">
            {/* Logo on the left */}
            <div className="flex justify-start">
                <Link href="/" className="group">
                    <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center overflow-hidden border border-white/20 transition-transform duration-300 group-hover:rotate-12">
                        <img src="/logo.png" alt="Dilshaj Infotech Logo" className="w-full h-full object-cover" />
                    </div>
                </Link>
            </div>

            {/* Pill Nav in the center */}
            <div className="flex justify-center">
                <PillNav
                    items={navItems}
                    activeHref={pathname}
                    baseColor="rgba(255, 255, 255, 0.2)"
                    pillColor="#ffffff"
                    hoveredPillTextColor="#000000"
                    pillTextColor="#000000"
                />
            </div>

            {/* Separate "Let's Talk" button on the right */}
            <div className="flex justify-end items-center">
                <Link
                    href="/contact"
                    className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300 border border-white"
                >
                    Let's Talk
                </Link>
            </div>
        </header>
    );
};

export default Header;