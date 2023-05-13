// 새 할일 항목 추가하는 컴포넌트. input의 값을 state로 관리.
const TodoInsert = () => {
  return (
    <form>
      <input type="text" placeholder="할 일 입력" />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoInsert;
