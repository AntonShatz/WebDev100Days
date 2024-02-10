



function setDiceImage(imageElement) {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage = "images/dice" + randomNumber + ".png";
    imageElement.setAttribute("src", randomDiceImage);
}

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

setDiceImage(image1);
setDiceImage(image2);

var value1 = parseInt(image1.getAttribute("src").match(/\d+/)[0]);
var value2 = parseInt(image2.getAttribute("src").match(/\d+/)[0]);

if (value1 > value2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (value1 < value2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "It's a Tie!";
}