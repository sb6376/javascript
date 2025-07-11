//Asynchronization



/*console.log("one");
console.log("two");
function hello(){
    console.log("hello world");
}
setTimeout(hello, 5000);
console.log("three");
//or
setTimeout(()=>{
    console.log("hey guysss");
}, 2000);*/



//CallBacking
//i can write this function in two ways
/*function sum(a,b){
    console.log(a+b);
}
function calculator(a,b, sumcall){
    sumcall(a,b);
}
calculator(11,12,sum);
//or
function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumcall){
    sumcall(a,b);
}
calculator(1,2,(a,b)=>{
    console.log(a+b);
});




//CALLBACK HELL(NESTING CALLBACK)


//example of nesting if-else loop example
 let age=9;
 if(age>=19){
    if (age>=60){
    console.log("Senior");
    } else{
        console.log("Middle");
    }
 } else{
    console.log("Child");
 }


//this is the example of nested callback or callback hell
    function getData(dataID, getnextData){
       // console.log("data",dataID);
       setTimeout(()=>{
        console.log("data",dataID);
        if(getnextData){
        getnextData();
        }
       },2000);
    }

    getData(1, ()=>{
        getData(2, ()=>{
            getData(3, ()=>{
                getData(4);
            });
        });
    });
    //getData(2);
    //getData(3);*/



    //PROMISES= these are for eventual completion of task. it is an ibject in js. it is a soution to callback hell.
    
    
/*let promise= new Promise((resolve,reject) => {
  console.log("I am a Promise.");
  //resolve(123);
  reject("error");
});*/


//PROMISE CHAINING
//.then->if we want to get some word done after fulfilling the promise, we use .then
//.catch-> if we want to get some work done after getting error, then we use .catch

/*const getPromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("I am a Promise");
       // resolve("success");
       reject("error");
    });
};
let promise=getPromise();
/*promise.then(()=>{
    console.log("promise fulfilled");
});
promise.catch((err)=>{
    console.log("rejected", err);
});



function task(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, delay);
    });
}
// Chaining promises
task('Task 1 completed', 1000)
    .then(() => task('Task 2 completed', 2000))
    .then(() => task('Task 3 completed', 1000));




//Async-> it definitely returns back the promise of a program
//Await-> it pauses the execution of its surrounding async function until promise is settled

async function hello(){
    console.log("hello");
}

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        }, 2000);
    })
};
async function getWeatherData() {
    await api(); 
    await api() ;
}




function getData(dataID){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        console.log("data",dataID);
        resolve("success");
       },2000);
    });
}
async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
}

//IIFE

function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log("data = ", dataId);
            resolve("Success");
            if(getNextData) {
                getNextData();
            }
        }, 2000);
    });
}

(async function () {
    console.log("getting data 1");
    await getData(1);
    console.log("getting data 2");
    await getData(2);
    console.log("getting data 3");
    await getData(3);
}) ();


const p1 = Promise.resolve(1);
const p2 = Promise.reject("Error");

Promise.all([p1, p2])
  .then(values => console.log(values))
  .catch(err => console.log(err)); // Error

/*const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3]).then(values => {
  console.log(values); // [1, 2, 3]
});


const p1 = new Promise(res => setTimeout(() => res("p1"), 100));
const p2 = new Promise(res => setTimeout(() => res("p2"), 50));

Promise.race([p1, p2]).then(result => {
  console.log(result); // p2
});


const p1 = Promise.reject("fail");
const p2 = Promise.resolve("success");
const p3 = Promise.resolve("another");

Promise.any([p1, p2, p3])
  .then(val => console.log(val))  // success
  .catch(err => console.log(err));*/


  const p1 = Promise.resolve("ok");
const p2 = Promise.reject("fail");

Promise.allSettled([p1, p2]).then(results => {
  console.log(results);
});


