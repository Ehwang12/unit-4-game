

//========= crystal number generator ==========// 
    //randomly assign numbers to crystals
    //generate random numbers between 19-120
    //assign the value generated to crystal using id
    //do this for each crystal

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


//======== Your Total Score ===============/
//set "your total score" to zero
    //when crystal clicked update score in div

//if crystal clicked then add to "your total score"
    //when crystal clicked add operand 2 to operand 1

//if your total amount is over the random comp number then stop game 
//announce "you lose"
//add score to loss tracker
//else
//if you score the same number then stop game
//announce "you win"
//add score to win tracker


//=========== Reset Button ===============/
//reset button
//if clicked then reset functions of game
    //reset random comp number
    //reset crystal value assignments




