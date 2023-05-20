import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      {/*
      <a href="/">Home</a>
      <a href="/about">About</a>
      */}

      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Navigation;
