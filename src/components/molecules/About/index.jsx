import Bulba from "../../../../public/assets/bulba.png"
import PokeTag from "../../atoms/PokeTag"
import Back from "../../../../public/assets/Back.png"
import ornament from "../../../../public/assets/ornament.png"
import dotted from "../../../../public/assets/dotted.png"
import biglogo from "../../../../public/assets/biglogo.png"
import './About.scss'


function About(){
   
    return (
    <div className="About__container">
        <div className="About__container--color">
        <img src={Back} className="AboutPage__back" />
        <img src={ornament} className="AboutPage__ornament" />
        <img src={dotted} className="AboutPage__dotted" />
        <img src={biglogo} className="AboutPage__logo" />
        <h2 className="About__title">Bulbasaur</h2>
        <h2 className="About__id">#001</h2>
        <div className="About__tag">
        <PokeTag text={"Grass"} className="__typeone"></PokeTag>
        <PokeTag text={"Poison"} className="__typetwo"></PokeTag>
        </div>
        <div className="About__container__info"> 
        <img className="About__img" src={Bulba}/>
        <div className="About__container__tab">
        <PokeTag text={"About"} className="__about"></PokeTag>
        <PokeTag text={"Base Stats"} className="__stats"></PokeTag>
        <PokeTag text={"Evolution"} className="__evolution"></PokeTag>
        <PokeTag text={"Moves"} className="__moves"></PokeTag>
        </div>
        </div>
          
        </div>
     </div>
    )
    }
    export default About;
    