import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PostsPage from './pages/PostsPage';
import PostDetailsPage from './pages/PostDetailsPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:id" element={<PostDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
