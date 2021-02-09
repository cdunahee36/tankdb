import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './components/About.js';
import Home from './components/Home.js';
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/home" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
