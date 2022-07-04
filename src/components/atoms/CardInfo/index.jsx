import './CardInfo.scss'


const CardInfo = (props) => {
return (
    <div className="CardInfo">
        <img className="cardInfo__image" 
        src={props.image} alt="" />
    </div>

);
};

export default CardInfo;