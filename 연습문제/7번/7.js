const btnContainer = document.querySelector("#btn-container");
const add = document.querySelector("#add");
const reset = document.querySelector("#reset");
const random = document.querySelector("#random");
const container = document.querySelector("#container");
const numbers =document.querySelectorAll(".number");
const numHidden = document.querySelector(".number-hidden");
const box = document.querySelector("#box");

let v0 = 0;
add.addEventListener("click", ()=>{
  for(let number of numbers){
    number.classList.remove("number-hidden");   
  }
  reset.classList.remove("hidden");
  random.classList.remove("hidden");
  add.classList.add("number-hidden");

  for(let number of numbers){
    number.addEventListener("click", ()=>{
      if(number.classList.contains("color")){
        v0--;
        number.classList.remove("color");
      }else{
        if(v0 >=6){
          alert("6까지만 선택할 수 있습니다");
          return;
        }
        number.classList.add("color");
        v0++;
      }
    });
  }
});

reset.addEventListener("click", ()=>{
  for(let number of numbers){
    number.classList.remove("color");
    v0= 0;
  }
});

random.addEventListener("click", ()=>{
  function v1(){
    for(let number of numbers){
      number.classList.remove("color"); // 초기화
      v0 = 0;
    }
    const arr = [];
    for(let i=0; i<6; i++){
      const val = Math.floor(Math.random() *45); 
      if(arr.includes(val)){
        i--;
        continue;
      }
      arr.push(val);
      numbers[val].classList.add("color");
      
    };
    v0 =6
  };


  const interval = setInterval(()=>{
    v1();
  }, 50);

  setTimeout(()=>{
    clearInterval(interval);
  }, 500);
});
