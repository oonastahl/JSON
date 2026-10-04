const laatikko = document.getElementById("saa-data");

fetch("https://api.openweathermap.org/data/2.5/weather?id=658225&appid=665ecd56dfc08dbb50feb8b8f5034e28&lang=fi&units=metric")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        //sään kuvaus
        console.log(data.weather[0].description);

        laatikko.innerHTML = data.weather[0].description;
    });
