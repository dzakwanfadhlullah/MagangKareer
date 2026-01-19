import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { VideoBackground } from "@/components/layout/VideoBackground";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustLogosSection } from "@/components/sections/TrustLogosSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { JobsSection } from "@/components/sections/JobsSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { ClosingSection } from "@/components/sections/ClosingSection";
import { FAQSection } from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Global Video Background */}
      <VideoBackground />
      <Navbar />
      <HeroSection />
      <TrustLogosSection />
      <PhilosophySection />
      <ProcessSection />
      <JobsSection />
      <TestimonialSection />
      <ClosingSection />
      <FAQSection />
      <Footer />
    </main>
  );
}

