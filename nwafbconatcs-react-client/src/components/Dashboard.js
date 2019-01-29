import React, {Component} from 'react';
import SearchBar from "./Agency/SearchBar";
import AddNewAgencyButton from "./Agency/AddNewAgencyButton";
import AgencyItem from "./Agency/AgencyItem";
import { connect } from 'react-redux';
import { getAgencies } from "../actions/agencyActions";
import PropTypes from 'prop-types';

class Dashboard extends Component {

    componentDidMount() {
        this.props.getAgencies();
    }

    render() {
        const {agencies} = this.props.agency;
        let filteredAgencies;

        filteredAgencies = agencies.filter(
            (agency) => {
                return (agency.agencyAccountNumber === this.props.searchTerm
                    || agency.agencyName.toLowerCase() === this.props.searchTerm.toLowerCase());
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
                            <SearchBar onSearch={this.props.onSearch}/>
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