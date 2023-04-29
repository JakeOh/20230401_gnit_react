const IterationExample = (props) => {
  console.log(props);
  const items = props.items;

  return (
    <div>
      <h1>List 만들기</h1>
      <ul>
        {items.map((value, idx) => (
          <li key={idx}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default IterationExample;
