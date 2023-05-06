# Lifecycle Methods

- **`render()`**

  - 리액트 요소(JSX)를 반환.
  - `this.state`와 `this.props`에 접근할 수 있음.
  - 이 메서드 안에서는 이벤트 설정이 아닌 곳에서 `setState()` 메서드를 사용하면 안 되며, 브라우저의 DOM에 접근해서도 안됨.
  - DOM 정보를 가져오거나 `state`에 변화를 줄 때는 `componentDidMount()` 메서드에서 처리해야 함.

- **`constructor(props)`**

  - `state` 초깃값 할당.

- **`static getDerivedStateFromProps(nextProps, prevState)`**

  - React v16.3 부터 새로 생긴 생명주기 메서드.
  - `props`로 전달된 값을 `state`에 동기화시키는 용도로 사용.
  - 컴포넌트가 마운트될 때와 업데이트될 때 호출됨.

- **`componentDidMount()`**

  - 컴포넌트를 만들고, 첫 렌더링을 끝낸 후 실행됨.
  - 다른 자바스크립트 라이브러리, 프레임워크의 함수를 호출하거나 이벤트 등록, 네트워크 요청과 같은 비동기 작업을 처리.

- **`shouldComponentUpdate(nextProps, nextState)`**

  - `props` 또는 `state`를 변경했을 때 리렌더링 여부를 리턴하는 메서드.
  - `true` 또는 `false`를 반환. 메서드를 override하지 않으면 항상 `true`를 반환.

- **`getSnapshotBeforeUpdate(prevProps, prevState)`**

  - React v16.3 부터 새로 생긴 생명주기 메서드.
  - `render`에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출됨.
  - 이 메서드에서 반환하는 값은 `componentDidUpdate()` 메서드의 세번째 파라미터 `snapshot`에 전달됨.
  - 주로 업데이트하기 직전의 값을 참고할 일이 있을 때 활용.

- **`componentDidUpdate(prevProps, prevState, snapshot)`**

  - 렌더링을 완료한 후에 호출됨.
  - 업데이트가 끝난 직후이므로, DOM 관련 처리를 해도 됨.
  - 파라미터 `prevProps`와 `prevState`를 사용해서 컴포넌트가 이전에 가졌던 데이터에 접근할 수 있음.
  - `getSnapshotBeforeUpdate()` 메서드가 반환한 값이 있으면, 파라미터 snapshot에 전달됨.

- **`componentWillUnmount()`**

  - 컴포넌트를 DOM에서 제거할 때 호출됨.
  - 이벤트, 타이머, 직접 생성한 DOM 등 리소스 해제 작업을 수행.

- **`componentDidCatch(error, info)`**

  - React v16에서 새로 도입된 생명주기 메서드.
  - 컴포넌트 렌더링 도중에 에러가 발생했을 때 에러 UI를 보여줌.

## 정리

![컴포넌트 생명주기 메서드 흐름](https://thebook.io/img/080203/188.jpg)
