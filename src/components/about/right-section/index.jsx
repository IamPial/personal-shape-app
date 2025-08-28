import Heading from "../../Headings/heading";
import Paragraph from "../../Paragraph/paragraph";
import RightBtn from "./right-btn";

const RightSection = () => {
  return (
    <article className="p-0 mx-0 w-full">
      <Heading classStyle="text-4xl font-semibold text-gray-800 leading-12 ">
        Passionate about creating meaningful <br /> digital experiences
      </Heading>
      <Paragraph classStyle="text-gray-500 mt-10">
        With over 5 years of experience in digital design, I specialize in
        creating user-centered solutions that bridge the gap between
        functionality and aesthetics. My approach combines strategic thinking
        with creative execution to deliver impactful results.
      </Paragraph>
      <Paragraph classStyle="text-gray-500 mt-10">
        I believe that great design is not just about how it looks, but how it
        works and how it makes people feel. Every project is an opportunity to
        solve problems and create connections that matter.
      </Paragraph>
      <Paragraph classStyle="text-gray-500 mt-10">
        When I'm not designing, you'll find me exploring new technologies,
        sketching ideas, or seeking inspiration in nature and architecture.
      </Paragraph>
      <RightBtn />
    </article>
  );
};
export default RightSection;
