/**
 * Functions rules pop up 
 */
const openRulesButton = document.querySelectorAll("[data-rules-target]");
const closeRulesButton = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openRulesButton.forEach((button) => {
  button.addEventListener("click", () => {
    const rules = document.querySelector(button.dataset.rulesTarget);
    openRules(rules);
  });
});
/* Closing button  rules */
closeRulesButton.forEach((button) => {
  button.addEventListener("click", () => {
    const rules = button.closest(".rules");
    closeRules(rules);
  });
});
/* opening  rules button */
function openRules(rules) {
  if (rules == null) return;
  rules.classList.add("active");
  overlay.classList.add("active");
}
/**
 * Function for the closing rules button
 */
function closeRules(rules) {
  if (rules == null) return;
  rules.classList.remove("active");
  overlay.classList.remove("active");
}

// Array with the words for the game 
let words = [
  "destruction",
  "javascript",
  "laziness",
  "massive",
  "pillow",
  "psycopath",
  "strange",
  "happiness",
  "challenge",
  "organic",
  "happy",
  "stress",
  "hypochondria",
  "denonation"
];
// variables 
let answer = '';
let maxMistakes = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

/**
 * Function to generate words
 */
function randomWord() {
  answer = words[Math.floor(Math.random() * words.length)];
}
/**
 * Function for generating buttons 
 */
function generateButtons() {
  let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
        <button
          class="btn btn-lg btn-primary m-2"
          id='` + letter + `'
          onClick="handleGuess('` + letter + `')"
        >
          ` + letter + `
        </button>
      `).join('');

  document.getElementById('keyboard').innerHTML = buttonsHTML;
}

document.getElementById('maxMistakes').innerHTML = maxMistakes;
/**
 * Function for printing guessed word on screen 
 */
function guessedWord() {
  wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('hiddenword').innerHTML = wordStatus;
}
/** 
 * Function to update the picture of the hangman based on mistakes
 */
function handleGuess(chosenLetter) {
  if (guessed.indexOf(chosenLetter) === -1) {
    guessed.push(chosenLetter);
  }

  document.getElementById(chosenLetter).setAttribute('disabled', true);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMistakes();
    checkIfGameLost();
    updateHangmanPicture();
  }
}
/**
 * Function for updating hangman images on the game based on mistakes
 */
function updateHangmanPicture() {
  document.getElementById('hangmanPic').src = './assets/images/forca0' + mistakes + '.png';
  console.log(mistakes);
}
// updating number of mistakes written on screen 
function updateMistakes() {
  document.getElementById('errors').innerHTML = mistakes;
}
/**
 * Function if the player wins the game
 */
function checkIfGameWon() {
  if (wordStatus === answer) {
    document.getElementById('keyboard').innerHTML = 'You Won!!!';
  }
}
/** 
 * Function if the player loses the game
 */
function checkIfGameLost() {
  if (mistakes === maxMistakes) {
    document.getElementById('hiddenword').innerHTML = 'The answer was: ' + answer;
    document.getElementById('keyboard').innerHTML = 'You Lost!!!';
  }
}
/** 
 * Function to reset the rules
 * */
function reset() {
  mistakes = 0;
  guessed = [];
  document.getElementById('hangmanPic').src = './assets/images/forca.png';

  randomWord();
  guessedWord();
  updateMistakes();
  generateButtons();
}