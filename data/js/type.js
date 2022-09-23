var gameTypeID = 0;
var gameSetText = null;

function gameType(gameTypeID) {
    localStorage.setItem("gameTypeID", JSON.stringify(gameTypeID));
}

function setNameTxt(clickedElement) {
    gameSetText = clickedElement.textContent;
    localStorage.setItem("gameSetText", JSON.stringify(gameSetText));
}
