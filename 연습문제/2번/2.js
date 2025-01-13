const boxes = document.querySelectorAll(".box");
const v1 = document.querySelector("#result");
const rBtn = document.querySelector("#reset");
const numbers = document.querySelectorAll(".number");

for(let number of numbers){
  number.addEventListener("click", (e) => {
    if(v1.innerText.length<10){
    v1.innerText += e.target.innerText
    for(let i=0; i<boxes; i++){
    }
    }else{
      alert("10자 까지만 입력할 수 있습니다");  
    }
    
    
  });
}
rBtn.addEventListener("click", ()=>{
  v1.innerHTML = "";

});


