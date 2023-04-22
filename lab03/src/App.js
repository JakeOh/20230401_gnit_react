import { Fragment } from 'react';
// 컴포넌트에서 CSS 파일의 스타일을 적용하려면 CSS 파일을 임포트.
import './App.css';

// 함수형 컴포넌트
// 함수형 컴포넌트에서 리턴하는 XML이 화면에 렌더링됨.
// 하나의 컴포넌트에 여러개의 HTML 요소들이 있다면 반드시 하나의 부모 요소로 감싸야 함.
// 리액트가 사용하는 VirtualDOM은 컴포넌트 내부는 하나의 DOM 트리 구조로 이루어져 한다는
// 규칙이 있기 때문.
// -> 리액트 v16부터 <Fragment></Fragment>로 컴포넌트의 최상위 요소를 대신할 수 있게 됨.
// -> <Fragment></Fragment>를 간단히 <></> 쓰기도 함.
function App() {
  const name = '홍길동'; // 변수 선언.
  // 자바스크립트 표현식을 XML 안에서 사용하려면 {} 이용.
  const name2 = '리액트.';

  const myStyle = {
    backgroundColor: 'indianred',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 32,
    padding: 16,
  };

  return (
    <>
      <h1>Hello, React!</h1>
      <h2>안녕하세요, {name}</h2>
      // 주석일까요?
      {/* JSX 안에서의 주석 */}
      <div>
        {/* 조건식 ? 참일 때 값 : 거짓일 때 값 */}
        {name2 === '리액트' ? <span>React</span> : <span>Not React</span>}
      </div>
      <div>
        {name2 === '리액트' ? <span>React</span> : null}
        {/* 리액트는 null은 화면에 렌더링하지 않음. */}
      </div>
      {/* 조건이 참일 때만 렌더링하는 요소가 있고, 
      조건이 거짓일 때 렌더링하는 요소가 없는 경우 AND(&&) 연산자를 이용할 수 있음.
      리액트 엔진은 false도 화면에 렌더링하지 않기 때문. */}
      <div>{name2 === '리액트' && <span>React</span>}</div>
      {/* inline style: 
      JSX에서 태그 속성 값을 설정할 때 문자열만 따옴표("")를 사용하고, 
      그 이외의 값들은 표현식 {}를 사용.
      */}
      <div
        style={{
          // JavaScript object
          backgroundColor: 'aqua', // 하이픈(-) 대신에 camel 표기법 사용.
          color: 'white',
          fontSize: 32, // 단위가 없는 경우 '32px'.
          fontWeight: 'bold',
        }}
      >
        {name}
      </div>
      <div style={myStyle}>{name}</div>
      <div className="my-style">{name}</div>
      {/* HTML 속성(attribute) 이름과 다른 경우: 
          class -> className
          for -> htmlFor
      */}
    </>
  );
}

export default App;
