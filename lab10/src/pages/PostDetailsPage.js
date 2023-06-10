import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPostDetails } from '../slices/PostDetailsSlice';
import PostDetails from '../components/PostDetails';
import { fetchComments } from '../slices/Comments';
import Comment from '../components/Comment';

const PostDetailsPage = () => {
  const dispatch = useDispatch();
  const {
    post,
    loading: postLoading,
    hasError: postHasError,
  } = useSelector((state) => state.postDetails);

  const {
    comments,
    loading: commentsLoading,
    hasError: commentsHasError,
  } = useSelector((state) => state.comments);

  // 요청 주소에 포함된 path variable(파라미터)를 찾음.
  const { id } = useParams(); // /posts/:id

  useEffect(() => {
    dispatch(fetchPostDetails(id));
    dispatch(fetchComments(id));
  }, [dispatch, id]);

  const renderPostDetails = () => {
    if (postLoading) {
      return <p>로딩중...</p>;
    }

    if (postHasError) {
      return <p>에러...</p>;
    }

    return <PostDetails post={post} />;
  };

  const renderComments = () => {
    if (commentsLoading) {
      return <p>댓글 로딩중...</p>;
    }

    if (commentsHasError) {
      return <p>댓글 로딩 에러...</p>;
    }

    return comments.map((comment) => (
      <Comment key={comment.id} comment={comment} />
    ));
  };

  return (
    <section>
      <h1>포스트 상세보기</h1>
      {renderPostDetails()}

      <h2>댓글 목록</h2>
      {renderComments()}
    </section>
  );
};

export default PostDetailsPage;
