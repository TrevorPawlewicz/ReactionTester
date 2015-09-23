var time = 0; // for random time
var clickedTime;
var createdTime;
var reactionTime; // diff of clicked and created
var topPos;
var leftPos;


function makeShape(){
    createdTime = Date.now();
    time = Math.random();
    time = time * 3000;

    setTimeout(function() {
        var myShape = document.getElementById("shape");

        if (Math.random() > 0.5) {
            myShape.style.borderRadius="100px";
        } else {
            myShape.style.borderRadius="0px";
        }

        topPos = Math.random() * 500;
        leftPos = Math.random() * 500;
        myShape.style.top = topPos + "px";
        myShape.style.left = leftPos + "px";

        myShape.style.backgroundColor=getRandomColor();
        myShape.style.display="block";
        createdTime = Date.now();
    }, time);
};

function getRandomColor() {
    // split('') splits string into individual characters.
    var letters = '0123456789ABCDEF'.split(''); // array of num/letters
    var color = '#'; // to make hex value
    for (var i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
};

document.getElementById("shape").addEventListener("click", function(){
    clickedTime = Date.now();
    reactionTime = (clickedTime - createdTime) / 1000; // turn into seconds
    document.getElementById("time").innerHTML = reactionTime;
    this.style.display = 'none';

    makeShape();
});


makeShape();
