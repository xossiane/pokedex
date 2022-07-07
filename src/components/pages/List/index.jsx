import { useState, useEffect, useCallback } from "react";
import '../../molecules/pokemonCard/pokemonCard.scss'
import PokeCard from "../../molecules/pokemonCard";

const List = () => {
  const [pokemons, setPokemons] = useState([]);


  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((response) => response.json())
      .then((datas) => setPokemons(datas.results));
  }, []);
     
  return (
    <><PokeCard></PokeCard><h1>
      {pokemons.map((el) => (
        <li>{el.name}</li>
      ))}
    </h1></>
  );
};

export default List;
