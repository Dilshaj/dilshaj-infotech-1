"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const faqs = [
    {
        question: "What services does Dilshaj Infotech provide?",
        answer: "We offer tailored web development, AI solutions, digital marketing, and UI/UX design to help businesses transform and grow.",
        category: "Services",
        year: "2025"
    },
    {
        question: "Which industries do you work with?",
        answer: "We work across various industries including E-commerce, Healthcare, Education, Logistics, and FinTech.",
        category: "Industries",
        year: "2024"
    },
    {
        question: "How do you ensure quality and security?",
        answer: "We follow industry best practices, conduct rigorous testing, and implement robust security protocols to ensure high-quality deliverables.",
        category: "Quality",
        year: "2024"
    },
    {
        question: "What is your development process?",
        answer: "Our process involves Discovery, Strategy, Design, Development, Testing, and Launch, ensuring transparency.",
        category: "Process",
        year: "2024"
    },
    {
        question: "How can we start a project?",
        answer: "Simply contact us through our website form or email. We'll schedule a consultation to discuss your needs.",
        category: "Onboarding",
        year: "2025"
    }
];

const FAQSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 px-4 md:px-12 max-w-7xl mx-auto font-sans bg-[#FDFBF7]">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div>
                    <h2 className="text-5xl md:text-7xl font-bold text-[#1A0B2E] leading-[0.9] tracking-tight">
                        Frequently asked <br /> questions
                    </h2>
                </div>
                {/* <button className="w-fit rounded-full border border-[#1A0B2E] px-8 py-3 flex items-center gap-2 hover:bg-[#1A0B2E] hover:text-white transition-colors duration-300 text-lg font-medium group">
                    View More
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button> */}
            </div>

            {/* List */}
            <div className="w-full border-t border-gray-300">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="group relative border-b border-gray-300 cursor-pointer"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between py-10 md:py-12 relative z-10">

                            {/* Question (Left) */}
                            <div className="flex items-center gap-6 w-full md:w-1/2">
                                <span
                                    className={`hidden md:block text-3xl text-[#1A0B2E] transition-all duration-300 transform origin-center ${(hoveredIndex === index || openIndex === index) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                                        } ${openIndex === index ? 'rotate-90' : 'rotate-0'
                                        }`}
                                >
                                    &rarr;
                                </span>
                                <h3
                                    className={`text-2xl md:text-4xl transition-all duration-300 ${(hoveredIndex === index || openIndex === index)
                                            ? 'font-bold text-[#1A0B2E] translate-x-0'
                                            : 'font-medium text-gray-400 md:-translate-x-10'
                                        }`}
                                >
                                    {faq.question}
                                </h3>
                            </div>

                            {/* Metadata (Right) */}
                            <div className="flex items-center justify-between md:justify-end gap-0 md:gap-24 w-full md:w-1/2 mt-4 md:mt-0">
                                <span className={`text-sm md:text-base transition-colors duration-300 ${hoveredIndex === index ? 'text-[#1A0B2E] font-medium' : 'text-gray-300'}`}>
                                    {faq.category}
                                    <br className="md:hidden" />
                                    <span className="md:hidden block h-1" />
                                    <span className="hidden md:inline"> / FAQ</span>
                                </span>
                                <span className={`text-sm md:text-base font-medium transition-colors duration-300 ${hoveredIndex === index ? 'text-[#1A0B2E]' : 'text-gray-300'}`}>
                                    {faq.year}
                                </span>
                            </div>
                        </div>

                        {/* Floating Image (Center) */}
                        <div
                            className={`hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-500 z-20 ${hoveredIndex === index ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-75 blur-sm'
                                }`}
                        >
                            <div className="relative w-48 h-48 animate-float">
                                {/* Using a known asset or a colorful gradient fallback */}
                                <Image
                                    src="/services/pastel-blobs.png"
                                    alt="Graphic"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Dropdown Answer */}
                        <div
                            className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${openIndex === index ? 'max-h-60 opacity-100 pb-10' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <div className="md:ml-20 max-w-3xl">
                                <p className="text-xl text-gray-600 leading-relaxed font-normal">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Custom Animation for floating */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(5deg); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default FAQSection;
