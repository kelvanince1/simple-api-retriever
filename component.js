'use strict';

const starWarsComponent = React.createElement;

class RetrieveStarWarsData extends React.Component {
  render() {
    let characters = '<ul>';

    return starWarsComponent(
      'button',
      { onClick: async function() {
        const res = await fetch('https://swapi.co/api/people/');
        let value = await res.json();

        value.results.forEach(function(ele) {
          characters += '<li class="list-items">'+ ele.name + '</li>';
        });

        characters += '</ul>';
        document.querySelector(".react_character__list").innerHTML = characters;
      }},
      'Retrieve Star Wars with React'
    );
  }
}

const pokemonComponent = React.createElement;

class RetrievePokemonData extends React.Component {
  render() {
    let characters = '<ul>';

    return pokemonComponent(
      'button',
      { onClick: async function() {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon');
        let value = await res.json();

        value.results.forEach(function(ele) {
          characters += '<li class="list-items">'+ ele.name + '</li>';
        });

        characters += '</ul>';
        document.querySelector(".react_pokemon__list").innerHTML = characters;
      }},
      'Retrieve Pokemon with React'
    );
  }
}

const starWarsContainer = document.querySelector('.react_character__list');
ReactDOM.render(starWarsComponent(RetrieveStarWarsData), starWarsContainer);

const pokemonContainer = document.querySelector('.react_pokemon__list');
ReactDOM.render(pokemonComponent(RetrievePokemonData), pokemonContainer);
