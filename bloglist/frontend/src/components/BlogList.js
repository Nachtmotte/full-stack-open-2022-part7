import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { initializeBlogs } from "../redux/actions/blogActions";

import Blog from "./Blog";

const BlogList = ({ user }) => {
  const dispatch = useDispatch();

  const byLikes = (b1, b2) => (b2.likes > b1.likes ? 1 : -1);

  const blogs = useSelector((state) => state.blogs.sort(byLikes));

  useEffect(() => {
    dispatch(initializeBlogs());
  }, [dispatch]);

  return (
    <div id="blogs">
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} user={user} />
      ))}
    </div>
  );
};

export default BlogList;
