"use client";

import React from "react";

const reasons = [
  {
    title: "Discovery & Planning",
    description: "We encourage continuous learning, upskilling, and personal development at every stage of your career.",
  },
  {
    title: "Supportive & Collaborative Team",
    description: "Work alongside passionate professionals in a culture that values teamwork, respect, and open communication.",
  },
  {
    title: "Work on Real-World Projects",
    description: "Get hands-on experience with live projects, cutting-edge technologies, and real business challenges.",
  },
];

const ReasonsToChooseUs = () => {
  return (
    <section className="py-12 md:py-20 bg-[#FDFCFA]">
      <div className="container mx-auto px-4 md:px-8 lg:px-6">
        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="relative w-8 h-8">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-black">
              <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor" />
            </svg>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
            3 Reasons to Choose Us
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-12 px-4 md:px-0">
          {reasons.map((reason, index) => (
            <div key={index} className="relative group max-w-[380px] w-full mx-auto">
              {/* White Card Content with Custom Box Shadow */}
              <div className="bg-white p-8 md:p-12 rounded-[3.5rem] min-h-[350px] flex flex-col justify-center items-start text-left z-1 border border-purple-100 shadow-[12px_-12px_0_0_#a78bfa,-15px_15px_0_0_#a78bfa] hover:shadow-[16px_-16px_0_0_#a78bfa,-16px_16px_0_0_#a78bfa] transition-shadow duration-300">
                <h3 className="text-2xl lg:text-3xl font-bold text-[#7C3AED] mb-6 leading-tight">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg font-medium">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsToChooseUs;
