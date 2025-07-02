/*console.log("Hello JS, How are you? How is it going?");
console.log("I am Shaurya Bhatnagar.")
fullname="Shaurya Bhatnagar";
price=50.05;
age=24;
x=null;
y=undefined;
a=true;
z;
console.log(a);
console.log(y);
console.log(x);
console.log(fullname);
console.log(age);
console.log(price);
{
    let a=12;
    console.log(a);
}
{
    let a=15;
    console.log(a);
}*/
const student={
    fullname : "Shaurya",
    age: 21,
    cgpa:8.7,
    ispass: true
}
console.log(student.fullname);
console.log(student.age);
console.log(student.cgpa);
console.log(student.ispass);
student["age"]=student["age"]+2;
student["fullname"]="Rahul";
console.log(student["fullname"]);
console.log(student["age"]);
console.log(student["cgpa"]);
console.log(student["ispass"]);