import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPostDetails } from '../slices/PostDetailsSlice';
import PostDetails from '../components/PostDetails';

const PostDetailsPage = () => {
  const dispatch = useDispatch();
  const { post, loading, hasError } = useSelector((state) => state.postDetails);

  // 요청 주소에 포함된 path variable(파라미터)를 찾음.
  const { id } = useParams(); // /posts/:id

  useEffect(() => {
    dispatch(fetchPostDetails(id));
  }, [dispatch, id]);

  const renderPostDetails = () => {
    if (loading) {
      return <p>로딩중...</p>;
    }

    if (hasError) {
      return <p>에러...</p>;
    }

    return <PostDetails post={post} />;
  };

  return (
    <section>
      <h1>포스트 상세보기</h1>
      {renderPostDetails()}
    </section>
  );
};

export default PostDetailsPage;
