import Link from 'next/link';
import Image from 'next/image';
import AboutGridSection from '../components/about/AboutGridSection';

const AboutPage = () => {
  return (
    <div className="bg-white font-sans text-black">
      {/* Main Hero Section Wrapper */}
      <div className="min-h-screen relative overflow-hidden">

        {/* Transparent Navbar (Inline) */}
        <nav className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto w-full absolute top-0 left-0 right-0 z-50">
          <div className="flex items-center gap-2">
            <Image src="/img/drlogo.png" alt="Dilshaj Infotech" width={150} height={50} className="h-10 w-auto object-contain" />
          </div>

          <div className="hidden md:flex items-center gap-1 bg-white/50 backdrop-blur-md px-6 py-2 rounded-full border border-white/60 shadow-sm">
            {['Home', 'About Us', 'Services', 'Projects', 'Career', 'Contact Us'].map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                className="px-4 py-1.5 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          <button className="hidden md:block px-6 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:border-blue-500 hover:text-blue-500 transition-all bg-white hover:shadow-md">
            Let's Talk
          </button>
        </nav>

        {/* Decorative Background Image (Blobs) */}
        <div className="absolute top-0 right-0 w-[50%] h-full pointer-events-none select-none z-0">
          <Image
            src="/about/hero/blob-right.png"
            alt="Background Effect"
            fill
            className="object-cover object-right opacity-80"
            priority
          />
        </div>


        {/* Hero Content */}
        <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center max-w-7xl mx-auto pt-20">

          <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-black max-w-6xl leading-[1.1] mb-8">
            Empowering Your Business with <br className="hidden md:block" />
            Digital Literacy & Innovation
          </h1>

          <p className="text-gray-500 text-lg md:text-xl max-w-3xl leading-relaxed mb-12">
            Dilshaj Infotech is a future-focused technology company dedicated to bridging the
            gap between education and employment through digital literacy training,
            innovative solutions, and cutting-edge products.
          </p>

          {/* 3D Element Images */}

          {/* Left 'Star' Element */}
          <div className="absolute left-[5%] top-[35%] -translate-y-1/2 hidden lg:block animate-pulse pointer-events-none select-none">
            <Image
              src="/about/hero/star-icon.png"
              alt="Star 3D"
              width={120}
              height={120}
              className="drop-shadow-2xl"
            />
          </div>

          {/* Bottom Left 'Cube' Element */}
          <div className="absolute left-[8%] bottom-[15%] hidden lg:block pointer-events-none select-none">
            <Image
              src="/about/hero/blob-left.png"
              alt="Cube 3D"
              width={100}
              height={100}
              className="drop-shadow-2xl rotate-12"
            />
          </div>

        </main>
      </div>

      {/* Detailed Story & Stats Section */}
      <AboutGridSection />

    </div>
  )
}

export default AboutPage