import * as Actions from '../actions/postsActions';

// state 초깃값:
const initialState = {
  posts: [], // 포스트 목록(배열)
  loading: false, // 페이지 로딩 중 여부
  hasErrors: false, // 응답 에러 여부
};

// reducer 정의:
// action의 타입에 따라서 전달받은 state를 변경한 새로운 객체를 리턴.
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_POSTS:
      return {
        ...state, // 이전 값 복사
        loading: true,
      };

    case Actions.GET_POSTS_SUCCESS:
      return {
        posts: action.payload,
        loading: false,
        hasErrors: false,
      };

    case Actions.GET_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        hasErrors: true,
      };

    default:
      return state;
  }
};

export default postsReducer;
