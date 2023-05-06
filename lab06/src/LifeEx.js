import { Component } from 'react';

// 생명주기 메서드는 클래스 컴포넌트에서만 사용 가능.
// Component 클래스에서 상속받아서 재정의하는 메서드.
class LifeEx extends Component {
  state = {
    color: null,
  };

  constructor(props) {
    super(props); // 부모 클래스 Component의 생성자를 호출.

    console.log('constructor():', props.color);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps()');
    console.log(' nextProps:', nextProps);
    console.log(' prevState:', prevState);

    return null;
  }

  componentDidMount() {
    console.log('componentDidMount()');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate()');
    console.log(' nextProps:', nextProps);
    console.log(' nextState:', nextState);

    return true;
  }

  getSnapshotBeforeUpdate(prevPorps, prevState) {
    console.log('getSnapshotBeforeUpdate()');

    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate()');
  }

  render() {
    console.log('render()');

    return <h2>Example</h2>;
  }
}

export default LifeEx;
