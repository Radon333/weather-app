import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home"
import Myloc from "./Pages/MyLoc/Myloc"
function App() {  
  return (
    <Switch>
        <Route path="/myloc-forecast">
          <Myloc/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
  );
}

export default App;
