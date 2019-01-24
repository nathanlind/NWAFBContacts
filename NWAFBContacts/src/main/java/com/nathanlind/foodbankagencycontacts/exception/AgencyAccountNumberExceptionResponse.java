package com.nathanlind.foodbankagencycontacts.exception;

public class AgencyAccountNumberExceptionResponse {

    private String agencyAccountNumber;

    public AgencyAccountNumberExceptionResponse(String agencyAccountNumber) {
        this.agencyAccountNumber = agencyAccountNumber;
    }

    public String getAgencyAccountNumber() {
        return agencyAccountNumber;
    }

    public void setAgencyAccountNumber(String agencyAccountNumber) {
        this.agencyAccountNumber = agencyAccountNumber;
    }
}
