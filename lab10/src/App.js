import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import PostListPage from './pages/PostListPage';
import PostDetailsPage from './pages/PostDetailsPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/posts" element={<PostListPage />} />
        <Route path="/posts/:id" element={<PostDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
