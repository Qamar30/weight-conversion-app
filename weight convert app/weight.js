document.getElementById("kgsInput").addEventListener("input", function (e) {

   // document.getElementById("output").style.visibility = "visible";

    var kgs = e.target.value;
    //conversation rates

    document.getElementById("gramsOutput").innerHTML = kgs / 0.0022046;
    document.getElementById("poundsOutput").innerHTML = kgs / 2.2046;
    document.getElementById("ozOutput").innerHTML = kgs * 16;



});