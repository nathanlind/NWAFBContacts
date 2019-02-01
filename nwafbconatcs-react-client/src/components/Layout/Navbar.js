import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../actions/securityActions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Navbar extends Component {

    logout(){
        this.props.logout();
        window.location.href = "/";
    }

    render() {

        const { validToken, user } = this.props.security;

        const userIsAuthenticated = (
            <div className="collapse navbar-collapse" id="mobile-nav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">
                            Dashboard
                        </Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">
                            <FontAwesomeIcon icon="user" className="mr-1" />
                            {user.fullName}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"
                              to="/logout"
                              onClick={this.logout.bind(this)}
                        >
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>
        );

        const userIsNotAuthenticated = (
            <div className="collapse navbar-collapse" id="mobile-nav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">
                            Dashboard
                        </Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">
                            Sign Up
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
        );

        let navbarLinks;

        if(validToken && user) {
            navbarLinks = userIsAuthenticated;
        } else {
            navbarLinks = userIsNotAuthenticated;
        }

        return (
            <nav className="navbar navbar-expand-sm navbar-dark navbar-color-dark mb-4">
                <div className="container">
                    <Link to="/">
                        <div className="navbar-brand logo-font-orange">
                            NWA<span className="navbar-brand logo-font-green">FB</span>
                        </div>
                    </Link>
                    {navbarLinks}
                </div>
            </nav>
        );



    }
}


Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    security: state.security
});

export default connect(mapStateToProps, { logout }) (Navbar);