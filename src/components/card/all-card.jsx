import CardImg from "./card-img";
import CardButton from "./card-button";
import Heading from "../Headings/heading";
import Paragraph from "../Paragraph/paragraph";

const AllCard = ({
  mainCardStyle,
  cardBodyStyle,
  headingStyle,
  paraStyle,
  cardBtnAction,
}) => {
  return (
    <div>
      {/* Card 1 Start */}
      <div className={mainCardStyle}>
        <CardImg imgAlt="Workspace" imgSrc="./src/assets/images/card1.jpg" />
        <div className={cardBodyStyle}>
          <Heading classStyle={headingStyle} title="E-commerce Platform" />
          <Paragraph
            classStyle={paraStyle}
            title="A modern, responsive e-commerce solution with focus on user experience and conversion optimization. Built with scalability and performance in mind."
          />
          <div className={cardBtnAction}>
            <CardButton title="React" />
            <CardButton title="Node.js" />
            <CardButton title="MongoDB" />
            <CardButton title="Stripe" />
          </div>
        </div>
      </div>
      {/* Card 1 End */}

      {/* Card 4 Start */}
      <div className={mainCardStyle}>
        <CardImg imgAlt="Dashboard" imgSrc="./src/assets/images/card4.jpg" />
        <div className={cardBodyStyle}>
          <Heading classStyle={headingStyle} title="Dashboard Interface" />
          <Paragraph
            classStyle={paraStyle}
            title="Clean and functional dashboard design for data analytics platform with complex information architecture and real0time data visualization."
          />
          <div className={cardBtnAction}>
            <CardButton title="Vue.js" />
            <CardButton title="D3.js" />
            <CardButton title="SCSS" />
            <CardButton title="Chart.js" />
          </div>
        </div>
      </div>
      {/* Card 4 End */}

      {/* Card 2 Start */}
      <div className={mainCardStyle}>
        <CardImg imgAlt="Brand System" imgSrc="./src/assets/images/card2.jpg" />
        <div className={cardBodyStyle}>
          <Heading classStyle={headingStyle} title="Brand Identity System" />
          <Paragraph
            classStyle={paraStyle}
            title="Complete visual identity redesign for a tech startup, including logo, guidelines,and digital assets. Creating a cohesive brand experience across all touchpoints."
          />
          <div className={cardBtnAction}>
            <CardButton title="Illustrator" />
            <CardButton title="Photoshop" />
            <CardButton title="Figma" />
            <CardButton title="After Effects" />
          </div>
        </div>
      </div>
      {/* Card 2 End */}

      {/* Card 5 Start */}
      <div className={mainCardStyle}>
        <CardImg imgAlt="Marketing" imgSrc="./src/assets/images/card5.jpg" />
        <div className={cardBodyStyle}>
          <Heading classStyle={headingStyle} title="Marketing Website" />
          <Paragraph
            classStyle={paraStyle}
            title="Modern marketing website with interactive animations and optimized conversion funnels. Built for maximum performance and SEO."
          />
          <div className={cardBtnAction}>
            <CardButton title="Next.js" />
            <CardButton title="Framer Motion" />
            <CardButton title="Tailwind CSS" />
            <CardButton title="Vercel " />
          </div>
        </div>
      </div>
      {/* Card 5 End */}

      {/* Card 3 Start */}
      <div className={mainCardStyle}>
        <CardImg imgAlt="Mobile App" imgSrc="./src/assets/images/card3.jpg" />
        <div className={cardBodyStyle}>
          <Heading classStyle={headingStyle} title="Mobile App Design" />
          <Paragraph
            classStyle={paraStyle}
            title="Intuitive mobile app interface for a fitness tracking application wiht focus on accessibility and user engagement through gamification."
          />
          <div className={cardBtnAction}>
            <CardButton title="Figma" />
            <CardButton title="Principle" />
            <CardButton title="React Native" />
            <CardButton title="Lottie" />
          </div>
        </div>
      </div>
      {/* Card 3 End */}

      {/* Card 6 Start */}
      <div className={mainCardStyle}>
        <CardImg imgAlt="Creative" imgSrc="./src/assets/images/card6.jpg" />
        <div className={cardBodyStyle}>
          <Heading classStyle={headingStyle} title="Creative Portfolio" />
          <Paragraph
            classStyle={paraStyle}
            title="Artistic portfolio website featuring immersive galleries, smooth transitions, and creative storytelling for a digital artist."
          />
          <div className={cardBtnAction}>
            <CardButton title="React" />
            <CardButton title="Three.js" />
            <CardButton title="GSAP" />
            <CardButton title="WebGL" />
          </div>
        </div>
      </div>
      {/* Card 6 End */}
    </div>
  );
};

export default AllCard;
