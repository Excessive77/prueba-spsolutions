import fetch from 'node-fetch';

const response = await fetch('https://pokeapi.co/api/v2/pokemon');
const data = await response.json();

const getAllPokemons = (req, res) => {
    res.send(data);
};

export { getAllPokemons };
