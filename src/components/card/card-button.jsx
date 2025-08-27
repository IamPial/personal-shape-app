import Button from "../Button/button";
const CardButton = ({ title }) => {
  return (
    <Button
      buttonStyle="text-gray-500 font-medium text-sm rounded-4xl transition-all duration-300 px-4 py-2 bg-white hover:bg-indigo-500 hover:text-white"
      type="button"
      title={title}
    />
  );
};

export default CardButton;
