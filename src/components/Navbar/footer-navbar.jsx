import ListItem from "./list-item";

const FooterNavBar = () => {
  return (
    <div>
      <nav>
        <ul className="flex ">
          <ListItem
            listStyle="m-2 px-2 py-1 hover:text-purple-400 transition duration-300"
            links="#"
            name="Privacy Policy"
          />
          <ListItem
            listStyle="m-2 px-2 py-1 hover:text-purple-400 transition duration-300"
            links="#"
            name="Term of Use"
          />
          <ListItem
            listStyle="m-2 px-2 py-1 hover:text-purple-400 transition duration-300"
            links="#"
            name="Sitemap"
          />
          <ListItem
            listStyle="m-2 px-2 py-1 hover:text-purple-400 transition duration-300"
            links="#"
            name="Provided by TemplateMo"
          />
        </ul>
      </nav>
    </div>
  );
};
export default FooterNavBar;
