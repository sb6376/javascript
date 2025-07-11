//OBJECTS

/*const student={
    fullName: "Shaurya Bhatnagar",
    marks: 95.5,
    printMarks: function(){
        console.log("marks=",this.marks);
    },
};


let arr = ["apple", "mango", "banana"];
console.log(arr); */


/*const employee={
    calcTax1(){
        console.log("The tax rate is 10%");
    },

    //can be written as both(up and down)
    calcTax2: function(){
       console.log("The tax rate is 10%");   
    }
};
const Arjun1={
    salary: 50000,
}
const Arjun2={
    salary: 50000,
}
const Arjun3={
    salary: 50000,
}
Arjun1.__proto__=employee;
Arjun2.__proto__=employee;
Arjun3.__proto__=employee;*/



//CLASSES

/*class toyotacar{
    constructor(brand, milage){
        console.log("object has been created.");
        this.brand=brand;
        this.milage=milage;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
   /* setBrand(brand){
        this.brandName=brand;
    }
}
let fortuner= new toyotacar("fortuner",10);
console.log(fortuner);
let lexus=new toyotacar("lexus",20);
console.log(lexus);
//fortuner.setBrand("fortuner");
//lexus.setBrand("lexus");



//inheritence


class Parent{
    hello(){
        console.log("hello");
    }
}
class Child extends Parent{

}
let obj=new Child();



class person{
    constructor(){
        this.species="homo sapiens";
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}
class engineer extends person{
    work(){
        console.log("solve problems, build something");
    }
}
let shaurya=new engineer();
let p1=new person();



//super keyword

class person{
    constructor(){
        console.log("enter parent constructor");
        this.species="homo sapiens";
    }
    eat(){
        console.log("eat");
    }
}
class engineer extends person{
    constructor(branch){
        console.log("enter child constructor");
        super();
        this.branch=branch;
        console.log("exit child constructor");
    }
    work(){
        console.log("solve problems, build something");
    }
}
let shaurya=new engineer("software engineering");*/



//Error Handling


 let a=5;
 b=10;
 console.log("a=",a);
 console.log("b=",b);
 console.log("a+b=",a+b);
 console.log("a+b=",a+b);
 try{
 console.log("a+c=",a+c);
 } catch(err){
    console.log(err);
 } finally{
    console.log("a-b=",a-b);
 }
 console.log("a+b=",a+b);
 console.log("a+b=",a+b);
 console.log("a+b=",a+b);