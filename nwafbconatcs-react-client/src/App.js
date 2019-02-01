import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Layout/Navbar";
import Dashboard from "./components/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { library } from '@fortawesome/fontawesome-svg-core'
import {faEdit, faTrash, faPlusSquare, faUser, faStickyNote} from "@fortawesome/free-solid-svg-icons";
import AddAgency from "./components/Agency/AddAgency";
import UpdateAgency from "./components/Agency/UpdateAgency";
import AddContact from "./components/Contact/AddContact";
import AddNote from "./components/Note/AddNote";
import UpdateContact from "./components/Contact/UpdateContact";
import UpdateNote from "./components/Note/UpdateNote";
import Landing from "./components/Layout/Landing";
import Register from "./components/UserManagement/Register";
import Login from "./components/UserManagement/Login";
import jwt_decode from "jwt-decode";
import setJWTToken from "./securityUtils/setJWTToken";
import {SET_CURRENT_USER} from "./actions/types";
import {logout} from "./actions/securityActions"

library.add(faEdit);
library.add(faTrash);
library.add(faPlusSquare);
library.add(faStickyNote);
library.add(faUser);

const jwtToken = localStorage.jwtToken;

if(jwtToken){
  setJWTToken(jwtToken);
  const decoded_jwtToken = jwt_decode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_jwtToken
  });

  const currentTime = Date.now()/1000;

  if(decoded_jwtToken.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = "/";
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.state = {
      search: ""
    }
  }

  search(term) {
    this.setState( {search: term })
  };

  render() {
    return (
        <Provider store={store}>
            <Router>
              <div className="App">
                <Navbar/>
                {
                  //Public Routes
                }
                <Route exact path="/" component={Landing}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/login" component={Login}/>
                {
                  //Private Routes
                }
                <Route exact path="/dashboard" render={(props) => <Dashboard {...props} onSearch={this.search} searchTerm={this.state.search}/>}/>
                <Route exact path="/addAgency" component={AddAgency}/>
                <Route exact path="/updateAgency/:id" component={UpdateAgency}/>
                <Route exact path="/addContact/:id" component={AddContact}/>
                <Route exact path="/updateContact/:agencyAccountNumber/:contactId" component={UpdateContact}/>
                <Route exact path="/addNote/:id" component={AddNote}/>
                <Route exact path="/updateNote/:agencyAccountNumber/:noteId" component={UpdateNote}/>
              </div>
            </Router>
        </Provider>
    );
  }
}

export default App;
