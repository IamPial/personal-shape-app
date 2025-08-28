import MainCards from "./main-cards";
import MainHeadingWithDivider from "../Headings/main-heading-divider";

const Cards = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto py-20 ">
        <MainHeadingWithDivider
          title="Featured Work"
          headingStyle="text-5xl text-color font-bold"
        />
        <div className=" mt-10 columns-3 gap-x-10">
          <MainCards />
        </div>
      </div>
    </div>
  );
};
export default Cards;
