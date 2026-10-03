const laatikko = document.getElementById("toteutus-data");

fetch("toteutus.JSON")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
