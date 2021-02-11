import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState } from 'react';
import About from './components/About.js';
import Home from './components/Home.js';
import Nav from './components/Nav.js';
import Tanklist from './components/Tanklist.js';
import TankSelect from './components/TankSelect.js';
import Footer from './components/Footer.js';
import { tankData } from './data/tankData';

function App() {
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
                <Tanklist tanks={tankData}/>
                </div>
                <div class="col-sm">
                <TankSelect />
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
