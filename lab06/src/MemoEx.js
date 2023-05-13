import { useMemo, useState } from 'react';

const getAverage = (numbers) => {
  console.log('getAverage()');
  if (numbers.length === 0) {
    return 0;
  }

  const sum = numbers.reduce((x, y) => x + y, 0);
  return sum / numbers.length;
};

const MemoEx = () => {
  const [number, setNumber] = useState('');
  const [list, setList] = useState([]);

  // const average = getAverage(list);
  //-> input(number state)만 변경이 되도 getAverage() 함수가 호출됨.
  const average = useMemo(() => getAverage(list), [list]);

  const onChange = (e) => setNumber(e.target.value);
  const onClick = (e) => {
    // input에 입력된 값을 숫자로 변환해서 배열에 추가.
    const nextList = list.concat(Number(number));
    // list state를 변경.
    setList(nextList);
    // input을 비움.
    setNumber('');
  };

  return (
    <>
      <h1>useMemo Hooks</h1>
      <input type="number" value={number} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>
        {list.map((val, idx) => (
          <li key={idx}>{val}</li>
        ))}
      </ul>
      <div>평균: {average}</div>
    </>
  );
};

export default MemoEx;
