/*for(let i=1; i<=100; i++){
    console.log("Hello");
}
console.log("Loop has ended.");*/
/*let sum=0;
let n=100;
for(let i=1; i<=n; i++){
    sum+=i;
    console.log(sum);
}


for(var i=1; i<=5; i++){
    console.log("i= ",i);
}
console.log(i);
let i=1;
while(i<=5){
    console.log("Hello");
    i++;
}


let i=20;
while(i<=10){
    console.log("Hello");
    i++;
}

let i=1;
do{
    console.log("i= ",i);
   i++;
} while(i<=50);


let str="Hello";
let size=0;
for(let i of str){
    console.log("i=",i);
    size++;
}
console.log("string size=",size);



let student={
    name:"Shaurya",
    cgpa:9.0,
    age:21,
    ispass:true
};
for(let key in student){
    console.log("key=",key,"value=",student[key]);
}
//Practice question

 for(let num=0; num<=100; num++){
    if(num%2 !==0){
        console.log("num=",num);
    }
 }


 let gamenum=25;
let usernum=prompt("Guess the game number: ");
while(usernum != gamenum){
    usernum=prompt("You guess wrong number, try again: ");
}
console.log("Congratulations, you entered correct number");

//strings
let str="Shaurya Bhatnagar";
let str2="Hello World";
console.log(str[8], str2.length); */

//string temelate literals

/*let splstr=`This is tempelate literal ${1+2+3}`;
console.log(splstr);
console.log(typeof splstr);
let obj={
    item:"pen",
    price: 10,
};
let output=`the cost of ${obj.item} is ${obj.price} rupees.`;
console.log(output);*/
let str="    ShauryaBhatnagar   ";
let str2="Hello World";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());
console.log(str.slice(2,8));
console.log(str.concat(str2));
console.log(str.replace("a","c"));
console.log(str.replaceAll("a","c"));
console.log(str.charAt(5));