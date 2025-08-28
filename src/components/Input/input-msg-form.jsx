import InputMsgField from "./input-msg-field";
const InputTextAreaMsg = () => {
  return (
    <div>
      <InputMsgField
        areaStyle=" bg-rgba-color  w-full h-40 rounded-xl border-none outline-none ring-1 ring-gray-500 focus:ring-indigo-500 text-lg mt-3 px-5 py-4 focus:text-white shadow-sm focus:shadow-indigo-600 transition-all duration-300 "
        name="Message"
        placeholder="Tell me about your projects"
      />
    </div>
  );
};

export default InputTextAreaMsg;
