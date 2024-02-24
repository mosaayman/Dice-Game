"use strict";
const imgDice = document.querySelector(".dice");
const rollBtn = document.querySelector("#roll_dice");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const current0 = document.querySelector("#current--0");
const current1 = document.querySelector("#current--1");
const newBtn = document.querySelector(".btn--new");
const holdBtn = document.querySelector(".btn--hold");
const players = document.querySelector(".player");
let currentScore = 0;
let activeP = 0;
let scores = [0, 0];
const randInt = function () {
  return Math.floor(Math.random() * 6) + 1;
};

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activeP}`).textContent = 0;
  activeP = activeP === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

imgDice.classList.add("hidden");

const diceRoll = () => {
  const diceNum = randInt();
  imgDice.classList.remove("hidden");
  imgDice.src = `images/dice-${diceNum}.png`;
  //if

  if (diceNum !== 1) {
    currentScore += diceNum;
    console.log(currentScore);
    document.getElementById(`current--${activeP}`).textContent = currentScore;
  } else {
    switchPlayer();
  }
};

rollBtn.addEventListener("click", diceRoll);
//const hold = () => {
//document.querySelector(`score${activeP}`)
//score0 += currentScore;
//document.getElementById(`score--${activeP}`).textContent = currentScore;
//current0.textContent = "0";
//currentScore = 0;
//};

holdBtn.addEventListener("click", function () {
  scores[activeP] += currentScore;
  document.getElementById(`score--${activeP}`).textContent = scores[activeP];
  if (scores[activeP] >= 100) {
    imgDice.classList.add("hidden");
    document
      .querySelector(`.player--${activeP}`)
      .classList.add("player--winner");
    holdBtn.classList.add("none");
    rollBtn.classList.add("none");
  } else {
    switchPlayer();
  }
});

newBtn.addEventListener("click", function () {
  currentScore = 0;
  activeP = 0;
  scores = [0, 0];
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  holdBtn.classList.remove("none");
  rollBtn.classList.remove("none");
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
});
