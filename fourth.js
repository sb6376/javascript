/*let arr1=[89,98,74,45,85];
console.log(arr1);
console.log(typeof arr1);
console.log(arr1.length);
let arr2=["ABC","DEF","GHI","JKL","MNO","PQR","STU"];
console.log(arr2);
console.log(typeof arr2);
console.log(arr2.length);
console.log(arr2[3]);
arr1[2]=66;
console.log(arr1);
//strings are immutable(not changable) but arrays are mutable(changable)
//looping of arrays(loops->itrables[strings, objects,arrays])
for(let idx=0; idx<arr2.length; idx++){
    console.log(arr2[idx]);
}
for(let ar of arr2){
    console.log(ar.toLowerCase());
}
//Finding sum of given marks in array

let marks=[89,87,99,86,45,97];
let sum=0;
let avg;
for(let val of marks){
   console.log(sum=sum+val);
    console.log(avg=sum/marks.length);
}
//push,pull,toString
let food=["chips","apple","pepsi","mango","chips"];
food.push("burger","pizza");
console.log(food, food.length);
let del=food.pop();
food.pop();
console.log(food, food.length);
console.log(del);
console.log(food.toString());*/

//concat,shift,unshift,slice,splice
let h1=[1,2,3,4,5,6,7];
//let h2=[6,7,8,9];
//let h=h1.concat(h2);
//console.log(h); 
console.log(h1.shift());
console.log(h1);
h1.unshift(10);
console.log(h1);
console.log(h1.slice(1,4));
h1.splice(2,2,101,102);
console.log(h1);