fetch('http://endpoint.i10.repl.co/nes-alt/Abadox.nes.zip', {mode: 'no-cors'}).then(r=>{
    console.log("Server OK");
  })
  .catch(e=>{
    serverOffline();
    });



function serverOffline() {
    let serverStatus = 1;
    alert("The main server is blocked, or offline. Loading alternative server...");
    localStorage.setItem("serverStat", JSON.stringify(serverStatus));
    console.log(serverStatus);
}