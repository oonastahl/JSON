console.log("JavaScript toimii");

const laatikko = document.getElementById("json-data");

console.log(laatikko);

fetch("tietue.JSON")
    .then(response => response.json())
    .then(data => {
    console.log(data);
    console.log(data.opintojakso.nimi);
    laatikko.innerHTML = data.otsikko + "<br>" + data.kuvaus + "<p><img src='" + data.kuva + "'></p>" + "<br>" + data.opintojakso.nimi + "<br>" + data.opintojakso.tunnus + "<br>" + data.opintojakso.opintopisteet;
    for (var i = 0; i < data.tekniikat.length; i++) {
        laatikko.innerHTML += data.tekniikat[i].aihe + "<br>";
    }
    })
