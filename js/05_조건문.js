/* if 예제 - 양수인지 검사 */
function check1(){
  // id가 "input1"인 요소를 얻어와 in1 상수에 저장
  const in1 = document.getElementById("input1");
  // id가 "input1"인 요소에 작성된 값을 얻어와 숫자로 변환하여 val 상수에 저장
  const val = Number(in1.value);

  // 양수가 맞는지 검사
  if(val > 0){
    // 조건식이 true인 경우 수행할 코드;
    alert(`${val} 은 양수 입니다.`); // alert : 브라우저 알림창 띄우기
  }

  // 양수가 아닌 경우
  if(val <= 0){
    alert(`${val} 은 양수가 아닙니다.`);
  }
}

/* 1 ~ 100 사이의 난수를 발생 시켜 홀/짝 판별하기 */
function check2(){
  // 난수 발생 : Math.random();
  // 0.0 <= 난수 < 1.0

  // 1 ~ 100 사이 난수 발생
  // Math.random() -> 0.0 <= 난수 <1.0
  // Math.random() * 100 -> 0.0 * 100 <= 난수 * 100 <1.0 * 100
  //                     -> 0.0 <= 난수 * 100 < 100.0
  // Math.random() * 100 + 1 -> 1.0 <= 난수 * 100 + 1 < 101.0
  
  // 내림 처림 : Math.floor(실수);

  // Math.floor(Math.random() * 100 + 1) -> 1 <= 난수 < 101

  // 1 ~ 100 사이의 난수를발생시켜 randomNumber 변수에 저장
  const randomNumber = Math.floor(Math.random() * 100 + 1);

  // 발생된 난수가 홀수인지 검사
  if(randomNumber % 2 === 1){
    alert(`${randomNumber}은/는 [홀수] 입니다`);
  }
  else { // 짝수인 경우
    alert(`${randomNumber}은/는 [짝수] 입니다`);
  }
}

/* 양수, 음수, 0 판별기 */
function check3(){
  const input3 = document.getElementById("input3");
  const val = Number(input3.value);
  let result; //결과를 저장할 변수 선언(현재 undefined)
  if(val > 0){
    result = "양수";
  }
  else if(val < 0){
    result = "음수";
  }
  else {
    result = "0";
  }
  // if / else if / else에 모두 result 값 대입 코드 작성
  // -> 무조건 result에는 값이 대입되도록 되어있다!!
  alert(`${val}은/는 ${result} 입니다.`);
}

function ageCheck(){
  const inputAge = document.getElementById("inputAge");
  const age = Number(inputAge.value);
  let result;
  if(age >= 0 && age <= 13){
    result = "어린이";
  }
  else if(age >=14 && age <= 19){
    result = "청소년";
  }
  else if(age >= 20 && age <= 120){
    result = "성인";
  }
  else {
    result = "잘못 입력 하셨습니다";
  }
  alert(`${age}은/는 ${result}`);
}

/*  2번째 방법 */
// ageCheck2()은 각자 문제 푼 코드
function ageCheck2(){
  const inputAge = document.getElementById("inputAge");
  const age = Number(inputAge.value); //입력 받은 나이
  let result;
  // 잘못 입력된 경우
  if(age < 0 || age > 120){
    result = "잘못 입력 하셨습니다.";
  } else if(age <= 13){  //(age >= 0 && age <= 13) 같음
    result = "어린이";
  } else if(age <= 19){   //(age <= 14 && age <= 19) 같음
    result = "청소년";
  } else {
    result = "성인";
  }
  alert(result);
}