import React from 'react';
import Image from 'next/image';

const ServiceCTA = () => {
    return (
        <section className="px-4 md:px-8 max-w-7xl mx-auto font-sans pt-20 pb-10">
            <div className="relative w-full rounded-[40px] overflow-hidden min-h-[400px] flex items-center justify-center text-center px-6 shadow-2xl">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/services/marketing-service.png"
                        alt="Workspace Background"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[#1a0b2e]/80 mix-blend-multiply"></div>
                </div>

                <div className="relative z-10 max-w-3xl py-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-gray-200 text-sm md:text-lg mb-10 leading-relaxed max-w-2xl mx-auto font-medium opacity-90">
                        Join the AI revolution. Let's discuss how Dilshaj Infotech can help you unlock new possibilities and drive unprecedented growth.
                    </p>
                    <button suppressHydrationWarning className="bg-[#9D7BFF] text-white px-10 py-4 rounded-full font-bold text-base md:text-lg hover:bg-[#8B5CF6] transition-all transform hover:scale-105 shadow-lg shadow-purple-500/30 flex items-center gap-2 mx-auto">
                        <span>📄</span> Get Started Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ServiceCTA;
