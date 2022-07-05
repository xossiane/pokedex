import "../public/styles/Global.css";

<<<<<<< HEAD

import './App.css'
import CardCategories from './components/molecules/CardCategories'
import footer from '../public/assets/footer.jpg'
=======
import Home from "./components/pages/Home";
import CardInfo from "./components/atoms/CardInfo";

>>>>>>> main
function App() {
  return (
<<<<<<< HEAD
    <div className="CardCategories__homepage__footer">
    <div className="CardCategories__homepage">
    <CardCategories></CardCategories>
    
    </div>
    <img className="footer" src="/assets/footer.jpg"/>
    </div>
  )
=======
    <>
      <Home />
      <div className="App">
        <header className="App-header">
          <CardInfo></CardInfo>
          <CardInfo></CardInfo>
          <CardInfo></CardInfo>
        </header>
      </div>
    </>
  );
>>>>>>> main
}

export default App;
