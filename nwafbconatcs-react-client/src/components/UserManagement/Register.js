import React, { Component } from 'react';
import { createNewUser } from "../../actions/securityActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state={
            fullName: "",
            username: "",
            password: "",
            confirmPassword: "",
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        if(this.props.security.validToken) {
            this.props.history.push("/dashboard")
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }
    }

    onChange(event) {
        this.setState( {[event.target.name]:event.target.value});
    }

    onSubmit(event) {
        event.preventDefault()
        const newUser = {
            fullName: this.state.fullName,
            username: this.state.username,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
        };
        this.props.createNewUser(newUser, this.props.history);
    }


    render() {
        const { errors } = this.state;

        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">
                                Sign Up
                            </h1>
                            <p className="lead text-center">Create an Account</p>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text"
                                           className={classnames("form-control form-control-lg",{
                                               "is-invalid": errors.fullName
                                           })}
                                           placeholder="Name"
                                           name="fullName"
                                           value={this.state.fullName}
                                           onChange={this.onChange}
                                    />
                                    {errors.fullName && (
                                        <div className="text-left invalid-feedback">{errors.fullName}</div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input type="email"
                                           className={classnames("form-control form-control-lg",{
                                               "is-invalid": errors.username
                                           })}
                                           placeholder="Email Address"
                                           name="username"
                                           value={this.state.username}
                                           onChange={this.onChange}
                                    />
                                    {errors.username && (
                                        <div className="text-left invalid-feedback">{errors.username}</div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input type="password"
                                           className={classnames("form-control form-control-lg",{
                                               "is-invalid": errors.password
                                           })}
                                           placeholder="Password"
                                           name="password"
                                           value={this.state.password}
                                           onChange={this.onChange}
                                    />
                                    {errors.password && (
                                        <div className="text-left invalid-feedback">{errors.password}</div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input type="password"
                                           className={classnames("form-control form-control-lg",{
                                               "is-invalid": errors.confirmPassword
                                           })}
                                           placeholder="Confirm Password"
                                           name="confirmPassword"
                                           value={this.state.confirmPassword}
                                           onChange={this.onChange}
                                    />
                                    {errors.confirmPassword && (
                                        <div className="text-left invalid-feedback">{errors.confirmPassword}</div>
                                    )}
                                </div>
                                <input type="submit" className="btn btn-lg btn-block btn-color-green shadow"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Register.propTypes = {
    createNewUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors,
    security: state.security
});

export default connect(mapStateToProps, { createNewUser })(Register);