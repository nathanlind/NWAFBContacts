import React, {Component} from 'react';
import { getContact, createContact } from "../../actions/contactActions";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import classnames from "classnames";

class UpdateContact extends Component {
    constructor(props) {
        super(props);

        this.state={
            id: "",
            contactName: "",
            contactPhoneNumber: "",
            contactEmailAddress: "",
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
            contactName,
            contactPhoneNumber,
            contactEmailAddress
        } = nextProps.contact;

        this.setState( {
            id,
            contactName,
            contactPhoneNumber,
            contactEmailAddress
        });
    }

    componentDidMount() {
        const { agencyAccountNumber, contactId } = this.props.match.params;
        this.props.getContact(agencyAccountNumber, contactId, this.props.history);
    }

    onChange(event) {
        this.setState({[event.target.name]:event.target.value});
    }

    onSubmit(event) {
        const { agencyAccountNumber } = this.props.match.params;
        event.preventDefault();

        const updateContact = {
            id: this.state.id,
            contactName: this.state.contactName,
            contactPhoneNumber: this.state.contactPhoneNumber,
            contactEmailAddress: this.state.contactEmailAddress
        };
        this.props.createContact(agencyAccountNumber, updateContact, this.props.history);
    }


    render() {
        const { errors } = this.state;

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card bg-light shadow p-3 mt-3 mb-3 bg-white rounded mx-auto">
                                <h5 className="card-header alert alert-secondary logo-font-green text-center">Update Contact</h5>
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
                    </div>
                </div>
            </div>
        );
    }
}

UpdateContact.propsTypes = {

    contact: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    getContact: PropTypes.func.isRequired,
    createContact: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    contact: state.contact.contact,
    errors: state.errors
});


export default connect(mapStateToProps, {getContact, createContact})(UpdateContact);