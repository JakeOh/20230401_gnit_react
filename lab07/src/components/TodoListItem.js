import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

// Todo 아이템.
const TodoListItem = ({ todo, onRemove, onToggle }) => {
  //console.log(todo);
  const { id, text, checked } = todo;

  return (
    <div className="TodoListItem">
      <div
        className={cn('checkbox', { checked })}
        onClick={(e) => onToggle(id)}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={(e) => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
