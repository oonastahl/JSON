const laatikko = document.getElementById("toteutus-data");

fetch("toteutus.JSON")
    .then(response => response.json())
    .then(data => {
        laatikko.innerHTML = data.nimi
            + "<br><br>"
            + "Osallistujat: " + data.osallistujat
            + "<br><br>";

        for (var i = 0; i < data.nimet.length; i++) {
            laatikko.innerHTML += data.nimet[i] + " ";
        }

        laatikko.innerHTML += "<br><br>"
            + data.alku + "-" + data.loppu
            + "<br><br>"
            + "Kesto: " + data.kesto + " viikkoa"
            + "<br><br>"
            + "<p><img src='" + data.kuva + "'></p>"
            + "<br><br>";
    });
