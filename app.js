import express from 'express';
const app = express();
const port = 4000;

//Routes
import { pokemonsRouter } from './routes/pokemons.routes.js';

app.use(express.json());

//Define endpoints
app.use('/api/SPS/pokemons', pokemonsRouter);

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
