import { useDispatch } from "react-redux";
import { deleteBlog, updateBlog } from "../redux/actions/blogActions";
import { setNotification } from "../redux/actions/notificationAction";

const BlogDetails = ({ blog, own }) => {
  const dispatch = useDispatch();

  const removeBlog = (blogToRemove) => {
    const ok = window.confirm(
      `remove '${blogToRemove.title}' by ${blogToRemove.author}?`
    );

    if (!ok) {
      return;
    }

    dispatch(deleteBlog(blogToRemove.id));
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

  const addedBy = blog.user && blog.user.name ? blog.user.name : "anonymous";

  return (
    <div>
      <div>
        <a href={blog.url}>{blog.url}</a>
      </div>
      <div>
        {blog.likes} likes <button onClick={() => likeBlog(blog)}>like</button>
      </div>
      {addedBy}
      {own && <button onClick={() => removeBlog(blog)}>remove</button>}
    </div>
  );
};

export default BlogDetails;
