let gameCoreType = "null";
let gameName = "null";
let biosName = "null";


// 1 - 1000 = GBA
// 1001 - 2000 = NES
// 2001 - 3500 = SNES
// 3501 - 4500 = N64
// 4501 - 6000 = Gameboy
// 6001 - 7000 = Atari 5200
// 7001 - 8000 = DS
// 8001 - 9000 = PS1
// 9001 - 10000 = Sega MD
serverItem = localStorage.getItem("serverStat");
serverStat = JSON.parse(serverItem);
savedGameTypeID = localStorage.getItem("gameTypeID");
gameTypeID = JSON.parse(savedGameTypeID);

function findGameType() {
    if (gameTypeID > 0 && gameTypeID < 1001) {
        gameCoreType = 'gba';
        if (serverStat == 0) {
        setGbaGameName();
        }
        else if (serverStat == 1) {
        setAltGba();
serverStat = 0;
localStorage.setItem("serverStat", JSON.stringify(serverStat));
        }
        localStorage.setItem("gameCoreType", JSON.stringify(gameCoreType));
    }
    if (gameTypeID > 1000 && gameTypeID < 2001) {
        gameCoreType = 'nes';
        if (serverStat == 0) {
        setNesGameName();
    }
    else if (serverStat == 1) {
        setAltNes();
serverStat = 0;
localStorage.setItem("serverStat", JSON.stringify(serverStat));
        }
        localStorage.setItem("gameCoreType", JSON.stringify(gameCoreType));
    }
    if (gameTypeID > 2000 && gameTypeID < 3501) {
        gameCoreType = 'snes';
        if (serverStat == 0) {
        setSnesGameName();
    }
    else if (serverStat == 1) {
        setAltSnes();
serverStat = 0;
localStorage.setItem("serverStat", JSON.stringify(serverStat));
        }
        localStorage.setItem("gameCoreType", JSON.stringify(gameCoreType));
    }
    if (gameTypeID > 3500 && gameTypeID < 4501) {
        gameCoreType = 'n64';
        if (serverStat == 0) {
        setN64GameName();
    }
    else if (serverStat == 1) {
        setAltN64();
serverStat = 0;
localStorage.setItem("serverStat", JSON.stringify(serverStat));
        }
        localStorage.setItem("gameCoreType", JSON.stringify(gameCoreType));
    }
    if (gameTypeID > 4500 && gameTypeID < 6001) {
        gameCoreType = 'gb';
        if (serverStat == 0) {
        setGbGameName();
    }
    else if (serverStat == 1) {
        setAltGb();
serverStat = 0;
localStorage.setItem("serverStat", JSON.stringify(serverStat));
        }
        localStorage.setItem("gameCoreType", JSON.stringify(gameCoreType));
    }
    if (gameTypeID > 6000 && gameTypeID < 7001) {
        gameCoreType = 'atari5200';
        if (serverStat == 0) {
        setAtari52GameName();
    }
    else if (serverStat == 1) {
        setAltAtari52();
serverStat = 0;
localStorage.setItem("serverStat", JSON.stringify(serverStat));
        }
        localStorage.setItem("gameCoreType", JSON.stringify(gameCoreType));
    }
    if (gameTypeID > 7000 && gameTypeID < 8001) {
        gameCoreType = 'nds';
        if (serverStat == 0) {
        setNdsGameName();
    }
    else if (serverStat == 1) {
        setAltNds();
serverStat = 0;
localStorage.setItem("serverStat", JSON.stringify(serverStat));
        }
        localStorage.setItem("gameCoreType", JSON.stringify(gameCoreType));
    }
    if (gameTypeID > 8000 && gameTypeID < 9001) {
        gameCoreType = 'psx';
        checkUserRam();
    
        serverStat = 0;
localStorage.setItem("serverStat", JSON.stringify(serverStat));
        }
        localStorage.setItem("gameCoreType", JSON.stringify(gameCoreType));
    }
    
    if (gameTypeID > 9000 && gameTypeID < 10001) {
        gameCoreType = 'segaMD';
        if (serverStat == 0) {
        setSegaMDGameName();
    }
    else if (serverStat == 1) {
        setAltSegaMD();
serverStat = 0;
localStorage.setItem("serverStat", JSON.stringify(serverStat));
    }
        localStorage.setItem("gameCoreType", JSON.stringify(gameCoreType));
    }


findGameType();


function setPageTitle() {
    getLocalTextVal = localStorage.getItem("gameSetText");
    gameSetText = JSON.parse(getLocalTextVal);
    document.title = gameSetText;
} // omg title has set!!!!
setPageTitle();

