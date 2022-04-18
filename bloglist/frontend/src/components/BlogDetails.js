import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteBlog, updateBlog } from "../redux/actions/blogActions";
import { setNotification } from "../redux/actions/notificationAction";
import CommentList from "./CommentList";

const BlogDetails = ({ blog }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const removeBlog = (blogToRemove) => {
    const ok = window.confirm(
      `remove '${blogToRemove.title}' by ${blogToRemove.author}?`
    );

    if (!ok) {
      return;
    }

    dispatch(deleteBlog(blogToRemove.id));
    navigate("/");
  };

  const likeBlog = (blogToLike) => {
    const liked = {
      ...blogToLike,
      likes: (blogToLike.likes || 0) + 1,
      user: blogToLike.user.id,
    };
    dispatch(updateBlog(liked.id, liked));
    dispatch(
      setNotification(
        `you liked '${liked.title}' by ${liked.author}`,
        "info",
        5
      )
    );
  };

  if (!blog) return null;

  const own = blog.user && user.username === blog.user.username;

  return (
    <div>
      <Card style={{ width: "fit-content", margin: "10px auto 10px auto" }}>
        <Card.Body>
          <Card.Title>{blog.title}</Card.Title>
          <div>
            <a href={blog.url}>{blog.url}</a>
          </div>
          <div>
            {blog.likes} likes{" "}
            <Button variant="success" size="sm" onClick={() => likeBlog(blog)}>
              like
            </Button>
          </div>
          {!own && `added by ${blog.user.name}`}
          {own && (
            <Button
              variant="danger"
              size="sm"
              onClick={() => removeBlog(blog)}
              style={{ marginTop: "5px" }}
            >
              remove
            </Button>
          )}
        </Card.Body>
      </Card>

      <CommentList blog={blog} />
    </div>
  );
};

export default BlogDetails;
