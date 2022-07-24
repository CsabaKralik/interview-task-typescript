import './pokemon.css';

import { useContext, useEffect, useState } from 'react';

import UserContext from './UserContext';

export default function Pokemoncard() {
  const [pokemon, setpokemon] = useState<any>();
  const [context, SetContext] = useContext<any>(UserContext);
  const fetchPokemon = async () => {
    const rndmNumber = Math.floor(Math.random() * 1153) + 1;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${rndmNumber}`);
    const json = await response.json();
    setpokemon(json);
  };
  useEffect(() => {
    fetchPokemon();
  }, []);

  const buy = () => {
    SetContext(context.append({ name: pokemon.name, weight: pokemon.weight }));
  };
  return (
    <div className="pokemon-card">
      <div className="pokemon-name">{pokemon ? pokemon.name : 'loading'}</div>
      <div className="pokemon-price">{pokemon ? `${pokemon.weight * 100}$` : 'loading'}</div>
      <button type="button" onClick={buy}>Buy</button>
    </div>
  );
}
