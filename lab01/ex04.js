// ESNext - ECMAScript2015 이후

// 전개 연산자(spread operator)
const arr1 = [1, 2];
const arr2 = [3, 4, 5];
const combinedArray = [...arr1, ...arr2]; // [1, 2, 3, 4, 5]
console.log(combinedArray);

// one = array[0]; two = array[2]; ...
const [x, y, ...remains] = combinedArray; // 구조분해 할당
console.log(`x = ${x}`);
console.log(`y = ${y}`);
console.log(`remains = ${remains}`);

function f1(...args) {
  const [first, ...others] = args;
  console.log(`first = ${first}`);
  console.log(`others = ${others}`);
}

f1(1, 2, 3);
f1(1, 2, 3, 4, 5);

// 객체 전개 연산자
const obj1 = {
  one: 1,
  two: 2,
  zero: 0,
};
const obj2 = {
  three: 3,
  four: 4,
  zero: -1,
};

const combinedObject = { ...obj1, ...obj2 };
console.log(combinedObject); // { one: 1, two: 2, zero: -1, three: 3, four: 4 }

const combinedObject2 = { ...obj2, ...obj1 };
console.log(combinedObject2);
// 객체에서는 중복된 키 값은 마지막에 사용된 값으로 덮어씀.

// 객체의 구조분해 할당
const { one, two, ...others } = combinedObject;
console.log(`one = ${one}, two = ${two}, others=${others}`);

const employee = {
  empId: 100,
  empName: '홍길동',
  salary: 300,
};

function displayEmployee(e) {
  console.log(`사번: ${e.empId}, 이름: ${e.empName}, 급여: ${e.salary}`);
}

displayEmployee(employee);

// 구조분해 할당을 이용한 함수 argument 선언:
function displayEmployee2({ empId, empName, salary }) {
  console.log(`id: ${empId}, name: ${empName}, salary: ${salary}`);
}
displayEmployee2(employee);
