import { useRef, useState } from 'react';

const cats = [];
for (let i = 0; i < 10; i++) {
  cats.push({
    id: i,
    imageUrl: `https://placekitten.com/240/200?image=${i}`,
  });
}

const Carousel = () => {
  // 현재 포커스를 가져야 할 이미지의 인덱스를 state로 관리하기 위해서.
  const [index, setIndex] = useState(0);
  const selectedRef = useRef(null);

  const handleClick = () => {
    setIndex(index + 1);
  };

  return (
    <>
      <h2>Carousel</h2>
      <nav>
        <button onClick={handleClick}>Next</button>
      </nav>
      <div>
        <ul>
          {cats.map((cat, i) => (
            <li key={cat.id}>
              <img
                className={index === i ? 'active' : null}
                src={cat.imageUrl}
                alt={`cat ${cat.id}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Carousel;
