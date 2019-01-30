import React, {Component} from 'react';
import { getNote, createNote } from "../../actions/noteActions";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';

class UpdateNote extends Component {
    constructor(props) {
        super(props);
        const { agencyAccountNumber } = this.props.match.params;

        this.state= {
            id: "",
            noteSubject: "",
            noteBody: "",
            agencyAccountNumber: agencyAccountNumber,
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }

        const {
            id,
            noteSubject,
            noteBody
        } = nextProps.note;

        this.setState({
            id,
            noteSubject,
            noteBody
        });
    }

    componentDidMount() {
        const { noteId } = this.props.match.params;
        this.props.getNote(this.state.agencyAccountNumber, noteId, this.props.history);
        console.log(this.state.agencyAccountNumber);
        console.log(noteId);
    }

    onChange(event) {
        this.setState({[event.target.name]:event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();
        const updateNote = {
            id: this.state.id,
            noteSubject: this.state.noteSubject,
            noteBody: this.state.noteBody
        };
        this.props.createNote(this.state.agencyAccountNumber, updateNote, this.props.history);
    }


    render() {
        const { errors } = this.state;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card bg-light shadow p-3 mt-3 mb-5 bg-white rounded mx-auto">
                            <h5 className="card-header alert alert-secondary logo-font-green text-center">Update Note</h5>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-row text-left">
                                        <div className="form-group col-md-7">
                                            <label>Note Subject:</label>
                                            <input type="text"
                                                   className={classnames("form-control", {
                                                       "is-invalid":errors.noteSubject
                                                   })}
                                                   placeholder="Note Subject"
                                                   name="noteSubject"
                                                   value={this.state.noteSubject}
                                                   onChange={this.onChange}
                                            />
                                            {errors.noteSubject && (
                                                <div className="invalid-feedback">{errors.noteSubject}</div>
                                            )}
                                        </div>
                                    </div>
                                    <textarea type="text"
                                              className={classnames("form-control", {
                                                  "is-invalid":errors.noteBody
                                              })}
                                              placeholder="Note"
                                              name="noteBody"
                                              value={this.state.noteBody}
                                              onChange={this.onChange}
                                    />
                                    {errors.noteBody && (
                                        <div className="invalid-feedback">{errors.noteBody}</div>
                                    )}
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

UpdateNote.propTypes = {
    note: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    getNote: PropTypes.func.isRequired,
    createNote: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    note: state.note.note,
    errors: state.errors
});

export default connect(mapStateToProps, {getNote, createNote})(UpdateNote);