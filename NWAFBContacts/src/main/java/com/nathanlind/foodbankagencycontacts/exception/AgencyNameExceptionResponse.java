package com.nathanlind.foodbankagencycontacts.exception;

public class AgencyNameExceptionResponse {

    private String agencyName;

    public AgencyNameExceptionResponse(String agencyName) {
        this.agencyName = agencyName;
    }

    public String getAgencyName() {
        return agencyName;
    }

    public void setAgencyName(String agencyName) {
        this.agencyName = agencyName;
    }

}
