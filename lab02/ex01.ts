// TS는 타입 주석(type annotation)을 사용
let num1: number = 1;
console.log(`x = ${num1}`);

// TS 파일 실행 1:
//  (1) tsc xyz.ts -> TS를 JS로 변환.
//  (2) node xyz.js -> JS를 node 환경에서 실행.

// TS 파일 실행 2:
//  ts-node xyz.ts -> 변환과 실행을 동시에.

// x = 'hello';
//-> TS에서는 타입이 다른 값을 재할당할 수 없음.

// TS는 타입 추론 기능이 있음. 할당하는 값을 보고 변수의 타입을 결정.
let msg = 'hello';
console.log(msg);

// msg = 123; //-> 다른 타입의 값은 저장할 수 없음.

// TS를 정의할 때 파라미터의 타입은 추론이 안됨. 리턴 타입은 추론이 가능.
const plusOne = (x: number) => x + 1;
console.log(plusOne(10));

const user = {
  id: 1,
  name: 'guest',
};

// 객체가 갖는 프로퍼티들의 타입을 선언 - 객체의 모양 선언.
interface User {
  id: number;
  name: string;
}

function showUser(user: User) {
  console.log(`id=${user.id}, name=${user.name}`);
}

showUser(user);

// Union(합집합) 기능을 사용해서, 간단한 타입들을 조합한 새로운 타입을 선언.
type LockState = 'locked' | 'unlocked';
let isLocked: LockState = 'locked'; //-> 할당 가능한 값이 'locked'와 'unlocked' 뿐.
// isLocked = 'not locked';

// Union(합집합) 기능을 함수 파라미터 타입 주석에서도 활용.
function getLength(x: string | string[]) {
  return x.length;
}

console.log(getLength('hello'));
console.log(getLength(['a', 'b', 'c']));

// 변수의 타입을 알아내고자 할 때 typeof를 사용
// e.g. typeof x === 'string', typeof x === 'number', typeof x === 'undefined'
// typeof x === 'function'
// 배열인 경우에는 Array.isArray(x) 함수를 이용.

function wrap(x: string | string[]) {
  if (typeof x === 'string') {
    return [x];
  }

  return x;
}
