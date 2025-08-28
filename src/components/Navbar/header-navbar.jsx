import ListItem from "./list-item";

const HeaderNavbar = () => {
  return (
    <nav>
      <ul className="text-black flex items-center font-semibold ">
        <ListItem
          listStyle="m-2 px-4 py-1 hover:text-purple-400 transition duration-300"
          name="Home"
          links="#"
        />
        <ListItem
          listStyle="m-2 px-4 py-1 hover:text-purple-400 transition duration-300"
          name="About"
          links="#"
        />
        <ListItem
          listStyle="m-2 px-4 py-1 hover:text-purple-400 transition duration-300"
          name="Porfolio"
          links="#"
        />
        <ListItem
          listStyle="m-2 px-4 py-1 hover:text-purple-400 transition duration-300"
          name="Contact"
          links="#"
        />
      </ul>
    </nav>
  );
};

export default HeaderNavbar;
