import ImgWithEffects from "../imageEffects/img-with-effects";

const CardImg = ({ imgAlt, imgSrc }) => {
  return (
    <ImgWithEffects
      relativeStyle="relative overflow-hidden cursor-pointer"
      absoluteStyle="absolute inset-0 group-hover:bg-purple-500/20 bg-transparent duration-300"
      imgAlt={imgAlt}
      imgSrc={imgSrc}
      imgStyle=" w-full h-48 object-cover filter  hover:hue-rotate-0 hover:saturate-100 hover:brightness-100 ease-out"
    />
  );
};
export default CardImg;
