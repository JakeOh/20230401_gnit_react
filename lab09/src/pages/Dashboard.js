import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>여기는 Dashboard 입니다...</p>

      <Link to="/posts">포스트 목록</Link>
    </div>
  );
};

export default Dashboard;
