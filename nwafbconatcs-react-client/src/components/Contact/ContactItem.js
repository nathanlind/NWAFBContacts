import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {deleteContact} from "../../actions/contactActions";


class ContactItem extends Component {

    onDeleteClick = (agencyAccountNumber, contactId) => {
        this.props.deleteContact(agencyAccountNumber, contactId);
    };

    render() {
        const {contact} = this.props;
        const {agency} = this.props;

        return (
            <div className="container d-flex">
                <div className="card text-left col-12 bg-light shadow mb-4 bg-white rounded">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-3">
                                <p className="mb-1"><strong>Contact Name:</strong></p>
                                <p>{contact.contactName}</p>
                            </div>
                            <div className="col-3">
                                <p className="mb-1"><strong>Phone Number:</strong></p>
                                <p className="mb-1">{contact.contactPhoneNumber}</p>
                            </div>
                            <div className="col-4">
                                <p className="mb-1"><strong>Email Address:</strong></p>
                                <p className="mb-1">{contact.contactEmailAddress}</p>
                            </div>
                            <div className="col-auto mr-auto">
                            </div>
                            <div className="col-auto">
                                <div className="btn-group mr-1 mb-1 mt-3" role="group">
                                    <Link to={`/updateContact/${agency.agencyAccountNumber}/${contact.id}`}>
                                    <button type="button"
                                            className="btn btn-secondary"><FontAwesomeIcon icon="edit" /></button>
                                    </Link>
                                    <button type="button"
                                            className="btn btn-color-red"
                                            onClick={this.onDeleteClick.bind(this, agency.agencyAccountNumber, contact.id)}
                                    ><FontAwesomeIcon icon="trash" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired,
    agency: PropTypes.object.isRequired,
    deleteContact: PropTypes.func.isRequired
};

export default connect(null, {deleteContact})(ContactItem);