"use client";
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import ContactFormSection from '../components/about/ContactFormSection';
import FAQSection from '../components/contact/FAQSection';

const ContactPage = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".hero-title", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            });
            gsap.from(".hero-desc", {
                y: 20,
                opacity: 0,
                duration: 0.8,
                delay: 0.2,
                ease: "power3.out"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <main ref={containerRef} className="w-full bg-[#FDFBF7] font-sans min-h-screen">

            {/* Header Section */}
            <section className="relative pt-32 pb-10 text-center px-4 overflow-hidden">
                {/* Decorative Elements */}
                {/* Star - Top Left */}
                <div className="absolute top-[8%] left-[8%] md:left-[15%] w-12 h-12 md:w-16 md:h-16 animate-pulse z-0">
                    <Image src="/services/purple-star.png" alt="Star" fill className="object-contain opacity-100" />
                </div>

                {/* Pastel Blobs - Top Right (Large and bleeding off screen) */}
                <div className="absolute top-[-20%] right-[-10%] md:right-[-5%] w-[300px] h-[300px] md:w-[700px] md:h-[700px] pointer-events-none z-0 opacity-100">
                    <Image src="/services/pastel-blobs.png" alt="Blob" fill className="object-contain object-right-top" />
                </div>

                {/* Cube - Bottom Left (Near 'Get In Touch' Section) */}
                <div className="absolute bottom-[2%] md:bottom-[-5%] left-[2%] md:left-[5%] w-24 h-24 md:w-40 md:h-40 pointer-events-none z-0 opacity-100 rotate-12">
                    <Image src="/services/small-cube.png" alt="Cube" fill className="object-contain" />
                </div>

                <h1 className="hero-title text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                    Contact Us
                </h1>
                <p className="hero-desc text-gray-500 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed mb-16">
                    Get in touch with us. We'd love to hear from you and discuss how we can help transform your business.
                </p>

                {/* <div className="relative z-10 mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Get In Touch</h2>
                    <p className="text-gray-500 text-sm md:text-base">Any questions or remarks? Just write us a message!</p>
                </div> */}

            </section>

            {/* Contact Form Section - No Title as it's now in the header */}
            <div className="-mt-16 relative z-20">
                <ContactFormSection
                    title=""
                    subtitle=""
                />
            </div>

            {/* FAQ Section */}
            <FAQSection />

            {/* Map Section */}
            <section className="py-20 bg-[#FDFBF7]">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-[#1A0B2E]">Find Us</h2>
                    <p className="text-blue-600 text-sm font-medium mt-1">Visit our office or reach out to us</p>
                </div>
                <div className="w-full h-[400px] md:h-[500px] relative group">
                    {/* Google Maps Embed Placeholder - using a generic central location or Boston as per text */}
                    {/* Google Maps Embed */}
                    <div className="w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-500">
                        <iframe
                            src="https://maps.google.com/maps?q=Dilshaj+Infotech,+Rolugunta,+Visakhapatnam&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    {/* Map Card Overlay */}
                    <div className="absolute bottom-8 left-4 md:left-12 bg-[#FDFBF7] p-4 rounded-lg shadow-lg max-w-xs text-left z-10">
                        <div className="flex items-start gap-3">
                            <div className="bg-[#9D7BFF] p-2 rounded-full text-white">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">Dilshaj Infotech</h4>
                                <p className="text-xs text-gray-500 mt-1">Survey No. 225-2a, Rolugunta, Visakhapatnam, Andhra Pradesh</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default ContactPage
