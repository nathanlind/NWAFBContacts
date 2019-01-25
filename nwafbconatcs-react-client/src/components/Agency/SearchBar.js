import React, {Component} from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div className="input-group input-group-lg mb-0">
                <input type="text" className="form-control" placeholder="Agency Name or Account Number"
                       aria-label="Agency Name or Account Number" aria-describedby="button-addon2"/>
                    <div className="input-group-append">
                        <button className="btn btn-color-orange" type="button" id="button-addon2">Search</button>
                    </div>
            </div>
        );
    }
}

export default SearchBar;