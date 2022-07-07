const PokeCard = ({id, name, img, type}) => {
    return (
       <div className="cardPoke">
         < img src={img} />
         <h1>{name}</h1>
       </div>
    )
};

export default PokeCard;
