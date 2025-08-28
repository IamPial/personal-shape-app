import HeaderNavbar from "../Navbar/header-navbar";
import Heading from "../Headings/heading";

const HeaderSection = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto  py-4 bg-white flex justify-between items-center">
        <Heading
          classStyle="text-4xl font-bold font-times bg-gradient-to-r from-indigo-500 via-blue-800 to-pink-500  bg-clip-text text-transparent"
          title="Personal Shape"
        />
        <div>
          <HeaderNavbar />
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
