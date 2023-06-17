import { useRef, useState } from 'react';

const Stopwatch = () => {
  // Start 버튼을 클릭했을 때의 시간을 저장하기 위한 state.
  const [startTime, setStartTime] = useState(null);

  // 1/100초마다 측정하는 시간을 저장하기 위한 state.
  const [now, setNow] = useState(null);

  // setInterval을 취소할 때 사용할 ID를 저장하기 위해서.
  const intervalIdRef = useRef(null);

  const handleClickStart = () => {
    const initTime = Date.now();
    setStartTime(initTime);
    setNow(initTime);

    // 1/100초마다 콜백함수의 내용을 실행:
    intervalIdRef.current = setInterval(() => {
      //시간을 새로 측정해서 now state 값을 변경:
      setNow(Date.now());
    }, 10);
  };

  let timePassed; // Start 버튼을 클릭한 이후에 경과한 시간.
  if (startTime !== null && now !== null) {
    timePassed = (now - startTime) / 1000;
  }

  const handleClickStop = () => {
    clearInterval(intervalIdRef.current);
  };

  return (
    <>
      <h2>Stopwatch</h2>
      <button onClick={handleClickStart}>Start</button>
      <button onClick={handleClickStop}>Stop</button>
      <h3>Time: {timePassed}</h3>
    </>
  );
};

export default Stopwatch;
