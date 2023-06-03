import axios from 'axios';

// action types:
export const GET_POST_DETAILS = 'GET_POST_DETAILS'; // 상세보기 요청 중
export const GET_POST_DETAILS_SUCCESS = 'GET_POST_DETAILS_SUCCESS'; // 상세보기 요청 성공
export const GET_POST_DETAILS_FAILURE = 'GET_POST_DETAILS_FAILURE'; // 상세보기 요청 실패

// action = type + payload
// action creators:
export const getPostDetails = () => ({
  type: GET_POST_DETAILS,
});

export const getPostDetailsSuccess = (post) => ({
  type: GET_POST_DETAILS_SUCCESS,
  payload: post,
});

export const getPostDetailsFailure = () => ({
  type: GET_POST_DETAILS_FAILURE,
});

export const fetchPostDetails = (id) => {
  return async (dispatch) => {
    dispatch(getPostDetails());

    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
      );
      const post = response.data;

      dispatch(getPostDetailsSuccess(post));
    } catch (error) {
      dispatch(getPostDetailsFailure());
    }
  };
};
