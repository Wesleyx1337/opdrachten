function checkveld(inp) {
    console.log("keyup op " + inp.placeholder + " waarde is: " + inp.value);
    document.getElementById('vnaam').style.backgroundColor = "#FFAAAA"

    if(inp.id == "vnaam") {
        if(inp.value.length > 1) {
            inp.style.backgroundColor = "#AAFFAA";
        } else {
            inp.style.backgroundColor = "#FFAAAA";
            document.getElementById("error_vnaam").innerHTML = "Voornaam moet minimaal 2 tekens bevatten"
        }
    }
    
    if(inp.id == "anaam") {
        if(inp.value.length > 1) {
            inp.style.backgroundColor = "#AAFFAA";
        } else {
            inp.style.backgroundColor = "#FFAAAA";
            document.getElementById("error_anaam").innerHTML = "Achternaam moet minimaal 2 tekens bevatten"
        }
        
    }
}