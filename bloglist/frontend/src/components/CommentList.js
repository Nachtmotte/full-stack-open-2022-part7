import { useState } from "react";
import { useDispatch } from "react-redux";
import { newComment } from "../redux/actions/blogActions";

const CommentList = ({ blog }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  const addComment = () => {
    dispatch(newComment(comment, blog));
    setComment("");
  };

  return (
    <div>
      <h3>Comments</h3>
      <div>
        <input
          value={comment}
          onChange={({ target }) => setComment(target.value)}
          id="comment"
        />
        <button onClick={addComment}>add comment</button>
      </div>
      <ul>
        {blog.comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
