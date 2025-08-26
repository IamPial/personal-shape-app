const Paragraph = ({ classStyle, title, children }) => {
  if (children) {
    return <p className={classStyle}>{children}</p>;
  }
  return <p className={classStyle}>{title}</p>;
};
export default Paragraph;
