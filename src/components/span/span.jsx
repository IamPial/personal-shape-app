const Span = ({ classStyle, children }) => {
  if (children) {
    return <span className={classStyle}>{children}</span>;
  }
  return <span className={classStyle}></span>;
};
export default Span;
