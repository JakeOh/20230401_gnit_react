import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <section>
        <Link to="/">Dashboard</Link>
        <Link to="/posts">Posts</Link>
      </section>
    </nav>
  );
};

export default Navbar;
