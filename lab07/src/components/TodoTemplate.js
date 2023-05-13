// 앱 타이틀, 하위 JSX 요소들.
const TodoTemplate = ({ children }) => {
  return (
    <div>
      {/* 앱 타이틀 */}
      <div>일정 관리</div>

      {/* App 컴포넌트에서 children props로 전달받은 내용 JSX */}
      <div>{children}</div>
    </div>
  );
};

export default TodoTemplate;
