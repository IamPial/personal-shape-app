import HeaderSection from "../header";
import HeroSection from "../hero";
import About from "../about";
import Cards from "../card";
import Forms from "../Input";
import Footer from "../footer";

const PersonalShapeApp = () => {
  return (
    <div>
      <header>
        <HeaderSection />
      </header>
      <main>
        <HeroSection />
        <About />
        <Cards />
        <Forms />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default PersonalShapeApp;
