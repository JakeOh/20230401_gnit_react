import { createSlice } from '@reduxjs/toolkit';

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
    getCommentsStart: (state, action) => {},
    getCommentsSuccess: (state, action) => {},
    getCommentsFailure: (state, action) => {},
  },
});

// action creator들을 export:
export const { getCommentsStart, getCommentsSuccess, getCommentsFailure } =
  commentsSlice.actions;

// reducer export:
export default commentsSlice.reducer;
