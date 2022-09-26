import express from 'express';

//Controllers
import {
    getAllPokemons,
    getPokemonByName,
} from '../controllers/pokemons.controller.js';

const pokemonsRouter = express.Router();

pokemonsRouter.get('/', getAllPokemons);

pokemonsRouter.get('/:name', getPokemonByName);

export { pokemonsRouter };
