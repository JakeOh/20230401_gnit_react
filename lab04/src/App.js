import MyCompo from './components/MyCompo';
import MyCompo2 from './components/MyCompo2';
import MyCompo3 from './components/MyCompo3';
import MyCompo4 from './components/MyCompo4';
import MyEvent from './components/MyEvent';
import MyEvent2 from './components/MyEvent2';
import MyEvent3 from './components/MyEvent3';
import MyState from './components/MyState';
import MyState2 from './components/MyState2';

// props: properties. 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달할 때 사용.
// props를 전달할 때 부모 컴포넌트에서는 XML의 속성(attribute) 값으로 설정.
// props를 전달받을 때 자식 (함수형) 컴포넌트에서는 파라미터에 전달됨.
// 부모 컴포넌트에서 하위 노드를 자식 컴포넌트에게 props로 전달할 수 있음.
// 자식 컴포넌트에서 노드를 전달받을 때는 children 속성 값에 전달됨.

function App() {
  return (
    <>
      <MyEvent3 />
      <hr />
      <MyEvent2 />
      <hr />
      <MyEvent />
      <hr />
      <MyState2 />
      <hr />
      <MyState />
      <hr />
      <MyCompo4 age={16}>
        <span>
          <strong>허균</strong>
        </span>
      </MyCompo4>
      <hr />
      <MyCompo3 name="그린아이티" age={10}>
        <span>
          <strong>아카데미</strong>
        </span>
      </MyCompo3>
      <hr />
      <MyCompo2 age={16}>
        <span>
          <strong>React</strong>
        </span>
      </MyCompo2>
      <MyCompo name="홍길동" age={16} />
    </>
  );
}

export default App;
