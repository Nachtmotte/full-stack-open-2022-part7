import { useState } from "react";
import { useDispatch } from "react-redux";

import { userLogin } from "../redux/actions/userActions";
import { setNotification } from "../redux/actions/notificationAction";

import { Table, Form, Button } from "react-bootstrap";

const LoginForm = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    login(username, password);
  };

  const login = async (username, password) => {
    try {
      await dispatch(userLogin(username, password));
      dispatch(setNotification(`${username} logged in!`, "info", 5));
    } catch {
      dispatch(setNotification("wrong username/password", "alert", 5));
    }
  };

  return (
    <div style={{display: "grid", justifyContent: "center", marginTop: "20px"}}>
      <h2>Log in to application</h2>

      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>username:</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
            id="username"
            style={{ maxWidth: "300px" }}
          />
          <Form.Label>password:</Form.Label>
          <Form.Control
            name="username"
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            id="password"
            style={{ maxWidth: "300px" }}
          />
          <div style={{display: "block", maxWidth: "300px", textAlign: "end"}}>
            <Button
              variant="primary"
              type="submit"
              id="login-button"
              style={{ marginTop: "10px" }}
            >
              login
            </Button>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};

export default LoginForm;
