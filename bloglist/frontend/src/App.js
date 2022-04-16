import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useMatch } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import Notification from "./components/Notification";
import UserList from "./components/UserList";
import Menu from "./components/Menu";
import Blogs from "./components/Blogs";
import { initUser } from "./redux/actions/userActions";
import userService from "./services/user";
import UserDetails from "./components/UserDetails";

const App = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);

  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(initUser());
  }, [dispatch]);

  useEffect(async () => {
    setUsers(await userService.getAll());
  }, []);

  const match = useMatch("/users/:id");
  const userDetails = match
    ? users.find((u) => u.id === match.params.id)
    : null;

  if (user === null) {
    return (
      <>
        <Notification />
        <LoginForm />
      </>
    );
  }

  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<Blogs user={user} />} />
        <Route path="/users" element={<UserList users={users} />} />
        <Route path="/users/:id" element={<UserDetails user={userDetails} />} />
      </Routes>
    </div>
  );
};

export default App;
