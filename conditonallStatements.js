// if statement
const salary = 20000;
if(salary > 5000){
    console.log("Your salary is greater than 5000");
} 

// if else statement
const marks = 45;
if(marks >= 50){
    console.log("You have passed the exam");
}
else{
    console.log("You have failed the exam");
}

// if else if statement
const temperature = 30;
if(temperature > 40){
    console.log("It's too hot outside");
}
else if(temperature > 30){
    console.log("It's a warm day");
}
else{
    console.log("It's a cool day");
}

// switch statement
const color = "Pink";
switch(color){
    case "Pink":
        console.log("Its Pink Color");
        break;
    case "Red":
        console.log("Its Red Color");
        break;
    case "Blue":
        console.log("Its Blue Color");
        break;
    case "Green":
        console.log("Its Green Color");
        break;  
    default:
        console.log("Its not a valid color in this case");
}