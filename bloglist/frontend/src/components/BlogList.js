import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { initializeBlogs } from "../redux/actions/blogActions";

const BlogList = () => {
  const dispatch = useDispatch();
  const byLikes = (b1, b2) => (b2.likes > b1.likes ? 1 : -1);
  const blogs = useSelector((state) => state.blogs.sort(byLikes));

  useEffect(() => {
    dispatch(initializeBlogs());
  }, [dispatch]);

  const style = {
    padding: 3,
    margin: 5,
    borderStyle: "solid",
    borderWidth: 1,
  };

  return (
    <div id="blogs">
      {blogs.map((blog) => (
        <div style={style} className="blog" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
