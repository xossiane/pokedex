import "../public/styles/Global.css";

import Home from "./components/pages/Home";
import CardInfo from "./components/atoms/CardInfo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <CardInfo></CardInfo>
        <CardInfo></CardInfo>
        <CardInfo></CardInfo>
      </header>
    </div>
  );
}

export default App;
