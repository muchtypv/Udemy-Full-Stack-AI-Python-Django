var start;
var clicked;

window.onload = function() {
    appear();
}

function disappear() {
    document.getElementById("box").style.display ='none';
    clicked = Date.now();
    var reactionTime = (clicked - start)/1000;
    alert(reactionTime.toFixed(2) + ' seconds!');
    var delayTime = 1000 + (Math.random() * 4000);
    setTimeout(appear, delayTime);
}

function appear() {
    dispy = Math.random() * 500;
    dispx = Math.random() * 1000;
    width = (Math.random() * 100) + 20;
    if (Math.random() < 0.5) {
        height = width; // we want a circle
        document.getElementById("box").style.borderRadius = width / 2 + "px";
    } else {
        height = (Math.random() * 100) + 20; // random rectangle
        document.getElementById("box").style.borderRadius = "0px";
    }
    randomColour = "#" + ((1<<24)*Math.random()|0).toString(16);
    document.getElementById("box").style.left = dispx + 'px';
    document.getElementById("box").style.top = dispy + 'px';
    document.getElementById("box").style.width = width + 'px';
    document.getElementById("box").style.height = height + 'px';
    document.getElementById("box").style.backgroundColor = randomColour;
    document.getElementById("box").style.display ='block';
    start = Date.now();
}