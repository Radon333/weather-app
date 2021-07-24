import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home"
import DisplayCurrent from "./Pages/Current/DisplayCurrent"
function App() {  
  return (
    <Switch>
        <Route path="/current-weather">
          <DisplayCurrent/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
  );
}

export default App;
