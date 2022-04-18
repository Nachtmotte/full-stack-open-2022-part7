import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { initializeBlogs } from "../redux/actions/blogActions";

import { Table } from "react-bootstrap";

const BlogList = () => {
  const dispatch = useDispatch();
  const byLikes = (b1, b2) => (b2.likes > b1.likes ? 1 : -1);
  const blogs = useSelector((state) => state.blogs.sort(byLikes));

  useEffect(() => {
    dispatch(initializeBlogs());
  }, [dispatch]);

  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>
            Blogs
          </th>
          <th>
            added by
          </th>
        </tr>
      </thead>
      <tbody>
        {blogs.map((blog) => (
          <tr key={blog.id}>
            <td>
              <Link to={`/blogs/${blog.id}`} style={{textDecoration: "none"}}>{blog.title}</Link>
            </td>
            <td>{blog.user.username}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default BlogList;
