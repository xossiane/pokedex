import InputSearch from "../../molecules/inputSearch";
import logo from "../../../../public/assets/logo.png";
import "./index.scss";

const Home = () => {
  return (
    <section className="homePage">
      <img src={logo} className="homePage__logo" />
      <InputSearch />
    </section>
  );
};

export default Home;
