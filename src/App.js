import React from 'react';
import './App.css';

import Fog from "./Components/fog"
import Office from "./Components/offcie"
import Files from "./Components/files"
import Values from "./Components/values"
import Contact from "./Components/contact"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Fog} />
        <Route exact path="/office" component={Office} />
        <Route exact path="/files" component={Files} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/values" component={Values} />
      </Switch>
    </div>
  );
}

export default App;
