import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import About from './components/About.js';
import Home from './components/Home.js';
import Nav from './components/Nav.js';
import Tank from './components/Tank.js';
import TankSelect from './components/TankSelect.js';
import Footer from './components/Footer.js';
import tankData from './data/tankData.json';

function App() {
  const [chosenTank, disTank] = useState("");

  const displayTank = Name => {
    disTank(Name);
  };

  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/home">
            <Home />
            <div class="container" id="Ui">
              <div class="row">
                <div class="col-sm" id="tank-list">
                  {tankData.map(tank => {
                  return (
                  <Tank
                    id={tank.id}
                    Name={tank.name}
                    Weight={tank.weight}
                    Length={tank.length}
                    Size={tank.size}
                    Type={tank.type}
                    Count={tank.country}
                    Img={tank.img}
                    displayTank={displayTank}
                  />
                  );
                  })}
                </div>
                <div class="col-sm">
                <TankSelect chosenTank={chosenTank}/>
                </div>
              </div>
            </div>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
