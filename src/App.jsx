import Navbar from "./components/Navbar/navbar";

const App = () => {
  return (
    <div>
      {/* NavBar */}
      <div className="w-full px-20 py-4 bg-white flex justify-between items-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 via-blue-800 to-pink-500  bg-clip-text text-transparent">
          Personal Shape
        </h2>

        <div>
          <Navbar />
        </div>
      </div>
    </div>
  );
};
export default App;
