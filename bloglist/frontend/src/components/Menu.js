import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../redux/actions/userActions";
import { setNotification } from "../redux/actions/notificationAction";

import { Button } from "react-bootstrap";

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
      <Button variant="dark" onClick={logout} style={{marginLeft: "5px"}}>logout</Button>
    </div>
  );
};

export default Menu;
