import InputSearch from "../../molecules/inputSearch";
import logo from "../../../../public/assets/logo.png";

import "./Home.scss";
import CardCategories from "../../molecules/CardCategories";
import "../../molecules/CardCategories/CardCategories.scss";

const Home = () => {
  return (
    <section className="homePage">
      <img src={logo} className="homePage__logo" />
      <InputSearch />

      <div className="CardCategories__homepage__footer">
        <div className="CardCategories__homepage">
          <CardCategories></CardCategories>
        </div>
        <div className="CardCategories__image">
          <img className="footer" src="/assets/footer.jpg" />
        </div>
      </div>
    </section>
  );
};

export default Home;
