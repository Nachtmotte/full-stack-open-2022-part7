import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../redux/actions/userActions";
import { setNotification } from "../redux/actions/notificationAction";

import { Button } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";

const Menu = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const logout = () => {
    dispatch(userLogout());
    dispatch(setNotification("good bye!", "info", 5));
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{marginBottom: "5px"}}>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#" as="span">
            <Link
              to="/"
              style={{
                paddingRight: "5",
                textDecoration: "none",
                color: "white",
              }}
            >
              Blogs
            </Link>
          </Nav.Link>
          <Nav.Link href="#" as="span">
            <Link
              to="/users"
              style={{
                paddingRight: "5",
                textDecoration: "none",
                color: "white",
              }}
            >
              Users
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <p style={{ color: "white", marginBottom: "0px" }}>
          <strong>{user.username}</strong>
        </p>
        <Button
          variant="outline-light"
          size="sm"
          onClick={logout}
          style={{ marginLeft: "5px", height: "31px" }}
        >
          logout
        </Button>
      </div>
    </Navbar>
  );
};

export default Menu;
