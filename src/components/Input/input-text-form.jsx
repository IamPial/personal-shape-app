import InputTextField from "./input-text-field";

const InputTextForm = () => {
  return (
    <div>
      <div className="flex gap-5">
        <InputTextField
          mainStyle="w-full"
          lableName="name"
          labelStyle="text-white font-bold "
          labelTitle="Name"
          type="text"
          name="name"
          inputStyle="bg-rgba-color w-full rounded-xl border-none outline-none ring-1 ring-gray-500 focus:ring-indigo-500 text-lg mt-3 px-5 py-4  focus:text-white shadow-sm focus:shadow-indigo-600 transition-all duration-300"
          placeholder="Your full name"
        />
        <InputTextField
          mainStyle="w-full"
          lableName="email"
          labelStyle="text-white font-bold "
          labelTitle="Email"
          type="email"
          name="email"
          inputStyle="bg-rgba-color w-full rounded-xl border-none outline-none ring-1 ring-gray-500 focus:ring-indigo-500 text-lg mt-3 px-5 py-4  focus:text-white shadow-sm focus:shadow-indigo-600 transition-all duration-300"
          placeholder="your.email@example.com"
        />
      </div>
      <InputTextField
        mainStyle="w-full"
        lableName="subject"
        labelStyle="text-white font-bold "
        labelTitle="Subject"
        type="text"
        name="Subject"
        inputStyle="bg-rgba-color w-full rounded-xl border-none outline-none ring-1 ring-gray-500 focus:ring-indigo-500 text-lg mt-3 px-5 py-4  focus:text-white shadow-sm focus:shadow-indigo-600 transition-all duration-300"
        placeholder="What's this about?"
      />
    </div>
  );
};

export default InputTextForm;
