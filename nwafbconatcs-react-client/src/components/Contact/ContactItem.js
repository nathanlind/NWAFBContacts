import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class ContactItem extends Component {
    render() {

        return (
            <div className="card text-left col-12 bg-light shadow mb-4 bg-white rounded">
                <div className="card-body">
                    <div className="row">
                        <div className="col-3">
                            <p className="mb-1"><strong>Contact Name:</strong></p>
                            <p>Placeholder Name</p>
                        </div>
                        <div className="col-3">
                            <p className="mb-1"><strong>Phone Number:</strong></p>
                            <p className="mb-1">(555)555-5555</p>
                        </div>
                        <div className="col-3">
                            <p className="mb-1"><strong>Email Address:</strong></p>
                            <p className="mb-1">placeholder@email.com</p>
                        </div>
                        <div className="col-auto mr-auto">
                        </div>
                        <div className="col-auto">
                            <div className="btn-group mr-1 mb-1 mt-3" role="group">
                                <button type="button"
                                        className="btn btn-secondary"><FontAwesomeIcon icon="edit" /></button>
                                <button type="button"
                                        className="btn btn-color-red"><FontAwesomeIcon icon="trash" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactItem;