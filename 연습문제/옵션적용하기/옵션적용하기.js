const box = document.querySelectorAll(".box");
const changeBtn = document.querySelector("#changeBtn");
const inputWidth = document.querySelector(".inputWidth");
const inputHeight = document.querySelector(".inputHeight");
const fs = document.querySelector(".fs");
const bg = document.querySelector(".bg");
const v1 = document.querySelector(".text-input");

//굵게 보통으로 만드는법
// 굵기 
// 처음 HTML 로딩 시 체크된 요소가 없어서 null이 저장된 상태로 고정
// const borderA = document.querySelector("[name=borderA]:checked"); -> 클릭하는 시점에 체크된 요소를 얻어오기 위해서
// name 속성이 fw인 요소 중 체크가 되어있는 요소 1개만 선택
// :checked -> 체크된 요소만 선택(상태 선택자)
// box.style.fontWeight = 