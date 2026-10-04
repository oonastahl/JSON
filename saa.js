const laatikko = document.getElementById("saa-data");

fetch("https://api.openweathermap.org/data/2.5/weather?id=658225&appid=665ecd56dfc08dbb50feb8b8f5034e28&lang=fi&units=metric")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        //säätiedot
        "Sää: " + console.log(data.weather[0].description);
        + "<br>"
        + "Lämpötila: " + data.main.temp + " °C"
        + "<br>"
        + "Tuuli: " + data.wind.speed + " m/s";
        laatikko.innerHTML = data.weather[0].description;
    });
