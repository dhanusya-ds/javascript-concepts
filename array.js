// Creating an Empty Array
let a = [];
console.log(a);

// Creating array
let numbers = [2, 4 , 8, 12, 16];
console.log(numbers);

// Creating and Initializing an array with values
let a1 = new Array(10, 20, 30);
console.log(a1);

// Accessing
let a2 = ["HTML", "CSS", "JS"];
console.log(a2[0]);
console.log(a2[a2.length-1]); //last ele

// modifying
let a3 = ["HTML", "CSS", "JS"];
console.log(a3);
a3[1]= "Bootstrap";
console.log(a3);

// adding ele
let m = ["HTML", "CSS", "JS"];

// Add Element to the end of Array
m.push("Node.js");
// Add Element to the beginning
m.unshift("Web Development");
console.log(m);

// removing ele
let n = ['Web Development', 'HTML', 'CSS', 'JS', 'Node.js'];
console.log("Original Array: " + n);

// Removes and returns the last element
let lst = n.pop();
console.log("After Removing the last: " + n);

// Removes and returns the first element
let fst = n.shift();
console.log("After Removing the First: " + n);

// length
let o = ['Web Development', 'HTML', 'CSS', 'JS', 'Node.js'];
console.log(o.length);
