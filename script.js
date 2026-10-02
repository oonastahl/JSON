console.log("JavaScript toimii");

fetch("tietue.JSON")
.then(response => response.json())
.then(data => console.log(data))
