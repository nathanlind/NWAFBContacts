import React, {Component} from 'react';
import SearchBar from "./Agency/SearchBar";
import AddNewAgencyButton from "./Agency/AddNewAgencyButton";
import AgencyItem from "./Agency/AgencyItem";
import { connect } from 'react-redux';
import { getAgencies } from "../actions/agencyActions";
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
        this.state = {
            search: "*****"
        };
    }

    componentDidMount() {
        this.props.getAgencies();
    }

    search(term) {
        this.setState( {search: term })
    };

    render() {
        const {agencies} = this.props.agency;
        let filteredAgencies;

        filteredAgencies = agencies.filter(
            (agency) => {
                return agency.agencyAccountNumber === this.state.search;
            });


        return (
            <div className="agencies">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="alert alert-dark display-4 text-center shadow logo-font-orange">
                                NORTHWEST ARKANSAS<span className="logo-font-green"> FOOD BANK</span>
                            </h1>
                            <br/>
                            <AddNewAgencyButton/>
                            <SearchBar onSearch={this.search}/>
                            <br/>
                            <hr/>
                            {
                                filteredAgencies.map(agency => (
                                    <AgencyItem key={agency.id}
                                                id={agency.agencyAccountNumber}
                                                agency={agency}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    agency: PropTypes.object.isRequired,
    getAgencies: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    agency: state.agency
});

export default connect(mapStateToProps, { getAgencies })(Dashboard);