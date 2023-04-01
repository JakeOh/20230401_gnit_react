// 조건문
let age = 26;
if (age < 20) {
  console.log("미성년");
} else {
  console.log("성인");
}

console.log("-----");

// 삼항 연산자
// (조건식) ? (참인 경우 선택할 값) : (거짓인 경우 선택할 값)
let result = age < 20 ? "미성년" : "성인";
console.log(result);

let x = 10;
if (x > 0) {
  console.log("양수");
} else if (x < 0) {
  console.log("음수");
} else {
  console.log("영");
}

// switch-case 문장
let today = new Date();
console.log(today);
console.log(today.getDay());
switch (today.getDay()) {
  case 0:
    console.log("일요일");
    break;
  case 6:
    console.log("토요일");
    break;
  default:
    console.log("일하는 요일...");
}

let num = "1"; // 문자열
switch (num) {
  case 0:
    console.log("step 0");
    break;
  case 1:
    console.log("step 1");
    break;
  default:
    console.log("unknown");
}
//-> switch-case 문장을 값을 비교할 때 ===(타입 & 값)을 사용!

// 반복문
// for 문장
const arr = [1, 2, 10, 20];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for-in 문장: 배열의 "인덱스"를 순회(iteration)함!
for (let i in arr) {
  console.log(`${i} : ${arr[i]}`);
}

// for-of 문장: 배열의 "원소"를 순회(iteration)함!
for (let el of arr) {
  console.log(el);
}

// while 문장
let i = 1;
while (i <= 5) {
  console.log(`i = ${i}`);
  i++;
}

// do-while
i = 1;
do {
  console.log(`i = ${i}`);
  i++;
} while (i > 5);

// 반복문에서 break vs continue
for (i = 0; i < 5; i++) {
  if (i === 3) {
    break; // 가장 가까운 반복문을 종료.
  }
  console.log(i);
}

for (i = 0; i < 5; i++) {
  if (i === 3) {
    continue; // 이후 문장들을 무시하고 다음 iteration을 계속함.
  }
  console.log(i);
}
