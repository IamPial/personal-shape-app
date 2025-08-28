import MainHeadingWithDivider from "../Headings/main-heading-divider";
import Paragraph from "../Paragraph/paragraph";

const FormHeading = () => {
  return (
    <div className="text-white">
      <MainHeadingWithDivider
        title="Let's Work Together"
        headingStyle="text-5xl text-white font-bold "
      />
      <Paragraph
        classStyle="text-lg text-center px-65"
        title="Ready to bring your vision to life? Let's discuss how we can create something amazing together. I'm always excited to take on new challenges and collaborate on innovative orojects."
      />
    </div>
  );
};

export default FormHeading;
