import pokecardlogo from "../../../../public/assets/pokecardlogo.png"
import charmander from "../../../../public/assets/charmander.png"
const PokeCard = () => {
  const style = `pokeCard__type__fire`
    return (
       <div className={style}>
         {/* < img src={img} /> */}
         <h2 className="pokeCard__type__title">Charmander</h2>
         <h2 className="pokeCard__type__tag">Fire</h2>
         <h2 className="pokeCard__type__id">#002</h2>
         <img className="pokeCard__type__tag__logo" src={pokecardlogo}/>
         <img className="pokeCard__type__tag__img" src={charmander}/>
        
         <h1>{name}</h1>
       </div>
    )
};

export default PokeCard;
