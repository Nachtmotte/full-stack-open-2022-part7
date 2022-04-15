import { useState } from "react";
import { useDispatch } from "react-redux";

import { userLogin } from "../redux/actions/userActions";
import { setNotification } from "../redux/actions/notificationAction";

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
    <div>
      <h2>Log in to application</h2>

      <form onSubmit={handleSubmit}>
        <div>
          username
          <input
            value={username}
            onChange={({ target }) => setUsername(target.value)}
            id="username"
          />
        </div>
        <div>
          password
          <input
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            id="password"
          />
        </div>
        <button id="login-button" type="submit">
          login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
