import { Component } from 'react';
import PropTypes from 'prop-types';

// 클래스형 컴포넌트: React.Component 클래스를 상속하는 클래스를 선언.
// render() 메서드를 작성 - JSX를 리턴.
// 필요한 필드(멤버 변수), 메서드 등을 선언할 수 있음.
// 부모 컴포넌트에서 전달받은 props는 Component 객체의 props 속성에 저장됨.
// 컴포넌트 클래스의 생성자(constructor)는 props를 아규먼트로 전달받고,
// 자식 클래스의 생성자에서는 반드시 부모 클래스의 생성자 super를 가장 먼저 호출하게 되는데,
// super()를 호출할 때 props를 아규먼트로 전달함.

class MyCompo4 extends Component {
  // props 기본값 설정하기 2:
  static defaultProps = {
    name: 'anonymous',
  };

  // props 타입 체크하기
  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
  };

  constructor(props) {
    super(props);
  }

  // render 메서드 정의 - function 키워드를 사용하지 않음!
  render() {
    // 구조분해 할당:
    const { name, age, children } = this.props;

    return (
      <div>
        <h1>Hello, Class Component!</h1>
        <h2>안녕하세요, {name}</h2>
        <div>나이: {age}</div>
        <div>{children}</div>
      </div>
    );
  }
}

// 기본값 설정하기 1:
// MyCompo4.defaultProps = {
//   name: '무명씨',
// };

export default MyCompo4;
