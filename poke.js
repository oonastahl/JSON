let name;
let pokemon;

function poke() {

    const pokeName = document.getElementById("pokemonName").value.toLowerCase();

    name = document.getElementById("pokemonName").value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (responseJson) {
            pokekuva(responseJson);
        })
        .catch(function (error) {
            document.getElementById("nimi").innerHTML =
                "<p>Tietoa ei pystytä hakemaan</p>";
        });
}

function pokekuva(obj) {

    pokemon = obj;

    let pokeurl = obj.sprites.front_default;

    document.getElementById("kuva2").innerHTML =
        "<img src='" + pokeurl + "'>";

    document.getElementById("nimi").innerHTML =
        "<b>" + name + "</b>";

    document.getElementById("pokemonName").value = "";

    document.getElementById("kaanna").style.display = "block";
}

function kaanna() {

    let pokeurl = pokemon.sprites.back_default;

    document.getElementById("kuva2").innerHTML =
        "<img src='" + pokeurl + "'>";

    document.getElementById("ominaisuudet").innerHTML =
    "Korkeus: " + pokemon.height + "<br>"
    + "Paino: " + pokemon.weight + "<br>"
    + "Tyyppi: " + pokemon.types[0].type.name;

}
