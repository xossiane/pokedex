import PokeList from "../../organisms/pokeList"
import './PokeCard.scss'
const List = () => {
  return(
    <>
    <h1 className="PokeList__Title"> Pokedex </h1>
    <div className="PokeList__cards">
    <PokeList />
    </div>
    </>
  )
}

export default List;