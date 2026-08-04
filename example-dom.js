// Selecting Elements

// getElementById()
let heading = document.getElementById("heading");
console.log(heading);

// getElementsByClassName()
let para = document.getElementsByClassName("text");
console.log(para[0].innerHTML);
console.log(para[1].innerHTML);

// getElementsByTagName()
let p = document.getElementsByTagName("p");
console.log(p[0].innerHTML);

// querySelector()
let h = document.querySelector("#heading");
console.log(h.innerHTML);

// querySelectorAll()
let allPara = document.querySelectorAll(".text");
console.log(allPara[0].innerHTML);

// Change Content

function changeHeading(){
    heading.innerHTML="Hello JavaScript";
}

// innerText
heading.innerText="DOM Practice";

// textContent
console.log(heading.textContent);

// Style

function changeColor(){
    heading.style.color="orange";
}

function changeFont(){
    heading.style.fontSize="40px";
}

// Hide / Show

function hideHeading(){
    heading.style.display="none";
}

function showHeading(){
    heading.style.display="block";
}

// Input Value

function showInput(){

    let value=document.getElementById("name").value;

    alert(value);

}

// ClassList

function addClass(){

    heading.classList.add("red");

}

function removeClass(){

    heading.classList.remove("red");

}

function toggleClass(){

    heading.classList.toggle("big");

}

// Create Element

function createParagraph(){

    let newPara=document.createElement("p");

    newPara.innerHTML="New Paragraph Added";

    document.body.appendChild(newPara);

}

// Remove Element

function removeParagraph(){

    document.querySelector(".text").remove();

}

// Events

heading.addEventListener("mouseover",function(){

    heading.style.color="green";

});

heading.addEventListener("mouseout",function(){

    heading.style.color="black";

});