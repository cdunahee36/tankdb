import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState } from 'react';
import About from './components/About.js';
import Home from './components/Home.js';
import Nav from './components/Nav.js';
import Tanklist from './components/Tanklist.js';
import Footer from './components/Footer.js';
import { tankData } from './data/tankData';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/home" exact component={() => <Home />} />
          <Route path="/search" exact component={() => <Tanklist tanks={tankData} />} />
          <Route path="/about" exact component={() => <About />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
