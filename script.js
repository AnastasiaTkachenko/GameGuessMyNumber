'use strict'; 

let secretNumber = Math.trunc(Math.random()*20)+1; 

let score = 20; 
let highscore = 0; 

const displayMessage = function(message) {
   document.querySelector ('.message').textContent = message; 
}

const displayScore = function(score) {
   document.querySelector ('.score').textContent = score; 
}

const displayBody = function(body) {
   document.querySelector('body').style.backgroundColor = body; 
}

document.querySelector('.check').addEventListener('click', function() {
   const guess = Number(document.querySelector('.guess').value); 
 console.log(guess, typeof guess); 

 // WHEN THERE IS NO INPUT 
if (!guess) {
   displayMessage(' ❌ No Number!'); 

   // WHEN THE NUMBER IS CORRECT 
 } else if (guess === secretNumber) {
   displayMessage('✨ Correct Number!');
   document.querySelector ('.number') .textContent = secretNumber; 
   displayBody('#00c853'); 
   document.querySelector('.number').style.width = '30rem'; 


if (score > highscore) {
   highscore = score; 
   document.querySelector('.highscore').textContent = highscore; 
}

// WHEN THE GUESS IS DIFFERENT FROM THE SECRET NUMBER (IT MEANS IT CAN BE TOO HIGH OR TOO LOW )

 } else if (guess !== secretNumber) {
   displayMessage(guess > secretNumber ? ' 📈 Too high !' : ' 📈 Too low !'); // using ternary operator (if guess is grater than secret number so contidion too high is running it not : the second one) 
   score --;  // score = score -1 
  displayScore(score); 
} else {
   displayMessage(' 💥 You lost the game!');
  displayScore(0);
 }
 }); 

 document.querySelector('.again').addEventListener('click', function () {
   score = 20; 
   secretNumber = Math.trunc(Math.random()*20)+1;
   displayBody('#222'); 
   document.querySelector('.number').style.width = '15rem'; 
   document.querySelector('.number').textContent = '?'; 
   displayMessage('Start guessing ... ');
   displayScore(score);
   document.querySelector('.guess').value = ''; 
   document.querySelector ('.highscore').textContent = 0; 
 
   console.log(body,number,message,score, guess, highscore); 
})