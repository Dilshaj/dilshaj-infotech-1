"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Empowerment First",
    description: "Full autonomy to own your projects. We trust our team to innovate and lead without micromanagement.",
    bgColor: "bg-blue-50",
    iconColor: "bg-blue-100",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: "Continuous Learning",
    description: "Access to premium courses, mentorship from seniors, and a budget for conferences.",
    bgColor: "bg-purple-50",
    iconColor: "bg-purple-100",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Community Driven",
    description: "We are deeply connected to our roots, organizing regular hackathons and tech meetups.",
    bgColor: "bg-pink-50",
    iconColor: "bg-pink-100",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    title: "Modern Work",
    description: "High-end equipment (MacBooks/ThinkPads), flexible hours, and a relaxed atmosphere.",
    bgColor: "bg-orange-50",
    iconColor: "bg-orange-100",
  },
];

const LifeAtDilshaj = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariant = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Content */}
          {/* Left Content */}
          <motion.div>
            <motion.span
              {...fadeInUp}
              viewport={{ amount: 0.5 }}
              className="text-blue-600 font-bold tracking-wider text-xs uppercase mb-4 block"
            >
              LIFE AT DILSHAJ
            </motion.span>
            <motion.h2
              {...fadeInUp}
              viewport={{ amount: 0.5 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 flex items-start gap-2"
            >
              <span className="relative">
                <svg className="absolute -top-1 -left-6 w-6 h-6 text-black" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
                </svg>
                More
              </span> than just a workplace.
            </motion.h2>
            <motion.p
              {...fadeInUp}
              viewport={{ amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-gray-500 text-lg mb-12 leading-relaxed"
            >
              We believe that a happy team is a productive team. Our culture is
              built on trust, continuous learning, and a shared passion for
              technology.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ amount: 0.2 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={cardVariant}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className={`w-12 h-12 ${feature.iconColor} rounded-xl flex items-center justify-center mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Images Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 h-full p-2 md:p-4">
            {/* Column 1 */}
            <div className="space-y-4 md:space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
                  <Image
                    src="/career/life-1.jpg"
                    alt="Office Life 1"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    quality={100}
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <div className="relative h-60 md:h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
                  <Image
                    src="/career/life-2.jpg"
                    alt="Office Life 2"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    quality={100}
                  />
                </div>
              </motion.div>
            </div>

            {/* Column 2 */}
            <div className="space-y-4 md:space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.1 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              >
                <div className="relative h-60 md:h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
                  <Image
                    src="/career/life-3.jpg"
                    alt="Office Life 3"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    quality={100}
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
                  <Image
                    src="/career/life-4.jpg"
                    alt="Office Life 4"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    quality={100}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeAtDilshaj;
