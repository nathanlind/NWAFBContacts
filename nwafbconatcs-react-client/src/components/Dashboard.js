import React, {Component} from 'react';
import SearchBar from "./Agency/SearchBar";
import AddNewAgencyButton from "./Agency/AddNewAgencyButton";
import AgencyItem from "./Agency/AgencyItem";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Dashboard extends Component {

    render() {
        const {agency} = this.props.agency;
        let agencyDisplay;
        if(agency.agencyAccountNumber) {
            agencyDisplay = <AgencyItem key={agency.id} id={agency.agencyAccountNumber} agency={agency}/>
        } else {
            agencyDisplay = ""
        }

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
                            <SearchBar/>
                            <br/>
                            <hr/>
                            {agencyDisplay}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    agency: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    agency: state.agency
});

export default connect(mapStateToProps)(Dashboard);