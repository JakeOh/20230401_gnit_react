import TodoListItem from './TodoListItem';

// 할일들의 배열. TodoListItem 컴포넌트들을 보여줌.
const TodoList = () => {
  return (
    <div>
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </div>
  );
};

export default TodoList;
