import HeroSection from "@/components/sections/HeroSection";
import DeanMessageSection from "@/components/sections/DeanMessageSection";
import HistorySection from "@/components/sections/HistorySection";
import VisionMissionSection from "@/components/sections/VisionMissionSection";
import OrganizationStructureSection from "@/components/sections/OrganizationStructureSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import StatsSection from "@/components/sections/StatsSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <DeanMessageSection />
      <HistorySection />
      <VisionMissionSection />
      <OrganizationStructureSection />
      <WhyChooseSection />
      <StatsSection />
      <CTASection />
    </>
  );
}
