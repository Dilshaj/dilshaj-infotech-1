"use client";

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Twitter, Instagram, Globe, Send } from 'lucide-react';

const ContactFormSection = () => {
    const [selectedSubject, setSelectedSubject] = useState('General Inquiry');

    return (
        <section className="bg-transparent py-20 px-4 md:px-8 max-w-7xl mx-auto font-sans">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-500 font-medium">Any question or remarks? Just write us a message!</p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden p-2 flex flex-col md:flex-row min-h-[600px] border border-gray-100">

                {/* Left Side - Contact Info */}
                <div className="bg-[#011C2B] text-white p-10 md:p-12 md:w-5/12 rounded-2xl relative overflow-hidden flex flex-col justify-between">
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                        <p className="text-gray-300 mb-12 text-sm">Say something to start a live chat!</p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <Phone size={20} className="text-white" />
                                <span className="text-sm">+1012 3456 789</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail size={20} className="text-white" />
                                <span className="text-sm">demo@gmail.com</span>
                            </div>
                            <div className="flex items-start gap-4">
                                <MapPin size={20} className="text-white shrink-0 mt-1" />
                                <span className="text-sm leading-relaxed">
                                    132 Dartmouth Street Boston, <br />
                                    Massachusetts 02156 United States
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4 relative z-10 mt-12">
                        <a href="#" className="w-8 h-8 rounded-full bg-[#1A3343] flex items-center justify-center hover:bg-white hover:text-[#011C2B] transition-colors">
                            <Twitter size={15} />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-[#1A3343] flex items-center justify-center hover:bg-white hover:text-[#011C2B] transition-colors">
                            <Instagram size={15} />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-[#1A3343] flex items-center justify-center hover:bg-white hover:text-[#011C2B] transition-colors">
                            <Globe size={15} />
                        </a>
                    </div>

                    {/* Decorative Circles */}
                    <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-[#1A3343] rounded-full opacity-50 z-0"></div>
                    <div className="absolute bottom-10 -right-10 w-24 h-24 bg-[#1A3343] rounded-full opacity-50 z-0"></div>

                </div>

                {/* Right Side - Form */}
                <div className="p-10 md:p-12 md:w-7/12 bg-white">
                    <form className="space-y-10">
                        {/* Name Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="relative">
                                <label className="text-xs font-semibold text-gray-500 mb-1 block">First Name</label>
                                <input
                                    type="text"
                                    placeholder="Doe"
                                    suppressHydrationWarning
                                    className="w-full border-b border-gray-300 pb-2 text-gray-900 focus:outline-none focus:border-gray-900 placeholder:text-gray-300 transition-colors"
                                />
                            </div>
                            <div className="relative">
                                <label className="text-xs font-semibold text-gray-500 mb-1 block">Last Name</label>
                                <input
                                    type="text"
                                    placeholder="Doe"
                                    suppressHydrationWarning
                                    className="w-full border-b border-gray-300 pb-2 text-gray-900 focus:outline-none focus:border-gray-900 placeholder:text-gray-300 transition-colors"
                                />
                            </div>
                        </div>

                        {/* Contact Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="relative">
                                <label className="text-xs font-semibold text-gray-500 mb-1 block">Email</label>
                                <input
                                    type="email"
                                    // defaultValue="demo@gmail.com"
                                    suppressHydrationWarning
                                    className="w-full border-b border-gray-300 pb-2 text-gray-900 focus:outline-none focus:border-gray-900 placeholder:text-gray-300 transition-colors"
                                />
                            </div>
                            <div className="relative">
                                <label className="text-xs font-semibold text-gray-500 mb-1 block">Phone Number</label>
                                <input
                                    type="tel"
                                    placeholder="+1 012 3456 789"
                                    suppressHydrationWarning
                                    className="w-full border-b border-gray-300 pb-2 text-gray-900 focus:outline-none focus:border-gray-900 placeholder:text-gray-300 transition-colors"
                                />
                            </div>
                        </div>

                        {/* Subject Selection */}
                        <div>
                            <label className="text-sm font-bold text-gray-900 mb-4 block">Select Subject?</label>
                            <div className="flex flex-wrap gap-6">
                                {['General Inquiry', 'Project Discussion', 'Careers', 'Other'].map((subject, idx) => (
                                    <label key={idx} className="flex items-center gap-2 cursor-pointer group">
                                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedSubject === subject ? 'border-gray-900 bg-gray-900' : 'border-gray-300 bg-gray-100 group-hover:border-gray-400'}`}>
                                            {selectedSubject === subject && <div className="w-2 h-2 rounded-full bg-white text-[10px]"><CheckIcon /></div>}
                                        </div>
                                        <input
                                            type="radio"
                                            name="subject"
                                            value={subject}
                                            checked={selectedSubject === subject}
                                            onChange={() => setSelectedSubject(subject)}
                                            className="hidden"
                                        />
                                        <span className={`text-sm ${selectedSubject === subject ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>{subject}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <label className="text-xs font-semibold text-gray-500 mb-1 block">Message</label>
                            <textarea
                                placeholder="Write your message.."
                                rows={1}
                                suppressHydrationWarning
                                className="w-full border-b border-gray-300 pb-2 text-gray-900 focus:outline-none focus:border-gray-900 placeholder:text-gray-300 transition-colors resize-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end">
                            <button suppressHydrationWarning type="button" className="bg-[#011C2B] text-white px-10 py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200">
                                Send Message
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        </section>
    );
};

// Simple check icon component for the radio button
const CheckIcon = () => (
    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 3L3.5 5.5L7 0.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

export default ContactFormSection;
