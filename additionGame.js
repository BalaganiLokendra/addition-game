let fnum = document.getElementById("firstNumber");
let snum = document.getElementById("secondNumber");
let gameresultelement = document.getElementById("gameResult");
let inputelement = document.getElementById("userInput");
let sucessmsg = "Congratulations! You got it right";
let failmsg = "Please try again!";

function restartgame() {
    let frnum = Math.random() * 100;
    let srnum = Math.random() * 100;
    fnum.textContent = Math.ceil(frnum);
    snum.textContent = Math.ceil(srnum);
    gameresultelement.textContent = "";
    inputelement.textContent = "";
}
restartgame();

function check() {
    let fint = parseInt(fnum.textContent);
    let sint = parseInt(snum.textContent);
    let sum = fint + sint;
    let usersum = parseInt(inputelement.value);
    if (sum === usersum) {
        gameresultelement.textContent = sucessmsg;
        gameresultelement.style.backgroundColor = "#028a0f";
    } else {
        gameresultelement.textContent = failmsg;
        gameresultelement.style.backgroundColor = "#1e217c";
    }
}