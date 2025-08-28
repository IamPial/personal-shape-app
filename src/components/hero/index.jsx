import HeroBtnSection from "./hero-btn-section";
import HeroHeadingSection from "./hero-heading-section";

const HeroSection = () => {
  return (
    <div className=" bg-linear-[120deg,#3c4ab3,#9534a2]">
      <div className="container mx-auto pt-20 pb-10">
        <HeroHeadingSection />
        <HeroBtnSection />
      </div>
    </div>
  );
};
export default HeroSection;
