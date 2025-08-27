const Button = ({ buttonStyle, type, title }) => {
  return (
    <button className={buttonStyle} type={type}>
      {title}
    </button>
  );
};
export default Button;
