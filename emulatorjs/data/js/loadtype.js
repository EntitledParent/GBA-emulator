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

savedGameTypeID = localStorage.getItem("gameTypeID");
gameTypeID = JSON.parse(savedGameTypeID);

function findGameType() {
    if (gameTypeID > 0 && gameTypeID < 1001) {
        gameCoreType = 'gba';
        setGbaGameName();
        localStorage.setItem("gameCoreType", JSON.stringify(gameCoreType));
    }
    if (gameTypeID > 1000 && gameTypeID < 2001) {
        gameCoreType = 'nes';
        setNesGameName();
        localStorage.setItem("gameCoreType", JSON.stringify(gameCoreType));
    }
    if (gameTypeID > 2000 && gameTypeID < 3501) {
        gameCoreType = 'snes';
        setSnesGameName()
        localStorage.setItem("gameCoreType", JSON.stringify(gameCoreType));
    }
    if (gameTypeID > 3500 && gameTypeID < 4501) {
        gameCoreType = 'n64';
        setN64GameName();
        localStorage.setItem("gameCoreType", JSON.stringify(gameCoreType));
    }
    if (gameTypeID > 4500 && gameTypeID < 6001) {
        gameCoreType = 'gb';
        setGbGameName();
        localStorage.setItem("gameCoreType", JSON.stringify(gameCoreType));
    }
    if (gameTypeID > 6000 && gameTypeID < 7001) {
        gameCoreType = 'atari5200';
        setAtari52GameName();
        localStorage.setItem("gameCoreType", JSON.stringify(gameCoreType));
    }
    if (gameTypeID > 7000 && gameTypeID < 8001) {
        gameCoreType = 'nds';
        setNdsGameName();
        localStorage.setItem("gameCoreType", JSON.stringify(gameCoreType));
    }
    if (gameTypeID > 8000 && gameTypeID < 9001) {
        gameCoreType = 'psx';
        setPsxGameName();
        localStorage.setItem("gameCoreType", JSON.stringify(gameCoreType));
    }

}
findGameType();

