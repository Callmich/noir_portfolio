import React from 'react';
import './App.css';

import Fog from "./Components/fog"
import Office from "./Components/offcie"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Fog} />
        <Route exact path="/office" component={Office} />
      </Switch>
    </div>
  );
}

export default App;
