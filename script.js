"use strict";

let scores;;
  let currentScore;
  let activePlayer ;
  let playing;

let firstPlayerScore = document.querySelector(".score--0");
let secondPlayerScore = document.querySelector(".score--1");
let newGame = document.querySelector(".btn--new");
let rollDice = document.querySelector(".btn--roll");
let hold = document.querySelector(".btn--hold");
let dice = document.querySelector(".dice");



function resetScores(){
  document.querySelector(`.current--0`).textContent = `${currentScore}`; 
  document.querySelector(`.score--0`).textContent = scores[0];
  document.querySelector(`.current--1`).textContent = `${currentScore}`; 
  document.querySelector(`.score--1`).textContent = scores[1];
}

function startGame(){
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  document.querySelector(".player--0").classList.add("player--active");
  document.querySelector(".player--0").classList.remove("player--winner--0");
  document.querySelector(".player--0").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--winner--1");
  document.querySelector(".player--1").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--active");
  resetScores();
  dice.classList.add("dice--hidden");

}

startGame();

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

function playerWin(){
  document.querySelector(`.player--${activePlayer}`).classList.add(`player--winner--${activePlayer}`);
  document.querySelector(`.player--${activePlayer}`).classList.add(`player--winner`);

  playing = false;
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

    scores[activePlayer] >= 100 ? playerWin() : swapActivePlayer();
  }
});

newGame.addEventListener("click", function(){
  startGame();

})