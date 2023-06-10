import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// state 초깃값:
const initialState = {
  comments: [],
  loading: false,
  hasError: true,
};

// slice 객체 생성:
const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    getCommentsStart: (state, action) => {
      state.loading = true;
    },
    getCommentsSuccess: (state, action) => {
      state.loading = false;
      state.hasError = false;
      state.comments = action.payload;
    },
    getCommentsFailure: (state, action) => {
      state.loading = false;
      state.hasError = true;
    },
  },
});

// action creator들을 export:
export const { getCommentsStart, getCommentsSuccess, getCommentsFailure } =
  commentsSlice.actions;

// reducer export:
export default commentsSlice.reducer;

export const fetchComments = (postId) => {
  return async (dispatch) => {
    dispatch(getCommentsStart());

    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
      );

      dispatch(getCommentsSuccess(response.data));
    } catch (error) {
      dispatch(getCommentsFailure());
    }
  };
};
