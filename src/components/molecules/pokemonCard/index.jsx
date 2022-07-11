import pokecardlogo from "../../../../public/assets/pokecardlogo.png"
import charmander from "../../../../public/assets/charmander.png"
const PokeCard = ({id, name, img, type}) => {
  const style = `pokeCard__type__fire`
    return (
       <div className={style}>
         {/* < img src={img} /> */}
         <h2 className="pokeCard__type__title">{name}</h2>
         <h2 className="pokeCard__type__tag">{type}</h2>
         <h2 className="pokeCard__type__id">#{id}</h2>
         <img className="pokeCard__type__tag__logo" src={pokecardlogo}/>
         <img className="pokeCard__type__tag__img" src={img}/>   
       </div>
    )
};

export default PokeCard;
