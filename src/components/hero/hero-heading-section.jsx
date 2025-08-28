import Span from "../span/Span";
import Heading from "../Headings/heading";
import Paragraph from "../Paragraph/paragraph";

const HeroHeadingSection = () => {
  return (
    <div className="text-center">
      <Span classStyle="text-white text-base uppercase font-medium">
        Creative Designer
      </Span>
      <Heading classStyle="text-6xl text-white capitalize font-bold mt-4 mb-6 leading-20">
        transforming ideas <br /> into beautiful <br /> experiences
      </Heading>
      <Paragraph classStyle="text-white text-lg font-semibold">
        I craft digital experiences that captivate, engage, and inspire <br />
        through thoughtful design and innovative solutions
      </Paragraph>
    </div>
  );
};

export default HeroHeadingSection;
