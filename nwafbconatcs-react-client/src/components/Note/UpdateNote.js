import React, {Component} from 'react';

class UpdateNote extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
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
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateNote;