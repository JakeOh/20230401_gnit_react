// 함수
// function functionName(param ...) { ... }
function add(x, y) {
  console.log(`x = ${x}, y = ${y}`);
  return x + y;
}

let result = add(1, 2);
console.log(result);

result = add('abc', 1); // JS 함수는 argument 타입을 검사하지 않음.
console.log(result);

result = add(1); // JS 함수는 argument 개수를 검사하지 않음.
console.log(result);

// default argument:
function add2(x = 0, y = 0) {
  return x + y;
}
console.log(add2(1, 2));
console.log(add2());

const myFunc = add2;
console.log(myFunc);
console.log(myFunc(10, 20));

function plusN(n) {
  let f = function (x) {
    return x + n;
  };
  return f;
}

let plusOne = plusN(1);
console.log(plusOne);
console.log(plusOne(100));

let plusTen = plusN(10);
console.log(plusTen(100));

// 화살표 함수(arrow function)
// let multiply = function (x, y) { return x * y; };
let multiply = (x, y) => x * y;
console.log(multiply(2, 3));

//let hello = function () { return '안녕하세요...'; };
let hello = () => '안녕하세요...';
console.log(hello());

function myFilter(arr, func) {
  const result = []; // 빈 배열
  for (let x of arr) {
    if (func(x)) {
      result.push(x);
    }
  }
  return result;
}

const numbers = [1, -2, -3, 4, 5, -6];
result = myFilter(numbers, function (x) {
  return x > 0;
});
console.log(result);

result = myFilter(numbers, (x) => x < 0);
console.log(result);
