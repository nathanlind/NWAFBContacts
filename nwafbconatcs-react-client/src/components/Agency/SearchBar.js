import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAgency } from "../../actions/agencyActions";
import classnames from "classnames";

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            agencyAccountNumber: "",
            errors: {}
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
        this.setState( {[event.target.name]:event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.getAgency(this.state.agencyAccountNumber)
    }

    render() {

        const { errors } = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-row">
                    <div className="input-group input-group-lg">
                        <input type="text"
                               className={classnames("form-control",{
                                   "is-invalid": errors.agencyAccountNumber
                               })}
                               placeholder="Agency Account Number"
                               value={this.state.agencyAccountNumber}
                               name="agencyAccountNumber"
                               onChange={this.onChange}
                        />
                            <div className="input-group-append">
                                <button className="btn btn-color-orange"
                                        type="submit"
                                        id="button-addon2">Search</button>
                            </div>
                        {errors.agencyAccountNumber && (
                            <div className="text-left invalid-feedback">{errors.agencyAccountNumber}</div>
                        )}
                    </div>
                </div>
            </form>
        );
    }
}

SearchBar.propTypes = {
    agency: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    getAgency: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    agency: state.agency,
    errors: state.errors
});


export default connect(mapStateToProps, { getAgency })(SearchBar);