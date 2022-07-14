import { useState, useEffect, useCallback } from "react";
import "../../molecules/pokemonCard/pokemonCard.scss";
import { fetchPokemon } from "../../../services/fetchPokemon";
import { getPokemon } from "../../../services/getPokemon";
import "./index.scss";

import PokeCard from "../../molecules/pokemonCard";

const PokeList = ({pokemonslist}) => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setisLoading] = useState();
  const renderFetch = async () => {
    setisLoading(true);
    const data = await fetchPokemon();

    const pokemonList = await getPokemon(data.results);

    setPokemons(pokemonList);
    setisLoading(false);
  };

  useEffect(() => {
    renderFetch();
  }, []);


  return (
    <div className="PokeCard">
     
       {!isLoading && pokemons.map((el) => (
          <PokeCard
            key={el.id}
            name={el.name}
            type={el.types}
            img={el.sprites.other.dream_world.front_default}
            id={el.id}
          />
        ))}
        {isLoading && <div className="PokeCard__loader">Loading... Please Wait!</div>}
    </div>
  );
};

export default PokeList;
