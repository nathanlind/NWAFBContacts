import React, {Component} from 'react';
import {connect} from 'react-redux';
import classnames from "classnames";
import { createContact } from "../../actions/contactActions";
import PropTypes from "prop-types";


class AddContact extends Component {
    constructor(props) {
        super(props);
        const {id} = this.props.match.params;

        this.state ={
            contactName: "",
            contactPhoneNumber: "",
            contactEmailAddress: "",
            agencyAccountNumber: id,
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
            contactEmailAddress: this.state.contactEmailAddress,
        };
        this.props.createContact(this.state.agencyAccountNumber, newContact, this.props.history);
    }


    render() {

        const {errors} = this.state;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card bg-light shadow p-3 mt-3 mb-3 bg-white rounded mx-auto">
                            <h5 className="card-header alert alert-secondary logo-font-green text-center">Add New Contact</h5>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-row text-left">
                                        <div className="form-group col-md-5">
                                            <label>Contact Name:</label>
                                            <input type="text"
                                                   className={classnames("form-control", {
                                                       "is-invalid":errors.summary
                                                   })}
                                                   placeholder="Contact Name"
                                                   name="contactName"
                                                   value={this.state.contactName}
                                                   onChange={this.onChange}
                                            />
                                            {errors.contactName && (
                                                <div className="invalid-feedback">{errors.contactName}</div>
                                            )}
                                        </div>
                                        <div className="form-group col-md-5 offset-2">
                                            <label>Phone Number:</label>
                                            <input type="text"
                                                   className={classnames("form-control", {
                                                       "is-invalid":errors.summary
                                                   })}
                                                   placeholder="(###)###-####"
                                                   name="contactPhoneNumber"
                                                   value={this.state.contactPhoneNumber}
                                                   onChange={this.onChange}
                                            />
                                            {errors.contactPhoneNumber && (
                                                <div className="invalid-feedback">{errors.contactPhoneNumber}</div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="form-row text-left">
                                        <div className="form-group col-md-5">
                                            <label>Email Address:</label>
                                            <input type="text"
                                                   className={classnames("form-control", {
                                                       "is-invalid":errors.summary
                                                   })}
                                                   placeholder="example@email.com"
                                                   name="contactEmailAddress"
                                                   value={this.state.contactEmailAddress}
                                                   onChange={this.onChange}
                                            />
                                            {errors.contactEmailAddress && (
                                                <div className="invalid-feedback">{errors.contactEmailAddress}</div>
                                            )}
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
        );
    }
}

AddContact.propTypes = {
    createContact: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps, {createContact})(AddContact);