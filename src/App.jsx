import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home"
import Current from "./Pages/Current/Current"
function App() {  
  return (
    <Switch>
        <Route path="/current-weather">
          <Current/>
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
  );
}

export default App;
