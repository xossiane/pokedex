import { useState, useEffect, useCallback } from "react";
import "../../molecules/pokemonCard/pokemonCard.scss";
import { fetchPokemon } from "../../../services/fetchPokemon";
import { getPokemon } from "../../../services/getPokemon";
import "./index.scss";

import PokeCard from "../../molecules/pokemonCard";

const PokeList = () => {
  const [pokemons, setPokemons] = useState([]);

  const renderFetch = async () => {
    const data = await fetchPokemon();

    const pokemonList = await getPokemon(data.results);

    setPokemons(pokemonList);
  };

  useEffect(() => {
    renderFetch();
  }, []);

  // console.log(pokemons);
  /*   const getPokemon = async (res) => {
    const pokemonData = [];
    for (let k in res) {
      const result = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${res[k].name}`
      );
      const dat = await result.json();
      pokemonData.push(dat);
    }

  
    setPokemons(pokemonData);
    //console.log(pokemonData)
  };

  const fetchPokemon = useCallback(async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151");
    const response = await res.json();
    //console.log(response.results);
    getPokemon(response.results);
  }, []);
  useEffect(() => {

    fetchPokemon();
  }, []);  */

  return (
    <div className="PokeCard">
      {!!pokemons.length &&
        pokemons.map((el) => (
          <PokeCard
            key={el.id}
            name={el.name}
            type={el.types}
            img={el.sprites.other.dream_world.front_default}
            id={el.id}
          />
        ))}
    </div>
  );
};

export default PokeList;
