import { useState, useEffect } from "react";

import InputSearch from "../../molecules/inputSearch";
import logo from "../../../../public/assets/logo.png";
import PokeCard from "../../molecules/pokemonCard";
import "./Home.scss";
import CardCategories from "../../molecules/CardCategories";
import '../../molecules/CardCategories/CardCategories.scss';

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
<<<<<<< HEAD
      <div className="CardCategories__homepage__footer">
    <div className="CardCategories__homepage">
    <CardCategories></CardCategories>
    </div>
    <div className="CardCategories__image">
    <img className="footer" src="/assets/footer.jpg"/>
    </div>
    </div>
    
    </section>
    
=======
    </section>
>>>>>>> main
  );
};

export default Home;
