// 함수형 컴포넌트에서 상태(state) 관리/변경:
// (1) useState(initValue) 함수를 호출.
//     - state의 초깃값을 파라미터에 전달.
//     - 원소가 2개인 배열을 리턴.
//       배열의 첫번째 원소는 현재 상태 값. 두번째 원소는 상태 변경 함수.

import { useState } from 'react';

const MyState2 = () => {
  const [value, setValue] = useState(0);

  const plusValue = () => {
    // setValue(nextValue);
    // 새로운 값을 파라미터에 전달.
    setValue(value + 1);
  };

  const minusValue = () => {
    // setValue(updater);
    // updater 함수를 파라미터에 전달.
    setValue((prevValue) => prevValue - 1);
  };

  return (
    <div>
      <div>Count: {value}</div>
      <button onClick={plusValue}>+</button>
      <button onClick={minusValue}>-</button>
    </div>
  );
};

export default MyState2;
