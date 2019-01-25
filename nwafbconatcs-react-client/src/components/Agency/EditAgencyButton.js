import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EditAgencyButton = () => {
    return (
        <div>
            <div className="btn-group mr-2" role="group">
                <button type="button" className="btn btn-secondary"><FontAwesomeIcon icon="edit" /></button>
                <button type="button" className="btn btn-color-red"><FontAwesomeIcon icon="trash" /></button>
            </div>
        </div>
    );
};

export default EditAgencyButton;