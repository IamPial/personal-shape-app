import InputTextForm from "./input-text-form";
import InputTextAreaMsg from "./input-msg-form";
import Button from "../Button/button";

const InputFormBody = () => {
  return (
    <div>
      <form>
        <InputTextForm />
        <InputTextAreaMsg />
        <div className="mt-10">
          <Button
            buttonStyle=" w-full  form-btn-color rounded-4xl font-bold hover:shadow-indigo-600/50 hover:shadow-2xl hover:-translate-y-1 border-none outline-none text-lg mt-3 px-5 py-4 transition-all duration-300 "
            type="submit"
            title="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default InputFormBody;
