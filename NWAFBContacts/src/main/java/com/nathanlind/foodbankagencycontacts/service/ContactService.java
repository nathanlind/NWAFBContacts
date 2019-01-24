package com.nathanlind.foodbankagencycontacts.service;

import com.nathanlind.foodbankagencycontacts.model.Contact;
import com.nathanlind.foodbankagencycontacts.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;

    public Contact createOrUpdateContact(Contact contact) {
        return contactRepository.save(contact);
    }

    public Iterable<Contact> findAllContacts() {
        return contactRepository.findAll();
    }
}
