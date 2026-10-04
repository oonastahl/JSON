const pokeName = document.getElementById("pokemonName").value.toLowerCase();
let name = document.getElementById("pokemonName").value;​

fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
  .then(function (response) {​
    return response.json();​
})​​
  .then(function (responseJson) {​
    pokekuva(responseJson);​
})​
  .catch(function (error) {​
    document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";​
})​

function pokekuva(obj) {​
  let pokeurl = obj.sprites.front_default;​
    document.getElementById("kuva2").innerHTML = "<img src=" + pokeurl + ">";​
    document.getElementById("nimi").innerHTML = "<b>" + name + "</b>";​
    document.getElementById("pokemonName").value = "";​
    }​
}​
