import Link from 'next/link';
import Image from 'next/image';
import AboutGridSection from '../components/about/AboutGridSection';
import ContactFormSection from '../components/about/ContactFormSection';

const AboutPage = () => {
  return (
    <div className="bg-[#FDFBF7] font-sans text-black">
      {/* Main Hero Section Wrapper */}
      <div className="min-h-screen relative overflow-hidden">
        {/* Hero Content */}
        <main className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] md:min-h-screen px-4 text-center w-full max-w-[1440px] mx-auto pt-20 md:pt-32 pb-10 md:pb-0">

          <h1 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[64px] xl:text-[80px] 2xl:text-[100px] font-bold tracking-tight text-gray-900 leading-[1.1] mb-8">
            Empowering Your Business with <span className="hidden md:inline"><br /></span>
            Digital Literacy & Innovation
          </h1>

          <p className="text-gray-500 text-lg md:text-xl max-w-3xl leading-relaxed mb-12">
            Dilshaj Infotech is a future-focused technology company dedicated to bridging the
            gap between education and employment through digital literacy training,
            innovative solutions, and cutting-edge products.
          </p>

          {/* 3D Element Images */}

          {/* Left 'Star' Element - Adjusted Position */}
          <div className="absolute left-[5%] md:left-[5%] top-[15%] md:top-[30%] -translate-y-1/2 block animate-pulse pointer-events-none select-none z-0">
            <Image
              src="/about/hero/star-icon.png"
              alt="Star 3D"
              width={100}
              height={100}
              className="drop-shadow-2xl w-12 h-12 md:w-32 md:h-32"
            />
          </div>

          {/* Bottom Left 'Cube/Blob' Element - Adjusted Position */}
          <div className="absolute left-[5%] md:left-[8%] bottom-[20%] md:bottom-[15%] block pointer-events-none select-none z-0">
            <Image
              src="/about/hero/blob-left.png"
              alt="Cube 3D"
              width={100}
              height={100}
              className="drop-shadow-2xl rotate-12 w-16 h-16 md:w-28 md:h-28"
            />
          </div>

        </main>

        {/* Decorative Background Image (Blobs) - Adjusted overlap */}
        <div className="absolute top-0 right-0 w-[50%] md:w-[60%] lg:w-[50%] h-[50%] md:h-full pointer-events-none select-none z-0">
          <Image
            src="/about/hero/blob-right.png"
            alt="Background Effect"
            fill
            className="object-contain md:object-cover object-right-top opacity-90"
            priority
          />
        </div>
      </div>

      {/* Detailed Story & Stats Section */}
      <AboutGridSection />

      {/* Contact Form Section */}
      <ContactFormSection />

    </div>
  )
}

export default AboutPage