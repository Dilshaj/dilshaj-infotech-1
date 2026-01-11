"use client";
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Lightbulb, Shield, CheckCircle, Play, ArrowUpRight, Check } from 'lucide-react';
import Image from 'next/image';

const AboutGridSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".bento-card",
                { opacity: 0, y: 100, filter: "blur(10px)" },
                { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power3.out", stagger: 0.1 }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        gsap.to(e.currentTarget, { scale: 0.98, duration: 0.3, ease: "power2.out" });
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        gsap.to(e.currentTarget, { scale: 1, duration: 0.3, ease: "power2.out" });
    };

    return (
        <section className="bg-transparent pt-1 pb-24 md:py-20 px-4 md:px-8 max-w-7xl mx-auto font-sans relative overflow-hidden">

            {/* Top Story Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 relative z-10">
                <div className="max-w-xl">
                    <h4 className="text-gray-900 font-bold mb-4 flex items-center gap-2 text-lg">
                        <span className="text-xl">✦</span> Our Story
                    </h4>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.15] tracking-tight">
                        We deliver the best technology solutions for modern businesses.
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-gray-500 leading-relaxed text-[15px] pt-4">
                    <p>
                        At Dilshaj Infotech, we specialize in building high-performance digital products and intelligent platforms. From scalable business solutions to modern web and mobile applications, we transform ideas into reliable, future-ready technology.
                    </p>
                    <p>
                        Our experienced team is driven by innovation, quality, and speed. We focus on understanding real business needs and delivering solutions that are secure, scalable, and designed to create lasting impact.
                    </p>
                </div>
            </div>

            {/* Feature Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 relative z-10">
                {[
                    {
                        title: "Innovation-Driven Approach",
                        desc: "We combine modern technologies with creative thinking to deliver smart, efficient, and impactful digital solutions.",
                        Icon: Lightbulb,
                    },
                    {
                        title: "Scalable & Secure Solutions",
                        desc: "Our products are built to scale with your business while maintaining high performance and strong security.",
                        Icon: Shield,
                    },
                    {
                        title: "Quality You Can Trust",
                        desc: "We follow industry best practices to ensure reliability, speed, and long-term value in everything we build.",
                        Icon: CheckCircle,
                    },
                ].map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col xl:flex-row items-start gap-5 group">
                        <div className="w-14 h-14 rounded-full bg-[#8B5CF6] shrink-0 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                            <item.Icon size={24} strokeWidth={1.5} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">{item.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Content with Overlapping Images */}
            <div className="relative w-full max-w-6xl mx-auto mb-32">
                {/* Main Large Image (Team Meeting) */}
                <div className="relative w-full md:w-[65%] h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-xl z-0">
                    <Image
                        src="/about/team/meeting-room.png"
                        alt="Team Meeting Office"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Overlapping Smaller Image (Hands Writing) */}
                <div className="hidden md:block absolute right-0 bottom-[-40px] md:top-[80px] w-[50%] h-[250px] md:h-[350px] rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white z-10">
                    <Image
                        src="/about/team/hands-writing.png"
                        alt="Hands Writing Planning"
                        fill
                        className="object-cover"
                    />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors hover:bg-black/20 cursor-pointer group">
                        <div className="w-16 h-16 bg-[#8B5CF6]/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <Play size={28} className="text-white ml-1 fill-white" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission & Vision Text */}
            {/* Mission & Vision Text */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12 mb-32 w-full items-center">
                {/* Top Left: Heading (Swapped) */}
                <div className="flex flex-col items-start">
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 flex items-start gap-1 relative">
                        Our Vision
                        <span className="text-2xl md:text-3xl text-gray-900 absolute -right-6 -top-1">✦</span>
                    </h2>
                </div>

                {/* Top Right: Text (Swapped) */}
                <div className="flex items-center justify-start md:justify-end">
                    <p className="text-gray-500 text-sm leading-relaxed max-w-sm text-left md:text-right">
                        Under our brand DI, we aim to bridge the gap between education and employment, while also creating digital platforms that redefine industries like e-commerce, healthcare, and logistics
                    </p>
                </div>

                {/* Bottom Left: Heading */}
                <div className="flex flex-col items-start">
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
                        Our Mission
                    </h2>
                    <p className="text-xs text-gray-500 mt-2 max-w-xs">
                        To deliver excellence through innovation, integrity, and dedication.
                    </p>
                </div>

                {/* Bottom Right: Text */}
                <div className="flex items-center justify-start md:justify-end">
                    <p className="text-gray-500 text-sm leading-relaxed max-w-sm text-left md:text-right">
                        Our mission is to make DR a nationally recognized innovation hub for training, digital services, and real-world product launches
                    </p>
                </div>
            </div>


            {/* Bento Grid Stats - Animated Grid */}
            <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10 text-left">

                {/* Card 1: 100% Commitment (Purple) */}
                <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="bento-card bg-[#9D7BFF] rounded-[32px] p-6 md:p-10 relative overflow-hidden h-[300px] sm:h-[360px] flex items-center justify-between shadow-sm group lg:col-span-2 cursor-pointer"
                >
                    {/* 3D Checkmark Image - Left */}
                    <div className="absolute left-[-10px] md:left-[20px] top-1/2 -translate-y-1/2 w-[110px] md:w-[180px] h-[110px] md:h-[180px] drop-shadow-2xl z-10 transition-transform duration-500 group-hover:scale-110">
                        <Image
                            src="/about/mission/image.png"
                            alt="Commitment Checkmark"
                            fill
                            className="object-contain"
                        />
                    </div>

                    <div className="ml-auto w-[55%] md:w-[45%] flex flex-col items-start justify-center z-20 pl-0">
                        <h3 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-1 tracking-tight">100%</h3>
                        <p className="text-purple-100 text-sm md:text-lg font-medium mb-3 md:mb-6">Commitment</p>

                        <ul className="space-y-2 md:space-y-3 text-xs md:text-sm font-medium text-white/90">
                            <li className="flex items-center gap-2">
                                <Check size={14} className="md:w-4 md:h-4" strokeWidth={3} /> Quality
                            </li>
                            <li className="flex items-center gap-2">
                                <Check size={14} className="md:w-4 md:h-4" strokeWidth={3} /> Integrity
                            </li>
                            <li className="flex items-center gap-2">
                                <Check size={14} className="md:w-4 md:h-4" strokeWidth={3} /> Responsibility
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Card 2: 80% Clients (White Chart) */}
                <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="bento-card bg-white border border-gray-100 rounded-[32px] p-6 md:p-10 relative overflow-hidden h-[300px] sm:h-[360px] group shadow-sm hover:shadow-md transition-all lg:col-span-3 cursor-pointer"
                >
                    {/* Bar Chart Image */}
                    <div className="absolute bottom-0 left-0 w-[70%] md:w-[80%] h-[70%] md:h-[90%] transition-transform duration-500 group-hover:scale-105 z-10">
                        <Image
                            src="/about/mission/zen-stones.png"
                            alt="Growth Bar Chart"
                            fill
                            className="object-contain object-left-bottom"
                        />
                    </div>

                    {/* Content */}
                    <div className="absolute top-6 md:top-8 right-6 md:right-8 flex flex-col items-end h-[calc(100%-3rem)] md:h-[calc(100%-4rem)] justify-between z-20">
                        <div className="flex -space-x-3">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative">
                                <Image src="/about/team/avatars-group.png" alt="user" fill className="object-cover" />
                            </div>
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-gray-300 overflow-hidden relative flex items-center justify-center text-[10px] font-bold text-gray-600">
                                +
                            </div>
                        </div>

                        <div className="flex flex-col items-end gap-6">
                            <div className="text-right">
                                <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">80%</h3>
                                <p className="text-gray-500 text-xs md:text-sm font-medium mt-2 leading-relaxed whitespace-nowrap">
                                    Clients come back for <br /> a new project
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 3: 15+ Project Ideas (White Sprial Stones) */}
                <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="bento-card bg-white border border-gray-100 rounded-[32px] p-6 md:p-10 relative overflow-hidden h-[300px] sm:h-[360px] flex flex-col justify-between group shadow-sm hover:shadow-md transition-all lg:col-span-3 cursor-pointer"
                >
                    <div className="flex justify-between items-start z-10 text-gray-900 relative">
                        <div>
                            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-1">15+</h3>
                            <p className="text-gray-900 font-bold text-sm md:text-lg">Project Ideas</p>
                        </div>
                    </div>

                    {/* Stacked Stones Image */}
                    <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                        <div className="w-[65%] md:w-[85%] h-[65%] md:h-[85%] relative translate-y-8 translate-x-8">
                            <Image
                                src="/about/mission/project-idea.png"
                                alt="Stacked Stones"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    <button suppressHydrationWarning className="z-10 bg-white border border-gray-900 text-gray-900 px-6 py-3 rounded-full text-sm font-bold w-fit hover:bg-gray-900 hover:text-white transition-colors mt-auto">
                        Start New Project
                    </button>
                </div>

                {/* Card 4: 1 Clear Vision (White Hand) */}
                <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="bento-card bg-white border border-gray-100 rounded-[32px] p-6 md:p-10 relative overflow-hidden h-[300px] sm:h-[360px] flex flex-col justify-between group shadow-sm hover:shadow-md transition-all lg:col-span-2 cursor-pointer"
                >
                    <div className="z-10 relative">
                        <div className="flex items-start gap-2">
                            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-none">1</h3>
                            <p className="font-bold text-gray-900 text-sm md:text-lg leading-tight pt-2">Clear <br /> Vision</p>
                        </div>
                        <p className="text-xs md:text-sm text-gray-500 mt-4 max-w-[180px] leading-relaxed">
                            Building global technology solutions rooted in local impact.
                        </p>
                    </div>

                    {/* Robot Hand Image */}
                    <div className="absolute right-[-40px] md:right-[-50px] bottom-[-40px] md:bottom-[-50px] w-[200px] md:w-[350px] h-[200px] md:h-[350px] z-0">
                        <Image
                            src="/about/mission/hand.png"
                            alt="Robot Hand"
                            fill
                            className="object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    <button suppressHydrationWarning className="z-10 bg-white border border-gray-900 text-gray-900 px-6 py-3 rounded-full text-sm font-bold w-fit hover:bg-gray-900 hover:text-white transition-colors mt-auto">
                        Works
                    </button>
                </div>

            </div>
        </section>
    );
};

export default AboutGridSection;
