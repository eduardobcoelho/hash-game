var tokken = "X"

var boardFields = document.querySelectorAll(".space");

var boardArray = [

    [null, null, null],
    [null, null, null],
    [null, null, null]

]

function showTokken(fieldClicked) {

    fieldClicked.insertAdjacentHTML("beforeend", "<p class='tokken font-class'>" + tokken + "</p>");

    let fieldClasses = fieldClicked.classList;

    let posX = fieldClasses.length - 2;

    let posY = fieldClasses.length - 1;

    boardArray[posX][posY] = tokken;

    if (tokken == "X") {

        tokken = "O";

    } else {

        tokken = "X";

    }

}

// test