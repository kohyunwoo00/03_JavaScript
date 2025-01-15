const container = document.querySelector("#container");
const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".number");
const phoneList = document.querySelector(".phoneList");
const adds = document.querySelector("#add");
const resetBtn = document.querySelector("#resetBtn");


for(let num of numbers){
  num.addEventListener("click", () => {
   display.innerText += num.innerText;
   
  });
}

  adds.addEventListener("click", ()=>{
    const li = document.createElement("li");
    const sp1 = document.createElement("span");
    const sp2 = document.createElement("span");
    const sp3 = document.createElement("span");
    sp2.textContent = "☆";          
    sp3.innerHTML = "&times;";          
    sp1.innerHTML += display.innerText;
    phoneList.append(li);
    li.append(sp1, sp2, sp3);
    display.innerText ="";
    

    sp2.addEventListener("click", ()=>{
      if(sp2.innerText === "☆"){       
      sp2.innerText = "★"
      sp2.style.color = "orange";
      sp1.style.color = "red";
      }else{
        sp2.innerText = "☆"
        sp2.style.color = "black";
        sp1.style.color = "black";
      }
    });

    sp3.addEventListener("click", ()=>{
      li.innerText="";
    });
  });

resetBtn.addEventListener("click", ()=> {
  display.innerHTML="";
});



