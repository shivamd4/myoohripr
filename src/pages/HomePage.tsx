import AboutUs from "@/components/Home/AboutUs";
import CoreValues from "@/components/Home/CoreValues";
import HeroSection from "@/components/Home/HeroSection";
import Services from "@/components/Home/Services";
import SolutionOfferings from "@/components/Home/SolutionOfferings";
import Testimonials from "@/components/Home/Testimonials";
import WhyUsRibbon from "@/components/WhyUsRibbon";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <AboutUs />
      <WhyUsRibbon />
      <CoreValues />
      <SolutionOfferings />
      <Testimonials />
    </>
  );
};

export default HomePage;
