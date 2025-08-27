const ImgWithEffects = ({
  relativeStyle,
  imgSrc,
  imgAlt,
  imgStyle,
  absoluteStyle,
}) => {
  return (
    <figure className={relativeStyle}>
      <img src={imgSrc} alt={imgAlt} className={imgStyle} />
      <div className={absoluteStyle}></div>
    </figure>
  );
};
export default ImgWithEffects;
