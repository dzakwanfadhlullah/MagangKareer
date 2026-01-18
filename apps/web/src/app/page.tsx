import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustLogosSection } from "@/components/sections/TrustLogosSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { JobsSection } from "@/components/sections/JobsSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { ClosingSection } from "@/components/sections/ClosingSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <TrustLogosSection />
      <PhilosophySection />
      <ProcessSection />
      <JobsSection />
      <TestimonialSection />
      <ClosingSection />
      <Footer />
    </main>
  );
}

