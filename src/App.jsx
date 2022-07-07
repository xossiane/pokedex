import { Route, Redirect } from "react-router-dom";


import "./App.css";
import "../public/styles/_variables.scss";

import Home from "./components/pages/Home";
import List from "./components/pages/List";

function App() {
  return (
    <>
      <Route exact path={"/"}>
       < Home />
      </Route>

      <Route path="/list">
        <List />
      </Route>
    </>
  );
}

export default App;
