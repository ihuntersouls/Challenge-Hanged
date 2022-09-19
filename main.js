/* Selectors */
let words = ["LOVE", "DESING", "PYTHON", "ALURA", "HTML"];
let secretWord = "";

/* Secret Word */
function chooseSecretWord() {
  let word = words[Math.floor(Math.random() * words.length)];
  secretWord = word;
  console.log(secretWord);
}

/* Start Game */
function startGame() {
  document.getElementById("start-game").style.display = "none";
  document.getElementById("forca").style.display = "flex";
  document.getElementById("inside-game").style.display = "flex";

  chooseSecretWord();
  drawCanvas();
  drawLine();
}

/* Return Home */
function home(){
  document.getElementById("start-game").style.display = "flex";
  document.getElementById("forca").style.display = "none";
  document.getElementById("inside-game").style.display = "none";
}

/* New Game */
function newGame(){
  chooseSecretWord();
  drawCanvas();
  drawLine();
}

/* Add Word */
function addWord(){
  
}