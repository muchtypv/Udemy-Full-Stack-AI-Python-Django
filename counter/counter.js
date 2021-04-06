var counter = 0;
var colours = ["white", "red", "green", "blue"]

function incctr() {
    counter ++;
    document.getElementById("counter").innerHTML = counter;
    document.body.style.backgroundColor =  "rgb(" + (256 - counter * 5) + ", 255, " + (256 - counter * 5) + ")";
}

function decctr() {
    counter --;
    document.getElementById("counter").innerHTML = counter;
    document.body.style.backgroundColor = "rgb(" + (256 - counter * 5) + ", 255, " + (256 - counter * 5) + ")";
}