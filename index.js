
//Setting 6th dice

document.getElementsByClassName("img1")[0].setAttribute("src", "./images/dice6.png");
document.getElementsByClassName("img2")[0].setAttribute("src", "./images/dice6.png");


//calculating 1st random number 


var randomNumber1= Math.floor(Math.random() * 6);

//calculating 2nd random number 


var randomNumber2= Math.floor(Math.random() * 6);

//creatung array of dices

var myDicees = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png" ];

//Setting variable dice to left side

var leftDice =myDicees[randomNumber1];
document.querySelectorAll("img")[0].setAttribute("src", leftDice);

//Setting variable dice to right side

var rightDice =myDicees[randomNumber2];

document.querySelectorAll("img")[1].setAttribute("src", rightDice);

//selecting winner

if (randomNumber1>randomNumber2) {
  
    document.querySelector("h1").innerHTML="🚩Player 1 Wins";
}
   else if (randomNumber2 > randomNumber1) {

        document.querySelector("h1").innerHTML="Player 2 Wins🚩";
    }
  
    else {   
    document.querySelector("h1").innerHTML="Draw";}


