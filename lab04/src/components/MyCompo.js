// 함수형 컴포넌트
// 컴포넌트의 이름은 대문자로 시작하고 카멜 표기법을 사용.
// HTML 태그 이름들과 구분하기 위해서.

// function MyCompo() {
//     return <></>;
// }

// 함수형 컴포넌트에서 부모 컴포넌트가 전달한 props를 저장하기 위한 파라미터를 선언.
const MyCompo = (props) => {
  console.log(props);
  // 부모 컴포넌트에서 {attrName: attrVale, ...} 객체를 파라미터에 전달.

  return (
    <>
      <h1>Hello, {props.name}</h1>
      <h2>나이: {props.age}</h2>
    </>
  );
};

export default MyCompo;
