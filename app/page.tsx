import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { existsSync } from "node:fs";
import { join } from "node:path";
import About from "@/components/About";
import SelectedImpact from "@/components/SelectedImpact";
import CoreExpertise from "@/components/CoreExpertise";
import FeaturedAthena from "@/components/FeaturedAthena";
import FeaturedProjects from "@/components/FeaturedProjects";
import Experience from "@/components/Experience";
import Teaching from "@/components/Teaching";
import TechStack from "@/components/TechStack";
import Certifications from "@/components/Certifications";
import ProfessionalEligibilities from "@/components/ProfessionalEligibilities";
import TrainingsConducted from "@/components/TrainingsConducted";
import RobTechJourney from "@/components/RobTechJourney";
import ConversionCTA from "@/components/ConversionCTA";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  const hasResume = existsSync(join(process.cwd(), "public", "resume.pdf"));

  return (
    <>
      <Navbar />
      <main>
        <Hero showCv={hasResume} />
        <About />
        <SelectedImpact />
        <CoreExpertise />
        <FeaturedAthena />
        <FeaturedProjects />
        <Teaching />
        <TechStack />
        <RobTechJourney />
        <Experience />
        <Certifications />
        <ProfessionalEligibilities />
        <TrainingsConducted />
        <Testimonials />
        <ConversionCTA />
        <Contact showCv={hasResume} />
      </main>
      <Footer />
    </>
  );
}
