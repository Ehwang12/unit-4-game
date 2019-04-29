$(function() {

//player starting score
let playerScore = 0;
let guessNumber = 0;
var wins = 0;
var loss = 0;





//to start game
function startGame() {
   
    //reset random number generator
    let guessNumber = Math.floor(Math.random() * 101) + 19;
    console.log("random number is ", guessNumber);
    
    //puts random number into div
    $("#compNumber").text(guessNumber);
    
    let numberOptions = Math.floor(Math.random() * 12) + 1;
    console.log("generating: ", numberOptions);
    
    //reset cyrstal value assigments 
    for (let i=0; i<4; i++) {
    
        //variable with random value assignment for each crystal
       
    
        //setting 'data-crystal-value' attribute to each tag that has .crystalBtn class
        $("img").val(numberOptions);
    
        //how to assign four different values to the different crystals.

    }
  }

 
//event listener for crystal
$(".crystalBtn").on("click", function() {
    
    console.log($(".crystalBtn").attr("data-crystal-value"));
  

  });

startGame();

});




























































