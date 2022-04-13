const Anecdote = ({ anecdote, handleVote }) => (
  <div>
    <h2>
      {anecdote.content} by {anecdote.author}
    </h2>
    <div>
      has {anecdote.votes} votes{" "}
      <button onClick={() => handleVote(anecdote.id)}>vote</button>
    </div>
    <div>
      for more info see <a href={anecdote.info}>{anecdote.info}</a>
    </div>
  </div>
);

export default Anecdote;
