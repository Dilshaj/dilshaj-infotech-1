import React from 'react'
import Image from 'next/image'

const Service = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center bg-[#fff] overflow-hidden pt-20">
      {/* Background Blobs - positioned to match the flow */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/services/pastel-blobs.png"
          alt="Background Gradient"
          fill
          className="object-cover opacity-80"
          priority
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 h-full flex items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full">

          {/* Left Side Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8 pt-10 lg:pt-0 relative z-20">
            <h1 className="text-[32px] sm:text-[40px] md:text-[40px] lg:text-[54px] xl:text-[64px] 2xl:text-[94px] font-bold leading-[1.1] text-black tracking-tight">
              Comprehensive <br />
              Digital Solutions
            </h1>
            <p className="text-neutral-500 text-lg md:text-xl leading-relaxed max-w-[540px] font-medium">
              We provide comprehensive digital solutions tailored to your
              business needs, from design and development to marketing and AI
              integration. Let us help you achieve your digital transformation
              goals.
            </p>
          </div>

          {/* Right Side Image Area */}
          <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[500px] flex items-end justify-center lg:justify-end">

            {/* Star - Positioned absolutely relative to this container to match reference */}
            <div className="absolute top-[15%] lg-right-[25%] lg:left-[35%] w-15 h-15 lg:w-45 lg:h-40 animate-pulse z-20">
              <Image
                src="/services/purple-star.png"
                alt="Sparkle"
                fill
                className="object-contain" 
              />
            </div>

            <div className="relative w-full h-full max-w-[900px]">
              {/* Main VR Woman Image */}
              <Image
                src="/services/hero-image.png"
                alt="VR Digital Solutions"
                fill
                className="object-contain object-bottom scale-105 lg:scale-165 lg:translate-x-40 translate-y-15" 
                priority
              />
            </div>
          </div>

        </div>
      </div>

      {/* Floating Bottom Left Cube element from reference */}
      <div className="absolute bottom-[-5%] left-[-2%] w-32 h-32 lg:w-48 lg:h-48 pointer-events-none z-20 opacity-90">
        <Image
          src="/services/small-cube.png"
          alt="Decorative Cube"
          fill
          className="object-contain rotate-12"
        />
      </div>
    </div>
  )
}

export default Service