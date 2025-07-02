//getAttribute

/*let div=document.querySelector("div");
console.log(div);
let id=div.getAttribute("id");
console.log(id);
let naam=div.getAttribute("class");
console.log(naam);
let p=document.querySelector("p");
console.log(p);
let id2=p.getAttribute("name");
console.log(id2);

//setAttribute
let paraq=document.querySelector("p");
console.log(paraq.setAttribute("name","newPara"));

//style.node

let div=document.querySelector("div");
//div.style //tp be written in console window
div.style.backgroundColor="blue";
div.style.fontSize="26px";
div.innerText="HELLO";
div.style.visibility="hidden";*/

//creating and adding a element in the div tag
let newBtn=document.createElement("button");
newBtn.innerText="click me!";
console.log(newBtn);
let div=document.querySelector("div");
//div.append(newBtn); //ending and inside of div
//div.prepend(newBtn); //starting and inside of div
//div.before(newBtn); //starting and outside of div
//div.after(newBtn); //ending and outside of div

let newHeading=document.createElement("h1");
newHeading.innerHTML="<i>HI, I am new.</i>";
document.querySelector("body").prepend(newHeading);

//removing a node

let para=document.querySelector("p");
para.remove();
newHeading.remove();

//difference between appendChild and removeChild