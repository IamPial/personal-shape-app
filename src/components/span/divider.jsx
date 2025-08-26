const Divider = ({ parentStyle, childStyle }) => {
  return (
    <div className={parentStyle}>
      <div className={childStyle}></div>
    </div>
  );
};

export default Divider;
