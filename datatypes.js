// Primitives

// numbs
let m = 2;
console.log(m);

let n = 1.3;
console.log(n);

let o = Infinity;
console.log(o)

let p = 'something here too' / 2;
console.log(p)

// strings
let s1 = "hello";
console.log(s1);

let s2 = 'javascript';
console.log(s2);

let s3 = `can embed ${s1}`;
console.log(s3);

// booleans
let b1 = true;
console.log(b1);

let b2 = false;
console.log(b2);

//null
let age = null;
console.log(age);

// undefined
let a;
console.log(a);

// Non-primitives

// objects
let obj ={
    type: "company",
    location: "Istanbul"
}
console.log(obj);

// arrays
let a1 = [1, 2, 3, 4, 5];
console.log(a1);

let a2 = [1, "two", { name: "Object" }, [3, 4, 5]];
console.log(a2);

// functions
function wish(name) { return "Happy Birthday, " + name + "!"; }
console.log(wish("Luke"));