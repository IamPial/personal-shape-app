const InputMsgField = ({ name, areaStyle, placeholder }) => {
  return (
    <div className="mt-10">
      <label htmlFor="message" className="text-white font-bold">
        Message
      </label>
      <textarea
        name={name}
        placeholder={placeholder}
        className={areaStyle}
      ></textarea>
    </div>
  );
};
export default InputMsgField;
