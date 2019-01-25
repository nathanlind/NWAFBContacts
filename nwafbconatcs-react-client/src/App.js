import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Layout/Navbar";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Navbar/>
            <Dashboard/>
          </div>
        </Router>
    );
  }
}

export default App;
