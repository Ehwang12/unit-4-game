

//========= crystal number generator ==========// 
    //randomly assign numbers to crystals
    //generate random numbers between 19-120
    //assign the value generated to crystal using id
    //do this for each crystal

    //reference calculator: choosing buttons and assigning random value...

var wins = 0;
var losses = 0;    
    
let crystalNumber1 = Math.floor(Math.random() *12) + 1; 
console.log("Crystal 1: ", crystalNumber1);

let crystalNumber2 = Math.floor(Math.random() *12) + 1; 
console.log("Crystal 2: ", crystalNumber2);

let crystalNumber3 = Math.floor(Math.random() *12) + 1; 
console.log("Crystal 3: ", crystalNumber3);

let crystalNumber4 = Math.floor(Math.random() *12) + 1; 
console.log("Crystal 4: ", crystalNumber4);

//possible variables would be: randomCompNumber, crystalNumbers, winLoseTrackers, winLoseAnnounce, and  
//if you guess over or exactly the number generated 

//========= random number generator ================/
const compNumber = Math.floor(Math.random() * 120) + 19;
console.log("The computer chose: ", compNumber);

//start game by generating random comp number
$("#guessNumber").text(compNumber);
    //log to #guessNumber

//========= Add Event Listener =============/
    //listen/grab for event listener for click

//======== Your Total Score ===============/
//set "your total score" to zero
function initializeGame() {
    crystalNumber1 = "";
    crystalNumber2 = "";
    crystalNumber3 = "";
    crystalNumber4 = "";
    CompNumber = "";


    $("crystalNumber1(?), #crystalNumber2, #, #result").empty();
  }
    //when crystal clicked update score in div 

//if crystal clicked then add to "your total score"
// function addedCrystals() {
//     if () {
//         totalScore = $(this).value() + $(this).value; 
//     }
// }


//=========== Crystal Event Listener =============/
//when crystal clicked add operand 2 to operand 1
$(".crsytalBtn").click(function() {
    //add value to "your total score"
    //updateDisplay with newly added score
})

//if your total amount is over the random comp number then stop game 
//announce "you lose"
function announcer() {
    if (//your total score > random generated number ) {}
    $("").text("You Lose!");
} else {
    $("").text("You Win!");
}
//add score to loss tracker
function lossTracker() {
    $("#result").text("You Win!");
    wins++;
  } else {
    $("#result").text("You Lose!");
    losses++;
    //stop game function
  }
  console.log("wins ", wins, "losses ", losses);

//else
//if you score the same number then stop game
//announce "you win"
//add score to win tracker
function resetGamebtn() {
    //crystalBtn = $(this).value('new value')/ reassign new value;
    //random number = generate new random number;
} 


//=========== Reset Button ===============/
//reset button
function placeholder() {
    
}
//if clicked then reset functions of game
    //reset random comp number
    //reset crystal value assignments

//============ other notes =================/
//empty strings evaluate to false
// .pic > img { grabs direct child of parent class - overrides specificity



