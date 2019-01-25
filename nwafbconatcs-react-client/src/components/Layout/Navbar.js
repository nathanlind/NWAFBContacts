import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark navbar-default mb-4">
                <div className="container">
                    <div className="navbar-brand navbar-logo-orange">
                        NWA<span className="navbar-brand navbar-logo-green">FB</span>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Dashboard<span className="sr-only">(current)</span></a>
                            </li>

                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link " href="register.html">
                                    Sign Up
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="login.html">
                                    Login
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;