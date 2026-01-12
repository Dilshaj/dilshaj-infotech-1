"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Plus, Minus, ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    {
        question: "What services does Dilshaj Infotech provide?",
        answer: "We offer tailored web development, AI solutions, digital marketing, and UI/UX design to help businesses transform and grow."
    },
    {
        question: "Which industries do you work with?",
        answer: "We work across various industries including E-commerce, Healthcare, Education, Logistics, and FinTech, providing customized solutions for each."
    },
    {
        question: "How do you ensure quality and security?",
        answer: "We follow industry best practices, conduct rigorous testing, and implement robust security protocols to ensure high-quality and secure deliverables."
    },
    {
        question: "What is your development process?",
        answer: "Our process involves Discovery, Strategy, Design, Development, Testing, and Launch, ensuring transparency and collaboration at every step."
    },
    {
        question: "How can we start a project with Dilshaj Infotech?",
        answer: "Simply contact us through our website form or email. We'll schedule a consultation to discuss your needs and propose a solution."
    }
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto font-sans bg-white">
            <div className="flex flex-col md:flex-row items-center gap-16">

                {/* Left Side - Graphic */}
                <div className="w-full md:w-5/12 relative">
                    <div className="relative h-[300px] md:h-[400px] w-full">
                        <Image
                            src="/questions/faq-graphic.png"
                            alt="FAQ Illustration"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="text-left mt-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">Frequently</h2>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">asked questions</h2>
                    </div>
                </div>

                {/* Right Side - Accordion */}
                <div className="w-full md:w-7/12 space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-[#9D7BFF] text-white shadow-lg' : 'bg-[#F9FAFB] text-gray-900 hover:bg-gray-100'}`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left font-bold text-base md:text-lg focus:outline-none"
                            >
                                <span>{faq.question}</span>
                                {openIndex === index ? <ChevronUp className="shrink-0" /> : <ChevronDown className="shrink-0 text-gray-500" />}
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="p-6 pt-0 text-sm md:text-base opacity-90 leading-relaxed font-medium">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FAQSection;
