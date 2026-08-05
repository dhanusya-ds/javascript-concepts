// // Synchronous 

// console.log("task 1");
// console.log("task 2");

// // Asynchronous 
// console.log("Start");
// setTimeout(function(){
//     console.log("This runs after 2 seconds");
// },2000);
// console.log("End");

// // setTimeout
// setTimeout(function(){
//     console.log("Hello after 5 seconds")
// },5000);

// // clearTimeout()
// let timer = setTimeout(function(){
//     console.log("This message will not appear");
// },2000);
// clearTimeout(timer);
// console.log("Timeout cancelled");

// // setInterval
// let count = 1;
// let interval = setInterval(function(){
//     console.log("Count:",count);
//     count++;
// },1000);

// // clearInterval
// setTimeout(function(){
//     clearInterval(interval);
//     console.log("Interval Stopped");
// },6000);

// // callback function
// function greet(name, callback){
//     console.log("hello "+ name);
//     callback();
// }
// function message(){
//     console.log("Welcome");
// }
// greet("Nick", message);

// // callback hell
// setTimeout(function(){
//     console.log("Step 1");
//     setTimeout(function(){
//         console.log("Step 2");
//         setTimeout(function(){
//             console.log("Step 3");
//         },1000);
//     },1000);
// },1000);

// // call stack example
// function first(){
//     console.log("First Func");
//     second();
// }
// function second(){
//     console.log("second Func");
// }
// first()

// // event loop
// console.log("start");
// setTimeout(function(){
//     console.log("Timeout Finished");
// },0);
// console.log("End");

// web apis
console.log("Downloading..");
setTimeout(function(){
    console.log("Download Completed");
},4000);
console.log("Please Wait..");