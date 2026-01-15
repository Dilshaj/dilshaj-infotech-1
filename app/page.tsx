import HeroSection from "./components/home/HeroSection";
import MarqueeSection from "./components/home/MarqueeSection";
import AboutSection from "./components/home/AboutSection";
import WhoWeAre from "./components/home/WhoWeAre";
import AboutGridSection from "./components/about/AboutGridSection";
import IndustrySupport from "./components/home/IndustrySupport";
import HomeServices from "./components/home/HomeServices";
import HomePath from "./components/home/HomePath";
import HomeAlumni from "./components/home/HomeAlumni";
import PartnerWithUs from "./components/home/PartnerWithUs";
import ProjectCarousel from "./components/projects/ProjectCarousel";

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

      {/* About Grid Section */}
      <AboutGridSection isHomePage={true} />

      {/* Industry Support Section */}
      <IndustrySupport />

      {/* Home Services Section */}
      <HomeServices />

      {/* Project Carousel Section */}
      <ProjectCarousel isHomePage={true} />

      {/* Choose Your Path Section */}
      <HomePath />

      {/* Alumni Section */}
      <HomeAlumni />

      {/* Partner With Us Section */}
      <PartnerWithUs />

      {/* Service Section */}
      {/* <ServiceSection /> */}

      {/* Contact Section */}
      {/* <ContactFormSection /> */}
    </main>
  );
}