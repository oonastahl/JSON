fetch("toteutus.JSON")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
