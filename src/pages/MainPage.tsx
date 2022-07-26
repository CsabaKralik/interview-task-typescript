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
    if (money + moneyToAdd > 2000) {
      document.getElementById('warning')?.remove();
    }
  };
  return (
    <div>
      <div id="bank">
        <h1>My money:</h1>
        <h2 id="money">
          {money}
        </h2>
      </div>
      <form>
        <input type="number" value={moneyToAdd} min={0} onChange={(e) => SetMoneyToAdd(parseInt(e.target.value, 10))} />
        <button type="submit" onClick={addMoney}>Add money</button>
      </form>
      <h2 className="small-title">shop</h2>
      <div className="pokemon-shop">
        {multipleRender.map((item) => (
          <Pokemoncard key={item.id} setMoney={setMoney} />
        ))}
      </div>
      <h2 className="small-title">pocket</h2>
      <div className="pokemon-pocket">
        {value.map((item:any) => (
          <Pokemoncard name={item.name} weight={item.weight} key={item.name} />
        ))}
      </div>
    </div>
  );
}
