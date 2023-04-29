// 클래스형 컴포넌트에서 2개 이상의 state 관리, 이벤트 처리:

import { Component } from 'react';

class MyEvent extends Component {
  state = {
    username: '',
    message: '',
  };

  handleChangeUsername = (e) => {
    // console.log(e.target.value);
    const username = e.target.value;
    // 클래스형 컴포넌트에서 state 변경:
    this.setState({ username }); // { username: username }
  };

  handleChangeMessage = (e) => {
    const message = e.target.value;
    this.setState({ message }); // { message: message }
  };

  handleChange = (e) => {
    // const key = e.target.name;
    // const value = e.target.value;
    // this.setState({ key: value });
    this.setState({ [e.target.name]: e.target.value });
  };

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // Enter 키가 눌렸을 때
      alert(`${e.target.name} - ${e.target.value}`);
    }
  };

  clear = () => {
    this.setState({
      username: '',
      message: '',
    });
  };

  render() {
    // 구조분해 할당:
    const { username, message } = this.state;

    return (
      <div>
        <h1>클래스 컴포넌트 이벤트 처리</h1>

        <div>
          <input
            type="text"
            name="username"
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
          />
          {/* username에서 입력되는 값들이 자동 업데이트 */}
          <input type="text" readOnly value={username} />
        </div>

        <div>
          <input
            type="text"
            name="message"
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
          />
          {/* message에서 입력되는 값들이 자동 업데이트 */}
          <input type="text" readOnly value={message} />
        </div>
        <button onClick={this.clear}>Clear</button>
      </div>
    );
  }
}

export default MyEvent;
