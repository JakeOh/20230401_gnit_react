import { useEffect, useState } from 'react';

const LifeEx3 = () => {
  // useState Hooks
  const [now, setNow] = useState(new Date());

  // useEffect(effect, dependencies) Hooks:
  // - effect: 콜백 함수.
  // - dependencies: 의존성 배열.
  // useEffect 함수를 호출하면 effect 콜백 함수가 1번 실행됨.
  // 의존성 배열의 원소 값이 변경될 때마다 콜백 함수가 실행됨.
  // componentDidMount, componentWillUnmount 생명주기 함수들의 기능을 수행.
  useEffect(() => {
    console.log('useEffect');
    const id = setInterval(() => setNow(new Date()), 1000);

    return () => clearInterval(id);
    // useEffect가 리턴하는 콜백은 컴포넌트가 unmount될 때 호출됨.
    // 컴포넌트가 unmount될 때 할 일이 없으면(componentWillUnmount 필요 없으면) null 리턴.
  }, []);

  //   console.log('render...');
  return (
    <>
      <h1>함수 컴포넌트 Hooks</h1>
      <h2>{now.toLocaleTimeString()}</h2>
      <h3>{now.toLocaleDateString()}</h3>
    </>
  );
};

export default LifeEx3;

// function funcName() {}
// export default funcName;
//-> export default function funcName() {}

// export default const fn = () => {} 문법 오류
