import Button from "../Button/button";
import Span from "../span/Span";

const HeroBtnSection = () => {
  return (
    <div className="flex items-center justify-center mt-12 flex-col">
      <Button
        buttonStyle="px-14 hover:shadow-2xl py-5 cursor-pointer  transition-all duration-300 hover:ring-fuchsia-200 ring-2 ring-fuchsia-200 text-white rounded-4xl font-medium text-sm bg-purple-400 mb-18"
        type="button"
        title="Explore My Work"
      />
      <Span classStyle="rounded-4xl ring-2 ring-fuchsia-300 px-5 py-8"></Span>
    </div>
  );
};
export default HeroBtnSection;
