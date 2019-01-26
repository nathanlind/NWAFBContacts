import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Layout/Navbar";
import Dashboard from "./components/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddAgency from "./components/Agency/AddAgency";
import { Provider } from "react-redux";
import store from "./store";
import { library } from '@fortawesome/fontawesome-svg-core'
import {faEdit, faTrash, faPlusSquare, faUser, faStickyNote} from "@fortawesome/free-solid-svg-icons";
import UpdateAgency from "./components/Agency/UpdateAgency";
import AddContact from "./components/Contact/AddContact";


library.add(faEdit);
library.add(faTrash);
library.add(faPlusSquare);
library.add(faStickyNote);
library.add(faUser);

class App extends Component {

  render() {
    return (
        <Provider store={store}>
            <Router>
              <div className="App">
                <Navbar/>
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route exact path="/addAgency" component={AddAgency}/>
                <Route exact path="/updateAgency/:id" component={UpdateAgency}/>
                <Route exact path="/addContact" component={AddContact}/>
              </div>
            </Router>
        </Provider>
    );
  }
}

export default App;
