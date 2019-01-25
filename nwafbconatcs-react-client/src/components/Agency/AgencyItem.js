import React, {Component} from 'react';

class AgencyItem extends Component {
    render() {

        const {agency} = this.props;

        return (
                <div className="card text-left bg-light shadow p-3 mb-5 bg-white rounded">
                    <div className="card-header">
                        <div className="row justify-content-between">
                            <h4>{agency.agencyName}</h4>
                            <h4>Account #: {agency.agencyAccountNumber}</h4>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-12">
                                <p><strong>Parent Organization:</strong> {agency.agencyParentOrganization}</p>
                            </div>
                        </div>
                        <div className="row justify-content-start">
                            <div className="col-3">
                                <p className="mb-1"><strong>Mailing Address:</strong></p>
                                <p className="mb-0">{agency.agencyMailingStreetAddress}</p>
                                <p>{agency.agencyMailingCity}, {agency.agencyMailingState}  {agency.agencyMailingZipCode}</p>
                            </div>
                            <div className="col-3">
                                <p className="mb-1"><strong>Physical Address:</strong></p>
                                <p className="mb-0">{agency.agencyPhysicalStreetAddress}</p>
                                <p>{agency.agencyPhysicalCity}, {agency.agencyPhysicalState}  {agency.agencyPhysicalZipCode}</p>
                            </div>
                            <div className="col-3">
                                <p className="mb-1"><strong>WebStore Login:</strong></p>
                                <p className="mb-3">{agency.agencyWebstoreLogin}</p>
                                <p className="mb-1"><strong>WebStore Password:</strong></p>
                                <p className="mb-0">{agency.agencyWebstorePassword}</p>
                            </div>
                            <div className="col-3">
                                <p className="mb-1"><strong>Scheduling Login:</strong></p>
                                <p className="mb-3">{agency.agencySchedulingLogin}</p>
                                <p className="mb-1"><strong>Scheduling Password:</strong></p>
                                <p className="mb-0">{agency.agencySchedulingPassword}</p>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default AgencyItem;