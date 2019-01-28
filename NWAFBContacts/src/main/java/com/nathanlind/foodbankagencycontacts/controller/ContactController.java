package com.nathanlind.foodbankagencycontacts.controller;


import com.nathanlind.foodbankagencycontacts.model.Agency;
import com.nathanlind.foodbankagencycontacts.model.Contact;
import com.nathanlind.foodbankagencycontacts.service.AgencyService;
import com.nathanlind.foodbankagencycontacts.service.ContactService;
import com.nathanlind.foodbankagencycontacts.service.ValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/agency")
@CrossOrigin
public class ContactController {

    @Autowired
    private ContactService contactService;

    @Autowired
    private AgencyService agencyService;

    @Autowired
    private ValidationErrorService validationErrorService;



    @GetMapping("/{agencyAccountNumber}/contact/all")
    public Iterable<Contact> getContacts(@PathVariable String agencyAccountNumber) {
        Agency agency = agencyService.findAgencyByAccountNumber(agencyAccountNumber);
        return contactService.findContactsByAgency(agency);
    }


    @PostMapping("/{agencyAccountNumber}/contact")
    public ResponseEntity<?> createNewContact(@Valid @RequestBody Contact contact,
                                              BindingResult result, @PathVariable String agencyAccountNumber) {

        ResponseEntity<?> errorMap = validationErrorService.MapValidationService(result);
        
        if (errorMap != null) {
            return errorMap;
        }

        Contact newContact = contactService.createOrUpdateContact(agencyAccountNumber, contact);
        return new ResponseEntity<Contact>(newContact, HttpStatus.CREATED);
    }

    @DeleteMapping("/{agencyAccountNumber}/contact/{contactId}")
    public ResponseEntity<?> deleteContact(@PathVariable Long contactId) {
        contactService.deleteContactById(contactId);

        return new ResponseEntity<String>("Contact was deleted.", HttpStatus.OK);
    }
}
