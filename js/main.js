var i = 0;

var tokken = "X"

var posX;

var posY;

var boardFields = document.querySelectorAll(".space");

var boardArray = [

    [boardFields[0], boardFields[1], boardFields[2]],
    [boardFields[3], boardFields[4], boardFields[5]],
    [boardFields[6], boardFields[7], boardFields[8]]

]

var boardTokken = [

    [null, null, null],
    [null, null, null],
    [null, null, null]

]

function assignTokken(fieldClicked) {

    fieldClicked.insertAdjacentHTML("beforeend", "<p class='tokken font-class'>" + tokken + "</p>");

    let fieldClasses = fieldClicked.classList;

    if (fieldClasses.length == 2) {

        posX = fieldClasses[fieldClasses.length - 1];

        posY = fieldClasses[fieldClasses.length - 1];

    } else {

        posX = fieldClasses[fieldClasses.length - 2];

        posY = fieldClasses[fieldClasses.length - 1];

    }

    boardTokken[posX][posY] = tokken;

    if (tokken == "X") {

        tokken = "O";

    } else {

        tokken = "X";

    }

}


function resetBoard() {

    let tokkens = document.querySelectorAll(".tokken");

    for (i = 0; i < tokkens.length; i++) {

        tokkens[i].parentNode.removeChild(tokkens[i]);

    }

    for (i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {

            boardTokken[i][j] = null;

        }
    }

}

// test
