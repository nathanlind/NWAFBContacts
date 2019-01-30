package com.nathanlind.foodbankagencycontacts.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Agency {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Agency Name is required.")
    @Column(unique = true)
    private String agencyName;

    @NotBlank(message = "Account Number is required.")
    @Column(updatable = false, unique = true)
    private String agencyAccountNumber;

    private String agencyParentOrganization;
    private String agencyMailingStreetAddress;
    private String agencyMailingCity;
    private String agencyMailingState;
    private String agencyMailingZipCode;
    private String agencyPhysicalStreetAddress;
    private String agencyPhysicalCity;
    private String agencyPhysicalState;
    private String agencyPhysicalZipCode;
    private String agencyWebstoreLogin;
    private String agencyWebstorePassword;
    private String agencySchedulingLogin;
    private String agencySchedulingPassword;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "agency")
    @JsonIgnore
    private List<Contact> contacts = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "agency")
    @JsonIgnore
    private List<Note> notes = new ArrayList<>();


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

    public String getAgencyMailingStreetAddress() {
        return agencyMailingStreetAddress;
    }

    public void setAgencyMailingStreetAddress(String agencyMailingStreetAddress) {
        this.agencyMailingStreetAddress = agencyMailingStreetAddress;
    }

    public String getAgencyMailingCity() {
        return agencyMailingCity;
    }

    public void setAgencyMailingCity(String agencyMailingCity) {
        this.agencyMailingCity = agencyMailingCity;
    }

    public String getAgencyMailingState() {
        return agencyMailingState;
    }

    public void setAgencyMailingState(String agencyMailingState) {
        this.agencyMailingState = agencyMailingState;
    }

    public String getAgencyMailingZipCode() {
        return agencyMailingZipCode;
    }

    public void setAgencyMailingZipCode(String agencyMailingZipCode) {
        this.agencyMailingZipCode = agencyMailingZipCode;
    }

    public String getAgencyPhysicalStreetAddress() {
        return agencyPhysicalStreetAddress;
    }

    public void setAgencyPhysicalStreetAddress(String agencyPhysicalStreetAddress) {
        this.agencyPhysicalStreetAddress = agencyPhysicalStreetAddress;
    }

    public String getAgencyPhysicalCity() {
        return agencyPhysicalCity;
    }

    public void setAgencyPhysicalCity(String agencyPhysicalCity) {
        this.agencyPhysicalCity = agencyPhysicalCity;
    }

    public String getAgencyPhysicalState() {
        return agencyPhysicalState;
    }

    public void setAgencyPhysicalState(String agencyPhysicalState) {
        this.agencyPhysicalState = agencyPhysicalState;
    }

    public String getAgencyPhysicalZipCode() {
        return agencyPhysicalZipCode;
    }

    public void setAgencyPhysicalZipCode(String agencyPhysicalZipCode) {
        this.agencyPhysicalZipCode = agencyPhysicalZipCode;
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

    public List<Contact> getContacts() {
        return contacts;
    }

    public void setContacts(List<Contact> contacts) {
        this.contacts = contacts;
    }

    public List<Note> getNotes() {
        return notes;
    }

    public void setNotes(List<Note> notes) {
        this.notes = notes;
    }
}
