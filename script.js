console.log("JavaScript toimii");

const laatikko = document.getElementById("json-data");

console.log(laatikko);

fetch("tietue.JSON")
    .then(response => response.json())
    .then(data => {
    console.log(data);
    laatikko.innerHTML = data.otsikko + "<br>" + data.kuvaus;
    })
