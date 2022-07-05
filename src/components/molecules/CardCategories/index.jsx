import CardInfo from "../../atoms/CardInfo";
import categories from "../../../data/categories.json";

import './CardCategories.scss'

function CardCategories(){
    return (
        <div className="CardCategories__homepage__content"> 
        {categories.map((categ) => (
        <CardInfo
            className={`${`CardCategories__homepage__content`} ${categ.class}`}
            key={categ.id}
            image={categ.img}>
         </CardInfo>
         ))}
        </div>
        
    )
}
export default CardCategories;