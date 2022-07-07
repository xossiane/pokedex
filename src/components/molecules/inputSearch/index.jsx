import "./index.scss";

const InputSearch = () => {
  
  return (
    <section className="searchSection">
      <div className="searchSection__title">
        <h1>
          What Pokemon  <br /> are you looking for?
        </h1>
      </div>
      <input
        type="search"
        placeholder="Search Pokemon, Move, Ability etc"
        className="searchSection__input"
      />
    </section>
  );
};

export default InputSearch;
