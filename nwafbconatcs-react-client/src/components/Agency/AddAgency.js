import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createAgency} from "../../actions/agencyActions";
import {getAgency} from "../../actions/agencyActions";
import classnames from 'classnames';

class AddAgency extends Component {
    constructor(props) {
        super(props);
        this.state={
            agencyName: "",
            agencyAccountNumber: "",
            agencyParentOrganization: "",
            agencyMailingStreetAddress: "",
            agencyMailingCity: "",
            agencyMailingState: "",
            agencyMailingZipCode: "",
            agencyPhysicalStreetAddress: "",
            agencyPhysicalCity: "",
            agencyPhysicalState: "",
            agencyPhysicalZipCode: "",
            agencyWebstoreLogin: "",
            agencyWebstorePassword: "",
            agencySchedulingLogin: "",
            agencySchedulingPassword: "",
            errors:{},
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
        this.setState({[event.target.name]:event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();
        const newAgency = {
            agencyName: this.state.agencyName,
            agencyAccountNumber: this.state.agencyAccountNumber,
            agencyParentOrganization: this.state.agencyParentOrganization,
            agencyMailingStreetAddress: this.state.agencyMailingStreetAddress,
            agencyMailingCity: this.state.agencyMailingCity,
            agencyMailingState: this.state.agencyMailingState,
            agencyMailingZipCode: this.state.agencyMailingZipCode,
            agencyPhysicalStreetAddress: this.state.agencyPhysicalStreetAddress,
            agencyPhysicalCity: this.state.agencyPhysicalCity,
            agencyPhysicalState: this.state.agencyPhysicalState,
            agencyPhysicalZipCode: this.state.agencyPhysicalZipCode,
            agencyWebstoreLogin: this.state.agencyWebstoreLogin,
            agencyWebstorePassword: this.state.agencyWebstorePassword,
            agencySchedulingLogin: this.state.agencySchedulingLogin,
            agencySchedulingPassword: this.state.agencySchedulingPassword,
        };
        this.props.createAgency(newAgency, this.props.history);
    }

    render() {
        const { errors } = this.state;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card bg-light shadow p-3 mb-5 bg-white rounded">
                            <h5 className="card-header alert alert-secondary logo-font-green text-center">Add New Agency</h5>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-row text-left">
                                        <div className="form-group col-md-5">
                                            <label>Agency Name:</label>
                                            <input type="text"
                                                   className={classnames("form-control",{
                                                       "is-invalid": errors.agencyName
                                                   })}
                                                   placeholder="Agency Name"
                                                   name="agencyName"
                                                   value={this.state.agencyName}
                                                   onChange={this.onChange}
                                            />
                                            {errors.agencyName && (
                                                <div className="invalid-feedback">{errors.agencyName}</div>
                                            )}
                                        </div>
                                        <div className="form-group col-md-5 offset-2">
                                            <label>Parent Organization:</label>
                                            <input type="text"
                                                   className="form-control"
                                                   placeholder="Parent Organization"
                                                   name="agencyParentOrganization"
                                                   value={this.state.agencyParentOrganization}
                                                   onChange={this.onChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row text-left">
                                        <div className="form-group col-md-5">
                                            <label>Account Number:</label>
                                            <input type="text"
                                                   className={classnames("form-control",{
                                                       "is-invalid": errors.agencyAccountNumber
                                                   })}
                                                   placeholder="Account Number"
                                                   name="agencyAccountNumber"
                                                   value={this.state.agencyAccountNumber}
                                                   onChange={this.onChange}
                                            />
                                            {errors.agencyAccountNumber && (
                                                <div className="invalid-feedback">{errors.agencyAccountNumber}</div>
                                            )}
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="form-group text-left">
                                    <label htmlFor="inputAddress">Mailing Address:</label>
                                    <input type="text"
                                           className="form-control"
                                           placeholder="1234 Main St"
                                           name="agencyMailingStreetAddress"
                                           value={this.state.agencyMailingStreetAddress}
                                           onChange={this.onChange}
                                    />
                                </div>
                                    <div className="form-row text-left">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputCity">City:</label>
                                            <input type="text"
                                                   className="form-control"
                                                   name="agencyMailingCity"
                                                   value={this.state.agencyMailingCity}
                                                   onChange={this.onChange}
                                            />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="inputState">State:</label>
                                            <input type="text"
                                                   className="form-control"
                                                   name="agencyMailingState"
                                                   value={this.state.agencyMailingState}
                                                   onChange={this.onChange}
                                            />
                                        </div>
                                        <div className="form-group col-md-2">
                                            <label htmlFor="inputZip">Zip:</label>
                                            <input type="text"
                                                   className="form-control"
                                                   name="agencyMailingZipCode"
                                                   value={this.state.agencyMailingZipCode}
                                                   onChange={this.onChange}
                                            />
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="form-group text-left">
                                        <label htmlFor="inputAddress">Physical Address:</label>
                                        <input type="text"
                                               className="form-control"
                                               placeholder="1234 Main St"
                                               name="agencyPhysicalStreetAddress"
                                               value={this.state.agencyPhysicalStreetAddress}
                                               onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-row text-left">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputCity">City:</label>
                                            <input type="text"
                                                   className="form-control"
                                                   name="agencyPhysicalCity"
                                                   value={this.state.agencyPhysicalCity}
                                                   onChange={this.onChange}
                                            />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="inputState">State:</label>
                                            <input type="text"
                                                   className="form-control"
                                                   name="agencyPhysicalState"
                                                   value={this.state.agencyPhysicalState}
                                                   onChange={this.onChange}
                                            />

                                        </div>
                                        <div className="form-group col-md-2">
                                            <label htmlFor="inputZip">Zip:</label>
                                            <input type="text"
                                                   className="form-control"
                                                   name="agencyPhysicalZipCode"
                                                   value={this.state.agencyPhysicalZipCode}
                                                   onChange={this.onChange}
                                            />
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="form-row text-left">
                                        <div className="form-group col-md-5">
                                            <label>WebStore Login:</label>
                                            <input type="text"
                                                   className="form-control"
                                                   placeholder="WebStore Login"
                                                   name="agencyWebstoreLogin"
                                                   value={this.state.agencyWebstoreLogin}
                                                   onChange={this.onChange}
                                            />
                                        </div>
                                        <div className="form-group col-md-5 offset-2">
                                            <label>Scheduling Login:</label>
                                            <input type="text"
                                                   className="form-control"
                                                   placeholder="Scheduling Login"
                                                   name="agencySchedulingLogin"
                                                   value={this.state.agencySchedulingLogin}
                                                   onChange={this.onChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row text-left">
                                        <div className="form-group col-md-5">
                                            <label>WebStore Password:</label>
                                            <input type="password"
                                                   className="form-control"
                                                   placeholder="WebStore Password"
                                                   name="agencyWebstorePassword"
                                                   value={this.state.agencyWebstorePassword}
                                                   onChange={this.onChange}
                                            />
                                        </div>
                                        <div className="form-group col-md-5 offset-2">
                                            <label>Scheduling Password:</label>
                                            <input type="password"
                                                   className="form-control"
                                                   placeholder="Scheduling Password"
                                                   name="agencySchedulingPassword"
                                                   value={this.state.agencySchedulingPassword}
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
        );
    }
}

AddAgency.propTypes = {
    createAgency: PropTypes.func.isRequired,
    getAgency: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps, { createAgency, getAgency })(AddAgency);