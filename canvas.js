board = document.querySelector("canvas").getContext("2d");
board.lineWidth = 6;
board.lineCap = "round";
board.lineJoin = "round";
board.fillStyle = "transparent";
board.strokeStyle = "#fff";

function drawCanvas() {
  board.fillRect(0, 0, 1280, 750);
  board.beginPath();
  board.moveTo(850, 440);
  board.lineTo(450, 440);
  board.stroke();
  board.closePath();
}

function drawLine() {
  let widthBoard = 600 / secretWord.length;
  for (let i = 0; i < secretWord.length; i++) {
    board.moveTo(350 + widthBoard * i, 640);
    board.lineTo(420 + widthBoard * i, 640);
  }

  board.stroke();
  board.closePath();
}

function hanged(){
  
}
