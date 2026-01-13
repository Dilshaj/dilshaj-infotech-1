"use client";

import React, { useState, useEffect, useRef } from "react";

const steps = [
  {
    id: "01",
    title: "Application Review",
    description: "Our team reviews your portfolio and code samples.",
  },
  {
    id: "02",
    title: "Culture Sync",
    description: "A quick call to see if our values and goals align.",
  },
  {
    id: "03",
    title: "Skill Assessment",
    description: "Practical task or pair programming session.",
  },
  {
    id: "04",
    title: "Onboarding",
    description: "Final offer and introduction to the team.",
  },
];

const AnimatedBlock = ({ children, initialClass, finalClass = "translate-x-0 translate-y-0 opacity-100" }: { children: React.ReactNode, initialClass: string, finalClass?: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${isVisible ? finalClass : `opacity-0 ${initialClass}`}`}
    >
      {children}
    </div>
  );
};

const HiringProtocol = () => {
  return (
    <section className="pt-10 pb-12 md:pb-24 bg-[#020617] text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-6">
        {/* Header */}
        <AnimatedBlock initialClass="-translate-y-10">
          <div className="text-center mb-32">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Our Hiring <span className="text-[#60A5FA]">Protocol</span>
            </h2>
            <p className="text-gray-400 text-lg tracking-wide">
              Transparent. Fair. Fast.
            </p>
          </div>
        </AnimatedBlock>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          {steps.map((step, index) => (
            <AnimatedBlock
              key={step.id}
              initialClass="translate-y-16"
            // We can't easily perform pure CSS stagger delay in the reusable component without passing props
            // But the scrolling nature often creates a natural stagger as they enter view.
            // For forced stagger, we'd need custom delay styles, but let's stick to the consistent slide-up for now.
            >
              <div className="relative group">
                {/* Large Background Number */}
                <div className="text-8xl font-bold text-white/5 select-none absolute -top-[85px] -left-6 z-0 group-hover:text-white/10 transition-colors duration-300">
                  {step.id}
                </div>

                {/* Content */}
                <div className="relative z-10 pt-4">
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#60A5FA] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </AnimatedBlock>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HiringProtocol;
