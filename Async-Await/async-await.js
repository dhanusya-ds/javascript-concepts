// Basic async Function
async function greet() {
    return "Hello JavaScript";
}
greet().then(function(result) {
    console.log(result);
});

// await with Promise.resolve()
async function message() {
    let result = await Promise.resolve("Welcome to Async Await");
    console.log(result);
}
message();

// await with setTimeout()
function delay() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Task Completed After 3 Seconds");
        }, 3000);
    });
}
async function display() {
    console.log("Task Started");
    let result = await delay();
    console.log(result);
    console.log("Task Finished");
}
display();

// try...catch
function checkNumber(number) {
    return new Promise(function(resolve, reject) {
        if (number > 0) {
            resolve("Positive Number");
        } else {
            reject("Negative Number");
        }
    });
}
async function check() {
    try {
        let result = await checkNumber(-5);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
check();

// finally
async function example() {
    try {
        let result = await Promise.resolve("Data Loaded");
        console.log(result);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Execution Finished");
    }
}
example();

// Multiple await
function firstTask() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("HTML Completed");
        }, 1000);
    });
}
function secondTask() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("CSS Completed");
        }, 2000);
    });
}
async function learn() {
    let html = await firstTask();
    console.log(html);
    let css = await secondTask();
    console.log(css);
}
learn();