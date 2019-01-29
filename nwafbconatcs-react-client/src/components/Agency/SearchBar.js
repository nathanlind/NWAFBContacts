import React, {Component} from 'react';
class SearchBar extends Component {
    constructor(props){
        super(props);
        this.updateSearch = this.updateSearch.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.state = {
            term: ""
        };
    }

    updateSearch(event) {
        this.setState({term: event.target.value})
    }

    handleSearch(event) {
        event.preventDefault();
        this.props.onSearch(this.state.term);
    }

    render() {
        return (
            <form onSubmit={this.handleSearch}>
                <div className="input-group input-group-lg shadow mb-0">
                    <input type="text"
                           className="form-control"
                           placeholder="Agency Account Number"
                           onChange={this.updateSearch}
                    />
                        <div className="input-group-append">
                            <button className="btn btn-color-orange"
                                    type="button"
                                    onClick={this.handleSearch}
                                    id="button-addon2">Search</button>
                        </div>
                </div>
            </form>
        );
    }
}



export default SearchBar;