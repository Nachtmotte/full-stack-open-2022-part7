import { useField } from "../hooks";

const AnecdoteForm = (props) => {
  const { reset: resetContent, ...contentProps } = useField("text", "content");
  const { reset: resetAuthor, ...authorProps } = useField("text", "author");
  const { reset: resetInfo, ...infoProps } = useField("text", "info");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNew({
      content: contentProps.value,
      author: authorProps.value,
      info: infoProps.value,
      votes: 0,
    });
  };

  const resetFields = () => {
    resetContent();
    resetAuthor();
    resetInfo();
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...contentProps} />
        </div>
        <div>
          author
          <input {...authorProps} />
        </div>
        <div>
          url for more info
          <input {...infoProps} />
        </div>
        <button type="submit">create</button>
        <button type="reset" onClick={resetFields}>
          reset
        </button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
