import FooterNavBar from "../Navbar/footer-navbar";
import Paragraph from "../Paragraph/paragraph";

const MyFooter = () => {
  return (
    <div className="footer-bg px-16 pr-10 py-10 ">
      <div className="flex justify-between mt-10">
        <Paragraph classStyle="text-base text-white my-2">
          &copy;2025 Personal Shape. All rights reserved.
        </Paragraph>
        <FooterNavBar />
      </div>
    </div>
  );
};

export default MyFooter;
