var letters = ["a", "b", "c"];
var wins = 0;
var loses = 0;
document.onkeyup = function (event) {
    numberOne = Math.round(Math.random()*26)
guess = letters[numberOne]
console.log(guess);
}

