$(function() {

//Random number generator
let guessNumber = Math.floor(Math.random() * 101) + 19;
console.log("random number is ", guessNumber);

//puts random number into div
$('#compNumber').text(guessNumber);

//player starting score
let playerScore = 0;

var wins = 0;
var loss = 0;


class crystalBox {
    constructor() {


  }
}

function startGame() {
    //reset cyrstal value assigments
    //reset random number generator



}
//for loop that gives each crystal a data value set to numberOptions
for (let i=0; i<4; i++) {

    //variable with random value assignment for each crystal
    let numberOptions = Math.floor(Math.random() * 12) + 1;
    console.log("generating: ", numberOptions);

    let crystals = $('.crystalBtn')
    //setting 'data-crystal-value' attribute to each tag that has .crystalBtn class
    crystals.attr('data-crystal-value', numberOptions);

    //append each item to the affected img tags
    $('.crystalBtn').append(crystals);
    
    
}

$('.crystalBtn').on('click', function() {
        
    let crystalValue = $(this).attr(numberOptions);
        
        //converting string value into number 
        crystalValue = parseInt(crystalValue);

        //adds crystal value to player score
        playerScore += crystalValue; 

        //display new total score 
        $('#yourScore').html(playerScore);

        //if player wins
        if(playerScore === guessNumber) {
          
            $('#winLoseAnnounce').html('<h2>You Won!</h2>');

            wins++;
        
        } else if (playerScore >= guessNumber) {
            
            $('#winLoseAnnounce').text('<h2>You Lost!</h2>');

            loss++;

            startGame();
        }
    });

startGame();

});




























































