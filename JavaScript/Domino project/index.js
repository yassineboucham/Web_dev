
function dominoRandom() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    
    document.getElementsByClassName("img1")[0].setAttribute("src", "./images/dice" + randomNumber1 + ".png");
    document.getElementsByClassName("img2")[0].setAttribute("src", "./images/dice" + randomNumber2 + ".png");

    var resultText;
    if (randomNumber1 > randomNumber2) {
        resultText = "Player 1 wins!";
    } else if (randomNumber1 < randomNumber2) {
        resultText = "Player 2 wins!";
    } else {
        resultText = "Draw!";
    }
    document.querySelector("h1").innerHTML = resultText; 
}
dominoRandom();
