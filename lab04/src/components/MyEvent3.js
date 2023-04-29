// 함수형 컴포넌트 - state 초깃값을 객체로 사용하기:

import { useState } from 'react';

const MyEvent3 = () => {
  const [form, setForm] = useState({
    username: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form, // 기존의 form 상태가 가지고 있던 값들을 복사.
      [e.target.name]: e.target.value, // username 또는 message 값을 변경.
    });
  };

  return (
    <div>
      <h1>객체 state 초깃값</h1>

      <div>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={handleChange}
        />
        <input type="text" readOnly value={form.username} />
      </div>

      <div>
        <input
          type="text"
          name="message"
          placeholder="message"
          onChange={handleChange}
        />
        <input type="text" readOnly value={form.message} />
      </div>

      <button>Clear</button>
    </div>
  );
};

export default MyEvent3;
