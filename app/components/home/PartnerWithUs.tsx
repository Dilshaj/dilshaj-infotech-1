"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Handshake, TrendingUp, Zap, Sparkles } from 'lucide-react';

const PartnerWithUs = () => {
    return (
        <section className="py-16 md:py-24 px-4 md:px-12 max-w-screen mx-auto font-sans xl:pl-30 bg-[#FDFBF7]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left Content */}
                <div className="flex flex-col gap-8">
                    {/* Label */}
                    <div className="flex items-center gap-2 text-[#1A0B2E] font-semibold text-lg">
                        <Sparkles className="w-5 h-5" />
                        <span>Partner With Us</span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1A0B2E] leading-[1.1] tracking-tight">
                        Partner with <span className="text-[#9D7BFF]">Dilshaj Infotech</span> <br />
                        for Impactful Growth
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                        We collaborate with startups, enterprises, institutions, and
                        innovators to transform ideas into scalable digital
                        solutions. Whether it's technology, education, or product
                        innovation – great results are built together.
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-x-8 gap-y-4 mt-2">
                        <div className="flex items-center gap-2">
                            <Handshake className="w-6 h-6 text-[#9D7BFF]" strokeWidth={1.5} />
                            <span className="font-medium text-[#1A0B2E] text-sm md:text-base">Strategic Partnerships</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <TrendingUp className="w-6 h-6 text-[#9D7BFF]" strokeWidth={1.5} />
                            <span className="font-medium text-[#1A0B2E] text-sm md:text-base">Mutual Growth</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Zap className="w-6 h-6 text-[#9D7BFF]" strokeWidth={1.5} />
                            <span className="font-medium text-[#1A0B2E] text-sm md:text-base">Tech Synergy</span>
                        </div>
                    </div>

                    {/* Button */}
                    <div className="mt-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-3 bg-[#9D7BFF] text-white font-medium rounded-full hover:bg-[#8A6AE0] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            Start Collaboration
                        </Link>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative w-full aspect-square lg:aspect-[4/3] flex items-center justify-center">
                    <Image
                        src="/image.png"
                        alt="Partner with Dilshaj Infotech"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default PartnerWithUs;
