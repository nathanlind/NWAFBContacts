package com.nathanlind.foodbankagencycontacts.service;

import com.nathanlind.foodbankagencycontacts.model.Agency;
import com.nathanlind.foodbankagencycontacts.model.Contact;
import com.nathanlind.foodbankagencycontacts.repository.AgencyRepository;
import com.nathanlind.foodbankagencycontacts.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;

    @Autowired
    private AgencyRepository agencyRepository;


    public Contact createOrUpdateContact(String agencyAccountNumber, Contact contact) {
        Agency agency = agencyRepository.findByAgencyAccountNumber(agencyAccountNumber);

        contact.setAgency(agency);

        return contactRepository.save(contact);
    }

    public Optional<Contact> findById(Long contactId) {
        return contactRepository.findById(contactId);
    }

    public Iterable<Contact> findAllContacts() {
        return contactRepository.findAll();
    }

    public Iterable<Contact> findContactsByAgency(Agency agency) {
        return contactRepository.findByAgencyOrderByContactNameAsc(agency);
    }

    public void deleteContactById(Long contactId) {
        contactRepository.deleteById(contactId);
    }
}
