import { useRef, useState } from 'react';

const RefVsState = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleClickState = () => {
    setCount(count + 1); // setCount((prev) => prev + 1);
    //-> state가 변경되면 화면이 갱신(re-render)됨!
  };

  const handleClickRef = () => {
    countRef.current++;
    //-> ref는 current 값이 변경되더라도 화면이 갱신(re-render)되지 않음!!
    console.log(countRef.current);
  };

  return (
    <>
      <h2>Ref vs State</h2>

      <h3>State</h3>
      <button onClick={handleClickState}>{count}번 클릭됨.</button>

      <h3>Ref</h3>
      <button onClick={handleClickRef}>{countRef.current}번 클릭됨.</button>
    </>
  );
};

export default RefVsState;
