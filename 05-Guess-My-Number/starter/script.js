'use strict';
// Identify DOM elements
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const number = document.querySelector('.number');
const highscore = document.querySelector('.highscore');

const guessInput = document.querySelector('.guess');

const againBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.check');

let secretNumber;
let gameOver = false;

// Start round
generateSecretNumber();

// Event Listeners
checkBtn.addEventListener('click', function () {
  checkGuess();
});

againBtn.addEventListener('click', function () {
  resetGame();
});

// Game Functions
function checkGuess() {
  const guess = Number(guessInput.value);
  if (!gameOver) {
    if (!guess) {
      // If no entry
      displayMessage('No number entered!...');
    } else if (guess < 1 || guess > 20 || guess == 0) {
      // if entry is within 1 - 20
      displayMessage('Number is out of range!');
    } else if (guess !== secretNumber) {
      displayMessage(
        guess > secretNumber ? 'Guess is too high!' : 'Guess is too low!'
      );
      decreaseScore();
      if (score.textContent <= 0) endRound();
    } else if (guess === secretNumber) {
      // if entry is secret number
      // update message and number box
      displayMessage('You guessed the secret number!!');
      number.textContent = secretNumber;
      // update gameOver status
      gameOver = true;
      // update highscore
      if (score.textContent > highscore.textContent) {
        highscore.textContent = score.textContent;
      }
      // Change Background Color
      document.body.style.backgroundColor = 'green';
    }
  }
}

function generateSecretNumber() {
  secretNumber = Math.ceil(Math.random() * 20);
  console.log(secretNumber);
}

function decreaseScore() {
  const roundScore = Number(score.textContent) - 1;
  score.textContent = String(roundScore);
}

function resetGame() {
  score.textContent = 20; // reset score
  document.body.style.backgroundColor = ''; // reset background
  displayMessage('Start guessing...'); // reset message
  guessInput.value = ''; // clear guess form
  number.textContent = '?'; // reset secret number box
  generateSecretNumber(); // create new secret number
  gameOver = false; // reset gameOver status
}

function displayMessage(messageString) {
  message.textContent = messageString;
}

function endRound() {
  displayMessage('Game Over, try again! :(');
  gameOver = true;
}
