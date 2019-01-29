import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { deleteAgency } from "../../actions/agencyActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ContactItem from "../Contact/ContactItem";
import NoteItem from "../Note/NoteItem";
import {getContacts} from "../../actions/contactActions";
import {getNotes} from "../../actions/noteActions";


class AgencyItem extends Component {


    componentDidMount() {
        const {agency} = this.props;
        this.props.getContacts(agency.agencyAccountNumber);
        this.props.getNotes(agency.agencyAccountNumber);
    }


    onDeleteClick = agencyAccountNumber => {
        this.props.deleteAgency(agencyAccountNumber);
    };

    render() {

        const {agency} = this.props;
        const {contacts} = this.props.contact;
        const {notes} = this.props.note;


        return (
                <div className="card text-left bg-light shadow p-3 mb-5 bg-white rounded">
                    <div className="card-header shadow">
                        <div className="row justify-content-between">
                            <h4 className="mt-1 ml-2">{agency.agencyName}</h4>
                            <h4 className="mt-1 mr-2">Account #: {agency.agencyAccountNumber}</h4>
                        </div>
                    </div>
                    <div className="card-body px-4">
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
                            {
                                contacts.map(contact => (
                                    <ContactItem key={contact.id}
                                                 agency={agency}
                                                 contact={contact}/>))
                            }
                            {
                                notes.map(note => (
                                    <NoteItem key={note.id}
                                              agency={agency}
                                              note={note}/>))
                            }
                        </div>
                        <div className="row">
                            <div className="col-auto mr-auto">
                                <div className="btn-group ml-n3 mb-n3 shadow" role="group">
                                    <Link to={`/addContact/${agency.agencyAccountNumber}`}
                                          id={agency.agencyAccountNumber}
                                          className="btn btn-secondary"><FontAwesomeIcon icon="user" />  Add Contact</Link>
                                    <Link to={`/addNote/${agency.agencyAccountNumber}`}
                                            className="btn btn-secondary"><FontAwesomeIcon icon="sticky-note" />  Add Note</Link>
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="btn-group mr-n3 mb-n3 shadow " role="group">
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
    contact: PropTypes.object.isRequired,
    note: PropTypes.object.isRequired,
    deleteAgency: PropTypes.func.isRequired,
    getContacts: PropTypes.func.isRequired,
    getNotes: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    contact: state.contact,
    note: state.note
});

export default connect(mapStateToProps, {getContacts, getNotes, deleteAgency})(AgencyItem);