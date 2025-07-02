/*{
    let a=4;
let b=6;
//arithematic operators
console.log("a=",a,"&b=",b);
console.log("a+b=",a+b);
console.log("-a+b=",-a+b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("b%a=",b%a);
console.log("a**b=",a**b);
a++;
b--;
console.log("a=",a);
console.log("b=",b);
}
{
let a=1;
let b=2;
console.log("++a=",++a);
console.log("--b=",--b);
}
//assignment operators
let a=5;
let b=3;
b-= 2;
a *= 5;
console.log(a);
console.log(b);
console.log(a===b);
console.log(a!==b);
let cond1= a>b;
let cond2= a===6;
console.log(cond1 || cond2);*/
//conditions
/*let mode= "light";
let color;
if(mode==="dark"){
    color="black";
}

if(mode==="light"){
    color="white";
}
console.log(color);
else{
    color="white";
}
console.log(color);
let num=13;
if(num%2==0){
    console.log("even");
} else if(num==1){
    console.log("Invalid number");
} else{
    console.log("odd");
}
let age=2;
result= age>18 ? "adult":"not adult";
console.log(result);
age>18? console.log("adult"):console.log("non adult");
let fruitType="Pears";
switch (fruitType) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
    console.log("Mangoes are $0.56 a pound.");
    break;
  case "Papayas":
    console.log("Papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of this fruit.`);
}
//alert("Hello");
let name=prompt("Hello");
console.log(name);*/
let score=49;
if(score>=90 && score<=100){
    grade="A";
}
else if(score>=70 && score<=89){
    grade="B";
}
else if(score>=60 && score<=69){
    grade="C";
}
else if(score>=50 && score<=59){
    grade="D";
}
else if(score>=0 && score<=49){
    grade="F";
}
console.log(grade);