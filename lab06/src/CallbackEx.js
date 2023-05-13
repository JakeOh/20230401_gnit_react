import { useCallback, useState } from 'react';

const CallbackEx = () => {
  const [number, setNumber] = useState('');
  const [list, setList] = useState([]);

  //   const onChange = (e) => {
  //     // TODO:
  //   };

  //   const onInsert = (e) => {
  //     // TODO
  //   };
  // 위와 같이 (이벤트 리스너) 함수들을 선언하는 경우에는
  // 컴포넌트가 다시 렌더링이 될 때마다 새로 만들어지는 함수를 사용하게 됨.
  // 대부분의 경우에는 문제가 없지만,
  // 컴포넌트의 렌더링이 자주 발생하거나 렌더링을 해야 할 컴포넌트 개수가 많아지면
  // 성능 저하를 일으킬 수도 있음.
  // 렌더링 성능을 최적화하기 위해서
  // 컴포넌트가 처음 렌더링될 때 만들어진 함수를 재활용하는 방법을 제공 -> useCallback.

  const onChange = useCallback((e) => setNumber(e.target.value), []);
  //-> 컴포넌트가 처음 렌더링될 때만 onChange 함수가 만들어짐.

  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(Number(number));
      setList(nextList);
      setNumber('');
    },
    [number, list],
  );
  //-> onInsert 함수는 number 상태와 list 상태가 변경될 때만 함수를 생성.

  return (
    <div>
      <h1>useCallback 예제</h1>
      <input type="number" value={number} onChange={onChange} />
      <button onClick={onInsert}>추가</button>
      <ul>
        {list.map((val, i) => (
          <li key={i}>{val}</li>
        ))}
      </ul>
    </div>
  );
};

export default CallbackEx;
