// MOUSE EVENTS

// onClick
function clickEvent(){
    document.getElementById("heading").innerHTML="Button Clicked";
}

// ondblclick
function doubleClickEvent(){
    alert("Double Clicked");
}

// onmouseover
function mouseOverEvent(){
    document.getElementById("heading").style.color="purple";
}

//onmouseout
function mouseOutEvent(){
    document.getElementById("heading").style.color="black";
}

// onmousedown
function mouseDownEvent(){
    document.getElementById("heading").innerHTML="Mouse Button Pressed";
}

// onmouseup
function mouseUpEvent(){
    document.getElementById("heading").innerHTML="Mouse Button Released"
}

// onmousemove
function mouseMoveEvent(){
    console.log("Mouse Moving");
}

// oncontextmenu
function rightClickEvent(){
    console.log("Right Click");
}

// KEYBOARD EVENTS

// onkeydown
function keyDownEvent(){
    console.log("Key Down");
}

// onkeyup
function keyUpEvent(){
    console.log("Key Up");
}

// onkeypress
function keyPressEvent(){
    console.log("Key Press");
}

// FORM EVENTS

// change
function changeEvent(){
    console.log("Input Changed");
}

// input
function inputEvent(){
    console.log(document.getElementById("formInput").value);
}

// focus
function focusEvent(){
    document.getElementById("formInput").style.background="lightpink";
}

// blur
function blurEvent(){
    document.getElementById("formInput").style.background="white";
}

// submit
function submitEvent(event){
    event.preventDefault(); //page reloads
    alert("Form Submitted");
}

// reset
function resetEvent(){
    alert("Form Reset");
}

// WINDOW EVENTS

// onload
function loadEvent(){
    alert("Page loaded Successfully");
}

// onresize
window.onresize = function(){
    console.log("Window Resized");
}

// onscroll
window.onscroll = function(){
    console.log("Scrolling");
}

// beforeunload
window.onbeforeunload = function(){
    return "Are You Sure?";
}

// EVENT LISTENER

// addEventListener
document.getElementById("btn").addEventListener("click",function(){
    alert("Button Clicked");
});