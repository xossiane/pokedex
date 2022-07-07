import pokecardlogo from "../../../../public/assets/pokecardlogo.png"
import charmander from "../../../../public/assets/charmander.png"
const PokeCard = ({id, name, img, type}) => {
    return (
       <div className="cardPoke">
         < img src={img} />
         <h2 className="cardPoke__title">Charmander</h2>
         <h2 className="cardPoke__tag">Fire</h2>
         <h2 className="cardPoke__id">#002</h2>
         <img className="cardPoke__tag__logo" src={pokecardlogo}/>
         <img className="cardPoke__tag__img" src={charmander}/>
        
         <h1>{name}</h1>
       </div>
    )
};

export default PokeCard;
