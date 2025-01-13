const addBtn = document.querySelector("#add");
const v1 = document.querySelector(".input-number1"); 
const sumBtn = document.querySelector("#sum");
const v2 = document.querySelector("#result");


//const v3val = Number(v3,value);
addBtn.addEventListener("click", () => {
  let val = Number(v1.value);

  container.innerHTML = "";
  for(let i=0; i<val; i++){
    const input = document.createElement("input");
    input.className = "input-number2";
    input.type = "number";
    container.append(input);
  }
});

sumBtn.addEventListener("click", () => {
  const inputs = document.querySelectorAll(".input-number2");
  let sum = 0;

  for(let input of inputs){
    sum += Number(input.value);
  }
  alert(`합계 : ${sum}`);
});

