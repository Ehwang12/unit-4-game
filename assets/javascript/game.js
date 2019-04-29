$(function() {

//Random number generator
let guessNumber = Math.floor(Math.random() *101) + 19;
console.log("random number is ", guessNumber);

//puts random number into div
$('#compNumber').text(guessNumber);

//player starting score
let playerScore = 0;

//for loop that gives each crystal a data value set to numberOptions
for (let i=0; i<4; i++) {

    //variable with random value assignment for each crystal
    let numberOptions = Math.floor(Math.random() * 12) + 1;
    console.log("generating: ", numberOptions);

    //add 'data-crystal-value' attribute to each tag that has .crystalBtn class
    let crystals = $('.crystalBtn').attr('data-crystal-value', numberOptions);

    //append each item to the affected img tags
    $('.crystalBtn').append(crystals);
    
}

$('.crystalBtn').on('click', function() {
        console.log($(this).attr('data-crystal-value'));
})




























});




























































