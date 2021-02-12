import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import About from './components/About.js';
import Home from './components/Home.js';
import Nav from './components/Nav.js';
import Tanklist from './components/Tanklist.js';
import TankSelect from './components/TankSelect.js';
import Footer from './components/Footer.js';
import { tankData } from './data/tankData';

function App() {
  const [chosenTank, disTank] = useState([])

  const addTank = (id) => {
    const getTank = tankData.find(tank => tank.id === id)
    console.log('Tank', getTank)
    const updatedTank = chosenTank.slice()
    updatedTank.push(getTank)
    disTank(updatedTank)
    console.log(updatedTank)
  }

  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/home">
            <Home />
            <div class="container">
              <div class="row">
                <div class="col-sm">
                <Tanklist tanks={tankData} addTank={addTank} />
                </div>
                <div class="col-sm">
                <TankSelect chosenTank={chosenTank[0]}/>
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
