import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { deleteAgency } from "../../actions/agencyActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



class AgencyItem extends Component {

    onDeleteClick = agencyAccountNumber => {
        this.props.deleteAgency(agencyAccountNumber);
    };

    render() {

        const {agency} = this.props;

        return (
                <div className="card text-left bg-light shadow p-3 mb-5 bg-white rounded">
                    <div className="card-header">
                        <div className="row justify-content-between">
                            <h4>{agency.agencyName}</h4>
                            <h4>Account #: {agency.agencyAccountNumber}</h4>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-12">
                                <p><strong>Parent Organization:</strong> {agency.agencyParentOrganization}</p>
                            </div>
                        </div>
                        <div className="row justify-content-start mb-4">
                            <div className="col-3">
                                <p className="mb-1"><strong>Mailing Address:</strong></p>
                                <p className="mb-0">{agency.agencyMailingStreetAddress}</p>
                                <p>{agency.agencyMailingCity}, {agency.agencyMailingState}  {agency.agencyMailingZipCode}</p>
                            </div>
                            <div className="col-3">
                                <p className="mb-1"><strong>Physical Address:</strong></p>
                                <p className="mb-0">{agency.agencyPhysicalStreetAddress}</p>
                                <p>{agency.agencyPhysicalCity}, {agency.agencyPhysicalState}  {agency.agencyPhysicalZipCode}</p>
                            </div>
                            <div className="col-3">
                                <p className="mb-1"><strong>WebStore Login:</strong></p>
                                <p className="mb-3">{agency.agencyWebstoreLogin}</p>
                                <p className="mb-1"><strong>WebStore Password:</strong></p>
                                <p className="mb-0">{agency.agencyWebstorePassword}</p>
                            </div>
                            <div className="col-3">
                                <p className="mb-1"><strong>Scheduling Login:</strong></p>
                                <p className="mb-3">{agency.agencySchedulingLogin}</p>
                                <p className="mb-1"><strong>Scheduling Password:</strong></p>
                                <p className="mb-0">{agency.agencySchedulingPassword}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-auto mr-auto">
                            </div>
                            <div className="col-auto">
                                <div className="btn-group mr-2" role="group">
                                    <Link to={`/updateAgency/${agency.agencyAccountNumber}`}>
                                        <button type="button"
                                                className="btn btn-secondary"><FontAwesomeIcon icon="edit" /></button>
                                    </Link>
                                    <button type="button"
                                            className="btn btn-color-red"
                                            onClick={this.onDeleteClick.bind(this, agency.agencyAccountNumber)}
                                    ><FontAwesomeIcon icon="trash" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}


AgencyItem.propTypes = {
    deleteAgency: PropTypes.func.isRequired
};

export default connect(null, {deleteAgency})(AgencyItem);