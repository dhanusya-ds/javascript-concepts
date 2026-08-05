// Creating a Promise

let promise = new Promise(function(resolve, reject) {
    let success = true;
    if (success) {
        resolve("Data Loaded Successfully");
    } else {
        reject("Something Went Wrong");
    }
});


// then()

promise.then(function(result) {
    console.log(result);
});


// catch()

promise.catch(function(error) {
    console.log(error);
});


// finally()

promise.finally(function() {
    console.log("Promise Execution Finished");
});


// Promise Chaining

let marks = new Promise(function(resolve, reject) {
    let score = 90;
    if (score >= 50) {
        resolve(score);
    } else {
        reject("Failed");
    }
});

marks
    .then(function(score) {
        console.log("Score :", score);
        return score + 5;
    })
    .then(function(updatedScore) {
        console.log("Grace Mark :", updatedScore);
    })
    .catch(function(error) {
        console.log(error);
    });


// Promise.all()

let p1 = Promise.resolve("HTML");
let p2 = Promise.resolve("CSS");
let p3 = Promise.resolve("JavaScript");

Promise.all([p1, p2, p3]).then(function(result) {
    console.log(result);
});


// Promise.race()

let race1 = new Promise(function(resolve) {
    setTimeout(function() {
        resolve("Runner 1");
    }, 3000);
});

let race2 = new Promise(function(resolve) {
    setTimeout(function() {
        resolve("Runner 2");
    }, 1000);
});

Promise.race([race1, race2]).then(function(result) {
    console.log(result);
});


// Promise.any()

let any1 = Promise.reject("Server 1 Failed");
let any2 = Promise.resolve("Server 2 Success");
let any3 = Promise.resolve("Server 3 Success");

Promise.any([any1, any2, any3]).then(function(result) {
    console.log(result);
});


// Promise.allSettled()

Promise.allSettled([
    Promise.resolve("Completed"),
    Promise.reject("Error"),
    Promise.resolve("Success")
]).then(function(result) {
    console.log(result);
});