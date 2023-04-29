// 함수형 컴포넌트에서 state 관리/변경, 이벤트 처리:

import { useState } from 'react';

const MyEvent2 = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleChange = (e) => {
    if (e.target.name === 'username') {
      setUsername(e.target.value);
    } else if (e.target.name === 'message') {
      setMessage(e.target.value);
    }
  };

  const clear = (e) => {
    setUsername('');
    setMessage('');
  };

  return (
    <div>
      <h1>함수형 컴포넌트 이벤트 처리</h1>

      <div>
        <input type="text" name="username" onChange={handleChangeUsername} />
        <input type="text" readOnly value={username} />
      </div>

      <div>
        <input type="text" name="message" onChange={handleChangeMessage} />
        <input type="text" readOnly value={message} />
      </div>

      <button onClick={clear}>Clear</button>
    </div>
  );
};

export default MyEvent2;
