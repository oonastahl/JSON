fetch("TÄHÄN API-OSOITE")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
