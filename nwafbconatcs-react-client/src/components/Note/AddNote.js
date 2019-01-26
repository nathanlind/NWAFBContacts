import React, {Component} from 'react';

class AddNote extends Component {
    constructor(props) {
        super(props);
        this.state ={
            noteContents: "",
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
            noteContents: this.state.noteContents
        };
        this.props.createNote(newNote, this.props.history);
    }

    render() {
        return (
            <div className="">
                <div className="card bg-light shadow p-3 mt-3 mb-5 bg-white rounded mx-auto">
                    <h5 className="card-header alert alert-secondary logo-font-green text-center">Add Note</h5>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
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
        );
    }
}

export default AddNote;