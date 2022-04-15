import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import BlogList from "./components/BlogList";
import LoginForm from "./components/LoginForm";
import NewBlogForm from "./components/NewBlogForm";
import Notification from "./components/Notification";
import Togglable from "./components/Togglable";
import { setNotification } from "./redux/actions/notificationAction";
import { initUser, userLogout } from "./redux/actions/userActions";

const App = () => {
  const blogFormRef = useRef();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(initUser());
  }, [dispatch]);

  const logout = () => {
    dispatch(userLogout());
    dispatch(setNotification("good bye!", "info", 5));
  };

  const toggleVisibility = () => {
    blogFormRef.current.toggleVisibility();
  };

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
      <h2>blogs</h2>

      <Notification />

      <div>
        {user.name} logged in
        <button onClick={logout}>logout</button>
      </div>

      <Togglable buttonLabel="new note" ref={blogFormRef}>
        <NewBlogForm toggleVisibility={toggleVisibility} />
      </Togglable>

      <BlogList user={user} />
    </div>
  );
};

export default App;
