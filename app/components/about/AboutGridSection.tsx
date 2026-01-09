import React from 'react';
import Image from 'next/image';

const AboutGridSection = () => {
    return (
        <section className="bg-white py-20 px-4 md:px-8 max-w-7xl mx-auto font-sans">
            {/* Top Story Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 items-start">
                <div>
                    <h4 className="text-purple-600 font-semibold mb-2 flex items-center gap-2">
                        <span className="text-xl">✦</span> Our Story
                    </h4>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        We deliver the best technology solutions for modern businesses.
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-500 leading-relaxed text-sm md:text-base">
                    <p>
                        At Dilshaj Infotech, we specialize in building high-performance digital products and intelligent platforms. From scalable business solutions to modern web and mobile applications, we transform ideas into reliable, future-ready technology.
                    </p>
                    <p>
                        Our experienced team is driven by innovation, quality, and speed. We focus on understanding real business needs and delivering solutions that are secure, scalable, and designed to create lasting impact.
                    </p>
                </div>
            </div>

            {/* Feature Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                {[
                    {
                        title: "Innovation-Driven Approach",
                        desc: "We combine modern technologies with creative thinking to deliver smart, efficient, and impactful digital solutions.",
                        icon: "/about/icons/icon-bulb.png",
                    },
                    {
                        title: "Scalable & Secure Solutions",
                        desc: "Our products are built to scale with your business while maintaining high performance and strong security.",
                        icon: "/about/icons/icon-shield.png",
                    },
                    {
                        title: "Quality You Can Trust",
                        desc: "We follow industry best practices to ensure reliability, speed, and long-term value in everything we build.",
                        icon: "/about/icons/icon-check.png",
                    },
                ].map((item, index) => (
                    <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                            {/* Fallback to simple circle if image fails, but using Image here */}
                            <Image src={item.icon} alt={item.title} width={24} height={24} className="w-6 h-6 object-contain" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>

            {/* Video Section */}
            <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-20 group cursor-pointer">
                <Image
                    src="/about/team/teamwork.png"
                    alt="Team Meeting"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 transition-transform group-hover:scale-110">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-6 h-6 text-purple-600 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold text-gray-900 border border-white/50">
                    Official Company Analysis
                </div>
            </div>

            {/* Mission & Vision Text */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
                <div>
                    <p className="text-gray-500 text-sm mb-4 leading-relaxed max-w-md">
                        Under our brand DI, we aim to bridge the gap between education and employment, while also creating digital platforms that redefine industries like e-commerce, healthcare, and logistics
                    </p>
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-50/50 md:absolute md:left-10 md:-translate-x-12">
                        {/* Faint Background Text Effect if needed, otherwise plain H2 */}
                    </h2>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Our Mission
                    </h2>
                    <p className="text-xs text-gray-400 mt-2 max-w-xs">
                        To deliver excellence through innovation, integrity, and dedication.
                    </p>
                </div>
                <div className="flex flex-col items-start md:items-end text-left md:text-right">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-right w-full">
                        Our Vision
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                        Our mission is to make DI a nationally recognized innovation hub for training, digital services, and real-world product launches
                    </p>
                </div>
            </div>


            {/* Bento Grid Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Card 1: 100% Commitment */}
                <div className="bg-[#8B5CF6] rounded-3xl p-8 relative overflow-hidden h-[320px] flex items-center justify-between text-white group">
                    {/* 3D Checkmark Image */}
                    <div className="w-1/2 h-full relative z-10">
                        <Image
                            src="/about/mission/checkmark-3d.png"
                            alt="Checkmark"
                            fill
                            className="object-contain object-center scale-125 group-hover:scale-135 transition-transform duration-500"
                        />
                    </div>

                    <div className="w-1/2 flex flex-col items-end justify-center z-10 text-right">
                        <h3 className="text-6xl font-bold mb-0">100%</h3>
                        <p className="text-purple-200 text-lg font-medium mb-8">Commitment</p>

                        <ul className="space-y-1 text-sm font-medium text-white/90">
                            <li className="flex items-center justify-end gap-2">
                                ✓ Quality
                            </li>
                            <li className="flex items-center justify-end gap-2">
                                ✓ Integrity
                            </li>
                            <li className="flex items-center justify-end gap-2">
                                ✓ Responsibility
                            </li>
                        </ul>
                    </div>

                    {/* Background Gradient/Mesh */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600 mix-blend-overlay opacity-50" />
                </div>

                {/* Card 2: 80% Clients */}
                <div className="bg-white border border-gray-100 rounded-3xl p-8 relative overflow-hidden h-[320px] flex items-center group shadow-sm">
                    <div className="w-1/2 h-full relative">
                        <Image
                            src="/about/mission/growth-chart.png"
                            alt="Growth Chart"
                            fill
                            className="object-contain object-bottom group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="w-1/2 flex flex-col items-end justify-end h-full pb-4">
                        <div className="flex -space-x-3 mb-4">
                            {/* Avatar placeholders if no specific images found, or reuse team images? Let's use generic if needed or just blobs */}
                            <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative">
                                <Image src="/about-section/meeting-room.jpg" alt="user" fill className="object-cover" />
                            </div>
                            <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 overflow-hidden relative">
                                <Image src="/about-section/meeting-room.jpg" alt="user" fill className="object-cover" />
                            </div>
                            <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-400 overflow-hidden relative">
                                <Image src="/about-section/meeting-room.jpg" alt="user" fill className="object-cover" />
                            </div>
                        </div>
                        <h3 className="text-6xl font-bold text-gray-900">80%</h3>
                        <p className="text-gray-500 text-xs text-right mt-1">
                            Clients come back for <br /> a new project ↗
                        </p>
                    </div>
                </div>

                {/* Card 3: 15+ Project Ideas */}
                <div className="bg-white border border-gray-100 rounded-3xl p-8 relative overflow-hidden h-[320px] flex flex-col justify-between group shadow-sm">
                    <div className="flex justify-between items-start z-10 text-gray-900">
                        <div>
                            <h3 className="text-5xl font-bold">15+</h3>
                            <p className="text-gray-600 font-medium mt-1">Project Ideas</p>
                        </div>
                    </div>

                    <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                        <div className="w-full h-full relative">
                            <Image
                                src="/about/mission/zen-stones.png"
                                alt="Zen Stones"
                                fill
                                className="object-contain scale-110 translate-y-4 group-hover:translate-y-2 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    <button className="z-10 bg-white border border-gray-900 text-gray-900 px-6 py-2 rounded-full text-sm font-semibold w-fit hover:bg-gray-900 hover:text-white transition-colors">
                        Start New Project
                    </button>
                </div>

                {/* Card 4: 1 Clear Vision (Works) */}
                <div className="bg-white border border-gray-100 rounded-3xl p-8 relative overflow-hidden h-[320px] flex flex-col justify-between group shadow-sm">
                    <div className="z-10">
                        <div className="flex items-baseline gap-2">
                            <h3 className="text-5xl font-bold text-gray-900">1</h3>
                            <p className="font-bold text-gray-900 leading-tight">Clear <br /> Vision</p>
                        </div>
                        <p className="text-xs text-gray-500 mt-4 max-w-[150px]">
                            Building global technology solutions rooted in local impact.
                        </p>
                    </div>

                    <div className="absolute right-[-20px] bottom-[-20px] w-[280px] h-[280px]">
                        <Image
                            src="/about/mission/robot-hand.png"
                            alt="Robot Hand"
                            fill
                            className="object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    <button className="z-10 bg-white border border-gray-900 text-gray-900 px-6 py-2 rounded-full text-sm font-semibold w-fit hover:bg-gray-900 hover:text-white transition-colors mt-auto">
                        Works
                    </button>
                </div>

            </div>
        </section>
    );
};

export default AboutGridSection;
