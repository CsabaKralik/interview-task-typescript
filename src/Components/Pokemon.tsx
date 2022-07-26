import './pokemon.css';

import { useContext, useEffect, useState } from 'react';

import pokemonInterface from './pokemon.1';
import UserContext from './UserContext';

export default function Pokemoncard({ name, weight, setMoney } :pokemonInterface) {
  const [pokemon, setpokemon] = useState<any>();
  const { value, SetValue } = useContext<any>(UserContext);
  const fetchPokemon = async () => {
    const rndmNumber = Math.floor(Math.random() * 905) + 1;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${rndmNumber}`);
    const json = await response.json();
    setpokemon(json);
  };
  useEffect(() => {
    fetchPokemon();
  }, []);

  const buy = () => {
    const money:any = document.getElementById('money')?.innerHTML;
    if (money >= pokemon.weight * 100) {
      setMoney(parseInt(money, 10) - pokemon.weight * 100);
      SetValue([...value, { id: pokemon.id, name: pokemon.name, weight: pokemon.weight }]);
      document.getElementById(pokemon.name)?.remove();
      if (money <= pokemon.weight * 100 + 2000 && !document.getElementById('warning')) {
        const bank = document.getElementById('bank');
        const label = document.createElement('label');
        label.id = 'warning';
        label.textContent = 'Low Money';
        bank?.append(label);
      }
    } else {
      console.log('not enough money');
    }
  };
  return (
    <div>
      {name && weight
        ? (
          <div className="pokemon-card" id={name}>
            <div className="pokemon-name">{`name: ${name}`}</div>
            <div className="pokemon-price">{`weight: ${weight}`}</div>
            <div className="pokemon-price">{`price: ${weight * 100}$`}</div>
          </div>
        )
        : (
          <div className="pokemon-card" id={pokemon ? pokemon.name : 'loading'}>
            <div className="pokemon-name">{pokemon ? `name: ${pokemon.name}` : 'loading'}</div>
            <div className="pokemon-price">{pokemon ? `price: ${pokemon.weight * 100}$` : 'loading'}</div>
            <button type="button" onClick={buy}>Buy</button>
          </div>
        )}
    </div>
  );
}
