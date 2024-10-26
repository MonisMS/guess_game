let RandNumber = parseInt(Math.random() * 100 + 1);
const userInput = document.querySelector("#guessField");
const submission = document.querySelector("#subt");
const previousGuess = document.querySelector(".guesses");
const guessRem = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;
if (playGame) {
  submission.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
      alert('PLease enter a valid number');
    } else if (guess < 1) {
      alert('PLease enter a number more than 1');
    } else if (guess > 100) {
      alert('PLease enter a  number less than 100');
    } else {
      prevGuess.push(guess);
      if (numGuess === 11) {
        displayGuess(guess);
        displaymsg(`Game Over. Random number was ${RandNumberNumber}`);
        gameEnd() 
      } else {
        displayguess(guess);
        checkGuess(guess);
      }
    }
  }
function checkGuess(guess) {
  if (guess === RandNumber){ displaymsg("Damn! Genius you guessed it right");
    gameEnd();

}
  else if (guess < RandNumber) {
    displaymsg("Nah! toooo low");
  } else if (guess > RandNumber) {
    displaymsg("Naaaaah! toooo high");
  }
}

function displayguess(guess) {
  userInput.value = "";
  previousGuess.innerHTML += `${guess} , `;
  numGuess++;
  guessRem.innerHTML = `${11 - numGuess}`;
}
function displaymsg(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}
function gameEnd() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    RandNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    previousGuess.innerHTML = "";
    guessRem.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
