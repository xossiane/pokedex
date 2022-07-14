import PokeList from "../../organisms/pokeList"
import './PokeCard.scss'
import logo from "../../../../public/assets/logo.png"
import arrow from "../../../../public/assets/arrow.png"
import list from "../../../../public/assets/list.png"
import pikachu1 from "../../../../public/assets/pikachu1.png"
import pikachu2 from "../../../../public/assets/pikachu2.png"
import { Link } from "react-router-dom"

const List = () => {
  

  return(
    <>
    <div className="PokeList">
    <img src={pikachu1} className="homePage__pikachu1" />
      <img src={pikachu2} className="homePage__pikachu2" />
    <img src={logo} className="PokeList__logo"/>
    <Link className="PokeList__arrow__link" to="/">
    <img src={arrow} className="PokeList__arrow" />
    </Link>
    <img src={list} className="PokeList__list" />
    <h2 className="PokeList__title"> Pokedex </h2>
    <div className="PokeList__cards">
    <PokeList />
    </div>
    </div>
    </>
  )
}

export default List;
