import { useState } from "react";
import { useDispatch } from "react-redux";

import { setNotification } from "../redux/actions/notificationAction";
import { newBlog } from "../redux/actions/blogActions";

const NewBlogForm = ({ toggleVisibility }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    createBlog({ title, author, url, likes: 0 });
    setAuthor("");
    setTitle("");
    setUrl("");
  };

  const createBlog = async (blog) => {
    try {
      await dispatch(newBlog(blog));
      dispatch(
        setNotification(
          `a new blog '${blog.title}' by ${blog.author} added`,
          "info",
          5
        )
      );
      toggleVisibility();
    } catch (error) {
      dispatch(
        setNotification(
          "creating a blog failed: " + error.response.data.error,
          "alert",
          5
        )
      );
    }
  };

  return (
    <div>
      <h2>Create new</h2>

      <form onSubmit={handleSubmit}>
        <div>
          title
          <input
            value={title}
            onChange={({ target }) => setTitle(target.value)}
            id="title"
            placeholder="title of the blog"
          />
        </div>
        <div>
          author
          <input
            value={author}
            onChange={({ target }) => setAuthor(target.value)}
            id="author"
            placeholder="author of the blog"
          />
        </div>
        <div>
          url
          <input
            value={url}
            onChange={({ target }) => setUrl(target.value)}
            id="url"
            placeholder="url of the blog"
          />
        </div>
        <button id="create-butto" type="submit">
          create
        </button>
      </form>
    </div>
  );
};

export default NewBlogForm;
