import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav>
      {/*
      <a href="/">Home</a>
      <a href="/about">About</a>
      
      <a> 태그를 사용하면 현재 보고 있는 페이지의 링크를 클릭할 때 마다 
      새 페이지를 여는 문제가 발생함.
      react-router-dom 패키지의 Link 컴포넌트를 사용하면 현재 페이지를 다시 요청하지 않음.
      */}

      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Navigation;
