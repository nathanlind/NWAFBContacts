import React, {Component} from 'react';


class AddContact extends Component {
    constructor(props) {
        super(props);
        this.state ={
            contactName: "",
            contactPhoneNumber: "",
            contactEmailAddress: "",
            errors:{}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }
    }

    onChange(event) {
        this.setState( {[event.target.name]:event.target.value})
    }

    onSubmit(event) {
        event.preventDefault();
        const newContact = {
            contactName: this.state.contactName,
            contactPhoneNumber: this.state.contactPhoneNumber,
            contactEmailAddress: this.state.contactEmailAddress
        };
        this.props.createContact(newContact, this.props.history);
    }


    render() {
        const { errors } = this.state;

        return (
            <div className="">
                <div className="card bg-light shadow p-3 mt-3 mb-3 bg-white rounded mx-auto">
                    <h5 className="card-header alert alert-secondary logo-font-green text-center">Add New Contact</h5>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-row text-left">
                                <div className="form-group col-md-5">
                                    <label htmlFor="inputEmail4">Contact Name:</label>
                                    <input type="text"
                                           className="form-control"
                                           placeholder="Contact Name"
                                           name="contactName"
                                           value={this.state.contactName}
                                           onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group col-md-5 offset-2">
                                    <label htmlFor="inputPassword4">Phone Number:</label>
                                    <input type="text"
                                           className="form-control"
                                           placeholder="(###)###-####"
                                           name="contactPhoneNumber"
                                           value={this.state.contactPhoneNumber}
                                           onChange={this.onChange}
                                    />
                                </div>
                            </div>
                            <div className="form-row text-left">
                                <div className="form-group col-md-5">
                                    <label htmlFor="inputAddress">Email Address:</label>
                                    <input type="text"
                                           className="form-control"
                                           placeholder="example@email.com"
                                           name="contactEmailAddress"
                                           value={this.state.contactEmailAddress}
                                           onChange={this.onChange}
                                    />
                                </div>
                            </div>
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

export default AddContact;