import React, {Component} from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux"
import classnames from "classnames";
import { login } from "../../actions/securityActions";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.security.validToken) {
            this.props.history.push("/dashboard");
        }

        if(nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }
    }

    onChange(event) {
        this.setState({[event.target.name]:event.target.value})
    }

    onSubmit(event) {
        event.preventDefault();
        const loginRequest = {
            username: this.state.username,
            password: this.state.password
        };

        this.props.login(loginRequest);
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">
                                Log In
                            </h1>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text"
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
                                <input type="submit" className="btn btn-lg btn-block btn-color-orange shadow"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    security: PropTypes.object.isRequired
};


const mapStateToProps = state => ({
    security: state.security,
    errors: state.errors
});


export default connect(mapStateToProps, {login})(Login);