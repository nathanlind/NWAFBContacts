import React from 'react';
import { Link } from "react-router-dom";

const AddNewAgencyButton = () => {
    return (
        <div className="container">
            <div className="row justify-content-start">
                    <Link to="addAgency" className="btn btn-lg btn-color-green mb-4">
                        Add New Agency
                    </Link>
            </div>
        </div>
    );
};

export default AddNewAgencyButton;