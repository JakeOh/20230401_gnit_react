// 클래스형 컴포넌트에서 컴포넌트의 상태(state) 관리:
// (1) state라는 이름으로 필드 선언. 상태 관리에 필요한 변수들을 객체 타입으로 초기화.
// (2) 상태를 변경할 때는 Component 클래스에서 상속받은 setState() 메서드를 호출.
//     - setState(nextState): 변경할 상태(state) 객체를 파라미터에 전달.
//     - setState(updater): 상태를 변경할 수 있는 콜백 함수를 파라미터에 전달.
//       update = (prevState) => (nextState)
// (3) setState()가 호출되서 상태가 변경되면
// 리액트가 render() 메서드를 다시 호출해서 화면을 다시 렌더링함.

import { Component } from 'react';

class MyState extends Component {
  // 필드 선언, 초기화 - 클래스 필드를 선언할 때 const, let과 같은 키워드를 사용하지 않음.
  // (1)
  state = {
    count: 0,
  };

  // 메서드(클래스에서 선언하는 함수) 선언 - function 키워드를 사용하지 않음.
  render() {
    return (
      <div>
        <div>Count: {this.state.count}</div>
        <button onClick={this.plusCount}>+</button>
        <button onClick={this.minusCount}>-</button>
      </div>
    );
  }

  minusCount = () => {
    // state 객체의 count 값을 감소.
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  plusCount = () => {
    // state 객체의 count 값을 증가.
    // (2)
    this.setState({ count: this.state.count + 1 });
  };
}

export default MyState;
