import { useRef } from 'react';

const cats = [];
for (let i = 0; i < 10; i++) {
  cats.push({
    id: i,
    imageUrl: `https://placekitten.com/240/200?image=${i}`,
  });
}

const ScrollDOM2 = () => {
  const itemsRef = useRef(new Map());

  // 콜백 함수를 이용해서 ref에 DOM 노드를 참조하는 방법:
  const addNode = (id, node) => {
    const map = itemsRef.current;
    map.set(id, node); // map에 key가 id이고 value가 node인 요소를 추가.
    // console.log(map);
  };

  const moveTo = (id) => {
    const map = itemsRef.current;
    const node = map.get(id);
    node.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  return (
    <>
      <h2>Scroll DOM 2</h2>
      <nav>
        <button onClick={() => moveTo(0)}>1</button>
        <button onClick={() => moveTo(5)}>2</button>
        <button onClick={() => moveTo(9)}>3</button>
      </nav>
      <div>
        <ul>
          {cats.map((cat) => (
            <li key={cat.id} ref={(node) => addNode(cat.id, node)}>
              <img src={cat.imageUrl} alt={`cat ${cat.id}`} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ScrollDOM2;
