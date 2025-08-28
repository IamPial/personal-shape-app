import ImgWithEffects from "../../imageEffects/img-with-effects";

const LeftSection = () => {
  return (
    <div className="py-12">
      <ImgWithEffects
        relativeStyle="relative overflow-hidden rounded-lg transition-all duration-500 shadow-2xl w-125"
        imgSrc="./src/assets/images/smiling-girl-computer-desktop.jpg"
        imgAlt="Profile"
        imgStyle=" object-cover filter transition-all duration-500 hover:hue-rotate-180 hover:saturate-150 hover:brightness-110 "
        absoluteStyle="absolute inset-0 bg-gradient-to-r from-purple-500/15 to-pink-500/15 hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-500 ease-in-out"
      />
    </div>
  );
};
export default LeftSection;
