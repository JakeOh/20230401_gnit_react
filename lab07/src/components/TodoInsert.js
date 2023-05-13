import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';
import { useCallback, useState } from 'react';

// 새 할일 항목 추가하는 컴포넌트. input의 값을 state로 관리.
const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => setValue(e.target.value), []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault(); // form의 기본 동작인 submit을 막음.

      // 상위 컴포넌트 App에서 props로 전달받은 onInsert 함수를 사용해서
      // input에 입력된 value를 전달.
      onInsert(value);
      setValue('');
    },
    [value, onInsert],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="할 일 입력"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
