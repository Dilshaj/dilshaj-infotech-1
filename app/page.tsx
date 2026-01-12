import HeroSection from "./components/home/HeroSection";
import MarqueeSection from "./components/home/MarqueeSection";
import AboutSection from "./components/home/AboutSection";
import WhoWeAre from "./components/home/WhoWeAre";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Marquee Section */}
      <MarqueeSection />

      {/* About Section */}
      <AboutSection />

      {/* Who We Are Section */}
      <WhoWeAre />
    </main>
  );
}