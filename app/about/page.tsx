import React from 'react'


const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden font-sans">
      

      {/* Decorative Background Blobs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-100/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[100px] translate-y-1/3 translate-x-1/4 z-0 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-pink-200/40 rounded-full blur-[80px] z-0 pointer-events-none" />

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center max-w-7xl mx-auto mt-10">

        <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-black max-w-5xl leading-[1.1] mb-8">
          Empowering Your Business with <br className="hidden md:block" />
          Digital Literacy & Innovation
        </h1>

        <p className="text-gray-500 text-lg md:text-xl max-w-3xl leading-relaxed mb-12">
          Dilshaj Infotech is a future-focused technology company dedicated to bridging the
          gap between education and employment through digital literacy training,
          innovative solutions, and cutting-edge products.
        </p>

        {/* 3D Element Placeholders (Simulated with CSS/SVG) */}

        {/* Left 'Star' Element */}
        <div className="absolute left-10 top-1/3 -translate-y-1/2 hidden lg:block animate-pulse">
          <svg width="120" height="120" viewBox="0 0 100 100" className="drop-shadow-2xl">
            <defs>
              <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d8b4fe" /> {/* purple-300 */}
                <stop offset="100%" stopColor="#a855f7" /> {/* purple-500 */}
              </linearGradient>
            </defs>
            <path d="M 50 0 C 60 40 100 50 100 50 C 60 60 50 100 50 100 C 40 60 0 50 0 50 C 40 40 50 0 50 0" fill="url(#starGradient)" style={{ filter: 'drop-shadow(0px 10px 20px rgba(168, 85, 247, 0.4))' }} />
          </svg>
          {/* Ring around star */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[40px] border border-purple-300/50 rounded-[100%] rotate-[-15deg]" />
        </div>

        {/* Bottom Left 'Cube' Element */}
        <div className="absolute left-[5%] bottom-[10%] hidden lg:block">
          <div className="relative w-24 h-24 transform rotate-12 perspective-[1000px]">
            <div className="absolute inset-0 bg-gradient-to-br from-white to-pink-100 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 backdrop-blur-sm z-10 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-200/20 to-blue-200/20" />
              <div className="w-full h-1 bg-white/40 absolute top-2 left-0 rotate-45 transform scale-150" />
            </div>
            {/* Decorative background for cube */}
            <div className="absolute -inset-4 bg-purple-500/10 rounded-full blur-xl -z-10" />
          </div>
        </div>

      </main>
    </div>
  )
}

export default AboutPage