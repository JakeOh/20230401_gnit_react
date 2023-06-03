import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { fetchPosts } from '../actions/postsActions';
import Post from '../components/Post';

const PostsPage = ({ dispatch, posts, loading, hasErrors }) => {
  // 리덕스와 connect된 리액트 컴포넌트는 dispatch 함수를 props로 전달받음.
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // 로딩중, 에러, 또는 응답 성공(포스트 목록) 보여주기
  const renderPosts = () => {
    if (loading) {
      return <p>Loading...</p>;
    }
    if (hasErrors) {
      return <p>Some errors...</p>;
    }

    return posts.map((post) => <Post key={post.id} post={post} />);
  };

  // 화면 렌더링
  return (
    <div>
      <h1>포스트 목록</h1>
      <Link to="/">Dashboard</Link>
      {renderPosts()}
    </div>
  );
};

// 리덕스 스토어가 관리하는 state를 전달받아서 페이지 컴포넌트의 props로 전달될 객체를 리턴.
const mapStateToProps = (state) => ({
  posts: state.posts.posts,
  loading: state.posts.loading,
  hasErrors: state.posts.hasErrors,
});

// 리덕스와 리액트를 연결
export default connect(mapStateToProps)(PostsPage);
