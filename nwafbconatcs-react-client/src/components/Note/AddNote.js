import React, {Component} from 'react';
import {connect} from 'react-redux';
import classnames from "classnames";
import {createNote} from "../../actions/noteActions";
import PropTypes from "prop-types";

class AddNote extends Component {
    constructor(props) {
        super(props);
        const {id} = this.props.match.params;

        this.state ={
            noteSubject: "",
            noteContents: "",
            agencyAccountNumber: id,
            errors:{}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState( { errors: nextProps.errors })
        }
    }

    onChange(event) {
        this.setState( {[event.target.name]:event.target.value})
    }

    onSubmit(event) {
        event.preventDefault();
        const newNote = {
            noteSubject: this.state.noteSubject,
            noteContents: this.state.noteContents
        };
        this.props.createNote(this.state.agencyAccountNumber, this.props.history);
    }

    render() {

        const {errors} = this.state;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card bg-light shadow p-3 mt-3 mb-5 bg-white rounded mx-auto">
                            <h5 className="card-header alert alert-secondary logo-font-green text-center">Add Note</h5>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group col-md-5">
                                        <label>Note Subject:</label>
                                        <input type="text"
                                               className={classnames("form-control", {
                                                   "is-invalid":errors.summary
                                               })}
                                               placeholder="Note Subject"
                                               name="noteSubject"
                                               value={this.state.notes()}
                                               onChange={this.onChange}
                                        />
                                        {errors.noteSubject && (
                                            <div className="invalid-feedback">{errors.noteSubject}</div>
                                        )}
                                    </div>
                                        <textarea type="text"
                                               className="form-control"
                                               placeholder="Note"
                                               name="noteContents"
                                               value={this.state.noteContents}
                                               onChange={this.onChange}
                                        />
                                    <div className="row justify-content-end">
                                        <input type="submit"
                                               className="row btn btn-color-orange btn-lg shadow mr-3 mt-4 px-5"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

AddNote.propTypes = {
    createNote: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
})

export default connect(mapStateToProps, {createNote})(AddNote);