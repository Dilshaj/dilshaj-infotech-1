"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { X, Upload, Link as LinkIcon, CheckCircle, Loader2 } from "lucide-react";

interface ApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
    roleTitle?: string;
}

const ApplicationModal = ({ isOpen, onClose, roleTitle }: ApplicationModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // GSAP Animation for opening/closing
    useEffect(() => {
        if (isOpen) {
            // Locking body scroll
            document.body.style.overflow = "hidden";

            const tl = gsap.timeline();

            tl.to(overlayRef.current, {
                opacity: 1,
                duration: 0.3,
                visibility: "visible",
                ease: "power2.out"
            })
                .fromTo(modalRef.current,
                    { y: 50, opacity: 0, scale: 0.95 },
                    { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.2)" },
                    "-=0.2"
                )
                .fromTo(contentRef.current!.children,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, stagger: 0.1, duration: 0.4, ease: "power2.out" },
                    "-=0.3"
                );

        } else {
            document.body.style.overflow = ""; // Unlock scroll

            const tl = gsap.timeline({
                onComplete: () => {
                    if (overlayRef.current) overlayRef.current.style.visibility = "hidden";
                }
            });

            tl.to(modalRef.current, {
                y: 20,
                opacity: 0,
                scale: 0.95,
                duration: 0.3,
                ease: "power2.in"
            })
                .to(overlayRef.current, {
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.in"
                }, "-=0.2");
        }
    }, [isOpen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);

            // Close modal after success message
            setTimeout(() => {
                setIsSuccess(false);
                onClose();
            }, 2000);
        }, 1500);
    };

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm opacity-0 invisible p-4"
            onClick={(e) => {
                if (e.target === overlayRef.current) onClose();
            }}
        >
            <div
                ref={modalRef}
                className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl"
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Applying for</p>
                        <h2 className="text-2xl font-bold text-gray-900">{roleTitle || "Open Application"}</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 bg-gray-50 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                    {isSuccess ? (
                        <div className="flex flex-col items-center justify-center py-12 text-center">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                                <CheckCircle size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Sent!</h3>
                            <p className="text-gray-500">We've received your application and will accept it soon.</p>
                        </div>
                    ) : (
                        <form ref={contentRef} onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase">First Name</label>
                                    <input
                                        required
                                        type="text"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase">Last Name</label>
                                    <input
                                        required
                                        type="text"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase">Email Address</label>
                                <input
                                    required
                                    type="email"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase">Portfolio / LinkedIn URL</label>
                                <div className="relative">
                                    <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input
                                        type="url"
                                        placeholder="https://..."
                                        className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase">Upload Resume</label>
                                <div className="relative group">
                                    <input
                                        type="file"
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                    />
                                    <div className="w-full py-8 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50/50 group-hover:bg-blue-50/50 group-hover:border-blue-200 transition-all flex flex-col items-center justify-center text-center">
                                        <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-gray-400 mb-3 group-hover:text-blue-500 group-hover:scale-110 transition-all">
                                            <Upload size={20} />
                                        </div>
                                        <span className="text-sm font-medium text-gray-600 group-hover:text-blue-700">Click to upload your resume</span>
                                        <span className="text-xs text-gray-400 mt-1">PDF or DOCX (Max 5MB)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-[#1a1f36] text-white rounded-xl font-bold text-lg hover:bg-gray-900 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="animate-spin" size={20} />
                                            Sending...
                                        </>
                                    ) : (
                                        "Submit Application"
                                    )}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ApplicationModal;
