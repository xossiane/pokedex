import CardInfo from "../../atoms/CardInfo";
import {categories} from "../../../data"

function CardCategories(){
    return (
        {categories.map((categ) => (
        <CardInfo image= {props.image}></CardInfo>)
        )}
        
    )
}
export default CardCategories;