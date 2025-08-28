import RightSection from "./right-section";
import LeftSection from "./left-section.jsx";
import MainHeadingWithDivider from "../Headings/main-heading-divider";

const About = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto py-30">
        <MainHeadingWithDivider
          title="About Me"
          headingStyle="text-5xl text-color font-bold"
        />
        <section className="columns-2 mt-12">
          <LeftSection />
          <RightSection />
        </section>
      </div>
    </div>
  );
};
export default About;
