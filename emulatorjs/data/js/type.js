var gameTypeID = 0;

function gameType(gameTypeID) {
    localStorage.setItem("gameTypeID", JSON.stringify(gameTypeID));
    console.log("Got game ID: " + gameTypeID);
}