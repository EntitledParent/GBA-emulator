//let savedGameTypeID = localStorage.getItem("gameTypeID");
//gameTypeID = JSON.parse(savedGameTypeID);
let savedGameTxt = localStorage.getItem("gameSetText");
gameSetText = JSON.parse(savedGameTxt);
//let savedGameCoreType = localStorage.getItem("gameCoreType");
//let gameCoreType = JSON.parse(savedGameCoreType);


function gameStarSelected() {
        let title = gameSetText;
        //let gameType = gameCoreType;
        //let gameID = gameTypeID;
        let favoriteBar = document.getElementById('favorite-bar-text');

        const createBar = document.createElement('h1');
        const createLink = document.createElement('a');
        const linkNode = document.createTextNode("Play now!");
        createLink.appendChild(linkNode);
        createLink.title = "Play now!";
        createLink.href = "launchpad.html";
        //createLink.onclick = saveFavorite(gameID);

        const barNode = document.createTextNode(title);
        createBar.appendChild(barNode);
        favoriteBar.appendChild(createBar);
        console.log(createBar);
    }