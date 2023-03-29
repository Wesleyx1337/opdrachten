function changediv() {
    let selColor = document.getElementById("Kleur").value;
    console.log(selColor)

    if(selColor == "Rood") {
        var el = document.getElementById("Default");
        el.classList.remove("BodyBlauw");
        el.classList.remove("BodyGroen");
        el.classList.remove("Default1");
        el.classList.add("BodyRood");
    }

    if(selColor == "Blauw") {
        var el = document.getElementById("Default");
        el.classList.remove("BodyRood");
        el.classList.remove("BodyGroen");
        el.classList.remove("Default1");
        el.classList.add("BodyBlauw");
    }
    
    if(selColor == "Groen") {
        var el = document.getElementById("Default");
        el.classList.remove("BodyBlauw");
        el.classList.remove("BodyRood");
        el.classList.remove("Default1");
        el.classList.add("BodyGroen");
    }
}