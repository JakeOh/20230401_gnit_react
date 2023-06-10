import { Link } from 'react-router-dom';

const PostItem = ({ post }) => {
  return (
    <article>
      <Link to={`/posts/${post.id}`}>
        <h2>{post.title}</h2>
      </Link>
      <p>{post.body.slice(0, 100)}</p>
    </article>
  );
};

export default PostItem;
