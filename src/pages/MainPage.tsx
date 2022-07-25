import './mainPage.css';

import { useContext, useState } from 'react';

import Pokemoncard from '../Components/Pokemon';
import UserContext from '../Components/UserContext';

export default function MainPage() {
  const [money, setMoney] = useState(15000);
  const [moneyToAdd, SetMoneyToAdd] = useState(0);
  const { value } = useContext(UserContext);
  const multipleRender: any[] = [];
  for (let i = 0; i < 10; i += 1) {
    multipleRender.push({ id: i });
  }
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
        {multipleRender.map((item) => (
          <Pokemoncard key={item.id} />
        ))}
      </div>
      <div className="pokemon-pocket">
        <h2>pocket</h2>
        {value.map((item:any) => (
          <Pokemoncard name={item.name} weight={item.weight} key={item.name} />
        ))}
      </div>
    </div>
  );
}
