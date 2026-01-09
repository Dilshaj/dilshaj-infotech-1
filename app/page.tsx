import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center bg-linear-to-br from-blue-600 to-purple-700 text-white p-8">
        <h1 className="text-6xl font-black mb-6 animate-bounce">
          Dilshaj Infotech
        </h1>
        <p className="text-xl opacity-90 mb-8 max-w-2xl text-center">
          Experience the future of smooth interactions. Swipe down to see Lenis Smooth Scroll in action.
        </p>
        <div className="animate-pulse">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Content Sections to demonstrate scroll */}
      {[1, 2, 3, 4, 5].map((i) => (
        <section
          key={i}
          className={`h-screen flex items-center justify-center p-8 ${i % 2 === 0 ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-900'
            }`}
        >
          <div className="max-w-4xl text-center">
            <h2 className="text-8xl font-black mb-8 opacity-20">SECTION 0{i}</h2>
            <h3 className="text-4xl font-bold mb-4">Responsive & Fluid</h3>
            <p className="text-lg leading-relaxed opacity-70">
              Lenis provides a natural, decoupled scroll experience that feels great on all devices.
              Notice how the acceleration and deceleration feel weighted and premium.
            </p>
          </div>
        </section>
      ))}

      <Footer />
    </main>
  );
}