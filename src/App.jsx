import "../public/styles/Global.css";

import Home from "./components/pages/Home";
import CardInfo from "./components/atoms/CardInfo";

function App() {
  return (
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
}

export default App;
