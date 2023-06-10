// 포스트 상세보기에 필요한 reducer를 export:

import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// state 초깃값:
const initialState = {
  post: {},
  loading: false,
  hasError: false,
};

// slice 객체 생성:
const postDetailsSlice = createSlice({
  name: 'postDetails',
  initialState,
  reducers: {
    getPostDetailsStart: (state, action) => {
      state.loading = true;
    },
    getPostDetailsSuccess: (state, action) => {
      state.loading = false;
      state.hasError = false;
      state.post = action.payload;
    },
    getPostDetailsFailure: (state, action) => {
      state.hasError = true;
      state.loading = false;
    },
  },
});

// 생성된 slice 객체가 속성으로 가지고 있는 action creator들을 export
export const {
  getPostDetailsStart,
  getPostDetailsSuccess,
  getPostDetailsFailure,
} = postDetailsSlice.actions;

// 생성된 slice 객체가 속성으로 가지고 있는 reducer를 export
export default postDetailsSlice.reducer;

// 포스트 아이디로 포스트 1개를 fetch해서 action 객체를 리턴하는 함수:
export const fetchPostDetails = (id) => {
  return async (dispatch) => {
    dispatch(getPostDetailsStart());

    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
      );

      dispatch(getPostDetailsSuccess(response.data));
    } catch (error) {
      dispatch(getPostDetailsFailure());
    }
  };
};
