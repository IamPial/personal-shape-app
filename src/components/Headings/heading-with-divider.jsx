import Heading from "./heading";
import Divider from "../span/divider";

const HeadingWithDivider = ({
  parentStyle,
  headingStyle,
  headingTitle,
  dividerParentStyle,
  dividerChildStyle,
}) => {
  return (
    // <div className="text-center group">
    //   <Heading classStyle="text-5xl text-color font-bold" title="About Me" />
    //   <Divider
    //     parentStyle="flex justify-center items-center my-8"
    //     childStyle="w-20 h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full shadow-md transition-all duration-300 group-hover:w-24"
    //   />
    // </div>
    <div className={parentStyle}>
      <Heading classStyle={headingStyle} title={headingTitle} />
      <Divider
        parentStyle={dividerParentStyle}
        childStyle={dividerChildStyle}
      />
    </div>
  );
};
export default HeadingWithDivider;
