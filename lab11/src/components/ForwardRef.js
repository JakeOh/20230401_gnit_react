import { forwardRef, useRef } from 'react';

const ForwardRef = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <h2>다른 컴포넌트 DOM 참조</h2>
      <nav>
        <button onClick={handleClick}>클릭</button>
      </nav>
      {/* <MyInput myRef={inputRef} /> */}
      <MyInput ref={inputRef} />
    </>
  );
};

// forwardRef 함수에게 props와 ref를 아규먼트로 전달받는 함수형 컴포넌트를 전달:
const MyInput = forwardRef((props, ref) => {
  return (
    <>
      <input ref={ref} />
    </>
  );
});

/*
const MyInput = ({ myRef }) => {
  return (
    <>
      <input ref={myRef} placeholder="메시지 입력..." />
    </>
  );
};
*/

export default ForwardRef;
