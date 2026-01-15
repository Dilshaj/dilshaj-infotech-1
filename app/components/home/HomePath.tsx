"use client";

import React, { useRef, useEffect, useState } from 'react';
import { BookOpen, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import EnrollmentModal from './EnrollmentModal';

const HomePath = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);
    const [modalState, setModalState] = useState<{ isOpen: boolean; type: 'internship' | 'value-course' }>({
        isOpen: false,
        type: 'internship'
    });

    const openModal = (type: 'internship' | 'value-course') => {
        setModalState({ isOpen: true, type });
    };

    const closeModal = () => {
        setModalState(prev => ({ ...prev, isOpen: false }));
    };

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Title Animation
            if (titleRef.current) {
                gsap.from(titleRef.current.children, {
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    },
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out"
                });
            }

            // Cards Animation
            if (cardsRef.current) {
                const cards = cardsRef.current.children;
                gsap.from(cards, {
                    scrollTrigger: {
                        trigger: cardsRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    },
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                    clearProps: "all" // Ensure hover effects work after animation
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 md:py-32 px-4 bg-[#FDFBF7] relative overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div ref={titleRef} className="text-center mb-16 md:mb-20 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                        Choose Your Path
                    </h2>
                    <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Accelerate your tech journey with our specialized tracks designed for modern market demands.
                    </p>
                </div>

                {/* Cards Container */}
                <div ref={cardsRef} className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">

                    {/* Value Courses Card (Light) */}
                    <div className="group relative bg-white rounded-[32px] p-8 md:p-12 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col h-full overflow-hidden">
                        {/* Decorative Circle */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-100/50 transition-colors duration-500"></div>

                        {/* Icon */}
                        <div className="relative w-14 h-14 md:w-16 md:h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform duration-300">
                            <BookOpen className="w-7 h-7 md:w-8 md:h-8 text-white" />
                        </div>

                        {/* Content */}
                        <h3 className="relative text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Value Courses
                        </h3>
                        <p className="relative text-gray-500 mb-8 leading-relaxed">
                            Deep-dive into MERN, UI/UX, and AI development. Our courses are crafted to meet current industry demands and future-proof your skills.
                        </p>

                        {/* Checklist */}
                        <ul className="relative space-y-4 mb-10 flex-grow">
                            {[
                                "Industry Recognized Certification",
                                "Daily Live Q&A Sessions",
                                "Lifetime Community Support",
                                "Real-world Portfolio Projects"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                                    <span className="text-gray-600 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Button */}
                        <button
                            onClick={() => openModal('value-course')}
                            className="relative w-full inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/20 group-hover:translate-x-1 cursor-pointer"
                        >
                            Enroll in Courses
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Internship Card (Dark) */}
                    <div className="group relative bg-[#0B1121] rounded-[32px] p-8 md:p-12 border border-blue-900/30 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgb(67,56,202,0.15)] transition-all duration-300 flex flex-col h-full overflow-hidden">
                        {/* Decorative Circle */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-500/20 transition-colors duration-500"></div>

                        {/* Icon */}
                        <div className="relative w-14 h-14 md:w-16 md:h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-indigo-600/20 group-hover:scale-110 transition-transform duration-300">
                            <Briefcase className="w-7 h-7 md:w-8 md:h-8 text-white" />
                        </div>

                        {/* Content */}
                        <h3 className="relative text-2xl md:text-3xl font-bold text-white mb-4">
                            Hands-on Internship
                        </h3>
                        <p className="relative text-gray-400 mb-8 leading-relaxed">
                            Transform theory into practice. Work inside our dev teams and experience the software lifecycle first-hand from ideation to deployment.
                        </p>

                        {/* Checklist */}
                        <ul className="relative space-y-4 mb-10 grow">
                            {[
                                "Live Client Projects",
                                "Performance Based Stipend",
                                "PPO Opportunity (Pre-Placement Offer)",
                                "1-on-1 Mentorship from Seniors"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-indigo-400 mt-0.5 shrink-0" />
                                    <span className="text-gray-300 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Button */}
                        <button
                            onClick={() => openModal('internship')}
                            className="relative w-full inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-600/20 group-hover:translate-x-1 cursor-pointer"
                        >
                            Apply for Internship
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                </div>
            </div>

            <EnrollmentModal isOpen={modalState.isOpen} onClose={closeModal} courseType={modalState.type} />
        </section>
    );
};

export default HomePath;
