// navigator.registerProtocolHandler("web+gba", "launchpad.html?gameID=%s&gametitle=%s&fav=%s", "GBA handler"); // last title arg included for compatibility
// navigator.registerProtocolHandler("web+nes", "launchpad.html?gameID=%s&gametitle=%s&fav=%s", "NES handler"); // last title arg included for compatibility
// navigator.registerProtocolHandler("web+snes", "launchpad.html?gameID=%s&gametitle=%s&fav=%s", "SNES handler"); // last title arg included for compatibility
// navigator.registerProtocolHandler("web+sega", "launchpad.html?gameID=%s&gametitle=%s&fav=%s", "Sega handler"); // last title arg included for compatibility

document.querySelector('button').addEventListener('click', () => {
    navigator.registerProtocolHandler("web+gba", "launchpad.html?gameID=%s&gametitle=%s&fav=%s", "GBA handler"); // last title arg included for compatibility
navigator.registerProtocolHandler("web+nes", "nes.html", "NES handler"); // last title arg included for compatibility
navigator.registerProtocolHandler("web+snes", "snes.html", "SNES handler"); // last title arg included for compatibility
navigator.registerProtocolHandler("web+sega", "segaMD.html", "Sega handler"); // last title arg included for compatibility;
  });