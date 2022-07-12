import React, { useState, useEffect } from "react";
import PokemonSearch from "../../../services/PokemonSearch";
import PokeCard from "../../../components/molecules/pokemonCard";
import "./inputSearch.scss";

const InputSearch = () => {
  const [search, setSearch] = useState("");
  const [pokedata, setPokedata] = useState();

  const handleOnKeyPress = async (e) => {
    if (e.key === "Enter") {
      const data = await PokemonSearch(search.toLocaleLowerCase());
      setPokedata(data);
    }
  };

  return (
    <section className="searchSection">
      <div className="searchSection__title">
        <h1>
          What Pokemon <br /> are you looking for?
        </h1>
      </div>
      <input
        type="search"
        placeholder="Search Pokemon, Move, Ability etc"
        className="searchSection__input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={handleOnKeyPress}
      />
      <div>{pokedata && < PokeCard   
        name={pokedata.name} 
        type={pokedata.types[0].type.name} 
        img={pokedata.sprites.other.dream_world.front_default}
        id={pokedata.id} />}</div> 
    </section>
  );
};

export default InputSearch;
