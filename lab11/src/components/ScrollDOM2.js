const cats = [];
for (let i = 0; i < 10; i++) {
  cats.push({
    id: i,
    imageUrl: `https://placekitten.com/240/200?image=${i}`,
  });
}

const ScrollDOM2 = () => {
  return (
    <>
      <h2>Scroll DOM 2</h2>
      <nav>
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </nav>
      <div>
        <ul>
          {cats.map((cat) => (
            <li key={cat.id}>
              <img src={cat.imageUrl} alt={`cat ${cat.id}`} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ScrollDOM2;
