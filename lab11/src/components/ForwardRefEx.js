import { forwardRef, useRef } from 'react';

const ForwardRefEx = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <Navigation handleClick={handleClick} />
      <MyInput ref={inputRef} />
    </>
  );
};

const Navigation = ({ handleClick }) => {
  return (
    <nav>
      <button onClick={handleClick}>클릭</button>
    </nav>
  );
};

const MyInput = forwardRef((props, ref) => {
  return (
    <div>
      <input ref={ref} />
    </div>
  );
});

export default ForwardRefEx;
