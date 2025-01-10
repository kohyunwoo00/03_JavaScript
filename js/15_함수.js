/* 전달 인자, 매개 변수 확인 */
const input1 = document.querySelector("#input1");
const btn1 = document.querySelector("#btn1");

/** 전달받은 값이 양수/음수/0인지 @param num 판별해서 출력 */
function testFn1(num){
   /* @param num : 전달 받은 숫자 */
  if(num === 0){
    str = "0";
  }else if(num >0){
    str = "양수";
  }else{
    str = "음수";
  }
  alert(`${num}은/는 ${str} 입니다`);
}

/* #btn1이 클릭 되었을 때 */
btn1.addEventListener("click", function(){
  // #input1인 요소에 작성된 값을 얻어와 number 타입으로변화
  const val = Number(input1.value);
  // 함수 호출(입력 값 전달)
  testFn1(val);
});

/** 전달 받은 배열 내 요소의 합 출력하기
 * @param arr : number 만 저장된 1차원 배열
  */
 function sumArr(arr){
  let sum =0;
  for(let num of arr){  // arr 배열에 저장된 요소를 0번 부터 순서대로 하나씩 꺼내 num에 저장
  sum += num;
  }
  alert(`합계 : ${sum}`);
 }

 /* 합계 구하기 */
 const btn2 = document.querySelector("#btn2");
 btn2.addEventListener("click", function(){
  const inputs = document.querySelectorAll("[name = input2]");
  //input에 작성된 값을 얻어와 배열 하나 생성
  const arr = []; // 빈 배열
  for(let input of inputs){
    // 배열.push(값) : 값을 배열 마지막 요소로 추가
    arr.push(Number(input.value));
  }
  // 함수 호출
  sumArr(arr);
 })

/**  확인 함수
 * @param a : 비교(기준) 되는 수  큰수
 * @param b : 확인해야하는 수  작은수 */  
 function multipleFn(a, b){
  let str = ""
  if( a % b ===0){
    str = "맞습니다";
  }else{
    str = "아닙니다";
  }
  alert(`${a}은/는 ${b}의 배수가 ${str}`);
 }

 
 const btn3 = document.querySelector("#btn3");
 btn3.addEventListener("click", function(){
      const v1 = document.querySelectorAll("[name = input3]");  

  const a = Number(v1[0].value);
  const b = Number(v1[1].value);

  multipleFn(a,b);
 });

 /* return 확인 1 */

 /** num의 x 제곱 값을 반환하는 함수
  * @param num : 곱해질 정수
  * @param x : 지수
  * @retrun : num의 x 제곱
   */

 let result = 1; // 곱셉, 나눗셈 시 형향 없는 수 === 1
 function pow(num, x){
  for(let i=0; i<x ; i++){
    result *= num; // result에 num을 계속 곱함
  }
  return result; // 함수 종료 + 호출한 곳으로 result 가지 고돌아감
 }

 /** 제곱의 결과를 문자열로 반화해서 반환하는 함수
  * @param num
  * @param x
  * @param result : num의 x제곱
  * @return : "num의 x제곱은 result 입니다" */ 
 function createStr(num, x, result){
  return `${num}의 ${x}제곱은 ${result}입니다`;
 }

 // 버튼 클릭 시 prompt를 이용해서 정수, 지수 입력 받아 결과 출력
 const btn4 = document.querySelector("#btn4");

 btn4.addEventListener("click", function(){
  const num = Number(prompt("정수 입력"));
  const x   = Number(prompt("지수 입력"));

  alert(createStr(num, x, pow(num, x)));
 });
 
 /** prompt에 입력된 값을 숫자 배열로 바꿔서 반환하는 함수
  * @param num : 입력 받을 수의 개수
  * @param arr : 입력 받을 수가 저장된 배열
  */
 function createArray(num){
  const arr = [];

  for(let i=0; i<num; i++){

   const val = Number(prompt(`${i}번째 인덱스에 대입할 숫자`));
   arr.push(val);  // 배열 마지막 요소로 val 추가
  }
  return arr;
 }

 const btn5 = document.querySelector("#btn5");
 btn5.addEventListener("click", function(){
  const arr = createArray(5); // 생성된 배열을 반환 받아 저장

  // 합계 출력 함수 호출(함수 재사용)
  sumArr(arr);
 });

 /* 함수를 반환하는 함수 */
 function createCounter(){
  let count =5;

  const fn = function(){
  count++;
  return count;
  }
  // 테스트
  //console.log(fn()); // 1
  //console.log(fn()); // 2
  //console.log(fn()); // 3

  return fn; // 함수 반환
 }

  
 const btn6 = document.querySelector("#btn6");
 btn6.addEventListener("click", function(){
  // 반환된 함수를 counter에 저장(함수명 == counter)
  const counter = createCounter();

  console.log(counter());
  console.log(counter());
  console.log(counter());
  console.log(counter());
  console.log(counter());
 });

  /* Closure(클로저)
   - 외부 함수에서 종료된 내부 함수에 서언된 변수를 사용하는 기술
   특징 1 : 데이터 은닉 - 외부에서 직접 접근할 수 없는 상태의 변수를 만들 수 있음 
   특징 2 : 상태 유지 - 외부에서 함수를 수행한 후에도 내부 함수의 변수 값이 변한 상태로 유지됨 */
   
  /* 매개 변수/retrun으로 익명 함수 전달하기 */
const btn7 = document.querySelector("#btn7");
btn7.addEventListener("click", function(){
  const resultFn = testFn7(function(a,b){return a+b;});
  console.log("resultFn(3) :", resultFn(3));
});

function testFn7(otherFn){
  return function(num){
    return otherFn(10, 20) * num;
  }
}

/* 화살표 함수 */
const arrows = document.querySelectorAll(".arrow"); // 버튼 4개

// 화살표 함수 기본 형태
arrows[0].addEventListener("click", () => {
  const sumFn = (a, b, c) => {
    return a + b + c;
  }
  alert(sumFn(50, 99, 1234));
});

// 매개 변수가 1개인 경우
arrows[1].addEventListener("click", ()=>{
  // 2제곱 반환
  const square = num => { // () 생략
    return num * num;
  } 
  alert(square(8989));
});

// {} 내 코드가 1줄만 작성된 경우
arrows[2].addEventListener("click", () => {
  const print = str => console.log(str); // (), {} 생략 가능
  print("안녕하세요??");

  const doubleFn = num => num * 2 // (), return, {} 생략 가능
  print(doubleFn(3)); // 6
});

// object 타입을 return 하는 경우
arrows[3].addEventListener("click", () => {

// 배열 반환(배열은 {}, return 생략 가능)
const fn1 = () => [1,2,3];
console.log(fn1());

// * {k:v, k:v } === JS 객체
// 객체 반환(return, {} 생략 시 구문 오류 발생)
const fn2 =() => {return{name:"홍길동", age:20}};
console.log(fn2());
});

/* function(){} 의 this 확인 */
document.querySelector("#btn8").addEventListener("click", function(){
  console.log(this); // 이벤트가 발생한 요소
});

/* () => {} 의 this 확인 */
document.querySelector("#btn9").addEventListener("click", () => {
  console.log(this); // === window 객체

  /* window 객체란?
   - 창(브라우저) 자체를 나타내는 객체
   - 창(브라우저) 관련 기능을 제공(alert, prompt, setTimeout, setInterval 등 ...) */
});

/* 즉시 실행 함수 확인 */
const str ="A"; // 전역 변수
console.log(str);

(function(){
  const str ="B"; // {} 내 지역 변수

    console.log(str); // B
 })();