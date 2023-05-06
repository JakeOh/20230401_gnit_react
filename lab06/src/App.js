import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import LifeEx from './LifeEx';
import LifeEx2 from './LifeEx2';

function App() {
  const [color, setColor] = useState('#000000');

  const makeRandomColor = () => {
    // Math.random() -> 0 ~ 1 난수
    // Math.random() * 16777215 -> 0 ~ 16777215
    const nextColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    // console.log(nextColor);
    setColor(nextColor);
  };

  return (
    <div className="App">
      <LifeEx2 />

      <hr />

      <h1>Lifecycle Methods</h1>
      <button onClick={makeRandomColor}>임의 색상</button>
      <LifeEx color={color} />
    </div>
  );
}

export default App;
