import HeroSection from "@/components/sections/HeroSection";
import DeanMessageSection from "@/components/sections/DeanMessageSection";
import AboutSection from "@/components/sections/AboutSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import PartnershipSection from "@/components/sections/PartnershipSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <DeanMessageSection />
      <AboutSection />
      <WhyChooseSection />
      <StatsSection />
      <TestimonialSection />
      <PartnershipSection />
      <CTASection />
    </>
  );
}
