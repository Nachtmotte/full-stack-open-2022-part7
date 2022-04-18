import { useState } from "react";
import { useDispatch } from "react-redux";
import { newComment } from "../redux/actions/blogActions";

import { Card, ListGroup, Form, Button } from "react-bootstrap";

const CommentList = ({ blog }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  const addComment = () => {
    dispatch(newComment(comment, blog));
    setComment("");
  };

  return (
    <Card style={{ width: "fit-content", margin: "0 auto" }}>
      <Card.Body>
        <Card.Title>Comments</Card.Title>
        <div style={{display: "flex"}}>
          <Form.Control
            type="text"
            value={comment}
            onChange={({ target }) => setComment(target.value)}
            id="comment"
          />
          <Button onClick={addComment}>add</Button>
        </div>
        <ListGroup
          style={{ display: "flex", width: "fit-content" }}
          variant="flush"
        >
          {blog.comments.map((comment) => (
            <ListGroup.Item key={comment.id} style={{ marginBottom: 0 }}>
              - {comment.text}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default CommentList;
