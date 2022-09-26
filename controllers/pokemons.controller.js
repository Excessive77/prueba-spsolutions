import fetch from 'node-fetch';

const response = await fetch('https://pokeapi.co/api/v2/pokemon');
const data = await response.json();

const getAllPokemons = (req, res) => {
    res.send(data);
};

const getPokemon = name => {
    const pokemon = data.results.find(pokemon => pokemon.name === name);
    return pokemon;
};

const getPokemonByName = (req, res) => {
    console.log(req);
    const pokemon = getPokemon(req.params.name);
    res.send(pokemon);
};

export { getAllPokemons, getPokemonByName };
