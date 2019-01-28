const fetchStarWars = document.getElementById('fetch-star-wars-data');
const fetchPokemon = document.getElementById('fetch-pokemon-data');

let characters = '<ul>';
let pokemon = '<ul>';

fetchStarWars.addEventListener("click", async function() {
  let response = await fetch('https://swapi.co/api/people/');
  let value = await response.json();

  value.results.forEach(function(ele) {
    characters += '<li class="list-items">'+ ele.name + '</li>';
  });

  characters += '</ul>';
  document.querySelector(".character__list").innerHTML = characters;
});

fetchPokemon.addEventListener("click", async function() {
  let response = await fetch('https://pokeapi.co/api/v2/pokemon');
  let value = await response.json();

  value.results.forEach(function(ele) {
    pokemon += '<li class="list-items">'+ ele.name + '</li>';
  });

  pokemon += '</ul>';
  document.querySelector(".pokemon__list").innerHTML = pokemon;
});
