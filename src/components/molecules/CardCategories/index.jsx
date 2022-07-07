import CardInfo from "../../atoms/CardInfo";
import categories from "../../../data/categories.json";

import './CardCategories.scss'

function CardCategories(){
    return (
        <><div className="CardCategories__homepage__content">
            {categories.map((categ) => (

                <CardInfo
                    className={`${`CardCategories__homepage__content`} ${categ.class}`}
                    key={categ.id}
                    image={categ.img}>
                </CardInfo>

            ))}
        </div><div className="CardCategories__homepage__content__desktop">
                {categories.map((categ) => (

                    <CardInfo
                        className={`${`CardCategories__homepage__content__desktop`} ${categ.class}`}
                        key={categ.id}
                        image={categ.img2}>
                    </CardInfo>

                ))}
            </div></>
        
    );
}
export default CardCategories;