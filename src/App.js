import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState } from 'react';
import About from './components/About.js';
import Home from './components/Home.js';
import Nav from './components/Nav.js';
import TankSelect from './components/TankSelect.js';
import Footer from './components/Footer.js';
import {tankData} from './data/tankData';
import Tankspic from './components/Tankpics.js';

function App() {
  const [chosenTank, disTank] = useState([])

  const addTank = (id) => {
    const foundTank = tankData.find(tank => tank.id === id)

    const updatedTank = chosenTank.slice()
    updatedTank.push(foundTank)
    disTank(updatedTank)
  
  }

  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/home">
            <Home />
            <div class="container" id="Ui">
              <div class="row">
                <div class="col-sm">
                  <TankSelect tanks={tankData} 
                  addTank={addTank}/>
                </div>
                <div class="col-sm" id="overflow">
                  <Tankspic choTank={chosenTank}/>
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
