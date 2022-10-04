var gameTypeID = 0;
var gameSetText = null;
function gameType(gameTypeID) {
    localStorage.setItem("gameTypeID", JSON.stringify(gameTypeID)); 
}

function setNameTxt(clickedElement) {
    gameSetText = clickedElement.textContent;
    localStorage.setItem("gameSetText", JSON.stringify(gameSetText));
}

function loadParams() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });
      let gameval = params.gameID; 
      let titleval = params.gametitle;
      gameSetText = titleval;
      gameTypeID = gameval;
      localStorage.setItem("gameSetText", JSON.stringify(gameSetText));
      localStorage.setItem("gameTypeID", JSON.stringify(gameTypeID));
      console.log(gameval);
}

function gameStarSelected() {
    doTheySetFav = 1;
    localStorage.setItem("doTheyFav", JSON.stringify(doTheySetFav));
    }


function checkParam() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });
    let checkPar = params.fav;
    if (checkPar == "true") {
        loadParams();
    }
}
checkParam();

function copyFunction() {
    let savedGameTypeID = localStorage.getItem("gameTypeID");
    let gameID = JSON.parse(savedGameTypeID);

    let savedGameTxt = localStorage.getItem("gameSetText");
    let gameTitle = JSON.parse(savedGameTxt);
    var copyData = document.getElementById("inputText");

    copyData.value = "https://cattn.github.io/gba/launchpad.html?gameID=" + gameID + "&gametitle=" + gameTitle + "&fav=true";
    copyData.select();
    navigator.clipboard.writeText(copyData.value);
    alert("Copied link to clipboard: " + copyData.value);
    
    }
