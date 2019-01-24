package com.nathanlind.foodbankagencycontacts.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
public class Agency {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Agency Name is required")
    private String agencyName;

    @NotBlank(message = "Account Number is required")
    @Column(updatable = false, unique = true)
    private String agencyAccountNumber;

    private String agencyParentOrganization;
    private String agencyMailingAddress;
    private String agencyPhysicalAddress;
    private String agencyWebstoreLogin;
    private String agencyWebstorePassword;
    private String agencySchedulingLogin;
    private String agencySchedulingPassword;


    private Agency() {

    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAgencyName() {
        return agencyName;
    }

    public void setAgencyName(String agencyName) {
        this.agencyName = agencyName;
    }

    public String getAgencyAccountNumber() {
        return agencyAccountNumber;
    }

    public void setAgencyAccountNumber(String agencyAccountNumber) {
        this.agencyAccountNumber = agencyAccountNumber;
    }

    public String getAgencyParentOrganization() {
        return agencyParentOrganization;
    }

    public void setAgencyParentOrganization(String agencyParentOrganization) {
        this.agencyParentOrganization = agencyParentOrganization;
    }

    public String getAgencyMailingAddress() {
        return agencyMailingAddress;
    }

    public void setAgencyMailingAddress(String agencyMailingAddress) {
        this.agencyMailingAddress = agencyMailingAddress;
    }

    public String getAgencyPhysicalAddress() {
        return agencyPhysicalAddress;
    }

    public void setAgencyPhysicalAddress(String agencyPhysicalAddress) {
        this.agencyPhysicalAddress = agencyPhysicalAddress;
    }

    public String getAgencyWebstoreLogin() {
        return agencyWebstoreLogin;
    }

    public void setAgencyWebstoreLogin(String agencyWebstoreLogin) {
        this.agencyWebstoreLogin = agencyWebstoreLogin;
    }

    public String getAgencyWebstorePassword() {
        return agencyWebstorePassword;
    }

    public void setAgencyWebstorePassword(String agencyWebstorePassword) {
        this.agencyWebstorePassword = agencyWebstorePassword;
    }

    public String getAgencySchedulingLogin() {
        return agencySchedulingLogin;
    }

    public void setAgencySchedulingLogin(String agencySchedulingLogin) {
        this.agencySchedulingLogin = agencySchedulingLogin;
    }

    public String getAgencySchedulingPassword() {
        return agencySchedulingPassword;
    }

    public void setAgencySchedulingPassword(String agencySchedulingPassword) {
        this.agencySchedulingPassword = agencySchedulingPassword;
    }
}
