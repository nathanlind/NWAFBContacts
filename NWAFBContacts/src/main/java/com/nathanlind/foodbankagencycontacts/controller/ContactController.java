package com.nathanlind.foodbankagencycontacts.controller;


import com.nathanlind.foodbankagencycontacts.model.Contact;
import com.nathanlind.foodbankagencycontacts.service.ContactService;
import com.nathanlind.foodbankagencycontacts.service.ValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/agency/{agencyAccountNumber}/contact")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @Autowired
    private ValidationErrorService validationErrorService;

    @GetMapping("/all")
    public Iterable<Contact> getAllContacts() {
        return contactService.findAllContacts();
    }



    @PostMapping("")
    public ResponseEntity<?> createNewAgency(@Valid @RequestBody Contact contact, BindingResult result) {

        ResponseEntity<?> errorMap = validationErrorService.MapValidationService(result);
        
        if (errorMap != null) {
            return errorMap;
        }

        Contact newContact = contactService.createOrUpdateContact(contact);
        return new ResponseEntity<Contact>(contact, HttpStatus.CREATED);
    }
}
