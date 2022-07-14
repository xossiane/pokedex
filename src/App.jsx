import { Route, Redirect, Switch} from "react-router-dom";


import "./App.css";
import "../public/styles/_variables.scss";

import Home from "./components/pages/Home";
import List from "./components/pages/List";
import About from "./components/pages/About";

function App() {
  return (
    <>
    <Switch>
      <Route exact path={"/"}>
       < Home />
      </Route>
    
      <Route path="/list">
        <List />
      </Route>

      <Route path="/about">
        <About />
      </Route>
      
      </Switch>
    </>
  );
}

export default App;
