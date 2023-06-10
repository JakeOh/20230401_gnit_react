import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import postListReducer from './slices/PostListSlice';

// RTK(Redux Toolkit)을 사용한 리덕스 스토어 객체 생성:
const store = configureStore({
  reducer: {
    postList: postListReducer,
  }, // TODO
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
