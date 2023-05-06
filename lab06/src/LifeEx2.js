import { Component } from 'react';

// class A {}
// export default A;

export default class LifeEx2 extends Component {
  state = {
    now: new Date(), // 현재 시간 정보를 state로 관리.
    intervalId: null, // setInterval() 함수의 리턴값을 state로 관리.
  };

  render() {
    const { now } = this.state;
    // const now = this.state.now;

    return (
      <>
        <h1>클래스 컴포넌트 생명주기 함수</h1>
        <h2>{now.toLocaleTimeString()}</h2>
        <h3>{now.toLocaleDateString()}</h3>
      </>
    );
  }

  componentDidMount() {
    // 1000ms (= 1s)마다 setInterval 함수에 등록된 콜백을 호출 -> state.now 값을 변경.
    const id = setInterval(() => {
      this.setState({ now: new Date() });
    }, 1000);

    // setInterval에서 리턴한 아이디를 state로 관리:
    this.setState({ intervalId: id });
  }

  componentWillUnmount() {
    const id = this.state.intervalId;
    if (id !== null) {
      clearInterval(id);
    }
  }
}
