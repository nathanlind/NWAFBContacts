import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
    render() {
        return (
            <div className="landing">
                <div className="light-overlay landing-inner text-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="alert alert-dark display-4 text-center shadow logo-font-orange">
                                    NORTHWEST ARKANSAS<span className="logo-font-green"> FOOD BANK</span>
                                </h1>
                                <h3>
                                    Create a new account or log in to an existing account
                                </h3>
                                <hr/>
                                <div className="btn-group-lg btn-group-vertical col-md-4">
                                    <Link to="/register" className="btn btn-lg btn-color-green shadow px-5 m-1">
                                        Sign Up
                                    </Link>
                                    <Link to="/login" className="btn btn-lg btn-color-orange shadow px-5 m-1">
                                        Login
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;