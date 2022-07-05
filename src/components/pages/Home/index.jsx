import { useState, useEffect } from "react";

import InputSearch from "../../molecules/inputSearch";
import logo from "../../../../public/assets/logo.png";
import PokeCard from "../../molecules/pokemonCard";
import "./index.scss";

const Home = () => {
 
  const [pokemon, setPokemon] = useState([])
  const url = "https://pokeapi.co/api/v2/pokemon/"

  const getPokemons = async () => {
    const res = await fetch(url)
    const data = await res.json()

    console.log(data)
  }
  return (
    <section className="homePage">
      <img src={logo} className="homePage__logo" />
      <InputSearch />
      <div className="homePage__pokemonCardContainer">
        <PokeCard />
      </div>
    </section>
  );
};

export default Home;
