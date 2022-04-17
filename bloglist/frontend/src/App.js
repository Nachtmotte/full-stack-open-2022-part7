import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useMatch } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import Notification from "./components/Notification";
import UserList from "./components/UserList";
import Menu from "./components/Menu";
import Blogs from "./components/Blogs";
import UserDetails from "./components/UserDetails";
import BlogDetails from "./components/BlogDetails";
import { initUser } from "./redux/actions/userActions";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const users = useSelector((state) => state.users);
  const blogs = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(initUser());
  }, [dispatch]);

  const matchUser = useMatch("/users/:id");
  const userDetails = matchUser
    ? users.find((u) => u.id === matchUser.params.id)
    : null;

  const matchBlog = useMatch("/blogs/:id");
  const blogDetails = matchBlog
    ? blogs.find((b) => b.id === matchBlog.params.id)
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
    <div className="container">
      <Menu />
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetails user={userDetails} />} />
        <Route path="/blogs/:id" element={<BlogDetails blog={blogDetails} />} />
      </Routes>
    </div>
  );
};

export default App;
