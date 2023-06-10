const PostDetails = ({ post }) => {
  const { title, body, username, email } = post;

  return (
    <arcticle>
      <h2>{title}</h2>
      <h3>{username}</h3>
      <h4>{email}</h4>
      <p>{body}</p>
    </arcticle>
  );
};

export default PostDetails;
