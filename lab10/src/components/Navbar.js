import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/posts">Posts</Link>
    </nav>
  );
};

export default Navbar;
