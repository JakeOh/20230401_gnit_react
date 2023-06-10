const Comment = ({ comment }) => {
  const { name, email, body } = comment;

  return (
    <aside className="comment">
      <h3>{name}</h3>
      <h4>{email}</h4>
      <p>{body}</p>
    </aside>
  );
};

export default Comment;
