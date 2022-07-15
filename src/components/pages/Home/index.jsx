import InputSearch from "../../molecules/inputSearch";
import logo from "/assets/logo.png";
import pikachu1 from "/assets/pikachu1.png";
import pikachu2 from "/assets/pikachu2.png";
import { Link } from "react-router-dom";

import "./Home.scss";
import CardCategories from "../../molecules/CardCategories";
import "../../molecules/CardCategories/CardCategories.scss";

const Home = () => {
  return (
    <section className="homePage">
      <img src={logo} className="homePage__logo" />
      <img src={pikachu1} className="homePage__pikachu1" />
      <img src={pikachu2} className="homePage__pikachu2" />
      <InputSearch />

      <div className="CardCategories__homepage__footer">
        <div className="CardCategories__homepage">
          <Link className="CardCategories__homepage__link" to="/list">
          <CardCategories></CardCategories>
          </Link>
        </div>
        <div className="CardCategories__image">
          <img className="footer" src="/assets/footer.jpg" />
        </div>
      </div>
    </section>
  );
};

export default Home;
