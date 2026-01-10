"use client";

import React from 'react';
import PillNav from './PillNav';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import StaggeredMenu from './StaggeredMenu';

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
                            src="/about/stats/chart-visual.png"
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
                    <Link
                        href="/contact"
                        className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300 border border-[#9e9e9e46]"
                    >
                        Let's Talk
                    </Link>
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
                    logoUrl="/about/stats/chart-visual.png"
                    accentColor="#B19EEF"
                    isFixed={true}
                />
            </div>
        </>
    );
};

export default Header;