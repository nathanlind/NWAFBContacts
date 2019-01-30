import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {deleteNote} from "../../actions/noteActions";

class NoteItem extends Component {

    onDeleteClick = (agencyAccountNumber, noteId) => {
        this.props.deleteNote(agencyAccountNumber, noteId);
    };

    render() {
        const {note} = this.props;
        const {agency} = this.props;

        return (
            <div className="container d-flex">
                <div className="card text-left col-12 bg-light shadow mb-4 bg-white rounded">
                    <div className="card-header mt-2 shadow">
                        <div className="row justify-content-between">
                            <h5 className="mt-1 ml-2">{note.noteSubject}</h5>
                            <p className="mt-1 mr-2">Modified: {note.modificationDate}</p>
                        </div>
                    </div>
                    <div className="card-body row-width-wide-cards">
                        <div className="row">
                            <div className="col-12">
                                <p className="mb-1"><strong>Note:</strong></p>
                                <p>{note.noteBody}</p>
                            </div>
                            <div className="btn-group mr-1 mb-1 mt-3" role="group">
                                <Link to={`/updateNote/${agency.agencyAccountNumber}/${note.id}`}>
                                <button type="button"
                                        className="btn btn-secondary"><FontAwesomeIcon icon="edit" /></button>
                                </Link>
                                <button type="button"
                                        className="btn btn-color-red"
                                        onClick={this.onDeleteClick.bind(this, agency.agencyAccountNumber, note.id)}
                                ><FontAwesomeIcon icon="trash" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

NoteItem.propTypes = {
    note: PropTypes.object.isRequired,
    agency: PropTypes.object.isRequired,
    deleteNote: PropTypes.func.isRequired
};

export default connect(null, {deleteNote})(NoteItem);