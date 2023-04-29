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
            onChange={this.handleChangeUsername}
          />
          {/* username에서 입력되는 값들이 자동 업데이트 */}
          <input type="text" readOnly value={username} />
        </div>

        <div>
          <input type="text" name="message" />
          {/* message에서 입력되는 값들이 자동 업데이트 */}
          <input type="text" readOnly value={message} />
        </div>
      </div>
    );
  }
}

export default MyEvent;
