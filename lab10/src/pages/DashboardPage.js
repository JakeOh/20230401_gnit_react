import { Link } from 'react-router-dom';

const DashboardPage = () => {
  return (
    <section>
      <h1>Dashboard</h1>
      <p>메인 페이지</p>
      <Link to="/posts">포스트 목록</Link>
    </section>
  );
};

export default DashboardPage;
