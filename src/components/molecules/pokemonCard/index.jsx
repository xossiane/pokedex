import "./index.scss"

const PokeCard = ({id, name, img, type}) => {
  const style = `pokeCard__type__${type}`
    return (
       <div className={style}>
         < img src={img} />
         <h1>{name} </h1>
         <p>{id}</p>
       </div>
    )
};

export default PokeCard;
