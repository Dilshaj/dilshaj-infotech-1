import HeroSection from "./components/home/HeroSection";
import AboutSection from "./components/home/AboutSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />
    </main>
  );
}