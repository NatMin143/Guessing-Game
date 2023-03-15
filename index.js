const hiddenNumber = document.querySelector(".question_mark span");
const guessUpdate = document.querySelector("#update");
const userInputNumber = document.querySelector("#inputNumber");
const currentScore = document.querySelector("#currentScore");
const userScore = document.querySelector(".userScore");
const checkButton = document.querySelector("#check");
const newGameButton = document.querySelector("#newGame");
const revealNumber = document.querySelector(".question_mark span");
const userHighScore = document.querySelector(".userHighScore");

let randomNumber = Math.floor(Math.random() * 30) + 1;
let score = 10;
let highScore = -Infinity;

console.log(`The hidden number is ${randomNumber}`);

// function that check the score of the user
const scoreChecker = function (score) {
  if (score === 0) {
    guessUpdate.innerHTML = "Game Over";
    userInputNumber.disabled = true;
    userInputNumber.value = "";
    checkButton.style.display = "none";
    newGameButton.style.display = "block";
    return score;
  }
};

const highScoreChecker = function(score) {
  if (score > highScore) {
    highScore = score;
    userHighScore.innerHTML = highScore;
  }
}

//function that checks the user input number
const guessChecker = function () {
  const userInputNumberValue = userInputNumber.value;
  console.log(`User input is ${userInputNumberValue}`);

  if (userInputNumberValue < 1 || userInputNumberValue > 30) {
    guessUpdate.innerHTML = "Your guess should be from 1 to 20!";
  } else if (userInputNumberValue > randomNumber) {
    guessUpdate.innerHTML = "Your guess is higher!";
    score--;
    currentScore.innerHTML = score;
    scoreChecker(score);
  } else if (userInputNumberValue < randomNumber) {
    guessUpdate.innerHTML = "Your guess is lower!";
    score--;
    currentScore.innerHTML = score;
    scoreChecker(score);
  } else {
    guessUpdate.innerHTML = "You are correct!";
    userInputNumber.disabled = true;
    checkButton.style.display = "none";
    newGameButton.style.display = "block";
    revealNumber.innerHTML = randomNumber;
    highScoreChecker(score);
  }

  return true;
};

// Function that let user enter new game
const newGame = function () {
  randomNumber = Math.floor(Math.random() * 30) + 1;
  console.log(`The hidden number is ${randomNumber}`)
  userInputNumber.disabled = false;
  newGameButton.style.display = "none";
  checkButton.style.display = "block";
  guessUpdate.innerHTML = "Good Luck !";
  userInputNumber.value = "";
  revealNumber.innerHTML = "?";
  score = 10;
  currentScore.innerHTML = score;
};

checkButton.addEventListener("click", () => {
  guessChecker();
});

userInputNumber.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    guessChecker();
  }
});

newGameButton.addEventListener("click", () => {
  newGame();
});
