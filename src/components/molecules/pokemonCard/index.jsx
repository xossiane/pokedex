import pokecardlogo from "../../../../public/assets/pokecardlogo.png";

import "./pokemonCard.scss";

const PokeCard = ({ id, name, img, type }) => {
  if (type.length === 0) {
    return <p>teste</p>;
  }
  const style = `pokeCard__type--${type[0].type.name} pokeCard__type`;

  return (
    <div className={style}>
      <div className="pokeCard__type__card">
        <h2 className="pokeCard__type__title">{name}</h2>
        {type.map((el, index) => (
          <h2 className={`pokeCard__type__tag--${index}`} key={index}>
            {el.type.name}
          </h2>
        ))}
        <h2 className="pokeCard__type__id">#{id}</h2>
        <img className="pokeCard__type__tag__logo" src={pokecardlogo} />
        <img className="pokeCard__type__tag__img" src={img} />
      </div>
    </div>
  );
};

export default PokeCard;
