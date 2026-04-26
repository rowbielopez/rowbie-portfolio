import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SelectedImpact from "@/components/SelectedImpact";
import CoreExpertise from "@/components/CoreExpertise";
import FeaturedAthena from "@/components/FeaturedAthena";
import FeaturedProjects from "@/components/FeaturedProjects";
import Experience from "@/components/Experience";
import Teaching from "@/components/Teaching";
import TechStack from "@/components/TechStack";
import Certifications from "@/components/Certifications";
import RobTechJourney from "@/components/RobTechJourney";
import AvailableFor from "@/components/AvailableFor";
import ConversionCTA from "@/components/ConversionCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <SelectedImpact />
        <CoreExpertise />
        <FeaturedAthena />
        <FeaturedProjects />
        <Experience />
        <Teaching />
        <TechStack />
        <Certifications />
        <RobTechJourney />
        <AvailableFor />
        <ConversionCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
