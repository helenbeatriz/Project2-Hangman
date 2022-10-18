function rule() {
    var buttonrule = document.getElementById('rulestext');

if (buttonrule.style.display === "none") {
    buttonrule.style.display= "block";
}
else {
    buttonrule.style.display = "none"
}
console.log(rule)
}
//WORDS 
let sortedSecretWord;
let wordsList = [];
const words = [
    word001 = {
        name: "IRELAND"
    },
    word002 = {
        name:"TEMPTATION"
    },
    word003 = {
        name:"SCUBA"
    },
    word004 = {
        name: "DESTRUCTION"
    },
    word005 = {
        name: "DENOTATION"
    },
    word006 = {
        name: "PILLOW"
    },
    word007 = { 
        name: "MASSIVE"
    },
    word008 = {
        name: "LAZINESS"
    },
    word009 = {
        name:"HYPOCHONDRIA"
    },
    word010 = {
        name:"PSYCHOPATH"
    }
];


createSecretWord();
function createSecretWord(){
    const indexWord = parseInt(Math.random() * words.length)
    
    sortedSecretWord =  words[indexWord].name;
    console.log(sortedSecretWord);
}
wordOnScreen();
function wordOnScreen(){

    const secretWord = document.getElementById("secretword");
    console.log(secretWord)
    secretWord.innerHTML = "";

    for(i=0; i < sortedSecretWord.length; i++) {
    if (wordsList[i] == undefined){
        wordsList[i] = "&nbsp;"
          wordOnScreen.innerHTML = wordOnScreen.innerHTML + wordsList[i] 
        }
    }
}