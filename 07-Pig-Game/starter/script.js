'use strict';
// Identify page elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');

const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Declare player objects
const player1 = {
  totalScore: 0,
  currentScore: 0,
  totalPointsUi: score0El,
  currentPointsUi: currentScore0El,
  playerEl: player0El,
  name: 'Player 1',
};

const player2 = {
  totalScore: 0,
  currentScore: 0,
  totalPointsUi: score1El,
  currentPointsUi: currentScore1El,
  playerEl: player1El,
  name: 'Player 2',
};

// Declare variables
let currentPlayer = player1;
let gameOver = false;

// Initialize game on load
function initialize() {
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;

  player1.totalScore = 0;
  player2.totalScore = 0;
  resetScore();
  if (currentPlayer === player2) switchPlayers();

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
}

initialize();

// Event listeners
btnRoll.addEventListener('click', function () {
  if (!gameOver) {
    // Generate dice rll
    let diceRoll = Math.ceil(Math.random() * 6);
    // Display dice roll
    console.log(diceRoll);
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceRoll}.png`;
    // Check if dice roll is 1
    if (diceRoll !== 1) {
      currentPlayer.currentScore += diceRoll; // Add dice to current score
      updateUi();
    } else {
      resetScore();
      updateUi();
      switchPlayers();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (!gameOver) {
    currentPlayer.totalScore += currentPlayer.currentScore;
    resetScore();
    updateUi();
    // Check if total score is >= 100
    currentPlayer.totalScore >= 100 ? endGame() : switchPlayers();
  }
});

btnNewGame.addEventListener('click', initialize);

// Functions
function addPoints(points) {
  currentPlayer.currentScore += points;
}

function resetScore() {
  currentPlayer.currentScore = 0;
}

function switchPlayers() {
  currentPlayer.playerEl.classList.toggle('player--active');
  currentPlayer = currentPlayer === player1 ? player2 : player1;
  currentPlayer.playerEl.classList.toggle('player--active');
}

function updateUi() {
  currentPlayer.currentPointsUi.textContent = currentPlayer.currentScore;
  currentPlayer.totalPointsUi.textContent = currentPlayer.totalScore;
}

function endGame() {
  gameOver = true;
  currentPlayer.playerEl.classList.add('player--winner');
  diceEl.classList.add('hidden');
}
