var Wins = 0;
var Losses = 0;
var guessLeft = 10;
var guessSoFar = 0;
var compLetter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var computerChoice = compLetter[Math.floor(Math.random()*compLetter.length)];
var lettersInput = [];

// game start
var resetGame = function(){
    var Wins = 0;
    var Losses = 0;
    var guessLeft = 10;
    var guessSoFar = 0;
}
document.onkeyup = function(event){
    // var lettersInput = [];
    var userGuess = event.key;
    // var lettersInput === computerChoice;

    if(userGuess===computerChoice){
    alert ("You Are The Winner!");
    Wins++;
    $("#wins").text("Wins: " +Wins);
    guessSoFar++;
    $("#guessesNow").text("Your Guesses so far: " + guessSoFar);
    guessLeft--;
    $("#guessesLeft").text("Guess left: " + guessLeft);
    
    }
    else {
    alert("try again");
        Losses++;
        $("#losses").text("Losses: " +Losses);
        guessLeft--;
        $("#guessesLeft").text("Guess left: " + guessLeft);
        guessSoFar++;
        $("#guessesNow").text("Your Guesses so far: " + guessSoFar);
        lettersInput.push(userGuess);
        console.log(lettersInput);
        // $("#playerLetter").text(lettersInput);
        $("#alpha").text(lettersInput);
    }
    if (guessLeft===0){
        alert("Guess again?");
        resetGame();
    }
    }
        resetGame(); 
        // document.getElementById("resetgame").reset();
        // $("#wins").text("Wins: " +Wins);


    // console.log("Losses",Losses);
    // console.log("guessSoFar",guessSoFar);
    // console.log("guessLeft",guessLeft);
    // console.log("Wins",Wins);
 

// console.log($("#wins").text("test"));

// document.getElementbyId( )
// var html =
// document.querySelectorAll;
// 
// document.querySelectorAll(".container"); 
// Wins: " + Wins + "</p>" +;
// document.querySelector("#headername");
