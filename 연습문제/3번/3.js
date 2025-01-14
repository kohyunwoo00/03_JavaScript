const v1 = document.querySelector("#btn");



v1.addEventListener("click", ()=>{
  // count 클릭 시점에 체크된 .fruit만
  const fruits =document.querySelectorAll(".fruit:checked");
  let str ="";
  let sum=0;
  for(let fruit of fruits){
    // 체크된 체크박스의 부모 요소를 찾은 후 부모 요소의 모든 자식 요소 중 2(span),3(input) 인덱스 요소 접근
    const parent = fruit.parentElement;
    const fruitName = parent.children[1].innerText; // 과일 이름 얻어오기
    const price = parent.children[2].innerText; // 작성된 가격 얻어오기 (시작태그, 종료태그 있으면 innerText)
    const cnt = parent.children[3].value; // 입력된 개수 얻어오기 (input이면 value)

    str +=`${fruitName} ${cnt}개`;
    sum += Number(price) * Number(cnt); // 가격 * 개수
  }
  // 결과 출력
  document.querySelector("#result").innerText = `${str} 총합 ${sum}원`;
});











  
  