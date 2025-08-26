const ListItem = ({ listStyle, name, links }) => {
  return (
    <li className={listStyle}>
      <a href={links}>{name}</a>
    </li>
  );
};
export default ListItem;
