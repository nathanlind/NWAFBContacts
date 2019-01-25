import React, {Component} from 'react';

class AgencyItem extends Component {
    render() {
        return (

                <div className="card text-left bg-light shadow p-3 mb-5 bg-white rounded">
                    <div className="card-header">
                        <div className="row justify-content-between">
                            <h4>Super Rad Agency</h4>
                            <h4>Account #: 8675309</h4>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-12">
                                <p><strong>Parent Organization:</strong> Very Cool Organization</p>
                            </div>
                        </div>
                        <div className="row justify-content-start">
                            <div className="col-3">
                                <p className="mb-1"><strong>Mailing Address:</strong></p>
                                <p className="mb-0">123 Made Up St.</p>
                                <p>Springdale, AR  72762</p>
                            </div>
                            <div className="col-3">
                                <p className="mb-1"><strong>Physical Address:</strong></p>
                                <p className="mb-0">123 Made Up St.</p>
                                <p>Springdale, AR  72762</p>
                            </div>
                            <div className="col-3">
                                <p className="mb-1"><strong>WebStore Login:</strong></p>
                                <p className="mb-3">username</p>
                                <p className="mb-1"><strong>WebStore Password:</strong></p>
                                <p className="mb-0">password</p>
                            </div>
                            <div className="col-3">
                                <p className="mb-1"><strong>Scheduling Login:</strong></p>
                                <p className="mb-3">username</p>
                                <p className="mb-1"><strong>Scheduling Password:</strong></p>
                                <p className="mb-0">password</p>
                            </div>
                        </div>
                    </div>
                </div>

        );
    }
}

export default AgencyItem;