import { useRef } from 'react';

const ScrollDOM = () => {
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);

  const handleClick = (ref) => {
    // img 요소의 참조(ref)를 찾아서 스크롤 메서드를 호출:
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  return (
    <>
      <h2>Scroll DOM</h2>
      <nav>
        <button onClick={(e) => handleClick(firstRef)}>1</button>
        <button onClick={(e) => handleClick(secondRef)}>2</button>
        <button onClick={(e) => handleClick(thirdRef)}>3</button>
      </nav>
      <div>
        <ul>
          <li>
            <img
              ref={firstRef}
              src="https://placekitten.com/400/300?image=1"
              alt="cat 1"
            />
          </li>
          <li>
            <img
              ref={secondRef}
              src="https://placekitten.com/400/300?image=2"
              alt="cat 2"
            />
          </li>
          <li>
            <img
              ref={thirdRef}
              src="https://placekitten.com/400/300?image=3"
              alt="cat 3"
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default ScrollDOM;
