const InputTextField = ({
  mainStyle,
  lableName,
  labelTitle,
  labelStyle,
  type,
  name,
  inputStyle,
  placeholder,
}) => {
  return (
    <div className={mainStyle}>
      <label htmlFor={lableName} className={labelStyle}>
        {labelTitle}
      </label>
      <input
        type={type}
        name={name}
        className={inputStyle}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputTextField;
