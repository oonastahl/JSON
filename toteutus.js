const laatikko = document.getElementById("toteutus-data");

fetch("toteutus.JSON")
    .then(response => response.json())
    .then(data => {
        laatikko.innerHTML = data.nimi + "<br>Osallistujat: " + data.osallistujat + "<br>" + data.alku + "-" + data.loppu + "<br>";

        for (var i = 0; i < data.nimet.length; i++) {
            laatikko.innerHTML += data.nimet[i] + "<br>";
        }
    });
