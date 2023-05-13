import TodoInsert from './components/TodoInsert';
import { useState } from 'react';
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

  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
  );
}

export default App;
