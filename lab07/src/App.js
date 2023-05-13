import TodoInsert from './components/TodoInsert';
import { useCallback, useRef, useState } from 'react';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function App() {
  // App에서 state로 관리하는 변수 - 할 일 목록.
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Todo app 만들기',
      checked: true,
    },
    {
      id: 2,
      text: '스타일 입히기',
      checked: true,
    },
    {
      id: 3,
      text: '기능 완성하기',
      checked: false,
    },
  ]);

  // Todo 아이템이 추가될 때 id로 사용하려는 객체.
  const nextId = useRef(4); // nextId.current의 초깃값이 4.

  // todos 배열에 새로운 Todo 아이템을 생성해 추가하는 함수.
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo)); // state로 관리하는 배열을 변경.
      nextId.current += 1; // 다음 todo 아이템의 id에서 사용할 값.
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />

      {/* state로 관리하는 할 일 목록 배열을 props로 TodoList 컴포넌트에게 전달. */}
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
