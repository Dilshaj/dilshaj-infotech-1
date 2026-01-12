"use client";
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

const services = [
    {
        title: "Artificial Intelligence (AI) & Machine Learning (ML)",
        description: "We design and deploy intelligent AI and ML solutions that automate processes, enhance decision-making, and unlock valuable insights from data. From predictive analytics to smart automation, our solutions help businesses innovate and scale faster.",
        image: "/services/ai-service.jpg"
    },
    {
        title: "Web & App Development",
        description: "We build high-performance, scalable web and mobile applications tailored to your business needs. Our solutions focus on speed, security, and user experience, ensuring reliable digital products that grow with your business.",
        image: "/services/web-service.png"
    },
    {
        title: "UI/UX Designing",
        description: "Our UI/UX design services focus on creating intuitive, engaging, and user-centric experiences. We combine research, creativity, and usability principles to design interfaces that enhance user satisfaction and drive engagement.",
        image: "/services/uiux-service.png"
    },
    {
        title: "Cloud & Digital Solutions",
        description: "We deliver cloud-based and digital transformation solutions that improve agility, scalability, and operational efficiency. From cloud migration to system optimization, we help businesses embrace modern digital infrastructure.",
        image: "/services/cloud-service.png"
    },
    {
        title: "Graphic Design",
        description: "Our graphic design services bring brands to life through visually compelling designs. From branding and marketing creatives to digital assets, we ensure consistency, clarity, and impact across all visual communications.",
        image: "/services/graphic-service.jpg"
    },
    {
        title: "3D Design",
        description: "We create high-quality 3D designs and visualizations that bring concepts to reality. Our 3D solutions are ideal for product visualization, architecture, interiors, and immersive presentations.",
        image: "/services/service-3d.png"
    },
    {
        title: "PR & Digital Marketing Agency",
        description: "We help brands build strong online presence and credibility through strategic PR and digital marketing. Our services include brand promotion, social media marketing, content strategy, SEO, and performance-driven campaigns.",
        image: "/services/marketing-service.png"
    },
    {
        title: "Interior Design & Visualization",
        description: "We provide innovative interior design and visualization services that blend aesthetics with functionality. Our detailed visualizations help clients experience spaces before they are built.",
        image: "/services/interior-service.jpg"
    },
    {
        title: "Construction & Design Support",
        description: "We offer end-to-end construction and design support, assisting with planning, visualization, and technical coordination. Our solutions help streamline execution and improve project efficiency.",
        image: "/services/construction-service.png"
    }
];

const ServicesList = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            const items = document.querySelectorAll('.service-item');
            items.forEach((item) => {
                gsap.from(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    },
                    y: 100,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out"
                });
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto font-sans bg-transparent">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6 border-t border-gray-200 pt-12">
                <div>
                    <h4 className="flex items-center gap-3 text-3xl md:text-4xl font-bold text-gray-900">
                        <span className="text-3xl md:text-4xl">✦</span> Services We Offer
                    </h4>
                </div>
                <p className="max-w-lg text-sm md:text-base text-gray-500 leading-relaxed text-left md:text-right">
                    At Dilshaj Infotech, we deliver integrated technology and creative solutions that drive innovation, growth, and lasting impact.
                </p>
            </div>

            {/* List */}
            <div className="space-y-16 md:space-y-32">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`service-item flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24 group`}
                    >
                        {/* Text */}
                        <div className="flex-1 space-y-6">
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-base md:text-lg lg:text-xl font-medium max-w-xl">
                                {service.description}
                            </p>
                        </div>

                        {/* Image */}
                        <div className="flex-1 w-full relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-sm">
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ServicesList;
