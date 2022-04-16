import Togglable from "./Togglable";
import NewBlogForm from "./NewBlogForm";
import Notification from "./Notification";
import BlogList from "./BlogList";

import { useRef } from "react";

const Blogs = ({ user }) => {
  const blogFormRef = useRef();

  const toggleVisibility = () => {
    blogFormRef.current.toggleVisibility();
  };

  return (
    <>
      <h2>blogs</h2>

      <Notification />

      <Togglable buttonLabel="new note" ref={blogFormRef}>
        <NewBlogForm toggleVisibility={toggleVisibility} />
      </Togglable>

      <BlogList user={user} />
    </>
  );
};

export default Blogs;
