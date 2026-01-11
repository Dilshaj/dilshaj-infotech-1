import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const processSteps = [
    {
        number: "01",
        title: "Discovery",
        desc: "Understanding your business goals, user requirements and technical needs through in-depth discussions."
    },
    {
        number: "02",
        title: "Strategy",
        desc: "Creating a comprehensive roadmap and technical architecture for your project."
    },
    {
        number: "03",
        title: "Design",
        desc: "Crafting intuitive, user-centric designs that align with your brand identity."
    },
    {
        number: "04",
        title: "Development",
        desc: "Building your solution using best platforms and cutting-edge technologies."
    },
    {
        number: "05",
        title: "Testing",
        desc: "Rigorous quality assurance to ensure a flawless user experience."
    },
    {
        number: "06",
        title: "Launch",
        desc: "Deploying your solution and providing ongoing support and maintenance."
    }
];

const ServiceProcess = () => {
    return (
        <section className="bg-[#050505] pt-24 pb-32 px-4 md:px-8 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Process</span>
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base">
                        A proven methodology that ensures project success.
                    </p>
                </div>

                {/* Process Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
                    {processSteps.map((step, index) => (
                        <div key={index} className="bg-[#111] border border-gray-800 p-8 rounded-2xl hover:border-gray-700 transition-colors group">
                            <h3 className="text-3xl md:text-4xl font-bold text-blue-500 mb-4 group-hover:scale-105 transition-transform origin-left">
                                {step.number}
                            </h3>
                            <h4 className="text-xl font-bold text-white mb-3">
                                {step.title}
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ServiceProcess;
