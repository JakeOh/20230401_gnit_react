import { MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';

// Todo 아이템.
const TodoListItem = () => {
  return (
    <div>
      <div>
        <MdCheckBoxOutlineBlank />
        <div>할 일</div>
      </div>
      <div>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
