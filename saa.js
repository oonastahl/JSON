const laatikko = document.getElementById("saa-data");

const aika = new Date();

const tunnit = aika.getHours();
const minuutit = aika.getMinutes().toString().padStart(2, "0");

const kellonaika = tunnit + "." + minuutit;

fetch("https://api.openweathermap.org/data/2.5/weather?id=658225&appid=665ecd56dfc08dbb50feb8b8f5034e28&lang=fi&units=metric")
    .then(response => response.json())
    .then(data => {
        laatikko.innerHTML =
        //aika
        "Sää kello " + kellonaika
        + "<br>"
        //säätiedot
        + "Sää: " + data.weather[0].description
        + "<br>"
        + "Lämpötila: " + data.main.temp + " °C"
        + "<br>"
        + "Tuuli: " + data.wind.speed + " m/s"
        + "<br>"
        + "<img src='https://openweathermap.org/img/wn/"
        + data.weather[0].icon
        + "@2x.png'>";
    });
