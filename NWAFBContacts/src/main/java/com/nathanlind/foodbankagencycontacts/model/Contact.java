package com.nathanlind.foodbankagencycontacts.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Entity
public class Contact {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Contact Name is required.")
    private String contactName;

    @NotBlank(message = "Phone number is required.")
    private String contactPhoneNumber;

    @Email(message = "Enter a valid email address.")
    @NotBlank(message = "Email Address is required.")
    private String contactEmailAddress;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="agency_id", updatable = false, nullable = false)
    @JsonIgnore
    private Agency agency;


    private Contact() {

    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContactName() {
        return contactName;
    }

    public void setContactName(String contactName) {
        this.contactName = contactName;
    }

    public String getContactPhoneNumber() {
        return contactPhoneNumber;
    }

    public void setContactPhoneNumber(String contactPhoneNumber) {
        this.contactPhoneNumber = contactPhoneNumber;
    }

    public String getContactEmailAddress() {
        return contactEmailAddress;
    }

    public void setContactEmailAddress(String contactEmailAddress) {
        this.contactEmailAddress = contactEmailAddress;
    }

    public Agency getAgency() {
        return agency;
    }

    public void setAgency(Agency agency) {
        this.agency = agency;
    }


    @Override
    public String toString() {
        return "Contact{" +
                "id=" + id +
                ", contactName='" + contactName + '\'' +
                ", contactPhoneNumber='" + contactPhoneNumber + '\'' +
                ", contactEmailAddress='" + contactEmailAddress + '\'' +
                ", agency=" + agency +
                '}';
    }
}
