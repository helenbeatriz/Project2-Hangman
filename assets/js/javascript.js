function rule() {
    var buttonrule = document.getElementById('rulestext');
buttonrule.innerHTML = "Rules are going to be here I still need to type them"
// if (buttonrule.style.display === "block") {
//     buttonrule.style.display= "none";
// }
// else {
//     buttonrule.style.display = "none"
// }

}
// Game starts here 
var words = [
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
	"denonation"]

let answer = '';
let maxMistakes = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord() {
    answer = words[Math.floor(Math.random() * words.length)];
  }
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

  document.getElementById('maxMistakes').innerHTML = maxMistakes

  function guessedWord() {
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
  
    document.getElementById('hiddenword').innerHTML = wordStatus;
  }
  function handleGuess(chosenLetter) {
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
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
  
  function updateHangmanPicture() {
    document.getElementById('hangmanPic').src = './assets/images/' + mistakes + '.png';
  }
  
  function updateMistakes() {
    document.getElementById('errors').innerHTML = mistakes;
  }
  function checkIfGameWon() {
    if (wordStatus === answer) {
      document.getElementById('keyboard').innerHTML = 'You Won!!!';
    }
  }
  
  function checkIfGameLost() {
    if (mistakes === maxMistakes) {
      document.getElementById('hiddenword').innerHTML = 'The answer was: ' + answer;
      document.getElementById('keyboard').innerHTML = 'You Lost!!!';
    }
  }
  function updateMistakes() {
    document.getElementById('errors').innerHTML = mistakes;
  }
  
  function reset() {
    mistakes = 0;
    guessed = [];
    document.getElementById('hangmanPic').src = './assets/images/forca.png';
  
    randomWord();
    guessedWord();
    updateMistakes();
    generateButtons();
  }

  // Functions executed - > 
randomWord();
generateButtons();
guessedWord();
handleGuess();
reset();