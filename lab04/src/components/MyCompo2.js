import PropTypes from 'prop-types';

// 함수형 컴포넌트
// props의 기본값 설정, 타입 체크:

const MyCompo2 = (props) => {
  return (
    <>
      <div>이름: {props.name}</div>
      <div>나이: {props.age}</div>
      <div>{props.children}</div>
    </>
  );
};

// props 기본값 설정
MyCompo2.defaultProps = {
  name: '무명씨',
};

// props 데이터 타입 체크
// props 속성들의 데이터 타입을 검사하고, 선언된 타입과 다를 경우
// 브라우저의 콘솔 창에 경고 메시지를 출력.
MyCompo2.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
};

export default MyCompo2;
