"use client";

import React, { useState, useEffect, useRef } from "react";
import ApplicationModal from "./ApplicationModal";

const roles = [
  {
    id: 1,
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$20k - $40k / yr",
    equity: "Equity options available",
    iconColor: "text-rose-500",
    bgColor: "bg-rose-50",
    tagColor: "bg-rose-100 text-rose-700",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Product Designer (UI/UX)",
    department: "Design",
    location: "Narsipatnam",
    type: "Full-time",
    salary: "Competitive",
    equity: "Based on experience",
    iconColor: "text-purple-500",
    bgColor: "bg-purple-50",
    tagColor: "bg-purple-100 text-purple-700",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Mobile Developer (React Native)",
    department: "Engineering",
    location: "Remote",
    type: "Contract",
    salary: "Project Based",
    equity: "Hourly / Fixed",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-50",
    tagColor: "bg-rose-100 text-rose-700",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Business Development Intern",
    department: "Management", // Changed to match filter (was Sales)
    location: "Hybrid",
    type: "Internship",
    salary: "Stipend",
    equity: "PPO opportunity",
    iconColor: "text-orange-500",
    bgColor: "bg-orange-50",
    tagColor: "bg-orange-100 text-orange-700",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
];

const filters = ["View All", "Engineering", "Design", "Management"];

const AnimatedBlock = ({ children, initialClass, finalClass = "translate-x-0 translate-y-0 opacity-100" }: { children: React.ReactNode, initialClass: string, finalClass?: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

const OpenRoles = () => {
  const [activeFilter, setActiveFilter] = useState("View All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");

  const filteredRoles = activeFilter === "View All"
    ? roles
    : roles.filter(role => role.department === activeFilter);

  const handleApply = (roleTitle: string) => {
    setSelectedRole(roleTitle);
    setIsModalOpen(true);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-6">
        {/* Header & Filters */}
        <AnimatedBlock initialClass="-translate-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                Open Roles
              </h2>
              <p className="text-gray-500 text-lg">
                Find the role that fits your superpower.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 p-1 bg-pink-50/50 rounded-xl">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeFilter === filter
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-700 hover:bg-white/50"
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </AnimatedBlock>

        {/* Roles List */}
        <div className="space-y-4 min-h-[400px]"> {/* Min height to prevent jumping */}
          {filteredRoles.length > 0 ? (
            filteredRoles.map((role, index) => (
              <AnimatedBlock key={role.id} initialClass={index % 2 === 0 ? "-translate-x-20" : "translate-x-20"}>
                <div
                  onClick={() => handleApply(role.title)}
                  className="group bg-white border-b border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 hover:shadow-sm py-6 md:py-8 flex flex-col md:flex-row md:items-center gap-6 transition-all duration-300 cursor-pointer rounded-xl px-4"
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 ${role.bgColor} ${role.iconColor} rounded-full flex items-center justify-center shrink-0`}>
                    {role.icon}
                  </div>

                  {/* Role Info */}
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {role.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                      <span className={`px-3 py-1 rounded-full ${role.tagColor} font-medium`}>
                        {role.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {role.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <polyline points="12 6 12 12 16 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {role.type}
                      </span>
                    </div>
                  </div>

                  {/* Compensation & Arrow */}
                  <div className="flex items-center justify-between md:justify-end gap-8 min-w-[200px]">
                    <div className="text-right">
                      <div className="font-bold text-gray-900">{role.salary}</div>
                      <div className="text-sm text-gray-400">{role.equity}</div>
                    </div>

                    <button
                      className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-300 transform group-hover:-rotate-45"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                  </div>
                </div>
              </AnimatedBlock>
            ))
          ) : (
            <div className="py-20 text-center text-gray-400">
              No roles found for {activeFilter} at the moment.
            </div>
          )}
        </div>

        {/* CTA Banner */}
        <AnimatedBlock initialClass="translate-y-20">
          <div className="mt-12 bg-[#221b3e] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Didn't find what you were looking for?
              </h3>
              <p className="text-gray-400">
                We are always looking for great talent. Drop your resume.
              </p>
            </div>
            <button
              onClick={() => handleApply("Open Application")}
              className="bg-white text-gray-900 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-sm active:scale-95"
            >
              Send Open Application
            </button>
          </div>
        </AnimatedBlock>
      </div>

      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        roleTitle={selectedRole}
      />
    </section>
  );
};

export default OpenRoles;
