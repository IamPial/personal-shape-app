import InputFormBody from "./form-body";
import FormHeading from "./form-heading";

const MainForm = () => {
  return (
    <div>
      <FormHeading />
      <div className="px-70 py-20">
        <InputFormBody />
      </div>
    </div>
  );
};
export default MainForm;
