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
