"use strict";

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

let firstPlayerScore = document.querySelector(".score--0");
let secondPlayerScore = document.querySelector(".score--1");
let newGame = document.querySelector(".btn--new");
let rollDice = document.querySelector(".btn--roll");
let hold = document.querySelector(".btn--hold");
let dice = document.querySelector(".dice");

function swapActivePlayer() {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.toggle("player--active");

  activePlayer = activePlayer === 0 ? 1 : 0;

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.toggle("player--active");
}

function swapPlayer() {
  currentScore = 0;
  document.querySelector(`.current--${activePlayer}`).textContent =
    currentScore;

  swapActivePlayer();
}

rollDice.addEventListener("click", function () {
  if (playing === true) {
    let roll = Math.floor(Math.random() * 6) + 1;
    dice.classList.remove("dice--hidden");
    dice.src = `dice-${roll}.png`;
    if (roll !== 1) {
      currentScore += roll;
      document.querySelector(`.current--${activePlayer}`).textContent =
        currentScore;
    } else {
      swapPlayer();
    }
  }
});

hold.addEventListener("click", function(){
  if(playing === true){
    scores[activePlayer] += currentScore;
    currentScore = 0;
    document.querySelector(`.current--${activePlayer}`).textContent = `${currentScore}`; 
    document.querySelector(`.score--${activePlayer}`).textContent = scores[activePlayer];
    swapActivePlayer();
  }
});