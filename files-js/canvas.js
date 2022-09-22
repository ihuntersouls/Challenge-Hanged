let table = document.querySelector("canvas")
let board = table.getContext("2d");

board.lineWidth = 6;
board.lineCap = "round";
board.lineJoin = "round";
board.strokeStyle = "#f8f9fa";

function hangedCanvas(failedAttempts) {
  switch (failedAttempts) {
    case 0: {
      board.beginPath();
      board.moveTo(0, 390);
      board.lineTo(300, 390);
      board.stroke();

      board.beginPath();
      board.moveTo(30, 390);
      board.lineTo(30, 10);
      board.stroke();
      break;
    }
    case 1: {
      board.beginPath();
      board.moveTo(30, 10);
      board.lineTo(160, 10);
      board.stroke();
      break;
    }
    case 2: {
      board.beginPath();
      board.moveTo(160, 10);
      board.lineTo(160, 50);
      board.stroke();
      break;
    }
    case 3: {
      board.beginPath();
      board.lineWidth = 4;
      board.arc(160, 90, 40, 0, 2 * Math.PI);
      board.stroke();
      break;
    }
    case 4: {
      board.beginPath();
      board.moveTo(160, 130);
      board.lineTo(160, 270);
      board.stroke();

      break;
    }
    case 5: {
      board.beginPath();
      board.moveTo(160, 150);
      board.lineTo(120, 230);
      board.stroke();
      break;
    }
    case 6: {
      board.beginPath();
      board.moveTo(160, 150);
      board.lineTo(200, 230);
      board.stroke();
      break;
    }
    case 7: {
      board.beginPath();
      board.moveTo(160, 270);
      board.lineTo(120, 320);
      board.stroke();
      break;
    }
    case 8: {
      board.beginPath();
      board.moveTo(160, 270);
      board.lineTo(200, 320);
      board.stroke();
      break;
    }
  }
}
