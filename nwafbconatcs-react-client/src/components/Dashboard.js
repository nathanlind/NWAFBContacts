import React, {Component} from 'react';
import SearchBar from "./Agency/SearchBar";
import AddNewAgencyButton from "./Agency/AddNewAgencyButton";
import AgencyItem from "./Agency/AgencyItem";

class Dashboard extends Component {
    render() {
        return (
            <div className="agencies">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="alert alert-dark display-4 text-center navbar-logo-orange">
                                NORTHWEST ARKANSAS<span className="navbar-logo-green"> FOOD BANK</span>
                            </h1>
                            <br/>
                            <AddNewAgencyButton/>
                            <SearchBar/>
                            <br/>
                            <hr/>
                            <AgencyItem/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;