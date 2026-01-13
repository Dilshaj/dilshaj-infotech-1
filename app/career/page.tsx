"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LifeAtDilshaj from "@/app/components/career/LifeAtDilshaj";
import ReasonsToChooseUs from "@/app/components/career/ReasonsToChooseUs";
import OpenRoles from "@/app/components/career/OpenRoles";
import HiringProtocol from "@/app/components/career/HiringProtocol";


export default function CareerPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const float = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  const floatReverse = {
    animate: {
      y: [0, 10, 0],
      rotate: [0, -5, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const,
        delay: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-purple-100">

      <main className="w-full pt-32 lg:pt-2 xl:pt-24 pb-0 relative overflow-hidden bg-white">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-12 items-center"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {/* Left Content */}
          <div className="w-full relative px-4 md:px-12 lg:pl-15 xl:pl-30 2xl:pl-50 pr-4 lg:pr-0 mt-6 lg:mt-0 flex flex-col items-start justify-center">
            <motion.div
              className="absolute -top-12 right-0 md:right-10 w-16 h-16 md:w-24 md:h-24 "
              variants={float}
              animate="animate"
            >
              <Image
                src="/about/hero/star-icon.png"
                alt="Decorative Star"
                fill
                className="object-contain" // Fixed typo if any
              />
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-6xl lg:text-5xl font-bold leading-tight tracking-tight mb-4 md:mb-8 text-gray-900"
              variants={fadeInUp}
            >
              Build the future at <br />
              Dilshaj Infotech
            </motion.h1>

            <motion.p
              className="text-base md:text-xl text-gray-500 mb-2 md:mb-10 leading-relaxed max-w-lg"
              variants={fadeInUp}
            >
              Be part of a dynamic team building the future of technology.
              We're always looking for talented individuals who share our
              passion for innovation.
            </motion.p>
          </div>

          {/* Right Image */}
          <motion.div
            className="relative h-[300px] md:h-[500px] lg:h-[700px] w-full mt-10 lg:-mt-10"
            variants={{
              initial: { opacity: 0, x: 20 },
              animate: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } }
            }}
          >
            <Image
              src="/career/right.png"
              alt="Dilshaj Infotech Team"
              fill
              className="object-contain object-bottom lg:object-right-bottom"
              priority
            />
          </motion.div>
        </motion.div>
        {/* Soft decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.5 }}
          className="fixed -bottom-32 -left-32 w-64 h-64 md:w-96 md:h-96 bg-purple-200/30 rounded-full blur-3xl -z-10 pointer-events-none"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.5 }}
          className="fixed top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-50/50 rounded-full blur-3xl -z-10 pointer-events-none"
        ></motion.div>
        {/* 3D Icon - Hidden on mobile if needed, or sized down */}
        <motion.div
          className="absolute bottom-15 left-0 w-10 h-10 md:w-35 md:h-35 z-10 opacity-50 md:opacity-100" // Lower opacity on mobile or hide
          variants={floatReverse}
          animate="animate"
        >
          <Image
            src="/about/hero/blob-left.png"
            alt="Decorative 3D Icon"
            fill
            className="object-contain object-left-bottom"
          />
        </motion.div>
      </main>

      <LifeAtDilshaj />

      <ReasonsToChooseUs />

      <OpenRoles />

      <HiringProtocol />
    </div>
  );
}
