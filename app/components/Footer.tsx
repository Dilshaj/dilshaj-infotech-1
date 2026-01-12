"use client";

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {
    ArrowUpRight,
    Send,
    Facebook,
    Youtube,
    Instagram,
    Twitter,
    MessageCircle,
} from "lucide-react";

const Footer = () => {
    return (
        <footer className="w-full text-white pt-10 bg-[#FDFBF7]">
            <div className="w-full bg-[#0a0a0a] rounded-t-[40px] px-6 md:px-12 pt-12 md:pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto">
                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 relative z-10 gap-6">
                        <h2 className="text-4xl md:text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                            Lets Connect there
                        </h2>
                        <Link href="/contact" className="group flex items-center gap-2 bg-[#9d8bf4] text-white px-8 py-3 rounded-full font-medium hover:bg-[#8875e5] transition-all duration-300 transform hover:scale-105">
                            Connect <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="w-full h-px bg-white/10 mb-12"></div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12 relative z-10">

                        {/* Brand Column */}
                        <div className="lg:col-span-4 space-y-6">
                            <Link href="/" className="inline-block relative">
                                {/* Ensure logo is visible on dark background */}
                                <div className="flex items-center gap-2">
                                    <Image
                                        src="/logo.png"
                                        alt="Dilshaj Infotech"
                                        width={180}
                                        height={60}
                                        className="object-contain"
                                    />
                                </div>
                            </Link>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                                Dilshaj Infotech is a next-generation global technology company building high-performance digital products, intelligent platforms, and scalable solutions. We focus on quality, innovation, and speed to deliver secure, future-ready technology that drives real impact.
                            </p>
                        </div>

                        {/* Navigation */}
                        <div className="lg:col-span-2">
                            <h3 className="text-lg font-medium text-[#bca5ff] mb-6">Navigation</h3>
                            <ul className="space-y-4 text-gray-400 text-sm">
                                {['Home', 'About Us', 'Service', 'Projects', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <Link
                                            href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                                            className="hover:text-white transition-colors"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="lg:col-span-3">
                            <h3 className="text-lg font-medium text-[#bca5ff] mb-6">Contact</h3>
                            <ul className="space-y-6 text-gray-400 text-sm">
                                <li className="flex items-center gap-3 justify-start">
                                    <span>+91 8977272763</span>
                                </li>
                                <li className="flex items-center gap-3 justify-start">
                                    <a href="mailto:dilshajinfotech.it@gmail.com" className="hover:text-white transition-colors">dilshajinfotech.it@gmail.com</a>
                                </li>
                                <li className="flex items-center gap-3 justify-start">
                                    <span>Rolugunta, Narsipatnam,<br />Visakhapatnam, Andhra Pradesh</span>
                                </li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div className="lg:col-span-3">
                            <h3 className="text-lg font-medium text-[#bca5ff] mb-6">Get the latest information</h3>
                            <form className="relative mb-8 max-w-xs md:mx-0">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full bg-white text-black py-3 pl-4 pr-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9d8bf4] placeholder:text-gray-500 font-medium"
                                />
                                <button className="absolute right-1 top-1 bottom-1 bg-[#9d8bf4] p-2 rounded-md text-white hover:bg-[#8875e5] transition-colors flex items-center justify-center w-10">
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>
                            <div className="flex gap-4 justify-start">
                                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                                    <Facebook className="w-5 h-5 fill-white" />
                                </a>
                                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                                    <Youtube className="w-5 h-5 fill-white" />
                                </a>
                                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                                    <MessageCircle className="w-5 h-5 fill-white" />
                                </a>
                                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                                    <Twitter className="w-5 h-5 fill-white" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-px bg-white/10 mb-8"></div>

                    {/* Footer Bottom */}
                    <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs md:text-sm gap-4">
                        <p>Copyright© 2025 Dilshaj Infotech. All Rights Reserved.</p>
                        <div className="flex gap-4">
                            <Link href="/terms" className="hover:text-white transition-colors">User Terms & Conditions</Link>
                            <span>|</span>
                            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer