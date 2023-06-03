import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPostDetails } from '../actions/postDetailsActions';

const PostDetailsPage = ({ dispatch, post, loading, hasError }) => {
  // URL의 path variable(파라미터) 값 찾기
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchPostDetails(id));
  }, [dispatch, id]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (hasError) {
    return <p>some errors...</p>;
  }

  return (
    <div>
      <h1>포스트 상세보기 페이지</h1>
      <h2>{post.title}</h2>
      <h4>post ID: {post.id}</h4>
      <h4>user ID: {post.userId}</h4>
      <p>{post.body}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  post: state.postDetails.post,
  loading: state.postDetails.loading,
  hasError: state.postDetails.hasError,
});

export default connect(mapStateToProps)(PostDetailsPage);
