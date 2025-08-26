import Navbar from "./components/Navbar/navbar";
import Heading from "./components/Headings/heading";
import Paragraph from "./components/Paragraph/paragraph";
import Span from "./components/span/Span";

const App = () => {
  return (
    <div>
      {/* Header Start */}
      <header className="bg-white">
        <div className="container mx-auto  py-4 bg-white flex justify-between items-center">
          <Heading
            classStyle="text-4xl font-bold font-times bg-gradient-to-r from-indigo-500 via-blue-800 to-pink-500  bg-clip-text text-transparent"
            title="Personal Shape"
          />
          <div>
            <Navbar />
          </div>
        </div>
      </header>
      {/* Header End */}

      <main>
        {/* Hero Section Start */}
        <div class=" bg-linear-[120deg,#6900e7,#e38df2]">
          <div className="container mx-auto pt-20 pb-10">
            <div className="text-center">
              <Span classStyle="text-white text-base uppercase font-medium">
                Creative Designer
              </Span>
              <Heading classStyle="text-6xl text-white capitalize font-bold mt-4 mb-6 leading-20">
                transforming ideas <br /> into beautiful <br /> experiences
              </Heading>
              <Paragraph classStyle="text-white">
                I craft digital experiences that captivate, engage, and inspire{" "}
                <br />
                through thoughtful design and innovative solutions
              </Paragraph>
            </div>
            <div className="flex items-center justify-center mt-12 flex-col">
              <button
                type="button"
                className="px-10 py-5 cursor-pointer hover:bg-fuchsia-700 transition-all duration-300 hover:ring-fuchsia-700 ring-2 ring-fuchsia-200 text-white rounded-4xl font-medium text-sm bg-purple-400 mb-18"
              >
                Explore My Work
              </button>
              <Span classStyle="rounded-4xl ring-2 ring-fuchsia-300 px-5 py-8"></Span>
            </div>
          </div>
        </div>
        {/*Hero Section End */}

        {/* About Section Start */}
        <div className="bg-white">
          <div className="container mx-auto py-40">
            <div className="text-center">
              <Heading
                classStyle="text-4xl text-color font-bold"
                title="About Me"
              />
              <div className="flex justify-center items-center my-8">
                <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full shadow-md transition-all duration-300 hover:w-24"></div>
              </div>
            </div>
          </div>
        </div>
        {/* About Section End */}
      </main>
    </div>
  );
};
export default App;
