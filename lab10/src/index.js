import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import postListReducer from './slices/PostListSlice';
import postDetailsReducer from './slices/PostDetailsSlice';

// RTK(Redux Toolkit)을 사용한 리덕스 스토어 객체 생성:
const store = configureStore({
  // reducer 객체의 속성 이름들(postList, postDetails, ...)은
  // useSelector() Hook을 사용할 때 이용됨.
  reducer: {
    postList: postListReducer,
    postDetails: postDetailsReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
