var gameTypeID = 0;

function gameType() {
    localStorage.setItem("gameTypeID", JSON.stringify(gameTypeID));
    console.log("Got game ID: " + gameTypeID);
}