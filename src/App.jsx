import Navbar from "./components/Navbar/navbar";
import Heading from "./components/Headings/heading";
import Paragraph from "./components/Paragraph/paragraph";
import Span from "./components/span/Span";
import Divider from "./components/span/divider";
import Button from "./components/Button/button";
import HeadingWithDivider from "./components/Headings/heading-with-divider";
import MainHeadingWithDivider from "./components/Headings/main-heading-divider";
import ImgWithEffects from "./components/imageEffects/img-with-effects";
import Cards from "./components/card";
import InputForm from "./components/Input/form-body";
import MainForm from "./components/Input";
import ListItem from "./components/Navbar/list-item";

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
        <div className=" bg-linear-[120deg,#3c4ab3,#9534a2]">
          <div className="container mx-auto pt-20 pb-10">
            <div className="text-center">
              <Span classStyle="text-white text-base uppercase font-medium">
                Creative Designer
              </Span>
              <Heading classStyle="text-6xl text-white capitalize font-bold mt-4 mb-6 leading-20">
                transforming ideas <br /> into beautiful <br /> experiences
              </Heading>
              <Paragraph classStyle="text-white text-lg font-semibold">
                I craft digital experiences that captivate, engage, and inspire{" "}
                <br />
                through thoughtful design and innovative solutions
              </Paragraph>
            </div>
            <div className="flex items-center justify-center mt-12 flex-col">
              <Button
                buttonStyle="px-14 hover:shadow-2xl py-5 cursor-pointer  transition-all duration-300 hover:ring-fuchsia-200 ring-2 ring-fuchsia-200 text-white rounded-4xl font-medium text-sm bg-purple-400 mb-18"
                type="button"
                title="Explore My Work"
              />
              <Span classStyle="rounded-4xl ring-2 ring-fuchsia-300 px-5 py-8"></Span>
            </div>
          </div>
        </div>
        {/*Hero Section End */}

        {/* About Section Start */}
        <div className="bg-white">
          <div className="container mx-auto py-30">
            <MainHeadingWithDivider
              title="About Me"
              headingStyle="text-5xl text-color font-bold"
            />

            <section className="columns-2 mt-12">
              {/* Left Section */}
              <div className="py-12">
                <ImgWithEffects
                  relativeStyle="relative overflow-hidden rounded-lg transition-all duration-500 shadow-2xl w-125"
                  imgSrc="./src/assets/images/smiling-girl-computer-desktop.jpg"
                  imgAlt="Profile"
                  imgStyle=" object-cover filter transition-all duration-500 hover:hue-rotate-180 hover:saturate-150 hover:brightness-110 "
                  absoluteStyle="absolute inset-0 bg-gradient-to-r from-purple-500/15 to-pink-500/15 hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-500 ease-in-out"
                />
              </div>

              {/* Right Section */}
              <article className="p-0 mx-0 w-full">
                <Heading classStyle="text-4xl font-semibold text-gray-800 leading-12 ">
                  Passionate about creating meaningful <br /> digital
                  experiences
                </Heading>
                <Paragraph classStyle="text-gray-500 mt-10">
                  With over 5 years of experience in digital design, I
                  specialize in creating user-centered solutions that bridge the
                  gap between functionality and aesthetics. My approach combines
                  strategic thinking with creative execution to deliver
                  impactful results.
                </Paragraph>
                <Paragraph classStyle="text-gray-500 mt-10">
                  I believe that great design is not just about how it looks,
                  but how it works and how it makes people feel. Every project
                  is an opportunity to solve problems and create connections
                  that matter.
                </Paragraph>
                <Paragraph classStyle="text-gray-500 mt-10">
                  When I'm not designing, you'll find me exploring new
                  technologies, sketching ideas, or seeking inspiration in
                  nature and architecture.
                </Paragraph>

                <div className="mt-12 space-y-6 ">
                  <Button
                    buttonStyle="px-6 py-3  hover:scale-110 cursor-pointer hover:bg-indigo-500 transition-all duration-300 hover:ring-indigo-500 ring-2 ring-gray-300 text-indigo-500 rounded-4xl font-medium text-sm hover:text-white bg-white"
                    type="button"
                    title="UI/UX Design"
                  />
                  <Button
                    buttonStyle="px-6 py-3 ml-4 hover:scale-110 cursor-pointer hover:bg-indigo-500 transition-all duration-300 hover:ring-indigo-500 ring-2 ring-gray-300 text-indigo-500 rounded-4xl font-medium text-sm hover:text-white bg-white"
                    type="button"
                    title="Web Development"
                  />
                  <Button
                    buttonStyle="px-6 py-3 ml-4 hover:scale-110 cursor-pointer hover:bg-indigo-500 transition-all duration-300 hover:ring-indigo-500 ring-2 ring-gray-300 text-indigo-500 rounded-4xl font-medium text-sm hover:text-white bg-white"
                    type="button"
                    title="Brand Identity"
                  />
                  <Button
                    buttonStyle="px-6 py-3 ml-4 hover:scale-110 cursor-pointer hover:bg-indigo-500 transition-all duration-300 hover:ring-indigo-500 ring-2 ring-gray-300 text-indigo-500 rounded-4xl font-medium text-sm hover:text-white bg-white"
                    type="button"
                    title="More Graphics"
                  />
                  <Button
                    buttonStyle="px-6 py-3  hover:scale-110 cursor-pointer hover:bg-indigo-500 transition-all duration-300 hover:ring-indigo-500 ring-2 ring-gray-300 text-indigo-500 rounded-4xl font-medium text-sm hover:text-white bg-white"
                    type="button"
                    title="Prototyping"
                  />
                  <Button
                    buttonStyle="px-6 py-3 ml-4 hover:scale-110 cursor-pointer hover:bg-indigo-500 transition-all duration-300 hover:ring-indigo-500 ring-2 ring-gray-300 text-indigo-500 rounded-4xl font-medium text-sm hover:text-white bg-white"
                    type="button"
                    title="Desing Systems"
                  />
                </div>
              </article>
            </section>
          </div>
        </div>
        {/* About Section End */}

        {/*Work Section Start*/}
        <div className="bg-white">
          <div className="container mx-auto py-20 ">
            <MainHeadingWithDivider
              title="Featured Work"
              headingStyle="text-5xl text-color font-bold"
            />
            <div className=" mt-10 columns-3 gap-x-10">
              <Cards />
            </div>
          </div>
        </div>
        {/*Work Section End*/}

        {/* Form Section Start */}
        <div className=" bg-linear-[120deg,#3c4ab3,#9534a2]">
          <div className="container mx-auto py-36 pb-10">
            <MainForm />
          </div>
        </div>
        {/* Form Section End */}
      </main>

      <footer>
        <div className="bg-blue-950 px-20 py-14">
          <div className="flex justify-between">
            <p className="text-base text-white">Hello This is pial</p>
            <div>
              <nav>
                <ul className="flex ">
                  <ListItem
                    listStyle="m-2 px-4 py-1 hover:text-purple-400 transition duration-300"
                    links="#"
                    name="Privacy"
                  />
                  <ListItem
                    listStyle="m-2 px-4 py-1 hover:text-purple-400 transition duration-300"
                    links="#"
                    name="Privacy"
                  />
                  <ListItem
                    listStyle="m-2 px-4 py-1 hover:text-purple-400 transition duration-300"
                    links="#"
                    name="Privacy"
                  />
                  <ListItem
                    listStyle="m-2 px-4 py-1 hover:text-purple-400 transition duration-300"
                    links="#"
                    name="Privacy"
                  />
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default App;
