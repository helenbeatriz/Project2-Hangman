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
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
// let wordStatus = null;
// Functions executed - > 
randomWord();
generateButtons();

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