var i = 0;
var vIndex = 0;
var canChangeTokken = 0;
var tokken = "X";
var posX;
var posY;
var boardFields = document.querySelectorAll(".space");

var boardArray = [
  [boardFields[0], boardFields[1], boardFields[2]],
  [boardFields[3], boardFields[4], boardFields[5]],
  [boardFields[6], boardFields[7], boardFields[8]],
];

var boardTokken = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function resetBoard() {
  vIndex = 0;
  const tokkens = document.querySelectorAll(".tokken");

  for (i = 0; i < tokkens.length; i++) {
    tokkens[i].parentNode.removeChild(tokkens[i]);
  }
  for (i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      boardTokken[i][j] = null;
    }
  }
  tokken = "X";
}

function assignTokken(fieldClicked) {
  if (!vIndex) {
    const fieldClasses = fieldClicked.classList;
    posX =
      fieldClasses.length === 2
        ? Number(fieldClasses[fieldClasses.length - 1])
        : Number(fieldClasses[fieldClasses.length - 2]);
    posY = Number(fieldClasses[fieldClasses.length - 1]);

    if (!boardTokken[posX][posY]) {
      boardTokken[posX][posY] = tokken;

      fieldClicked.insertAdjacentHTML(
        "beforeend",
        `<p class='tokken font-class ${tokken}'>` + tokken + "</p>"
      );

      canChangeTokken = 1;
    }
  } else {
    resetBoard();
  }
}

const victoryVerify = {
  horizontalVerify: (x, y) => {
    if (
      y == 0 &&
      boardTokken[x][y + 1] == tokken &&
      boardTokken[x][y + 2] == tokken
    ) {
      boardArray[x][y].querySelector(".tokken").style.color = "#ff0000";
      boardArray[x][y + 1].querySelector(".tokken").style.color = "#ff0000";
      boardArray[x][y + 2].querySelector(".tokken").style.color = "#ff0000";
      vIndex++;
    } else if (
      y == 2 &&
      boardTokken[x][y - 1] == tokken &&
      boardTokken[x][y - 2] == tokken
    ) {
      boardArray[x][y].querySelector(".tokken").style.color = "#ff0000";
      boardArray[x][y - 1].querySelector(".tokken").style.color = "#ff0000";
      boardArray[x][y - 2].querySelector(".tokken").style.color = "#ff0000";
      vIndex++;
    }
  },

  verticalVerify: (x, y) => {
    if (
      x == 0 &&
      boardTokken[x + 1][y] == tokken &&
      boardTokken[x + 2][y] == tokken
    ) {
      boardArray[x][y].querySelector(".tokken").style.color = "#ff0000";
      boardArray[x + 1][y].querySelector(".tokken").style.color = "#ff0000";
      boardArray[x + 2][y].querySelector(".tokken").style.color = "#ff0000";
      vIndex++;
    } else if (
      x == 2 &&
      boardTokken[x - 1][y] == tokken &&
      boardTokken[x - 2][y] == tokken
    ) {
      boardArray[x][y].querySelector(".tokken").style.color = "#ff0000";
      boardArray[x - 1][y].querySelector(".tokken").style.color = "#ff0000";
      boardArray[x - 2][y].querySelector(".tokken").style.color = "#ff0000";
      vIndex++;
    }
  },

  diagonalVerify: (x, y) => {
    if (x == y) {
      if (
        x == 0 &&
        boardTokken[x + 1][y + 1] == tokken &&
        boardTokken[x + 2][y + 2] == tokken
      ) {
        boardArray[x][y].querySelector(".tokken").style.color = "#ff0000";
        boardArray[x + 1][y + 1].querySelector(".tokken").style.color =
          "#ff0000";
        boardArray[x + 2][y + 2].querySelector(".tokken").style.color =
          "#ff0000";
        vIndex++;
      } else if (
        x == 1 &&
        boardTokken[x - 1][y - 1] == tokken &&
        boardTokken[x + 1][y + 1] == tokken
      ) {
        boardArray[x][y].querySelector(".tokken").style.color = "#ff0000";
        boardArray[x - 1][y - 1].querySelector(".tokken").style.color =
          "#ff0000";
        boardArray[x + 1][y + 1].querySelector(".tokken").style.color =
          "#ff0000";
        vIndex++;
      } else if (
        x == 1 &&
        boardTokken[x - 1][y + 1] == tokken &&
        boardTokken[x + 1][y - 1] == tokken
      ) {
        boardArray[x][y].querySelector(".tokken").style.color = "#ff0000";
        boardArray[x - 1][y + 1].querySelector(".tokken").style.color =
          "#ff0000";
        boardArray[x + 1][y - 1].querySelector(".tokken").style.color =
          "#ff0000";
        vIndex++;
      } else if (
        x == 2 &&
        boardTokken[x - 1][y - 1] == tokken &&
        boardTokken[x - 2][y - 2] == tokken
      ) {
        boardArray[x][y].querySelector(".tokken").style.color = "#ff0000";
        boardArray[x - 1][y - 1].querySelector(".tokken").style.color =
          "#ff0000";
        boardArray[x - 2][y - 2].querySelector(".tokken").style.color =
          "#ff0000";
        vIndex++;
      }
    } else if (
      x == 2 &&
      boardTokken[x - 1][y + 1] == tokken &&
      boardTokken[x - 2][y + 2] == tokken
    ) {
      boardArray[x][y].querySelector(".tokken").style.color = "#ff0000";
      boardArray[x - 1][y + 1].querySelector(".tokken").style.color = "#ff0000";
      boardArray[x - 2][y + 2].querySelector(".tokken").style.color = "#ff0000";
      vIndex++;
    } else if (
      x == 0 &&
      boardTokken[x + 1][y - 1] == tokken &&
      boardTokken[x + 2][y - 2] == tokken
    ) {
      boardArray[x][y].querySelector(".tokken").style.color = "#ff0000";
      boardArray[x + 1][y - 1].querySelector(".tokken").style.color = "#ff0000";
      boardArray[x + 2][y - 2].querySelector(".tokken").style.color = "#ff0000";
      vIndex++;
    }
  },

  middleVerify: (x, y) => {
    if (x == 1 && y == 1) {
      if (boardTokken[x + 1][y] == tokken && boardTokken[x - 1][y] == tokken) {
        boardArray[x][y].querySelector(".tokken").style.color = "#ff0000";
        boardArray[x + 1][y].querySelector(".tokken").style.color = "#ff0000";
        boardArray[x - 1][y].querySelector(".tokken").style.color = "#ff0000";
        vIndex++;
      } else if (
        boardTokken[x][y + 1] == tokken &&
        boardTokken[x][y - 1] == tokken
      ) {
        boardArray[x][y].querySelector(".tokken").style.color = "#ff0000";
        boardArray[x][y + 1].querySelector(".tokken").style.color = "#ff0000";
        boardArray[x][y - 1].querySelector(".tokken").style.color = "#ff0000";
        vIndex++;
      }
    }
  },
};

function verify() {
  const tokkenQuantity = document.querySelectorAll(".tokken").length;
  if (tokkenQuantity >= 5) {
    victoryVerify.horizontalVerify(posX, posY);
    victoryVerify.verticalVerify(posX, posY);
    victoryVerify.diagonalVerify(posX, posY);
    victoryVerify.middleVerify(posX, posY);
  }
}

function changeTokken() {
  if (canChangeTokken == 1) {
    tokken = tokken == "X" ? "0" : "X";
    canChangeTokken = 0;
  }
}
