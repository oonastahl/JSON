const laatikko = document.getElementById("toteutus-data");

fetch("toteutus.JSON")
    .then(response => response.json())
    .then(data => {
        laatikko.innerHTML = data.nimi + "<br>" + data.osallistujat;
    });
