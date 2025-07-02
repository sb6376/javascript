let btn1=document.querySelector("#btn1");
/*btn1.onclick=(e)=>{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);
    
}

let box=document.querySelector("div");
box.onmouseover=(e)=>{
   console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);
    
}
btn1.addEventListener("click", (e)=>{
    console.log("button1 was clicked-HANDLER1");
   // console.log(e);
});
btn1.addEventListener("click", (e)=>{
    console.log("button1 was clicked-HANDLER2");
  //  console.log(e);
});
const handler3=(e)=>{
    console.log("button1 was clicked-HANDLER3");
   // console.log(e);
};
btn1.addEventListener("click", (e)=>{
    console.log("button1 was clicked-HANDLER4");
   // console.log(e);
});
btn1.removeEventListener("click",handler3);*/

//exercise
let modBtn=document.querySelector("#mode");
let currMode="light";
modBtn.addEventListener("click",()=>{
    if(currMode==="light"){
        currMode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }else{
        currMode="light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(currMode);
});