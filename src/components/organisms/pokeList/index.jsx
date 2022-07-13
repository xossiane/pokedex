import { useState, useEffect, useCallback } from "react";
import '../../molecules/pokemonCard/pokemonCard.scss'
import { pokemonList } from "../../../services/pokemonList";

import PokeCard from "../../molecules/pokemonCard";

const PokeList = ({pokemonslist}) => {
  const [pokemons, setPokemons] = useState([]);

  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/?limit=151");
  console.log('brincando com props', pokemonslist)
  // console.log(pokemons);

  useEffect(() => {
    const fetchPokemon = async () => {
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

      // console.log(pokemons)

      // const names = [{ name: "kenji" }, { name: "josi" }];
      // setPokemons(names);
    };
    
    fetchPokemon();
  }, []);

  return (
    <div className="PokeCard">
      <>{pokemons.map((el) => (
        <PokeCard 
        
        name={el.name} 
        type={el.types} 
        // type2={el.types[1].type.name}
        img={el.sprites.other.dream_world.front_default}
        id={el.id}
        />
      ))}
      
      </>
      </div>
  );
};

export default PokeList;
