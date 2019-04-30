$(function() {

//player starting score
var playerScore = 0;
var guessNumber;
var wins = 0;
var loss = 0;

//to start game
function startGame() {
    
    $("#crystals").empty();

    //set playerScore to 0
    playerScore = 0;
   
    //reset random number generator
    guessNumber = Math.floor(Math.random() * 101) + 19;
    console.log("comp number is ", guessNumber);
    
    //puts random number into div
    $("#compNumber").text(guessNumber);
    
    let imageArray = [
        "./assets/css/images/crystal_1T.png",
        "./assets/css/images/crystal_2T.png",
        "./assets/css/images/crystal_3T.png",
        "./assets/css/images/crystal_4T.png"
    ]
    
    //reset cyrstal value assigments 
    for (let i=0; i<4; i++) {
        var numberOptions = Math.floor(Math.random() * 12) + 1;
        var imageCrystal = $("<img>");
       //for each iteration we'll create a crystal image:
       //assigning class
       imageCrystal.addClass("crystal-image img-fluid justify-content-center my-4 mx-auto");
       
       //assigning image src
       imageCrystal.attr("src", imageArray[i]);
    
        //setting 'data-crystal-value' attribute to each crystal
        imageCrystal.attr("data-crystal-value", numberOptions);

        //append crystals to div with id of "crystals"
        $("#crystals").append(imageCrystal);
    
    }
}
startGame();
//event listener for crystal
$(document).on("click", ".crystal-image", function() {
    
    var crystalValue = ($(this).attr("data-crystal-value"));
    
    //no cheating now...
    //console.log($(this).attr("data-crystal-value"));
   
    //converting string value into number 
    crystalValue = parseInt(crystalValue);

    //adds crystal value to player score
    playerScore += crystalValue; 

    //display new total score 
    $("#yourScore").text(playerScore);

    if (playerScore == guessNumber) {
        
        //show winning banner
         $("#winLoseAnnounce").html("<h2>You Won!</h2>");

         wins++;
        
         //update score
         $("#winBox").text(wins);

         startGame();

    } else if (playerScore > guessNumber) {

        //show losing banner
        $("#winLoseAnnounce").html("<h2>You Lost!</h2>");

        loss++;

        //update score
        $("#lossBox").html(loss);

        startGame();

    }
  })
  
//audio setup
// var music = $("#myAudio"); 

// function playAudio() { 
//   music.play(); 
// } 

// function pauseAudio() { 
//   music.pause(); 
// } 

});




























































