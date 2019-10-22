import React from "react";
import "./App.css";
import NavBar from "./NavigationBar/NavBar";
import NavigationBar from "./NavigationBar/NavigationBar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "components/Home";
import About from "components/About";
import Contact from "components/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <header className="App-header">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
          </Switch>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Router>
  );
}

export default App;
