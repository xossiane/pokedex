import Bulba from "/assets/bulba.png"
import PokeTag from "../../atoms/PokeTag"
import Back from "/assets/Back.png"
import ornament from "/assets/ornament.png"
import dotted from "/assets/dotted.png"
import male from "/assets/male.png"
import female from "/assets/female.png"
import love from "/assets/love.png"


import { useHistory } from "react-router-dom";

import './About.scss'


function About(){
   let history = useHistory();
   const HandleOnClick = () => {history.push("/list")
    console.log('oi')};
   
    return (
    <div className="About__container">
        <div className="About__container--color">
        <button  className="AboutPage__back--link" onClick={HandleOnClick}>
        <img src={Back} className="AboutPage__back"  />
        </button>
        <img src={ornament} className="AboutPage__ornament" />
        <img src={dotted} className="AboutPage__dotted" />
        <h2 className="About__title">Bulbasaur</h2>
        <h2 className="About__id">#001</h2>
        <img src={love} className="AboutPage__love" />
        <div className="About__tag">
        <PokeTag text={"Grass"} className="__typeone"></PokeTag>
        <PokeTag text={"Poison"} className="__typetwo"></PokeTag>
        </div>
        <div className="About__container__info"> 
        <img className="About__img" src={Bulba}/>
        <div className="About__container__tab">
        <PokeTag text={"About"} className="--about"></PokeTag>
        <PokeTag text={"Base Stats"} className="--stats"></PokeTag>
        <PokeTag text={"Evolution"} className="--evolution"></PokeTag>
        <PokeTag text={"Moves"} className="--moves"></PokeTag>
        </div>
        <h2 className="About__description">Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger. </h2>
        <span className="About__metrics">
        <div className="About__metrics__title">
            <h2 className="About__metrics__title--height">Height</h2>
            <h2 className="About__metrics__title--weight">Weight</h2>
        </div>
        <div className="About__metrics__number">
            <h2 className="About__metrics__number--height">2'3.6" (0.70cm)</h2>
            <h2 className="About__metrics__number--weight">15.2lbs (6.9 kg)</h2>
            </div>
            </span>

        <h2 className="About__breeding">Breeding</h2>
        <h2 className="About__breeding__gender--text">Gender</h2>
        <h2 className="About__breeding__gender--male"><img className="About__breeding__gender--maleimg" src={male} />87.5% </h2>
        <h2 className="About__breeding__gender--female"><img className="About__breeding__gender--femaleimg" src={female} />12.5% </h2>
        <h2 className="About__breeding__gender--textEggGroup">Egg Groups</h2> <h2 className="About__breeding__gender--textMonster">Monster</h2>
        <h2 className="About__breeding__gender--textEggCycle">Egg Cycle</h2> <h2 className="About__breeding__gender--textGrass">Grass</h2>
        </div>
          
        </div>
     </div>
    )
    }
    export default About;
    