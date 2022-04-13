import { Link } from "react-router-dom";

const Menu = () => {
  const padding = {
    paddingRight: 5,
  };
  return (
    <div>
      <Link to="/create" style={padding}>
        create new
      </Link>
      <Link to="/about" style={padding}>
        about
      </Link>
      <Link to="/" style={padding}>
        anecdotes
      </Link>
    </div>
  );
};

export default Menu;
