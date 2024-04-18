const btn=document.getElementById("btn");
const boxContainer=document.getElementById("boxes");

btn.addEventListener("click",()=>boxContainer.classList.toggle('big'))
function createBox(){
  for(let i=0;i<4;i++){
    for(let j=0;j<4;j++){
      const box=document.createElement("div");
      box.classList.add("box");
      box.style.backgroundPosition=`${-120*j}px ${-120*i}px`
      boxContainer.appendChild(box);
    }
  }
};
createBox()