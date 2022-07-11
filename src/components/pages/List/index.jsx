import PokeList from "../../organisms/pokeList"
import './PokeCard.scss'
import logo from "../../../../public/assets/logo.png"
import arrow from "../../../../public/assets/arrow.png"
import list from "../../../../public/assets/list.png"

const List = () => {
  return(
    <>
    <div className="PokeList">
    <img src={logo} className="PokeList__logo"/>
    <img src={arrow} className="PokeList__arrow" />
    <img src={list} className="PokeList__list" />
    <h1 className="PokeList__title"> Pokedex </h1>
    <div className="PokeList__cards">
    <PokeList />
    </div>
    </div>
    </>
  )
}

export default List;