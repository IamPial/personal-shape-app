import AllCard from "./all-card";
const Cards = () => {
  return (
    <AllCard
      mainCardStyle="height-520 card group rounded-3xl transition-all duration-400 hover:shadow-2xl hover:-translate-y-5 bg-white w-96  block shadow-xl border-gray-200 mb-16"
      cardBodyStyle="card-body px-9 py-11"
      cardBtnAction="card-actions justify-start"
      headingStyle="card-title text-gray-800 text-2xl mb-5"
      paraStyle="text-gray-500 text-base mb-5 text-left"
    />
  );
};

export default Cards;
