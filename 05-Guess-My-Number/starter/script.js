'use strict';
// Identify DOM elements
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const numberText = document.querySelector('.number');
const highScoreText = document.querySelector('.highscore');

const guessInput = document.querySelector('.guess');

const againBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.check');

let secretNumber;
let gameOver = false;
let roundScore = 20;
let highScore = 0;

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
    // When there is no input
    if (!guess) {
      displayMessage('No number entered!...');

      // When guess is out of range
    } else if (guess < 1 || guess > 20) {
      displayMessage('Number is out of range!');

      // When guess is not secret number
    } else if (guess !== secretNumber) {
      displayMessage(
        guess > secretNumber ? 'Guess is too high!' : 'Guess is too low!'
      );
      decreaseScore();
      if (roundScore <= 0) endRound();

      // When guess is the secret number
    } else if (guess === secretNumber) {
      displayMessage('You guessed the secret number!!');
      numberText.textContent = secretNumber;
      gameOver = true;
      if (roundScore > highScore) {
        highScore = roundScore;
        highScoreText.textContent = highScore;
      }
      document.body.style.backgroundColor = 'green';
      numberText.style.width = '30rem';
    }
  }
}

function generateSecretNumber() {
  secretNumber = Math.ceil(Math.random() * 20);
  console.log(secretNumber);
}

function decreaseScore() {
  roundScore--;
  score.textContent = roundScore;
}

function resetGame() {
  score.textContent = 20; // reset score
  document.body.style.backgroundColor = ''; // reset background
  numberText.style.width = '15rem'; // reset number box width
  displayMessage('Start guessing...'); // reset message
  guessInput.value = ''; // clear guess form
  numberText.textContent = '?'; // reset secret number box
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
