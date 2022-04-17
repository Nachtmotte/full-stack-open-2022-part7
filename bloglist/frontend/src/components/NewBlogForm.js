import { useState } from "react";
import { useDispatch } from "react-redux";

import { setNotification } from "../redux/actions/notificationAction";
import { newBlog } from "../redux/actions/blogActions";

import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const NewBlogForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    handleClose();
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
      <div style={{ textAlign: "end", marginBottom: "5px" }}>
        <Button variant="primary" onClick={handleShow}>
          New note
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create new</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{display: "flex", textAlign: "end", justifyContent: "center" }}>
            <table>
              <tbody>
                <tr>
                  <td>Title:</td>
                  <td>
                    <input
                      value={title}
                      onChange={({ target }) => setTitle(target.value)}
                      id="title"
                      placeholder="title of the blog"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Author:</td>
                  <td>
                    <input
                      value={author}
                      onChange={({ target }) => setAuthor(target.value)}
                      id="author"
                      placeholder="author of the blog"
                    />
                  </td>
                </tr>
                <tr>
                  <td>URL:</td>
                  <td>
                    <input
                      value={url}
                      onChange={({ target }) => setUrl(target.value)}
                      id="url"
                      placeholder="url of the blog"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NewBlogForm;
