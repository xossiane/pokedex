import CardInfo from "../../atoms/CardInfo";
import categories from "../../../data/categories.json";

function CardCategories(){
    return (
        <section>
        {categories.map((categ) => (
        <CardInfo
            className={categ.class}
            key={categ.id}
            image={categ.img}>
         </CardInfo>
         ))}
        </section>
        
    )
}
export default CardCategories;