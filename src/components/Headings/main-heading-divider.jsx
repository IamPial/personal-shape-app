import HeadingWithDivider from "./heading-with-divider";
const MainHeadingWithDivider = ({ title, headingStyle }) => {
  return (
    <HeadingWithDivider
      parentStyle="text-center group"
      headingTitle={title}
      headingStyle={headingStyle}
      dividerParentStyle="flex justify-center items-center my-8"
      dividerChildStyle="w-20 h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full shadow-md transition-all duration-300 group-hover:w-24"
    />
  );
};
export default MainHeadingWithDivider;
