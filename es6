// 1. let & const

let age = 20;
age = 22;

const country = "India";

console.log(age);
console.log(country);

// 2. Arrow Function

const greet = () => {
    console.log("Hello JavaScript");
};

greet();

// 3. Arrow Function with Parameters

const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));

// 4. Template Literals

let name = "Dhanusya";
let course = "JavaScript";

console.log(`My name is ${name}`);
console.log(`I am learning ${course}`);

// 5. Default Parameters

function welcome(user = "Guest") {
    console.log(`Welcome ${user}`);
}

welcome();
welcome("Amy");

// 6. Destructuring (Array)

let colors = ["Red", "Blue", "Green"];

let [c1, c2, c3] = colors;

console.log(c1);
console.log(c2);
console.log(c3);

// 7. Destructuring (Object)

let student = {
    studentName: "Dhanusya",
    age: 20,
    department: "AI & DS"
};

let { studentName, age: studentAge, department } = student;

console.log(studentName);
console.log(studentAge);
console.log(department);

// 8. Spread Operator

let arr1 = [1, 2, 3];

let arr2 = [...arr1, 4, 5, 6];

console.log(arr1);
console.log(arr2);

// 9. Rest Operator

function sum(...numbers) {

    let total = 0;

    for (let num of numbers) {
        total += num;
    }

    console.log(total);

}

sum(10, 20, 30, 40);

// 10. for...of Loop

let fruits = ["Apple", "Mango", "Orange"];

for (let fruit of fruits) {
    console.log(fruit);
}

// 11. forEach()

fruits.forEach((fruit) => {
    console.log(fruit);
});

// 12. map()

let numbers = [1, 2, 3, 4, 5];

let square = numbers.map((num) => {
    return num * num;
});

console.log(square);

// 13. filter()

let even = numbers.filter((num) => {
    return num % 2 === 0;
});

console.log(even);

// 14. find()

let result = numbers.find((num) => {
    return num > 3;
});

console.log(result);

// 15. reduce()

let total = numbers.reduce((sum, num) => {
    return sum + num;
}, 0);

console.log(total);

// 16. Classes

class Student {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    display() {
        console.log(this.name);
        console.log(this.age);
    }

}

let s1 = new Student("Dhanusya", 20);

s1.display();

// 17. Optional Chaining

let employee = {
    empName: "John",
    address: {
        city: "Chennai"
    }
};

console.log(employee.address?.city);
console.log(employee.contact?.phone);

// 18. Nullish Coalescing

let username = null;

console.log(username ?? "Guest");

// 19. Enhanced Object Literals

let company = "OpenAI";
let location = "USA";

let details = {
    company,
    location
};

console.log(details);
