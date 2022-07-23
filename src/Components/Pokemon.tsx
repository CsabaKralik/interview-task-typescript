interface Pokemon {
  name: string;
  weight: number;
}

export default function Pokemoncard({ name, weight }:Pokemon) {
  return (
    <div>
      <div>{name}</div>
      <div>{weight}</div>
    </div>
  );
}
