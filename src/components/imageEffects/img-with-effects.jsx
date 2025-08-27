const ImgWithEffects = ({
  relativeStyle,
  imgSrc,
  imgAlt,
  imgStyle,
  absoluteStyle,
}) => {
  //   <div className="relative overflow-hidden rounded-lg transition-all duration-500 shadow-2xl w-125 ">
  //     <img
  //       src="./src/assets/images/smiling-girl-computer-desktop.jpg"
  //       alt="Profile"
  //       className=" object-cover filter transition-all duration-500 hover:hue-rotate-180 hover:saturate-150 hover:brightness-110 "
  //     />
  //     <div className="absolute inset-0 bg-gradient-to-r from-purple-500/15 to-pink-500/15 hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-500 ease-in-out"></div>
  //   </div>;
  return (
    <div className={relativeStyle}>
      <img src={imgSrc} alt={imgAlt} className={imgStyle} />
      <div className={absoluteStyle}></div>
    </div>
  );
};
export default ImgWithEffects;
