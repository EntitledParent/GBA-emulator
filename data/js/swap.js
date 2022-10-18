let isCheck = 0;


function buttonProvid() {
    let isCheckdata = localStorage.getItem("isCheck");
    isCheck = JSON.parse(isCheckdata);
   
    if (isCheck == 0) {
        isCheck = 1;
    } else {
    isCheck = 0;
    }
    localStorage.setItem("isCheck", JSON.stringify(isCheck));
}


    let gameTextDat = localStorage.getItem("gameSetText");
    let gameText = JSON.parse(gameTextDat);
    let isCheckdata = localStorage.getItem("isCheck");
    isCheck = JSON.parse(isCheckdata);
    let checkType = 0;

    if (isCheck == 1) {
        if (gameCoreType == "gba") {
            checkType = 1;
        }
        if (gameCoreType == "nes"){
            checkType = 2;
        }
    }
   
    if (checkType == 1) {
    gameName = gameText;
    let gameLink = "https://cattn.github.io/gba-host/gba-alt/" + gameName + ".gba";
    gameName = gameLink;
    console.log("gba-server");
    }
    if (checkType == 2) {
    gameName = gameText;
    let gameLink = "https://cattn.github.io/gba-host/nes-alt/" + gameName + ".zip";
    gameName = gameLink;
    console.log("nes-server");
    }