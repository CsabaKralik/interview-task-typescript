import './mainPage.css';

import { useContext, useState } from 'react';

import Pokemoncard from '../Components/Pokemon';
import UserContext from '../Components/UserContext';

export default function MainPage() {
  const { context, setContext } = useContext(UserContext);
  const [money, setMoney] = useState(15000);
  const [moneyToAdd, SetMoneyToAdd] = useState(0);
  const addMoney = (e:any) => {
    e.preventDefault();
    setMoney(money + moneyToAdd);
  };
  return (
    <div>
      <h2>
        My money:
        {money}
      </h2>
      <form>
        <input type="number" value={moneyToAdd} onChange={(e) => SetMoneyToAdd(parseInt(e.target.value, 10))} />
        <button type="submit" onClick={addMoney}>Add money</button>
      </form>
      <div className="pokemon-shop">
        <Pokemoncard />
        <Pokemoncard />
        <Pokemoncard />
        <Pokemoncard />
        <Pokemoncard />
        <Pokemoncard />
        <Pokemoncard />
        <Pokemoncard />
        <Pokemoncard />
        <Pokemoncard />
      </div>
      <div className="pokemon-pocket">
        <h2>pocket</h2>
        {/*go trough the context and rebuld components here */}
      </div>
    </div>
  );
}
