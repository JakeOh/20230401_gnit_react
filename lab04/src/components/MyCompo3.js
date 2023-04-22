const MyCompo3 = ({ name, age, children }) => {
  // 구조분해 할당(destructuring assignment):
  // const { name, age, children } = props;

  return (
    <>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <div>{children}</div>
    </>
  );
};

export default MyCompo3;
