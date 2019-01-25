import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Layout/Navbar";
import Dashboard from "./components/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddAgency from "./components/Agency/AddAgency";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router>
              <div className="App">
                <Navbar/>
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route exact path="/addAgency" component={AddAgency}/>
              </div>
            </Router>
        </Provider>
    );
  }
}

export default App;
