/* Selectors */
let words = ["LOVE", "DESING", "PYTHON", "ALURA", "HTML"];
let containerSecretWord = document.querySelector("#containerSecretWord");
const newWord = document.querySelector("#newWord");
let secretWord;

/* Counter Attempts */
let counterAttempts;
const maxAttempts = 8;
let arrayAttempts = [];

/* Secret Word */
function chooseSecretWord() {
  counterAttempts = 0;
  arrayAttempts = [];
  board.clearRect(0, 0, table.width, table.height);

  let positionWord = [Math.floor(Math.random() * words.length)];
  secretWord = words[positionWord];

  for (let i = 0; i < secretWord.length; i++) {
    arrayAttempts.push("");
  }

  lineGenerator();
  resetKeyboard();
  hangedCanvas(counterAttempts);
}

/* Reset keyboard */
function resetKeyboard() {
  var buttons = document.querySelectorAll(".keydo  button");
  buttons.forEach((button) => {
    button.classList.remove("disableBton", "btonTrue");
  });
}

/* Lines of secret word */
function lineGenerator() {
  containerSecretWord.innerHTML = "";
  for (let i = 0; i < secretWord.length; i++) {
    containerSecretWord.innerHTML += `
        <div class="containerLetter" >
            <p id="location${i}"></p>
        </div>
      `;
  }
}

function keyIn(letter) {
  let keySelection = document.querySelector(`#key${letter}`);
  if (secretWord.includes(letter)) {
    keySelection.classList.add("btonTrue");
    for (let i = 0; i < secretWord.length; i++) {
      if (secretWord[i] == letter) {
        document.querySelector(`#location${i}`).innerHTML = letter;
        arrayAttempts[i] = letter;
      }
    }
  } else {
    keySelection.classList.add("disableBton");
    counterAttempts++;
    hangedCanvas(counterAttempts);
  }
  alertsInsideGame();
}

function alertsInsideGame() {
  if (counterAttempts == maxAttempts) {
    Swal.fire({
      html:
        "<div style='font-family:Oxygen Mono;'><h1 style='font-weight:bold;text-align:center;animation:zoomIn;animation-duration:2s;'>GAME OVER</h1>" +
        "</br>" +
        "<p style='text-align:center'>The word is: " +
        secretWord +
        "</p></div>",
      width: 600,
      padding: "3em",
      backdrop: "#8b32325c",
    });
    document.getElementById("youLose").play();
    chooseSecretWord();
  } else {
    if (arrayAttempts.every((item) => item != "")) {
      Swal.fire({
        html:
          "<div style='font-family:Oxygen Mono;'><h1 style='font-weight:bold;text-align:center;animation:zoomIn;animation-duration:2s;'>YOU WON</h1>" +
          "</br>" +
          "<p style='text-align:center'>The word is: " +
          secretWord +
          "</p></div>",
        width: 600,
        padding: "3em",
        color: "#716add",
        backdrop: "#8d3db6a8",
      });
      document.getElementById("youWin").play();
      chooseSecretWord();
    }
  }
}

/* Start Game */
function startGame() {
  document.getElementById("start-game").style.display = "none";
  document.getElementById("forca").style.display = "flex";
  document.getElementById("inside-game").style.display = "flex";
  document.getElementById("displayGame").style.display = "flex";
  document.getElementById("addWordSection").style.display = "none";
  document.getElementById("back").play();
  chooseSecretWord();
}

/* Return Home */
function home() {
  document.getElementById("start-game").style.display = "flex";
  document.getElementById("forca").style.display = "none";
  document.getElementById("inside-game").style.display = "none";
  document.getElementById("displayGame").style.display = "none";
  document.getElementById("addWordSection").style.display = "none";
  document.getElementById("back").play();
}

/* New Game */
function newGame() {
  chooseSecretWord();
  document.getElementById("success").play();
}

/* Add Word */
function addWordArray() {
  const addWord = newWord.value.toUpperCase();
  if (/^[A-Z]{3,8}$/g.test(addWord)) {
    newWord.value = "";
    words.push(addWord);
    Swal.fire({
      icon: "success",
      title: "Your work has been saved",
      html: '<p style="text-align:center;font-family:Oxygen Mono;">The word has been added!</p>',
    });
    startGame();
    document.getElementById("success").play();
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      html: '<p style="text-align:center;font-family:Oxygen Mono;">Something went wrong!</p>',
    });
    newWord.value = "";
    document.getElementById("error").play();
  }
}

function addWord() {
  document.getElementById("addWordSection").style.display = "flex";
  document.getElementById("start-game").style.display = "none";
  document.getElementById("back").play();
}
