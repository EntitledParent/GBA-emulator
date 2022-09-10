let savedGameTypeID = localStorage.getItem("gameTypeID");
gameTypeID = JSON.parse(savedGameTypeID);



function setGbaGameName() {
const gameNameTypeID = 
['data/roms/PokemonSaph.gba', 
'../Binaries/007.gba', // continue from here please place in order from 1 (first one is 1)
'../Binaries/0994.gba',




]

function returnLast(arr) {
    return arr.at(gameTypeID - 1);
  }
const getGameNameFromAr = returnLast(gameNameTypeID);

gameName = getGameNameFromAr;
}
