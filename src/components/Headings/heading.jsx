const Heading = ({ classStyle, title, children }) => {
  if (children) {
    return <h1 className={classStyle}>{children}</h1>;
  }
  return <h1 className={classStyle}>{title}</h1>;
};

export default Heading;
