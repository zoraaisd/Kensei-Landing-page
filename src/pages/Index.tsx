import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrandIntroSection from "@/components/BrandIntroSection";
import FooterSection from "@/components/FooterSection";
import SnookersCard from "@/components/SnookersCard";
import PlaystationCard from "@/components/PlaystationCard";
import DipDashCard from "@/components/DipDashCard";
import OptimusCard from "@/components/OptimusCard";
import OptimusManpowerCard from "@/components/OptimusManpowerCard";
import SnookerExperienceSection from "@/components/SnookerExperienceSection";
import PlaystationPage from "@/components/PlaystationPage";
import DipDashPage from "@/components/DipDashPage";
import OptimusCourses from "@/components/OptimusCourses";
import OptimusManpowerPage from "@/components/OptimusManpowerPage";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <BrandIntroSection />
      <SnookersCard />
          <SnookerExperienceSection/>
          <PlaystationCard />
          <PlaystationPage/>
          <DipDashCard />
          <DipDashPage/>
          <OptimusCard />
          <OptimusCourses/>
          <OptimusManpowerCard />
          <OptimusManpowerPage/>
    <FooterSection />
  </div>
);

export default Index;
