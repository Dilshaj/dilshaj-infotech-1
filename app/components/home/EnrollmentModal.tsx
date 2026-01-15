"use client";

import React, { useEffect } from 'react';
import { X, Send } from 'lucide-react';
import gsap from 'gsap';

interface EnrollmentModalProps {
    isOpen: boolean;
    onClose: () => void;
    courseType: 'internship' | 'value-course';
}

const EnrollmentModal = ({ isOpen, onClose, courseType }: EnrollmentModalProps) => {

    // Stop body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            gsap.fromTo(".modal-content",
                { opacity: 0, scale: 0.95, y: 10 },
                { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "power2.out" }
            );
        } else {
            document.body.style.overflow = 'auto'; // Re-enable scroll
        }
        return () => {
            document.body.style.overflow = 'auto'; // Cleanup ensuring scroll is back
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const titleText = courseType === 'internship' ? 'Hands-on Internship' : 'Value Courses';

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Card */}
            <div
                className="modal-content relative bg-white rounded-[24px] shadow-2xl p-6 md:p-8 w-full max-w-lg z-10 max-h-[90vh] overflow-y-auto"
                onWheel={(e) => e.stopPropagation()}
                onTouchMove={(e) => e.stopPropagation()}
            >

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1"
                >
                    <X size={20} />
                </button>

                {/* Tag */}
                <div className="inline-block bg-blue-50 text-blue-600 text-[10px] md:text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
                    Enrollment Form
                </div>

                {/* Header */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Join <span className="text-blue-600">{titleText}</span>
                </h2>
                <p className="text-gray-500 text-sm mb-6 max-w-sm">
                    Fill in your details and our career counselor will contact you within 24 hours.
                </p>

                {/* Form */}
                <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-700 ml-1">Full Name</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                </span>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-gray-50 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 rounded-xl px-4 py-3 pl-10 text-sm outline-none transition-all placeholder:text-gray-400 text-gray-900 font-medium"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-700 ml-1">Phone Number</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                </span>
                                <input
                                    type="tel"
                                    placeholder="+91 00000 00000"
                                    className="w-full bg-gray-50 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 rounded-xl px-4 py-3 pl-10 text-sm outline-none transition-all placeholder:text-gray-400 text-gray-900 font-medium"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 ml-1">Email Address</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                            </span>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                className="w-full bg-gray-50 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 rounded-xl px-4 py-3 pl-10 text-sm outline-none transition-all placeholder:text-gray-400 text-gray-900 font-medium"
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 ml-1">Select Specialization</label>
                        <div className="relative">
                            <select
                                className="w-full bg-gray-50 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 rounded-xl px-4 py-3 text-sm outline-none transition-all text-gray-900 font-medium appearance-none cursor-pointer"
                            >
                                <option>Full Stack Web Development</option>
                                <option>App Development (Flutter/React Native)</option>
                                <option>UI/UX Design</option>
                                <option>Data Science & AI</option>
                            </select>
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
                            </span>
                        </div>
                    </div>

                    <button
                        className="w-full bg-[#2563EB] hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-500/30 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 mt-2"
                        type="button" // Change to submit if actually submitting
                    >
                        Confirm Application
                        <Send size={16} />
                    </button>
                </form>

            </div>
        </div>
    );
};

export default EnrollmentModal;
