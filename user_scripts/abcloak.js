let test = 1;
function toggleCheck() {
    if(document.getElementById("abtog").checked === true){
    test = 2;
    localStorage.setItem("testItem", JSON.stringify(test));
    console.log("checked");
    }
    else{
        test = 1;
        localStorage.setItem("testItem", JSON.stringify(test));
        console.log("unchecked");
    }
}

