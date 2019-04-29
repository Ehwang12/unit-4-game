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
    
   
    }
    //console.log("generating: ", numberOptions);
    
    let imageArray = [
        "./assets/css/images/crystal_1.jpg",
        "./assets/css/images/crystal_2.jpg",
        "./assets/css/images/crystal_3.jpg",
        "./assets/css/images/crystal_4.jpg"
    ]
    
    //reset cyrstal value assigments 
    for (let i=0; i<4; i++) {
        var numberOptions = Math.floor(Math.random() * 12) + 1;
        var imageCrystal = $("<img>");
       //for each iteration we'll create a crystal image:
       //assigning class
       imageCrystal.addClass("crystal-image img-fluid mx-.5");
       
       //assigning image src
       imageCrystal.attr("src", imageArray[i]);
    
        //setting 'data-crystal-value' attribute to each crystal
        imageCrystal.attr("data-crystal-value", numberOptions);

        //append crystals to div with id of "crystals"
        $("#crystals").append(imageCrystal);
    
        
    };
  

 
//event listener for crystal
$(".crystal-image").on("click", function() {
    
    console.log($(this).attr("data-crystal-value"));
  

  });

startGame();

});




























































