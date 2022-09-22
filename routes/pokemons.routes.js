import express from 'express';

//Controllers
import { getAllPokemons } from '../controllers/pokemons.controller.js';

const pokemonsRouter = express.Router();

pokemonsRouter.get('/', getAllPokemons);

export { pokemonsRouter };
