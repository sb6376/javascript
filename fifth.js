/*function myFunction(){
    console.log("Welcome to JS.");
    console.log("Hello, how is everything going!");
}
myFunction();

//helps in reducing redundancy(repeatition)

function myFunction(msg){->parameter
    console.log(msg);
}
myFunction("Hello World");->argument

function mFunction(msg,n){
    console.log(msg*n);
}
mFunction("Hello World",100);*/
/*function sum(a, b){
    s=a+b;
    return s;
}
v=sum(3,4);
console.log(v);

function mul(a,b){
    return a*b;
}
//function parameters are local variables and will exist only in the defined function.


//ARROW FUNCTION
const arrowsum=(X, Y)=>{
    console.log(X+Y);
};
const mul=(a,b)=>{
    console.log(a*b); //or return a*b;
}
const printHello = () =>{
     console.log("hello");
};


//forEach loop in Arrays[It is always used for arrays, not strings]
let arr=["pune","delhi","mumbai"];
arr.forEach((val, idx, arr)=>{
    console.log(val.toUpperCase(), idx, arr);
});
//higher order function/method-> forEach because they use other function as parameter or they return other function 
//callback function->it is a function that can be passed as an argument to another function
let num=[67,58,41];
let calcu=(num)=>{
   console.log(num*num);
};
num.forEach(calcu);

//difference between forEach and Map method is that both go to each element to perform the task but Map gives back a new array to us.
//map methods

let num=[1,2,3,4,5];
let newarr=num.map((val)=>{
    return num;
});


//The filter method creates a new array with array elements that pass a test.
let arr=[1,2,3,4,5,6,7,8,9,10];
let evenarr=arr.filter((val)=>{
    return val>=3;
});
console.log(evenarr);
//reduce method perform some operations and reduce the array to a sinle value, then it returns that single value
let arr1=[2,4,6,8];
const output=arr1.reduce((res,curr)=>{
return res>curr?res:curr;
});
console.log(output);

arr=[45,85,12,41,21];
const output=arr.reduce((prev,con)=>{
return prev<con?prev:con;
});
console.log(output);

console.log(newarr);
function hello(message){
    console.log(message)
}
hello("Hello World");
function hello(message){
    console.log(message);
}
let result=hello("hello");
console.log(result);


function add(a,b){
    return a+b;
}
let sum=add;
function avg(a,b,fn){
    return fn(a,b)/2;
}
let result=avg(10,20,add);
console.table(result);


function compareBy(propertyName) {
  return function (a, b) {
    let x = a[propertyName],
      y = b[propertyName];

    if (x > y) {
      return 1;
    } else if (x < y) {
      return -1;
    } else {
      return 0;
    }
  };
}
let products = [
    {name: 'iPhone', price: 900},
    {name: 'Samsung Galaxy', price: 850},
    {name: 'Sony Xperia', price: 700}
];
console.log('Products sorted by name:');
products.sort(compareBy('name'));

console.table(products);


(function(){
    console.log("Helo.");
})();
let person={
    name:"john doe",
    age:25
};
(function(){
    console.log(person.name+' '+person.age);
})(person);


let show = () => console.log('Anonymous function');
let add = (a, b) => a + b;
console.log(add);
 const print=()=>{
    console.log("hello");
 };

 function count(str){
    let count=0;
    for (const char of str){
    if(
        char==="a"||
        char==="e"||
        char==="i"||
        char==="o"||
        char==="u"
    ){
        count++;
    }
 }
 return count;
}
let arr=["pune","delhi","mumbai"];
arr.forEach((val)=>{
    console.log(val.toUpperCase());
});
let num=[1,2,3,4,5];
let newarr=num.map((val)=>{
    return val*val;
});
console.log(newarr);*/
