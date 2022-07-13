import Bulba from "../../../../public/assets/bulba.png"
import './About.scss'
function About(){
    return (
    <div className="About__container">
        <div className="About__container--color">
        <h2 className="About__title"> Bulbasaur </h2>
        <h2 className="About__id">#001</h2>
        
        <div className="About__container__info"> 
        <img className="About__img" src={Bulba}/>
        </div>
          
        </div>
     </div>
    )
    }
    export default About;
    