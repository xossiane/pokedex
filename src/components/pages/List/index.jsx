import { useState, useEffect, useCallback } from "react";
import { pokemonList } from "../../../services/pokemonList";

import PokeCard from "../../molecules/pokemonCard";

const List = () => {
  const [pokemons, setPokemons] = useState([]);

  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/?limit=100");

  // console.log(pokemons);

  useEffect(() => {
    const fecthPokemon = async () => {
      const res = await fetch(url);
      const response = await res.json();
      // console.log(response.results);
      getPokemon(response.results);
    };

    const getPokemon = async (res) => {
      // const pokemonData = [];

      res.forEach(async (item) => {
        const result = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${item.name}`
        );

        const dat = await result.json();
        // console.log(dat);
        // pokemonData.push(dat);
        setPokemons(prev => [...prev, dat])
      });

      console.log(pokemons)

      // const names = [{ name: "kenji" }, { name: "josi" }];
      // setPokemons(names);
    };
    
    fecthPokemon();
  }, []);

  return (
    <h1>
      {pokemons.map((el) => (
        <PokeCard name={el.name} type={el.types[0].type.name}/>
      ))}
    </h1>  
  );
};

export default List;
