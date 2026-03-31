import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import HeroSection from "./about/HeroSection";
import WhyChooseUsSection from "./about/WhyChooseUsSection";
import MissionVisionSection from "./about/MissionVisionSection";
import CompanyTimelineSection from "./about/CompanyTimelineSection";
import LeadershipSection from "./about/LeadershipSection";
import BrandsSection from "./about/BrandsSection";

const AboutPage = () => {
  return (
    <div className="bg-black text-white overflow-hidden">
      <Navbar />
      <HeroSection />
      <WhyChooseUsSection />
      <MissionVisionSection />
      <CompanyTimelineSection />
      <LeadershipSection />
      <BrandsSection />
      <FooterSection />
    </div>
  );
};

export default AboutPage;
