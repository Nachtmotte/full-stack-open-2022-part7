import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../redux/actions/userActions";
import { setNotification } from "../redux/actions/notificationAction";

const Menu = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const padding = {
    paddingRight: 5,
  };

  const logout = () => {
    dispatch(userLogout());
    dispatch(setNotification("good bye!", "info", 5));
  };

  return (
    <div>
      <Link to="/" style={padding}>
          blogs
      </Link>
      <Link to="/users" style={padding}>
        users
      </Link>
      {user.name} logged in
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default Menu;
