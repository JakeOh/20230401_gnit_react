import axios from 'axios';

// action type 정의
export const GET_POSTS = 'GET_POSTS'; // 포스트 목록 요청(request) 중
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'; // 포스트 목록 응답 성공
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'; // 포스트 목록 응답 에러

// action creator: 액션 객체({type, payload})를 리턴하는 함수
export const getPosts = () => ({
  type: GET_POSTS,
});

export const getPostsSuccess = (posts) => ({
  type: GET_POSTS_SUCCESS,
  payload: posts,
});

export const getPostsFailure = () => ({
  type: GET_POSTS_FAILURE,
});

export const fetchPosts = () => {
  // Thunk 미들웨어에서 사용될 async 함수를 리턴.
  return async (dispatch) => {
    // 목록 요청 중 액션을 스토어의 리듀서에 전달.
    dispatch(getPosts());

    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      );
      const posts = response.data; // 포스트 목록 배열(JSON)

      // 목록 요청 성공 액션을 데이터(payload)와 함께 스토어의 리듀서에 전달.
      dispatch(getPostsSuccess(posts));
    } catch (error) {
      // 목록 요청 실패 액션을 스토어의 리듀서에 전달.
      dispatch(getPostsFailure());
    }
  };
};
