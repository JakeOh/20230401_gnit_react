console.log("안녕하세요...");

// 변수 선언과 할당
var x = 1;
x = "hello";
console.log(x);
var x = 100; // 같은 이름으로 두번 선언된 것은 아님!
var x;
console.log(x);

// ES2015에서 let(변수 선언), const(상수 선언)가 제공
let y = 123;
//let y; //-> let은 같은 이름으로 변수를 두번 선언할 수 없음.
y = "안녕하세요";

const pi = 3.14;
//pi = 3.1415; //-> 실행 중에 TypeError가 발생.
console.log(pi);

// 문자열 템플릿(string template)
let name = "오쌤";
let age = 16;
// let hello = "안녕하세요, " + name;
let hello = `안녕하세요, ${name}. 제 나이는 ${age}...`;
console.log(hello);

// 연산자
// 비교 연산자 == vs ===
let a = 1; // 숫자 타입 1
let b = "1"; // 문자열 타입 '1'
console.log(a == b); // 자동 타입 변환 후 값 비교
console.log(a === b); // 타입과 값이 모두 같은 지 비교
